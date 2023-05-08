import { useGetIdentity, useList } from "@refinedev/core";
import { Box, Stack, Paper, Grid ,Typography } from "@mui/material";

import { AgentCard } from "components";

const Agents = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allData = data?.data ?? [];

    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });


    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <>
        <Paper
    sx={{
      paddingX: { xs: 3, md: 1 },
      paddingY: { xs: 2, md: 3 },
      my: 0.5,
    }}
    > 
    {user.role === "Admin" ?  

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
    List of Talents
    </Typography>
    </Stack>
    {/* CONTENT */}
    <Box
            mt="20px"
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
               
            }}
        >
            {allData.map((props) => (
                <AgentCard
                    key={props._id}
                    id={props._id}
                    name={props.name}
                    email={props.email}
                    avatar={props.avatar}
                    role={props.role}
                    noOfApps={props.allProperties.length}
                    noOfJobs={props.allJobs.length}
                    noOfEmp={props.allEmp.length}
                />
            ))}
        </Box>
    </Grid>
    : 
             <Grid item xs={16} md={12}> 
            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
            <Typography variant="h5" >
                    You do not have access to this section        
            </Typography>

            <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                      *Consult your hiring manager if you think this is a mistake
                                </Typography>
               
                
             </Stack>
             </Grid>
        }
    </Paper>
    </>
    );
};

export default Agents;
