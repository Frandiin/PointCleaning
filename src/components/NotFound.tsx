import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#1479bc] text-[#dcdcdc]">
        <span className="text-[100px]">404</span>

        <h1 className="text-[50px] text-[#dcdcdc] text-center mb-5">
          Oops! Page not found.
        </h1>

        <p>Are you sure this is what you were looking for?</p>

        <p>
          Please wait a few moments and reload the page, or return to the page
          initial.
        </p>

        <div className="my-5">
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
      </div>
    </>
  );
};
