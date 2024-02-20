import './App.css'
import Brands from './components/brands/Brands'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Mission from './components/mission/Mission'
import Navbar from './components/navbar/Navbar'
import Offer from './components/offer/Offer'
import Socials from './components/socials/Socials'
import Solutions from './components/solutions/Solutions'

function App() {
  return (
    <div className='layout-wide'>
      <Navbar />
      <div className="ln-fullpage" data-navigation="true">
        <Home />
        <Mission />
        <Offer />
        <Solutions />
        <Brands />
        {/* <Contact /> */}
        <Footer />
        <Socials />
      </div>
    </div>
  )
}

export default App
