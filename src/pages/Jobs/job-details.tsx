import { Typography, Box, Stack,Paper,
  Grid,
 } from "@mui/material";
import { useGetIdentity, useShow ,useCreate } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import {
    Edit,
    Place,
} from "@mui/icons-material";
import { CustomButton } from "components";
import { DeleteButton } from "@refinedev/mui";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

//Check IMG
function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const jobDetails = () => {

  const navigate = useNavigate();
  const { data: user } = useGetIdentity({
      v3LegacyAuthProviderCompatible: true,
  });
  const { queryResult } = useShow();
  const { mutate } = useCreate();
  const { id } = useParams();
  
  const { data, isLoading, isError } = queryResult;

  const jobDetails = data?.data ?? {};

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (isError) {
      return <div>Something went wrong!</div>;
  }

  const isCurrentUser = user.email === jobDetails.creator.email;

  
  
// CREATE APPLICANTS
  const handleApplyJob = () => {
    const response = confirm(
        "Are you sure you want to Apply for this Job?",
    );
    if (response) {
        mutate(
            {
                resource: "Applicants",
               
                values: {
                    // REQ
                    email: user.email, // applicant email
                    jobID: jobDetails._id, // job id 
                    name: user.name, // applicant name
                    userID: user._id, // ID
                    jobTitleTarget: jobDetails.jobTitle, // job title
                    jobDepartmentTarget : jobDetails.department, // job dep
                    jobLocationTarget : jobDetails.location, // job loc
                    jobOwner: jobDetails.creator // jobOwner


                },
            },
            {
                onSuccess: () => {
                    navigate("/Jobs");
                },
            },
        );
    }
};


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
      {/* CONTENTs */}  
            <Box
                mt={1}
     
                gap={4}
                
            > 
              {/* First col */}
                <Box 
                   border="1px solid #E4E4E4"
                   borderRadius={1}
                    sx={{
                      paddingX: { xs: 3, md: 2 },
                      paddingY: { xs: 2, md: 3 },
                      my: 0.5,
                  }}
                >             
<Stack
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
  spacing={4}

>
                              <Typography
                                  fontSize={28}
                                  fontWeight={1000}
                                  color="#11142D"
                                  textTransform="capitalize"
                                  
                              >
                                {jobDetails.jobTitle}
                              </Typography>

  </Stack>
  <Stack
           mt={3}
           direction="row"
           justifyContent="flex-start"
           alignItems="stretch"
           spacing={1}   
>
                            <Typography
                                fontSize={18}
                                fontWeight={1000}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               What's the job all about?
                               <Typography fontSize={16} color="#808191"mt={1} >
                              Job Description : {jobDetails.description}
                            </Typography>
                            </Typography>
                            </Stack>    
         {/* MAIN DETAILS */}
             
<Stack
           mt={3}
           direction="row"
           justifyContent="space-around"
             alignItems="stretch"
           
>
<Typography
                                fontSize={18}
                                fontWeight={1000}
                                color="#11142D"
                                textTransform="capitalize"
                                
                            >
                               Job details:
                               <Typography fontSize={16} color="#808191"mt={1}>
                               Job Type : {jobDetails.jobType}
                            </Typography>
                    
                            <Typography fontSize={16} color="#808191"mt={1}>
                               Department : {jobDetails.department}
                            </Typography>
                            <Typography fontSize={16} color="#808191"mt={1}>
                               Job Location : {jobDetails.location}
                            </Typography>
                            <Typography fontSize={16} color="#808191"mt={1}>
                              Required Experience :{jobDetails.experience}
                            </Typography>
                            </Typography>

<Typography
                                fontSize={18}
                                fontWeight={1000}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               Job offers:
                         
                               <Typography fontSize={16} color="#808191"mt={1}>
                               Monthly Salary : ${jobDetails.Salary}
                            </Typography>
                            </Typography>

                            </Stack>
 {isCurrentUser?
     <Stack direction="row"
  justifyContent="flex-end"
  alignItems="flex-end"
  spacing={2}>

     <DeleteButton 
                 confirmTitle="Close this Job posting?"
                 confirmOkText="Yes"
                 confirmCancelText="Cancel"
     hideText={false} recordItemId={id} onSuccess={() => {
               navigate(
                // DELETE
                `/Jobs/`,  );      
            }} />
     </Stack>
     :
     <Stack>
        
     </Stack> 
     }
                     
                </Box>   
                
         

            </Box>
       
                    {/* APPLY JOB */}
                    <Box mt={3}>
                        <CustomButton
                            disabled={!isCurrentUser ? false : true }
                            title={!isCurrentUser ? "Apply" : "You created this, Job cannot apply" }
                            backgroundColor={!isCurrentUser ? "#67be23" : "#FCFCFC" }
                            color="#FCFCFC"
                            fullWidth
                            handleClick={() => {
                                 handleApplyJob();
                            }}
                        />
                    </Box>
                    
                  
                <Box
                    
                    mt={3}
                    width="100%"
                    flex={1}
                    maxWidth={326}
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                >
                    
                     {/* Creator Box */}
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
                          {/* BOX HELPER */}
                               <Typography
                         
                         fontSize={18}
                         fontWeight={600}
                         color="#11142D"
                     >
                         Who created this job?
                     </Typography>
                     {/* AVATAR */}
                          <Box mt="15px">
                          <img
                            
                            src={
                                checkImage(jobDetails.creator.avatar)
                                    ? jobDetails.creator.avatar
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
                          </Box>
                            <Box mt="15px">
                                <Typography
                                    fontSize={18}
                                    fontWeight={600}
                                    color="#11142D"
                                >
                                    {jobDetails.creator.name}
                                </Typography>
                                <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                    Talent
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
                                    My Location
                                </Typography>
                            </Stack>
                            <Typography
                                mt={1}
                                fontSize={16}
                                fontWeight={600}
                                color="#11142D"
                            >
                                {jobDetails.creator.allJobs.length}{" "}
                                Job Posts
                            </Typography>
                            
                        </Stack>
                        <Stack
                            width="100%"
                            direction="row"
                            flexWrap="wrap"
                            gap={2}
                            mt={1}
                        >
                              
                            <CustomButton
                                title={!isCurrentUser ? "PROFILE" : "EDIT"}
                                backgroundColor=""
                                color="info"
                                fullWidth
                                icon={
                                    !isCurrentUser ? <PersonSearchIcon /> : <Edit />
                                }
                                handleClick={() => {
                                    if (isCurrentUser) {
                                        navigate(
                                            // EDIT
                                            `/Jobs/edit/${jobDetails._id}`,
                                        );
                                    }
                                    else
                                    {
                                        navigate(
                                            // EDIT
                                            `/Talents/show/${jobDetails.creator._id}`,
                                        );
                                    }}} 
                            /> 
                     
                        </Stack>
                    </Stack>

                
                </Box>
</Grid>

</Paper>

</>
              
  )
}

export default jobDetails