const testFolder = './data'; // js 파일 실행위치 기준
const fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
   console.log(filelist); 
});