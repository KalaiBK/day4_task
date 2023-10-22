(function(array) {
    for(let i = 0; i < array.length; i++) {
        var string = array[i];
        string = string.toLowerCase().split(' ');
        for (let j = 0; j < string.length; j++) {
            string[j] = string[j].charAt(0).toUpperCase() + string[j].slice(1);
        }
        console.log(string.join(" "));
    }
})(["guvi","kalai","selvan"]);