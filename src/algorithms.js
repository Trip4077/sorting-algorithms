const Aglorithms = {
    merge: array => {
        return merge(array);
    },

    quick: array => {
        console.log('quick');

        return quickSort(array, 0, array.length-1);
    },

    insertion: arr => {
        console.log('insertion')
        for(let i = 1; i < arr.length; i++) {
            for(let j = 0; j < i; j++) {
                if(arr[i] < arr[j]) {
                    const temp = arr.splice(i, 1);

                    arr.splice(j, 0, temp[0]);
                }
            }
        }

        return arr;
    },

    bubble: array => {
        console.log('bubble')

        for(let i = 0; i < array.length; i++ ) {
            for(let j = 0; j < array.length - i - 1; j++) {
                if(array[j] > array[j + 1]) {
                    let temp = array[j];

                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }

        return array;
    },
}

/*

    Merge Sort Exterior functions

*/

const mergeParts = (left, right) => {
    const result = [];

    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length) result.push(left.shift());

    while(right.length) result.push(right.shift());

    return result;
}

const merge = array => {
    console.log('merge');
    
    if(array.length < 2) return array;

    const middle = Math.floor(array.length / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle, array.length);

    return mergeParts(merge(left), merge(right));
}

/*

    Quick Sort Exterior functions

*/

const swap = (array, leftIndex, rightIndex) => {
    const temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

const partition = (array, left, right) => {
    let pivot = array[Math.floor((right + left) / 2)];

    while(left <= right) {
        while(array[left] < pivot) {
            left++;
        }
        while(array[right] > pivot) {
            right--;
        }

        if(left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    return left;
}

const quickSort = (array, left, right) => {
    let index;

    if(array.length > 1) {
        index = partition(array, left, right);

        if(left < index - 1) quickSort(array, left, index - 1);

        if(index < right) quickSort(array, index, right);
    }

    return array;
}

export default Aglorithms;