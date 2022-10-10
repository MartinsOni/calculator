import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator';
  buttonValues = [
    '1',
    '2',
    '3',
    '/',
    '4',
    '5',
    '6',
    'X',
    '7',
    '8',
    '9',
    '-',
    '(',
    ')',
    '0',
    '+',
    'C',
    '.',
    '=',
    '%',
  ];

  inputValues = '';

  getInputValue(event: any, value: string) {
    event.preventDefault();

    if (value == 'X') {
      this.inputValues += '*';
    } else if (value == '=' && this.inputValues == '.') {
      alert('Invalid mathematic expression');
    } else if (value == '=') {
      this.inputValues = eval(this.inputValues);
    } else if (value == "C") {
      this.inputValues = ""
    }else this.inputValues += value;
  }
}
