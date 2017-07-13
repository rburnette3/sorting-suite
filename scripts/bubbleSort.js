const bubbleSort = (array) => {

  array.forEach((val, i, array) => {

    for (let j = 0; j < array.length; j++) {

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  });

  return array
}

module.exports = bubbleSort;
