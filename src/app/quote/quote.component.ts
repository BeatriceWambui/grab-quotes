import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  allQuotes:Quote[] = [
    new Quote ('Psalms 138:3','When i called you answered me:you made me bold and stouthearted','Wanjiru', new Date(2019,1,1),0,0),
    new Quote ('Jeremiah 17:14','Heal me, Lord, and I will be healed save me and I will be saved, for you are the one I praise.','Wach B',new Date(2019,2,2),0,0),
    new Quote ('Isaih 14:27','Nothing can stop Gods plan for your life.','Grace',new Date(2019,3,3),0,0),
    new Quote ('Mathew 6:34','Pray more worry less','Dancan',new Date(2019,4,4),0,0),
    new Quote ('Luke 1:37','FOr with GOd nothing is impossible','Jenifer',new Date(2019,5,5),0,0),
    new Quote ('Mathew 5:20','For I say to you that exept your rightiousness shall axceed the righteousness of the scribes and the Pharisees you shall in no case enter into the kingdom of heaven','Michael',new Date(2019,6,6),0,0),
    new Quote ('1 Corinthians 13:7','Love never dies','Daniel',new Date(2019,7,7),0,0),
    new Quote ('Psalms 103:3-5','Jesus has changed my life!','Sharon',new Date(2019,8,8),0,0),
    new Quote ('Psalms 119:105','Your word is a lamp to my feet, and a light to my path','Moreen',new Date(2019,9,9),0,0),
    new Quote ('Joshua 24:15','As for me and my house we shall serve the Lord','Everlyne',new Date(2019,10,10),0,0)
  ];
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
