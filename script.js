//get the high trend print picture
const fs = require('fs');
const filename='data/pictures.json';

function gettrendpic(filename, key){
    const rawdata= fs.readFileSync(filename, 'utf8');
    const pictures= JSON.parse(rawdata);
    if(pictures.length ===0){
        return null;
    }

    let trendpic = pictures[0];

    for(const pic of pictures){
        if(pic[key] > trendpic[key]){
            trendpic=pic;
        }
    }
    return trendpic;
}
