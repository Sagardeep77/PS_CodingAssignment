import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../services/data-communication.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // totalYears = new Array<number>(100) ;
  public successLanding: boolean = false;
  public successLaunch: boolean = false;
  public selectedYear: number;

  // filteredDataCard: any[];
  filteredDataCard = new Array<any>();

  totalYears = [
    [2006, 2007],
    [2008, 2009],
    [2010, 2011],
    [2012, 2013],
    [2014, 2015],
    [2016, 2017],
    [2018, 2019],
    [2020]
  ];


  constructor(
    private dataCommService: DataCommunicationService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.selectedYear = this.totalYears[0][0];
    this.checkFilters(this.selectedYear);
  }

  generateLocationPath() {
    let path = "year=" + this.selectedYear;
    if (this.successLaunch) {
      path += "?success_launch=" + this.successLaunch;
    }
    if (this.successLanding) {
      path += "?success_landing=" + this.successLanding;
    }

    this.location.replaceState(path);
  }

  checkFilters(year?) {

    if (year) {
      this.selectedYear = year;
    }

    let filteringData;

    filteringData = [
      {
        name: "year",
        value: this.selectedYear
      },
      {
        name: "launch",
        value: this.successLaunch
      },
      {
        name: "landing",
        value: this.successLanding
      }
    ];


    this.dataCommService.getFilteredData(filteringData).subscribe((res: any) => {
      this.filteredDataCard = JSON.parse(JSON.stringify(res));
      this.generateLocationPath();
    });

  }

  setSuccess(value,type){
    if(type == "launch"){
      this.successLaunch = value;
    }
    else if(type=="landing"){
      this.successLanding = value;
    }
  }

  trackByMissionName(index: number, card: any): string {
    return card ? card.mission_name : "";
  }

}
