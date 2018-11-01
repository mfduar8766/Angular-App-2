import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../../Models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // Makes posts bindable from outside IE: Accept outputs as input
  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {
  }

}
