
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
    selector: 'fadeblock',
    template: `
        <div class="fadeBlock mx-auto" [@changeState]="currentState"></div>
    `,
    styles: [
            `
            .fadeBlock {
                background-color: #ec971f;
                width: 600px;
                height: 300px;
                border-radius: 4px;
                margin: 5rem;
                opacity: 1;
            }
        `
    ],
    animations: [
      trigger('changeState', [
          transition('void => *', [
              useAnimation(fadeAnimation, {
                  params: {
                      delay: '300ms',
                      from: 0,
                      to: 1,
                      time: '2s'
                  }
              })
          ])
       ])
    ]
})

export class FadeBlockComponent {
  currentState: string = '';
}