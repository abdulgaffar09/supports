import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'app-profociencycellrender',
//  templateUrl: './profociencycellrender.component.html',
//  styleUrls: ['./profociencycellrender.component.css']
//})

@Component({
  selector: 'proficiency-renderer',
  template: `
     <div class="div-percent-bar" [ngStyle]="styles">
        <div class="div-percent-value">{{value}}%</div>
        <div class=div-outer-div></div>
    </div>
    `,
  styles: [
    `
        .div-percent-bar {
            display: inline-block;
            height: 100%;
            position: relative;
            z-index: 0;
        }

        .div-percent-value {
            position: absolute;
            padding-left: 4px;
            font-weight: bold;
            font-size: 13px;
            z-index: 10;
        }
        
        .div-outer-div {
            display: inline-block;
            height: 100%;
            width: 100%;
        }
`
  ]
})
export class ProfociencycellrenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
