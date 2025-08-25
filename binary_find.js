const list = [1,2,3,4,5,6,7]
let item = 5
let low = 0
let hight = list.length-1

while (low<=hight) {
  let mid = (low + hight) / 2
  let guess = list[mid]
  if (guess === item) {
    console.log(mid)
    break
  }
  if (guess > item) {
    hight = mid - 1
  }
  if (guess < item) {
    low = mid + 1
  }
}

