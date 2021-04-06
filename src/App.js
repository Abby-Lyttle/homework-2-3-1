import React from 'react';

import './index.css';
import { Route, Link, Switch } from 'react-router-dom';
import { Page1 } from './page_1';
import { Page2 } from './page_2';
import { Page3 } from './page_3';
import { Page4 } from './page_4';
import { Odd } from './Odd';
import { Even } from './Even';
import { All } from './All';


function App() {
  return (
    <main>
      <h1>Routing Assignment</h1>
      
      <Link to="/page_1">
        <button>Page 1</button>
      </Link>

      <Link to="/page_2">
        <button>Page 2</button>
      </Link>

      <Link to="/page_3">
        <button>Page 3</button>
      </Link>

      <Link to="/page_4">
        <button>Page 4</button>
      </Link>

      <Link to="/odd">
        <button>Odd</button>
      </Link>

      <Link to="/even">
        <button>Even</button>
      </Link>

       <Link to="/all">
        <button>All</button>
      </Link> 

    <Switch>
      <Route path="/page_1" component={Page1} />
      <Route path="/page_2" component={Page2} />
      <Route path="/page_3" component={Page3} />
      <Route path="/page_4" component={Page4} />
      <Route path="/odd" component={Odd} />
      <Route path="/even" component={Even} />
      <Route path="/all" component={All} />
    </Switch>
    </main>
    
  );
} 

export default App;
