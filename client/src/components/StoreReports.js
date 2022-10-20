import React from "react";

function StoreReports() {
  return (
    <div className="container">
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img
              src="./images/europe.jpg"
              className="card-img-top"
              alt="A Street in Europe"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Store 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                interdum odio in felis mattis feugiat. In rhoncus libero magna,
                ultricies condimentum tortor tempor sit amet.
              </p>
              <a href="#" className="btn btn-primary">
                Check out the chart
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img
              src="./images/london.jpg"
              className="card-img-top"
              alt="London"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Store 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                interdum odio in felis mattis feugiat. In rhoncus libero magna,
                ultricies condimentum tortor tempor sit amet.
              </p>
              <a href="#" className="btn btn-primary">
                Check out the chart
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img
              src="./images/new-york.jpg"
              className="card-img-top"
              alt="New York"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Store 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                interdum odio in felis mattis feugiat. In rhoncus libero magna,
                ultricies condimentum tortor tempor sit amet.
              </p>
              <a href="#" class="btn btn-primary">
                Check out the chart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreReports;
