import { ToastContainer } from "react-toastify";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
