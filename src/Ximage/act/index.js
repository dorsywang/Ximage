import LayerPixelProcesser from './layerPixelProcesser';
import Ximage from 'Ximage';

function act(method, ...args){
    this._doAct(method, args);

    return this;
}

function _doAct(method, args){
    let layerPixelProcesser = new LayerPixelProcesser(this.imgData);

    let imgData = layerPixelProcesser.process(method, args);

    this.imgData = imgData;
}

Ximage.extend(act);
Ximage.extend(_doAct);

Ximage.addFilter = filter => {
    LayerPixelProcesser.addFilter(filter);
};

Ximage.addAlteration = alteration => {
    LayerPixelProcesser.addFilter(alteration);
};
