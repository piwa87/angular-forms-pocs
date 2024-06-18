import { Routes } from '@angular/router';
import { TestForm1Component } from './piot-forms/test-form1/test-form1.component';
import { TestForm2Component } from './piot-forms/test-form2/test-form2.component';
import { TestForm3Component } from './piot-forms/test-form3/test-form3.component';

const utilRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test-1' },
];

export const navBarRoutes: Routes = [
  {
    path: 'test-1',
    component: TestForm1Component,
  },
  {
    path: 'test-2',
    component: TestForm2Component,
  },
  { path: 'test-3', component: TestForm3Component },
];

export const routes: Routes = utilRoutes.concat(navBarRoutes);
