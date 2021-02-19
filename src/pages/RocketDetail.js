import React, { lazy, Suspense } from 'react';
const SectionDetail1 = lazy(() => import('./View/SectionDetail1'))
const SectionDetail2 = lazy(() => import('./View/SectionDetail2'))

const RocketDetailpage = () => {
    
    return (
        <React.Fragment style={{top: 0}}>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <SectionDetail1/>
                <SectionDetail2/>
               
            </Suspense>
        </React.Fragment>
    )
}

export default RocketDetailpage