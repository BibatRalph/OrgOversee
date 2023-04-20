import { Link } from "react-router-dom";
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Stack,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PropertyCardProps } from "interfaces/property";
import { DeleteButton, EditButton } from "@refinedev/mui";

const ApplicantCard = ({
    id,
    photo,
    name,
    email,
    gender,
    location,
    stats,
    result,
    age,
}: PropertyCardProps) => {

    return (
        <Card
        component={Link}
        to={`/Applicants/show/${id}`}
            sx={{
                minWidth: "215px",
                maxWidth: "260px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
                    transform: "scale3d(1.05, 1.05, 3)"
                },
                cursor: "Pointer",
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
                       Email:{email}
                    </Typography>

                    {/* OTHER INFO */}
                    <Typography fontSize={12} fontWeight={500} color="#11142d" >
                       Gender:{gender}
                    </Typography>
                    <Typography fontSize={12} fontWeight={500} color="#11142d" >
                     Stage:{stats + 1}
                     
                    </Typography>
                    <Typography fontSize={12} fontWeight={500} color="#11142d" >
                     Process:{result}
                     
                    </Typography>
             
                    <Typography fontSize={12} fontWeight={500}  color="#11142d">
                          Location:{location}
                        </Typography>
                  
                
                </Stack>
            </CardContent>
        </Card>
        
    );
};

export default ApplicantCard;
