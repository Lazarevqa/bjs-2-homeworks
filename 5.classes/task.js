// Задача 1. Печатные издания
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;          // по умолчанию
    this.type = null;          // по умолчанию
  }

  fix() {
    this.state *= 1.5;         // увеличиваем состояние в полтора раза
  }

  // Сеттер для state с ограничениями
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  // Геттер для state
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача 2. Библиотека
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

// Задача 3. Журнал успеваемости
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    // Валидация: оценка должна быть от 2 до 5
    if (mark < 2 || mark > 5) return;

    // Если предмета нет, создаём пустой массив
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    // Добавляем оценку
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    // Если предмета нет – возвращаем 0
    if (!this.marks[subject]) return 0;

    // Сумма оценок по предмету / количество оценок
    const sum = this.marks[subject].reduce((acc, curr) => acc + curr, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;

    const total = subjects.reduce(
      (acc, subject) => acc + this.getAverageBySubject(subject),
      0
    );
    return total / subjects.length;
  }
}