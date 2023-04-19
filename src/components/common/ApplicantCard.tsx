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

    const navigate = useNavigate();
    const OnBoardHandle = () => {
        navigate(
            // ONBOARD
            `/Employee/create/${id}`,
        );
      };
    const DetailsHandle = () => {
        navigate(
            `/Applicants/show/${id}`);    
         };

    return (
        <Card
            sx={{
                minWidth: "215px",
                maxWidth: "260px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
                    transform: "scale3d(1.05, 1.05, 3)"
                },
                cursor: "default",
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
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                        <Typography fontSize={14} color="#808191">
                          Location:{location}
                        </Typography>
                    </Stack>
                
                </Stack>
            </CardContent>
            <Stack
  direction="row"
  justifyContent="space-evenly"
  alignItems="center"
  spacing={2}
>
            <Button size="small" variant="outlined" color="primary" onClick={DetailsHandle}>Details</Button>
            <Button size="small" variant="outlined" color="primary" onClick={OnBoardHandle}>Onboard</Button>
           
       </Stack> 
        </Card>
        
    );
};

export default ApplicantCard;
