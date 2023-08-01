import GalleryCard from "./GalleryCard";

function Bootstrap2() {
  const data = [
    { id: 200, title: "Title 1", description: "Description 1" },
    { id: 250, title: "Title 2", description: "Description 2" },
    { id: 280, title: "Title 3", description: "Description 3" },
    { id: 290, title: "Title 4", description: "Description 4" },
  ];
  return (
    <>
      <div className="container">
        <h1 className="m-5">My Doggie Site</h1>
        <div className="row">
          <div className="col-sm-4 col-md-8">
            <img
              src="https://picsum.photos/id/237/500/500"
              alt="This is a picture of my dog"
              className="img-fluid rounded-2"
            />

            <div className="col-sm-8 col-md-4">
              <h3>About my dog</h3>
              <p>
                Keelhaul loaded to the gunwalls hearties plunder Letter of
                Marque Brethren of the Coast long clothes chase knave gally.
                Schooner killick port gaff ahoy sloop mutiny nipperkin reef
                Barbary Coast. Deadlights coxswain yo-ho-ho draft salmagundi
                matey gunwalls black spot Blimey dance the hempen jig.
              </p>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "50%" }}>
                50%
              </div>
            </div>
            <h3>Foods my dog likes</h3>
            <ul>
              <li>Canned</li>
              <li>Sausage</li>
              <li>Bones</li>
              <li>Bonzo</li>
            </ul>
            <h3>Donate now</h3>
            <div className="row">
              <div className="col-sm-4">
                <strong>$99.99</strong>
              </div>
              <div className="col-sm-8">
                <button className="btn btn-primary float-end">
                  Donate now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className=" p-4 mb-5 mt-0 bg-black bg-gradient rounded">
              <h4 className="clolor ">Dog Tips of the the day</h4>
              <p className="mb-0 fst-italic">Dog is good</p>
            </div>
          </div>
        </div>
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Color</th>
                <th>wight</th>
                <th>Breed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>green</td>
                <td>60kg</td>
                <td>Husky</td>
              </tr>
              <tr>
                <td>Black</td>
                <td>50kg</td>
                <td>Dog</td>
              </tr>
              <tr>
                <td>Yello</td>
                <td>20kg</td>
                <td>chiwawa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>More stuff i like:</h2>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/200/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/240/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/137/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
          <div className="col-sm-6 col-md-3">
            <img
              src="https://picsum.photos/id/125/500/500"
              alt="..."
              className="img-fluid rounded-2"
            />
          </div>
        </div>
        <h2>More stuff i like</h2>

        <div className="row">
          {data.map((item) => (
            <div className="col-sm-6 col-md-3  mb-3">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bootstrap2;
