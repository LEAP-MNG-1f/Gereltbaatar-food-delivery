import Modal from "@mui/material/Modal";
import { CloseIcon } from "../../ui/svg/CloseIcon";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { CreateFood } from "../../ui/inputs/CreateFood";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export const CreateNewFood = () => {
  const [inputOpen, setInputOpen] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputToggle = () => {
    setInputOpen(!inputOpen);
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <div className="flex items-center justify-center bg-BrandGreen py-2 px-4 rounded-[4px]">
          <p className="text-white text-center font-Poppins text-base font-normal leading-normal">
            add new food
          </p>
        </div>
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
              Create food
            </p>
            <div className="h-[18px]"></div>
          </div>
          <div className="flex flex-col gap-4 p-6 border border-[#E0E0E0] border-x-0">
            <CreateFood title="Хоолны нэр" name="нэр" type="text" />
            <CreateFood title="Хоолны ангилал" name="ангилал" type="text" />
            <CreateFood title="Хоолны орц" name="орц" type="text" />
            <CreateFood title="Хоолны үнэ" name="үнэ" type="number" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button onClick={handleInputToggle}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                  </Stack>
                </button>
                <p className="text-[#121316] font-Poppins text-sm font-medium leading-[140%]">
                  Хямдралтай эсэх
                </p>
              </div>
              <input
                type="number"
                placeholder="үнэ"
                className="px-3 h-14 bg-[#F4F4F4] rounded-lg w-full outline-none"
                disabled={inputOpen}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#121316] font-Poppins text-sm font-medium leading-[140%]">
                Хямдралтай эсэх
              </p>
              <div className="max-w-[284px] w-full h-[122px] p-2 flex flex-col justify-center items-center gap-2 border border-dashed border-[#D6D7DC] bg-[rgba(186,188,196,0.12)] rounded-lg">
                <p className="text-[#525252] font-poppins text-base font-bold ">
                  Add image for the food
                </p>
                <input type="file" id="upload" className="hidden" />
                <label
                  htmlFor="upload"
                  className="px-3 py-2 rounded-lg bg-[#393939] text-white font-inter text-base font-bold cursor-pointer"
                >
                  Add image
                </label>
              </div>
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
