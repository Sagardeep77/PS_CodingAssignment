import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent implements OnInit {
  @Input() cardData: any;
  imgSrc="";
  
  constructor() { 
  }

  ngOnInit() {
    this.imgSrc = "../../assets/"+this.cardData.mission_name.split('/')[0] + ".png";
  }

}
