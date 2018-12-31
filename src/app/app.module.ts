import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { AppComponent } from "./app.component";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";
import { LernState } from "./store/lern.state";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([LernState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
