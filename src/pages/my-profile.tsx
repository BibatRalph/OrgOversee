import { useGetIdentity, useOne } from "@refinedev/core";
import { Profile } from "components";

const MyProfile = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: user?._id,
    });

    const myProfile = data?.data ?? [];
    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="My"
            Name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
            jobs={myProfile.allJobs}
            emp={myProfile.allEmp}

        />
    );
};

export default MyProfile;
