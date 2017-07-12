const bubbleSort = (array) => {


  array.forEach((val, i, array) => {

    for (let j = 0; j < array.length; j++) {

      if (array[j] > array[j + 1]) {
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
