interface DataObject {
  [prop: string]: any
}
export interface ITreeDataItem<T extends DataObject> {
  expand: boolean,
  isDir: boolean,
  name: string,
  customData: T
  children: ITreeDataItem<T>[]
}
export type DefaultTreeDataItem = ITreeDataItem<DataObject>
