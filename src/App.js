import "./App.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="bg-[#a8a29e] backdrop-filter:blur-lg">
        <div className="flex flex-col px-5 items-center">
          <h1 className="mb-10 mt-10 text-3xl">
            DAFTAR MAKANAN DAN JUMLAH KALORINYA
          </h1>
          <input
            className="block w-1/2 pr-10 px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-smw-full"
            type="text"
            placeholder="Cari makanan..."
            value={searchQuery}
            onChange={handleSearch}
          />

          {foodData.length > 3 && (
            <ul>
              <div className="flex flex-wrap px-11 justify-center mt-10 mb-3 ">
                {foodData.map((food) => (
                  <div key={food.food.foodId} className="mb-20">
                    <div className=" animate-slide-down h-full overflow-hidden shadow-lg mx-4 w-52 rounded-lg border-2 border-gray-500 hover:bg-stone-800 hover:text-sky-400 backdrop-brightness-50 bg-white/30 ">
                      <img
                        className="w-full"
                        src={food.food.image}
                        alt={food.food.image}
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {food.food.label}
                        </div>
                        <p className=" text-base ">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          Calories : {food.food.nutrients.ENERC_KCAL}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          Category: {food.food.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
