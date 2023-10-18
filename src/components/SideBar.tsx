import { useState } from "react";
import { IconButton, Slide, Button } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export const SideBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? (
          <Close sx={{ color: "white", fontSize: "45px", marginTop: "5px" }} />
        ) : (
          <Menu sx={{ color: "white", fontSize: "45px", marginTop: "5px" }} />
        )}
      </IconButton>
      <Slide in={show} direction="right">
        <div className="fixed top-[70px] left-0 h-full w-full flex flex-col gap-3 bg-gray-50 z-[100] ">
          <div className="flex flex-col mx-auto w-[200px] mt-5 gap-5">
            <Button
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              Home
            </Button>

            <Button
              onClick={() => {
                navigate("/services");
                setShow(false);
              }}
            >
              Services
            </Button>
            <Button
              onClick={() => {
                navigate("/about");
                setShow(false);
              }}
            >
              About
            </Button>
          </div>
        </div>
      </Slide>
    </div>
  );
};
