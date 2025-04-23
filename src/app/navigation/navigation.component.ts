import { Component } from '@angular/core';
import { RoleBasedAccessDirective } from '../role-based-access.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RoleBasedAccessDirective, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
