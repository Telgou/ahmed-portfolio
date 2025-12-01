import React from "react";
import { Typography } from "@material-ui/core";
import ahmed from "../../assets/images/ahmed.jpg"
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../CustomTimeline/CustomTimeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../CustomButton/CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import resumeData from "../../utils/resumeData";
import resumeDataFR from "../../utils/resumeData FR";
import "./Profile.css";

const CustomTimelineItem = ({ title, text, link, language }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent>
      {link ? (
        <Typography className={"timelineItem_text"}>
          <span>{title}: </span>{" "}
          <a href={link} target={"_blank"} rel={"noreferrer"}>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className={"timelineItem_text"}>
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

function Profile({ language }) {
  const resumeDataTranslated = language === "en" ? resumeData : resumeDataFR;
  return (
    <div className="profile container_shadow fixed">
      <div className="profile_name">
        <Typography className="name">{resumeDataTranslated.name}</Typography>
        <Typography className="title">{resumeDataTranslated.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={ahmed} alt="ahmed" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          {/*<CustomTimelineItem title={language == "en" ? "Birthday" : "Date de Naissance"} text={resumeDataTranslated.birthday} />*/}
          <a href={`mailto:${resumeDataTranslated.email}?subject="Working Purposes"}`}>
            <CustomTimelineItem title="Email" text={resumeDataTranslated.email} />
          </a>

          <CustomTimelineItem title={language == "en" ? "Address" : "Adresse"} text={resumeDataTranslated.address} />
          {/*<CustomTimelineItem title={language == "en" ? "Phone" : "Tél"} text={resumeDataTranslated.phone} />*/}
        </CustomTimeline>
        <div className={"button_container"}>
          <a href={language == "en" ? "https://drive.google.com/file/d/1ANgTHl9iMunDhKpaTrS3r546IbbDOKgU" : "https://drive.google.com/file/d/1ANgTHl9iMunDhKpaTrS3r546IbbDOKgU"} download={true}>
            <CustomButton text={language == "en" ? "Download CV" : "Télécharger CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
