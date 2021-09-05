function findMinAndRemove(arr) {
  let min = arr[0];
  let lowestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      lowestIndex = i;
    }
  }
  arr.splice(lowestIndex, 1);
  return min;
}

function selectionSort(arr) {
  const arrangedArr = [];

  while (!!arr.length) {
    arrangedArr.push(findMinAndRemove(arr));
  }

  return arrangedArr;
}
