import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
