import { Component, OnInit } from '@angular/core';
import { PlateNumber } from '../shared/PlateNumber';
import { PlateNumberService } from './../shared/platenumber.service';
@Component({
  selector: 'app-list-platenumber',
  templateUrl: 'list-platenumber.page.html',
  styleUrls: ['list-platenumber.page.scss'],
})
export class ListPlatenumberPage implements OnInit {
  Bookings = [];
  constructor(
    private aptService: PlateNumberService
  ) { }
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as PlateNumber);
      })
    })
  }
  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id)
    }
  }
}