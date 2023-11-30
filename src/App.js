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
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
