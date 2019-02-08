import { Component, OnInit, ViewChild } from '@angular/core';
// import { PhoneDetails } from '../../dto/phoneDetails';
import { NgForm } from '@angular/forms';
import { PhoneDetailsService } from '../../services/phone-details.service';
import { PhoneDetails } from 'src/app/dto/phoneDetails';

@Component({
  selector: 'app-mobli-and-tablet',
  templateUrl: './mobli-and-tablet.component.html',
  styleUrls: ['./mobli-and-tablet.component.css']
})
export class MobliAndTabletComponent implements OnInit {

  phoneDetailsList: Array<PhoneDetails> = [];
  phoneDetails: PhoneDetails = new PhoneDetails();
  @ViewChild('formItems') formItems: NgForm;
  constructor(private phoneDetailsService: PhoneDetailsService) {
  }
  ngOnInit() {
  }

  clear(): void {
    const index = this.phoneDetailsList.indexOf(this.phoneDetails);
    if (index !== -1) {
      // this.phoneDetailsList[index] = this.tempItem;
      // this.tempItem = null;
    }
    this.phoneDetails = new PhoneDetails;
  }
  searchPhoneDetails(): void {
    this.phoneDetailsService.searchPhoneDetails(this.phoneDetails.name).subscribe(
      (result) => {
        this.phoneDetails = result;
        // console.log(this.selectedCustomer);
        if (!result) {

          alert('Customer Not Found !');
          this.clear();
          //  this.selectedCustomer = null;

        }
      }
    );
  }





  searchCustomer(): void {
    this.phoneDetailsService.searchPhoneDetails(this.phoneDetails.name).subscribe(
      (result) => {
        this.phoneDetails = result;
        // console.log(this.selectedCustomer);
        if (!result) {

          alert('Customer Not Found !');
          this.clear();
          //  this.selectedCustomer = null;

        }
      }
    );

  }






  savePhoneDetails(): void {
    this.phoneDetailsService.savePhoneDetails(this.phoneDetails).subscribe(
      (result) => {
        if (result) {
          alert('false');
        } else {
          alert('Added Success');
        }
        // alert("Item has been Saved successfully");
        this.clear();
        // this.loadItemCode();
      }
    );
  }

  updateItem(): void {
    this.phoneDetailsService.updatePhoneDetails(this.phoneDetails).subscribe(
      (result) => {
        alert('Item has been updated successfully');
        this.clear();
      }
    );
  }


  updatePhoneDetails(id): void {
    this.phoneDetailsService.savePhoneDetails(this.phoneDetails).subscribe(
      value => {
        if (value) {
          alert('Failed to update the Items');
          // this.loadAllItems();
        } else {
          alert('Items has been Update successfully');

        }
      }
    );
  }



}
