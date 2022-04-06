import os
import zipfile

def zipDirectory(output_filename, source_dir):
    relroot = os.path.abspath(os.path.join(source_dir, os.pardir))
    with zipfile.ZipFile(output_filename, "w", zipfile.ZIP_DEFLATED) as zip:
        for root, dirs, files in os.walk(source_dir):
            # add directory (needed for empty dirs)
            zip.write(root, os.path.relpath(root, relroot))
            for file in files:
                filename = os.path.join(root, file)
                if os.path.isfile(filename): # regular files only
                    arcname = os.path.join(os.path.relpath(root, relroot), file)
                    zip.write(filename, arcname)

os.chdir('..\\..\\build')

zipDirectory("behavior.data", "behavior_pack"); print("created behavior.data")
zipDirectory("resource.data", "resource_pack"); print("created resource.data")

with zipfile.ZipFile('Interpreter.mcaddon', 'w') as MCADDON:
    MCADDON.write("behavior.data")
    MCADDON.write("resource.data")
    print("created Interpreter.mcaddon")

print("Successfully compile the add-on in \"build\" directory")
print(os.popen('Interpreter.mcaddon').read())