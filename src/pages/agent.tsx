import { useList } from "@refinedev/core";
import { Box, Stack, Paper, Grid ,Typography } from "@mui/material";

import { AgentCard } from "components";

const Agents = () => {
    const { data, isLoading, isError } = useList({ resource: "users" });

    const allData = data?.data ?? [];

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
               
            }}
        >
            {allData.map((props) => (
                <AgentCard
                    key={props._id}
                    id={props._id}
                    name={props.name}
                    email={props.email}
                    avatar={props.avatar}
                    noOfApps={props.allProperties.length}
                    noOfJobs={props.allJobs.length}
                    noOfEmp={props.allEmp.length}
                />
            ))}
        </Box>
    </Grid>
    </Paper>
    </>
    );
};

export default Agents;
