import Ximage from 'Ximage';

Ximage.define('rough', function(){
    return this.add(
       new Ximage(this.width, this.height, "#000").act("喷点").act("反色").act("浮雕效果")
       ,"叠加"
   );
});
