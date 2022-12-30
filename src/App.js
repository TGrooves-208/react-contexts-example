import Profile from './components/Profile';
import { useContext } from 'react';
import { UserContextProvider, UserContext } from './context/UserContext';
import './App.css';

export default function App() {
  // 1. Inside our parent component we return our UserContextProvider 
  // 2. - This provides the global state to all children that need it
  // 3. - AppInternal is the first of the children
  // 4. - AppInternal is going to use the state to grab the state of the toggle out of the context
  // 5. - AppInternal is going to pass that function into the click handler
  // 6. -AppInternal is also going to return the profile
  // 7. We create a helper function to allow us to useContext correctly
  return (
    <main className="App">
      <UserContextProvider >
      <AppInternal />
      </UserContextProvider>
    </main>
  );
}

// We will need to create a helper function for our context
// This is just a component to hold the children so we can use our context
function AppInternal() {
  const { toggleCoffeeDrinker } = useContext(UserContext);
  return (
    <>
    <Profile />
    <button onClick={toggleCoffeeDrinker}>Toggle Coffee Drinker</button>
    </>
  )
}
