(function(array) {
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2!=0) {
            console.log(array[index]);
        }
    }
})([1,2,3,4,5]);