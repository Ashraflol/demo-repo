console.log("How you doing");
var number = 5; //in-line comment
/*
so this is multi line
comment
*/
var myname = "Ashraf"
myname = "lol"

var a = 19 ;
var B = 2;
var c = "here i am";
console.log(a);
a = 12;
B=a+1;
c=c+"     with a new thing "

console.log (B,c);

var camelHasgone="what's up dude" ;
var e ;
 a-- ;
console.log(a);

e=camelHasgone[0];

console.log(e) ;

var myarray = [[[2,3,4],[7,8,98]],[[10,11,12],[0,7,8]]];
var mydata = myarray[0][1][1];
console.log(mydata);
myarray.push([2,4,5]);
mydata = myarray[0][1][1];
console.log(myarray);
var remove = myarray.pop();
console.log(myarray);
var remove = myarray.shift();
console.log(myarray);
myarray.unshift([8,97,4]);
console.log(myarray);

function reusable(a,b){
        console.log(a-b)
}
reusable(11,21);
reusable(14,17);


 
function nextinline (arr,tet){
    arr.push(tet);
    return arr.shift();
}

var testarr=[1,2,3,4,5];

   
console.log('before '+JSON.stringify(testarr))
console.log(nextinline(testarr,6))
console.log('after'+JSON.stringify(testarr))
