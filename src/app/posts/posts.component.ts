import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  constructor(private postsService: PostsService){ } 

  ngOnInit(){
    this.postsService.fetchPosts().subscribe((posts => this.userPosts = posts));
  }

  /* @Input() */ userPosts: any[] = [];
  likedPosts: Set<number> = new Set();
  newComment: string = '';

  likePost(postId: number): void {
    if (this.likedPosts.has(postId)) {
      this.likedPosts.delete(postId);
    } else {
      this.likedPosts.add(postId);
    }
  }

  addComment(postId: number): void {
    const post = this.userPosts.find(post => post.id === postId);
    if (post && this.newComment.trim()){
      post.comments.push(this.newComment);
      this.newComment = '';  
    }
  }
}
