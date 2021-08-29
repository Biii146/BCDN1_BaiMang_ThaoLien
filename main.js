var numArray = [];

function addElement() {
    var nums = parseInt(document.getElementById("inputNumber").value);
    numArray.push(nums);
    document.getElementById("txtShow").innerHTML = numArray;
}
document.getElementById("btnAdd").onclick = addElement;

// 1. TÍNH TỔNG CÁC SỐ DƯƠNG
function sumNum() {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        }
    }

    document.getElementById("txtSum").innerHTML = sum;
}
document.getElementById("btnSum").onclick = sumNum;

// 2. ĐẾM CÁC SỐ DƯƠNG
function countNum() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }

    document.getElementById("txtCount").innerHTML = count;
}
document.getElementById("btnCount").onclick = countNum;

// 3. TÌM SỐ BÉ NHẤT
function findMin() {
    var index = 0;
    var min = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            index = i;
            min = numArray[index];
        }

    }
    console.log(index)
    document.getElementById("txtFindMin").innerHTML = min + " là số bé nhất";
}
document.getElementById("btnFindMin").onclick = findMin;

// 4. TÌM SỐ DƯƠNG BÉ NHẤT
var positiveArray = [];

// 5. TÌM SỐ CHẴN CUỐI CÙNG
function findLastEven() {
    var lastEven = [];

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            lastEven.push(numArray[i]);
        } 
    }
    document.getElementById("txtLastEven").innerHTML = (lastEven[lastEven.length - 1] || -1);

}
document.getElementById("btnLastEven").onclick = findLastEven;

// 6. ĐỔI CHỖ
function moveNumber() {
    var place1 = parseInt(document.getElementById("inputPlace1").value);
    var place2 = parseInt(document.getElementById("inputPlace2").value);
    var temp = numArray[place1];
    numArray[place1] = numArray[place2];
    numArray[place2] = temp;

    document.getElementById("txtMove").innerHTML = numArray;
}
document.getElementById("btnMove").onclick = moveNumber;


// 7. SẮP XẾP TĂNG DẦN
function arrangeNumb() {
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtArrange").innerHTML = numArray;
}
document.getElementById("btnArrange").onclick = arrangeNumb;

// 8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
function checkPrime(x) {
    //biến kiểm tra
    var check = true;

    // Nếu x bé hơn 2 tức là không phải số nguyên tố
    if (x < 2) {
        check = false;
    }
    else if (x == 2) {
        check = true;
    }
    else if (x % 2 == 0) {
        check = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(x); i += 2) {
            if (x % i == 0) {
                check = false;
            }
        }
    }
    return check;
}

function findFirstPrime() {
    var temp = 0;

    for (var i = 0; i < numArray.length; i++) {
        if (checkPrime(numArray[i])) {
            temp = numArray[i]
            break;
        } else {
            temp = -1;
        }
    }
    document.getElementById("txtFirstPrime").innerHTML = temp;

}
document.getElementById("btnFirstPrime").onclick = findFirstPrime;

// 9. ĐẾM SỐ NGUYÊN
var numFloatArray = [];

function addFloatNumber() {
    var nums = parseFloat(document.getElementById("inputFloat").value);
    numFloatArray.push(nums);
    document.getElementById("txtShowFloat").innerHTML = numFloatArray;
}
document.getElementById("btnAddFloat").onclick = addFloatNumber;

function countFloatNumber() {
    var count = 0;
    for (var i = 0; i < numFloatArray.length; i++) {
        if (Number.isInteger(numFloatArray[i])) {
            count++
        }
    }
    document.getElementById("txtCountInteger").innerHTML = count;
}
document.getElementById("btnCountInteger").onclick = countFloatNumber;

// 10. SO SÁNH SỐ ÂM VÀ SỐ DƯƠNG
function compareNumbers() {
    var countPositive = 0;
    var countNegative = 0;
    var content = "";

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            countPositive++;
        } else {
            countNegative++;
        }
    }

    if (countPositive > countNegative) {
        content = "số dương > số âm";
    } else if (countPositive == countNegative) {
        content = "số dương = số âm";
    } else {
        content = "số dương < số âm";
    }
    document.getElementById("txtCompare").innerHTML = content;

}
document.getElementById("btnCompare").onclick = compareNumbers;





