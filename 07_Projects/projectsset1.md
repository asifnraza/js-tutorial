# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1
```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## Project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 1 || isNaN(height)) {
    results.innerHTML = `Please enter valid height ${height}`;
  } else if (weight == '' || weight < 1 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `${bmi}, You are "Under Weight"`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `${bmi}, You are "Normal Range"`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `${bmi}, You are "Overweight"`;
    }
  }
});

```