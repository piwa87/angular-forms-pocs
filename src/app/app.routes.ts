import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { GenericControlsComponent } from './generic-controls/generic-controls.component';
import { FormGroupDirectiveComponent } from './piot-forms/form-group-directive/form-group-directive.component';
import { TestForm2Component } from './piot-forms/test-form2/test-form2.component';

const utilRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test-1' },
];

export const navBarRoutes: Routes = [
  {
    path: 'test-1',
    component: FormGroupDirectiveComponent,
  },
  {
    path: 'test-2',
    component: TestForm2Component,
  },
  { path: 'home', component: HomeComponent },
  { path: 'address', component: AddressFormComponent },
  { path: 'generic-controls', component: GenericControlsComponent },
];

export const routes: Routes = utilRoutes.concat(navBarRoutes);
