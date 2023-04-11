import { Place } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from "@mui/material";

import { JobCardProps } from "interfaces/property";

const JobCard = ({
    id, jobTitle, jobType, experience, Salary, location }: JobCardProps ) => {
  return (
    <Card
            component={Link}
            // CLICK
            to={`/Jobs/show/${id}`}
            sx={{
                maxWidth: "315px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.2)",
                    transform: "scale3d(1.05, 1.05, 3)"
                },
                cursor: "pointer",
            }}
            elevation={1}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                    paddingX: "50px",
                }}
            >
                <Stack direction="column" gap={1}>
                    <Typography fontSize={16} fontWeight={500} color="#11142d">
                        {jobTitle}
                    </Typography>
                    <Typography fontSize={16} fontWeight={300} color="#11142d">
                        {jobType}
                    </Typography>
                    <Typography fontSize={16} fontWeight={300} color="#11142d">
                        {experience}
                    </Typography>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Place
                            sx={{
                                fontSize: 18,
                                color: "#11142d",
                                marginTop: 0.5,
                            }}
                        />
                        <Typography fontSize={14} color="#808191">
                            {location}
                        </Typography>
                    </Stack>
                </Stack>
                
                    <Typography fontSize={16} fontWeight={300} color="primary">
                        ${Salary}
                    </Typography>
                
            </CardContent>
        </Card>
  )
}

export default JobCard