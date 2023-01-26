
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import HomePage from './page/HomePage';
import User from './components/User';
import NotFound from './components/NotFound';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/data" element={<User/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
