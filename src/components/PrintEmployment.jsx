import React from "react";

const PrintEmployment = ({
  title,
  company,
  employmentTimeSpan,
  paragraphText,
  bulletPoints,
}) => {
  return (
    <>
      <div className="row mt-1">
        <div className="col-12 ps-2 pe-2">
          <h6 className="fw-bold mb-1">
            {title} | {company}
          </h6>
          <p className="mb-1">
            <span className="fw-bold">Details:</span> {employmentTimeSpan}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="ps-2 pe-2 mb-1">{paragraphText}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="ps-4 pe-2 mb-2">
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PrintEmployment;
