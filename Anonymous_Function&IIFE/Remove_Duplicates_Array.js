(function(array) {
    for (let i = 0; i < array.length; i++) { 
        for (let j = i+1; j < array.length; j++) {
            if(array[i] == array[j]) {
                array.splice(j,1);
            }
        }
    }
    console.log(array);
}
)(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"]);