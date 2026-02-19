const express=require('express');
const app=express();
app.use(express.json());
const port=3091;
function anagram(str1,str2){
    if(str1.length!=str2.length) return false;
    let  arr1=new Array(26).fill(0); // for storing frequency of string 1
    let  arr2=new Array(26).fill(0); // for storing frequency of string 2
    let k=0,index1,index2;
    while(k<str1.length){
        index1=str1.charCodeAt(k)-97;   // codes every-thing to 0 indexing
        index2=str2.charCodeAt(k)-97;
        arr1[index1]++;
        arr2[index2]++;
        k++;
    }
    for(let i=0;i<26;i++){
        if(arr1[i]!=arr2[i]) return false;
    }
    return true;
}
app.get('/check-anagram',function(req,res){ 
    const str1=req.query.str1;
    const str2=req.query.str2;
     if (!str1 || !str2) {
        return res.status(400).send({ error: "Both str1 and str2 are required" });
    }
    const ans=anagram(str1,str2);
    res.send({
        result:ans
    });
})
console.log('server is listening');
app.listen(port); 
