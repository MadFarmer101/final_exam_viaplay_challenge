import axios from "axios";
import { GET_SERIES_INDEX_DATA } from "../state/actions/actionTypes";

const fetchData = async (dispatch) => {
  let response = await axios.get(
    "https://content.viaplay.se/pc-se/serier/samtliga"
  );
};
