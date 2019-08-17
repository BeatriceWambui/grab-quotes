import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  allQuotes:Quote[] = [
    new Quote ('Psalms 138:3','When i called you answered me:you made me bold and stouthearted','Wanjiru', new Date(2019,1,1)),
    new Quote ('no 2','No one ever finds life worth living one has to make it worth living','Wach B',new Date(2019,2,2)),
    new Quote ('no 3','If you want a single man create yours','Grace',new Date(2019,3,3)),
    new Quote ('no 4','Be the best version of your self','Dancan',new Date(2019,4,4)),
    new Quote ('no 5','Make your waves, fan your flames, give us chills.','Jenifer',new Date(2019,5,5)),
    new Quote ('no 6','She loves too hard,feels too deeply, asks too often, desire too much','Michael',new Date(2019,6,6)),
    new Quote ('no 7','I’ve been called high maintenance because I want what I want, and intimidating because of the space I occupy','Daniel',new Date(2019,7,7)),
    new Quote ('no 8','I’ve been called selfish because I am self-loving. I’ve been called a witch because I know how to heal myself.','Sharon',new Date(2019,8,8)),
    new Quote ('no 9','The only thing that will make you happy is being happy with who you are not who people think you are','Moreen',new Date(2019,9,9)),
    new Quote ('no 10','Death leaves a heartache no one can heal, love leaves a memory no one can steal','Everlyne',new Date(2019,10,10))
  ];
  toggleDetails(index){
    this.allQuotes[index].showDescription = !this.allQuotes[index].showDescription;
  }
  deleteGoal(isComplete,index){
    if (isComplete){
      let toDelete=confirm (`Are you sure you want to delete ${this.allQuotes[index].description}?`)
      if (toDelete){
        this.allQuotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
