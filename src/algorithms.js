const Aglorithms = {
    merge: arr => {
        console.log('merge');
        console.log(arr)
    },

    insertion: array => {
        console.log('insertion')
        for(let i = 1; i < array.length; i++) {
            //Loop through entire array for comparison
            //console.log('outer', array[i]);
            for(let j = 0; j < i; j++) {
              //check if value is less than current index
              //console.log('inner', array[j]);
              if(array[i] < array[j]) {
        
                //if so, store in temp variable removing it from array
                //console.log('pre-sort', array);
                const temp = array.splice(i, 1);
                //console.log('temp', temp);
                //INSERT value into correct index
                array.splice(j, 0, temp[0]);
                //console.log('post-sort', array);
              }
            }
          }

        return array;
    },

    bubble: arr => {
        console.log('bubble')
    },

    quick: arr => {
        console.log('quick');
    }
}

export default Aglorithms;