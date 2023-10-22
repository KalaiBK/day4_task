(function(array) {
    for (let i = 0; i < array.length; i++) {
        let isPrime = true;
        var number = array[i]; 
        if (number === 1) {
            console.log(number);
        }
        else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        
            if (isPrime) {
                console.log(number);
            }
        }
    }
})([1,2,3,4,5,6,7,8,9,10]);