import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { GenericControlsComponent } from './generic-controls/generic-controls.component';

const utilRoutes: Routes = [{ path: '', pathMatch: "full", redirectTo: 'home' }]

export const navBarRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'address', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'generic-controls', component: GenericControlsComponent },
];

export const routes: Routes = utilRoutes.concat(navBarRoutes);

