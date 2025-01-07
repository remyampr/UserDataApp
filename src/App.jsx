import { Outlet } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
const App = () => {
  return (
  <>
    <NavigationBar/>
    <main>
    <Outlet/>
    </main>
   
    <Footer/>
  </>


  )
}

export default App