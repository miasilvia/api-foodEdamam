import "./App.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Food from "./pages/Food";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // URL API Edamam
    const apiUrl = process.env.REACT_APP_API_URL;
    const appId = process.env.REACT_APP_API_ID;
    const appKey = process.env.REACT_APP_API_KEY;

    const query = searchQuery;
    axios
      .get(apiUrl, {
        params: {
          app_id: appId,
          app_key: appKey,
          ingr: query,
        },
      })
      .then((response) => {
        setFoodData(response.data.hints);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(foodData, "ini data");
  return (
    <>
      <div className="bg-[#a8a29e] backdrop-filter:blur-lg flex flex-col px-5 items-center">
        <h1 className="animate-fade-in mb-10 mt-10 text-3xl">
          DAFTAR MAKANAN DAN JUMLAH KALORINYA
        </h1>
        <input
          className="animate-fade-in block w-1/2 pr-10 px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-smw-full"
          type="text"
          placeholder="Cari makanan..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Food foodData={foodData}/>
      </div>
    </>
  );
}

export default App;
