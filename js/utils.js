//Функция получения целого числа из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//Генератор случаных чисел
function createRandomIdFromRangeGenerator (min, max) {
  const previousNumbs = [];
  const totalNumbers = max - min + 1;

  return function () {
    if (previousNumbs.length >= totalNumbers) {
      return;
    }

    let currentNum;

    do {
      currentNum = getRandomInteger(min, max);
    } while (previousNumbs.includes(currentNum));

    previousNumbs.push(currentNum);

    return currentNum;
  };
}

export {getRandomInteger, createRandomIdFromRangeGenerator};
