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
const AsyncRocketDetail = Loadable({
  loader: () => import('./pages/RocketDetail')
})


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/SpaceX_Homework">
          <Navigation />
          <Route exact={true} path="/" exact component={AsyncHome}/>
          <Route path="/Rockets" exact component={AsyncRocket}/>
          <Route path="/Launches" exact component={AsyncLaunches}/>
          <Route path="/RocketDetail" exact component={AsyncRocketDetail}/>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
