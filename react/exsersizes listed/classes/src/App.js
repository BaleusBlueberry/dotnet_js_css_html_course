import { ThemeProvider } from "./Components/ThemeContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <h1>My App</h1>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
