import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-[50%] mx-auto my-4 bg-gray-50 shadow-md rounded-lg p-4 active:bg-gray-200">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-slate-700">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🢃</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
