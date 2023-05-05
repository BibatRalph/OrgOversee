import { useGetIdentity, useTable } from "@refinedev/core";
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
import { EmpCard, CustomButton } from "components";
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

    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });

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
{user.role === "Admin" ?  
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
                                placeholder="Name of the Employee"
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
                            
                            
            </Stack> 
{/* END OF TOP BAR */}
   {/* DATA CARDS */}
   <Grid mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 2 } }>
   {allEMP?.map((props) => (
                    <EmpCard
                        key={props._id}
                        id={props._id}
                        photo={props.photo}
                        name={props.name}
                        email={props.email}
                        gender={props.gender}
                        location={props.location}
                        age={props.age}
                        jobtitle={props.jobTitleTarget}
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
             : 
             <Grid item xs={16} md={12}> 
            <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
            <Typography variant="h5" >
                    You do not have access to this section        
            </Typography>

            <Typography
                                    mt="5px"
                                    fontSize={14}
                                    fontWeight={400}
                                    color="#808191"
                                >
                                      *Consult your hiring manager if you think this is a mistake
                                </Typography>
               
                
             </Stack>
             </Grid>
        }
          
        </Paper>
        </>
    );
};

export default allEmp;
