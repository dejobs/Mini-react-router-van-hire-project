import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About/About';
import Home from "./pages/Home/Home"
import Vans from './pages/Vans/Vans';
import VansDetail from './pages/VansDetail/VansDetail';
import Layouts from './components/Layouts/Layouts';
import Dashboard from './pages/Host/Dashboard/Dashboard';
import Reviews from './pages/Host/Reviews/Reviews';
import Income from './pages/Host/Income/Income';
import HostLayouts from './components/HostLayouts/HostLayouts';
import HostVans from './pages/Host/HostVans/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail/HostVansDetail';
import HostVanInfo from './pages/Host/HostVanInfo/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanphotos/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing/HostVanPricing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path="van/:id" element={<VansDetail />} />

            <Route path="host" element={<HostLayouts />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />

              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path='photos' element={<HostVanPhotos />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
