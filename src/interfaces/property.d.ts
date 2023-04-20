import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    title: string;
    description: string;
    propertyType: string;
    location: string;
    price: number | undefined;
}

export interface PropertyCardProps {
    id?: BaseKey | undefined;
    name: string;
    email:string;
    gender:string;
    location:string;
    stats:string;
    result:string;
    age: string;
    photo: string;
}
export interface EMPCardProps {
    id?: BaseKey | undefined;
    name: string;
    email:string;
    gender:string;
    location:string;
    age: string;
    photo: string;
    jobtitle: string;
}

export interface JobCardProps {
    id?: BaseKey | undefined;
    jobTitle: string;
    jobType: string;
    experience: string;
    Salary: string;
    location: string;
}