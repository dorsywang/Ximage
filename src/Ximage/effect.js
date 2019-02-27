import Ximage from 'Ximage';

let effectsMap = {};
let define = function(name, func){
    effectsMap[name] = func;
};

let effect = function(name, ...args){
    let func = effectsMap[name];
    if(! func){
        console.error('no method, please define');
    }

    return func.apply(this, args);
};

Ximage.extend(effect);

Ximage.define = define;
