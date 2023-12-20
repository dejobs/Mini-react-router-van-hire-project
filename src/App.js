import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login/Login";
import Vans, { loader, loader as vansLoader } from "./pages/Vans/Vans";
import VansDetail, {
  loader as vanDetailLoader,
} from "./pages/VansDetail/VansDetail";
import Layouts from "./components/Layouts/Layouts";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Reviews from "./pages/Host/Reviews/Reviews";
import Income from "./pages/Host/Income/Income";
import HostLayouts from "./components/HostLayouts/HostLayouts";
import HostVans, {
  loader as hostVansLoader,
} from "./pages/Host/HostVans/HostVans";
import HostVansDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVansDetail/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanphotos/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing/HostVanPricing";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Error from "./components/Error/Error";
import { requireAuth } from "./utilis";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="van/:id" element={<VansDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayouts />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />

        <Route
          path="vans/:id"
          element={<HostVansDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
