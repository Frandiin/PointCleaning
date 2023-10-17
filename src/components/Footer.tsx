import { Button, TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (email && message) {
      toast.success("Mensagem enviada!");
      setEmail("");
      setMessage("");
    } else {
      toast.error("Por favor, preencha todos os campos.");
    }
  };
  return (
    <div>
      <footer className="mt-10 md:grid md:grid-cols-3 text-center bg-[#1479bc] gap-3 p-3">
        <div className="flex flex-col gap-4 text-white items-start mx-2 p-4 mt-6">
          <a href="https://www.instagram.com/point.cleaning/" target="_blank">
            <InstagramIcon sx={{ color: "white" }} />
            Point Cleaning
          </a>
          <a href="mailto:pointcleaning@outlook.com" target="_blank">
            <EmailIcon sx={{ color: "white" }} />
            pointcleaning@outlook.com
          </a>
          <a href="/">
            <LocationOnIcon sx={{ color: "white" }} /> San Diego, Ca
          </a>
        </div>
        <div className=" mt-6">
          <h1 className="text-white">Contact</h1>
          <form
            action="https://api.staticforms.xyz/submit"
            method="post"
            className="flex flex-col gap-2"
          >
            <input
              type="hidden"
              name="accessKey"
              value="9fe64b40-5989-46e4-abca-5968030fee9b"
            ></input>
            <input
              type="hidden"
              name="redirectTo"
              value="http://localhost:5173/"
            />

            <TextField
              InputLabelProps={{
                style: { color: "white" }, // Cor do label
              }}
              InputProps={{
                style: {
                  borderColor: "white", // Cor da borda
                  color: "white",
                },
              }}
              label="Email"
              type="email"
              required
              name="email"
              variant="outlined"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              sx={{ color: "white" }}
            />
            <TextField
              InputLabelProps={{
                style: { color: "white" }, // Cor do label
              }}
              InputProps={{
                style: {
                  borderColor: "white", // Cor da borda
                  color: "white",
                },
              }}
              name="$message"
              label="Message"
              multiline
              minRows={3}
              maxRows={3}
              placeholder="message"
              required
            />
            <Button
              variant="contained"
              sx={{ color: "#1479bc" }}
              type="submit"
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </form>
        </div>
        <div className="flex flex-col text-white gap-3 items-center text-start uppercase p-4 mt-6">
          <ul>
            <h1 className="text-center text-[18px] text-white">Services</h1>
            <li>specialized cleaning</li>
            <li>season house</li>
            <li>office </li>
            <li>post construction</li>
            <li>residential</li>
            <li>move in - move out</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
