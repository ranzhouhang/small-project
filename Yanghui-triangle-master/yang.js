const item = function(array){
  let newItem = new Array();
  newItem[0] = 1;
  for(let i = 1;i <= array.length;i++){
    if(i !== array.length){
      newItem[i] = array[i-1] + array[i];
    }else{
      newItem.push(1);
    }
  }
  return newItem;
}

const yangArr = function(n){
  let yang = new Array();
  yang[0] = [1];
  yang[1] = [1,1];
  for(let i = 2;i <= n;i++){
    yang[i] = item(yang[i-1]);
  }
  return yang;
}

const input = function(str){
  let reg = / /g;
  let isTrue = reg.test(str);
  if(isTrue){
    let array = str.split(' ');
    let isLength = array.length === 2 ? true : false;
    if(isLength){
      for(let i = 0;i<array.length;i++){
        if(isNaN(array[i])){
          console.log("请输入正确格式！");
          return
        }
      }
      return true;
    }else{
      console.log("请输入正确格式！");
    }
  }else{
    console.log("请输入正确格式！");
  }
}

const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt('请输入行数和列数，中间以空格隔开，结束请按E\n');
rl.prompt();
rl.on('line',(line) => {
  if(line == "E"){
    rl.close();
  }else{
    let isInput = input(line);
    if(isInput){
      let array = line.split(' ').map(value => {
        return Number(value);
      });
      if(array[0]>=1 && array[0]<=1000 && array[1]>=1 && array[1]<=1000 && array[0]>=array[1]){
        let yang = yangArr(array[0]);
        let out = yang[array[0] - 1][array[1] - 1];
        if(out <= 252){
          console.log(out + '\n---------------');
        }else{
          console.log('已超出252！\n---------------')
        }
      }else{
        console.log("请输入正确格式！");
      }
    }
  }
});

rl.on('close',function(){
 console.log('<---------------结束!--------------->');
 process.exit(0);
});
