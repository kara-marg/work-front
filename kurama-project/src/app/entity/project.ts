import {Requirement} from "./requirement";
import {TestCase} from "./testCase";
import {ProjectComponent} from "./projectComponent";

export interface Project {
  id: number;
  name: string;
  description: string;
  projectComponents?: ProjectComponent[];
}
