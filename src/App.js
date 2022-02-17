
import Home from './pages/home';
import Info from './pages/info';
import Details from './pages/details';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {

 return(

  <BrowserRouter>
   <Routes>
    
    <Route path="details/:id" element={<Details />} >
    <Route path='info' element={<Info></Info>}></Route>
    </Route>
    
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='*' element={<h1>not found</h1>}>
    </Route>
    </Routes>
    </BrowserRouter>
 )
 }
export default App;
