## Interpreter Packages (v1.19.0)
These are the following packages available for command line interface:
> If this list is not up to date, submit a bug report
> Full list can be seen in-game via `$attributions`

### TypeScript
Used for TypeScript interpreter and TSConfig Editor

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

### JSON Schema
Extension for TSConfig Editor

- Created by tdegrunt
- licensed under the MIT license

### @types/mojang-minecraft
Extension for TypeScript Interpreter

- These definitions were written by Jake Shirley, and Mike Ammerlaan.
- licensed under the MIT license

### @types/mojang-minecraft-ui
Extension for TypeScript Interpreter

- These definitions were written by Jake Shirley, and Mike Ammerlaan.
- licensed under the MIT license

### @types/mojang-minecraft-server-admin
Extension for TypeScript Interpreter

- These definitions were written by Jake Shirley, and Mike Ammerlaan.
- licensed under the MIT license

### @types/mojang-net
Extension for TypeScript Interpreter

- These definitions were written by Jake Shirley, and Mike Ammerlaan.
- licensed under the MIT license

### @types/mojang-gametest
Extension for TypeScript Interpreter

- These definitions were written by Jake Shirley, and Mike Ammerlaan.
- licensed under the MIT license