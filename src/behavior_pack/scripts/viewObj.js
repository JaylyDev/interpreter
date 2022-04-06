let getType = (o) => Object.prototype.toString.call(o).slice(8, -1);
let getClassName = (o) => o?.prototype?.constructor?.name ?? '';
let getConstructorName = (o) => o?.constructor?.name ?? '';
let tree = ' §8:§f ', b = ' ';
let exec = (i, d = tree) => {
    let o = [];
    for (let p in i) {
        let v = i[p];
        let type = getType(v), constructorName = getConstructorName(v), className = getClassName(v);
        try {
            if (type == 'Object' || type == 'Array') {
                let x = (type == 'Object' ? ['{', '}']
                    : ['[', ']']);
                o.push(`${d}${b}${p}:  ${x[0]}  §8§o${constructorName}§f`, ...exec(v, d + tree), `${d}${b}${x[1]}`);
            }
            else if (className) {
                o.push(`${d}${b}${p}:  §a[class ${className}]§f  {`, ...exec(v, d + tree), `${d}${b}}`);
            }
            else if (type == 'Function') {
                o.push(`${d}${b}${p}:  §e[Function]§f  §8§o${type}§f`);
            }
            else {
                o.push(`${d}${b}${p}:  ${`${v}`.replace(/§./g, (v) => `§a[S${v.slice(-1)}]§r`).replace(/\r/g, '§a[CR]§r').replace(/\n/g, '§a[LF]§r')}  §8§o${type}§f`);
            }
        }
        catch (e) {
            o.push(`${d}${b}${p}:  §c[Unknown]§r  §8§o${constructorName}§f`);
        }
    }
    return o;
};
let viewObj = (input) => {
    let type = getType(input);
    if (type != 'Object' && type != 'Array' && !getClassName(input))
        return [`${input}`];
    return exec(input);
};
export { viewObj, getClassName, getConstructorName, getType };
