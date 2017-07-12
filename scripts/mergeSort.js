const numbers = [9,2,5,1,7]

const mergeSort = array => {
  let middleNum = Math.floor(array.length/2);
  let leftSide = array.slice(0, middleNum);
  let rightSide = array.slice(middleNum);

  if (array.length < 2) {
    return array;
  }  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

const merge = (leftSide, rightSide) => {
  let newArray = [];

  while (leftSide.length && rightSide.length) {
    if (leftSide[0] < rightSide[0]) {
      newArray.push(leftSide.shift());
    } else {
      newArray.push(rightSide.shift());
    }
  }

  newArray.push(...leftSide, ...rightSide);

  return newArray;
}

mergeSort(numbers)

module.exports = mergeSort
