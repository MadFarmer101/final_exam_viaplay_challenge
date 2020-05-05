import axios from "axios";
import { GET_SERIES_INDEX_DATA } from "../state/actions/actionTypes";

const getData = async (dispatch) => {
  let response = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga"
  );
  dispatch({
    type: GET_SERIES_INDEX_DATA,
    payload: {
      content:
        response.data._embedded["viaplay:blocks"][0]._embedded[
          "viaplay:products"
        ],
    },
  });
};

export { getData };
