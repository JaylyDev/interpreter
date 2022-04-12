# GameTest Framework v1.18.20

With the introduction of mojang-minecraft-ui module, this allows the add-on to have both **graphical user interface** and **command line interface** *for compatibility*.

> **Important:** Command line interface does not support new line. Recommend you to use graphical user interface.

## Change subpack

Chat mode creates a command line interface environment
![chat](https://media.discordapp.net/attachments/867015810312962063/963403382817718312/unknown.png)

UI mode creates a graphical user interface environment **(Recommended)**
![ui](https://media.discordapp.net/attachments/867015810312962063/963403438182531092/unknown.png)

## CLI Documentation
For command line interface documentation, visit [this page](./cli-docs.md).

## GUI Documentation

To get the interpreter with graphical user interface:

1. Change the resolution of the behavior pack to **GameTest Framework v1.18.20 [UI]**
![ui](https://media.discordapp.net/attachments/867015810312962063/963403438182531092/unknown.png)

2. In the chat screen, type `$javascript` to get JavaScript interpreter.
![javascript terminal](https://media.discordapp.net/attachments/867015810312962063/963408197115318324/unknown.png)

3. Use the enchanted book to open this form:
![js modalform](https://media.discordapp.net/attachments/867015810312962063/963408361041313822/unknown.png)

4. Paste your javascript code into the text field

5. Choose whether or not you want to use Mojang namespace.
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

6. Press **`Submit`** button to execute javascript code

## Packages

Check out [this markdown file](./packages.md) to see packages that have installed as add-on's extension.