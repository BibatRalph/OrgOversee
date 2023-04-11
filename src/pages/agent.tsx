import { useList } from "@refinedev/core";
import { Box, Stack, Paper, Grid ,Typography } from "@mui/material";

import { AgentCard } from "components";

const Agents = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allAgents = data?.data ?? [];

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
                backgroundColor: "#fcfcfc",
            }}
        >
            {allAgents.map((agent) => (
                <AgentCard
                    key={agent._id}
                    id={agent._id}
                    name={agent.name}
                    email={agent.email}
                    avatar={agent.avatar}
                    noOfApps={agent.allProperties.length}
                    noOfJobs={agent.allJobs.length}
                />
            ))}
        </Box>
    </Grid>
    </Paper>
    </>
        
      

    
    
    );
};

export default Agents;
