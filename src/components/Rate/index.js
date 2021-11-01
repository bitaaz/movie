import React, { useState } from "react";
import { Box, Button, Slider, Typography } from "@material-ui/core";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Box width={100}>
          <Slider
            min={1}
            max={10}
            step={1}
            value={value}
            // valueLabelDisplay="auto"
            onChange={handleSliderChange}
          />
        </Box>
        <Typography style={{ marginLeft: "10px", marginTop: "3px" }}>
          {value}
        </Typography>
      </div>

      <p>
        <Button variant="contained" onClick={() => callback(value)}>
          Rate
        </Button>
      </p>
    </div>
  );
};

export default Rate;
