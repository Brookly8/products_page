import axios from "axios";

export let getData = async (api) => {
  try {
    const { data } = await axios(api);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export let getSearchedData = async (api, input) => {
  try {
    const { data } = await axios(api + input);
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
