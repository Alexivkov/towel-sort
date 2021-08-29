// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(matrix === undefined) return [];  
  let res = [];
    let i = 1;
    matrix.forEach((element) => {
        if (i < 0) element.reverse();
        i *= -1;
        for (let j of element) res.push(j);
    });
    return res;
};
