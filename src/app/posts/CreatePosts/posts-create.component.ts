import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../../../Models/post.model';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  /* @Output turns this into an event that can be listened to from outside. IE: Parent Component*/
  // Data emmited will be of type post
  @Output() createdPost = new EventEmitter<Post>();

  onCreatePost() {
    const newPost: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.createdPost.emit(newPost);
  }

  constructor() { }

  ngOnInit() {
  }

}
