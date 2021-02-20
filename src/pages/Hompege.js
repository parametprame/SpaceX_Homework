import React, { lazy, Suspense } from 'react';

const Section1 = lazy(() => import('../View/Section1'))
const Section3 = lazy(() => import('../View/Section3'))
const Section4 = lazy(() => import('../View/Section4'))


const Homepage = () => {

    return (
        <React.Fragment >
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Section1 />
                <Section3 />
                <Section4 />
            </Suspense>
        </React.Fragment>
    )
}

export default Homepage