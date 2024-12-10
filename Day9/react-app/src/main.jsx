import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Marks from './Marks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={'xyz'} email={'xyz@gmail.com'} mobile={6575818585} />
    <Marks m1={87} m2={85} m3={84}/>
  </StrictMode>,
)
