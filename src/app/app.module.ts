import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';
import { AdvancedComponent } from 'src/app/routes/advanced.component';
import { BasicComponent } from 'src/app/routes/basic.component';
import { ContainedComponent } from 'src/app/routes/contained.component';
import { HomeComponent } from 'src/app/routes/home.component';
import { NotFoundComponent } from 'src/app/routes/notfound.component';
import { AnimboxComponent } from './animbox.component';

import { AppComponent } from './app.component';

const animationRoutes: Routes = [
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  },
  {
  path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    ContainedComponent,
    AdvancedComponent,
    NotFoundComponent,
    AnimboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent  
  ]
})
export class AppModule { }
