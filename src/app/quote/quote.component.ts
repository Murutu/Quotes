import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Marcus Aurelius', 'The universe is change; our life is what our thoughts make it.', new Date(13,4,1)),
    new Quote(2, 'Epictetus', 'No man is free who is not master of himself', new Date(14,4,120)),
    new Quote(3, 'Lucius Seneca', 'The mind that is anxious about future events is miserable', new Date(25,6,45)),

  ]
  
  showDescription= false;

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)

      if (toDelete) { this.quotes.splice(index, 1) }
    }
  }


  toggleQuote() {
    this.showDescription = ! this.showDescription;
  }

  ngOnInit() {
  }

}
