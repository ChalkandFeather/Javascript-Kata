function multiplyByNineFifths(number) {
  return number * (9 / 5);
} //15 * 9/5 = 27

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59
// getFahrenheit passes arguement of 15 to function getFahrenheit and renames (celsius) as the value (15)
//As the function uses multiplyByNineFifths(15- as weve just given our celsus value 15) BUT we need to run
// it in the multiplyByNineFifths function which is looking for a number -- we've established this is now 15. So,
// we will return our 15 * (9/5); and add the 32 from line 6

// return value of a function inside another function. These functions being called within another function are
// often referred to as helper functions
