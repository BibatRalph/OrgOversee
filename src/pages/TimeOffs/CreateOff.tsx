import * as React from 'react';
import { Box, Stack, Paper, Grid ,Typography } from "@mui/material";
import { DatePicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const CreateOff = () => {

  const [value, setValue] = React.useState<Dayjs | null>(null);
  console.log(value);
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
Create Time-Off
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
      <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
  
<StaticDatePicker  value={value} onChange={(newValue) => setValue(newValue)} orientation="landscape" />

</LocalizationProvider>

      </Stack>
  
    
      
    </Box>
</Grid>
</Paper>
</>
  )
}

export default CreateOff