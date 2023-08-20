import { useContext } from "react";
import { ListContext } from "./ListContext";
import { ThemeContext } from "./ThemeContext";

function CardDetails() {
  const { selectedItem, setSelectItems, items } = useContext(ListContext);
  const { theme } = useContext(ThemeContext);

  const currentIndex = items.findIndex((x) => x.id === selectedItem.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  function handlePrev() {
    setSelectItems(items[currentIndex - 1]);
  }
  function handleNext() {
    setSelectItems(items[currentIndex + 1]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className={`card bg-${theme === "dark" ? "light" : "dark"}`}>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <div className="card-body">
              <h5 className={`card-title text-${theme}`}>
                {selectedItem.title}
              </h5>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-4">
                  {hasPrev ? (
                    <button className="btn btn-primary" onClick={handlePrev}>
                      <i class="bi bi-arrow-left-short"></i>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectItems(null)}
                  >
                    Back
                  </button>
                </div>
                <div className="col-4">
                  {hasNext ? (
                    <button className="btn btn-primary" onClick={handleNext}>
                      <i class="bi bi-arrow-right-short"></i>
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default CardDetails;
