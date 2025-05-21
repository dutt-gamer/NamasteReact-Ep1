import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-slate-50 transition-transform shadow-md hover:scale-95">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-slate-700 py-4 text-xl">{name}</h3>
      <h5 className="font-semibold text-slate-600">{cuisines.join(", ")}</h5>
      <div className="flex items-center justify-between mt-5">
        <h6 className="bg-green-500 text-center rounded-md px-1 text-slate-700">
          {avgRating} stars
        </h6>
        <h6 className="text-slate-600">{costForTwo}</h6>
        <h6 className="text-slate-600">{sla?.slaString}</h6>
      </div>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
