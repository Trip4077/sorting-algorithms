import { EFAULT } from "constants";

const Aglorithms = {
    merge: array => {
        return merge(array);
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

    bubble: arr => {
        console.log('bubble')
    },

    quick: arr => {
        console.log('quick');
    }
}

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

export default Aglorithms;