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


  public successLanding: boolean = true;
  public successLaunch: boolean = true;
  public selectedYear: number;

  //To store the response array given by the end point . Showing as cards in the html 
  filteredDataCard = new Array<any>();

  //Available years to apply filter
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

    this.selectedYear = 2018;
    this.checkFilters(this.selectedYear);
  }


  // Functioon to change the location path without refreshing the page.
  // It uses the current location and manipulates the URL
  generateLocationPath() {
    let path = "year=" + this.selectedYear;
    path += "?success_launch=" + this.successLaunch;
    path += "?success_landing=" + this.successLanding;

    this.location.replaceState(path);
  }


  //Function to check the filters applied filters and calls the API which in return gives the response.
  /* Returned response is stored in filteredDataCars array which changes the DOM elements */
  checkFilters(year?) {


    if (year) {
      this.selectedYear = year; // if funcction is called by the Year element in DOM
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

    //calling the API endpoint
    this.dataCommService.getFilteredData(filteringData).subscribe((res: any) => {
      this.filteredDataCard = JSON.parse(JSON.stringify(res));
      this.generateLocationPath();
    });

  }


  //function to change the value  of launch and land filters. In the end Calls filters functioon to apply filter
  setSuccess(value, type) {
    if (type == "launch") {
      this.successLaunch = value;
    }
    else if (type == "landing") {
      this.successLanding = value;
    }
    this.checkFilters();
  }

  //function for tracking the DOM elements by mission_name (Angular's trackBy directtive helps to track the DOM elements)
  trackByMissionName(index: number, card: any): string {
    return card ? card.mission_name : "";
  }

}
