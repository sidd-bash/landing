import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import Landing from './Pages/Landing'

function App() {
  return (
    
      <Routes>
        <Route index element={<Landing/>} />
      </Routes>
    
  );
}

export default App;
