import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderingListsComponent } from './rendering-lists/rendering-lists.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { FatherComponentComponent } from './father-component/father-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayDataBindingComponent,
    RenderingListsComponent,
    CustomComponentComponent,
    FatherComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
