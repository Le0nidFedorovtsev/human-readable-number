module.exports = function toReadable(n) {
  const arr2 = {
    2: 'twenty', 3: 'thirty',
    4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy',
    8: 'eighty', 9: 'ninety',
  }
  const arr = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
    7: 'seven', 8: 'eight', 9: 'nine'
  }
  const arr3 = {
    1: 'one hundred', 2: 'two hundred', 3: 'three hundred', 4: 'four hundred', 5: 'five hundred', 6: 'six hundred', 7: 'seven hundred', 8: 'eight hundred',
    9: 'nine hundred'
  }

  const arr4 = {
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
  }


  const len = n.toString().length
  const rt = n.toString()[0]
  const re = n.toString()[0]



  if (len === 1) {
    if (n <= 9) { return arr[n] }
    else { return '' }
  }


  if (len === 2) {

    if (n === 10) {
      return 'ten'
    }
    if (n === 11) {
      return 'eleven'
    }
    if (n === 12) {
      return 'twelve'
    }
    if (n === 13) {
      return 'thirteen'
    }
    if (n === 14) {
      return 'fourteen'
    }
    if (n === 15) {
      return 'fifteen'
    }
    if (n === 16) {
      return 'sixteen'
    }
    if (n === 17) {
      return 'seventeen'
    }
    if (n === 18) {
      return 'eighteen'
    }
    if (n === 19) {
      return 'nineteen'
    }


    const rr = n.toString()[1]

    const d = arr2[re] + ' '
    const e = arr[rr]
    if (e === 'zero') {
      return arr2[re]
    }
    return d + e
  };



  if (len === 3) {

    const last = Number(n.toString().substr(1, 2))
    let hundreds = arr3[n.toString()[0]]
     if (10 <= last && last <= 19) {
      var tens = arr4[last]
      var ones = ""
      return hundreds + " " + tens
    } else {
      var tens = arr2[Number(n.toString()[1])]
      var ones = arr[Number(n.toString()[2])]
    }

    if (tens === undefined && ones === 'zero') {
      return hundreds
    } else if (tens === undefined) {
      return hundreds + " " + ones
    } else if (ones === 'zero') {
      return hundreds + " " + tens
    }

    
    return hundreds + " " + tens + " " + ones
  }
}

//console.log(toReadable(501))

