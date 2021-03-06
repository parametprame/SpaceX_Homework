import './App.css';
import React, { lazy, Suspense } from 'react';
import Navigation from './components/navigation'
import L from 'react-loadable'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

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
  loader: () => import('./View/SectionRocket2')
})


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <BrowserRouter basename='/SpaceX_Homework'>
          <Navigation />
          <Switch>
            <Route exact={true} path="/" exact component={AsyncHome}/>
            <Route path="/Rockets" exact component={AsyncRocket}/>
            <Route path="/Launches" exact component={AsyncLaunches}/>
            <Route path="/Rockets/detail/:id" exact component={AsyncRocketDetail}/>
          </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
