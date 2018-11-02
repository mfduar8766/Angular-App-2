import { Post } from '../Models/post.model';
import { Injectable } from '@angular/core';
//Event emmiter
import { Subject } from 'rxjs';

//Tell angular about the service
@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private updatedPosts = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getUpdatedPostListener() {
    return this.updatedPosts.asObservable();
  }

  addPost(title: string, content: string) {
    const newPost: Post = {title, content};
    this.posts.push(newPost);
    this.updatedPosts.next([...this.posts]);
  }
}
