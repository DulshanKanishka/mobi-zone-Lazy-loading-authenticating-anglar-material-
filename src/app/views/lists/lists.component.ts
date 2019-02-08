import { HomeList } from './../../dto/homeList';
import { PhoneDetails } from './../../dto/phoneDetails';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeListService } from '../../services/homeList.service';
import { PhoneDetailsService } from '../../services/phone-details.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  homelistList: Array<HomeList> = [];
  homeList: HomeList = new HomeList();
  serchedItems: PhoneDetails = new PhoneDetails();
  // @ViewChild('myForm') myForm: NgForm;
  items: any = [];
  @ViewChild('myForm') myForm: NgForm;
  constructor(private homeListService: HomeListService, private phoneDetailsService: PhoneDetailsService) { }


  ngOnInit() {
    this.getItemCode();
    this.loadItemCode();
  }
  addHomeList(): void {
    this.homeListService.saveHomeList(this.homeList).subscribe(
      (value) => {
        if (value) {
          alert('Added Succes');
        } else {
          alert('false');
        }
      }
    );
  }
  searchPhone(event: any): void {
    this.phoneDetailsService.searchPhoneDetails(event.target.value).subscribe(
      (result) => {
        this.serchedItems = result;
        console.log(this.serchedItems);
      }
    );

  }

  getItemCode() {
    this.phoneDetailsService.getAllPhoneDetails().subscribe(
      (result) => {
        this.items = result;
      }
    );
  }
  private loadItemCode(): void {
    this.homeListService.getAllHomeList().subscribe(
      value => {
        this.homelistList = value;
      }
    );
  }
}
