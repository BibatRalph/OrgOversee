import {
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Grid,
    Paper
} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import {FormPropsJobs} from "interfaces/common";
import CustomButton from "./CustomButton";
import React from "react";
const FormJob = ({
    type,
    register,
    handleSubmit,
    formLoading,
    onFinishHandler
}: FormPropsJobs) => {

  // JOB TITLE
    const JobTitle = [
    { title: 'Marketing', vacancy: 7 },
    { title: 'Engineering', vacancy: 13 },
    { title: 'Human Resource', vacancy: 2 },
    { title: 'Administration', vacancy: 1 },
    { title: 'primaryrmation Technology', vacancy: 4 },
    { title: "Finance", vacancy: 2 },
    { title: 'Design', vacancy: 1 },
    ]

  interface JobTitleOption {
    title: string;
    vacancy: number;
  }
  const defaultProps = {
    options: JobTitle,
    getOptionLabel: (option: JobTitleOption) => option.title,
  };
  const [value, setValue] = React.useState<JobTitleOption | null>(null);
  
  return (
    <>
    <Paper
    sx={{
        paddingX: { xs: 3, md: 2 },
        paddingY: { xs: 2, md: 3 },
        my: 0.5,
    }}
> 
<Grid item xs={16} md={12}>
    {/* TOP BAR */}
<Stack
                            display="flex"
                            justifyContent="center"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={2}
                            direction="row"
                            gap={2}
                        >
                     
<Typography variant="h5">
  What's the job you're hiring for?
</Typography>

</Stack> 
                            {/* FIRST COL */}
                                <Stack
                                    gap={1}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                <form
               style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
          
                  
        <Autocomplete
        {...defaultProps}
        id="auto-complete"
        color="primary"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Job Title" variant="standard" {...register("title", { required: true })}/>
        )}
      />
                     
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Description
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder="Write description"
                            color="primary"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                            {...register("description", { required: true })}
                        />
                    </FormControl>
                            {/* HALF INPUT "Type and Age" */}
                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Select Applicant Type
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                color="primary"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="apartment"
                                {...register("propertyType", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="apartment">Apartment</MenuItem>
                                <MenuItem value="villa">Villa</MenuItem>
                                <MenuItem value="farmhouse">farmhouse</MenuItem>
                                <MenuItem value="condos">Condos</MenuItem>
                                <MenuItem value="townhouse">Townhouse</MenuItem>
                                <MenuItem value="duplex">Duplex</MenuItem>
                                <MenuItem value="studio">Studio</MenuItem>
                                <MenuItem value="chalet">Chalet</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Enter Applicant Age
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="primary"
                                type="number"
                                label="Age"
                                variant="outlined"
                                {...register("price", { required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Applicant Location
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="primary"
                            variant="outlined"
                            label="Location "
                            {...register("location", { required: true })}
                        />
                    </FormControl>
                       {/* SUBMIT */}
                       <Grid mt="10px">
                             <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "SUBMIT"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                   
                    />
                             </Grid>
                
                </form>
                      
                {/* FIRST COL */}
                </Stack>    
                
                 {/* CONTENTS */}
                </Grid>  
               
                
                </Paper>
        </>
  )
}

export default FormJob