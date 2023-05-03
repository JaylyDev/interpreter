import hljs from 'highlight.js/lib/core';
import javascript from 'code-highlight/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import { internal } from 'properities';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

/**
 * List of Minecraft Color Codes and Format Codes
 */
export enum MinecraftColors {
  // List of Minecraft Color Codes
  black = '§0',
  dark_blue = '§1',
  dark_green = '§2',
  dark_aqua = '§3',
  dark_red = '§4',
  dark_purple = '§5',
  gold = '§6',
  gray = '§7',
  dark_gray = '§8',
  blue = '§9',
  green = '§a',
  aqua = '§b',
  red = '§c',
  light_purple = '§d',
  yellow = '§e',
  white = '§f',
  // List of Minecraft Format Codes
  obfuscated = '§k',
  bold = '§l',
  ltalic = '§o',
  reset = '§r'
};

enum hljsClassNames {
  'hljs-keyword' = MinecraftColors.blue,
  'hljs-link' = MinecraftColors.aqua,
  'hljs-literal' = MinecraftColors.aqua,
  'hljs-section' = MinecraftColors.aqua,
  'hljs-selector-tag' = MinecraftColors.aqua,
  'hljs-addition' = MinecraftColors.red,
  'hljs-attribute' = MinecraftColors.red,
  'hljs-built_in' = MinecraftColors.red,
  'hljs-bullet' = MinecraftColors.red,
  'hljs-name' = MinecraftColors.red,
  'hljs-string' = MinecraftColors.red,
  'hljs-symbol' = MinecraftColors.red,
  'hljs-template-tag' = MinecraftColors.red,
  'hljs-template-variable' = MinecraftColors.red,
  'hljs-title' = MinecraftColors.red,
  'hljs-type' = MinecraftColors.red,
  'hljs-variable' = MinecraftColors.red,
  'hljs-comment' = MinecraftColors.dark_green,
  'hljs-deletion' = MinecraftColors.dark_green,
  'hljs-meta' = MinecraftColors.dark_green,
  'hljs-quote' = MinecraftColors.dark_green,
  'hljs-emphasis' = MinecraftColors.ltalic,
  'hljs-doctag' = MinecraftColors.bold,
  // 'hljs-keyword' = MinecraftColors.bold,
  // 'hljs-literal' = MinecraftColors.bold,
  // 'hljs-name' = MinecraftColors.bold,
  // 'hljs-section' = MinecraftColors.bold,
  // 'hljs-selector-tag' = MinecraftColors.bold,
  'hljs-strong' = MinecraftColors.bold,
  // 'hljs-title' = MinecraftColors.bold,
  // 'hljs-type' = MinecraftColors.bold
  
  // Following class names are not listed in css files
  'hljs-function' = MinecraftColors.yellow,
  'hljs-class' = MinecraftColors.aqua,
  'hljs-property' = MinecraftColors.white,
  'hljs-title class_' = hljsClassNames['hljs-class'],
  'hljs-variable language_' = hljsClassNames['hljs-variable'],
  'hljs-title function_' = hljsClassNames['hljs-function'],
  'hljs-params' = MinecraftColors.aqua,
  'hljs-number' = MinecraftColors.green,
  'hljs-subst' = MinecraftColors.green,
  'hljs-attr' = MinecraftColors.aqua
};

enum urlcomponents {
  '&#x27;' = "'",
  '&quot;' = '"',
  '&gt;' = '>',
  '&lt;' = '<',
  '</span>' = '§r'
}

/**
 * Highlight JS code using highlight.js
 * @param code JS code
 */
export function highlightJS (code: string): string {
  let highlighted = hljs.highlightAuto(code).value;

  // internal debug: returns raw HTML highlighted code
  if (internal === true) console.log(highlighted);

  for (let hljsclass in hljsClassNames) {
    let regex = new RegExp(`\<span class="${hljsclass}"\>`, 'g');
    highlighted = highlighted.replace(regex, hljsClassNames[hljsclass]);
  };

  for (let component in urlcomponents) {
    let regex = new RegExp(`${component}`, 'g');
    highlighted = highlighted.replace(regex, urlcomponents[component]);
  };

  return highlighted;
}
/**
 * Highlight JS code using highlight.js
 * @param code JS code
 */
export function highlightTS (code: string): string {
  let highlighted = hljs.highlightAuto(code).value;

  console.log(highlighted);

  for (let hljsclass in hljsClassNames) {
    let regex = new RegExp(`\<span class="${hljsclass}"\>`, 'g');
    highlighted = highlighted.replace(regex, hljsClassNames[hljsclass]);
  };

  for (let component in urlcomponents) {
    let regex = new RegExp(`${component}`, 'g');
    highlighted = highlighted.replace(regex, urlcomponents[component]);
  };

  return highlighted;
}