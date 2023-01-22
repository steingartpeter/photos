import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent {
  imgUrl: string = '';
  photoCntr: number = 1;
  constructor(private phtSrv: PhotosService) {
    this.fetchPhoto();
  }

  updatePhoto() {
    this.fetchPhoto();
    this.photoCntr += 1;
  }

  fetchPhoto() {
    this.phtSrv.getRndmPhoto().subscribe((response) => {
      this.imgUrl = response.urls.small;
    });
  }
}
