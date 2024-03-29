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
    Paper,
    Button
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";
import { useCreate, useGetIdentity, useShow } from "@refinedev/core";
import { useNavigate } from "react-router-dom";

const Form = ({
    type,
    register,
    handleSubmit,
    handleImageChange,
    formLoading,
    onFinishHandler,
    propertyImage,
}: FormProps) => {
// get User
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const navigate = useNavigate();
    const { queryResult } = useShow();
    const { mutate } = useCreate();

    const { data } = queryResult;

    const AppInfo = data?.data ?? {};
    const currentStage = AppInfo.stats;

    const handleOnboard = () =>  {
// CHECK IF APPLICANT STAGE IS COMPLETED
        if (AppInfo.photo != null ) {
            const response = confirm(
                "Onboarding this applicant for this job?",
            );
            if (response) {
                mutate(
                    {
                        resource: "Employee",
                       
                        values: {
                            // REQ
                            photo: AppInfo.photo,
                            email: AppInfo.email,
                            Employer: user.email,
                            jobID: AppInfo.jobID,
                            userID: AppInfo.userID,
                            name: AppInfo.name,
                            jobTitleTarget: AppInfo.jobTitleTarget,
                            jobDepartmentTarget : AppInfo.jobDepartmentTarget, // job dep
                            jobLocationTarget : AppInfo.jobLocationTarget, // job loc
                            jobOwner : AppInfo.jobOwner,
                            
                
                        },
                    },
                    {
                        onSuccess: () => {
                            
                            navigate("/Applicants");
                        },
                    },
                );
            }
        } else {
            alert("Please upload a photo for the applicant and click update before onboarding.")
        };
    }
    

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
                              flexWrap="wrap"
                              padding={2}
                              direction="column"
                              alignItems="center"
                              gap={1}
                        >
                     
<Typography variant="h5">
Update Applicant Details
</Typography>
<Typography fontSize={16} color="#808191">
*Please update profile image before onboarding
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
                       <Stack mt="10px"  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>
                             <CustomButton
                        type="submit"
                        title={formLoading ? "UPDATING..." : "UPDATE"}
                        backgroundColor="#67be23"
                        color="#fcfcfc"/>

                         <CustomButton
                         disabled={currentStage === 3 ? false : true }
                        title="ONBOARD"
                        backgroundColor={currentStage === 3 ? "#67be23" : "#eeeeee" }
                        color="#fcfcfc"
                        handleClick={handleOnboard}
                        />

                             </Stack>
                             {currentStage === 3 ? 
                            <Stack></Stack>
                             : 
                             <Stack
                             justifyContent="center"
                             alignItems="center"
                           >
                           <Typography fontSize={16} color="#808191">
*Onboarding is only available if applicant complete all the stages
</Typography>
                           </Stack>
                             }
                        
                    
                           
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
