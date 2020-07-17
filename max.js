var business = 650;
var minister = 760;
var amla = 356;
if(business > minister){
    if(business > amla){
        console.log("businessman is richer.");
    }
    else {
        console.log("minister is richer");
    }
}
else{
    if(minister > amla){
        console.log("minister is richer");
    }
    else {
        console.log("amla is richer");
    }
}