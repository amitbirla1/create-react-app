import T from 'i18n-react';
import React from "react";
import AmeyoLogo from "../images/AmeyoLogoSVG";
import { AmeyoLogger } from "../utils/AmeyoLogger";
import DummyComponent from "../components/DummyComponent";
import { dummyAction } from '../actions/DummyAction';
import { connect } from "react-redux";
import { AppData } from '../models/DummyData';




const logger = new AmeyoLogger("App");

class App extends React.Component {

  constructor(props){
    super(props);
    T.setTexts(props.i18nConstants);
  }

  render() {
    logger.log("starting App ");
    return (
      <div className="App">
        <header className="App-header">
          <AmeyoLogo />
          <h1>Welcome to <a  className="App-link"
            href="https://www.ameyo.com/"
            target="_blank"
            rel="noopener noreferrer">
              Ameyo</a></h1>
          <ul>
          <li>
            {T.translate("home.content")}
          </li>
          <li>this template contains some predefined widgets and provide ability to connect with ameyo-app-client.</li>
          <li>
            This template allows you to organize your app with one of the react standard.
          </li>
          <li>  
            for more information <a href="http://sites.ameyo.com" >click here</a>
          </li>
          </ul>
          <p><button onClick={()=> this.props.dummyEvent(new AppData("firstApp").toString())}> showData</button></p>
          <DummyComponent data={this.props.data}/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data : state.appReducer.data
});

const mapDispatchToProps = dispatch => ({
  dummyEvent: (data) => dispatch(dummyAction(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);