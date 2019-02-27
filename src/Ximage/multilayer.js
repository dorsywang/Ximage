import Ximage from 'Ximage';

let addLayer = function(aiObj, method, dx, dy){
  this.layers.push([aiObj, method, dx, dy]);

  return this;
};

Ximage.extend(addLayer);
