import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CoffeePreference() {
  // This component does get the user coffee preference out of the context
  // We destructure this and then great the user on the toggle
  const { user } = useContext(UserContext);

  return <p>Your favorite coffeee roast is {user.favoriteRoast}</p>;
}
