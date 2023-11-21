import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routers/Home.jsx';
import Error from './routers/Error.jsx';
import Login from './routers/Login.jsx';
//importando o estilo geral com styled Components
import StyloGeral from './css/estiloGlobal.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/*chamando o componente de estilização (styled Components)*/}
    <StyloGeral />
  </>,
);
