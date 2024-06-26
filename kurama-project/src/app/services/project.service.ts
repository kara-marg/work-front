import {Injectable} from '@angular/core';
import {Project} from "../entity/project";
import {AuthService} from "./domain/auth.service";
import {HttpClient} from "@angular/common/http";
import {RequestService} from "./domain/request.service";
import {Observable} from "rxjs";
import {ProjectComponent} from "../entity/projectComponent";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private requestService: RequestService) { }


  getAllProjects(): Observable<Project[]> {
    let path = "/project/all"
    return this.requestService.getRequest(path);
  }

  getProjectById(id: number): Observable<Project>  {
    let path = `/project/${id}`
    return this.requestService.getRequest(path);
  }

  saveProject(project: Project):Observable<Project>{
    return this.requestService.postRequest("/project/save", project);
  }

}
