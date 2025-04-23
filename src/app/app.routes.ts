import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full'}
];
