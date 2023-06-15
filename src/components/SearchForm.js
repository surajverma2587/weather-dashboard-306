import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const SearchForm = ({ setUrl, setRecentCities }) => {
  const onSubmit = ({ city }) => {
    const itemsFromLS = getFromLocalStorage("recentCities");

    if (!itemsFromLS.includes(city.toUpperCase().trim())) {
      const newItems = [city.toUpperCase().trim(), ...itemsFromLS];

      localStorage.setItem("recentCities", JSON.stringify(newItems));

      setRecentCities(newItems);
    }

    formik.resetForm();

    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${city
        .toLowerCase()
        .trim()}&appid=${process.env.REACT_APP_API_KEY}`
    );
  };

  const formik = useFormik({
    initialValues: { city: "" },
    validationSchema: Yup.object({
      city: Yup.string().required("Please enter a valid city name."),
    }),
    onSubmit,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        error={formik.touched.city && !!formik.errors.city}
        helperText={formik.touched.city && formik.errors.city}
        name="city"
        type="search"
        label="City"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
