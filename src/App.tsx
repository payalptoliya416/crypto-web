import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteRoute from "./routes/SiteRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#202A43",
            color: "#fff",
            borderRadius: "10px",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteRoute/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
