import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: object;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getPosts().subscribe(
      (data) => {
        this.posts$ = data;
      }
    )
  }

}
