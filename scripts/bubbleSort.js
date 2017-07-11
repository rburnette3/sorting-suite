const nums = [10, 1, 13, 5, 8]



const bubbleSort = (array) => {
  let count = 0;
  array.forEach((val, i, arr) => {

    for(let j = 0; j< array.length; j++) {

      if(array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }

   }


});
// count ++
// console.log('count: ', count)

return array

}

// bubble(nums)

module.exports = bubbleSort;
