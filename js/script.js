console.clear()
const a = [1, 4, 3, 0, 4, 5, 4];

const b =  [1, 4, 3, 0, 4, 5, 4,4,2,22,33,4,5];
const c =  [1, 4, 4, 4, 3, 0, 4, 5, 4,4,2,22,33,4,5];
 
function sqr (a){
  let x = 0;
  for(let i = 0; i < a.length; i++){
    if(a[i] % 2 === 0){
      x += Math.sqrt(a[i])

    }
    
  }
return x.toFixed(2)
  
}
console.log(sqr(c))
sqr(a)