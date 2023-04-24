import { EmailOutlined, Place} from "@mui/icons-material";
import { useGetIdentity } from "@refinedev/core";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { InfoBarProps, OffCardProp } from "interfaces/agent";

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

const OffCard = ({
    id,
    name,
    email,
    avatar,
    date,
    offStats,
}: OffCardProp) => {

    function date_TO_String(date_Object: Date): string {
        // get the year, month, date, hours, and minutes seprately and append to the string.
        let date_String: string =
          date_Object.getFullYear() +
          "/" +
          (date_Object.getMonth() + 1) +
          "/" +
          +date_Object.getDate() 
        return date_String;
      }
      let new_date: Date = new Date(date);
      // calling the date_TO_String function
      let date_string = date_TO_String(new_date);
      console.log("The date string is " + date_string);
    //=Custom date
     
    let OffDate: Date = new Date(date);
    // Use the toString() method
    let date_String: string = OffDate.toString();
      //=Raw Date
    
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
            
        },
        cursor: "pointer",
    }}
>      <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
<Typography fontSize={22} fontWeight={600} color="#11142d">
                {date_string}
            </Typography>
</Stack>
            

    <img
        src={
            checkImage(avatar)
                ? avatar
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
        }
        alt="user-off"
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
            Request for Time-Off : {date_String}
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
            <Typography fontSize={14} color="#808191">
            ID : {id}
            </Typography>
      
           <Typography fontSize={14} color="#808191">
            Status : {offStats}
            </Typography>
           
        </Stack>
    </Stack>
</Box>
  )
}

export default OffCard