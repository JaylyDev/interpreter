import{world as e}from"mojang-minecraft";import{players as s,whitelist as t}from"scripts/credentials/access.js";import{addon_prefix as r}from"scripts/credentials/access.js";import*as a from"scripts/gametests/commands/message.js";class i{static gametest(e){const s=[1,19,0,21];return"string"==e?`${s[0]}.${s[1]}.${s[2]}.${s[3]}`:"array"==e?[s[0],s[1],s[2],s[3]]:"object"==e?{major:s[0],minor:s[1],patch:s[2],revision:s[3]}:void 0}static module(e){const s=[19,0,211];return"string"==e?`${s[0]}.${s[1]}.${s[2]}`:"array"==e?[s[0],s[1],s[2]]:"object"==e?{major:s[0],minor:s[1],patch:s[2]}:void 0}}e.events.beforeChat.subscribe((e=>{let m=e.sender.name??e.sender.nameTag,o=!1;if(o=!(1!=t||!s.includes(m))||0==t,e.message==`${r}version`&&1==o){e.cancel=!0;const s=e.message.split(" ");"gametest"==s[1]?a.client(m,`GameTest Framework version: ${i.gametest("string")}`):("module"==s[1]||a.client(m,`GameTest Framework version: ${i.gametest("string")}`),a.client(m,`Add-on GameTest module version: ${i.module("string")}`))}}));