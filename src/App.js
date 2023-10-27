import { Provider } from "react-redux";
import "./App.css"
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo";
function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },{
        path:"/demo",
        element:<Demo/>
      }
    ]
  }]);
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
     
    </div>
    </Provider>
  );
}

export default App;
