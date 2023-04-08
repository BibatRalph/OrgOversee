import {
    Box,
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import { Paper } from '@mui/material'
import { CreateButton } from "@refinedev/mui";
import {
    Grid,
    InputBase,
    Pagination,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";
import {
    HttpError,
    IResourceComponentsProps,
    useTranslate,
  } from "@refinedev/core";
  import { useForm } from "@refinedev/react-hook-form";
  import { Controller } from "react-hook-form";
  import { Create } from "@refinedev/mui";
  import {
    FormControlLabel,
    Avatar,
    FormLabel,
    Radio,
    RadioGroup,
    TextFieldProps,
    Input,
  } from "@mui/material";
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
                            justifyContent="space-between"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={1}
                            direction="row"
                            gap={2}
                        >
                     
<Typography variant="h5">
  Create Applicant
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
                            id="outlined-basic"
                            label="Name"
                            color="info"
                            variant="outlined"
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
                            Enter Description
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder="Write description"
                            color="info"
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
                                color="info"
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
                                color="info"
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
                            color="info"
                            variant="outlined"
                            label="Location "
                            {...register("location", { required: true })}
                        />
                    </FormControl>
                             {/* SUBMIT */}
                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
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
