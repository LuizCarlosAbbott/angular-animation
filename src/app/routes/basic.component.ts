import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Animation Basics</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-5"></div>
            <div class="col-7"></div>
        </div>
    </div>
    <animbox></animbox>
  `,
  styles: [``]
})
export class BasicComponent {}