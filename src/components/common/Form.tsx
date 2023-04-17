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
    Avatar,
    Paper
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
    type,
    register,
    handleSubmit,
    handleImageChange,
    formLoading,
    onFinishHandler,
    propertyImage,
}: FormProps) => {
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
  Applicant Details
</Typography>

</Stack> 


                            {/* FIRST COL */}
                                <Stack
                                    gap={1}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                        {/* AVATAR  */}
                                        
                                      <label htmlFor="avatar-input">
                                      <IconButton 
                            color="primary" aria-label="upload picture" component="label"
                            sx={{
                                width: "fit-content",
                                color: "#2ed480",
                                textTransform: "capitalize",
                                fontSize: 16,
                            }}
                            >
                            <input
                             hidden accept="image/*" type="file" 
                             onChange={(
                                 e: React.ChangeEvent<HTMLInputElement>,
                             ) => {
                                 handleImageChange(e.target.files![0]);
                             }}
                             />
                              
                            
                           
                                        <Avatar
                                            sx={{
                                                cursor: "Point",
                                                width: {
                                                    xs: "120px",
                                                    md: "160px",
                                                    lg: "200px",
                                                },
                                                height: {
                                                    xs: "120px",
                                                    md: "160px",
                                                    lg: "200px",
                                                },
                                            }}      
                                             />       
                                              </IconButton>
                                             </label>
                            {/* UPLOAD PHOTO */}
                
                        <Stack direction="row" gap={2}>
                            <Typography
                                color="#11142d"
                                fontSize={16}
                                fontWeight={500}
                                my="10px"
                            >
                                Applicant Photo
                            </Typography>
                            </Stack>

                            <Stack direction="row" gap={2}>
                            <IconButton 
                            color="primary" aria-label="upload picture" component="label"
                            sx={{
                                width: "fit-content",
                                color: "#2ed480",
                                textTransform: "capitalize",
                                fontSize: 15,
                            }}
                            >
                            <input
                             hidden accept="image/*" type="file" 
                             onChange={(
                                 e: React.ChangeEvent<HTMLInputElement>,
                             ) => {
                                 handleImageChange(e.target.files![0]);
                             }}
                             />               
                             <PhotoCamera /> Upload
                            </IconButton>
                        </Stack>
                        <Typography
                            fontSize={14}
                            color="#808191"
                            sx={{ wordBreak: "break-all" }}
                        >
                            {propertyImage?.name}
                        </Typography>
                    
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
                  
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Profile Information
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="Name"
                            color="primary"
                            disabled
                            {...register("name", { required: false })}
                        />
                    </FormControl>
                  
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
                              Email
                            </FormHelperText>
                            <TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="Email"
                            color="primary"
                            disabled
                            {...register("email", { required: false })}
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
                              Job ID
                            </FormHelperText>
                            <TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="Job ID"
                            color="primary"
                            disabled
                            {...register("jobID", { required: false })}
                        />
                        </FormControl>
                                
                    </Stack>

                         {/* Personal Info */}
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
                             Personal Information
                            </FormHelperText>
                            <TextField
                            fullWidth
                            
                            id="standard-basic"
                            label="Personal Email"
                            color="primary"
                            variant="standard"
                            {...register("persoEmail", { required: false })}
                            
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
                             Gender
                            </FormHelperText>
                        <Select
                                variant="outlined"
                                color="primary"
                                
                                placeholder="Gender"
                                {...register("gender", {
                                    required: false,
                                })}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                           
                            </Select>
            
                        </FormControl>
                                
                    </Stack>

                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                        <TextField
                                fullWidth
                                
                                id="standard-basic"
                                color="primary"
                                label="Location"
                                variant="standard"
                                {...register("location", { required: false })}
                            />
                         
                        </FormControl>
                        
                        <FormControl>
                            <TextField
                                fullWidth
                                
                                id="standard-basic"
                                color="primary"
                                type="number"
                                label="Age"
                                variant="standard"
                                {...register("age", { required: false })}
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
                             Description
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            
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
                            {...register("description", { required: false })}
                        />
                    </FormControl>

                    <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                              Applying for
                            </FormHelperText>
                    <TextField
                            fullWidth
                            
                            id="standard-basic"
                            label="Job title "
                            color="primary"
                            disabled
                            {...register("jobTitleTarget", { required: false })}
                        />
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
                              Result
                            </FormHelperText>
                            <TextField
                            fullWidth
                            
                            id="standard-basic"
                            label="Ongoing "
                            color="primary"
                            disabled
                            {...register("result", { required: false })}
                        />
                        </FormControl>
                
                                
                    </Stack>
                  
                    
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
    );
};

export default Form;
