import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Output() isComplete = new EventEmitter <boolean>(); 
  @Input() quote:Quote;
  constructor() { }
    quoteDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
  ngOnInit() {
  }

}
