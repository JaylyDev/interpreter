import os
import zipfile


def zipdir(path, ziph):
    length = len(path)

    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        folder = root[length:] # path without "parent"
        for file in files:
            ziph.write(os.path.join(root, file), os.path.join(folder, file))
        
def zipDirectory(output_filename, source_dir):
    relroot = os.path.abspath(os.path.join(source_dir))
    zip = zipfile.ZipFile(output_filename, "w", zipfile.ZIP_DEFLATED)
    zipdir(relroot, zip)
    zip.close()

os.chdir("..\\..\\build")
zipDirectory("behavior.data", "behavior_pack"); print("created behavior.data")
zipDirectory("resource.data", "resource_pack"); print("created resource.data")

with zipfile.ZipFile('Interpreter.mcaddon', 'w') as MCADDON:
    MCADDON.write("behavior.data")
    MCADDON.write("resource.data")
    print("created Interpreter.mcaddon")

print("Successfully compile the add-on in \"build\" directory")
os.popen('Interpreter.mcaddon')