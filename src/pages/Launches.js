import React, { lazy, Suspense } from 'react';

const Launches1 = lazy(() => import('../View/lunches1'))
const Launches2 = lazy(() => import('../View/lunches2'))
const Launches3 = lazy(() => import('../View/lunches3'))

const LaunchesPage = () => {
    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Launches1 />
                <Launches2 />
                {/* <Launches3 /> */}
            </Suspense>
        </React.Fragment>
    )
}

export default LaunchesPage