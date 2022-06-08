# GameTest Framework v1.19.0

With the introduction of mojang-minecraft-ui module, this allows the add-on to have **graphical user interface**.

## Documentation

To get the interpreter with graphical user interface:

1. Change the resolution of the behavior pack to **GameTest Framework v1.19.0 [UI]**
![mode](https://media.discordapp.net/attachments/867015810312962063/963424665202724994/unknown.png)

2. In the chat screen, type
    - `$javascript` to get JavaScript interpreter.
    ![javascript terminal](https://media.discordapp.net/attachments/867015810312962063/963408197115318324/unknown.png)
    - `$typescript` to get TypeScript interpreter.
    ![image](https://media.discordapp.net/attachments/867015810312962063/963425916866953257/unknown.png)
    - `$python` to get Python interpreter (**Experimental**)
    - `$tsconfig` to get TSConfig editor
    - `$brainfuck` to get BrainFuck interpreter

3. Use the enchanted book to open an interpreter:
![js modalform](https://media.discordapp.net/attachments/867015810312962063/963408361041313822/unknown.png)

4. Paste your code into the text field

5. Choose whether or not you want to use Mojang namespace.
    > This does not applied to BrainFuck interpreter

**Mojang namespace**: When enabled, the add-on will import all variables to the compiler instead of importing `mojangminecraft`, for example:

The JavaScript file:
```js
import { world } from "mojang-minecraft";

let beforeChat = world.events.beforeChat.subscribe(() => {});
world.events.beforeChat.unsubscribe(beforeChat);
```

With mojang namespace enabled (by default):
```js
let beforeChat = world.events.beforeChat.subscribe(() => {});
world.events.beforeChat.unsubscribe(beforeChat);

[...world.getPlayers()][0].teleport(new Location(10, 10, 10), world.getDimension("overworld"), 10, 50)
```

Without mojang namespace enabled:
```js
let beforeChat = mojangminecraft.world.events.beforeChat.subscribe(() => {});
mojangminecraft.world.events.beforeChat.unsubscribe(beforeChat);

[...mojangminecraft.world.getPlayers()][0].teleport(new mojangminecraft.Location(10, 10, 10), mojangminecraft.world.getDimension("overworld"), 10, 50)
```

6. Press **`Submit`** button to execute code

## Using Bedrock Dedicated Server modules
In version 1.19.0, "mojang-net" and "mojang-minecraft-server-admin" are added into GameTest modules, however they're only used in Bedrock Dedicated Servers.

BDS are required for "mojang-net" module to be activated

> "mojang-minecraft-server-admin" module can be enabled in Minecraft client therefore the subpack enables it by default.

## Packages

Check out [this markdown file](./packages.md) to see packages that have installed as add-on's extension.