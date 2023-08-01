// function CompareFrom(compare: number) {
//   function toBe(comparedTo: number) {
//     if (compare === comparedTo) return console.log("true");
//     else return console.log("Not Equal");
//   }

//   function notToBe(comparedTo: number) {
//     if (compare === comparedTo) return console.log("Is Equal");
//     else return console.log("true");
//   }

//   return { toBe, notToBe };
// }

function CompareFromVersion2(compare: number) {
  function toBe(comparedTo: number) {
    if (compare === comparedTo) return "Is Equal";
    else throw new Error(" error numbers are not equal");
  }

  function notToBe(comparedTo: number) {
    if (compare === comparedTo) throw new Error(" error numbers are equal");
    else return "Is Not Equal";
  }
  return { toBe, notToBe };
}

function tryTheFunction() {
  const tmp = CompareFromVersion2;

  try {
    console.log(`to be 1: ${tmp(2).toBe(3)}`);
  } catch (error: any) {
    console.log("to be 1:" + error.message);
  }
  try {
    console.log(`to be 2: ${tmp(2).toBe(2)}`);
  } catch (error: any) {
    console.log("to be 2:" + error.message);
  }
  try {
    console.log(`not to be 1: ${tmp(2).notToBe(3)}`);
  } catch (error: any) {
    console.log("not to be 1:" + error.message);
  }
  try {
    console.log(`not to be 2: ${tmp(2).notToBe(2)}`);
  } catch (error: any) {
    console.log("not to be 2:" + error.message);
  }

  return <>Exsursize 2</>;
}
export default tryTheFunction;
