import {Navbar, Welcome, Footer, Services, Transactions} from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
      </div>
      <Welcome/>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
