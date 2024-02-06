import logo from './logo.svg';
import './App.css';
import { useState , useEffect} from 'react';
import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // first
  
    return () => {
      // second
    }
  }, [])
  



  return (
    <>
    < Loading />
      {/* <div className="app"></div> */}
    </>
  );
}

export default App;
