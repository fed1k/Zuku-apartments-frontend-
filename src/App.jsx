import { Route, Routes } from "react-router-dom"
import Test from './components/Test'
import Example from './components/Example'
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="example" element={<Example />}/>
          <Route path="test" element={<Test />}/>
        </Routes>
    </div>
  )
}

export default App
