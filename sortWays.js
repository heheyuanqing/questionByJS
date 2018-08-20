function maopao(arr) {
    let flag = true, len = arr.length, i, j, temp;
    while (flag) {
        flag = false;
        for (i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                flag = true;
            }
        }
    }
    console.log(arr);

}

function xuanze(arr) {
    let len = arr.length, i, j, temp, min;

    for (i = 0; i < len; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    console.log(arr);
}


function charu(arr) {
    let len = arr.length, i, j, key;
    for (i = 1; i < len; i++) {
        key = arr[i];
        for (j = i - 1; j >= 0 && key < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key;
    }
    console.log(arr);

}

function kuaipai(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let provit = arr[0], i, left = [], right = [];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < provit) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return kuaipai(left).concat(provit, kuaipai(right));
}


function getM(arr, start, end) {
    let provit = arr[start],
        low = start,
        high = end;
    while (high > low) {
        while (arr[high] > provit && high > low) {
            high--;
        }
        if (low < high) {
            arr[low] = arr[high];
            low++;
        }
        while (arr[low] < provit && high > low) {
            low++;
        }
        if (low < high) {
            arr[high] = arr[low];
            high--;
        }
    }
    arr[low] = provit;
    return low;
}

function kuaipai2(arr, start, end) {
    if (start < end) {
        let i = getM(arr, start, end);
        kuaipai2(arr, start, i - 1);
        kuaipai2(arr, i + 1, end);
    }
    return arr;

}

let arr = [5, 7, 8, 6, 2, 1, 7, 6, 3];
maopao(arr);
xuanze(arr);
charu(arr);
console.log(kuaipai(arr));
console.log(kuaipai2(arr,0,arr.length-1));