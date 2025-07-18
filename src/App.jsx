import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModel, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleModal() {
    setShowModal(!showModel);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        console.log("Data :", apiData);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel && <SideBar data={data} handleModal={handleModal} />}

      {data && <Footer data={data} handleModal={handleModal} />}
    </>
  );
}

export default App;
