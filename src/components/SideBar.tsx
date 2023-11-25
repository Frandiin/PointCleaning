import { FC } from "react";
import { Slide, Button } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

import { useNavigate } from "react-router-dom";

interface SideBarProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
export const SideBar: FC<SideBarProps> = ({ show, setShow }) => {
  const navigate = useNavigate();

  return (
    <Slide in={show} direction="right">
      <div className="fixed top-[70px] left-0 h-full w-full flex flex-col gap-3 bg-white z-[1000]">
        <div className="flex flex-col mx-auto w-[200px] mt-5 gap-5  ">
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
              navigate("/about");
              setShow(false);
            }}
          >
            About
          </Button>
        </div>
      </div>
    </Slide>
  );
};
