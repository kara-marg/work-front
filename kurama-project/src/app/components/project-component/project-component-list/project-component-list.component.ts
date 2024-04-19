import { Component } from '@angular/core';
import {HeaderService} from "../../../services/domain/header.service";

@Component({
  selector: 'app-project-component-list',
  standalone: true,
  imports: [],
  templateUrl: './project-component-list.component.html',
  styleUrl: './project-component-list.component.scss'
})
export class ProjectComponentList {
    constructor(private headerService: HeaderService) {
    }
}
