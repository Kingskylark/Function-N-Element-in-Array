
function DisplElement(array, num){
    if (array == null) {
        return "No Array";
    }

    if (num == null) {
        return array[0];
    }

    return array.slice(0, num);
  
}


console.log(DisplElement([7, 9, 0, -2]));
console.log(DisplElement([], 3));
console.log(DisplElement([7, 9, 0, -2], 3));
console.log(DisplElement([7, 9, 0, -2], 6));
console.log(DisplElement([7, 9, 0, -2], -3));