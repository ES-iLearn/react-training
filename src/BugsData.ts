
export interface BugData {
    id: number;
    title: string;
    status: BugStatus;
    created: Date;
    resolved?: Date;
  }
  
  export enum BugStatus {
    reported = 0,
    indev = 1,
    inqa = 2,
    resolved = 3,
    reopened = 4,
  }
  

let bugs: BugData[] = [
  {
    id: 0,
    title: "Issue with login header",
    status: BugStatus.resolved,
    created: new Date(2022, 7, 25),
  },
  {
    id: 1,
    title: "Not able to click login button",
    status: BugStatus.inqa,
    created: new Date(2022, 7, 26),
  },
  {
    id: 2,
    title: "Password is readable",
    status: BugStatus.indev,
    created: new Date(2022, 7, 26),
  },
];

export default bugs;
