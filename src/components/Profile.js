import WelcomeBanner from "./WelcomeBanner";
import CoffeePreference from "./CoffeePreference";

export default function Profile() {
// The profile gets the user from the UserContext
// This is an intemediary component it doesn't need to use to context at all
// The whole purpose of this is to return both components as needed
  return (
    <div className="App">
      <WelcomeBanner  />
      <CoffeePreference />
    </div>
  );
}
