import * as React from 'react';
import { Box, Stack, Paper, Grid ,Typography, FormControl,   TextField, Button, } from "@mui/material";
import { DatePicker, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs';
//SUBMIT
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";

const CreateOff = () => {
    //GET user info
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
});
const {
  refineCore: { onFinish, formLoading },
  register,
  handleSubmit,
} = useForm();
const onFinishHandler = async (data: FieldValues) => {
  await onFinish({
      ...data,
      email: user.email,
  });
};
  const [value, setValue] = React.useState<Dayjs | null>(null);
  console.log(typeof value);

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
            gap: "10px",
        }}    
    >
      
<Stack >
<LocalizationProvider dateAdapter={AdapterDayjs}> 
<StaticDatePicker  value={value} onChange={(newValue) => setValue(newValue)} orientation="landscape" />
</LocalizationProvider>  
  </Stack>         

      {/*INFo  */}
      <Stack  width="100%" padding={2}>
<Typography fontSize={16} color="#808191">
*Employee Information
</Typography>
<FormControl>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="primary"
                            variant="standard"
                            label="Time-Off Date"
                            disabled
                            {...register("jobTitle", { required: true })}
                        />
                        </FormControl>
                        <FormControl>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="primary"
                            variant="standard"
                            label="Name"
                            disabled
                            {...register("jobTitle", { required: true })}
                        />
                        </FormControl>
                        <FormControl>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="primary"
                            variant="standard"
                            label="ID"
                            disabled
                            {...register("jobTitle", { required: true })}
                        />
                        </FormControl>
                       </Stack>

    <Stack  
    mt={3}
    width="100%">
      <Button>SUBMIT</Button>
    </Stack>

  
    </Box>
 
</Grid>
</Paper>
</>
  )
}

export default CreateOff