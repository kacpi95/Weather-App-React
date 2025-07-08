import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './styles/normalize.scss';
import './styles/global.scss';
import '@fortawesome/react-fontawesome';

createRoot(document.getElementById('root')).render(<App />);
