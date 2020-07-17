var id = [3, 2, 6, 8, 2, 3, 9, 6];
var unique = [];

for(let i = 0; i <id.length; i++){
    var element = id[i];
    var index = unique.indexOf(element);
    if(index == -1){
        unique.push(element);
    }
}
console.log(unique);