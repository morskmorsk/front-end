import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { StoreComponent } from './store/store.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
// import { Product-detail } from './product-detail/product-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { WorkordersComponent } from './workorders/workorders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Settings' } },
  { path: 'store', component: StoreComponent, data: { title: 'Store' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'cart', component: CartComponent, data: { title: 'Cart' } },
  { path: 'customers', component: CustomersComponent, data: { title: 'Customers' } },
  { path: 'orders', component: OrdersComponent, data: { title: 'Orders' } },
  { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
  // { path: 'product-detail', component: Product-detail, data: { title: 'Product Detail' } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'reports', component: ReportsComponent, data: { title: 'Reports' } },
  { path: 'workorders', component: WorkordersComponent, data: { title: 'Workorders' } },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
