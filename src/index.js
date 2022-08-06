module.exports = function toReadable (n) {
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
    9: 'nine hundred'
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
        return d
      }
      return d + e
    };
  
  
  
    if (len === 3) {
  
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
  
      const rp = n.toString()[1]
      const rr = n.toString()[2]
  
      
      const s =  arr3[rt] + ' '
      const d = arr2[rp] + ' '
      const e = arr[rr]
  
          if (e === 'zero') {
        return s + d
      }
  
      const result = s + d + e
  
      const res = result.trimEnd()
  
  
      return res
  
      
    }
  }

