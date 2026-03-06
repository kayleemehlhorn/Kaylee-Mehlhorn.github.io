import React from "react";
import ContactButton from "./ContactButton";

const uplandLogDemoUrl = "https://uplandlog.netlify.app/";
const githubUrl = "https://github.com/kayleemehlhorn";

function Resume() {
  return (
    <div>
      <ContactButton showDownloadPdf />
      <div className="container">
        <div className="row mb-4 mt-4">
          <div className="col-12">
            <div className="border rounded p-3 bg-light">
              <h5 className="mb-2">Recruiter Snapshot</h5>
              <p className="mb-1">
                <span className="fw-bold">Target Role:</span> Entry-Level Software Engineer
                (Full-Stack)
              </p>
              <p className="mb-1">
                <span className="fw-bold">Core Stack:</span> Java, Spring Boot, Spring Security,
                Angular, REST APIs, SQL, Docker
              </p>
              <p className="mb-1">
                <span className="fw-bold">Featured Project:</span>{" "}
                <a href={uplandLogDemoUrl} className="link" target="_blank" rel="noopener noreferrer">
                  UplandLog Live Demo
                </a>
              </p>
              <p className="mb-0 text-muted">
                First login can take about a minute while Render cold-starts the backend.
              </p>
              <div className="d-flex gap-2 flex-wrap mt-3">
                <a
                  href={uplandLogDemoUrl}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View UplandLog Demo
                </a>
                <a
                  href={githubUrl}
                  className="btn btn-outline-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12">
            <hr />
            <h3 className="text-center">
              Kaylee Mehlhorn <small className="text-muted">Software Engineer</small>
            </h3>
            <hr />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <strong>contact</strong>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-12">
            <p className="mb-1">
              <a href="mailto:mehlhorn17@gmail.com" className="link">mehlhorn17@gmail.com</a> | (651)
              341-2359 | Bigfork, MT
            </p>
            <p className="mb-1">
              <span className="fw-bold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/kaylee-mehlhorn-4aa17595/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/kaylee-mehlhorn-4aa17595
              </a>
            </p>
            <p className="mb-0">
              <span className="fw-bold">GitHub:</span>{" "}
              <a
                href="https://github.com/kayleemehlhorn"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/kayleemehlhorn
              </a>
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <strong>summary</strong>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-12">
            <p>
              Software Engineering graduate (March 2026) with hands-on experience building and
              deploying full-stack applications using Java/Spring Boot and Angular. Strong
              foundation in REST APIs, authentication/security, databases, and cloud deployment.
              Seeking an entry-level or internship role (remote preferred) where I can contribute
              to building reliable, user-focused software.
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <b>technical skills</b>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-12">
            <ul className="ul-dashes ul-padding-gentle mb-0">
              <li>
                <span className="fw-bold">Languages:</span> Java, TypeScript, Python, SQL, HTML,
                CSS
              </li>
              <li>
                <span className="fw-bold">Frameworks/Libraries:</span> Spring Boot, Spring
                Security, Angular, React
              </li>
              <li>
                <span className="fw-bold">Tools:</span> Git, GitHub, GitLab, Maven, Docker,
                Postman
              </li>
              <li>
                <span className="fw-bold">Databases:</span> MySQL, PostgreSQL, H2 (file-based)
              </li>
              <li>
                <span className="fw-bold">Concepts:</span> REST APIs, CRUD,
                Authentication/Authorization, BCrypt, CORS, MVC, Cloud Deployment, Unit Testing
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <b>projects</b>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
            <p className="mb-1 fw-bold">
              UplandLog - Full-Stack Web Application
              <span className="fw-normal"> | Java, Spring Boot, Spring Security, Angular, Docker,
              Render, Netlify, H2</span>
            </p>
            <ul className="ul-dashes ul-padding-gentle">
              <li>
                Built and deployed a full-stack web app for upland hunters to log trips (location,
                dates, weather, harvest counts, dog performance) and review trip history over time.
              </li>
              <li>
                Demo:{" "}
                <a href={uplandLogDemoUrl} className="link" target="_blank" rel="noopener noreferrer">
                  uplandlog.netlify.app
                </a>
              </li>
              <li>
                Developed RESTful backend services in Spring Boot; secured endpoints with HTTP Basic
                authentication and BCrypt password hashing.
              </li>
              <li>
                Containerized backend with Docker and deployed to Render; deployed Angular frontend
                to Netlify and configured CORS for secure cross-domain communication.
              </li>
              <li>
                Implemented CRUD workflows for trip data with persistent file-based H2 storage and
                clear user feedback for validation and errors.
              </li>
              <li>Note: first sign-in may take about a minute due to Render cold start.</li>
            </ul>

            <p className="mb-1 fw-bold">
              TravelTracker - Mobile Application (Course Project)
              <span className="fw-normal"> | Android (Java)</span>
            </p>
            <ul className="ul-dashes ul-padding-gentle">
              <li>
                Developed a mobile travel tracking application to manage trips and related activities
                (vacations and excursions).
              </li>
              <li>
                Implemented data persistence with local storage and validation rules to prevent
                invalid deletion scenarios (blocking removal when related records exist).
              </li>
              <li>
                Created user flows for adding, editing, viewing, and deleting items with clear UI
                feedback and error handling.
              </li>
            </ul>

            <p className="mb-1 fw-bold">
              Backend Programming Project (Course Project)
              <span className="fw-normal"> | Java</span>
            </p>
            <ul className="ul-dashes ul-padding-gentle mb-0">
              <li>
                Implemented backend logic and data operations with focus on object-oriented design,
                input validation, and testability.
              </li>
              <li>
                Practiced clean code structure, modular design, and debugging through iterative
                development.
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
            <i>Selected Work</i>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <strong>education</strong>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
            <a
              href="https://www.wgu.edu/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Western Governors University (WGU)
            </a>
            <br />
            Bachelor of Science, Software Engineering
            <br />
            Graduated March 2026
            <br />
            <br />
            <span className="fw-bold">Colorado Mountain College</span>
            <br />
            Associate of Arts
            <br />
            <br />
            <span className="fw-bold">University of Minnesota Duluth</span>
            <br />
            Focus in cultural entrepreneuring
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
            <i>2012 - 2026</i>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <b>certifications</b>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
            <p className="mb-1">WGU Certificate: Back-End Developer (Issued Jan 2026)</p>
            <p className="mb-1">CompTIA Project+ Certification (Issued Sep 2025)</p>
            <p className="mb-1">ITIL 4 (Issued Feb 2025)</p>
            <p className="mb-1">AWS Certified Cloud Practitioner (Issued Jan 2025, expires Jan 2028)</p>
            <p className="mb-0">WGU Certificate: Front-End Developer (Issued May 2024)</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
            <i>2024 - 2026</i>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-12">
            <b>experience</b>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
            <p className="mb-1 fw-bold">Gardener / Landscaping (Various Clients)</p>
            <ul className="ul-dashes ul-padding-gentle">
              <li>
                Delivered consistent results independently by managing schedules, prioritizing tasks,
                and meeting deadlines.
              </li>
              <li>
                Communicated with clients to confirm requirements, adjust plans, and ensure quality
                outcomes.
              </li>
            </ul>

            <p className="mb-1 fw-bold">Ski Industry - Rental / Ski Technician (Multiple Roles)</p>
            <ul className="ul-dashes ul-padding-gentle mb-0">
              <li>
                Collaborated with teams to deliver reliable service during peak demand while
                maintaining safety standards.
              </li>
              <li>
                Troubleshot equipment fit and performance issues in high-volume customer environments.
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
            <i>2011 - Current</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
