import ts from "./typescript.js"

function getDiagnoseFromMemory (text) {
  const dummyFilePath = "/file.ts";
  const textAst = ts.createSourceFile(dummyFilePath, text, ts.ScriptTarget.ES2015);
  const options = {};
  const host = {
      fileExists: filePath => filePath === dummyFilePath,
      directoryExists: dirPath => dirPath === "/",
      getCurrentDirectory: () => "/",
      getDirectories: () => [],
      getCanonicalFileName: fileName => fileName,
      getNewLine: () => "\n",
      getDefaultLibFileName: () => "",
      getSourceFile: filePath => filePath === dummyFilePath ? textAst : undefined,
      readFile: filePath => filePath === dummyFilePath ? text : undefined,
      useCaseSensitiveFileNames: () => true,
      writeFile: () => { }
  };
  // loadDTSfiles(["lib.d.ts", "lib.dom.d.ts", "lib.dom.iterable.d.ts", "lib.es2015.collection.d.ts", "lib.es2015.core.d.ts", "lib.es2015.d.ts", "lib.es2015.generator.d.ts", "lib.es2015.iterable.d.ts", "lib.es2015.promise.d.ts", "lib.es2015.proxy.d.ts", "lib.es2015.reflect.d.ts", "lib.es2015.symbol.d.ts", "lib.es2015.symbol.wellknown.d.ts", "lib.es2016.array.include.d.ts", "lib.es2016.d.ts", "lib.es2016.full.d.ts", "lib.es2017.d.ts", "lib.es2017.full.d.ts", "lib.es2017.intl.d.ts", "lib.es2017.object.d.ts", "lib.es2017.sharedmemory.d.ts", "lib.es2017.string.d.ts", "lib.es2017.typedarrays.d.ts", "lib.es2018.asyncgenerator.d.ts", "lib.es2018.asynciterable.d.ts", "lib.es2018.d.ts", "lib.es2018.full.d.ts", "lib.es2018.intl.d.ts", "lib.es2018.promise.d.ts", "lib.es2018.regexp.d.ts", "lib.es2019.array.d.ts", "lib.es2019.d.ts", "lib.es2019.full.d.ts", "lib.es2019.object.d.ts", "lib.es2019.string.d.ts", "lib.es2019.symbol.d.ts", "lib.es2020.bigint.d.ts", "lib.es2020.d.ts", "lib.es2020.full.d.ts", "lib.es2020.intl.d.ts", "lib.es2020.promise.d.ts", "lib.es2020.sharedmemory.d.ts", "lib.es2020.string.d.ts", "lib.es2020.symbol.wellknown.d.ts", "lib.es2021.d.ts", "lib.es2021.full.d.ts", "lib.es2021.intl.d.ts", "lib.es2021.promise.d.ts", "lib.es2021.string.d.ts", "lib.es2021.weakref.d.ts", "lib.es2022.array.d.ts", "lib.es2022.d.ts", "lib.es2022.error.d.ts", "lib.es2022.full.d.ts", "lib.es2022.object.d.ts", "lib.es2022.string.d.ts", "lib.es5.d.ts", "lib.es6.d.ts", "lib.esnext.d.ts", "lib.esnext.full.d.ts", "lib.esnext.intl.d.ts", "lib.esnext.promise.d.ts", "lib.esnext.string.d.ts", "lib.esnext.weakref.d.ts", "lib.scripthost.d.ts", "lib.webworker.d.ts", "lib.webworker.importscripts.d.ts", "lib.webworker.iterable.d.ts"]);
  const program = ts.createProgram({
      options,
      rootNames: [dummyFilePath],
      host
  });
  return ts.getPreEmitDiagnostics(program);
}

const source = "const tes: String = 41021"
for (let d of getDiagnoseFromMemory (source)) console.info(d.messageText);