const array = [3,5,1,9,2,11];

const mergeSort = (array) => {
  if(array.length < 2) {
  // console.log(array);
  return array;
  } else {
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
  console.log(left);
  console.log(right);

  mergeSort(left);
  mergeSort(right);

  }

  const merge = (left, right) => {
    if(left[0]>right[0]){
      left[0]=right[0];

      console.log(left[0])
    }


  }
  return
}

mergeSort(array)

module.exports = mergeSort
