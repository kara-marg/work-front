import { Routes } from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {TicketsListComponent} from "./components/tickets/tickets-list/tickets-list.component";
import {ProjectListComponent} from "./components/project/project-list/project-list.component";
import {ComponentsListComponent} from "./components/components-list/components-list.component";
import {TicketPageComponent} from "./components/ticket/ticket-page/ticket-page.component";
import {TcPageComponent} from "./components/test-cases/tc-page/tc-page.component";
import {AuthGuard} from "./services/auth-guard.service";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
    canActivate: [AuthGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Registration page'
  },
  {
    path: 'auth',
    component: AuthorizationComponent,
    title: 'Authorization page'
  },
  {
    path: 'ticket-page/:id',
    component: TicketPageComponent,
    title: 'Ticket page',
    canActivate: [AuthGuard]
  },
  {
    path: 'project-list',
    component: ProjectListComponent,
    title: 'Project-list page',
    canActivate: [AuthGuard]
  },
  {
    path: 'components-list',
    component: ComponentsListComponent,
    title: 'Components-list page',
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id',
    component: TicketsListComponent,
    title: 'Project ticket list page',
    canActivate: [AuthGuard]
  },
  {
    path: 'tc-page/:id',
    component: TcPageComponent,
    title: 'TC page',
    canActivate: [AuthGuard]
  },
];
