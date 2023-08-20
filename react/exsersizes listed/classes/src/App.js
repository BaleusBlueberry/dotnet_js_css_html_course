import { ThemeProvider } from "./Components/ThemeContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ListProvider } from "./Components/ListContext";
import Cards from "./Components/cards";
import MainWrapper from "./Components/MainWrapper";

function App() {
  return (
    <ThemeProvider>
      <ListProvider>
        <MainWrapper>
          <div className="container-fluid">
            <div className="row">
              <Header />
            </div>
            <div className="row">
              <Cards />
            </div>
            <div className="row">
              <Footer />
            </div>
          </div>
        </MainWrapper>
      </ListProvider>
    </ThemeProvider>
  );
}

export default App;
