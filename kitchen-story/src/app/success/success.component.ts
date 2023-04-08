import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  timer: number = 0;
  deliver: string = 'Picked Up';
  async ngOnInit() {
    this.timer = 3;
    function delay(s: number) {
      return new Promise((resolve) => setTimeout(resolve, s));
    }
    while (this.timer > 0) {
      await delay(10000);
      this.timer = this.timer - 1;
    }
    if (this.timer == 0) {
      this.deliver = 'Delivered!';
    }
  }
}
