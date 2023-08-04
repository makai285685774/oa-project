export type ModelInfo = {
  html: string;
  param: Array<any>;
};
export type FormItem = {
  modelName: string;
  tr: string;
  td: string;
}

export type Task = {
  id: string
  name: string
}

export type User = {
  userId: string
  userName: string
}

export type OfficeDoc = {
  fontSize: string
  title: string
  type: string
  degreeOfUrgency: string
}
export type offical = {
  Id?: any;
  taskId?: any;
  contListId?: any
  id?: any,
  getDate: any,
  getUnit: any,
  titanic: any,
  title: any,
  getTitanic: any,
  opinion: any,
  signer: any,
  processInstanceId:any
  archive: any,
  type: any,
  executionId?: any
}