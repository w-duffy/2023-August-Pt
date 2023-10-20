/* Base 10 to base 2 */
function decimalToBinary(blob) {

    return `0b${blob.toString(2)}`;
  }

  /* Base 10 to base 16 */
  function decimalToHexadecimal(blob) {

    return `0x${blob.toString(16)}`;
  }

  /* Base 2 to base 10 */
  function binaryToDecimal(blob) {

    return parseInt(blob.slice(2), 2);
  }

  /* Base 16 to base 10 */
  function hexadecimalToDecimal(blob) {
    return parseInt(blob.slice(2), 16);

  }





  let arr = [1,2,3]

  arr[0]
