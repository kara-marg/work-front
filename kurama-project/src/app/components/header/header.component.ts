import {Component, inject, Inject, QueryList, ViewChildren} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/domain/auth.service";
import {HeaderService} from "../../services/domain/header.service";
import {NgForOf, NgIf} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {ProjectService} from "../../services/project.service";
import {Project} from "../../entity/project";
import {ProjectComponentService} from "../../services/project-component.service";
import {ProjectComponent} from "../../entity/projectComponent";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink,
    MatButton,
    NgIf,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  text: string = "Kurama";
  headerService = inject(HeaderService);
  projectService: ProjectService = inject(ProjectService);
  projects?: Project[];

  testBoolean = false;

  projectMenuRefs: { [key: number]: MatMenuTrigger } = {};

  @ViewChildren(MatMenuTrigger) triggers!: QueryList<MatMenuTrigger>;

  constructor(private authService: AuthService, private router: Router) {
  }
  onClick() {
    alert('');
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["/auth"])
  }
  getAllProjects(){
    this.projectService.getAllProjects().subscribe(
      data =>
      {
        this.projects = data;
      }
    )
  }

  isProjectHaveComponents(project: Project): Boolean {
    return Boolean(project && project.projectComponents && project.projectComponents.length > 0)
  }

  isProjectComponentHaveRequirements(projectComponent: ProjectComponent): Boolean {
    return Boolean(projectComponent && projectComponent.requirements && projectComponent.requirements.length > 0)
  }

}
