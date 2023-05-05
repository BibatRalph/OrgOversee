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
import { FormPropsJobs } from "interfaces/common";
import CustomButton from "./CustomButton";
import {useShow} from "@refinedev/core";
import { useUpdate } from "@refinedev/core";
import { useNavigate } from "react-router-dom";

const FormEmp = ({
    type,
    register,
    handleSubmit,
    formLoading,
    onFinishHandler,
}: FormPropsJobs) => {

    //UPDATE TO ADMIN
const { mutate } = useUpdate();
const navigate = useNavigate();

        //FETCH DATA from applicant to creating employee
        const { queryResult } = useShow();
        const { data } = queryResult;
        const Info = data?.data ?? {};

        const handleAdmin = () =>  {
                        const response = confirm(
                            "Modify this employee as a Admin? , employee needs to log-out to take effect",
                        );
                        if (response) {
                            mutate({
                                resource: "Users",
                                values: {
                                    role: "Admin",
                                },
                                id: Info.userID,
                             
                                },
                                {
                                    onError: (error, variables, context) => {
                                        alert('An error occurred!')
                                    },
                                    onSuccess: (data, variables, context) => {
                                        navigate("/Employee");
                                    },
                                },
                                );       
                        }     
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
   Employee: {Info.name} 
</Typography>
<Typography fontSize={16} color="#808191">
 *Updating Employee Details
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
                              Job Information
                            </FormHelperText>
                    <TextField
                            fullWidth
                            
                            id="standard-basic"
                            label="Job title "
                            color="primary"
                            disabled
                            {...register("jobTitleTarget", { required: false })}
                        />
               
                  
                    
                       {/* SUBMIT */}
                       <Stack
                      mt="10px"  direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}>
                             <CustomButton
                        type="submit"
                        title={formLoading ? "UPDATING..." : "UPDATE"}
                        backgroundColor="#67be23"
                        color="#fcfcfc"
                   
                    />
                        <CustomButton
                        title={formLoading ? "LOADING..." : "ADMIN"}
                        backgroundColor="#67be23"
                        color="#fcfcfc"
                        handleClick={handleAdmin}
                        />
                    
                             </Stack>
                             

                
                </form>
                      
                {/* FIRST COL */}
                </Stack>    
                
                 {/* CONTENTS */}
                </Grid>  
               
                
                </Paper>
        </>
    );
};

export default FormEmp;
