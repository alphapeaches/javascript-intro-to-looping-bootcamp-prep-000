function forLoop(arr){
for (var i = 0; i < 25; i++){
  if (i === 0){
    arr.push(`I am ${i} strange loop.`);
  }else arr.push(`I am ${i} strange loops.`);
  }
}
/**
function whileLoop(n){
  while (n>0){
    n = n - 1;
  }
}

function doWhileLoop (array){
  do {
    array.pop();
  } while (array.length>0 & maybeTrue());
}**/