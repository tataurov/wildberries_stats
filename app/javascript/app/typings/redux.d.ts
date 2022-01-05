export interface ReduxActionPayload {
  [key: string]: any
}

export interface ReduxAction {
  type: string,
  payload?: ReduxActionPayload
  [key: string]: any
}
