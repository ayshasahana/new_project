import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import InputAdornment from "@mui/material/InputAdornment";
import './Getquotations.css';
import FrameImage from "../assets/img/images/images/Frame.png"; // Import the image
import AddIcon from '@mui/icons-material/Add';
import Header from "../components/Header"; //header
import Footer from "../components/Footer"; //footer


const GetQuotations = () => {
  const theme = createTheme({
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            backgroundColor: "#00a6d6",
            color: "#fff",
            fontWeight: "bold",
          },
          deleteIcon: {
            color: "#fff",
          },
        },
      },
    },
  });

  const [selectedItems, setSelectedItems] = useState([
    "Trampoline",
    "Role Play",
    "Circus Performers",
  ]);
  
  const [unselectedItems, setUnselectedItems] = useState([
    "Treasure Hunt",
    "Space Jumpers",
    "Ninja Training",
    "Jungle Adventure",
    "Kingdom Defense",
    "Trampoline Pirate Ship",
    "Wild West Showdown",
  ]);

  const handleDelete = (itemToDelete) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemToDelete));
    setUnselectedItems([...unselectedItems, itemToDelete]);
  };

  const handleAdd = (itemToAdd) => {
    setUnselectedItems(unselectedItems.filter((item) => item !== itemToAdd));
    setSelectedItems([...selectedItems, itemToAdd]);
  };

  const handleOnChange = (value) => {
    console.log(value);
  };
  const handleSave=()=>{
    alert("message is submited")
  }

  return (
    <div>
    <Header />
    <div className="container">
      <div className="left-section">
        <h2>Get Quotation</h2>
        <p>
          Looking for tailored solutions to meet your business needs? Request a
          quote now and let us help you find the perfect fit.
        </p>
      </div>
      <div className="right-section">
        <div className="enquiry-box">
          <h2>Enquire Now</h2>
          <form onSubmit={handleSave}>
            <div className="input-row">
              <TextField required id="outlined-required" label="First name" />
              <TextField required id="outlined-required" label="Last Name" />
            </div>
            <div className="input-row">
              <TextField required id="outlined-required" label="email" />
              <TextField
                id="outlined-number"
                label="Mobile Number"
                InputProps={{
                  startAdornment: (
                    
                    <InputAdornment position="start" >
                      <PhoneInput
                        country={"us"}
                        enableSearch={true}
                        onChange={handleOnChange}
                        containerStyle={{
                          border: "none"
                        }}
                        buttonStyle={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        inputStyle={{
                          border: "none",
                          boxShadow: "none",
                          width: "50%",
                        }}
                        dropdownStyle={{
                          zIndex: 1000,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Location size</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="50-200 sq mtr" control={<Radio />} label="50-200 sq mtr" />
                <FormControlLabel value="201-500 sq mtr" control={<Radio />} label="201-500 sq mtr" />
                <FormControlLabel value="501-1000 sq mtr" control={<Radio />} label="501-1000 sq mtr" />
                <FormControlLabel value="1001 and above sq mtr" control={<Radio />} label="1001 and above sq mtr" />
              </RadioGroup>
              <FormLabel id="demo-row-radio-buttons-group-label">Location size</FormLabel>

            </FormControl>
            <ThemeProvider theme={theme}>
  <Stack direction="row" spacing={1} className="chip-container">
    {/* Render selected items as chips */}
    {selectedItems.map((item) => (
      <Chip
        key={item}
        label={item}
        onDelete={() => handleDelete(item)}
      />
    ))}
  </Stack>

  <Stack direction="row" spacing={1} marginTop={2} className="chip-container">
    {/* Render unselected items as buttons with a "+" icon */}
    {unselectedItems.map((item) => (
      <Chip
        key={item}
        onClick={() => handleAdd(item)}
        style={{
          backgroundColor: "#f0f0f0",
          color: "#000",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        label={
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {item}
            <AddIcon fontSize="small" style={{ marginLeft: "5px" }} />
          </div>
        }
      />
    ))}
  </Stack>
</ThemeProvider>
            <div className="checkbox-row">
              <input type="checkbox" id="not-a-robot" />
              <label htmlFor="not-a-robot">I’m not a robot</label>
              <img src={FrameImage} alt="Recaptcha Icon" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default GetQuotations;