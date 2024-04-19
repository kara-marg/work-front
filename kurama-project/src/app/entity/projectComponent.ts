import {Requirement} from "./requirement";


export interface ProjectComponent {
  id: number;
  name: string;
  description: string;
  finished: boolean
  projectId: number
  requirements?: Requirement[];
}
