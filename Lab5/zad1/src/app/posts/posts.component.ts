import { DownloadService } from './../download.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private downloadService: DownloadService) { }

  posts: any[] = [];

  postForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    name: new FormControl('')
  })

  ngOnInit(): void {
    this.downloadService.getPosts().subscribe(posts => this.posts =posts);
  }


  sendPost() {
    let post = {
      "userId": 0,
      "id": 0,
      "title": this.postForm.get('title')!.value,
      "body": this.postForm.get('body')!.value
    }
    this.downloadService.sendPost(JSON.stringify(post)).subscribe(results => this.posts.splice(0, 0, post));
  }
}
