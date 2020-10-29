

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { BrowserTransferStateModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { DescriptionCardComponent } from '../description-card/description-card.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { DataCommunicationService } from '../services/data-communication.service';


describe('DescriptionCardComponent', () => {
  let comp: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        LandingPageComponent,
        DescriptionCardComponent,
      ],
      providers: [DataCommunicationService]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(LandingPageComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.componentInstance;
    el = de.nativeElement;
  });


  it('should check the cardData', () => {
    expect(comp).not.toBe(undefined);
  });
});
