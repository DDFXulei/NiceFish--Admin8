import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatatableComponent } from './datatable/datatable.component';
import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {AuctionComponent} from './auction.component';
import {auctionRoutes } from './auction.routes';
import { FormsModule  } from '@angular/forms'
import { AlertModule, BsDropdownModule, BsDatepickerModule ,  } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(auctionRoutes),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
  SearchComponent,
  CarouselComponent,
  DatatableComponent,
  StarsComponent,
  FooterComponent,
  AuctionComponent,
  ]
})

export class AuctionModule {}
