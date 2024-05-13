import {RequirementShort} from "./requirement-short";
import {Step} from "./step";

export interface TestCase {
  id?: number,
  name: string | null,
  description: string | null,
  projectId?: number,
  projectName: string | null,
  projectComponentId?: number,
  projectComponentName: string | null,
  requirementShortDTOList?: RequirementShort[];

  steps:Step[]
}
