import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
// import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, PostsComponent,*/ NavigationComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // posts = [
  //   {
  //     id: 1,
  //     user: 'John Doe',
  //     content: 'Just finished a great book!',
  //     comments: ['I loved that book too!', 'What was your favorite part?']
  //   },
  //   {
  //     id: 2,
  //     user: 'Jane Smith',
  //     content: 'Had a fantastic day at the beach!',
  //     comments: ['Sounds amazing!', 'I need a beach day soon!']
  //   }
  // ];
}
