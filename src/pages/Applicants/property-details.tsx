import { Typography, Box, Stack, Paper, Grid } from "@mui/material";
import { useDelete,useUpdate, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {
  BorderAll,
    ChatBubble,
    Delete,
    Edit,
    Phone,
    Place,
    Star,
} from "@mui/icons-material";
import { CustomButton } from "components";
function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';

const steps = ['Open', 'Contact', 'Evaluate', 'Complete'];


const PropertyDetails = () => {

     //MAIN
     const navigate = useNavigate();
     const { data: user } = useGetIdentity({
         v3LegacyAuthProviderCompatible: true,
     });
     const { queryResult } = useShow();
     const { mutate } = useUpdate();
     const { id } = useParams();
     
     const { data, isLoading, isError } = queryResult;
 
     const propertyDetails = data?.data ?? {};

      const [activeStep, setActiveStep] = React.useState(propertyDetails.stats);
      const [completed, setCompleted] = React.useState<{  
        [k: number]: boolean;
      }>({});
     
      const totalSteps = () => {
 
        return steps.length;
      };
    
      const completedSteps = () => {
    
        return Object.keys(completed).length;

      };
    
      const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };
    
      const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
      };
    
      const handleNext = () => {
        const newActiveStep =
          isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
              // find the first step that has been completed
              steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
      };
    
     
    
      const handleStep = (step: number) => () => {
        setActiveStep(step);
      };
    
      const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
      };
    
      const handleReset = () => {
        setActiveStep(0);
        setCompleted({});

   
      };
  
    

   
      //End 
      if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    // check if user is the current user
    const isCurrentUser = user.email === propertyDetails.creator.email;

    const handleDeleteProperty = () => {
        const response = confirm(
            "Are you sure you want to Update this Applicant?",
        );
        if (response) {
            mutate(
                {
                    resource: "Applicants",
                    id: id as string,
                    values: {
                      stats: activeStep
                  },
                 
                  
                },
                {
                    onSuccess: () => {
                        //Nothing
                    },
                },
            );
        }
    };
  

    return (
        < >
        
        <Paper
    sx={{
        paddingX: { xs: 3, md: 1 },
        paddingY: { xs: 2, md: 3 },
        my: 0.5,
    }}
    >
        <Grid item xs={16} md={12}>
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
         {propertyDetails.name}
            </Typography>
          
            <Typography fontSize={18} fontWeight={500}  color="#11162D"   textTransform="capitalize" >
         Application status: Stage {propertyDetails.stats + 1} {propertyDetails.result}
            </Typography>
         
            
     
        </Stack>
       
         
            {/* CONTENT */}
            <Box
           
                mt="20px"
                display="flex"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={4}
            >
  
                                {/* STEPS */}
                      <Stack  
                        direction="column"
                        justifyContent="space-between"
                      
                      width="100%"  padding={3}
                      >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>

            {/* If step complete render this */}

            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>

            {/* IF steps not complete show this */}

            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Stage {activeStep + 1}
            </Typography>

          <Stack  border={1} direction="row">

         {/* FIRST COL "IMG BOX*/}
         
         <Box flex={1} border={1}
                >
                    {/* COL INFO */}
                    <img
                        src={propertyDetails.photo}
                        alt="property_details-img"
                        height={546}
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        className="property_details-img"
                        
                    />

                    <Box mt="15px" padding={3}  borderTop={1} >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            flexWrap="wrap"
                            alignItems="center"
                        >
                            <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11162D"
                                textTransform="capitalize"
                            >
                                Application in:{propertyDetails.jobTitleTarget}
                            </Typography>
                            <Box>
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <Star
                                        key={`star-${item}`}
                                        sx={{ color: "#F2C94C" }}
                                    />
                                ))}
                            </Box>
                        </Stack>

                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            alignItems="center"
                            gap={2}
                        >
                            
                            <Box>
                            <Typography fontSize={18} color="#11162D" mt="10px">
                                Profile Information
                            </Typography>
                            <Typography fontSize={16} color="#808191"mt={1}>
                                     Email:{propertyDetails.email}
                                </Typography>
                                <Typography fontSize={16} color="#808191"mt={1}>
                                        Gender:{propertyDetails.gender}
                                    </Typography>
                                    <Typography fontSize={16} color="#808191" mt={1}>
                                        Age:{propertyDetails.age}
                                    </Typography>

                            </Box>
                            <Stack
                                    mt={0.5}
                                    direction="row"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    <Place sx={{ color: "#808191" }} />
                                    <Typography fontSize={16} color="#808191">
                                        {propertyDetails.location}
                                    </Typography>
                                </Stack>                                                      
                        </Stack>

                        <Stack mt="25px" direction="column" gap="10px">
                            <Typography fontSize={18} color="#11162D">
                                Description
                            </Typography>
                            <Typography fontSize={16} color="#808191">
                                {propertyDetails.description}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                {/* END OF First COl */}
                         
                <Box
                    width="100%"
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    border={1}
                >
                    <Stack
                        width="100%"
                        p={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        border="1px solid #E4E4E4"
                        borderRadius={2}
                    >
                        <Stack
                            mt={2}
                            justifyContent="center"
                            alignItems="center"
                            textAlign="center"
                        >
                            <img
                                src={
                                    checkImage(propertyDetails.creator.avatar)
                                        ? propertyDetails.creator.avatar
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                                }
                                alt="avatar"
                                width={90}
                                height={90}
                                style={{
                                    borderRadius: "100%",
                                    objectFit: "cover",
                                }}
                            />

                            <Box mt="15px">
                                <Typography
                                    fontSize={18}
                                    fontWeight={600}
                                    color="#11142D"
                                >
                                    {propertyDetails.creator.name}
                                </Typography>
                                <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                    Agent
                                </Typography>
                            </Box>

                            <Stack
                                mt="15px"
                                direction="row"
                                alignItems="center"
                                gap={1}
                            >
                                <Place sx={{ color: "#808191" }} />
                                <Typography
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                    North Carolina, USA
                                </Typography>
                            </Stack>

                            <Typography
                                mt={1}
                                fontSize={16}
                                fontWeight={600}
                                color="#11142D"
                            >
                                {propertyDetails.creator.allProperties.length}{" "}
                                Properties
                            </Typography>
                        </Stack>

                        <Stack
                            width="100%"
                            mt="25px"
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                            <CustomButton
                                title={!isCurrentUser ? "Message" : "Edit"}
                                backgroundColor="#475BE8"
                                color="#FCFCFC"
                                fullWidth
                                icon={
                                    !isCurrentUser ? <ChatBubble /> : <Edit />
                                }
                                handleClick={() => {
                                    if (isCurrentUser) {
                                        navigate(
                                            // EDIT
                                            `/Applicants/edit/${propertyDetails._id}`,
                                        );
                                    }
                                }}
                            />
                            <CustomButton
                                title={!isCurrentUser ? "Call" : "Delete"}
                                backgroundColor={
                                    !isCurrentUser ? "#2ED480" : "#d42e2e"
                                }
                                color="#FCFCFC"
                                fullWidth
                                icon={!isCurrentUser ? <Phone /> : <Delete />}
                                handleClick={() => {
                                    if (isCurrentUser) handleDeleteProperty();
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Stack>
                        <img
                            src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
                            width="100%"
                            height={306}
                            style={{ borderRadius: 10, objectFit: "cover" }}
                        />
                    </Stack>

                    <Box>
                        <CustomButton
                            title="Book Now"
                            backgroundColor="#475BE8"
                            color="#FCFCFC"
                            fullWidth
                        />
                    </Box>
                </Box>  

{/* END OF CONTENTS */}
                </Stack>            
          
              
            
            <Box  padding={3} sx={{ display: 'flex', flexDirection: 'row', pt: 2 } }>
            
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
      </Stack>
 
            </Box>
            </Grid>
            </Paper>
        </>
    );
};

export default PropertyDetails;
