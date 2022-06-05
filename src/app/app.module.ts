import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './login/register/register.component';
import { PopupComponent } from './login/register/popup/popup.component';
import { ErrorComponent } from './login/error/error.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { DropListComponent } from './main/drop-list/drop-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterComponent,
    SearchComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    PopupComponent,
    ErrorComponent,
    DropListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:HeadersInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
