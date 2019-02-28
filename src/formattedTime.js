/*
  Функция которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку,
  являющуюся временем в формате чч:мм.
*/

import {	assert } from './myModules';

// Моё решение
const formattedTime1 = (num) => {
	const hour = String(Math.floor(num / 60));
	const timeInHour = hour.length > 1 ? hour : `0${hour}`;

	const minute = String(Math.floor(num % 60));
	const timeInMinute = minute.length > 1 ? minute : `0${minute}`;

	return `${timeInHour}:${timeInMinute}`;

};

// Решение Хекслета
const formattedTime2 = (rawMinutes) => {
	const hours = Math.floor(rawMinutes / 60);
	const formattedHours = hours >= 10 ? hours : `0${hours}`;

	const minutes = rawMinutes % 60;
	const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

	return `${formattedHours}:${formattedMinutes}`;
};

assert('00:15', 15, formattedTime1); // 15
assert('00:05', 5, formattedTime1); // 5
assert('01:07', 67, formattedTime1); // 67
assert('01:00', 60, formattedTime1); // 60
assert('02:55', 175, formattedTime1); // 175
assert('10:00', 600, formattedTime1); // 600
assert('12:34', 754, formattedTime1); // 754