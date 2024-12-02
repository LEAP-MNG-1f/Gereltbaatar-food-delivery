import { AddGrayIcon } from "../svg/AddGrayIcon";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CloseIcon } from "../svg/CloseIcon";

export const AdminCreateCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full">
      <button
        onClick={handleOpen}
        className={`group border border-[#D6D8DB] hover:border-BrandGreen duration-300 py-2 px-4 rounded-lg flex gap-2 items-center w-full `}
      >
        <AddGrayIcon />
        <p className="font-Inter font-[500] not-italic text-lg text-[#5E6166] tracking-[-0.396px]">
          Create category
        </p>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[590px] w-full bg-white shadow-lg rounded-2xl">
          <div className="px-6 py-4 flex items-center justify-between">
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
            <p className="text-[#161616] font-Poppins text-[24px] font-bold leading-[130%]">
              Create new category
            </p>
            <div className="h-[18px]"></div>
          </div>
          <div className="p-6 border border-[#E0E0E0] border-x-0">
            <div className="flex flex-col gap-2">
              <p className="text-[#121316] font-Poppins text-sm font-medium leading-[140%]">
                Category name
              </p>
              <input
                type="text"
                placeholder="Name"
                className="px-3 h-14 bg-[#F4F4F4] rounded-lg w-full outline-none text-[#8B8E95]"
              />
            </div>
          </div>
          <div className="p-6 flex items-center justify-end">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="p-2 text-[#3F4145] font-inter text-base font-bold"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-[4px] bg-[#393939] text-white font-inter text-base font-bold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
