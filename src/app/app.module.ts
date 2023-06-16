import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- import this
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './core/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoreComponent } from './store/store.component';
import { WorkordersComponent } from './workorders/workorders.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SettingsComponent,
    SidebarComponent,
    StoreComponent,
    WorkordersComponent,
    CartComponent,
    DashboardComponent,
    CustomersComponent,
    ProductsComponent,
    OrdersComponent,
    ReportsComponent,
    LoginComponent,
    ProfileComponent,
    ProductDetailComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule, // <-- add this

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
