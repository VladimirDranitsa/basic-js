module.exports = function transform( arr ) {
  const alteredArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === '--discard-next') {
      continue
    } else if (arr[i + 1] === '--discard-prev') {
      continue
    } else if (arr[i] === '--double-next') {
      alteredArray.push(arr[i + 1])
    } else if (arr[i + 1] === '--double-prev') {
      alteredArray.push(arr[i])
    } else if ( arr[i] === '--double-prev' || arr[i] === '--discard-prev' ||  arr[i] === '--discard-next' ){
      continue
    } else if ( arr[i] === ' ' || arr[i] === 'undefined'){
      continue
    } else {
      alteredArray.push(arr[i])
    }
  }
  return alteredArray
}
