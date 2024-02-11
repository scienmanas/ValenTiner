import './App.css';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import FrontPage from './components/FrontPage';
import Note from './components/Note';
import Ask from './components/Ask';
import Envelope from './components/Envelope'; 
import Destroy from './components/Destroy';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading("False");
    }, 2000);
  }, [])


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={loading === true ? <Loading /> :
            <div id='valentizer' className={`valentizer`}>
              <FrontPage />
            </div>} >
          </Route>
          <Route path='/envelope' element={< Envelope />}>
          </Route>
          <Route path='/ask' element={<Ask />}>
          </Route>
          <Route path='/note' element={<Note />}>
          </Route>
          <Route path='/destroy' element={<Destroy />}>
          </Route>
          <Route path='/note' element={<Note />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
