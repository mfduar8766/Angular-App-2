import { Component, OnInit, OnDestroy  } from '@angular/core';
 import { PostService } from 'src/Services/post.service';
import { Post } from 'src/Models/post.model';
import { Subscription  } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // Makes posts bindable from outside IE: Accept outputs as input

  /* Using the public keyword: Automatically creates new property in component and sets the value*/

  posts: Post[] = [];
  private subscribedPosts: Subscription;

  constructor( public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
   this.subscribedPosts = this.postService.getUpdatedPostListener().
    subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  ngOnDestroy() {
     this.subscribedPosts.unsubscribe();
  }

}
