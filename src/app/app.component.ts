import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  price : number = 20000;
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  presentDate = new Date(); 
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  time$ = interval(1000).pipe(
    map(() => new Date())
  )
    testObject = {
      name: 'nath',
      age: 21,
      food: 'Cheesecake'
    };
    testArray = {
      name: 'nath',
      age: 21,
      food: 'Cheesecake'
    };
}