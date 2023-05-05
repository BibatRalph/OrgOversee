import { useCreate, useGetIdentity, useShow } from "@refinedev/core";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "components";
import * as React from 'react';
import { Box, Stack, Paper, Grid ,Typography} from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs';

const CreateOff = () => {
    //GET user info
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
});

const navigate = useNavigate();

const [value, setValue] = React.useState<Dayjs | null>(null);

const { queryResult } = useShow();
  const { mutate } = useCreate();

  const { data } = queryResult;

  const offData = data?.data ?? {};

  const handleCreateOff = () => {
    const response = confirm(
        "Are you sure you want to set this date for Time-Off?",
    );
    if (response) {
        mutate(
            {
                resource: "Timeoff",
               
                values: {
                    // REQ
                    date: value,
                    email: user.email, //  email
                    id: user._id, //  id 
                    name: user.name, //  name
                    avatar: user.avatar
                },
            },
            {
                onSuccess: () => {
                    navigate("/Timeoff");
                },
            },
        );
    }
};
  return (
    <>
    <Paper
sx={{
  paddingX: { xs: 3, md: 1 },
  paddingY: { xs: 2, md: 3 },
  my: 0.5,
}}
> 

{user.role === "Admin" ?  

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
<Stack>
  *Select date before Submitting
</Stack>
</Stack>
{/* CONTENT */}

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
<Stack >
<LocalizationProvider dateAdapter={AdapterDayjs}> 
<StaticDatePicker
        disablePast
       value={value} onChange={(newValue) => setValue(newValue)} orientation="landscape"
        slotProps={{
          actionBar: {
            actions: ['today'],
          },
        }}
      />
</LocalizationProvider>  
  </Stack>         
                        <Stack
                          justifyContent="center"
                          alignItems="center" 
                       mt="10px" marginBottom={3}>
                        
                        <CustomButton
                         
                         title="SUBMIT"
                         backgroundColor="#67be23"
                         color="#FCFCFC"
                         fullWidth
                         handleClick={() => {
                              handleCreateOff();
                         }}
                     />
                        </Stack>    
                        </Stack>                      
             
</Grid>
 : 
 <Grid item xs={16} md={12}> 
<Stack
direction="column"
justifyContent="center"
alignItems="center"
spacing={2}
>
<Typography variant="h5" >
        You do not have access to this section        
</Typography>

<Typography
                        mt="5px"
                        fontSize={14}
                        fontWeight={400}
                        color="#808191"
                    >
                          *Consult your hiring manager if you think this is a mistake
                    </Typography>
   
    
 </Stack>
 </Grid>
}
</Paper>
</>
  )
}

export default CreateOff