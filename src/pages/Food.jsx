export default function Food({foodData}) {
  return (
    <>
      <div className="flex flex-wrap px-11 justify-center mt-10 mb-3 ">
        {foodData.length > 3 && (
          <>
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
                    <p className=" text-base ">Lorem ipsum dolor sit amet</p>
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
          </>
        )}
      </div>
    </>
  );
}
