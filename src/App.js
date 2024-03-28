import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";
import { Container } from 'react-bootstrap';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />
  },
  {
      path: "/about",
      element: <About />
  },
  {
      path: "/contacts",
      element: <Contacts />
  },
  {
      path: "/blog",
      element: <Blog />
  },
]);

function App() {
  return (
    <div>
      <Header />
      <Container className="mt-3 text-white">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
