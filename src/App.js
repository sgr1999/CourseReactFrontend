
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListCourseComponent from './Components/ListCourseComponent';
import AddCourseComponent from './Components/AddCourseComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
        <div className='container'>

        <Routes>
          <Route exact path='/' element={<ListCourseComponent/>}></Route>
          <Route exact path='/course' element={<ListCourseComponent/>}></Route>
          <Route path='/add-course' element={<AddCourseComponent/>}></Route>
        </Routes>
        </div>
     <FooterComponent/>
      </Router>
      
     
    </div>
  );
}

export default App;
