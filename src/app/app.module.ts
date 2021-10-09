import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { AutoCompleteFormlyComponent } from './auto-complete-formly/auto-complete-formly.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteFormlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      types: [
        {name: 'autoComplete', component: AutoCompleteFormlyComponent},
      ],
      extras: {lazyRender: true}
    }),
    FormlyPrimeNGModule,
    AutoCompleteModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
