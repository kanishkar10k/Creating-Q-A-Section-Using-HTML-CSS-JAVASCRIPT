var arr=["what is html","what is css","what is java","what is javascript","why html is used","why javascript is used","why css is used"];
function check(){
    var inputvalue = document.getElementById("text").value;
    var t=inputvalue.toLowerCase();
    let flag=0;
    for(let i=0;i<arr.length;i++){
    if(t==arr[i]){
        flag=1;
    }
}
    if(flag==1){
        alert("Your answer will be show on application");
    }
    else{
        alert("This is not Matchs with our Database!");
    }
}
function message(){
    alert("please ask something!");
}