var marks = [88, 98, 43, 75, 23, 38];
var max =marks[0];
for(let i = 0; i<marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);