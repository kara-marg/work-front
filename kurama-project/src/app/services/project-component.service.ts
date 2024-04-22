import {Injectable} from '@angular/core';
import {RequestService} from "./domain/request.service";
import {ProjectComponent} from "../entity/projectComponent";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectComponentService {

  constructor(private requestService: RequestService) {
  }

  getProjectComponentById(id: number): Observable<ProjectComponent> {
    let path = `/project-component/${id}`
    return this.requestService.getRequest(path);
  }

  saveComponent(component: ProjectComponent): Observable<ProjectComponent> {
    return this.requestService.postRequest("/project-component/save", component);
  }


}
