import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { OrgSL, OrgLOGO } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={OrgSL} alt="OrgOversee" width="45px" />
                ) : (
                    <img src={OrgSL} alt="OrgOversee" width="100px"/>
                )}
            </Link>
        </Button>
    );
};
