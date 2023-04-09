import { Paper, Select, TextField } from '@mui/material'
import { CreateButton } from "@refinedev/mui";
import {
    Grid,
    Typography,
    InputBase,
    IconButton,
    Stack,
    Pagination,
} from "@mui/material";
import { ApplicantCard, CustomButton } from "components";
import { useNavigate } from 'react-router-dom';
const allJobs = () => {
    const navitage = useNavigate();
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
                                placeholder="Name of the Applicant"
                                size="small"
                          
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
                                
                                variant="outlined"
                                sx={{ marginBottom: "5px" }}
                            >
                               Create Job
                            </CreateButton>
                            <CreateButton
                                
                                variant="outlined"
                                sx={{ marginBottom: "5px" }}
                            >
                               Sort
                            </CreateButton>
                            <Select
                             size="small"
                             >

                            </Select>
                        

   </Stack>
       {/* END OF TOP BAR */}

    {/* CARDS */}
   <Grid mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 2 } }>
                            <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        xl={3}
                                      
                                        sx={{ padding: "8px" }}
                                    >
                                      CARD LIST
                                    </Grid>
                  
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
      <Pagination
                            
                            variant="outlined"
                            color="primary"
                            shape="rounded"
                            sx={{
                                display: "flex",
                                justifyContent: "end",
                                paddingY: "20px",
                            }}
                            onChange={(
                                event: React.ChangeEvent<unknown>,
                                page: number,
                            ) => {
                                event.preventDefault();
                            
                            }}
                        />
       </Stack>
  </Grid>
  
</Paper>
    </>
   
  )
}

export default allJobs