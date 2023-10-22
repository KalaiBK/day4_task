(function(array, k){
    for (let i = 0; i < k; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array);
})([1,2,3,4,5], 3);