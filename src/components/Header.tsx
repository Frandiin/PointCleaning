import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { SideBar } from "./SideBar";

export const Header = () => {
  return (
    <div>
      <div className="bg-[#1479bc] text-white justify-between fixed w-full md:flex h-[70px] md:min-h-[120px]">
        <div className="md:flex hidden">
          <div className="md:w-[130px]">
            <img src="/logo.png" width={"100%"} className="p-5" />
          </div>

          <div className="flex gap-4 text-2xl items-center ">
            <a
              href="/"
              className="cursor-pointer hover:border-b-4 hover:border-white "
            >
              Home
            </a>
            <a
              href="/about"
              className="cursor-pointer hover:border-b-4 hover:border-white "
            >
              About
            </a>

            <a
              href="/services"
              className="cursor-pointer hover:border-b-4 hover:border-white "
            >
              Service
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <SideBar />
        </div>
        <div className="md:flex justify-center items-center p-3 hidden">
          <Button variant="contained" color="primary">
            <a
              href="https://wa.link/bd66pl"
              target="_blank"
              className="text-[#1479bc]"
            >
              <PhoneIcon sx={{ color: "#1479bc" }} /> +1 (857) 263-1670
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
