import { AuctionComponent } from './auction.component';


export const auctionRoutes = [
  {
    path: '',
    component: AuctionComponent,
    children: [
      { path: '', redirectTo: 'auction', pathMatch: 'full' },
      { path: 'auction', component: AuctionComponent }
    ]
  }
]
