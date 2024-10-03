export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(Name) {
    if (typeof Name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = Name;
  }

  set length(Length) {
    if (typeof Length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Length;
  }

  set students(Students) {
    if (!Array.isArray(Students) || !Students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = Students;
  }
}
