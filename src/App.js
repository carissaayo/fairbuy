import './App.css';
import {Route,BrowserRouter, Routes} from "react-router-dom"
import Home from './pages/Home';
import SideNav from './components/SideNav';

function App() {
  return (
    
    <main className="App h-screen w-full flex flex-row gap-10">
      <SideNav/>
      
{/* Pages Con */}
<div>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
</div>
    </main>
  );
}

export default App;
