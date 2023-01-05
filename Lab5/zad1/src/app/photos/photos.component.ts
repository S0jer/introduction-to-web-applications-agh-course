import { Component, OnInit } from '@angular/core';
import { DownloadService } from './../download.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  photos: any[] = []

  ngOnInit(): void {
    this.downloadService.getPhotos().subscribe(photos => this.photos = photos);
  }

}
