let s="madam give samosa for my mom and dad";
 s=s+" ";
var word="";
for(k of s){
    if(k!=" "){
        word=word+k;
    }
    else{
        rev=word.split("").reverse().join("");
        if(rev==word){
        console.log(word);
    }
    word=""
}
}