class MathUtils {
  static sum (a, b) {
    console.log(a + ' + ' + b)
    return 'Sum is ' + (a + b)
  }

  static sumMore (a, b, c) {
    console.log(a + ' + ' + b + ' + ' + c)
    return 'Sum is ' + (a + b + c)
  }

  static subtract (a, b) {
    console.log(a + ' - ' + b)
    return 'Result is ' + (a - b)
  }

  static divide (a, b) {
    console.log(a + ' / ' + b)
    return 'Division is ' + (a / b)
  }

  static abs (a) {
    if (a >= 0) {
      return 'absolute of ' + a + ' is ' + a
    } else {
      return 'absolute of ' + a + ' is ' + a * -1
    }
  }

  static hypotenuse (stem, height) {
    return Math.sqrt(Math.pow(stem, 2) + Math.pow(height, 2))
  }

  static poweroftwo (a) {

  }
}

module.exports = MathUtils
