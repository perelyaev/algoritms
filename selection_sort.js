const arr = [5,3,6,2,10]

function findSmallest(arr) {
  let smallest = arr[0]
  let smallest_index = 0
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] < smallest) {
      smallest_index = i
    } else {
      smallest = arr[i]
    }
  }
  console.log(arr[smallest_index])
  return smallest_index
}

function selectionSort(arr) {
  const newArr = []
  let i = 0
  while (i < arr.length) {
    let smallest = findSmallest(arr)
    newArr.push(arr[smallest])
    arr.splice(smallest, 1)
  }
  return newArr
}

selectionSort(arr)