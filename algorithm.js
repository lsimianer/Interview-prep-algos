// check prime
function isPrime(n){
    var divisor = 2;

    while(n > divisor){
        if(n % divisor == 0){
        return false;
        }
        else
            divisor++;
    }
    return true;
}

 console.log("is 137 prime :" + isPrime(137));

 console.log(" is 237 prime :" + isPrime(237));

 console.log("end of check prime function");
 //  end check prime

//  begin get prime factors
console.log("begin get prime factors");

function primeFactors(n){
    var factors = [],
        divisor = 2;

        while(n>2){
            if(n % divisor == 0){
                factors.push(divisor);
                n= n/ divisor;
            }
            else{
                divisor++
            }
        }
        return factors;
}

console.log(" factors for 69 = " + primeFactors(69));

console.log(" factors for 10025 = " + primeFactors(10025));
console.log("end prime factors function");
//  end prime factors
// begin remove duplicate numbers
console.log("begin removeDuplicates");

function removeDuplicates(arr){
    var exists = {},
    outArr = [],
    elm;

    for (var i = 0; i<arr.length; i++){
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm]= true;
        }
    }
    return outArr;
}
console.log("original array " + [1,3,3,3,1,5,6,7,8,1]);
console.log("duplicates removed array " + removeDuplicates([1,3,3,3,1,5,6,7,8,1]));
console.log("end removeDuplicates");
// end removeDuplicates
// begin merge sort
console.log("begin mergeSort");

function mergeSort(list) {
    const len = list.length
    // if an array is one item its sorted already...
    if(len == 1){
        return list
    }

    // get the middle item
    const middleIndex = Math.ceil(len /2)

    // split the current list into two: left and right list
    let leftList = list.slice(0, middleIndex)
    let rightList = list.slice(middleIndex, len)

    leftList = mergeSort(leftList)
    rightList = mergeSort(rightList)

    return mergeSort(leftList, rightList)
}
// solve the sub problems and merge them together, defien merge

function merge(leftList, rightList){
    const sorted = []
    while (leftList.length > 0 && rightList.length > 0){
        const leftItem = leftList[0]
        const rightItem = rightList[0]
        if(leftItem > rightItem){
            sorted.push(rightItem)
            rightList.shift()
        } else {
            sorted.push(leftItem);
            leftList.shift()
        }
    }
    // if the left has items add them to results
    while(leftList.length !== 0){
        sorted.push(leftList[0])
        leftList.shift()
    }
    // now do the right side
    while (rightList.length !== 0){
        sorted.push(rightList[0])
        rightList.shift()
    }
    return sorted
}

const list = [4, 2, 3, 1, 5]
const sorted = mergeSort(list)
console.log("This is the pre sorted list "+ list)

console.log(mergeSort(list))
//  end merge sort


// begin bubble sort

function bubbleSort(a){
    var swap
    var n = a.length-1;
    var x = a;
    do{
        swap = false;
        for( var i=0; i < n; i ++){
            if(x[i] < x[i+1]){
                var temp = x[i];
                x[i] = x[i+1];
                x[i+1] =temp;
                swap =true;
            }
        }
        n--;
    }while(swap);
    return x;
}

console.log(bubbleSort([12, 88888, 9898, 222, 400, 600, 13, 14, 15, 13, 18, 55, 67, 77, 82]));
//  end bubble sort

// factorial of a number
console.log("factorial of a number");

 var N = Math.floor(Math.random()*10+1)
 console.log("Lets get the factorial of "+ N);


function factorial (x){
if ( x === 0){
    return 1;
}
// console.log("our sum is "+ factorial(N-1));
return x * factorial(x-1);
}
console.log("our sum is "+ factorial(N));
