import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

time = new Observable((observer:Observer<string>)=>{
  setInterval(()=> observer.next(new Date().toString()), 1000)
})
  
  constructor() { }

  ngOnInit() {
  }


}
