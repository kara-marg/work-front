import {Requirement} from "./requirement";


export interface ProjectComponent {
  id?: number | null;
  name: string | null;
  description: string | null;
  finished: boolean | null;
  projectId: number | null;
  projectName?: string | null;
  requirements?: Requirement[];
  coverage?: number;
}
