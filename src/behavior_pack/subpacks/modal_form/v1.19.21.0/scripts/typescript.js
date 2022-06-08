// TypeScript terminal for GameTest Framework (experimental)
// Dependencies: @types/mojang-minecraft@0.1.6 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.6.tgz>
//               @types/mojang-gametest@0.1.5 <https://registry.npmjs.org/@types/mojang-gametest/-/mojang-gametest-0.1.4.tgz>
//               @types/mojang-minecraft-ui@0.1.0 <https://registry.npmjs.org/@types/mojang-minecraft-ui/-/mojang-minecraft-ui-0.1.0.tgz>
//               @types/mojang-minecraft-server-admin@0.1.0 <https://registry.npmjs.org/@types/mojang-minecraft-server-admin/-/mojang-minecraft-server-admin-0.1.0.tgz>
//               @types/mojang-net@0.1.0 <https://registry.npmjs.org/@types/mojang-net/-/mojang-net-0.1.0.tgz>
//               typescript@4.6.2 <https://www.typescriptlang.org/>
// Created by: https://github.com/JaylyDev

import { world, ItemStack, MinecraftItemTypes, Player } from "mojang-minecraft"
import { players, whitelist, devBuild, addon_prefix as prefix } from "scripts/credentials/access.js"
import { client } from 'scripts/gametests/commands/message.js'
import { codeExecute } from "./javascript.js"
import ts from "scripts/typescript/typescript.js"
import { lib_d_ts } from "scripts/typescript/lib.d.js"
import { lib_dom_d_ts } from "scripts/typescript/lib.dom.d.js"
import { lib_dom_iterable_d_ts } from "scripts/typescript/lib.dom.iterable.d.js"
import { lib_es2015_collection_d_ts } from "scripts/typescript/lib.es2015.collection.d.js"
import { lib_es2015_core_d_ts } from "scripts/typescript/lib.es2015.core.d.js"
import { lib_es2015_d_ts } from "scripts/typescript/lib.es2015.d.js"
import { lib_es2015_generator_d_ts } from "scripts/typescript/lib.es2015.generator.d.js"
import { lib_es2015_iterable_d_ts } from "scripts/typescript/lib.es2015.iterable.d.js"
import { lib_es2015_promise_d_ts } from "scripts/typescript/lib.es2015.promise.d.js"
import { lib_es2015_proxy_d_ts } from "scripts/typescript/lib.es2015.proxy.d.js"
import { lib_es2015_reflect_d_ts } from "scripts/typescript/lib.es2015.reflect.d.js"
import { lib_es2015_symbol_d_ts } from "scripts/typescript/lib.es2015.symbol.d.js"
import { lib_es2015_symbol_wellknown_d_ts } from "scripts/typescript/lib.es2015.symbol.wellknown.d.js"
import { lib_es2016_array_include_d_ts } from "scripts/typescript/lib.es2016.array.include.d.js"
import { lib_es2016_d_ts } from "scripts/typescript/lib.es2016.d.js"
import { lib_es2016_full_d_ts } from "scripts/typescript/lib.es2016.full.d.js"
import { lib_es2017_d_ts } from "scripts/typescript/lib.es2017.d.js"
import { lib_es2017_full_d_ts } from "scripts/typescript/lib.es2017.full.d.js"
import { lib_es2017_intl_d_ts } from "scripts/typescript/lib.es2017.intl.d.js"
import { lib_es2017_object_d_ts } from "scripts/typescript/lib.es2017.object.d.js"
import { lib_es2017_sharedmemory_d_ts } from "scripts/typescript/lib.es2017.sharedmemory.d.js"
import { lib_es2017_string_d_ts } from "scripts/typescript/lib.es2017.string.d.js"
import { lib_es2017_typedarrays_d_ts } from "scripts/typescript/lib.es2017.typedarrays.d.js"
import { lib_es2018_asyncgenerator_d_ts } from "scripts/typescript/lib.es2018.asyncgenerator.d.js"
import { lib_es2018_asynciterable_d_ts } from "scripts/typescript/lib.es2018.asynciterable.d.js"
import { lib_es2018_d_ts } from "scripts/typescript/lib.es2018.d.js"
import { lib_es2018_full_d_ts } from "scripts/typescript/lib.es2018.full.d.js"
import { lib_es2018_intl_d_ts } from "scripts/typescript/lib.es2018.intl.d.js"
import { lib_es2018_promise_d_ts } from "scripts/typescript/lib.es2018.promise.d.js"
import { lib_es2018_regexp_d_ts } from "scripts/typescript/lib.es2018.regexp.d.js"
import { lib_es2019_array_d_ts } from "scripts/typescript/lib.es2019.array.d.js"
import { lib_es2019_d_ts } from "scripts/typescript/lib.es2019.d.js"
import { lib_es2019_full_d_ts } from "scripts/typescript/lib.es2019.full.d.js"
import { lib_es2019_object_d_ts } from "scripts/typescript/lib.es2019.object.d.js"
import { lib_es2019_string_d_ts } from "scripts/typescript/lib.es2019.string.d.js"
import { lib_es2019_symbol_d_ts } from "scripts/typescript/lib.es2019.symbol.d.js"
import { lib_es2020_bigint_d_ts } from "scripts/typescript/lib.es2020.bigint.d.js"
import { lib_es2020_d_ts } from "scripts/typescript/lib.es2020.d.js"
import { lib_es2020_full_d_ts } from "scripts/typescript/lib.es2020.full.d.js"
import { lib_es2020_intl_d_ts } from "scripts/typescript/lib.es2020.intl.d.js"
import { lib_es2020_promise_d_ts } from "scripts/typescript/lib.es2020.promise.d.js"
import { lib_es2020_sharedmemory_d_ts } from "scripts/typescript/lib.es2020.sharedmemory.d.js"
import { lib_es2020_string_d_ts } from "scripts/typescript/lib.es2020.string.d.js"
import { lib_es2020_symbol_wellknown_d_ts } from "scripts/typescript/lib.es2020.symbol.wellknown.d.js"
import { lib_es2021_d_ts } from "scripts/typescript/lib.es2021.d.js"
import { lib_es2021_full_d_ts } from "scripts/typescript/lib.es2021.full.d.js"
import { lib_es2021_intl_d_ts } from "scripts/typescript/lib.es2021.intl.d.js"
import { lib_es2021_promise_d_ts } from "scripts/typescript/lib.es2021.promise.d.js"
import { lib_es2021_string_d_ts } from "scripts/typescript/lib.es2021.string.d.js"
import { lib_es2021_weakref_d_ts } from "scripts/typescript/lib.es2021.weakref.d.js"
import { lib_es2022_array_d_ts } from "scripts/typescript/lib.es2022.array.d.js"
import { lib_es2022_d_ts } from "scripts/typescript/lib.es2022.d.js"
import { lib_es2022_error_d_ts } from "scripts/typescript/lib.es2022.error.d.js"
import { lib_es2022_full_d_ts } from "scripts/typescript/lib.es2022.full.d.js"
import { lib_es2022_object_d_ts } from "scripts/typescript/lib.es2022.object.d.js"
import { lib_es2022_string_d_ts } from "scripts/typescript/lib.es2022.string.d.js"
import { lib_es5_d_ts } from "scripts/typescript/lib.es5.d.js"
import { lib_es6_d_ts } from "scripts/typescript/lib.es6.d.js"
import { lib_esnext_d_ts } from "scripts/typescript/lib.esnext.d.js"
import { lib_esnext_full_d_ts } from "scripts/typescript/lib.esnext.full.d.js"
import { lib_esnext_intl_d_ts } from "scripts/typescript/lib.esnext.intl.d.js"
import { lib_esnext_promise_d_ts } from "scripts/typescript/lib.esnext.promise.d.js"
import { lib_esnext_string_d_ts } from "scripts/typescript/lib.esnext.string.d.js"
import { lib_scripthost_d_ts } from "scripts/typescript/lib.scripthost.d.js"
import { lib_webworker_importscripts_d_ts } from "scripts/typescript/lib.webworker.importscripts.d.js"
import { lib_webworker_iterable_d_ts } from "scripts/typescript/lib.webworker.iterable.d.js"
import { lib_gametest_d_ts } from "scripts/typescript/lib.gametest.d.js"
import * as mojanggametest_d_ts from "./@types/mojang-gametest/index.d.js"
import * as mojangminecraft_d_ts from "./@types/mojang-minecraft/index.d.js"
import * as mojangminecraftserveradmin_d_ts from "./@types/mojang-minecraft-server-admin/index.d.js"
import * as mojangminecraftui_d_ts from "./@types/mojang-minecraft-ui/index.d.js"
import * as mojangnet_d_ts from "./@types/mojang-net/index.d.js"
import { ModalFormData, MessageFormData, ActionFormData } from "mojang-minecraft-ui"
import { base64_d_ts } from "scripts/base64.d.js"
import { clonejson_d_ts } from "scripts/clonejson.d.js"
import { sha256_d_ts } from "scripts/sha256.d.js"
import { viewObj_d_ts } from "scripts/viewObj.d.js"
import { blueimp_md5_d_ts } from "scripts/blueimp-md5/index.d.js"
import { Validator } from "./jsonschema/lib/index.js"
import * as mojangmodules from "./@types/module.d.js"

class tsconfig {
  static validate = () => new Validator().validate(this.value, this.schema);
  static schema = { title: "", $schema: "http://json-schema.org/draft-04/schema#", id: "https://json.schemastore.org/tsconfig", definitions: { "//": { explainer: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#overview", reference: "https://www.typescriptlang.org/tsconfig", "reference metadata": "https://github.com/microsoft/TypeScript-Website/blob/v2/packages/tsconfig-reference/scripts/tsconfigRules.ts" }, compilerOptionsDefinition: { properties: { compilerOptions: { type: "object", description: "", properties: { charset: { description: "", type: "string", markdownDescription: "" }, composite: { description: "", type: "boolean", default: !0, markdownDescription: "" }, declaration: { description: "", type: "boolean", default: !1, markdownDescription: "" }, declarationDir: { description: "", type: ["string", "null"], markdownDescription: "" }, diagnostics: { description: "", type: "boolean", markdownDescription: "" }, disableReferencedProjectLoad: { description: "", type: "boolean", markdownDescription: "" }, noPropertyAccessFromIndexSignature: { description: "", type: "boolean", markdownDescription: "" }, emitBOM: { description: "", type: "boolean", default: !1, markdownDescription: "" }, emitDeclarationOnly: { description: "", type: "boolean", default: !1, markdownDescription: "" }, exactOptionalPropertyTypes: { description: "", type: "boolean", default: !1, markdownDescription: "" }, incremental: { description: "", type: "boolean" }, tsBuildInfoFile: { description: "", default: ".tsbuildinfo", type: "string", markdownDescription: "" }, inlineSourceMap: { description: "", type: "boolean", default: !1, markdownDescription: "" }, inlineSources: { description: "", type: "boolean", default: !1, markdownDescription: "" }, jsx: { description: "", enum: ["preserve", "react", "react-jsx", "react-jsxdev", "react-native"] }, reactNamespace: { description: "", type: "string", default: "React", markdownDescription: "" }, jsxFactory: { description: "", type: "string", default: "React.createElement", markdownDescription: "" }, jsxFragmentFactory: { description: "", type: "string", default: "React.Fragment", markdownDescription: "" }, jsxImportSource: { description: "", type: "string", default: "react", markdownDescription: "" }, listFiles: { description: "", type: "boolean", default: !1, markdownDescription: "" }, mapRoot: { description: "", type: "string", markdownDescription: "" }, module: { description: "", type: "string", anyOf: [{ enum: ["CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ES2020", "ESNext", "None", "ES2022", "Node12", "NodeNext"] }], markdownDescription: "" }, newLine: { description: "", type: "string", anyOf: [{ enum: ["crlf", "lf"] }], markdownDescription: "" }, noEmit: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noEmitHelpers: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noEmitOnError: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noImplicitAny: { description: "", type: "boolean", markdownDescription: "" }, noImplicitThis: { description: "", type: "boolean", markdownDescription: "" }, noUnusedLocals: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noUnusedParameters: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noLib: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noResolve: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noStrictGenericChecks: { description: "", type: "boolean", default: !1, markdownDescription: "" }, skipDefaultLibCheck: { description: "", type: "boolean", default: !1, markdownDescription: "" }, skipLibCheck: { description: "", type: "boolean", default: !1, markdownDescription: "" }, outFile: { description: "", type: "string", markdownDescription: "" }, outDir: { description: "", type: "string", markdownDescription: "" }, preserveConstEnums: { description: "", type: "boolean", default: !1, markdownDescription: "" }, preserveSymlinks: { description: "", type: "boolean", default: !1, markdownDescription: "" }, preserveValueImports: { description: "", type: "boolean", default: !1, markdownDescription: "" }, preserveWatchOutput: { description: "", type: "boolean", markdownDescription: "" }, pretty: { description: "", type: "boolean", default: !0, markdownDescription: "" }, removeComments: { description: "", type: "boolean", default: !1, markdownDescription: "" }, rootDir: { description: "", type: "string", markdownDescription: "" }, isolatedModules: { description: "", type: "boolean", default: !1, markdownDescription: "" }, sourceMap: { description: "", type: "boolean", default: !1, markdownDescription: "" }, sourceRoot: { description: "", type: "string", markdownDescription: "" }, suppressExcessPropertyErrors: { description: "", type: "boolean", default: !1, markdownDescription: "" }, suppressImplicitAnyIndexErrors: { description: "", type: "boolean", default: !1, markdownDescription: "" }, stripInternal: { description: "", type: "boolean", markdownDescription: "" }, target: { description: "", type: "string", default: "ES2015", anyOf: [{ enum: ["ES3", "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ES2021", "ES2022", "ESNext"] }], markdownDescription: "" }, useUnknownInCatchVariables: { description: "", type: "boolean", default: !1, markdownDescription: "" }, watch: { description: "", type: "boolean" }, fallbackPolling: { description: "", enum: ["fixedPollingInterval", "priorityPollingInterval", "dynamicPriorityPolling", "fixedInterval", "priorityInterval", "dynamicPriority", "fixedChunkSize"] }, watchDirectory: { description: "", type: "string", enum: ["useFsEvents", "fixedPollingInterval", "dynamicPriorityPolling", "fixedChunkSizePolling"], default: "useFsEvents" }, watchFile: { description: "", type: "string", enum: ["fixedPollingInterval", "priorityPollingInterval", "dynamicPriorityPolling", "useFsEvents", "useFsEventsOnParentDirectory", "fixedChunkSizePolling"], default: "useFsEvents" }, experimentalDecorators: { description: "", type: "boolean", markdownDescription: "" }, emitDecoratorMetadata: { description: "", type: "boolean", markdownDescription: "" }, allowUnusedLabels: { description: "", type: "boolean", markdownDescription: "" }, noImplicitReturns: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noUncheckedIndexedAccess: { description: "", type: "boolean", markdownDescription: "" }, noFallthroughCasesInSwitch: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noImplicitOverride: { description: "", type: "boolean", default: !1, markdownDescription: "" }, allowUnreachableCode: { description: "", type: "boolean", markdownDescription: "" }, forceConsistentCasingInFileNames: { description: "", type: "boolean", default: !1, markdownDescription: "" }, generateCpuProfile: { description: "", type: "string", default: "profile.cpuprofile", markdownDescription: "" }, baseUrl: { description: "", type: "string", markdownDescription: "" }, paths: { description: "", type: "object", additionalProperties: { type: "array", uniqueItems: !0, items: { type: "string", description: "" } }, markdownDescription: "" }, plugins: { description: "", type: "array", items: { type: "object", properties: { name: { description: "", type: "string" } } }, markdownDescription: "" }, rootDirs: { description: "", type: "array", uniqueItems: !0, items: { type: "string" }, markdownDescription: "" }, typeRoots: { description: "", type: "array", uniqueItems: !0, items: { type: "string" }, markdownDescription: "" }, types: { description: "", type: "array", uniqueItems: !0, items: { type: "string" }, markdownDescription: "" }, traceResolution: { description: "", type: "boolean", default: !1 }, allowJs: { description: "", type: "boolean", default: !1, markdownDescription: "" }, noErrorTruncation: { description: "", type: "boolean", default: !1, markdownDescription: "" }, allowSyntheticDefaultImports: { description: "", type: "boolean", markdownDescription: "" }, noImplicitUseStrict: { description: "", type: "boolean", default: !1, markdownDescription: "" }, listEmittedFiles: { description: "", type: "boolean", default: !1, markdownDescription: "" }, disableSizeLimit: { description: "", type: "boolean", default: !1, markdownDescription: "" }, lib: { description: "", type: "array", uniqueItems: !0, items: { type: "string", anyOf: [{ enum: ["ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator", "ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy", "ES2015.Reflect", "ES2015.Symbol.WellKnown", "ES2015.Symbol", "ES2016", "ES2016.Array.Include", "ES2017", "ES2017.Intl", "ES2017.Object", "ES2017.SharedMemory", "ES2017.String", "ES2017.TypedArrays", "ES2018", "ES2018.AsyncGenerator", "ES2018.AsyncIterable", "ES2018.Intl", "ES2018.Promise", "ES2018.Regexp", "ES2019", "ES2019.Array", "ES2019.Object", "ES2019.String", "ES2019.Symbol", "ES2020", "ES2020.BigInt", "ES2020.Promise", "ES2020.String", "ES2020.Symbol.WellKnown", "ESNext", "ESNext.Array", "ESNext.AsyncIterable", "ESNext.BigInt", "ESNext.Intl", "ESNext.Promise", "ESNext.String", "ESNext.Symbol", "DOM", "DOM.Iterable", "ScriptHost", "WebWorker", "WebWorker.ImportScripts", "Webworker.Iterable", "ES7", "ES2021", "ES2020.SharedMemory", "ES2020.Intl", "ES2021.Promise", "ES2021.String", "ES2021.WeakRef", "ESNext.WeakRef", "es2021.intl"] }] }, markdownDescription: "" }, strictNullChecks: { description: "", type: "boolean", default: !1, markdownDescription: "" }, maxNodeModuleJsDepth: { description: "", type: "number", default: 0, markdownDescription: "" }, importHelpers: { description: "", type: "boolean", default: !1, markdownDescription: "" }, importsNotUsedAsValues: { description: "", default: "remove", enum: ["remove", "preserve", "error"] }, alwaysStrict: { description: "", type: "boolean", markdownDescription: "" }, strict: { description: "", type: "boolean", default: !1, markdownDescription: "" }, strictBindCallApply: { description: "", type: "boolean", default: !1, markdownDescription: "" }, downlevelIteration: { description: "", type: "boolean", default: !1, markdownDescription: "" }, checkJs: { description: "", type: "boolean", default: !1, markdownDescription: "" }, strictFunctionTypes: { description: "", type: "boolean", default: !1, markdownDescription: "" }, strictPropertyInitialization: { description: "", type: "boolean", default: !1, markdownDescription: "" }, esModuleInterop: { description: "", type: "boolean", default: !1, markdownDescription: "" }, allowUmdGlobalAccess: { description: "", type: "boolean", default: !1, markdownDescription: "" }, keyofStringsOnly: { description: "", type: "boolean", default: !1, markdownDescription: "" }, useDefineForClassFields: { description: "", type: "boolean", default: !1, markdownDescription: "" }, declarationMap: { description: "", type: "boolean", default: !1, markdownDescription: "" }, resolveJsonModule: { description: "", type: "boolean", default: !1, markdownDescription: "" }, assumeChangesOnlyAffectDirectDependencies: { description: "", type: "boolean" }, extendedDiagnostics: { description: "", type: "boolean", default: !1, markdownDescription: "" }, listFilesOnly: { description: "", type: "boolean" }, disableSourceOfProjectReferenceRedirect: { description: "", type: "boolean", markdownDescription: "" }, disableSolutionSearching: { description: "", type: "boolean", markdownDescription: "" } } } } } }, type: "object", allOf: [{ $ref: "#/definitions/compilerOptionsDefinition" }] };
  static value = {
    compilerOptions: {
      allowJs: false,
      allowSyntheticDefaultImports: true,
      allowUmdGlobalAccess: false,
      allowUnreachableCode: true,
      allowUnusedLabels: true,
      alwaysStrict: false,
      charset: "utf8",
      checkJs: false,
      composite: false,
      declaration: false,
      declarationMap: false,
      disableSizeLimit: false,
      downlevelIteration: true,
      emitBOM: false,
      emitDeclarationOnly: false,
      esModuleInterop: false,
      exactOptionalPropertyTypes: false,
      extendedDiagnostics: false,
      forceConsistentCasingInFileNames: false,
      generateCpuProfile: "profile.cpuprofile",
      importHelpers: false,
      importsNotUsedAsValues: "remove",
      inlineSourceMap: false,
      inlineSources: false,
      isolatedModules: false,
      keyofStringsOnly: false,
      listEmittedFiles: false,
      listFiles: false,
      maxNodeModuleJsDepth: 0,
      module: "ES2020",
      noEmit: false,
      noEmitHelpers: false,
      noEmitOnError: false,
      noErrorTruncation: false,
      noFallthroughCasesInSwitch: false,
      noImplicitOverride: false,
      noImplicitReturns: false,
      noImplicitUseStrict: false,
      noLib: false,
      noResolve: false,
      noStrictGenericChecks: false,
      noUnusedLocals: false,
      noUnusedParameters: false,
      preserveConstEnums: false,
      preserveSymlinks: false,
      preserveValueImports: false,
      pretty: true,
      removeComments: false,
      resolveJsonModule: false,
      skipDefaultLibCheck: false,
      skipLibCheck: false,
      sourceMap: false,
      strict: false,
      strictBindCallApply: false,
      strictFunctionTypes: false,
      strictNullChecks: false,
      strictPropertyInitialization: false,
      suppressExcessPropertyErrors: false,
      suppressImplicitAnyIndexErrors: false,
      target: "ES2020",
      traceResolution: false,
      useDefineForClassFields: false,
      useUnknownInCatchVariables: false,
      watchDirectory: "useFsEvents",
      watchFile: "useFsEvents",
      lib: [
        "ES5",
        "ES6",
        "ES2015",
        "ES2015.Collection",
        "ES2015.Core",
        "ES2015.Generator",
        "ES2015.Iterable",
        "ES2015.Promise",
        "ES2015.Proxy",
        "ES2015.Reflect",
        "ES2015.Symbol.WellKnown",
        "ES2015.Symbol",
        "ES2016",
        "ES2016.Array.Include",
        "ES2017",
        "ES2017.Intl",
        "ES2017.Object",
        "ES2017.SharedMemory",
        "ES2017.String",
        "ES2017.TypedArrays",
        "ES2018",
        "ES2018.AsyncGenerator",
        "ES2018.AsyncIterable",
        "ES2018.Intl",
        "ES2018.Promise",
        "ES2018.Regexp",
        "ES2019",
        "ES2019.Array",
        "ES2019.Object",
        "ES2019.String",
        "ES2019.Symbol",
        "ES2020",
        "ES2020.Promise",
        "ES2020.String",
        "ES2020.Symbol.WellKnown",
        "ESNext",
        "ESNext.Array",
        "ESNext.AsyncIterable",
        "ESNext.Intl",
        "ESNext.Promise",
        "ESNext.String",
        "ESNext.Symbol",
        "DOM",
        "ES7",
        "ES2021",
        "ES2020.SharedMemory",
        "ES2020.Intl",
        "ES2021.Promise",
        "ES2021.String",
        "ES2021.WeakRef",
        "ESNext.WeakRef",
        "es2021.intl",
      ],
    },
  };
};

/**
  * @param {string} sourceText - Typescript code for debugging
  * @param {ts.compilerOptions} compilerOptions
  * @param {boolean} NamespaceToggle
  * @returns {object} `{files, diagnostics, host}`
  * @throws This function can throw errors
  */
function typescriptCompiler (sourceText, compilerOptions, NamespaceToggle) {
  // List of files ready to load into debugger
  const files = {
    // Source file
    "scriptEngine.ts": sourceText,
    // Typescript typings
    "lib.d.ts": lib_d_ts, "lib.dom.d.ts": lib_dom_d_ts, "lib.dom.iterable.d.ts": "",
    "lib.es2015.collection.d.ts": lib_es2015_collection_d_ts, "lib.es2015.core.d.ts": lib_es2015_core_d_ts, "lib.es2015.d.ts": lib_es2015_d_ts, "lib.es2015.generator.d.ts": lib_es2015_generator_d_ts, "lib.es2015.iterable.d.ts": lib_es2015_iterable_d_ts, "lib.es2015.promise.d.ts": lib_es2015_promise_d_ts, "lib.es2015.proxy.d.ts": lib_es2015_proxy_d_ts, "lib.es2015.reflect.d.ts": lib_es2015_reflect_d_ts, "lib.es2015.symbol.d.ts": lib_es2015_symbol_d_ts, "lib.es2015.symbol.wellknown.d.ts": lib_es2015_symbol_wellknown_d_ts,
    "lib.es2016.array.include.d.ts": lib_es2016_array_include_d_ts, "lib.es2016.d.ts": lib_es2016_d_ts, "lib.es2016.full.d.ts": lib_es2016_full_d_ts,
    "lib.es2017.d.ts": lib_es2017_d_ts, "lib.es2017.full.d.ts": lib_es2017_full_d_ts, "lib.es2017.intl.d.ts": lib_es2017_intl_d_ts, "lib.es2017.object.d.ts": lib_es2017_object_d_ts, "lib.es2017.sharedmemory.d.ts": lib_es2017_sharedmemory_d_ts, "lib.es2017.string.d.ts": lib_es2017_string_d_ts, "lib.es2017.typedarrays.d.ts": lib_es2017_typedarrays_d_ts,
    "lib.es2018.asyncgenerator.d.ts": lib_es2018_asyncgenerator_d_ts, "lib.es2018.asynciterable.d.ts": lib_es2018_asynciterable_d_ts, "lib.es2018.d.ts": lib_es2018_d_ts, "lib.es2018.full.d.ts": lib_es2018_full_d_ts, "lib.es2018.intl.d.ts": lib_es2018_intl_d_ts, "lib.es2018.promise.d.ts": lib_es2018_promise_d_ts, "lib.es2018.regexp.d.ts": lib_es2018_regexp_d_ts,
    "lib.es2019.array.d.ts": lib_es2019_array_d_ts, "lib.es2019.d.ts": lib_es2019_d_ts, "lib.es2019.full.d.ts": lib_es2019_full_d_ts, "lib.es2019.object.d.ts": lib_es2019_object_d_ts, "lib.es2019.string.d.ts": lib_es2019_string_d_ts, "lib.es2019.symbol.d.ts": lib_es2019_symbol_d_ts,
    "lib.es2020.bigint.d.ts": "", "lib.es2020.d.ts": lib_es2020_d_ts, "lib.es2020.full.d.ts": lib_es2020_full_d_ts, "lib.es2020.intl.d.ts": lib_es2020_intl_d_ts, "lib.es2020.promise.d.ts": lib_es2020_promise_d_ts, "lib.es2020.sharedmemory.d.ts": lib_es2020_sharedmemory_d_ts, "lib.es2020.string.d.ts": lib_es2020_string_d_ts, "lib.es2020.symbol.wellknown.d.ts": lib_es2020_symbol_wellknown_d_ts,
    "lib.es2021.d.ts": lib_es2021_d_ts, "lib.es2021.full.d.ts": lib_es2021_full_d_ts, "lib.es2021.intl.d.ts": lib_es2021_intl_d_ts, "lib.es2021.promise.d.ts": lib_es2021_promise_d_ts, "lib.es2021.string.d.ts": lib_es2021_string_d_ts, "lib.es2021.weakref.d.ts": lib_es2021_weakref_d_ts, "lib.es2022.array.d.ts": lib_es2022_array_d_ts, "lib.es2022.d.ts": lib_es2022_d_ts, "lib.es2022.error.d.ts": lib_es2022_error_d_ts, "lib.es2022.full.d.ts": lib_es2022_full_d_ts, "lib.es2022.object.d.ts": lib_es2022_object_d_ts, "lib.es2022.string.d.ts": lib_es2022_string_d_ts, "lib.es5.d.ts": lib_es5_d_ts, "lib.es6.d.ts": lib_es6_d_ts,
    "lib.esnext.d.ts": lib_esnext_d_ts, "lib.esnext.full.d.ts": lib_esnext_full_d_ts, "lib.esnext.intl.d.ts": lib_esnext_intl_d_ts, "lib.esnext.promise.d.ts": lib_esnext_promise_d_ts, "lib.esnext.string.d.ts": lib_esnext_string_d_ts, "lib.scripthost.d.ts": "", "lib.webworker.importscripts.d.ts": "", "lib.webworker.iterable.d.ts": "",
    // Added this because GameTest engine is different from other tools
    "lib.gametest.d.ts": lib_gametest_d_ts,
    // Mojang modules typings
    "native.d.ts": mojangmodules.default,
    "mojang-gametest.d.ts": NamespaceToggle === true ? mojanggametest_d_ts.default : mojanggametest_d_ts.Namespace,
    "mojang-minecraft.d.ts": NamespaceToggle === true ? mojangminecraft_d_ts.default : mojangminecraft_d_ts.Namespace,
    "mojang-minecraft-server-admin.d.ts": NamespaceToggle === true ? mojangminecraftserveradmin_d_ts.default : mojangminecraftserveradmin_d_ts.Namespace,
    "mojang-minecraft-ui.d.ts": NamespaceToggle === true ? mojangminecraftui_d_ts.default : mojangminecraftui_d_ts.Namespace,
    "mojang-net.d.ts": NamespaceToggle === true ? mojangnet_d_ts.default : mojangnet_d_ts.Namespace,
    // Interpreter's native functions
    "base64.d.ts": base64_d_ts, "clonetson.d.ts": clonejson_d_ts, "sha256.d.ts": sha256_d_ts, "viewObj.d.ts": viewObj_d_ts, "md5.d.ts": blueimp_md5_d_ts
  };
  // Create a Program with an in-memory emit
  const createdFiles = {};
  const host = {
      fileExists: filePath => { for (const dummyFilePath of Object.keys(files)) return filePath === dummyFilePath },
      directoryExists: dirPath => dirPath === "/",
      getCurrentDirectory: () => "/",
      getDirectories: () => [],
      getCanonicalFileName: fileName => fileName,
      getNewLine: () => "\n",
      getDefaultLibFileName: () => "",
      getSourceFile: filePath => {
        var response;
        for (const dummyFilePath of Object.keys(files)) if (filePath === dummyFilePath) { return ts.createSourceFile(dummyFilePath, files[dummyFilePath], ts.ScriptTarget[compilerOptions.target])} else response = undefined
        return response;
      },
      readFile: filePath => {
        var response;
        for (const dummyFilePath of Object.keys(files)) if (filePath === dummyFilePath) { return files[dummyFilePath] } else response = undefined
        return response;
      },
      useCaseSensitiveFileNames: () => true,
      writeFile: (fileName, contents) => createdFiles[fileName] = contents
  };
  // Prepare and emit the d.ts files
  const program = ts.createProgram(Object.keys(files), compilerOptions, host);
  program.emit();
  // Loop through all the input files
  Object.keys(files).forEach(file => file.replace(".ts", ".d.ts").replace(".js", ".d.ts"));
  return {
      files: createdFiles,
      diagnostics: ts.getPreEmitDiagnostics(program),
      host: host
  };
}

const formSettings = {
  ModalForm: {
    dropdown: { defaultValueIndex: null },
    slider: { defaultValue: null },
    textField: { defaultValue: null },
    toggle: { defaultValue: null }
  }
}

world.events.beforeChat.subscribe(data => {
  const { message, sender } = data;
  let playerName = sender.name ?? sender.nameTag;
  let hasPermission = false;

  if (whitelist == true && players.includes(playerName)) {
    hasPermission = true;
  } else if (whitelist == false) {
    hasPermission = true;
  } else hasPermission = false;

  if (message == `${prefix}typescript` && hasPermission == true) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§dTypeScript interpreter";
    item.setLore(["§r§5Use this item to open TypeScript interpreter"]);
    sender.getComponent("minecraft:inventory").container.addItem(item);
    client(playerName, `You have been given a ${item.nameTag}`)
  } else if (message == `${prefix}typescript version`) {
    data.cancel = true;
    client(playerName, "§6typescript§r@§64.6.3§r | §2Apache-2.0§r | deps: §2none§r | versions: §22277§r" +
      "\nTypeScript is a language for application scale JavaScript development" +
      "\n§9https://typescriptlang.org/")
  } else if (message == `${prefix}tsconfig`) {
    data.cancel = true;

    let item = new ItemStack(MinecraftItemTypes.enchantedBook, 1);
    item.nameTag = "§r§dTypeScript Configulation";
    item.setLore(["§r§5TypeScript Config", "Use this item to edit configulation"]);
    sender.getComponent("minecraft:inventory").container.addItem(item);
    client(playerName, `You have been given a ${item.nameTag}`)
  }
});

/** 
 * TSConfig Editor
 * @param {Player} source
 * @param {tsconfig.value} tsconfig
 * @param {tsconfig.schema} schema
 */ 
function editConfiguation(source, tsconfig, schema) {
  let ActionForm = new ActionFormData();

  // ActionForm settings
  ActionForm.title("TypeScript Configulation")
            .body("TSConfig indicates that the TypeScript project.\n§9https://typescriptlang.org/tsconfig");
  for (const option of Object.keys(tsconfig.compilerOptions)) {
    ActionForm.button(`${option} [${schema.definitions.compilerOptionsDefinition.properties.compilerOptions.properties[option].type}]`)
  };

  // ActionForm display (Recommend put below ActionForm settings)
  ActionForm.show(source).then(ActionFormResponse => {
    const { selection, isCanceled } = ActionFormResponse;

    if (isCanceled === true) { return tsconfig } else {;
      const selectedProperty = Object.keys(tsconfig.compilerOptions)[selection];
      const property = schema.definitions.compilerOptionsDefinition.properties.compilerOptions.properties[selectedProperty];
      
      if (devBuild === true) {
        client(source.name, `Selection: ${selectedProperty}`);
        client(source.name, `property.enum: ${!!property.enum}`)
        client(source.name, `property.anyOf: ${!!property.anyOf}`)
        client(source.name, `Boolean: ${property.type === "boolean"}`)
        client(source.name, `Array: ${property.type === "array"}`)
        client(source.name, `Object: ${property.type === "object"}\n`)
      }

      // Check if property has ENUM & ENUM Verifier
      if (!!property.enum) {
        let configForm = new ActionFormData();
        configForm.title("TypeScript Configulation")
        configForm.body(`Setting: ${selectedProperty}\n\nCurrent Value: ${tsconfig.compilerOptions[selectedProperty]}`);
        var availableValues = [];
        for (const value of property.enum) { configForm.button(value); availableValues.push(value) }
        configForm.show(source).then(configFormResponse => {
          const { selection, isCanceled } = configFormResponse;
          if (isCanceled !== true) { tsconfig.compilerOptions[selectedProperty] = availableValues[selection];
          client(source.name, `You have chosen ${availableValues[selection]} in ${selectedProperty}`) }
        });
      } else if (!!property.anyOf) { for (const option of property.anyOf) if (!!option.enum) {
        let configForm = new ActionFormData();
        configForm.title("TypeScript Configulation")
        configForm.body(`Setting: ${selectedProperty}\n\nCurrent Value: ${tsconfig.compilerOptions[selectedProperty]}`);
        var availableValues = [];
        for (const value of option.enum) { configForm.button(value); availableValues.push(value) }
        configForm.show(source).then(configFormResponse => {
          const { selection, isCanceled } = configFormResponse;
          if (isCanceled !== true) { tsconfig.compilerOptions[selectedProperty] = availableValues[selection];
          client(source.name, `You have chosen ${availableValues[selection]} in ${selectedProperty}`) }
        })}
      } else if (property.type == "boolean") {
        var availableValues = [true, false];
        let configForm = new ActionFormData();
        configForm.title("TypeScript Configulation")
        configForm.body(`Setting: ${selectedProperty}\n\nCurrent Value: ${tsconfig.compilerOptions[selectedProperty]}`)
        configForm.button("True", "textures/blocks/wool_colored_lime")
        configForm.button("False", "textures/blocks/wool_colored_red")
        configForm.show(source).then(configFormResponse => {
          const { selection, isCanceled } = configFormResponse;
          if (isCanceled !== true) {tsconfig.compilerOptions[selectedProperty] = availableValues[selection];
          client(source.name, `Set ${selectedProperty} to ${availableValues[selection]}`)}
        });
      } else {
        let configForm = new ModalFormData();
        configForm.title("TypeScript Configulation");
        configForm.textField(`Setting: ${selectedProperty}\n\nType here to change property value`, typeof tsconfig.compilerOptions[selectedProperty] === "object" ? JSON.stringify(tsconfig.compilerOptions[selectedProperty]) : String(tsconfig.compilerOptions[selectedProperty]), typeof tsconfig.compilerOptions[selectedProperty] === "object" ? JSON.stringify(tsconfig.compilerOptions[selectedProperty]) : String(tsconfig.compilerOptions[selectedProperty]));
        configForm.show(source).then(configFormResponse => {
          const { formValues } = configFormResponse;
          let [ input ] = formValues;
          
          if (property.type === "array" && !property.enum && !property.anyOf) { // Array
            try {
              var t = JSON.parse(input);
              if (Array.isArray(t)) {
                tsconfig.compilerOptions[selectedProperty] = JSON.parse(input);
                client(source.name, `Set ${selectedProperty} to ${JSON.stringify(JSON.parse(input))}`)
              } else client(source.name, `§cCannot make changes to ${selectedProperty}: Input is not an ${property.type}.`)
            } catch { client(source.name, `§cCannot make changes to ${selectedProperty}: Error occured when parsing input to JSON.`) }
          } else if (property.type === "object" && !property.enum && !property.anyOf) { // Object
            try {
              var t = JSON.parse(input);
              if ((!!t) && (t.constructor === Object)) {
                tsconfig.compilerOptions[selectedProperty] = JSON.parse(input);
                client(source.name, `Set ${selectedProperty} to ${JSON.stringify(JSON.parse(input))}`)
              } else client(source.name, `§cCannot make changes to ${selectedProperty}: Input is not an ${property.type}.`)
            } catch { client(source.name, `§cCannot make changes to ${selectedProperty}: Error occured when parsing input to JSON.`) }            
          } else if (property.type === "string" && !property.enum && !property.anyOf) {
            tsconfig.compilerOptions[selectedProperty] = input;
            client(source.name, `Set ${selectedProperty} to ${input}`)
          }
          else if (property.type === "number" && !property.enum && !property.anyOf) {
            if (!isNaN(input)) {
              tsconfig.compilerOptions[selectedProperty] = Number(input)
              client(source.name, `Set ${selectedProperty} to ${input}`)
            } else client(source.name, `§cCannot make changes to ${selectedProperty}: Input is not an ${property.type}.`)
          }
        })
      }
    }
  });
  return tsconfig;
}

/**
 * 
 * @param {Player} source 
 * @param {string} playerName 
 * @param {formSettings} formSetting 
 */
function transpile(source, playerName, formSetting) {
  let setting = formSetting;
  let ModalForm = new ModalFormData();

  // ModalForm settings
  ModalForm.title("TypeScript Interpreter");
  ModalForm.textField("Text Field", "Type here", setting.ModalForm.textField.defaultValue);
  ModalForm.toggle("Use Mojang Namespace", setting.ModalForm.toggle.defaultValue);

  // ModalForm display (Recommend put below ModalForm settings)
  ModalForm.show(source).then(ModalFormResponse => {

    const { formValues } = ModalFormResponse;

    let [input, toggle] = formValues;

    if (/[a-z]/i.test(input)) {
      const startTime = new Date().getTime();
      if (devBuild === true) console.warn(`TypeScript: §6Program starts building at: ${new Date()}`)
      /**
       * @description
       * Checks if final character is a number to prevent memory leak
       * @returns
       * Add ; at the end of the code
       */
      if (!isNaN(input.slice(-1))) input = input + ";"

      client(playerName, `==========\n### scriptEngine.ts\n${input}`)

      try {
        const diagnoseResult = typescriptCompiler (input, ts.convertCompilerOptionsFromJson(tsconfig.value.compilerOptions).options, toggle);
        const output = diagnoseResult.files['scriptEngine.js'].replace(/\u000d\n/g, '\n');
        for (const filename of Object.keys(diagnoseResult.files)) client(playerName, `### ${filename}\n${diagnoseResult.files[filename]}`)

        if (diagnoseResult.diagnostics.length > 0) {
          if (devBuild === true) console.warn(`TypeScript: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`)
          const formattedErrorMessage = ts.formatDiagnosticsWithColorAndContext(diagnoseResult.diagnostics, diagnoseResult.host).replace(/\[0m/g, '§r').replace(/\[7m/g, '§l').replace(/\[90m/g, '§8').replace(/\[91m/g, '§c').replace(/\[92m/g, '§a').replace(/\[93m/g, '§e').replace(/\[94m/g, '§9').replace(/\[95m/g, '§d').replace(/\[96m/g, '§b').replace(/\[97m/g, '§f');

          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Compiler Warning");
          MessageForm.body(formattedErrorMessage);
          MessageForm.button1("Build Script");
          MessageForm.button2("Fix Your Code");

          // MessageForm display (Recommend put below MessageForm settings)
          MessageForm.show(source).then(MessageFormResponse => {
            const { selection } = MessageFormResponse;

            if (selection == 0) {
              setting.ModalForm.toggle.defaultValue = toggle;
              setting.ModalForm.textField.defaultValue = input;
              transpile(source, playerName, setting)
            } else {
              let newSetting = JSON.parse(JSON.stringify(formSettings));

              newSetting.ModalForm.toggle.defaultValue = toggle;
              newSetting.ModalForm.textField.defaultValue = output;
              setting.ModalForm.textField.defaultValue = input;
              codeExecute(source, playerName, newSetting)
            }
          });

          client(playerName, formattedErrorMessage);
        } else {
          if (devBuild === true) console.warn(`TypeScript: §aAll checks have passed. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`)
          let newSetting = JSON.parse(JSON.stringify(formSettings));

          newSetting.ModalForm.toggle.defaultValue = toggle;
          newSetting.ModalForm.textField.defaultValue = output;
          setting.ModalForm.textField.defaultValue = input;
          codeExecute(source, playerName, newSetting)
        }
      } catch (error) {
        if (error.stack && devBuild == true) {
          console.warn(`TypeScript: §cSome checks were not successful. Time Duration: ${(new Date().getTime() - startTime) / 1000} seconds`);
          client(playerName, `§c${`${String(error)}\n${String(error.stack)}`}`);

          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Compile Error");
          MessageForm.body(String(error) + "\n" + String(error.stack));
          MessageForm.button1("Exit");
          MessageForm.button2("Fix Your Code");

          // MessageForm display (Recommend put below MessageForm settings)
          MessageForm.show(source).then(MessageFormResponse => {
            const { selection } = MessageFormResponse;

            if (selection == 0) {
              setting.ModalForm.toggle.defaultValue = toggle;
              setting.ModalForm.textField.defaultValue = input;
              transpile(source, playerName, setting)
            }
          });
        } else {
          client(playerName, `§c${error}\n${error.stack.split("\n").slice(0,-2)}`);

          let MessageForm = new MessageFormData();

          // MessageForm settings
          MessageForm.title("Compile Error");
          MessageForm.body(`${error}\n${error.stack.split("\n").slice(0,-2)}`);
          MessageForm.button1("Exit");
          MessageForm.button2("Fix Your Code");

          // MessageForm display (Recommend put below MessageForm settings)
          MessageForm.show(source).then(MessageFormResponse => {
            const { selection } = MessageFormResponse;

            if (selection == 0) {
              setting.ModalForm.toggle.defaultValue = toggle;
              setting.ModalForm.textField.defaultValue = input;
              transpile(source, playerName, setting)
            }
          });
        }
      };
      client(playerName, "==========");
    };
  })
};

world.events.beforeItemUse.subscribe(eventData => {
  let { source, item } = eventData; // get player
  let playerName = source.name ?? source.nameTag;

  if (item.id == 'minecraft:enchanted_book' && item.getLore()[0] == "§r§5Use this item to open TypeScript interpreter") {
    let formInput = formSettings;
    if (formInput.ModalForm.toggle.defaultValue == null) formInput.ModalForm.toggle.defaultValue = true;
    transpile(source, playerName, formInput)
  } else if (item.id == 'minecraft:enchanted_book' && item.getLore()[0] === "§r§5TypeScript Config" && item.getLore()[1] === "Use this item to edit configulation") {

    tsconfig.value = editConfiguation(source, tsconfig.value, tsconfig.schema);
    
    if (tsconfig.validate().errors.length > 0) {
      var tsconfigErrors = [];
      for (let error of tsconfig.validate().errors) tsconfigErrors.push(error);
      
      let MessageForm = new MessageFormData();

      // MessageForm settings
      MessageForm.title("Config Error");
      MessageForm.body(tsconfigErrors.join("\n"));
      MessageForm.button1("Ignore Errors");
      MessageForm.button2("Fix Config");

      // MessageForm display (Recommend put below MessageForm settings)
      MessageForm.show(source).then(MessageFormResponse => {
        const { selection } = MessageFormResponse;

        if (selection == 0) tsconfig.value = editConfiguation(source, tsconfig.value, tsconfig.schema);
      });
    }
  }
});