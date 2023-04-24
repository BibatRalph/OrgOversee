import { EmailOutlined, Place} from "@mui/icons-material";
import { useGetIdentity } from "@refinedev/core";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const InfoBar = ({ icon, name }: InfoBarProps) => (
    <Stack
        flex={1}
        minWidth={{ xs: "100%", sm: 300 }}
        gap={1.5}
        direction="row"
    >
        {icon}
        <Typography fontSize={14} color="#808191">
            {name}
        </Typography>
    </Stack>
);

const AgentCard = ({
    id,
    name,
    email,
    avatar,
    noOfApps,
    noOfJobs,
}: AgentCardProp) => {
    const { data: currentUser } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });

    const generateLink = () => {
        if (currentUser.email === email) return "/my-profile";

        return `/Talents/show/${id}`;
    };

    return (
        <Box
            component={Link}
            to={generateLink()}
            width="100%"
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
                padding: "20px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.2)",
                    transform: "scale3d(1.01, 1.01, 1)"
                    
                },
                cursor: "pointer",
            }}
        >
            <img
                src={
                    checkImage(avatar)
                        ? avatar
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                }
                alt="user"
                width={90}
                height={90}
                style={{ borderRadius: 100, objectFit: "cover" }}
            />
            <Stack
                direction="column"
                justifyContent="space-between"
                flex={1}
                gap={{ xs: 4, sm: 2 }}
            >
                <Stack
                    gap={2}
                    direction="row"
                    flexWrap="wrap"
                    alignItems="center"
                >
                    <Typography fontSize={22} fontWeight={600} color="#11142d">
                        {name}
                    </Typography>
                    <Typography fontSize={14} color="#808191">
                    Talent acquisition specialist
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                >
                    <InfoBar
                        icon={<EmailOutlined sx={{ color: "#808191" }} />}
                        name={email}
                    />
                    <InfoBar
                        icon={<Place sx={{ color: "#808191" }} />}
                        name="Philippines"
                    />
                    <InfoBar
                        icon={<PersonAddAltOutlinedIcon sx={{ color: "#808191" }} />}
                        name={`${noOfApps} Application Created`}
                    />
                     <InfoBar
                        icon={<WorkOutlineOutlinedIcon sx={{ color: "#808191" }} />}
                        name={`${noOfJobs} Jobs Posted`}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default AgentCard;
