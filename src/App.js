import { Switch } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Utilites from './components/Utilites';
import Pages from './components/Pages';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Components from './components/Components';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
       <Switch>
<Route exact path = "/">
 <Dashboard/>
</Route>
<Route  path = "/components">
 <Components/>
</Route>
<Route  path = "/utilites">
 <Utilites/>
 </Route>
 <Route  path = "/pages">
 <Pages/>
 </Route>
 <Route  path = "/charts">
 <Charts/>
</Route>
<Route  path = "/tables">
 <Tables />
</Route>     
       </Switch>
    </div>
  );
}

export default App;
