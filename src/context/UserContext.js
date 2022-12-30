import { createContext, useState } from "react";

export const UserContext = createContext({
  // First we create the actual context object with default values
  // This does not get used but we want to always follow convention
  // We want these to be the same shape as we expect
  // We add the function for the toggle and the object for the two users
  toggleCoffeeDrinker: null,
  user: {
    name: null,
    favoriteRoast: null, // We can also set a default here if we like
  },
});

// Here we have our two objects for our two users
// There name is a property with a key value pair
const gil = {
  name: "Gilberto",
  favoriteRoast: "Dark",
};

const leo = {
  name: "Leonardo",
  favoriteRoast: "Medium",
};

// This is the UserContextProvider
// It is a custom component that keeps track of state
// The state is that of the current user and toggled preference
// This is the pattern that is seen for signed in users or customized themes
export function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  const toggleCoffeeDrinker = () => {
    if (user === gil) {
      setUser(leo);
    } else {
      setUser(gil);
    }
  };

  // The return will provide the current user as well as the toggled preference
  // It wil then provide it to all of its children which comes from props on the exported function
  return (
    <UserContext.Provider
      value={{
        user,
        toggleCoffeeDrinker,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
