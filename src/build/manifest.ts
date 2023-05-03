import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";
import { behaviorPackDir, resourcePackDir } from "./paths";

type version =
  | [number, number, number]
  | `${number}.${number}.${number}`
  | `${number}.${number}.${number}-${string}`;
type gametestModules =
  // client and server modules
  | "@minecraft/server"
  | "@minecraft/server-ui"
  | "@minecraft/server-gametest"
  | "@minecraft/server-editor"
  | "@minecraft/server-editor-bindings"
  // server modules
  | "@minecraft/server-net"
  | "@minecraft/server-admin";

interface scriptModuleDependency {
  readonly module_name: gametestModules;
  readonly version: version;
}

const addonVersion: version = "19.80.0";

interface manifest {
  format_version: 1 | 2;
  header: {
    name: string;
    description: string;
    uuid: string;
    version: version;
    min_engine_version: version;
  };
  metadata: {
    authors: string[];
    generated_with: {
      "interpreter": [version];
    };
    license: string;
    url: string;
  };
  dependencies?: (
    | {
        description?: string;
        uuid: string;
        version: version;
      }
    | scriptModuleDependency
  )[];
  modules: {
    type: "script" | "data" | "javascript" | "resources";
    description?: string;
    language?: "javascript";
    uuid: string;
    version: version;
    entry?: string;
  }[];
  capabilities?: string[];
}

const moduleEntries: scriptModuleDependency[] = [
  {
    module_name: "@minecraft/server",
    version: "1.2.0-beta"
  },
  {
    module_name: "@minecraft/server-gametest",
    version: "1.0.0-beta"
  },
  {
    module_name: "@minecraft/server-ui",
    version: "1.0.0-beta"
  },
  // {
  //   module_name: "@minecraft/server-admin",
  //   version: "1.0.0-beta"
  // },
  // {
  //   module_name: "@minecraft/server-net",
  //   version: "1.0.0-beta"
  // },
  // {
  //   module_name: "@minecraft/server-editor",
  //   version: "0.1.0-beta"
  // },
  // {
  //   module_name: "@minecraft/server-editor-bindings",
  //   version: "0.1.0-beta"
  // },
];
const headerUUID = {
  behavior_pack: "267389f3-470f-4116-bc5e-3316146d5839",
  resource_pack: 'b1a8c8a4-b0fa-4463-8361-864ad1ddf88b'
};

function BehaviorPack(): void {
  const manifest: manifest = {
    format_version: 2,
    header: {
      name: "Scripting Interpreter",
      description: `Scripting interpreter in Minecraft (${typeof addonVersion === 'object' ? addonVersion.join('.') : addonVersion})`,
      uuid: headerUUID.behavior_pack ?? uuid.v4(),
      version: addonVersion,
      min_engine_version: [1, 19, 80], // Minecraft version required to use this behavior pack
    },
    modules: [
      {
        type: "script",
        language: "javascript",
        description: "createWorldScreen.experimentalGameTest",
        uuid: uuid.v4(),
        entry: "scripts/index.js",
        version: addonVersion,
      },
    ],
    dependencies: [],
    metadata: {
      authors: ["JaylyMC"],
      generated_with: {
        "interpreter": [addonVersion],
      },
      license: "MIT",
      url: "https://github.com/jaylydev",
    },
    capabilities: [
      "script_eval",  // Use of script eval() and Function() must be explicitly enabled in json
      "editorExtension" // Use of editor modules must be enabled in json
    ],
  };

  manifest.dependencies = moduleEntries;

  fs.existsSync(behaviorPackDir) ? true : fs.mkdirSync(behaviorPackDir);
  fs.writeFileSync(
    path.join(behaviorPackDir, "manifest.json"),
    JSON.stringify(manifest)
  );
  console.log(`Writing manifest.json (behavior pack)`);
}

function ResourcePack() {
  const manifest: manifest = {
    format_version: 2,
    header: {
      name: "Scripting Interpreter",
      description: "Resource pack for scripting interpreter",
      uuid: headerUUID.resource_pack ?? uuid.v4(),
      version: addonVersion,
      min_engine_version: [1, 19, 0],
      // Minecraft version required to use this resource pack
    },
    modules: [
      {
        type: "resources",
        description: "createWorldScreen.experimentalGameTest",
        uuid: uuid.v4(),
        version: addonVersion,
      },
    ],
    metadata: {
      authors: ["JaylyMC"],
      generated_with: {
        "interpreter": [addonVersion],
      },
      license: "MIT",
      url: "https://github.com/jaylydev",
    },
  };

  fs.existsSync(resourcePackDir) ? true : fs.mkdirSync(resourcePackDir);
  fs.writeFileSync(
    path.join(resourcePackDir, "manifest.json"),
    JSON.stringify(manifest)
  );
  console.log(`Writing manifest.json (resource pack)`);
}

BehaviorPack();
ResourcePack();
