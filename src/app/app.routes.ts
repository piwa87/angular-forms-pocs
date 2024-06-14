import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { GenericControlsComponent } from './generic-controls/generic-controls.component';
import { FormGroupDirectiveComponent } from './form-group-directive/form-group-directive.component';

const utilRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'show-one' },
];

export const navBarRoutes: Routes = [
  {
    path: 'show-one',
    component: FormGroupDirectiveComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'address', component: AddressFormComponent },
  { path: 'generic-controls', component: GenericControlsComponent },
];

export const routes: Routes = utilRoutes.concat(navBarRoutes);
