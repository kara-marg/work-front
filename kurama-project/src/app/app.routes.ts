import {Routes} from '@angular/router';
import {RegistrationComponent} from "./components/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RequirementListComponent} from "./components/requirement/requirement-list/requirement-list.component";
import {ProjectListComponent} from "./components/project/project-list/project-list.component";
import {RequirementPageComponent} from "./components/requirement/requirment-page/requirement-page.component";
import {TcPageComponent} from "./components/test-cases/tc-page/tc-page.component";
import {AuthGuard} from "./services/domain/auth-guard.service";
import {ProjectPageComponent} from "./components/project/project-page/project-page.component";
import {
  ProjectComponentPageComponent
} from "./components/project-component/project-component-page/project-component-page.component";
import {TcCreatePageComponent} from "./components/test-cases/tc-create-page/tc-create-page.component";

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
    path: 'requirement/:id',
    component: RequirementPageComponent,
    title: 'Requirement page',
    canActivate: [AuthGuard]
  },
  {
    path: 'project-list',
    component: ProjectListComponent,
    title: 'Project-list page',
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:id',
    component: ProjectPageComponent,
    title: 'Project page',
    canActivate: [AuthGuard]
  },
  {
    path: 'tc-page/:id',
    component: TcPageComponent,
    title: 'TC page',
    canActivate: [AuthGuard]
  },
  {
    path: 'tc-create-page',
    component:TcCreatePageComponent,
    title: 'TC create page',
    canActivate: [AuthGuard]
  },
  {
    path: 'project-component/:id',
    component: ProjectComponentPageComponent,
    title: 'Project Component page',
    canActivate: [AuthGuard]
  }
];
