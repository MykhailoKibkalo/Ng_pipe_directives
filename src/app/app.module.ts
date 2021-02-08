import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';
import { RedDirective } from './directives/red.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    RedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
