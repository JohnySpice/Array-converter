const convert = async function(inputArray) {
  let sequenceStart = inputArray[0]
  let resultString = ''
  for(let i = 0, sequenceLength = 1; i < inputArray.length; i++, sequenceLength++) {
     if(inputArray[i] + 1 !== inputArray[i + 1]) {
      resultString += sequenceLength > 2 ? `${sequenceStart}-${inputArray[i]},`
      : sequenceLength == 2 ? `${sequenceStart},${inputArray[i]},`
      : `${sequenceStart},`
      sequenceStart = inputArray[i + 1]
      sequenceLength = 0
    }
}
  return resultString.slice(0,-1)
}
module.exports = convert

