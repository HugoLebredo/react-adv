import { LazyExoticComponent, lazy } from 'react'
import {NoLazy} from '../01-lazyload/pages/NoLazy';



type JSXcomponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXcomponent> | JSXcomponent,
    name: string
}

const LazyLayout = lazy(() =>/* webpackChunkName: "LazyLayout" */ import('../01-lazyload/layout/LazyLayout'))

const routes:Route[] = [
    {
        to:'/LazyLayout',
        path:'/LazyLayout/*',
        Component: LazyLayout,
        name:'Lazy Dashboard'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'No lazy'
    },
]

export default routes