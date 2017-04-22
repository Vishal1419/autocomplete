import { Component, OnInit } from '@angular/core';
import { Person } from '../../Models/person';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
  
})
export class AutoCompleteComponent implements OnInit{
  
    constructor() {}

    showSuggestions: boolean;
    query: string;
    people: Person[];
      
    ngOnInit() {
        this.query = '';
        this.people  = [
            new Person ('Shane', 'Watson', 'Australia'),
            new Person ('David', 'Warner', 'Australia'),
            new Person ('Ricky', 'Ponting', 'Australia'),
            new Person ('Adam', 'Gilchrist', 'Australia'),
            new Person ('Andrew', 'Symonds', 'Australia'),
            new Person ('Sachin', 'Tendulkar', 'India'),
            new Person ('Rahul', 'Dravid', 'India'),
            new Person ('Virender', 'Sehwag', 'India'),
            new Person ('Mahendra', 'Dhoni', 'India'),
            new Person ('Virat', 'Kohli', 'India'),
            new Person ('Gautam', 'Gambhir', 'India')
        ];
    }

    inputFocused() {
        this.showSuggestions = true;
    }

    inputBlurred() {
        this.showSuggestions = false;
    }
}
    