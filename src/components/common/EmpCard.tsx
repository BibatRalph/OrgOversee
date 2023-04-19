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

import { EMPCardProps } from "interfaces/property";

const EmpCard = ({
    id,
    photo,
    name,
    email,
    gender,
    location,
    age,
}: EMPCardProps) => {
    return (
        <Card
            component={Link}
            // CLICK
            to={`/Employee/show/${id}`}
            sx={{
                minWidth: "215px",
                maxWidth: "260px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
                    transform: "scale3d(1.05, 1.05, 3)"
                },
                cursor: "pointer",
            }}
            elevation={1}
        >
            <CardMedia
                component="img"
                width="100%"
                height={210}
                image={photo}
                alt="Photo"
                sx={{ borderRadius: "10px" }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                    
                }}
            >
                <Stack direction="column" gap={1} >
                <Stack direction="row" gap={0.5} alignItems="flex-start">
                <Typography fontSize={16} fontWeight={500} color="#11142d" >
                            {name}
                        </Typography>
                        <Typography fontSize={12} fontWeight={600} color="primary">
                        {age}
                    </Typography>
                    </Stack>
                    
                    <Typography fontSize={12} fontWeight={500} color="#11142d" >
                        {email}
                    </Typography>

                    {/* OTHER INFO */}
                    <Typography fontSize={12} fontWeight={500} color="#11142d" >
                        {gender}
                    </Typography>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Typography fontSize={14} color="#808191">
                            {location}
                        </Typography>
                    </Stack>
                    
                </Stack>
                
            </CardContent>
        </Card>
    );
};

export default EmpCard;
