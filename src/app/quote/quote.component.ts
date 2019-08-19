import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html', 
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  allQuotes:Quote[] = [
    new Quote ('Psalms 138:3','When i called you  answered me:you made me bold and stouthearted','Wanjiru', new Date(2019,1,1),0,0),
    new Quote ('Jeremiah 17:14','Heal me, Lord, and I will be healed save me and I will be saved, for you are the one I praise.','Wach B',new Date(2019,2,2),0,0),
    new Quote ('Isaih 14:27','Nothing can stop Gods plan for your life.','Grace',new Date(2019,3,3),0,0),
    new Quote ('Mathew 6:34','Pray more worry less','Dancan',new Date(2019,4,4),0,0),
    new Quote ('Luke 1:37','FOr with GOd nothing is impossible','Jenifer',new Date(2019,5,5),0,0),
   
  ];
  addNewQuote(quote){
    let quoteLength =this.allQuotes.length;
    quote.id =quoteLength+0;
    quote.completeDate = new Date(quote.completeDate)
    this.allQuotes.push(quote)
  }
  toggleDetails(index){
    this.allQuotes[index].showDescription = !this.allQuotes[index].showDescription;
  }
  quoteDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.allQuotes.splice(index,1);
      }
      
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
