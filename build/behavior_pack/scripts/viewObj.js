let e=e=>Object.prototype.toString.call(e).slice(8,-1),t=e=>e?.prototype?.constructor?.name??"",r=e=>e?.constructor?.name??"",$=(c,o=" §8:§f ")=>{let n=[];for(let l in c){let a=c[l],p=e(a),s=r(a),f=t(a);try{if("Object"==p||"Array"==p){let e="Object"==p?["{","}"]:["[","]"];n.push(`${o} ${l}:  ${e[0]}  §8§o${s}§f`,...$(a,o+" §8:§f "),`${o} ${e[1]}`)}else f?n.push(`${o} ${l}:  §a[class ${f}]§f  {`,...$(a,o+" §8:§f "),`${o} }`):"Function"==p?n.push(`${o} ${l}:  §e[Function]§f  §8§o${p}§f`):n.push(`${o} ${l}:  ${`${a}`.replace(/§./g,(e=>`§a[S${e.slice(-1)}]§r`)).replace(/\r/g,"§a[CR]§r").replace(/\n/g,"§a[LF]§r")}  §8§o${p}§f`)}catch(e){n.push(`${o} ${l}:  §c[Unknown]§r  §8§o${s}§f`)}}return n},c=r=>{let c=e(r);return"Object"==c||"Array"==c||t(r)?$(r):[`${r}`]};export{c as viewObj,t as getClassName,r as getConstructorName,e as getType};