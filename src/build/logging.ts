/**
 * Modifies default console.log / warn / error to include performance.now()
 */
import * as Console from 'node:console';
import * as cli from 'cli-color';

const ConsoleLog = Console.log;
const ConsoleWarn = Console.warn;
const ConsoleError = Console.error;

console.log = function log (...message: any[]) {
  ConsoleLog('[' + cli.cyan(`${performance.now().toFixed(3)} ms`) + ']', ...message);
};

console.warn = function warn (...message: any[]) {
  ConsoleWarn('[' + cli.cyan(`${performance.now().toFixed(3)} ms`) + ']', ...message);
};

console.error = function error (...message: any[]) {
  ConsoleError('[' + cli.cyan(`${performance.now().toFixed(3)} ms`) + ']', ...message);
};

console.log('Successfully modified console module');