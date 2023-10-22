(function(firstArray, secondArray){ 
    if(firstArray.length != secondArray.length) {
        return;
    }
    var finalArray = firstArray.concat(secondArray);
    for(var i=0;i<finalArray.length;i++){  
        for(var j=0;j<finalArray.length-i-1;j++){  
            if(finalArray[j]>finalArray[j+1]){  
                var tempValue= finalArray[j];  
                finalArray[j]=finalArray[j+1];  
                finalArray[j+1]=tempValue;  
            }  
        }  
    }
    var length = finalArray.length;
    console.log((finalArray[length/2 - 1] + finalArray[length/2])/2);
})([2,3,12,14],[1,5,8,9]);