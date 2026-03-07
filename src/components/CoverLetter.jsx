import React, { useState } from "react";
import ContactButton from "./ContactButton";

const uplandLogDemoUrl = "https://uplandlog.netlify.app/";

function CoverLetter() {
  const [isProfileImageMissing, setIsProfileImageMissing] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          {isProfileImageMissing ? (
            <div
              className="img-fluid img-thumbnail d-flex align-items-center justify-content-center bg-light"
              style={{ minHeight: "520px" }}
            >
              <p className="text-muted mb-0 px-3 text-center">
                Add your photo at <code>/public/ProfilePic.jpg</code>.
              </p>
            </div>
          ) : (
            <img
              src="/ProfilePic.jpg"
              className="img-fluid img-thumbnail"
              alt="Kaylee Mehlhorn"
              onError={() => setIsProfileImageMissing(true)}
            />
          )}
          <div className="row">
            <ContactButton showDownloadPdf downloadLabel="Download Resume" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <hr />
          <div className="row">
            <h3>
              Kaylee Mehlhorn{" "}
              <small className="text-muted">Software Engineering Graduate (2026)</small>
            </h3>
          </div>
          <hr />
          <div className="row mt-3">
            <h3>Education</h3>
            <p>
              Kaylee Mehlhorn graduated from Western Governors University
              (Salt Lake City) with a bachelor&apos;s degree in Software
              Engineering and completed the WGU Front-End Developer and Back-End
              Developer certificates, along with AWS Certified Cloud
              Practitioner, ITIL 4, and CompTIA Project+ certifications. Prior
              to WGU, she completed her associate degree at Colorado Mountain
              College and attended the University of Minnesota Duluth with a
              focus in cultural entrepreneuring.
            </p>
          </div>
          <div className="row">
            <h3>Projects</h3>
            <p>
              I focus on project-based experience that demonstrates practical
              full-stack delivery, secure backend development, and clean,
              user-focused workflows.
            </p>
            <ul>
              <li>
                <span className="fw-bold">UplandLog (Full-Stack Web Application):</span>{" "}
                Built and deployed with Java, Spring Boot, Spring Security, and
                Angular. Includes REST APIs, authentication/authorization,
                CRUD workflows, Docker deployment, and cloud hosting.
              </li>
              <li>
                <span className="fw-bold">TravelTracker (Course Project):</span>{" "}
                Android application in Java with local persistence, validation
                logic, and complete add/edit/view/delete user flows.
              </li>
              <li>
                <span className="fw-bold">Backend Programming Project (Course Project):</span>{" "}
                Java backend implementation focused on object-oriented design,
                input validation, testability, and iterative debugging.
              </li>
            </ul>
            <p className="mb-1">
              <span className="fw-bold">Live demo:</span>{" "}
              <a
                href={uplandLogDemoUrl}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                uplandlog.netlify.app
              </a>
            </p>
            <p className="text-muted mb-0">
              Note: first login can take about a minute while the Render backend
              cold-starts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverLetter;
