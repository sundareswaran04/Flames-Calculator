const myset=new Set();

function Generate(){

const name_1=document.getElementById("1").value.toLowerCase();
const name_2=document.getElementById("2").value.toLowerCase()
var n=0;

if (name_1.trim() === "" || name_2.trim() === "") {
    alert("Enter both names");
} else {
    var Show = document.getElementById("show");
    var popup = document.getElementById("popup");

    Show.style.display = "block";
    popup.style.display = "none";

var count=0;
const arr=Array.from(name_1)
const arr1=Array.from(name_2)
for(var i=0;arr[i];i++){
   
    for(var j=0;arr1[j];j++)
    if(arr[i]==arr1[j]){
    arr[i]=' ';
    arr1[j]='0';
    count=count+2;
        }
    }

var limit=(name_1.length+name_2.length)-count;
if(limit<=0){
    alert("Please Enter Valid One")
}
else{
const F=['F','L','A','M','E','S']
var temp=limit;
for(var i=0;F[i];i++)
{
    myset.add(F[i]);
}


var range=0;
var n=-1;

while(range<5){     
while(temp>0){
    if(n>=(myset.size-1)){
n=0;
    }
    else{
    n++;
    }
    temp--;
}
temp=limit;
myset.delete(F[n]);

F.splice(n,1);
n=n-1;
range++;

}
if(F[0]=='F'){
    
    Show.innerHTML="<h2>Friend</h2>"
}
else if(F[0]=='L'){
    Show.innerHTML="<h2>Lover</h2>"
}
else if(F[0]=='A'){
    Show.innerHTML="<h2>Affair</h2>"
}
else if(F[0]=='M'){
    Show.innerHTML="<h2>Marraige</h2>"
}
else if(F[0]=='E'){
    Show.innerHTML="<h2>Enemy</h2>"
}
else if(F[0]=='S'){
    Show.innerHTML="<h2>Sibilings</h2>"
}



}
}
}