import { Suspense, lazy } from 'react';
import './App.css';
import Main from './Page/Main';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from "react-router-dom"
import { route } from "./routes/route"

import SuspenseLoader from './common/SuspenseLoader';

const ErrorComponent = lazy(() => import('./common/ErrorComponent'))
// Routers===createBrowserRouter
// Router===createRoutesFromElements  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={route.main.path} element={<Navigate to={`${route.emails.path}/inbox`} />} />
      <Route path={route.main.path} element={<route.main.element />}>
        <Route path={`${route.emails.path}/:type`} element={<route.emails.element />} />
        <Route path={route.view.path} element={<route.view.element />} errorElement={<ErrorComponent />} />
      </Route>
      <Route path={route.invalid.path} element={<Navigate to={`${route.emails.path}/inbox`} />} />
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <div >
        {/* <Main /> */}
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
