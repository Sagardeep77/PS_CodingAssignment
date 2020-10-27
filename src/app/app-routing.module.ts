import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {path : "", component:LandingPageComponent},
  {path : "**", component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
