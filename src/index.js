module.exports = function toReadable (number) {

  const arr2 = {
    2: 'twenty', 3: 'thirty',
    4: 'fourty', 5: 'fifty', 6: 'sixty', 7: 'seventy',
    8: 'eighty', 9: 'ninety',
  }
  const arr = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
    7: 'seven', 8: 'eight', 9: 'nine'
  }
  const arr3 = {
    1: 'one hundred', 2: 'two hungred', 3: 'three hungred', 4: 'four hungred', 5: 'five hungred', 6: 'six hungred', 7: 'seven hungred', 8: 'eight hungred',
    9: 'nine hungred'
  }

  const len = number.toString().length
  const rt = number.toString()[0]
  const re = number.toString()[0]

  if (len === 1) {
    if (n <= 9) { return arr[number] }
    else { return '' }
  }


  if (len === 2) {
    const rr = number.toString()[1]

    const d = arr2[re] + ' '
    const e = arr[rr]
    return d + e
  };



  if (len === 3) {
    return arr3[rt]
  }


}
