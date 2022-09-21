import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import "./OnlineCalculator.css";


async function createMarkup () {
   const res = await {__html: <div id="broskoweb_container"></div>};
   return res;
  }

function OnlineCalculator() {
    
  return (

      <>
     <div dangerouslySetInnerHTML={createMarkup()} />;
      </>


  );
}

export default OnlineCalculator;
