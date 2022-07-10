import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DjmodModule } from "./djmod/djmod.module";
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DjmComponent } from './djm/djm.component';
import { StyleComponent } from './style/style.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule} from '@angular/forms';
import { Djm2Component } from './djm2/djm2.component'
@NgModule({
  declarations: [
    AppComponent,
    DjmComponent,
    StyleComponent,
    TemplateComponent,
    Djm2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DjmodModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
