import {  Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddIframe from './AddIframe';
import ViewIframe from './ViewIframe';

const App = () => (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddIframe />} />
      <Route path="/view/:id" element={<ViewIframe />} />
    </Routes>

);

export default App;
