export interface NodeFile {
  id: string | null , 
  name: string | null ,
  data: any | null ,
  type: string ,
  path: string ,
  time: Date

}
export interface NodeFolder extends NodeFile  {
  data: (NodeFolder | NodeFile)[],

}
