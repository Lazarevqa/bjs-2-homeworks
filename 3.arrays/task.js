function compareArrays(arr1, arr2) {
  // Если длины разные – массивы не равны
  if (arr1.length !== arr2.length) {
    return false;
  }
  // every проверяет, что каждый элемент arr1 равен элементу arr2 на том же индексе
  return arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  // Отфильтровываем пользователей нужного пола
  const filtered = users.filter(user => user.gender === gender);
  // Если подходящих пользователей нет – возвращаем 0
  if (filtered.length === 0) {
    return 0;
  }
  // Суммируем возрасты через reduce
  const sum = filtered.reduce((acc, user) => acc + user.age, 0);
  // Возвращаем среднее арифметическое
  return sum / filtered.length;
}