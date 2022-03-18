import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PlateNumberService } from './../shared/platenumber.service';
@Component({
  selector: 'app-save-platenumber',
  templateUrl: './save-platenumber.page.html',
  styleUrls: ['./save-platenumber.page.scss'],
})
export class SavePlatenumberPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: PlateNumberService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      platenumber: [''],
    })
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}