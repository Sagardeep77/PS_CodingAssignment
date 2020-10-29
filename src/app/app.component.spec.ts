import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { BrowserTransferStateModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { DescriptionCardComponent } from './description-card/description-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DataCommunicationService } from './services/data-communication.service';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.componentInstance;
    el = de.nativeElement;
  });

  it('should create the app', () => {
    
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'check'`, () => {
    
    expect(comp.title).toEqual('check');
  });

  // it('should render title', () => {
    
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('check app is running!');
  // });
});
