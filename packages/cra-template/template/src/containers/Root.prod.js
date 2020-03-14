import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

//devtools can be added for only dev setup
const Root = ({ store ,i18nConstants}) => (
  <Provider store={store}>
    <div>
      <App i18nConstants={i18nConstants}/>

    </div>
  </Provider>
)

export default Root