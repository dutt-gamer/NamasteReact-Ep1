import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // Define the async function to fetch the menu
    const fetchMenu = async () => {
      try {
        const response = await fetch(MENU_API + resID);
        const json = await response.json();
        setResInfo(json.data); // Set the response data to state
        console.log(json.data); // Optional: log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };

    fetchMenu();
  }, [resID]); // Only run the effect if `resID` changes

  return resInfo; // Return the restaurant info
};

export default useRestaurantMenu;
