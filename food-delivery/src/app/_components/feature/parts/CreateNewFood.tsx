import Modal from "@mui/material/Modal";
import { CloseIcon } from "../../ui/svg/CloseIcon";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { CreateFood } from "../../ui/inputs/CreateFood";
import { useFormik } from "formik";
import { Category } from "@mui/icons-material";

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
        backgroundColor: "#393939",
        ...theme.applyStyles("dark", {
          backgroundColor: "#393939",
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

type Food = {
  image: File | null;
};

export const CreateNewFood = () => {
  const [inputOpen, setInputOpen] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [foodData, setFoodData] = useState<Food>({ image: null });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleInputToggle = () => {
    setInputOpen(!inputOpen);
  };

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFoodData({ image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      categoryId: "",
      ingredient: "",
      price: "",
    },

    onSubmit: async (value) => {
      const requestData = {
        ...value,
      };

      const formData = new FormData();
      formData.append("name", requestData.name);
      formData.append("ingredient", requestData.ingredient);
      formData.append("price", requestData.price);
      formData.append("categoryId", requestData.categoryId);

      console.log(foodData.image, requestData, "foodData.image shuuu");

      if (foodData.image) {
        formData.append("image", foodData.image);
        // console.log("ajilah shuu append");
      }

      console.log(formData, "formData");

      // const option = {
      //   method: "POST",
      //   body: formData,
      // };

      try {
        const response = await fetch(`${BACKEND_END_POINT}/foods`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        handleClose();
      } catch (e) {
        console.log(e);
      }
    },
  });

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
          <form action="" onSubmit={formik.handleSubmit}>
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
              <CreateFood
                id="name"
                title="Хоолны нэр"
                name="name"
                type="text"
                placeholder="нэр"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <CreateFood
                id="categoryId"
                title="Хоолны ангилал"
                name="categoryId"
                placeholder="ангилал"
                type="text"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
              />
              <CreateFood
                id="ingredient"
                title="Хоолны орц"
                name="ingredient"
                placeholder="орц"
                type="text"
                value={formik.values.ingredient}
                onChange={formik.handleChange}
              />
              <CreateFood
                id="price"
                title="Хоолны үнэ"
                placeholder="үнэ"
                name="price"
                type="number"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
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
                  id="sale"
                  type="number"
                  name="sale"
                  placeholder="үнэ"
                  className="px-3 h-14 bg-[#F4F4F4] rounded-lg w-full outline-none text-[#8B8E95]"
                  disabled={inputOpen}
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-2">
                  <p className="text-[#121316] font-Poppins text-sm font-medium leading-[140%]">
                    Хямдралтай эсэх
                  </p>
                  <div className="max-w-[284px] w-full h-[122px] p-2 flex flex-col justify-center items-center gap-2 border border-dashed border-[#D6D7DC] bg-[rgba(186,188,196,0.12)] rounded-lg">
                    <p className="text-[#525252] font-poppins text-base font-bold ">
                      Add image for the food
                    </p>
                    <input
                      type="file"
                      id="uploadFile1"
                      name="uploadFile1"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="uploadFile1"
                      className="px-3 py-2 rounded-lg bg-[#393939] text-white font-inter text-base font-bold cursor-pointer"
                    >
                      Add image
                    </label>
                  </div>
                </div>
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Food Preview"
                      className="w-full h-[200px] object-contain border border-black border-dashed p-2"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="p-6 flex items-center justify-end">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="p-2 text-[#3F4145] font-inter text-base font-bold"
                  onClick={() => {
                    formik.resetForm();
                    setImagePreview(null);
                  }}
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
          </form>
        </div>
      </Modal>
    </div>
  );
};
