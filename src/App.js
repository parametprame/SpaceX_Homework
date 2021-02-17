import './App.css';
import React, { lazy, Suspense } from 'react';
import Navigation from './components/navigation'
import { BrowserRouter as Router, Route} from "react-router-dom"; 
import L from 'react-loadable'
import { QueryClient, QueryClientProvider } from 'react-query'

const Loading  = () => <div>Loading...</div>

const Loadable = (opts) => L({
  loading: Loading,
  ...opts
})

const AsyncHome = Loadable({
  loader: () => import('./pages/Hompege')
})

const AsyncRocket = Loadable({
  loader: () => import('./pages/Rocket')
})

const AsyncLaunches = Loadable({
  loader: () => import('./pages/Launches')
})

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <React.Fragment>
          <Navigation />
          <Route exact path="/" exact component={AsyncHome}/>
          <Route path="/Rocket" exact component={AsyncRocket}/>
          <Route path="/Launches" exact component={AsyncLaunches}/>
        </React.Fragment>
      </Router>
    </QueryClientProvider>
  );
}

export default App;