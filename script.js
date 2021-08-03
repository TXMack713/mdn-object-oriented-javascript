function Person(first, last, age, gender, ...interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.answer = '';

  if (this.interests.length > 2) {
    for (let i = 0; i < this.interests.length; i++) {
      if (i <= this.interests.length - 2) {
        this.answer += this.interests[i] + ', ';
      } else if (i === this.interests.length - 1) {
        this.answer += ' and ' + this.interests[i];
      }
    }
  } else if (this.interests.length == 2) {
    this.answer += interests[0] + ' and ' + interests[1];
  } else if (this.interests.length === 1) {
    this.answer += interests[0];
  }

  if (this.gender.toLowerCase() === 'm') {
    if (this.interests.length === 0) {
      this.bio = function() {
        alert(
          this.name.first +
            ' ' +
            this.name.last +
            ' is ' +
            this.age +
            ' years old.'
        );
      };
    } else {
      if (this.interests.length > 0) {
        this.bio = function() {
          alert(
            this.name.first +
              ' ' +
              this.name.last +
              ' is ' +
              this.age +
              ' years old. He likes ' +
              this.answer +
              '.'
          );
        };
      }
    }
  } else {
    if (this.interests.length === 0) {
      this.bio = function() {
        alert(
          this.name.first +
            ' ' +
            this.name.last +
            ' is ' +
            this.age +
            ' years old.'
        );
      };
    } else {
      if (this.interests.length > 0) {
        this.bio = function() {
          alert(
            this.name.first +
              ' ' +
              this.name.last +
              ' is ' +
              this.age +
              ' years old. She likes ' +
              this.answer +
              '.'
          );
        };
      }
    }
  }

  this.greeting = function() {
    alert("Hi! I'm " + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
