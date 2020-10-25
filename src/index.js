module.exports = function check(str, bracketsConfig) {
  const conf = {};
  bracketsConfig.forEach(item =>{
      if(!conf[item[0]]){
        conf[item[0]] = {
          open: item[0],
          count : 0
        };
        conf[item[1]] = {
          close: item[1],
          count : 0
        };
      }
  });

  [...str].forEach(item =>{
    if(conf[item]){
      conf[item].count++;
    }
});

let res = true;

bracketsConfig.forEach(item =>{
  if(conf[item[0]]){
      if(conf[item[0]].count -  conf[item[1]].count !== 0 ) res = false;
    };
});


  return res;
}
