import { Box, Stack, Paper, Grid ,Typography, Select, MenuItem } from "@mui/material";
import { CreateButton } from "@refinedev/mui";
import { useList, useTable } from "@refinedev/core";
import OffCard from "components/agent/OffCard";
import { useMemo } from "react";

const PendingOff = () => {

  const {
    tableQueryResult: { data, isLoading, isError },
    filters,
    setFilters,
} = useTable();

    const allOffPending = data?.data ?? [];

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
        "field" in item ? item : [],
    );

    return {
        propsType:
            logicalFilters.find((item) => item.field === "offStats")
                ?.value || "Pending",
    };
}, [filters]);

if (isLoading) return <div>loading...</div>;
if (isError) return <div>error...</div>;
  return (
    <>
    <Paper
sx={{
  paddingX: { xs: 3, md: 1 },
  paddingY: { xs: 2, md: 3 },
  my: 0.5,
}}
> 

<Grid item xs={16} md={12}  >
   {/* TOP BAR */}
         <Stack
                            display="flex"
                            justifyContent="space-between"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={3}
                            direction="row"
                            gap={2}
                        >
                     
<Typography variant="h5">
Pending Time-Off
</Typography>
<CreateButton></CreateButton>
<Select
                                variant="outlined"
                                color="primary"
                                displayEmpty
                                required
                                size="small"
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="1"
                                value={currentFilterValues.propsType}
                                onChange={(e) => {
                                    setFilters(
                                        [
                                            {
                                                field: "offStats",
                                                operator: "eq",
                                                value: e.target.value,
                                            },
                                        ],
                                        "replace",
                                    );
                                }}
                            >
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Approved">Approved</MenuItem>
                            </Select>    
</Stack>
{/* CONTENT */}
<Box
        mt="20px"
        sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
        }}
    >
        {allOffPending.map((props) => (
                <OffCard
                    key={props._id}
                    id={props._id}
                    name={props.name}
                    date={props.date}
                    email={props.email}
                    avatar={props.avatar}
                    offStats={props.offStats}
                />
            ))}
      
      
    </Box>
</Grid>
</Paper>
</>
  )
}

export default PendingOff