import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  allQuotes:Quote[] = [
    new Quote (1,'i love you','charles'),
    new Quote (2,'i love you','charles'),
    new Quote (3,'i love you','charles'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
