import { Typography, Box, Stack, Paper, Grid } from "@mui/material";
import { useDelete,useUpdate, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import {
    ChatBubble,
    Delete,
    Edit,
    Phone,
    Place,
    Star,
} from "@mui/icons-material";
import { DeleteButton} from "@refinedev/mui";
import {useEffect } from "react";
import { CustomButton } from "components";
function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
import * as React from 'react';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
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
     const currentStage = propertyDetails.stats;

      const [activeStep, setActiveStep] = React.useState(0);
      const [skipped, setSkipped] = React.useState(new Set<number>());

      useEffect(() => {
        setActiveStep(currentStage + 1); // This will always use latest value of count
    }, [currentStage]);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (isCurrentUser) handleStageChange();
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep(activeStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
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

    const handleStageChange = () => {
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
                      let newSkipped = skipped;
                      if (isStepSkipped(activeStep)) {
                        newSkipped = new Set(newSkipped.values());
                        newSkipped.delete(activeStep);
                      }
                  
                      setActiveStep(activeStep + 1);
                      setSkipped(newSkipped);
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
         <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
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

      

              {/* CONTents */}

                    <Box sx={{ flex: '1 1 auto' }} mt="15px" padding={3}>
                        <Stack
                         flexWrap="wrap"
                         direction="row"
                         justifyContent="space-evenly"
                         alignItems="center"
                         spacing={2}
                        >
                            {/* FIRST COL */}
                            <Box>
                            <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11162D"
                                textTransform="capitalize"
                            >
                                Application in:{propertyDetails.jobTitleTarget}
                                
                            </Typography>
                            {[1, 2, 3, 4, 5].map((item) => (
                                    <Star
                                        key={`star-${item}`}
                                        sx={{ color: "#F2C94C" }}
                                    />
                                ))}
                                
                            </Box>

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

                            <Stack
                               mt={2}
                                direction="row"
                                alignItems="center"
                                gap={1}
                            >
                                <Place sx={{ color: "#808191" }} />
                                <Typography
                                  fontSize={16} color="#808191"
                                >
                                     {propertyDetails.location}
                                </Typography>
                            </Stack>

                                    <Typography mt={2}  fontSize={18} color="#11162D">
                                Description
                            </Typography>
                            <Typography fontSize={16} color="#808191">
                                {propertyDetails.description}
                            </Typography>
                         
                        <Stack
                            width="100%"
                           
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                        >
                                <CustomButton
                                title={!isCurrentUser ? "Message" : "Edit"}
                                backgroundColor=""
                                color="info"
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
                            
                
                       
                        </Stack>
                            </Box>
      {/*Right Col */}
              <Box
                    
                    mt={3}
                    width="100%"
                    flex={1}
                    maxWidth={326}
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                >

                                     

                <Stack
                    
                    width="100%"
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                   
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
                                    checkImage(propertyDetails.photo)
                                        ? propertyDetails.photo
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
                                    Candidate
                                </Typography>
                            </Box>

                            <Typography
                                mt={1}
                                fontSize={16}
                                fontWeight={600}
                                color="#11142D"
                            >
                                {propertyDetails.creator.allProperties.length}{" "}
                                Active application
                            </Typography>
                  
                        </Stack>
                        <Stack mt={1}>
                        <DeleteButton hideText={false} recordItemId={id} onSuccess={() => {
               navigate(
                // DELETE
                `/Applicants/`,  );      
            }} />
                        </Stack>
                      
                    </Stack>
                </Stack>  
            </Box>
        </Stack>             
     </Box>     
{/* END OF CONTENTS */}
     
<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      </Stack>
 
            </Box>
            </Grid>
            </Paper>
        </>
    );
};

export default PropertyDetails;
