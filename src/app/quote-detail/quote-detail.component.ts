import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(read:boolean){
    this.isComplete.emit(read);
  }

  upVote(){
    this.quote.upvote+=1;
  }
  downVote(){
    this.quote.downvote+=1;
  }

  constructor() { }
    
  ngOnInit() {
  }

}
