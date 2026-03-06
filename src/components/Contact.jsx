import React from "react";
import { Button } from "react-bootstrap";

const calendlyUrl = "https://calendly.com/kaylee-mehlhorn/30min";
const contactEmail = "mehlhorn17@gmail.com";

function Contact() {
  return (
    <div className="container py-4">
      <h3>Contact Kaylee</h3>
      <p className="mb-3">Choose whichever is easier:</p>

      <div className="d-flex gap-3 flex-wrap">
        <a href={calendlyUrl} target="_blank" rel="noreferrer">
          <Button variant="primary" size="lg">
            Book 30-Min Call
          </Button>
        </a>

        <a href={`mailto:${contactEmail}`}>
          <Button variant="outline-primary" size="lg">
            Email Kaylee
          </Button>
        </a>
      </div>

      <p className="mt-3 mb-0 text-muted">
        Calendly link: {calendlyUrl}
      </p>
    </div>
  );
}

export default Contact;
