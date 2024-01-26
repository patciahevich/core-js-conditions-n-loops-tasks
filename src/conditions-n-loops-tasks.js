/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let num = a;
  if (b > num) {
    num = b;
  } else if (c > num) {
    num = c;
  }
  return num;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const xValue = Math.abs(queen.x - king.x);
  const yValue = Math.abs(queen.y - king.y);
  if (xValue === 0 || yValue === 0 || xValue === yValue) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  function findSide(x, y, z) {
    if (x === y && z > 0) {
      return z < x + y;
    }
    return false;
  }
  return findSide(a, b, c) || findSide(b, c, a) || findSide(c, a, b);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  function addSymbol(symbol, n) {
    let str = '';
    for (let i = 1; i <= n; i += 1) {
      str += symbol;
    }
    return str;
  }

  const n1 = Math.floor(num / 10);
  let n2 = num % 10;
  let n3 = false;
  if (n2 >= 5 && n2 !== 9) {
    n3 = true;
    n2 -= 5;
  }
  let result = '';
  if (n1) {
    result += addSymbol('X', n1);
  }
  if (n2 === 9) {
    result += 'IX';
    return result;
  }
  if (n3) {
    result += 'V';
  }
  if (n2 === 4) {
    result += 'IV';
  } else {
    result += addSymbol('I', n2);
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function switchValue(value) {
    switch (value) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '.':
      case ',':
        return 'point';
      case '-':
        return 'minus';
      default:
        return '';
    }
  }
  let result = '';
  if (numberStr.length > 1) {
    for (let i = 0; i < numberStr.length - 1; i += 1) {
      result += `${switchValue(numberStr[i])} `;
    }
    result += switchValue(numberStr[numberStr.length - 1]);
  } else {
    result += switchValue(numberStr);
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }
  return str === reversedStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 9) {
    if (n % 10 === digit) {
      return true;
    }
    n = Math.floor(n / 10);
  }
  return n % 10 === digit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function sumValue(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i += 1) {
      sum += arr[i];
    }
    return sum;
  }
  for (let i = 1; i < arr.length; i += 1) {
    const num1 = sumValue(0, i - 1);
    const num2 = sumValue(i + 1, arr.length - 1);
    if (num1 === num2) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const n = Math.floor(size / 2);
  let rowStart = 0;
  let rowEnd = size - 1;
  let columnStart = 0;
  let columnEnd = size - 1;
  let value = 1;

  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[matrix.length] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = null;
    }
  }

  function fillMatrix() {
    for (let i = rowStart; i <= rowEnd; i += 1) {
      matrix[rowStart][i] = value;
      value += 1;
    }
    columnStart += 1;
    for (let i = columnStart; i <= columnEnd; i += 1) {
      matrix[i][rowEnd] = value;
      value += 1;
    }
    rowEnd -= 1;
    for (let i = rowEnd; i >= rowStart; i -= 1) {
      matrix[columnEnd][i] = value;
      value += 1;
    }
    columnEnd -= 1;
    for (let i = columnEnd; i >= columnStart; i -= 1) {
      matrix[i][rowStart] = value;
      value += 1;
    }
    rowStart += 1;
  }

  while (matrix[n][n] === null) {
    fillMatrix();
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyArr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    copyArr[copyArr.length] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      copyArr[i][j] = matrix[i][j];
    }
  }

  const workMatrix = matrix;
  let rowCount = 0;
  for (let i = copyArr.length - 1; i >= 0; i -= 1) {
    const arr = copyArr[rowCount];
    for (let j = 0; j < arr.length; j += 1) {
      workMatrix[j][i] = arr[j];
    }
    rowCount += 1;
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const copyArr = arr;
  if (copyArr.length > 1) {
    const mid = Math.floor(copyArr.length / 2);

    const left = [];
    const right = [];

    for (let i = 0; i < mid; i += 1) {
      left[i] = copyArr[i];
    }

    for (let i = mid; i < copyArr.length; i += 1) {
      right[i - mid] = copyArr[i];
    }

    let l = 0;
    let r = 0;
    let k = 0;

    sortByAsc(left);
    sortByAsc(right);

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        copyArr[k] = left[l];
        l += 1;
      } else {
        copyArr[k] = right[r];
        r += 1;
      }
      k += 1;
    }
    while (l < left.length) {
      copyArr[k] = left[l];
      l += 1;
      k += 1;
    }
    while (r < right.length) {
      copyArr[k] = right[r];
      r += 1;
      k += 1;
    }
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shuffleIteration(string) {
    let odd = '';
    let even = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        even += string[i];
      } else {
        odd += string[i];
      }
    }
    return even + odd;
  }

  let index = 1;
  let string = shuffleIteration(str);
  while (string !== str) {
    const newStr = shuffleIteration(string);
    string = newStr;
    index += 1;
  }

  const secretIndex = iterations % index;
  let modStr = str;
  for (let i = 1; i <= secretIndex; i += 1) {
    const newString = shuffleIteration(modStr);
    modStr = newString;
  }
  return modStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function getFirstIndex(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      if (arr[i - 1] < arr[i]) {
        return i - 1;
      }
    }
    return null;
  }
  function getIndex(arr, i) {
    let n = null;
    let index = null;
    for (let k = arr.length; k > i; k -= 1) {
      if (arr[k] > arr[i]) {
        if (n) {
          if (arr[k] < n) {
            n = arr[k];
            index = k;
          }
        } else {
          n = arr[k];
          index = k;
        }
      }
    }
    return index;
  }
  function sortArr(arr) {
    const sortedArr = arr;
    let temp;
    for (let j = 0; j < sortedArr.length; j += 1) {
      for (let i = 0; i < sortedArr.length - 1; i += 1) {
        let a = sortedArr[i];
        let b = sortedArr[i + 1];
        if (a > b) {
          temp = a;
          a = b;
          b = temp;
          sortedArr[i] = a;
          sortedArr[i + 1] = b;
        }
      }
    }
    return sortedArr;
  }

  const arr = [];
  let str = `${number}`;
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = +str[i];
  }

  const d1 = getFirstIndex(arr);
  if (d1 === null) {
    return number;
  }
  const d2 = getIndex(arr, d1);
  [arr[d1], arr[d2]] = [arr[d2], arr[d1]];
  const splitArr = [];
  let index = 0;
  for (let i = d1 + 1; i < arr.length; i += 1) {
    splitArr[index] = arr[i];
    index += 1;
  }
  const sortedArr = sortArr(splitArr);
  index = 0;
  for (let i = d1 + 1; i < arr.length; i += 1) {
    arr[i] = sortedArr[index];
    index += 1;
  }
  str = '';
  for (let i = 0; i < arr.length; i += 1) {
    str += arr[i];
  }
  return +str;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
