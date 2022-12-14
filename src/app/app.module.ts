import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { WorkSpaceComponent } from './work-space/work-space.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EditFormComponent,
    WorkSpaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
