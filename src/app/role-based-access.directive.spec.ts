import { RoleBasedAccessDirective } from './role-based-access.directive';
import { ViewContainerRef, TemplateRef } from '@angular/core';

describe('RoleBasedAccessDirective', () => {
  let directive: RoleBasedAccessDirective;
  let mockViewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let mockTemplateRef: jasmine.SpyObj<TemplateRef<any>>;

  beforeEach(() => {
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', ['createEmbeddedView', 'clear']);
    mockTemplateRef = jasmine.createSpyObj('TemplateRef', ['elementRef']);
    directive = new RoleBasedAccessDirective(mockTemplateRef, mockViewContainerRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should render the template if the role is allowed', () => {
    directive['currentUserRole'] = 'Admin'; // Simulate current user role
    directive.appRoleBasedAccess = ['Admin', 'Editor']; // Allowed roles
    directive['updateView']();

    expect(mockViewContainerRef.createEmbeddedView).toHaveBeenCalledWith(mockTemplateRef);
    expect(mockViewContainerRef.clear).not.toHaveBeenCalled();
  });

  it('should clear the view if the role is not allowed', () => {
    directive['currentUserRole'] = 'User'; // Simulate current user role
    directive.appRoleBasedAccess = ['Admin', 'Editor']; // Allowed roles
    directive['updateView']();

    expect(mockViewContainerRef.clear).toHaveBeenCalled();
    expect(mockViewContainerRef.createEmbeddedView).not.toHaveBeenCalled();
  });
});