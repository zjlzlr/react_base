import App from './App';
import Home from './pages/home';
import Page1 from './pages/page1';
import {Route} from 'react-router-dom'
export interface RouteItem {
    path: String,
    component: any,
    routes?: any[]
}
export const routes = [
    // {
    //   path: "/",
    //   component: App
    // },
    {
      path: "/page1",
      component: Page1,
      routes: [
        {
          path: "home",
          component: Home
        }
      ]
    }
];
