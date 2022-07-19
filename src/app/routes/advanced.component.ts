import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Advanced Concepts</h1>
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-12">
            <div [@spoonAnimation]="spoons.length">
              <ul *ngFor="let spoon of spoons">
                <li class="spoon-block d-flex justify-content-center">{{spoon.name}}</li>
              </ul>
            </div>
            <fadeblock></fadeblock>
            </div>
        </div>
    </div>
    <hr/>
    <button class="btn btn-primary" (click)="showSpoons()">Show Spoons</button>
  `,
  styles: [`
    .spoon-block {
      float:left;
      width:22%;
      height:140px;
      background-color: antiquewhite;
      color: #440000;
      margin: 4px;
      border-radius: 4px;
      display:flex;
      align-items:center;
      display:block;
    }
  `],
  animations: [
    trigger('spoonAnimation', [
        transition('* => *', [
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter', stagger('100ms', [
              animate('1s', style({ opacity: 1 }))
          ]), { optional: true })
        ])
    ])
],
})
export class AdvancedComponent {
  spoons: { id: number, name: string}[] = [];
  
  showSpoons() {
    this.spoons = [
      { id: 1, name:'Absinthe' },
      { id: 2, name:'Bouillon' },
      { id: 5, name:'Caviar' },
      { id: 3, name:'Coffee' },
      { id: 4, name:'Dessert' },
      { id: 5, name:'Egg' },
      { id: 6, name:'Horn' },
      { id: 7, name:'Iced Tea' },
      { id: 8, name:'Marrow' },
      { id: 9, name:'Melon' },
      { id: 10, name:'Parfait' },
      { id: 11, name:'Salt' },
      { id: 12, name:'Saucier' },
      { id: 13, name:'Soup' }
    ]
  }
}