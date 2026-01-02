
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <App />
     </UserContextProvider>,
    

)
