//2-Some people are standing in a row in a park. There are trees between them which cannot be
//moved. Your task is to rearrange the people by their heights in a non-descending order without
//moving the trees. People can be very tall!
function sortByHeight(array) {
    let newArr = array.filter(num => num > 0).sort((a, b) => a - b);
    let negativeNum = [];
    for (let index in array) {
      array[index] === -1 ? negativeNum.push(index) : false;
    }
    for (let i in negativeNum) {
      newArr.splice(negativeNum[i], 0, -1)
    } return newArr
  }
  console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));