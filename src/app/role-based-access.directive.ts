import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoleBasedAccess]'
})
export class RoleBasedAccessDirective {
  private currentUserRole: string = '';
  private allowedRoles: string[] = [];

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appRoleBasedAccess(roles: string[]) {
    this.allowedRoles = roles;
    this.updateView();
  }

  private updateView(): void {
    if (this.allowedRoles.includes(this.currentUserRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}