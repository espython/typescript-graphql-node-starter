export interface MutationMap {
  [key: string]: (parent: any, args: any, context: {}, info: any) => any;
}

export interface QueryMap {
  [key: string]: (parent: any, args: any, context: {}, info: any) => any;
}
