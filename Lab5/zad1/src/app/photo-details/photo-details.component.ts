import { DownloadService } from './../download.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  private subscription: Subscription | undefined;
  id: number = -1;
  photoUrl: string = "";

  constructor(private route: ActivatedRoute, private downloadService: DownloadService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.downloadService.getPhotoUrlById(this.id).subscribe(response => this.photoUrl = response.url);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
