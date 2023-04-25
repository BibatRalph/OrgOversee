import { Box, Stack, Paper, Grid ,Typography } from "@mui/material";
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const ApproveOff = () => {
  return (
    <>
    <Paper
sx={{
  paddingX: { xs: 3, md: 1 },
  paddingY: { xs: 2, md: 3 },
  my: 0.5,
}}
> 

<Grid item xs={16} md={12}  >
   {/* TOP BAR */}
         <Stack
                            display="flex"
                            justifyContent="space-between"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={3}
                            direction="row"
                            gap={2}
                        >
                     
<Typography variant="h5">
Calendar
</Typography>
</Stack>
{/* CONTENT */}
<Box
        mt="20px"
        sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
        }}
    >
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar 
      readOnly
      // value={}
      />
    </LocalizationProvider>
      
    </Box>
</Grid>
</Paper>
</>
  )
}

export default ApproveOff