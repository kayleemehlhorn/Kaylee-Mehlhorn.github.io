import React from "react";

const PrintContactInfo = ({ contacts }) => {
  return (
    <div className="row">
      <div className="col-12 ps-1 pe-2 fs-6">
        {contacts.map((contact, index) => (
          <div key={index} className="fs-6">
            {contact}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintContactInfo;
