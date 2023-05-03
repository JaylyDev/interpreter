import { ModalFormData } from "@minecraft/server-ui";
import { internal } from './properities';
import { Player, system } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
import 'json-stringify';
import { highlightJS } from "code-highlight/highlight";

interface PlayerStorage {
  player: Player;
  textField: string;
  timestamp: number;
};

const Memory: PlayerStorage[] = [];

export async function evalulateJavaScriptCode (source: string) {
  /**
   * This object controls what variable from a module
   * can be used in the interpreter.
   */
  const ctx = {
    // Enables dynamic import when compiling scripts using webpack and webpackIgnore is enabled.
    ...await import("@minecraft/server"/* webpackIgnore: true */),
    ...await import("@minecraft/server-ui"/* webpackIgnore: true */),
    ...await import("@minecraft/server-gametest"/* webpackIgnore: true */),
  };
  
  // server-net and server-admin are only available in dedidated servers,
  // this could be used to detect if the add-on is running on realm/world or bds
  try { Object.assign(ctx, await import("@minecraft/server-net"/* webpackIgnore: true */)); } catch (err) { if (internal === true) console.log(err); };
  try { Object.assign(ctx, await import("@minecraft/server-admin"/* webpackIgnore: true */)); } catch (err) { if (internal === true) console.log(err); };

  // editor modules
  // @ts-expect-error
  try { Object.assign(ctx, await import("@minecraft/server-editor"/* webpackIgnore: true */)); } catch (err) { if (internal === true) console.log(err); };
  // @ts-expect-error
  try { Object.assign(ctx, await import("@minecraft/server-editor-bindings"/* webpackIgnore: true */)); } catch (err) { if (internal === true) console.log(err); };

  // interpreter extension
  try { Object.assign(ctx, await import("./timers"/* webpackIgnore: true */)); } catch (err) { if (internal === true) console.log(err); };

  const callback = new Function(`{${Object.keys(ctx).join(',')}}`, `return (function () { eval(${JSON.stringify(source)}) });`)(ctx);
  callback();
}
/**
 * Receive player source code input and execute code
 * @param source
 */
export function codeExecute (source: Player) {
  // make sure form opens once a tick
  let playerIndex = Memory.findIndex(({player}) => player === source);
  if (Memory[playerIndex]?.timestamp === system.currentTick) return;

  // Save player's input data to memory
  if (playerIndex === -1) {
    const storage: PlayerStorage = {
      player: source,
      textField: '',
      timestamp: system.currentTick
    };
    playerIndex = Memory.push(storage) - 1;
  } else {
    Memory[playerIndex].timestamp = system.currentTick;
  };

  // ModalForm settings
  const ModalForm = new ModalFormData();
  ModalForm.title('JavaScript Interpreter');
  ModalForm.textField('Text Field', 'Type here', Memory.find(({player}) => player === source)?.textField);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then((response) => {
    if (response.canceled) return console.log(`Interpreter form was canceled by the player (${response.cancelationReason})`);
    const { formValues } = response;
    const [ input ]: string[] = formValues;
    const startTime: number = new Date().getTime();

    if (/^[A-Za-z0-9]*/.test(input) && input.length > 0) source.sendMessage(`${highlightJS(input)}`);
    Memory[playerIndex].textField = input;
    if (internal === true) console.warn(`JavaScript: §6Program starts at: ${new Date()}`);

    evalulateJavaScriptCode(input)
    .then(() => {
      if (internal === true) console.warn(`JavaScript: §aAll checks have passed. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
    })
    .catch((error) => {
      ErrorHandiler(error, startTime, source);
    });
  })
  .catch((error) => {
    ErrorHandiler(error, Date.now(), source);
  });
};

/**
 * Filter internal callbacks from error stack trace
 * @param error Error 
 * @returns error stack
 */
export function errorStackFilterInternalCalls (error: Error): string {
  if (!error.stack) return '';
  if (internal === true) return `\n${error.stack}`;

  // stack format
  // ReferenceError: 'e' is not defined
  //   at anonymous (<input>:3)
  //   at <anonymous> (<input>:6) // remove all stack below the last input function
  //   at <anonymous> (index.js:16)
  //   at call (native)
  //   at <anonymous> (index.js:16)
  //   at <anonymous> (index.js)
  //   at o (index.js:16)

  // another stack format
  //   at <input>:1
  //   at <anonymous> (<input>:3)
  //   at <anonymous> (index.js:5875)
  //   at call (native)
  //   at <anonymous> (index.js:5771)
  //   at <anonymous> (index.js:5779)
  //   at a (index.js:5675)
  const stackTrace = error.stack.split('\n');
  // record stack trace index that passes regex
  const stackIndexes: number[] = [];
  const detectEvalInputRegex = /at <eval> \(<input>:[0-9]+\)/i;
  const detectInputRegex = /at <input>:[0-9]+/i;
  
  for (let index = 0; index < stackTrace.length; index++) {
    const errorMessage = stackTrace[index];
    if (!detectEvalInputRegex.test(errorMessage) && !detectInputRegex.test(errorMessage)) continue;
    stackIndexes.push(index);
  }
  
  const lastInputFunctionIndex = Math.max(...stackIndexes);
  // filtered stack trace without internal function calls
  const filteredStackTrace = stackTrace.filter((value, index) => index <= lastInputFunctionIndex);

  return '\n' + filteredStackTrace.join('\n');
};

/**
 * Handles error when execute code
 * Created this function to reduce source code size
 * @param error Error
 * @param startTime Date timestamp
 * @param source Player
 */
export function ErrorHandiler (error: Error, startTime: number, source: Player, language: 'JavaScript' | 'TypeScript' = 'JavaScript') {
  const MessageForm = new MessageFormData();
  let stackError: string = errorStackFilterInternalCalls(error);

  if (internal === true) {
    console.warn(`${language}: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
    console.error(String(error + stackError));
  };

  source.sendMessage(`§c${String(error+stackError)}`);
  console.log(String(error + stackError));
  
  // MessageForm settings
  MessageForm.title('Scripting Error')
    .body(String(error + stackError))
    .button1('Exit')
    .button2('Fix Your Code');
  
  // MessageForm display (Recommend put below MessageForm settings)
  MessageForm.show(source).then(MessageFormResponse => {
    const { selection } = MessageFormResponse;

    if (selection === 0) codeExecute(source);
  });
};
