import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as Tesseract from 'tesseract.js'

import { PlateNumberService } from './../shared/platenumber.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  photo: SafeResourceUrl;
  textImage: String;
  bookingForm: any;
  constructor(
    private sanitizer: DomSanitizer,
    private aptService: PlateNumberService,
    private router: Router,) {}

   

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
   
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    
    
    Tesseract.recognize(image.dataUrl)
    .then(result => {
      console.log(result);
      console.log(result.data.text);
      if(result.data.text) {
        this.bookingForm = {
          name: 'Jerome Altarejos',
          email: 'brojeromealtarejos@gmail.com',
          mobile: '09567387836',
          platenumber: result.data.text,
        }
          this.aptService.createBooking(this.bookingForm).then(res => {
          console.log(res)
          this.router.navigate(['/list-platenumber']);
        })
          .catch(error => console.log(error));
      } else {

      }
    })
    .catch(err => console.error(err));

 
  }

}
