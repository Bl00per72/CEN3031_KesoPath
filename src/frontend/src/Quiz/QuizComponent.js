import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import image from "./forest.gif";
import image2 from "./townImage.jpeg";
import image3 from "./cityImage.jpg";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import questions from "./QuizData";
import axios from "axios";

import UserContext from "../UserContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

//answer button (either A, B, C, or D)

//main component for quiz display. will include all images, buttons, and questions/answers. will update when a new answer is clicked, or will
//revert to a previous state if a back button is clicked.
export default function QuizComponent() {
  let navigate = useNavigate();
  // documentation for hooks/state variables: https://reactjs.org/docs/hooks-intro.html
  // documentation for useState: https://reactjs.org/docs/hooks-reference.html#usestate
  // documentation for useEffect: https://reactjs.org/docs/hooks-reference.html#useeffect
  // documentation for conditional rendering: https://reactjs.org/docs/conditional-rendering.html

  // state variable aka a hook
  const [stateVariable, setStateVariable] = useState(""); // useState is its default value on render

  // useEffect will run code if the the state variable changes
  useEffect(() => {
    if (stateVariable !== null) {
      // do something
    }
  }, [stateVariable]);

  // can also run code when the component mounts (on render)
  useEffect(() => {
    // do something
  }, []);

  // helper functions can also go here
  function helperFunction() {
    // do something
  }
  // different syntax same thing
  const helperFunction2 = () => {
    // do something
  };
  // example of updating state variable in a helper function
  function updateStateVariable() {
    const someValue = "hello";
    setStateVariable(someValue);
    // now stateVariable = "hello"
  }

  const { userData, setUserData } = React.useContext(UserContext);

  const [currentSlide, setCurrentSlide] = useState(0);

  //state component for the varoious possible answers
  const [isOneChecked, setIsOneChecked] = React.useState(false);
  const [boxOne, setBoxOne] = React.useState(false);
  const [boxTwo, setBoxTwo] = React.useState(false);
  const [boxThree, setBoxThree] = React.useState(false);
  const [boxFour, setBoxFour] = React.useState(false);
  const [boxFive, setBoxFive] = React.useState(false);
  const [checkedNum, setCheckedNum] = React.useState(0);

  const checkBoxStyle = {
    marginRight: "5%",
    marginLeft: "5%",
  };

  var images = { 0: image, 1: image2, 2: image3 };
  var Questions = {
    0: "how are you?",
    1: "how is everything?",
    2: "is this a question?",
  };
  var As = { 0: "well", 1: "okay", 2: "yes" };
  var Bs = { 0: "not well", 1: "not ok", 2: "no" };
  var Cs = { 0: "good", 1: "decent", 2: "possibly" };
  var Ds = { 0: "not good", 1: "not decent", 2: "perhaps" };

  //function for the list of buttons that contain the answers.

  function AnswerList(props) {
    return (
      <Container align="center">
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxOne}
          onChange={() => {
            setBoxOne(true);
            setBoxTwo(false);
            setBoxThree(false);
            setBoxFour(false);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(1);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxTwo}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(true);
            setBoxThree(false);
            setBoxFour(false);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(2);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxThree}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(false);
            setBoxThree(true);
            setBoxFour(false);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(3);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxFour}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(false);
            setBoxThree(false);
            setBoxFour(true);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(4);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxFive}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(false);
            setBoxThree(false);
            setBoxFour(false);
            setBoxFive(true);
            setIsOneChecked(true);
            setCheckedNum(5);
          }}
        />
      </Container>
    );
  }

  return (
    <Grid>
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          alignContent: "center",
          margin: "100px auto",
          border: "solid 1px ",
        }}
        elevation="20"
      >
        {/* .map conditonally render the image etc. */}
        <Container align="center">
          <img
            src={questions[currentSlide].picture}
            alt="Nature Image"
            height="500"
            width="889"
            style={{}}
          ></img>
        </Container>
        <Typography
          variant="h5"
          align="center"
          sx={{ paddingTop: "2%", paddingBottom: "5%" }}
        >
          {questions[currentSlide].Question}
        </Typography>

        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "68%",
          }}
          s
        >
          <Typography>Strongly Disagree </Typography>
          <Typography sx={{ marginRight: "2%" }}>Strongly Agree</Typography>
        </Container>

        <AnswerList />

        <Container
          align="center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "2px",
            paddingTop: "10px",
          }}
        >
          {/* <div style={{ position: "flex", justifyContent: "space-between" }}> */}
          <Button
            startIcon={<ArrowBackIcon />}
            // align="center"
            // style={{border: "solid"}}
            variant="contained"
            size="large"
            onClick={() => {
              if (currentSlide != 0) {
                setCurrentSlide(currentSlide - 1);
              }
            }}
            disabled={currentSlide == 0 ? true : false}
          >
            Back
          </Button>

          <Button
            endIcon={<ArrowForwardIcon />}
            //align="center"
            variant="contained"
            size="large"
            onClick={() => {
              setCurrentSlide(currentSlide + 1);
              if (currentSlide == 9) {
                navigate("/postquiz");
              }

              //TODO: save the selection of the current quiz question to the database
              // api call to save checkedNum to the database
              console.log("currentSlide: ", currentSlide);
              const answer = {
                email: userData.email,
                currentSlide,
                answer: checkedNum,
              };
              axios
                .post("http://localhost:4000/api/sendanswer", answer)
                .then((res) => {
                  console.log(res);
                });

              // update variable here
              setBoxOne(false);
              setBoxTwo(false);
              setBoxThree(false);
              setBoxFour(false);
              setBoxFive(false);
              setIsOneChecked(false);
            }}
            disabled={isOneChecked ? false : true}
          >
            Next
          </Button>
          {/* </div> */}
        </Container>
      </Paper>
    </Grid>
  );
}
