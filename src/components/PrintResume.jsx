import React, { useEffect } from "react";
import PrintNavbar from "./PrintNavbar";
import PrintContactInfo from "./PrintContactInfo";
import PrintHeader from "./PrintHeader";
import PrintEmployment from "./PrintEmployment";

const PrintResume = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const isPdfMode = searchParams.get("mode") === "pdf";
    const previousTitle = document.title;
    document.title = "Kaylee Mehlhorn - Resume";

    if (isPdfMode) {
      return () => {
        document.title = previousTitle;
      };
    }

    const printTimeout = window.setTimeout(() => {
      window.print();
    }, 0);

    return () => {
      window.clearTimeout(printTimeout);
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="container-fluid print-resume-page">
      <PrintNavbar />
      <PrintContactInfo
        contacts={[
          "mehlhorn17@gmail.com",
          "(651) 341-2359",
          "Bigfork, MT",
          "linkedin.com/in/kaylee-mehlhorn-4aa17595",
          "github.com/kayleemehlhorn",
        ]}
      />

      <div className="row">
        <div className="col-12">
          <p className="mt-4 ps-1 pe-2">
            Software Engineering graduate (March 2026) with hands-on experience building and
            deploying full-stack applications using Java/Spring Boot and Angular. Strong
            foundation in REST APIs, authentication/security, databases, and cloud deployment.
            Seeking an entry-level or internship role (remote preferred) where I can contribute to
            building reliable, user-focused software.
          </p>
        </div>
      </div>

      <PrintHeader title="Technical Skills" />
      <div className="row">
        <div className="col-12">
          <ul className="ps-4 pe-2 mb-2">
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

      <PrintHeader title="Projects" />
      <PrintEmployment
        title="UplandLog"
        company="Full-Stack Web Application"
        employmentTimeSpan="Java | Spring Boot | Angular"
        paragraphText="Built and deployed a full-stack web app for upland hunters to log trips and review trip history over time."
        bulletPoints={[
          "Developed RESTful backend services in Spring Boot and secured endpoints with HTTP Basic authentication and BCrypt password hashing.",
          "Containerized backend with Docker and deployed to Render; deployed Angular frontend to Netlify and configured CORS.",
          "Implemented CRUD workflows for trip data with persistent file-based H2 storage and clear user feedback for validation and errors.",
        ]}
      />
      <PrintEmployment
        title="TravelTracker"
        company="Mobile Application (Course Project)"
        employmentTimeSpan="Android (Java)"
        paragraphText="Developed a mobile travel tracking application to manage trips and related activities."
        bulletPoints={[
          "Implemented data persistence with local storage and validation rules to prevent invalid deletion scenarios.",
          "Created user flows for adding, editing, viewing, and deleting items with clear UI feedback and error handling.",
        ]}
      />
      <PrintEmployment
        title="Backend Programming Project"
        company="Course Project"
        employmentTimeSpan="Java"
        paragraphText="Implemented backend logic and data operations with focus on object-oriented design, input validation, and testability."
        bulletPoints={[
          "Practiced clean code structure, modular design, and debugging through iterative development.",
        ]}
      />

      <PrintHeader title="Education" />
      <div className="row">
        <div className="col-12">
          <p className="ps-1 pe-2 mb-1">
            <span className="fw-bold">Western Governors University (WGU)</span> - Bachelor of
            Science, Software Engineering
          </p>
          <p className="ps-1 pe-2">Graduated March 2026</p>
        </div>
      </div>

      <PrintHeader title="Certifications" />
      <div className="row">
        <div className="col-12">
          <ul className="ps-4 pe-2 mb-2">
            <li>WGU Certificate: Back-End Developer (Issued Jan 2026)</li>
            <li>CompTIA Project+ Certification (Issued Sep 2025)</li>
            <li>ITIL 4 (Issued Feb 2025)</li>
            <li>AWS Certified Cloud Practitioner (Issued Jan 2025, expires Jan 2028)</li>
            <li>WGU Certificate: Front-End Developer (Issued May 2024)</li>
          </ul>
        </div>
      </div>

      <PrintHeader title="Experience" />
      <PrintEmployment
        title="Gardener / Landscaping"
        company="Various Clients"
        employmentTimeSpan="2012 - Current"
        paragraphText="Delivered consistent results independently by managing schedules, prioritizing tasks, and meeting deadlines."
        bulletPoints={[
          "Communicated with clients to confirm requirements, adjust plans, and ensure quality outcomes.",
        ]}
      />
      <PrintEmployment
        title="Ski Industry - Rental / Ski Technician"
        company="Multiple Roles"
        employmentTimeSpan="2011 - 2023"
        paragraphText="Collaborated with teams to deliver reliable service during peak demand while maintaining safety standards."
        bulletPoints={[
          "Troubleshot equipment fit and performance issues in high-volume customer environments.",
        ]}
      />
    </div>
  );
};

export default PrintResume;
