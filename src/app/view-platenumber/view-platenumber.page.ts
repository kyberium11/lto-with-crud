import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlateNumberService } from './../shared/platenumber.service';

@Component({
  selector: 'app-view-platenumber',
  templateUrl: './view-platenumber.page.html',
  styleUrls: ['./view-platenumber.page.scss'],
})
export class ViewPlatenumberPage implements OnInit {
  key: any;
  plate: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private aptService: PlateNumberService) { 
    this.key = activeRoute.snapshot.params["key"]; 
  }

  ngOnInit() {
    this.aptService.getBooking(this.key).valueChanges().subscribe(res => {
      this.plate = res;
    });
  }

}
