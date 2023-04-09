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
                            Enter Applicant name
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="standard-basic"
                            label="Name"
                            color="primary"
                            variant="standard"
                            {...register("title", { required: true })}
                        />
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
                            Applicant Location
                        </FormHelperText>
                        <TextField
                            fullWidth
                            required
                            id="standard-basic"
                            color="primary"
                            variant="standard"
                            label="Location "
                            {...register("location", { required: true })}
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
                                id="standard-basic"
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
