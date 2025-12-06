import React, { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close"; // This one exists in v4
import resumeData from "../../utils/resumeData";
import resumeDataFR from "../../utils/resumeData FR";
import "./Portfolio.css";

function Portfolio({ language }) {
  const resumeDataTranslated = language === "en" ? resumeData : resumeDataFR;

  const [tabValue, setTabValue] = useState("All");

  // ← two states instead of one
  const [dialogOpen, setDialogOpen] = useState(false);        // boolean
  const [selectedProject, setSelectedProject] = useState(null); // project object or null

  const openProjectDialog = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const closeProjectDialog = () => {
    setDialogOpen(false);
    // optional: clear the project after the dialog closes (prevents flash of old content)
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(_, newValue) => setTabValue(newValue)}
        >
          <Tab label="All" value="All" className={tabValue === "All" ? "customTabs_item active" : "customTabs_item"} />

          {[...new Set(resumeDataTranslated.projects.map((p) => p.tag))].map((tag) => (
            <Tab
              key={tag}
              label={tag}
              value={tag}
              className={tabValue === tag ? "customTabs_item active" : "customTabs_item"}
            />
          ))}
        </Tabs>
      </Grid>

      {/* Projects Grid */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeDataTranslated.projects.map((project) => (
            (tabValue === "All" || tabValue === project.tag) && (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Grow in timeout={1000}>
                  <Card className="customCard" onClick={() => openProjectDialog(project)}>
                    <CardActionArea>
                      <CardMedia className="customCard_image" image={project.image} title={project.title} />
                      <CardContent>
                        <Typography variant="body2" className="customCard_title">
                          {project.title}
                        </Typography>
                        <Typography variant="caption" className="customCard_caption">
                          {project.caption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            )
          ))}
        </Grid>
      </Grid>

      {/* Project Dialog */}
      <Dialog
        open={dialogOpen}               // ← now a real boolean
        onClose={closeProjectDialog}
        className="projectDialog"
        fullWidth
        maxWidth="md"
      >
        {selectedProject && (
          <>
            <DialogTitle>
              {selectedProject.title}
              <IconButton aria-label="close" onClick={closeProjectDialog} style={{ position: "absolute", right: 8, top: 8 }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <img src={selectedProject.image} alt={selectedProject.title} className="projectDialog_image" />

            <DialogContent>
              <Typography className="projectDialog_description">
                {selectedProject.description}
              </Typography>
            </DialogContent>

            <DialogActions className="projectDialog_actions">
              {selectedProject?.links?.map((link, i) => {
                console.log(link);
                return (
                  <a key={i} href={link.link} target="_blank" rel="noreferrer" className="projectDialog_icon">
                    {link.icon && <link.icon fontSize="large" />}
                  </a>
                )
              })}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Grid>
  );
}

export default Portfolio;