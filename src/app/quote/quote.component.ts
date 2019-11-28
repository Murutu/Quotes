import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Marcus Aurelius', 'The universe is change; our life is what our thoughts make it.', 'admin', new Date(13,4,131)),
    new Quote(2, 'Epictetus', 'No man is free who is not master of himself', 'admin', new Date(14,4,120)),
    new Quote(3, 'Lucius Seneca', 'The mind that is anxious about future events is miserable', 'admin', new Date(25,6,45)),

  ]
  
  showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.
  }

  ngOnInit() {
  }

}
