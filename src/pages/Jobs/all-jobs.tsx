import { useTable } from "@refinedev/core";
import { CreateButton } from "@refinedev/mui";
import {
    Grid,
    Typography,
    Box,
    Stack,
    MenuItem,
    Paper, Select, TextField 
} from "@mui/material";
import { CustomButton } from "components";
import { useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import JobCard from "components/common/JobCard";
const allJobs = () => {
    const navitage = useNavigate();

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

  //If i dont have data, turn it into empty array so no error.
  const allData = data?.data ?? [];
  //SORT
   const currentPrice = sorter.find((item) => item.field === "Salary")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };

    //SEARCH and Filter
    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            title:
                logicalFilters.find((item) => item.field === "jobTitle")?.value || "",
                jobType:
                logicalFilters.find((item) => item.field === "jobType")?.value || "",
        };
    }, [filters]);


  //Front End State handling auto done by Refine
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
                     
<Typography variant="h5">
  Listed Jobs
</Typography>
{/* SEARCH BAR */}
<TextField
                                label="Search" variant="standard"
                                color="primary"
                                placeholder="Job Title"
                                size="small"
                                value={currentFilterValues.title}
                                onChange={(e) => {
                                    setFilters([
                                        {
                                            field: "jobTitle",
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
                            
                               <CreateButton
                                accessControl={{ enabled: true, hideIfUnauthorized: true }}
                                sx={{ marginBottom: "5px" }}
                            >
                               Create Job
                            </CreateButton>

                             <CustomButton
                                
                                title={`Sort Salary ${
                                    currentPrice === "asc" ? "↑" : "↓"
                                }`}
                                handleClick={() => toggleSort("Salary")}
                                backgroundColor="initial"
                                color="primary"
                               
                            />

   </Stack>
       {/* END OF TOP BAR */}

    {/* CARDS */}
   <Grid mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 2 } }>
                       
                                        {allData?.map((Jobs) => (
                    <JobCard
                        key={Jobs._id}
                        id={Jobs._id}
                        jobTitle={Jobs.jobTitle}
                        jobType={Jobs.jobType}
                        experience={Jobs.experience}
                        Salary={Jobs.Salary}
                        location={Jobs.location}
                     
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
{allData.length > 0 && (
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
   
  )
}

export default allJobs