let array = [8, 4, 9, 5, 6, 7];


const insertionSort = (array) => {

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
      }
    }
  }

  return array
}
insertionSort(array)

module.exports = insertionSort;
