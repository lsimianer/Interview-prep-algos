$(document).ready(function () {
    console.log("ready!");
});


function TRIcalculate() {
    event.preventDefault();
    var N1 = parseInt(document.getElementById("num1").value);
    var N2 = parseInt(document.getElementById("num2").value);
    var N3 = parseInt(document.getElementById('num3').value);
    var operator = document.getElementById("operator").value;

    function isItRight() {
        if (N1 < 1 || N2 < 1 || N3 < 1) document.getElementById('result').value = "Not a Right Triangle";
        let [c, b, a] = [N1, N2, N3].sort((a, b) => b - a);
        return c * c == a * a + b * b;

    }

    if (operator === "area") {

        document.getElementById('result').value = ((N1 * N2) / 2);
        console.log("calculating");

    };

    if (operator === "ThirdEdge") {
        document.getElementById('result').value = ((N1 + N2) - 1);
        console.log("calculating edge");
    };

    if (operator === "RightTri") {
        if (N1 < 1 || N2 < 1 || N3 < 1) {
            document.getElementById('result').value = "Not a Right Triangle";
        } else {
            let [c, b, a] = [N1, N2, N3].sort((a, b) => b - a);
            if (c * c == a * a + b * b) {
                document.getElementById('result').value = "This is a Right Triangle";

            } else {
                document.getElementById('result').value = "Not a Right Triangle";

            };

        }


        console.log("calculating edge");
    };

};
// mortgage calc
//n1 = number of payments
//n2 = interest
//n3 = term
// years * 12 = N
//(interest / 100) /12 = I

var term;
var apr;
var amt;
var mPmt;

function mortgageCalc() {
    event.preventDefault();
    var amt = parseInt(document.getElementById("FinancedAMT").value);
    var apr = parseInt(document.getElementById("interestRate").value);
    var term = parseInt(document.getElementById('termYears').value);

    apr /= 1200;
    term *= 12;
    document.getElementById("result1").value = "$" + payment;

    var payment = amt * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
    var totalCost = payment * term;
    document.getElementById('result1').value = '$' + payment.toFixed(2);
    document.getElementById('result2').value = '$' + totalCost.toFixed(2)

};

function CIRcalculate() {
    //operation 1 find circumfrence, radius, and diameter given Area
    var areaInput = parseInt(document.getElementById("Area").value);
    var circumfrenceInput = parseInt(document.getElementById("Circumfrence").value);
    var radiusInput = parseInt(document.getElementById('radius').value);

    // var radius1 =
    //operation 2 find area. radius, and diameter given circumfrence
}



function primeCalc() {
    var N1 = parseInt(document.getElementById("prime1").value);
    var operator = document.getElementById("primeOperator").value;
    // console.log(N1);
    console.log(operator);


    // check prime
    if (operator === "checkPrime") {
        function isPrime() {
            var divisor = 2;
            let x = N1;
            console.log(N1);
            console.log(x);

            while (x > divisor) {
                if (x % divisor == 0) {
                    document.getElementById('primeResult').value = false;
                    console.log(false);

                    return false;
                } else
                    divisor++;
            }
            document.getElementById('primeResult').value = true;
            console.log(true);
            return true;
        }
        isPrime(N1);
    };

    // if (operator === " factorPrime") {
    //     function primeFactors() {
    //         var factors = [],
    //             divisor = 2;
    //             console.log(factors);
    //             console.log(divisor);
    //             let n = N1;

    //         while (n > 2) {
    //             if (n % divisor == 0) {
    //                 factors.push(divisor);
    //                 n = n / divisor;
    //             } else {
    //                 divisor++
    //             }
    //         }               
    //         document.getElementById('primeResult').value = factors.join();
    //         console.log(factors);
    //         return factors;
    //     }
    //     primeFactors(N1)
    //     console.log(primeFactors(185));
    // }

};


// console.log("is 137 prime :" + isPrime(137));
// console.log(" is 237 prime :" + isPrime(237));
// console.log("end of check prime function");
//  end check prime







// begin remove duplicate numbers
console.log("begin removeDuplicates");

function removeDuplicates(arr) {
    var exists = {},
        outArr = [],
        elm;

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i];
        if (!exists[elm]) {
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}
console.log("original array " + [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);
console.log("duplicates removed array " + removeDuplicates([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
console.log("end removeDuplicates");
// end removeDuplicates
// begin merge sort
console.log("begin mergeSort");

function mergeSort(list) {
    const len = list.length
    // if an array is one item its sorted already...
    if (len == 1) {
        return list
    }

    // get the middle item
    const middleIndex = Math.ceil(len / 2)

    // split the current list into two: left and right list
    let leftList = list.slice(0, middleIndex)
    let rightList = list.slice(middleIndex, len)

    leftList = mergeSort(leftList)
    rightList = mergeSort(rightList)

    return mergeSort(leftList, rightList)
}
// solve the sub problems and merge them together, defien merge

function merge(leftList, rightList) {
    const sorted = []
    while (leftList.length > 0 && rightList.length > 0) {
        const leftItem = leftList[0]
        const rightItem = rightList[0]
        if (leftItem > rightItem) {
            sorted.push(rightItem)
            rightList.shift()
        } else {
            sorted.push(leftItem);
            leftList.shift()
        }
    }
    // if the left has items add them to results
    while (leftList.length !== 0) {
        sorted.push(leftList[0])
        leftList.shift()
    }
    // now do the right side
    while (rightList.length !== 0) {
        sorted.push(rightList[0])
        rightList.shift()
    }
    return sorted
}

const list = [4, 2, 3, 1, 5]
const sorted = mergeSort(list)
console.log("This is the pre sorted list " + list)

console.log(mergeSort(list))
//  end merge sort


// begin bubble sort

function bubbleSort(a) {
    var swap
    var n = a.length - 1;
    var x = a;
    do {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}

console.log(bubbleSort([12, 88888, 9898, 222, 400, 600, 13, 14, 15, 13, 18, 55, 67, 77, 82]));
//  end bubble sort

// factorial of a number
console.log("factorial of a number");

var N = Math.floor(Math.random() * 10 + 1)
console.log("Lets get the factorial of " + N);


function factorial(x) {
    if (x === 0) {
        return 1;
    }
    // console.log("our sum is "+ factorial(N-1));
    return x * factorial(x - 1);
}
console.log("our sum is " + factorial(N));