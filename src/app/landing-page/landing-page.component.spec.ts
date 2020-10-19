import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set year in=between and equal to 2006 an 2010', () => {
    let year;
    for(let start = 2006 ; start < 2021; start++){
      year = component.checkFilters(start);
      expect(component.selectedYear).toEqual(year);
    }
  });

  it('should set year as 2006 and success_launch= false and success_landing=false', () => {
    let year = 2006;
    component.setSuccess(true,'launch');
    component.setSuccess(false,'landing');

    expect(component.selectedYear).toEqual(year);
    expect(component.successLaunch).toEqual(true);
    expect(component.successLanding).toEqual(false);
      
  });
});
