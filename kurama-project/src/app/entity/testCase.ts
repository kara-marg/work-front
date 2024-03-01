export interface TestCase {
  id: number;
  name: string;
  // status: string,
  isAutomated: boolean
  steps: string,
  result: string,
  expectedResult: string,
  dateOfTesting: Date,
  component: string,
  environment: string
}
