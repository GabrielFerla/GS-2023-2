import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routers/Home.jsx';
import Error from './routers/Error.jsx';
import Escola from './routers/Escola.jsx';
import Login from './routers/Login.jsx';
//importando o estilo geral com styled Components
import StyloGeral from './css/estiloGlobal.jsx';
import Alunos from './routers/Alunos.jsx'
import ListarAlunos from './routers/ListarAlunos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/escola', element: <Escola /> },
      { path: '/incluir', element: <Alunos /> },
      { path: '/listarAlunos', element: <ListarAlunos /> },
      { path: '/editar/:id', element: <Alunos /> },

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
