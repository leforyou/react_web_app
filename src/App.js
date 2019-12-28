import React,{Fragment ,Component} from 'react';

import RouterConfig from './RouterConfig';


class App extends Component {
  render() {
    return (
      <Fragment> 
        <div className="App main-width">
          <RouterConfig></RouterConfig>
        </div>
      </Fragment>
    );
  }
}

export default App;

/* function App() {
  return (
    <Fragment> 
      <div className="App main-width">
        <RouterConfig></RouterConfig>
      </div>
    </Fragment>
  );
}

export default App; */