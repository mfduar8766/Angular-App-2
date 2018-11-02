import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/Services/post.service';

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

  constructor(public postService: PostService) { }

  onCreatePost(form: NgForm ) {
    if(form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }

  ngOnInit() {
  }

}
