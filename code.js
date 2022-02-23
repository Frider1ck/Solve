function compareTriplets(a, b) {
    let arr = [0,0];

    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            arr[0]+=1;
        } 
        
        if (a[i] < b[i]) {
            arr[1]+=1;
        }
    }

    return arr;
}

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive+=1;
        } else if (arr[i] < 0) {
            negative+=1;
        } else {
            zero+=1;
        }
    }

    console.log((positive / arr.length).toPrecision(6));
    console.log((negative / arr.length).toPrecision(6));
    console.log((zero / arr.length).toPrecision(6));
}
