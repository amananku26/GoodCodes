/**
 * Given an array [“123f”, “1dsa12”, “1212ds”, “65fd”, “sadfa”, “asdasd”]
 * Each item can contain 0-9, a-z, A-Z where a-z, A-Z characters are unwanted
 * Sum of all the numbers after removing all the unwanted characters 123+112+1212+65
**/.



const sumArr = (arr) => {
    let alpha = '1234567890'
    let alphaS = alpha.split('')
    // console.log(alphaS)
    let count = 0
    for(var i = 0 ; i < arr.length ; i++){
        let arr2 = arr[i].split('')
        let rr = []
        for(var j = 0 ;  j < arr2.length ; j++){
             for(var p = 0 ; p < alphaS.length ; p++){
                 if(arr2[j]===alphaS[p]){
                     // console.log(arr2[j],arr2)
                     rr.push(arr2[j])
               }
             }
        }
        // count = count+
        let tt =  Number(rr.join(''))
        count = count+tt     
    }
return count
};



console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr(["asdasd"])); // 0
console.log(sumArr(["asdasd12"])); // 12
console.log(sumArr(["12"])); // 12
