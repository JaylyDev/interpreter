export const package_lock={name:"GameTest Interpreter",version:"1.0.0",lockfileVersion:2,requires:!0,packages:{quickjs:{version:"1.0.0",license:"",dependencies:{"mojang-gametest":"^1.18.30","mojang-minecraft":"^1.18.30","mojang-minecraft-ui":"^1.18.20",Base64:"^1.0.0",viewObj:"^1.0.0",md5:"^1.0.0",cloneJSON:"^1.0.0",getTypes:"^1.0.0","@types/mojang-gametest":"^1.18.30","@types/mojang-minecraft":"^1.18.30","@types/mojang-minecraft-ui":"^1.18.20",typescript:"^4.6.2"},engines:{Minecraft:"^1.18.30",Interpreter:"^18.20.0"}},"mojang-gametest":{version:"1.18.20",dependencies:{"mojang-minecraft":"^1.18.30","mojang-minecraft-ui":"^1.18.20"},engines:{Minecraft:"^1.18.30",Interpreter:"^18.20.0"}},"mojang-minecraft":{version:"1.18.30",dependencies:{"mojang-gametest":"^1.18.20","mojang-minecraft-ui":"^1.18.20"},engines:{Minecraft:"^1.18.30",Interpreter:"^18.20.0"}},"mojang-minecraft-ui":{version:"1.18.20",dependencies:{"mojang-gametest":"^1.18.20","mojang-minecraft":"^1.18.20"},engines:{Minecraft:"^1.18.20",Interpreter:"^18.20.0"}},Base64:{version:"1.0.0",dependencies:{},engines:{Minecraft:"^1.17.0",Interpreter:"^18.30.0"}},viewObj:{version:"1.0.0",dependencies:{},engines:{Minecraft:"^1.17.0",Interpreter:"^18.20.0"}},md5:{version:"1.0.0",dependencies:{},engines:{Minecraft:"^1.17.0",Interpreter:"^18.20.0"}},cloneJSON:{version:"1.0.0",dependencies:{},engines:{Minecraft:"^1.17.0",Interpreter:"^18.30.0"}},getTypes:{version:"1.0.1",dependencies:{},engines:{Minecraft:"^1.18.20",Interpreter:"^18.30.0"}},"@types/mojang-minecraft":{version:"1.18.30",dependencies:{"@types/mojang-gametest":"^1.18.20","@types/mojang-minecraft-ui":"^1.18.20",getTypes:"^1.0.0"}},"@types/mojang-gametest":{version:"1.18.20",dependencies:{"@types/mojang-minecraft":"^1.18.30","@types/mojang-minecraft-ui":"^1.18.20",getTypes:"^1.0.0"}},"@types/mojang-minecraft-ui":{version:"1.18.20",dependencies:{"@types/mojang-gametest":"^1.18.20","@types/mojang-minecraft":"^1.18.30",getTypes:"^1.0.0"}},typescript:{version:"4.6.2",resolved:"https://registry.npmjs.org/typescript/-/typescript-4.6.2.tgz",integrity:"sha512-HM/hFigTBHZhLXshn9sN37H085+hQGeJHJ/X7LpBWLID/fbc2acUMfU+lGD98X81sKP+pFa9f0DZmCwB9GnbAg==",engines:{node:">=4.2.0",Minecraft:"^1.18.30",Interpreter:"^18.30.100"}}}};export const module={dependencies:package_lock.packages.quickjs.dependencies,name:package_lock.name,version:package_lock.version,main:"scripts/gametests/terminal.js",scripts:{test:'echo "Error: no test specified" && exit 1'},keywords:[],author:"",license:"",description:""};