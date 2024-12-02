export const CategoryEditButton = () => {
  return (
    <div>
      {/* <bu aria-describedby={id} variant="contained" onClick={handleClick}>
        <MorevertWhite />
      </bu> */}
      <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-md">
          <div className="flex items-center gap-4 px-4 py-2">
            {/* <EditIcon /> */}
            <p className="text-[#161616] font-Poppins text-base font-medium leading-[150%]">
              Edit name
            </p>
          </div>
          <div className="flex items-center gap-4 px-4 py-2">
            {/* <TrashIcon /> */}
            <p className="text-[#DF1F29] font-Poppins text-[16px] font-medium leading-[150%]">
              Delete Category
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
