import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#3694bf] text-[#dcdcdc]">
        <span className="text-[100px]">404</span>

        <h1 className="text-[50px] text-[#dcdcdc] text-center mb-5">
          Ops! Página não encontrada.
        </h1>

        <p>Tem certeza de que era isso que você estava procurando?</p>

        <p>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className="my-5">
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
      </div>
    </>
  );
};
