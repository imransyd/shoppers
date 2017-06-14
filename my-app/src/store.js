import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { berries } from 'react-redux-firebase'
// Replace with your Firebase config
const fbConfig = {
    apiKey: "AIzaSyA32VZuHQ6NC4Ucx1EgcN7hNi5sCtaxoBM",
    authDomain: "berries-69d05.firebaseapp.com",
    databaseURL: "https://berries-69d05.firebaseio.com"
}
export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    berries(fbConfig, { userProfile: 'users' }),
    // Redux Devtools
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}