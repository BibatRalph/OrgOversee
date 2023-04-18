import { useState,useEffect } from "react";
import { useGetIdentity, useShow } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { FieldValues } from "react-hook-form";
import FormEmp from "components/common/FormEmp";

const createEmp = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });

    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
    } = useForm();

        //FETCH DATA from applicant to creating employee
        const { queryResult } = useShow();
        const { data, isLoading, isError } = queryResult;
        const Info = data?.data ?? {};

    const onFinishHandler = async (data: FieldValues) => {
 
        await onFinish({
            ...data,
            photo: Info.photo,
            email: user.email,
        });
    };

    return (
        <FormEmp
            type="Create"
            register={register}
            onFinish={onFinish}
            formLoading={formLoading}
            handleSubmit={handleSubmit}
            onFinishHandler={onFinishHandler}   
        />
    );
};
export default createEmp;
