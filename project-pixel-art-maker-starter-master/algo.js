function merge(arr1, arr2) {
  const merged = [];
  let arr1item = arr1[0];
  let arr2item = arr2[0];
  let i = 1;
  let j = 1;
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  while (arr1item || arr2item) {
    if (!array2Item || arr1item < arr2item) {
      merged.push(arr1item);
      arr1item = arr1[i];
      i++;
    } else {
      merged.push(arr2item);
      arr2item = arr2[j];
      j++;
    }
  }
  return merged;
}
