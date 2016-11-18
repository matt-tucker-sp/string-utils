import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StringUtilsModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, StringUtilsModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}