export type allWindowType = {
  [propName: string]: {
    window: Electron.BrowserWindowConstructorOptions
    hash: string
  }
}

export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object
}
