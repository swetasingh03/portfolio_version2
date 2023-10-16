import './Assets/Styles/styles.css';
import DesignStructure from './Layouts/DesignStructure';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
       <DesignStructure>
      <Routes>
       <Route path="/" element={ <Home></Home> } />
       <Route path="/resume" element={ <Resume></Resume> } />
       <Route path="/projects" element={<Project></Project>}></Route>
       <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
       </DesignStructure>
    </div>
  );
}

export default App;
