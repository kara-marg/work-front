import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {ProjectListComponent} from "../project/project-list/project-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    ProjectListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
