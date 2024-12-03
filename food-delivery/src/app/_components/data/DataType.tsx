export type foodData = {
  _id?: string;
  name?: string;
  image?: string;
  ingredient?: string;
  categoryId?: {
    _id?: string;
    name?: string;
    __v?: number;
  };
  price?: string;
  __v?: number;
  quantity?: number;
};

export type categoryDatas = {
  _id?: string | undefined;
  name?: string;
  __v?: number;
};

export type drawerId = {
  _id?: string | undefined;
  quantity?: number;
};
