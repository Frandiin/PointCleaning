import { FC } from "react";
import { Modal } from "./Modal";
import { useModal } from "../hooks/use-modal";
import PhoneIcon from "@mui/icons-material/Phone";

import { Button } from "@mui/material";

interface Props {
  title?: string;
  description: string;
  link: string;
  buttonTitle?: string;
}
export const ServicesCard: FC<Props> = ({
  title,
  description,
  link,
  buttonTitle,
}) => {
  const { openModal, closeModal, isOpen } = useModal();
  return (
    <div>
      <Modal
        closeModal={closeModal}
        openModal={openModal}
        isOpen={isOpen}
        size="full"
        openModalElement={
          <div
            className="bg-[#E1F2FF] px-10 py-10 cursor-pointer my-2 flex justify-start items-end rounded-lg font-bold "
            onClick={openModal}
          >
            {buttonTitle}
          </div>
        }
      >
        <div className="p-5">
          <h1 className="text-center">{title}</h1>
          <p className="text-justify">{description}</p>
          <div className="flex justify-center my-3  gap-3">
            <Button
              sx={{
                borderRadius: "8px",
                paddingX: "70px",
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
              }}
              onClick={() => {
                window.open(link, "_blank");
              }}
            >
              <PhoneIcon
                sx={{
                  color: "#1479bc",

                  display: "flex",

                  justifyContent: "space-between",
                }}
              />
              Talk to us
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
