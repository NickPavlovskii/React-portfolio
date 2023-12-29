import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Pagination,
} from "@mui/material";
import "./portfolio.css";
import Project from "./ProjectData";

function Portfolio() {
  const { projectItems } = Project;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleChange = (_, newValue) => {
    setSelectedTabIndex(newValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1); 
  }, [selectedTabIndex]);

  const filteredProjects = projectItems.filter((project) => {
    const isMatchingFramework =
      selectedTabIndex === 0 ||
      (project.framework &&
        project.framework
          .toLowerCase()
          .includes(
            selectedTabIndex === 1
              ? "react"
              : selectedTabIndex === 2
              ? "html/css/js"
              : "vue"
          ));
    return isMatchingFramework;
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section id="portfolio" className="container">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <Paper square className="tabs">
          <Tabs
            value={selectedTabIndex}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab label="All" />
            <Tab label="React" />
            <Tab label="HTML/CSS/JS" />
            <Tab label="Vue" />
          </Tabs>
        </Paper>
        <div>
          <div className="container portfolio_container">
            {currentProjects.map((project) => (
              <Card key={project.id} className="Card_content">
                <CardContent>
                  <div className="portfolio_item_img">
                    <img src={project.img} alt="" className="Card_img" />
                  </div>
                  <h2 className="wb">{project.name}</h2>
                  <h4 style={{ color: 'var(--color-light)' }}>{project.framework}</h4>
                </CardContent>
                <CardActions>
                  <Button
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn about_button bt"
                  >
                    GitHub
                  </Button>
                  <Button
                    href={project.Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn about_button"
                    style={{
                      display: project.Demo ? "inline-block" : "none",
                    }}
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
          {Math.ceil(filteredProjects.length / projectsPerPage) > 1 && (
          <div className="pagination_card">
        
            <Pagination
              color="secondary"
              variant="outlined"
              count={Math.ceil(filteredProjects.length / projectsPerPage)}
              page={currentPage}
              onChange={(_, page) => paginate(page)}
            />
           
          </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
