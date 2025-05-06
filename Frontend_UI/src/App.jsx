import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App(){
  return(
    
    <BrowserRouter>
<h3 className="title is-3 has-text-centered">CRUD Application</h3>



<div>
  <Routes>
    <Route path="/" element={<UserList/>}/>
    <Route path="add" element={<AddUser/>}/>
    <Route path="edit/:id" element={<EditUser/>}/>
  </Routes>
</div>
    </BrowserRouter>
  )
}
export default App;