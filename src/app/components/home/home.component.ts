import { Component, OnInit } from '@angular/core';
import 'src/assets/js/main22.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ecommerce';

  loopRequestMsgn: boolean = false;
  errorRequestMsgn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
