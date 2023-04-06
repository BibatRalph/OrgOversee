import { Paper } from '@mui/material'
import { CreateButton } from "@refinedev/mui";
import {
    Grid,
    Typography,
    InputBase,
    IconButton,
    Stack,
    Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const allJobs = () => {
  return (
    <>
     <Paper
    sx={{
        paddingX: { xs: 3, md: 2 },
        paddingY: { xs: 2, md: 3 },
        my: 0.5,
    }}
> 

<Grid container columns={16}>
<Grid item xs={16} md={12}>


         <Stack
                            display="flex"
                            justifyContent="space-between"
                            alignItems="baseline"
                            flexWrap="wrap"
                            padding={1}
                            direction="row"
                            gap={2}
                        >
                     
<Typography variant="h5">
  Jobs
</Typography>
                            {/* Create */}
                            <CreateButton
                                
                                variant="outlined"
                                sx={{ marginBottom: "5px" }}
                            >
                               Create Job
                            </CreateButton>
{/* SEARCH BAR */}
<Paper
                                component="form"
                                sx={{
                 
                     
                                    alignItems: "center",
                                    width: 400,
                                }}
                            >
                                <IconButton
                                    type="submit"
                                    sx={{ p: "10px" }}
                                    aria-label="search"
                                >
                                    <SearchIcon />
                                </IconButton>
        </Paper>
          </Stack>
          {/* END OF TOP BAR */}
          <Grid container>
                        
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
                        {/* PAGE */}
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
  </Grid>
  <Grid
                        item
                        sm={0}
                        md={4}
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                    >
                        <Stack padding="8px">
                            <Typography variant="subtitle1">
                              Filter
                            </Typography>
                        </Stack>
                    </Grid>
  </Grid>
</Paper>
    </>
   
  )
}

export default allJobs