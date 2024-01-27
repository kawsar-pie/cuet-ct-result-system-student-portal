import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import UserContext from "./Contexts/UserContext";
import mainRouter from "./routes/MainRoute";

function App() {
  const router = createBrowserRouter(mainRouter);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        {/* <div className="bg-red-400/50 z-50"> */}
        <RouterProvider router={router}></RouterProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
