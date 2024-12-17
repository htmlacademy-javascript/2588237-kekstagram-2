//Функция проверки длины строки
const checkLenghtString = (string, maxLenght) => string.length <= maxLenght;

//Функция проверки палиндромности
const isPalindrom = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return string === reversed;
};
