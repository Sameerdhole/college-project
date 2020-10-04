import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'menu',     component: MenuComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus',     component: ContactComponent },
  ]