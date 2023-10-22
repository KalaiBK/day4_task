var sum = (array) => {
    var total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log(total);
}

sum([1, 2, 3]);