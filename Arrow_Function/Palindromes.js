var palindromes = (array) => { 
    for(let i = 0; i < array.length; i++) {
        var characters = array[i].split("");
        if(array[i] == characters.reverse().join("")) {
            console.log(array[i]);
        }
    } 
};

palindromes(["mom", "12121"]);