export interface CustomButtonProps {
    type?: string;
    title: string;
    backgroundColor: string;
    color: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
}

export interface ProfileProps {
    type: string;
    Name: string;
    avatar: string;
    email: string;
    properties: Array | undefined;
    jobs: Array | undefined;
    emp: Array | undefined;
}

export interface PropertyProps {
    _id: string;
    name: string;
    email:string;
    gender:string;
    location:string;
    stats:string;
    result:string;
    age: string;
    photo: string;
}
export interface JobProps {
    _id: string;
    jobTitle: string;
    jobType: string;
    experience: string;
    Salary: string;
    location: string;
}
export interface EmpProps {
    _id: string;
    name:string;
    email:string;
    gender:string;
    location:string;
    age:string;
    photo:string;
    jobtitle:string;
}
export interface OffProps {
    _id: string;
    name:string;
    email:string;
    date:string;
    offStats:string;
    avatar:string;

}



export interface FormProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    handleImageChange: (file) => void;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
    propertyImage: { name: string; url: string };
}
export interface FormPropsJobs {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
}

