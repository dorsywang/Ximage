import Ximage from 'Ximage';

Ximage.define('softenFace', function(){
    var _this = this.clone();
    return  _this.add(
        this.act("高斯模糊",10),"滤色"
    ).act("亮度",-10,5);
});
