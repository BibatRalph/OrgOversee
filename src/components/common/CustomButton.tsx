import { Button } from "@mui/material";

import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({
    type,
    title,
    backgroundColor,
    color,
    fullWidth,
    icon,
    handleClick,
    disabled,
    
    
}: CustomButtonProps) => {
    return (
        <Button
            disabled={disabled}
            
            type={type === "submit" ? "submit" : "button"}
            
            sx={{
                size: "small",
                flex: fullWidth ? 1 : "unset",
                padding: "10px 15px",
                width: fullWidth ? "100%" : "fit-content",
                minWidth: 130,        
                gap: "10px",
                color,
                backgroundColor,
                textTransform: "capitalize",
                "&:hover": {
                    opacity: 0.9,
                    backgroundColor,
                },
            }}
            onClick={handleClick} 
        >
            {icon}
            {title}
            
        </Button>
    );
};

export default CustomButton;
