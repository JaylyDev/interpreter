@echo off
cd ..\..\

cd build

rd compile /S /Q
ren behavior_pack interpreter
mkdir behavior_pack
move interpreter behavior_pack\interpreter
ren resource_pack interpreter
mkdir resource_pack
move interpreter resource_pack\interpreter

exit