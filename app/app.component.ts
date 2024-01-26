import { Component } from '@angular/core';

import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



import { Population, Service } from './app.service';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [Service]
})
export class AppComponent  {
  populationData: Population[];

  constructor(service: Service) {
    this.populationData = service.getPopulationData();
  }

  customizeTooltip(arg: any) {
    return {
      text: `${arg.percentText} - ${arg.valueText}`,
    };
  }
}





