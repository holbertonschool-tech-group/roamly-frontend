import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout/index.jsx'
import About from './pages/About/index.jsx'
import Home from './pages/Home/index.jsx'
import Destination from './pages/Destination/index.jsx'
import Contact from './pages/Contact/index.jsx'
import Hotel from './pages/Hotel/index.jsx'
import './styles/_variables.scss'
import Blog from './pages/Blog/index.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="destination" element={<Destination />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
