import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from './services/data-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'check';
  response : any;


  constructor(){}

  ngOnInit(){
  }

}
