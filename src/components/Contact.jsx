import React from "react";
import { InlineWidget } from "react-calendly";

const calendlyUrl = "https://calendly.com/kaylee-mehlhorn/30min?hide_gdpr_banner=1";

function Contact() {
  return (
    <div className="container py-4">
      <h3>Contact Kaylee</h3>
      <p className="mb-2">Book a meeting directly on Calendly.</p>
      <p className="mb-3 text-muted">
        If your browser blocks the embedded calendar, open it directly:{" "}
        <a href={calendlyUrl} className="link" target="_blank" rel="noreferrer">
          {calendlyUrl}
        </a>
      </p>

      <InlineWidget url={calendlyUrl} styles={{ height: "760px" }} />
    </div>
  );
}

export default Contact;
