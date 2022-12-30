import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function WelcomeBanner() {
// This component does get the user out of the context
// We destructure this and then great the user on the toggle 
  const { user } = useContext(UserContext);

  return <h1>Hi {user.name} great to see you again</h1>;
}
