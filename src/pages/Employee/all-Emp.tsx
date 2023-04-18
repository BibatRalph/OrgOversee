import { useTable } from "@refinedev/core";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
    Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { ApplicantCard, CustomButton } from "components";
//NEW UI
import { Paper } from '@mui/material'

const allEmp = () => {
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable();

    //GET data from refine
    const allEMP = data?.data ?? [];

    //Additional features
    const currentPrice = sorter.find((item) => item.field === "age")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            title:
                logicalFilters.find((item) => item.field === "name")?.value ||
                "",
            propsType:
                logicalFilters.find((item) => item.field === "stats")
                    ?.value || "",
        };
    }, [filters]);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error...</Typography>;

    return (
        <>
          <Paper
    sx={{
        paddingX: { xs: 3, md: 2 },
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
                            padding={2}
                            direction="row"
                            gap={2}
         >
            <Typography variant="h5" >
                                    {!allEMP.length
                                        ? "There are no Employees"
                                        : "Employees"}
            </Typography>   
      
         
                <TextField
                                label="Search" variant="standard"
                                color="primary"
                                placeholder="Name of the Applicant"
                                size="small"
                                value={currentFilterValues.title}
                                onChange={(e) => {
                                    setFilters([
                                        {
                                            field: "name",
                                            operator: "contains",
                                            value: e.currentTarget.value
                                                ? e.currentTarget.value
                                                : undefined,
                                        },
                                    ]);
                                }}
                            />
                         
        </Stack>
          {/* 2nd TOP BAR*/}
        <Stack
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={2}
                            direction="row"
                            gap={2}
         >
            
            <CustomButton
                                
                                title={`Sort Age ${
                                    currentPrice === "asc" ? "↑" : "↓"
                                }`}
                                handleClick={() => toggleSort("age")}
                                backgroundColor="initial"
                                color="primary"
                               
                            />
                            
                        
                            <Select
                                variant="outlined"
                                color="primary"
                                displayEmpty
                                required
                                size="small"
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                value={currentFilterValues.propsType}
                                onChange={(e) => {
                                    setFilters(
                                        [
                                            {
                                                field: "stats",
                                                operator: "eq",
                                                value: e.target.value,
                                            },
                                        ],
                                        "replace",
                                    );
                                }}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="0">Open</MenuItem>
                                <MenuItem value="1">Contacted</MenuItem>
                                <MenuItem value="2">Evaluated</MenuItem>
                                <MenuItem value="3">Completed</MenuItem>
                            </Select>    
                            
            </Stack> 
{/* END OF TOP BAR */}
   {/* DATA CARDS */}
   <Grid mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 2 } }>
   {allEMP?.map((props) => (
                    <ApplicantCard
                        key={props._id}
                        id={props._id}
                        photo={props.photo}
                        name={props.name}
                        email={props.email}
                        gender={props.gender}
                        location={props.location}
                        stats={props.stats}
                        result={props.result}
                        age={props.age}
                   
                     
                    />
                ))}
                
           </Grid>
           {/* PAGANATION */}
           <Stack
                            display="flex"
                            justifyContent="center"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={1}
                            direction="row"
                            gap={2}
         >
{allEMP.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    <CustomButton
                    
                        title="Previous"
                        handleClick={() => setCurrent((prev) => prev - 1)}
                        backgroundColor="initial"
                        color="primary"
                        disabled={!(current > 1)}
                    />
                    <Box
                        display={{ xs: "hidden", sm: "flex" }}
                        alignItems="center"
                        gap="5px"
                    >
                        Page{" "}
                        <strong>
                            {current} of {pageCount}
                        </strong>
                    </Box>
                    <CustomButton
                        title="Next"
                        handleClick={() => setCurrent((prev) => prev + 1)}
                        backgroundColor="initial"
                        color="primary"
                        disabled={current === pageCount}
                    />
                    <Select
                        size="small"
                        variant="outlined"
                        color="primary"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue={10}
                        onChange={(e) =>
                            setPageSize(
                                e.target.value ? Number(e.target.value) : 10,
                            )
                        }
                    >
                        {[10, 20, 30, 40, 50].map((size) => (
                            <MenuItem key={size} value={size}>
                                Show {size}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            )}
            </Stack>
            </Grid>
            
          
        </Paper>
        </>
    );
};

export default allEmp;
