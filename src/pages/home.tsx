import { useList } from "@refinedev/core";
import { Typography, Box, Stack, Paper } from "@mui/material";

import {
    PieChart,
    TotalRevenue,
    ApplicantCard,
} from "components";

const Home = () => {
    const { data, isLoading, isError } = useList({
        resource: "Applicants",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestApplicant = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box >
            
            <Typography fontSize={25} fontWeight={600} >
                Welcome Back Overseer
            </Typography>
           
         

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="New Applicants"
                    value={15}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="New Jobs"
                    value={10}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total Employees"
                    value={3}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Pending Time-Off"
                    value={0}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
              
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Recent Applicants
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestApplicant.map((property) => (
                        <ApplicantCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
