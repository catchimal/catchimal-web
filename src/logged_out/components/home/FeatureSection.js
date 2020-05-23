import React from "react";
import PropTypes from "prop-types";
import {Grid, isWidthUp, Typography, withWidth} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FaceIcon from '@material-ui/icons/Face';
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import PetsIcon from '@material-ui/icons/Pets';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import EcoIcon from '@material-ui/icons/Eco';
import CameraRearIcon from '@material-ui/icons/CameraRear';

const iconSize = 30;

const features = [
    {
        color: "#00c853",
        headline: "Social Media",
        text:
            "Allows to see your friends registered animals, comment, and chat with them. Join your friends to explore the outside and the unknown.",
        icon: <MeassageIcon style={{fontSize: iconSize}}/>,
        mdDelay: "0",
        smDelay: "0"
    },
    {
        color: "#6200EA",
        headline: "Animal Album",
        text:
            "You would have an album for storing the animals you have taken photos of in your life.",
        icon: <PetsIcon style={{fontSize: iconSize}}/>,
        mdDelay: "200",
        smDelay: "200"
    },
    {
        color: "#0091EA",
        headline: "Photo Information",
        text:
            "Catchimal is using GCP services to automatically recognize your animal information. Furthermore, you will see where, when, and how the photography was taken.",
        icon: <CallToActionIcon style={{fontSize: iconSize}}/>,
        mdDelay: "400",
        smDelay: "0"
    },
    {
        color: "#d50000",
        headline: "Animal Learning",
        text:
            "See information and curious facts about the animals around you, chatting with AI chatbot. You would learn how to protect our nature and be sustainable.",
        icon: <ComputerIcon style={{fontSize: iconSize}}/>,
        mdDelay: "0",
        smDelay: "200"
    },
    {
        color: "#DD2C00",
        headline: "Gamifier",
        text:
            "It would be like a game, like a real Pokedex. Obtain points and rewards for taking pictures of exotic animals.",
        icon: <BarChartIcon style={{fontSize: iconSize}}/>,
        mdDelay: "200",
        smDelay: "0"
    },
    {
        color: "#64DD17",
        headline: "Shared Environment",
        text:
            "Share albums between friends, showing the things around you.",
        icon: <EcoIcon style={{fontSize: iconSize}}/>,
        mdDelay: "400",
        smDelay: "200"
    },
    {
        color: "#304FFE",
        headline: "User Account",
        text:
            "See progress, status, points, challenges, rewards, and more!",
        icon: <FaceIcon style={{fontSize: iconSize}}/>,
        mdDelay: "0",
        smDelay: "0"
    },
    {
        color: "#00B8D4",
        headline: "Interact with your Animals on AR",
        text:
            "Win points in a different way when there aren't more animals near. Play, feed or combat with your animals.",
        icon: <CameraRearIcon style={{fontSize: iconSize}}/>,
        mdDelay: "400",
        smDelay: "0"
    }
];

function FeatureSection(props) {
    const {width} = props;
    return (
        <div style={{backgroundColor: "#FFFFFF"}}>
            <div className="container-fluid lg-p-top">
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Features
                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width)}>
                        {features.map(element => (
                            <Grid
                                item
                                xs={12}
                                md={3}
                                data-aos="zoom-in-up"
                                data-aos-delay={
                                    isWidthUp("md", width) ? element.mdDelay : element.smDelay
                                }
                                key={element.headline}
                            >
                                <FeatureCard
                                    Icon={element.icon}
                                    color={element.color}
                                    headline={element.headline}
                                    text={element.text}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

FeatureSection.propTypes = {
    width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
