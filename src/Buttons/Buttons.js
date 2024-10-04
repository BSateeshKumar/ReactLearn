import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Buttons = () => {
  return (
    <div>
      <RoundedButton />
      <SquareButton />
      <FloatingButton />
      <IconTextButton />
      <RaisedButton />
      <TexturedButton />
      <GradientButton />
      <GhostButton />
      <OutlinedButton />
      <CircularIconButton />
      <EllipticalButton />
      <RectangularButton />
      <CircularButton />
    </div>
  );
};

export default Buttons;

export function RoundedButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#4CAF50", // Button color
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "50px", // Fully rounded corners
        textTransform: "none", // Disable uppercase
      }}
    >
      Rounded Button
    </Button>
  );
}

export function SquareButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#9C27B0",
        color: "#fff",
        width: "100px",
        height: "100px",
        borderRadius: "5px", // Square with small rounded edges
        "&:hover": {
          backgroundColor: "#7B1FA2",
        },
      }}
    >
      Square
    </Button>
  );
}

export function FloatingButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#009688",
        color: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "50%", // Circular shape
        position: "fixed", // Floating at the bottom-right
        bottom: "20px",
        right: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Floating shadow
        "&:hover": {
          backgroundColor: "#00796B",
        },
      }}
    >
      +
    </Button>
  );
}

export function IconTextButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#FF4081",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "30px", // Fully rounded corners
        "&:hover": {
          backgroundColor: "#F50057",
        },
      }}
      startIcon={<AddIcon />} // Icon on the left side
    >
      Add New
    </Button>
  );
}

export function RaisedButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#673AB7", // Button color
        color: "#fff",
        padding: "12px 28px",
        borderRadius: "12px", // Rounded corners
        boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.2)", // Higher shadow for raised effect
        "&:hover": {
          backgroundColor: "#5E35B1",
          boxShadow: "0px 12px 15px rgba(0, 0, 0, 0.3)", // Deeper shadow on hover
        },
      }}
    >
      Raised Button
    </Button>
  );
}

export function TexturedButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#FFC107", // Base color
        color: "#000", // Text color
        padding: "10px 20px",
        borderRadius: "15px", // Rounded corners
        backgroundImage:
          "url(https://www.transparenttextures.com/patterns/paper-fibers.png)", // Adding a texture
        backgroundSize: "cover", // Covering the whole button
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
        "&:hover": {
          backgroundColor: "#FFC107",
          transform: "scale(1.02)", // Slight scale effect on hover
        },
      }}
    >
      Textured Button
    </Button>
  );
}

export function GradientButton() {
  return (
    <Button
      sx={{
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
        color: "#fff",
        padding: "10px 30px",
        borderRadius: "25px", // Fully rounded corners
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Button shadow
        "&:hover": {
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.3)", // Larger shadow on hover
          transform: "scale(1.05)", // Slight scale effect on hover
        },
        transition: "0.3s ease-in-out", // Smooth transition
      }}
    >
      Gradient Button
    </Button>
  );
}

export function GhostButton() {
  return (
    <Button
      sx={{
        backgroundColor: "transparent", // Transparent background
        color: "#FF5722", // Text color
        border: "2px solid #FF5722", // Border color
        padding: "10px 25px",
        borderRadius: "8px", // Rounded corners
        "&:hover": {
          backgroundColor: "#FF572210", // Slight transparent background on hover
        },
      }}
    >
      Ghost Button
    </Button>
  );
}

export function OutlinedButton() {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#4CAF50", // Text color
        borderColor: "#4CAF50", // Border color
        borderWidth: "2px", // Border thickness
        padding: "10px 20px",
        borderRadius: "12px", // Slightly rounded corners
        "&:hover": {
          backgroundColor: "#4CAF5033", // Transparent green on hover
        },
      }}
    >
      Outlined Button
    </Button>
  );
}

export function CircularIconButton() {
  return (
    <IconButton
      sx={{
        backgroundColor: "#F44336",
        color: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "50%", // Circular shape
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export function EllipticalButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#FFEB3B",
        color: "#000",
        padding: "10px 50px",
        borderRadius: "30px", // Elliptical shape
        textTransform: "none",
      }}
    >
      Elliptical Button
    </Button>
  );
}

export function RectangularButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#2196F3",
        color: "#fff",
        padding: "10px 40px",
        borderRadius: "0", // Sharp corners
        textTransform: "none",
      }}
    >
      Rectangular Button
    </Button>
  );
}

export function CircularButton() {
  return (
    <Button
      sx={{
        backgroundColor: "#FF5722",
        color: "#fff",
        width: "60px",
        height: "60px",
        borderRadius: "50%", // Circular shape
        textTransform: "none",
      }}
    >
      C
    </Button>
  );
}
