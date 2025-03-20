let a=[1,2,3,4,5]
let max
console.log(a)
 for(let i=0;i<a.length;i++){
   console.log(a[i])
 }

a.forEach((n)=>{
 console.log(n)})
 
let b=[[6,7,8,9,10],[11,12,13,14,15]]
let c
for(let j=0;j<b.length;b++){
  c=b[j]
   for(let k=0;k<c.length;k++){
    console.log(c[k])
   }
}

/*b.forEach(function Call(item){
 console.log(item)
})*/
 
for(let k=0;k<a.length;k++){
   if(max<a[k]){
     max=a[k]
   }
}
console.log("Max of Array is "+max)
let count=0
let Max
let E=[1,1,2,3,3,3,4,4]
 for(let m=0;m<E.length;m++){
 for(let n=0;n<E.length;n++){
 if(E[m] == E[n])
  count=count+1
  if(max>count){
     Max=E[m]}
 }
 count=0
 }
 console.log("More frequent Element in Array "+Max)
 
 console.log(".....Array Operation is ")
 let arr =['a','b','c']
 console.log("Inserting to array ")
 console.log(arr)
 arr.push('d')
 arr.push('e')
 console.log(".....After added to the array ")
 console.log(arr)
 arr.pop()
 arr.pop()
 console.log(".....After deleted to the array ")
 console.log(arr)
 
 let w=[1,2,3,4,5]
 let q=[2,2,3,6,8]
 for(let y=0;y<w.length;y++){
  for(let u=0;u<w.length;u++){
   if(w[y]== q[u])
   { console.log(w[y])
   }
 }}
 
 //JSon Operation
 let student = [{regno:'2021/ICT/107',age:24,course:'IT'},{regno:'2021/ICT/107',age:24,course:'IT'}]
 