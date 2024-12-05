export type foodData = {
  product: any;
  _id?: string;
  name?: string;
  image?: string;
  ingredient?: string;
  categoryId?: {
    _id?: string;
    name?: string;
    __v?: number;
  };
  price?: number | undefined;
  __v?: number;
  quantity?: number;
};

export type categoryDatas = {
  _id?: string | undefined;
  name?: string;
  __v?: number;
};
