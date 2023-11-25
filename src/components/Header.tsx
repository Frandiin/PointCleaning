import { IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import type { Dispatch, SetStateAction, FC } from "react";
interface HeaderProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({ setShow, show }) => {
  const lastPath =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  console.log(lastPath);

  return (
    <div className="bg-white justify-between  w-full md:flex h-[70px] md:min-h-[120px] fixed z-[1000]  ">
      <div className="md:hidden">
        <IconButton
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <Close
              sx={{ color: "#1479bc", fontSize: "45px", marginTop: "5px" }}
            />
          ) : (
            <Menu
              sx={{ color: "#1479bc", fontSize: "45px", marginTop: "5px" }}
            />
          )}
        </IconButton>
      </div>

      <div className="md:flex hidden mx-[2%]">
        <div className="md:w-[130px]">
          <img src="/logo.svg" width={"100%"} className="mt-[-10px]" />
        </div>
      </div>
      <div className="md:flex gap-20 text-2xl items-center  hidden md:justify-center w-full">
        <a
          href="/"
          className={`cursor-pointer  text-[#1A77BA] hover:underline underline-offset-2 ${
            lastPath === "" ? "underline" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`cursor-pointer  text-[#1A77BA] hover:underline underline-offset-2 ${
            lastPath === "about" ? "underline" : ""
          }`}
        >
          About
        </a>
      </div>
    </div>
  );
};
