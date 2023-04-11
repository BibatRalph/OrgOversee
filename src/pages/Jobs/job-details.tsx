import { Typography, Box, Stack,Paper,
  Grid,
 } from "@mui/material";
import { useDelete, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import {
    ChatBubble,
    Delete,
    Edit,
    Phone,
    Place,
    Star,
} from "@mui/icons-material";
import { CustomButton } from "components";


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
  const { mutate } = useDelete();
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

  const handleDeleteProperty = () => {
    const response = confirm(
        "Are you sure you want to delete this Job?",
    );
    if (response) {
        mutate(
            {
                resource: "Jobs",
                id: id as string,
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
                display="flex"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={4}
                
            > 
              {/* First col */}
                <Box flex={1} maxWidth={1450}
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
         {/* MAIN DETAILS */}
         <Stack
           mt={3}
           direction="row"
           justifyContent="space-evenly"
           alignItems="stretch"
           spacing={3}
           
>

                            <Typography
                                fontSize={18}
                                fontWeight={1000}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               What's the job all about?
                               <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                              Job Description : {jobDetails.description}
                            </Typography>
                            </Typography>
                            </Stack>
                            {/* OTHERS */}
<Stack
           mt={3}
           direction="row"
           justifyContent="space-around"
             alignItems="stretch"
           spacing={3}
           
>
<Typography
                                fontSize={18}
                                fontWeight={1000}
                                color="#11142D"
                                textTransform="capitalize"
                                
                            >
                               Job details?
                               <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11142D"
                                textTransform="capitalize"
                                
                            >
                               Job Type : {jobDetails.jobType}
                            </Typography>
                    
                              <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               Department : {jobDetails.department}
                            </Typography>
                            <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               Job Location : {jobDetails.location}
                            </Typography>
                            <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                              Required Experience :{jobDetails.experience}
                            </Typography>
                            </Typography>

<Typography
                                fontSize={18}
                                fontWeight={1000}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               Job offers?
                         
                               <Typography
                                fontSize={18}
                                fontWeight={500}
                                color="#11142D"
                                textTransform="capitalize"
                            >
                               Monthly Salary : ${jobDetails.Salary}
                            </Typography>
                            </Typography>

                            </Stack>
                   
                </Box>   
                
           {/* Right Col */}
                <Box
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
                                    North Carolina, USA
                                </Typography>
                            </Stack>

                            <Typography
                                mt={1}
                                fontSize={16}
                                fontWeight={600}
                                color="#11142D"
                            >
                                {jobDetails.creator.allProperties.length}{" "}
                                Applicants
                            </Typography>
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
                                            `/Jobs/edit/${jobDetails._id}`,
                                        );
                                    }
                                }}
                            />
                            <CustomButton
                                title={!isCurrentUser ? "Call" : "Delete"}
                                backgroundColor={
                                    !isCurrentUser ? "" : ""
                                }
                                color="#d42e2e"
                                fullWidth
                                icon={!isCurrentUser ? <Phone /> : <Delete />}
                                handleClick={() => {
                                    if (isCurrentUser) handleDeleteProperty();
                                }}
                            />
                        </Stack>
                    </Stack>

                
                </Box>
                
            </Box>
            <Stack mt={3}>
                        <img
                            src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
                            width="100%"
                            height={250}
                            style={{ borderRadius: 10, objectFit: "cover" }}
                        />
                    </Stack>

                    <Box mt={3}>
                        <CustomButton
                            title="Apply"
                            backgroundColor="#475BE8"
                            color="#FCFCFC"
                            fullWidth
                        />
                    </Box>
</Grid>

</Paper>
</>
              
  )
}

export default jobDetails