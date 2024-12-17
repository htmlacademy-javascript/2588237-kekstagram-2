//Функция проверки длины строки
const checkLenghtString = (string, maxLenght) => string.length <= maxLenght;

checkLenghtString('игра', 5);

//Функция проверки палиндромности
const isPalindrom = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return string === reversed;
};

isPalindrom('топот');

// Функция принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.
function checkTimeForMeeting(startWorkTime, endWorkTime, startMeetingTime, durationMweeting) {
  function timeTransform(text) {
    const splitText = text.split(':');
    return +splitText[0] + +splitText[1] / 60;
  }

  const start = timeTransform(startWorkTime);
  const end = timeTransform(endWorkTime);
  const meet = timeTransform(startMeetingTime);
  const duration = +durationMweeting / 60;

  return !(duration > end - start || end < meet + duration || meet < start);
}

checkTimeForMeeting('08:10', '17:30', '14:00', 90); // true
checkTimeForMeeting('8:0', '10:0', '8:0', 120); // true
checkTimeForMeeting('08:00', '14:30', '14:00', 90); // false
checkTimeForMeeting('14:00', '17:30', '08:0', 90); // false
checkTimeForMeeting('8:00', '17:30', '08:00', 900); // false
