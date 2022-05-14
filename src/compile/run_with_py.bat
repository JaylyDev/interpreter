cd src\compile

node compressor.js
node --trace-uncaught ModifyJSON.js
start deleteCache.bat
Compile.py