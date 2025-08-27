let list = [2,6,1,4,5,3,7]
let item = 5
list = [...list.sort((a,b) => a - b)]
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
console.log(list)