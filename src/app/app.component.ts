import { Component } from '@angular/core';
import { Post } from '../Models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app';
  listOfNewPosts: Post[] = [];

  onAddedPost(newPost) {
    this.listOfNewPosts.push(newPost);
  }

}
