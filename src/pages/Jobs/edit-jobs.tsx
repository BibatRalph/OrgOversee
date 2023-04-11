import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import FormJob from "components/common/FormJob";

const editJobs = () => {
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
    <FormJob
    type="Edit"
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    onFinishHandler={onFinishHandler}
/>
  )
}

export default editJobs