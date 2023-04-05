import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";
import { ArrowCircleUpRounded } from "@mui/icons-material";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";

const TotalRevenue = () => {
    return (
        <Box
            p={4}
            flex={1}
            bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
                Chart Graph
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
            
           
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}
            />
        </Box>
    );
};

export default TotalRevenue;
