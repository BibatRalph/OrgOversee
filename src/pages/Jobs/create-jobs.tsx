import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import FormJob from "components/common/FormJob";
import { Grid, Stack, Typography } from "@mui/material";

const createJobs = () => {
  //GET all user info
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
});
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
} = useForm();

const onFinishHandler = async (data: FieldValues) => {
  await onFinish({
      ...data,
      email: user.email,
  });
};

  return (
    <>
  
    {user.role === "Admin" ?  
 <FormJob 
 type="Create"
 register={register}
 onFinish={onFinish}
 formLoading={formLoading}
 handleSubmit={handleSubmit}
 onFinishHandler={onFinishHandler}
 ></FormJob> : 
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
 </>
  )
}

export default createJobs