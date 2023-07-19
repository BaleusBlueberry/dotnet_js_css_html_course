function Bootstrap() {
  return (
    <>
      <h1>More bootsrap demos</h1>
      <div className="container">
        <div className="row">
          <div className="col">Row 1 Col 1</div>
          <div className="col">Row 1 Col 2</div>
          <div className="col">Row 1 Col 3</div>
          <div className="col">Row 1 Col 4</div>
          <div className="col">Row 1 Col 5</div>
          <div className="col">Row 1 Col 6</div>
          <div className="col">Row 1 Col 7</div>
          <div className="col">Row 1 Col 8</div>
        </div>
        <div className="row">
          <div className="col col-md-3 col-sm-5">Row 2 Col 1</div>
          <div className="col col-md-3 col-sm-2">Row 2 Col 2</div>
          <div className="col col-md-2 col-sm-2">Row 2 Col 3</div>
        </div>
        <div className="row">
          <div className="col-2 offset-4">Row 2 Col 1</div>
          <div className="col-2">Row 2 Col 2</div>
          <div className="col-3">Row 2 Col 3</div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
