import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-slate-300 border-b-2 text-left flex justify-between items-center"
        >
          <div className="text-slate-700 py-2 font-semibold">
            <span>
              {item.card.info.name}- ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs text-slate-600 pt-2 pr-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="p-4">
            <div className="absolute">
              <button
                className="p-1 shadow-lg rounded-md mx-5 text-slate-200 bg-black"
                onClick={()=>handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-28 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
