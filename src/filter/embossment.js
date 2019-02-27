import Ximage, {Filter} from "Ximage";
class embossment extends Filter{ 
    cname = "浮雕效果";
    process = ({data, width, height}, {dorsyMath}) => (args) => {
        var outData = [];
        for(var i = 0,n = data.length;i < n;i += 4){

            var ii = i / 4;
            var row = parseInt(ii / width);
            var col = ii % width;
            var A = ((row - 1) *  width + (col - 1)) * 4;
            var G = (row + 1) * width * 4 + (col + 1) * 4;

            if(row == 0 || col == 0) continue;
            for(var j = 0;j < 3;j ++){
                outData[i + j] = data[A + j] - data[G + j] + 127.5;
            }
            outData[i + 4] = data[i + 4];
        }

        for(var i = 0,n = data.length;i < n;i ++){
            data[i] = outData[i] || data[i];
        }


        return {data, width, height};
    }
}
Ximage.addFilter(embossment);
