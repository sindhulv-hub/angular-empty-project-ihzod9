import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserTransferStateModule,
    DxChartModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);