## Interpreter Packages (v1.18.20)
These are the following packages available for command line interface:

### `mojangminecraft` = mojang-minecraft module
Example:
```js
mojangminecraft.world.events.tick.subscribe(function () { 
  mojangminecraft.world.getDimension("overworld").runCommand("say never gonna let you down")
})
```
```js
world.events.tick.subscribe(function () {
  Minecraft.world.getDimension("overworld").runCommand("say never gonna let you down")
})
```

> mojang-minecraft module: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft

### `mojangminecraft` = mojang-gametest module

> mojang-gametest module: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest

### `mojangminecraftui` = mojang-minecraft-ui module

> mojang-gametest module: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui

### Object parser
Extension for GameTest Interpreter add-on

Created by FrostIce482

Reference:
```ts
export function viewObj(obj: object): string[];
```

### JavaScript MD5
Extension for GameTest Interpreter add-on

- Created by blueimp
- licensed under the MIT license

Reference:
```ts
export function md5(value: string, key?: string | null, raw?: boolean): string;
```

### Secure Hash Algorithm (SHA256)
Extension for GameTest Interpreter add-on

- Original code by Angel Marin, Paul Johnston
- licensed under the MIT license

Reference:
```ts
declare function SHA256(s: string): string;
export { SHA256 as sha256 };
```

### Function `getIndex`
Extension for GameTest Interpreter add-on, it returns typings for module exported from DefinitelyTyped

- Created by Jayly
- licensed under the MIT license

Reference:
```ts
// works in v1.18.20 and v1.18.30
declare function getIndex(
  module: ("mojang-minecraft" || "mojang-gametest" || "mojang-minecraft-ui")
): string;
```