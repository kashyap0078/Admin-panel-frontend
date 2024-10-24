import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/appRouter";

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
