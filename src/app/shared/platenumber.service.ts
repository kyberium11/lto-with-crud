import { Injectable } from '@angular/core';
import { PlateNumber } from '../shared/PlateNumber';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class PlateNumberService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: PlateNumber) {
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      platenumber: apt.platenumber,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/platenumber/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/platenumber');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id, apt: PlateNumber) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      platenumber: apt.platenumber,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/platenumber/' + id);
    this.bookingRef.remove();
  }
}