import React from "react";

function PrintHeader({ title }) {
  return (
    <div className="row mt-2">
      <div className="col-12 ps-2 pe-2">
        <h4 className="mb-1 ats-section-title">{title}</h4>
      </div>
    </div>
  );
}

export default PrintHeader;
