import React from "react";

const FilterComp = ({ setFilterCategory }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="filters isotope_filters text-center">
            <span className="filter_btn" onClick={() => setFilterCategory("")}>
              All
            </span>
            <span
              className="filter_btn"
              onClick={() => setFilterCategory("photography")}
            >
              Photography
            </span>
            <span
              className="filter_btn"
              onClick={() => setFilterCategory("retouching")}
            >
              Retouching
            </span>
            <span
              className="filter_btn"
              onClick={() => setFilterCategory("color grading")}
            >
              Color grading
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComp;
