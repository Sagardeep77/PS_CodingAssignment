import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../services/data-communication.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  public successLanding: boolean ;
  public successLaunch: boolean ;
  public selectedYear: number;

  public isMobileView:boolean = false;
  public isTabletView:boolean = false;
  public isDesktopView:boolean = false;
  public isXtraLargeView:boolean = false;

  

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

  breakPoints  = {
    mob:'(max-width: 700px)',
    tab:'(min-width: 700px) and (max-width: 1024px)' ,
    desk:'(min-width: 1024px) and (max-width: 1440px)',
    xl:'(min-width: 1440px)'
  }

  constructor(
    private dataCommService: DataCommunicationService,
    private location: Location,
    private route: ActivatedRoute,
    public breakPoinstObserver:BreakpointObserver
  ) { }

  ngOnInit() {
    this.checkFilters();
    this.breakPoinstObserver.observe([
      this.breakPoints.mob,
      this.breakPoints.desk,
      this.breakPoints.tab,
      this.breakPoints.xl
    ]).subscribe((result)=>{
      if(result.breakpoints[this.breakPoints.mob]){
        this.setView("mobile");
      }
      else if(result.breakpoints[this.breakPoints.tab]){
        this.setView("tablet");
      }
      else if(result.breakpoints[this.breakPoints.desk]){
        this.setView("desktop");
      }
      else{
        this.setView("desktop");
      }
    })
  }


  //ViewPort
  setView(view:string){
    this.isMobileView = false;
    this.isDesktopView = false;
    this.isTabletView = false;
    this.isXtraLargeView = false;
    if(view== "mobile"){
      this.isMobileView = true;
    }
    else if(view == "tablet"){
      this.isTabletView = true;
    }
    else if(view == "desktop"){
      this.isDesktopView = true;
    }
    else{
      this.isDesktopView = true;
    }
  }

  // Functioon to change the location path without refreshing the page.
  // It uses the current location and manipulates the URL
  generateLocationPath() {

   
    let path = "year=" + this.selectedYear;
    if(this.successLaunch!=undefined){
      path += "?success_launch=" + this.successLaunch;
    }
    if(this.successLanding!=undefined){
      path += "?success_landing=" + this.successLanding;
    }

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
