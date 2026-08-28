function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  // Если свойства marks нет (студент отчислен) – ничего не делаем
  if (!this.marks) {
    return;
  }
  // Добавляем все переданные оценки в массив marks
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function () {
  // Если marks не существует или массив пуст – возвращаем 0
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  // Суммируем оценки и делим на их количество
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  // Удаляем свойства subject и marks
  delete this.subject;
  delete this.marks;
  // Добавляем свойство excluded с причиной отчисления
  this.excluded = reason;
};
