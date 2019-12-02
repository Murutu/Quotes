import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
 
  upvote = -1;
  downvote = -1;
  showvoteup = ""
  showvotedown =""

  voteup() {
    this.upvote= this.upvote+ 1;
    this.showvoteup = ""+this.upvote;
  }

  votedown(){
    this.downvote=this.downvote+1;
    this. showvotedown =""+this.downvote;
  }

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
 
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }



  ngOnInit() {
  }

}
