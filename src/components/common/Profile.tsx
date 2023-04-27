import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Stack, Typography,Grid,Paper} from "@mui/material";

import { EmpProps, JobProps, ProfileProps, PropertyProps } from "interfaces/common";
import ApplicantCard from "./ApplicantCard";
import JobCard from "./JobCard";
import EmpCard from "./EmpCard";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, Name, avatar, email, properties,jobs,emp}: ProfileProps) => (
    <>
    <Paper
sx={{
  paddingX: { xs: 3, md: 1 },
  paddingY: { xs: 2, md: 3 },
  my: 0.5,
}}
> 

<Grid item xs={16} md={12}  >
   {/* TOP BAR */}
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
{type} Profile
</Typography>
</Stack>
{/* CONTENT */}
<Box mt="20px" borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2.5,
                }}
            >
                <img
                    src={
                        checkImage(avatar)
                            ? avatar
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    }
                    width={340}
                    height={320}
                    alt="Picture"
                    className="my_profile-bg"
                />
                <Box
                    flex={1}
                    sx={{
                        marginTop: { md: "58px" },
                        marginLeft: { xs: "20px", md: "0px" },
                    }}
                >
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        gap="20px"
                    >
                     

                        <Box
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            gap="30px"
                        >
                            <Stack direction="column">
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    color="#11142D"
                                >
                                    {Name}
                                </Typography>
                                <Typography fontSize={16} color="#808191">
                                Talent acquisition specialist
                                </Typography>
                            </Stack>

                            <Stack direction="column" gap="30px">
                                <Stack gap="15px">
                                    <Typography
                                        fontSize={14}
                                        fontWeight={500}
                                        color="#808191"
                                    >
                                        Address
                                    </Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        gap="10px"
                                    >
                                        <Place sx={{ color: "#11142D" }} />
                                        <Typography
                                            fontSize={14}
                                            color="#11142D"
                                        >
                                           Metro Manila, Philippines
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap="20px"
                                    pb={4}
                                >
                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="#808191"
                                        >
                                            Phone Number
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Phone sx={{ color: "#11142D" }} />
                                            <Typography
                                                fontSize={14}
                                                color="#11142D"
                                                noWrap
                                            >
                                                +0123 456 7890
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="#808191"
                                        >
                                            Email
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Email sx={{ color: "#11142D" }} />
                                            <Typography
                                                fontSize={14}
                                                color="#11142D"
                                            >
                                                {email}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
      
        {properties.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                    {type} Application
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {properties?.map((props: PropertyProps) => (
                        <ApplicantCard
                        key={props._id}
                        id={props._id}
                        photo={props.photo}
                        name={props.name}
                        email={props.email}
                        gender={props.gender}
                        location={props.location}
                        stats={props.stats}
                        result={props.result}
                        age={props.age}
                        />
                    ))}
                </Box>
            </Box>
        )}
        {/* All jobs */}
             {jobs.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                    {type} Jobs
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {jobs?.map((props: JobProps) => (
                        <JobCard
                            key={props._id}
                            id={props._id}
                            jobTitle={props.jobTitle}
                            experience={props.experience}
                            Salary={props.Salary}
                            location={props.location} 
                            jobType={props.jobType}                       
                             />
                    ))}
                </Box>
            </Box>
        )}
         {/* All EMP */}
         {emp.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                    {type} Employees
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {emp?.map((props: EmpProps) => (
                        <EmpCard 
                        key={props._id}
                        id={props._id}
                        name={props.name} 
                        email={props.email} 
                        gender={props.gender} 
                        location={props.location} 
                        age={props.age} 
                        photo={props.photo} 
                        jobtitle={props.jobtitle}                           
                                             
                             />
                    ))}
                </Box>
            </Box>
        )}
            
                   
               
          
    </Box>

</Grid>
</Paper>
</>
    
       

       
);

export default Profile;
