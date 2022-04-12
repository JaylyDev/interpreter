# GameTest using chat interface

All versions below Minecraft version 1.18.20 must use chat to execute JavaScript code.

This is because User Interface API are added to Minecraft in version 1.18.20.

## How-to section
To get your code executed:
1. Go to behavior pack section

2. Activate "GameTest Interpreter" behavior pack

3. Go to subpacks setting
![pack](https://media.discordapp.net/attachments/867015810312962063/963390578706489394/unknown.png)

4. Change the slider to target the Minecraft version you're currently on
![slider](https://media.discordapp.net/attachments/867015810312962063/963390735204376647/unknown.png)
![slider](https://media.discordapp.net/attachments/867015810312962063/963390835448250438/unknown.png)
![slider](https://media.discordapp.net/attachments/867015810312962063/963390908533973002/unknown.png)
![slider](https://media.discordapp.net/attachments/867015810312962063/963390971226259486/unknown.png)

5. Go back to World Setting

6. Enable GameTest Framework in Experimental section
![](https://api.mcpedl.com/storage/submissions/147180/images/gametest-interpeter_10.png)

7. Start coding in chat screen

8. To print "Hello World", execute the following code:
![chat image](https://media.discordapp.net/attachments/867015810312962063/963389507225387008/unknown.png)

9. Send the message then you should receive this:
![result](https://media.discordapp.net/attachments/867015810312962063/963389922906103859/unknown.png)

## Packages
These are the following packages available for command line interface:

### `Minecraft` = Minecraft / mojang-minecraft module
Minecraft v1.17.0 Example:
```js
// This code execute command
$Minecraft.world.events.tick.subscribe(function () { Minecraft.Commands.run("say never gonna give you up") })
```
Minecraft v1.17.30
```js
// This code execute command
$Minecraft.world.events.tick.subscribe(function () { Minecraft.world.getDimension("overworld").runCommand("say never gonna let you down") })
```
> **Notes:**
> - Command line interface does not support new line
> 
> mojang-minecraft module: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-minecraft/mojang-minecraft
> *Minecraft module has been renamed as mojang-minecraft in Minecraft v1.17.30*

### `GameTest` = GameTest / mojang-gametest module

> **Notes:**
> - Command line interface does not support new line
> 
> mojang-gametest module: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest
> *GameTest module has been renamed as mojang-gametest in Minecraft v1.17.30*

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
// works in v1.17.30 and v1.18.10
declare function getIndex(module: ("mojang-minecraft" || "mojang-gametest")): string;
```

> **Notes**
> This function does not work in v1.17.0 mode