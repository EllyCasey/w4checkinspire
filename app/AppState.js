import { BgImage } from './models/BgImage.js'
import { Quote } from './models/Quote.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {BgImage} */
  bgImage = null

  /**@type {Quote} */
  quote = null
}

export const AppState = createObservableProxy(new ObservableAppState())