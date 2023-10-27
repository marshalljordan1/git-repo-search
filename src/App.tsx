/**
 * Import the SearchPage component from the pages directory.
 *
 * @remarks
 * The SearchPage component represents the main page of the application.
 */
import SearchPage from "./pages/SearchPage";

/**
 * Defines the root component of the application.
 *
 * @returns {JSX.Element} The JSX element representing the application.
 */
function App() {
  // Render the SearchPage component.
  return <SearchPage />;
}

/**
 * Export the App component as the application's entry point.
 */
export default App;
