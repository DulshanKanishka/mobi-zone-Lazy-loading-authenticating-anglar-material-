import { Buying } from './../../dto/buying';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { Buying } from '../../dto/buying';
import { NgForm } from '@angular/forms';
import { BuyingService } from '../../services/buying.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  user: Buying = new Buying();
  @ViewChild('myForm') myForm: NgForm;
  constructor(private buyingService: BuyingService) { }

  ngOnInit() {
  }

  viewStock(): void {
    this.buyingService.getAllBuying().subscribe(
      (value) => {
        if (value) {
          alert('Added to stock');
        } else {
          alert('View false');
        }
      }
    );
  }
  searchStock(): void {
    this.buyingService.searchBuying('').subscribe(
      (value) => {
        if (value) {
          alert('Search Success');
        } else {
          alert('search false');
        }
      }
    );
  }

}
