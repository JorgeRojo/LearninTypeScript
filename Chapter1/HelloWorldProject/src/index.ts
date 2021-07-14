class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello ${this.greeting}`;
  }
}

let greeter = new Greeter('World');
let button = document.createElement('button');
const handleButtonClick = () => {
  alert(greeter.greet());
};

button.textContent = 'Say hello';
button.addEventListener('click', handleButtonClick);
document.addEventListener('DOMContentLoaded', () => {
  window.document.body.appendChild(button);
});
