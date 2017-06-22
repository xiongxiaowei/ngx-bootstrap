import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, AccordionModule, CarouselModule ,CollapseModule,DatepickerModule,BsDropdownModule,
   ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule,SortableModule,TabsModule
  , TooltipModule,TypeaheadModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { AccordingComponent } from './according/according.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { SortableComponent } from './sortable/sortable.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { TypeHeadComponent } from './type-head/type-head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    CollapseComponent,
    AccordingComponent,
    DatePickerComponent,
    DropDownComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    SortableComponent,
    TabsComponent,
    TimePickerComponent,
    ToolTipComponent,
    TypeHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
     RatingModule.forRoot(),
     SortableModule.forRoot(),
     TabsModule.forRoot(),
      TooltipModule .forRoot(),
      TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
