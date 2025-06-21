import React from 'react'
import UseProps from "./component/UseProps"
import UseBootstrap from "./component/UseBootstrap"
import MyClassComponent from './component/MyClassComponent'
import MyFunctionComponent from './component/MyFunctionComponent'
import JsxExample from './component/JsxExample';
import './App.css'
import JsxExample3 from './component/JsxExample3'

function App() {

  return (
    <React.Fragment>
      { <UseBootstrap /> }
      { <h1>Welcome</h1>
      <MyClassComponent />
      <MyFunctionComponent />
      <JsxExample/>
      <JsxExample3 />
    </> }
    <UseProps name="Smrutiranjan" age ="23" email="msmrutiranjan35@gmail.com"/>
    </React.Fragment>
  )
}

export default App
