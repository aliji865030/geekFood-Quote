import "./App.css";
import ContactScreen from "./screen/ContactScreen";
import FoodsScreen from "./screen/FoodsScreen";
import Hotels from "./screen/Hotels";
import LandingScreen from "./screen/LandingScreen";
import QuotesScreen from "./screen/QuoteScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "quote",
    element: <QuotesScreen />,
  },
  {
    path: "resturant",
    element: <Hotels />,
  },
  {
    path: "foods",
    element: <FoodsScreen />,
  },
  {
    path: "contact",
    element: <ContactScreen />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
