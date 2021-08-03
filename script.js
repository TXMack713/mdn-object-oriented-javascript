function Person(first, last, age, gender, ...interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.answer = '';

  if (Array.isArray(this.interests[0])) {
    if (this.interests[0].length > 2) {
      for (let i = 0; i < this.interests[0].length; i++) {
        if (i <= this.interests.length - 2) {
          this.answer += this.interests[0][i] + ', ';
        } else if (i === this.interests[0].length - 1) {
          this.answer += ' and ' + this.interests[0][i];
        }
      }
    }
    // If there are only 2 interests for the person
    else if (this.interests[0].length === 2) {
      this.answer += interests[0][0] + ' and ' + interests[0][1];
    }

    // If there's only 1 interest for the person
    else if (this.interests[0].length === 1) {
      this.answer += interests[0][0];
    }
  } else {
    // If there are more than 2 interests for the person
    if (this.interests.length > 2) {
      for (let i = 0; i < this.interests.length; i++) {
        if (i <= this.interests.length - 2) {
          this.answer += this.interests[i] + ', ';
        } else if (i === this.interests.length - 1) {
          this.answer += ' and ' + this.interests[i];
        }
      }
    }
    // If there are only 2 interests for the person
    else if (this.interests.length === 2) {
      this.answer += interests[0] + ' and ' + interests[1];
    }

    // If there's only 1 interest for the person
    else if (this.interests.length === 1) {
      this.answer += interests[0];
    }
  }

  // Check the person's gender for the proper bio verbiage
  if (this.gender.toLowerCase() === 'm') {
    // If the person is a man and doesn't have any interests
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
      // If the person is a man and does have interests
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
    // If the person is a woman and doesn't have any interests
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
      // If the person is a woman and does have interests
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

let person1 = new Person('Bob', 'Smith', 32, 'm', ['music', 'skiing']);
