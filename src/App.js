import './App.css';
import { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Loading from './components/Loading';
import FrontPage from './components/FrontPage';
import EndPage from './components/EndPage';
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setLoading("False");
    }, 2000);
  }, [])



  return (
    <>
      <Router>
      <LoadingBar
        color='#ff00ff'
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(0)
        }
      />
        <Routes>
          <Route path='/' element={loading === true ? <Loading /> :
            <div id='valentizer' className={`valentizer`}>
              <FrontPage />
            </div>} >
          </Route>
          <Route path='/envelope' element={< Envelope setProgress={setProgress} />}>
          </Route>
          <Route path='/ask' element={<Ask setProgress={setProgress} />}>
          </Route>
          <Route path='/endpage' element={<EndPage setProgress={setProgress} />}>
          </Route>
          <Route path='/destroy' element={<Destroy setProgress={setProgress} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
