import './App.css';
import Home from './pages/Home';
import Students from './pages/Students';
import Contact from './pages/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from './pages/Form';
import { InputContextProvider } from './Context/inputContext';
function App() {
  return (

      <InputContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />}/>
             <Route path='/form' element={<Form/>}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        </BrowserRouter>
      </InputContextProvider>

  );
}
export default App;
