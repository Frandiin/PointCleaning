import { Box, Modal as ModalUI } from "@mui/material";
import type { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  button?: {
    title?: string;
    link?: string;
  };
  title?: string;
  subTitle?: string;
  openModalElement?: ReactNode;
  size?: string | "full" | "large" | "medium" | "small";
  disableBackdrop?: boolean;
}

const sizes = {
  large: 1125,
  medium: 820,
  small: 590,
};

// eslint-disable-next-line react-refresh/only-export-components
export const getWidth = (
  size?: string | "full" | "large" | "medium" | "small"
): number | string => {
  switch (size) {
    case "large":
      return sizes.large;
    case "medium":
      return sizes.medium;
    case "small":
      return sizes.small;
    case "full":
      return "max-content";
    default:
      if (size) return size;
      return "max-content";
  }
};

export const Modal: FC<ModalProps> = ({
  openModal,
  closeModal,
  children,
  ...props
}) => {
  return (
    <>
      {props.title ? (
        <p onClick={openModal}>
          <p className="md:text-[30px] text-[#1A77BA]">{props.title}</p>
        </p>
      ) : (
        props.openModalElement
      )}

      <ModalUI
        disableRestoreFocus
        hideBackdrop={props.disableBackdrop}
        onClose={closeModal}
        open={props.isOpen}
      >
        <div>
          {props.disableBackdrop ? (
            <div
              className={
                "absolute overflow-hidden top-0 left-0 w-full h-screen bg-[#0000007f]"
              }
            />
          ) : null}

          <Box
            sx={{ width: getWidth(props.size) }}
            className={
              "bg-[#E1F2FF] w-full tablet:w-auto max-h-[95%]  p-6 rounded-md flex flex-col gap-4 left-[50%] top-[50%] absolute translate-y-[-50%] translate-x-[-50%] max-w-[94%] laptop:max-w-[98%] overflow-auto"
            }
          >
            {children}
          </Box>
        </div>
      </ModalUI>
    </>
  );
};

Modal.defaultProps = {
  size: "medium",
};
