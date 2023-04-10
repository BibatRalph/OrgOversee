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
//CHIP TEXT BOX
import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = { 
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const SkillSet = [
    'Problem Solving Skills','Negotiation','Project Management','Marketing','Administrative','Writing Skills',
    'Critical Thinking Skills',
    'Flexibility',
    'Communication Skills',
    'Teamwork',
    'Organization Skills',
    'Creativity',
    'Emotional Intelligence',
    'Attention to Detail',
    'Responsibility',
    'Digital Skills',
    'Design','Data Analysis',
  ];

const FormJob = ({
    type,
    register,
    handleSubmit,
    formLoading,
    onFinishHandler
}: FormPropsJobs) => {

    //CHIP
    const [Skillset, setSkillset] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof Skillset>) => {
    const {
      target: { value },
    } = event;
    setSkillset(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

//LOCATION
    const Location = [
    { title: 'Head Office-Philippines'},
    { title: 'Remote-Philippines' },
    { title: 'Head Office-United States' },
    { title: 'Remote-United States' },
    ]

  interface LocationOption {
    title: string;
  }
  const defaultProps = {
    options: Location,
    getOptionLabel: (option: LocationOption) => option.title,
  };
  const [value, setValue] = React.useState<LocationOption | null>(null);
  
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
                     <FormControl>
                        <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="primary"
                            variant="standard"
                            label="Job Title"
                            {...register("jobTitle", { required: true })}
                        />
                        </FormControl>
          
                  
    

          {/* HALF INPUT "Deperatment and Job Type" */}
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
                              Department
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                color="primary"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="Unassigned"
                                {...register("department", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="Unassigned">Unassigned</MenuItem>
                                <MenuItem value="Marketing">Marketing</MenuItem>
                                <MenuItem value="Engineering">Engineering</MenuItem>
                                <MenuItem value="Human Resource">Human Resource</MenuItem>
                                <MenuItem value="Administration">Administration</MenuItem>
                                <MenuItem value="Information Technology">Information Technology</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                                <MenuItem value="Design">Design</MenuItem>  
                            </Select>
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                              Job Type
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                color="primary"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                {...register("jobType", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="Full-time employment">
Full-time employment</MenuItem>
                                <MenuItem value="Part-time employment">Part-time employment</MenuItem>
                            </Select>
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
                            Job Description
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
                    {/* LOCATION AND EXP */}
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
                            Additional Job Details
                        </FormHelperText>

                        <Autocomplete
        {...defaultProps}
        id="auto-complete"
        color="primary"
        autoComplete
        includeInputInList
        isOptionEqualToValue={(option, value) =>
          option.title === value.title
        }
        renderInput={(params) => (
          <TextField {...params} fullWidth required label="Location" variant="outlined" {...register("location", { required: true })}/>
        )}
      />     

             </FormControl>

             <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                              Experience needed?
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                color="primary"
                                displayEmpty
                                required
                                defaultValue="No experience"
                                {...register("experience", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="No experience">No experience</MenuItem>
                                <MenuItem value="Entry Level">Entry Level</MenuItem>
                                <MenuItem value="Atleast 1 year of experience">Atleast 1 year of experience</MenuItem>
                                <MenuItem value="Atleast 2 years of experience">Atleast 2 years of experience</MenuItem>
                                <MenuItem value="Atleast 3 years of experience">Atleast 3 years of experience</MenuItem>
                            </Select>
                        </FormControl>
                        </Stack>
                    {/* Skills*/}
                    {/* CHIP */} 
                    <FormControl sx={{ flex: 1 }}>
                              <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                            <Select          
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip-label"
          multiple
          value={Skillset}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Skills"/>}
         
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}
         
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {SkillSet.map((name) => (
            <MenuItem
              key={name}
              value={name}
              {...register("skillSet", { required: true, })}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        
       
                        </FormControl>
                        <FormControl sx={{ flex: 1 }}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic"
                                color="primary"
                                type="number"
                                label="Salary '$'"
                                variant="outlined"
                                {...register("Salary", { required: true })}
                            />
                        </FormControl>
                   
                      
                                
               
               
                   
                       {/* SUBMIT */}
                       <Grid mt="10px">
                             <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
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