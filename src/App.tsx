import {
    Refine,
    LegacyAuthProvider as AuthProvider,
} from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    ReadyPage,
    ErrorComponent,
} from "@refinedev/mui";
import { CssBaseline, GlobalStyles } from "@mui/material";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";
import axios, { AxiosRequestConfig } from "axios";
import { Title, Sider, Layout, Header } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import {
    Login,
    Home,
    Agents,
    MyProfile,
    PropertyDetails,AllProperties,CreateProperty,EditProperty,
    AgentProfile,
    editJobs,createJobs,allJobs,jobDetails,
    createEmp,allEmp,editEmp,EmpDetails,
    PendingOff,ApproveOff,CreateOff,PendingOffDetails,
} from "pages";

//ICONS
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {
    AccountCircleOutlined,
    PeopleAltOutlined,
} from "@mui/icons-material";
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';



const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});

function App() {
    const authProvider: AuthProvider = {
        login: async ({ credential }: CredentialResponse) => {
            const profileObj = credential ? parseJwt(credential) : null;

            //Login MAIN
            if (profileObj) {
                const response = await fetch(
                    "http://localhost:8080/api/v1/users",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: profileObj.name,
                            email: profileObj.email,
                            avatar: profileObj.picture,
                        }),
                    },
                );

                const data = await response.json();

                if (response.status === 200) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify({
                            ...profileObj,
                            avatar: profileObj.picture,
                            userid: data._id,
                        }),
                    );
                } else {
                    return Promise.reject();
                }
            }
            localStorage.setItem("token", `${credential}`);

            return Promise.resolve();
        },
        logout: () => {
            const token = localStorage.getItem("token");

            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios.defaults.headers.common = {};
                window.google?.accounts.id.revoke(token, () => {
                    return Promise.resolve();
                });
            }

            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: async () => {
            const token = localStorage.getItem("token");

            if (token) {
                return Promise.resolve();
            }
            return Promise.reject();
        },

        getPermissions: async () => null,
        getUserIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                return Promise.resolve(JSON.parse(user));
            }
        },
    };

    return (
        <ColorModeContextProvider>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <Refine
                    dataProvider={dataProvider("http://localhost:8080/api/v1")}
                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    resources={[
                        {   
                            name: "Jobs",
                            list: allJobs,
                            show: jobDetails,
                            create: createJobs,
                            edit: editJobs,
                            icon: <WorkOutlineOutlinedIcon />,
                        },
                        {
                            // Applicants
                            // ex properties
                            name: "Applicants",
                            options: { label: "Recruitment"},
                            list: AllProperties,
                            show: PropertyDetails,
                            create: CreateProperty,
                            edit: EditProperty,
                            icon: <PersonAddAltOutlinedIcon />,
                        },
                      
                        {

                            name: "Employee",
                            list: allEmp,
                            create: createEmp,
                            show: EmpDetails,
                            edit: editEmp,
                            icon: <PeopleAltOutlined />,
                        },
                        {

                            name: "My-profile",
                            options: { label: "My-Profile " },
                            list: MyProfile,
                            icon: <AccountCircleOutlined />,
                        },
                        {
                            //Talents
                            //ex Agents
                            name: "Talents",
                            list: Agents,
                            show: AgentProfile,
                             icon: <BadgeOutlinedIcon />,
                        },
                    
                        {
                            name: "Timeoff",
                            options: { label: "Time-Off" },
                            list: PendingOff,
                            icon: <AlarmAddIcon />,
                    
                          },
                          {
                            name: "ApproveTimeoff",
                            options: { label: "Approved-Off"},
                            list: ApproveOff,
                            icon: <AlarmOnIcon />,
                    
                          },
                          
                    ]}
                    Title={Title}
                    Sider={Sider}
                    Layout={Layout}
                    Header={Header}
                    legacyRouterProvider={routerProvider}
                    legacyAuthProvider={authProvider}
                    LoginPage={Login}
                    DashboardPage={Home}
                />
            </RefineSnackbarProvider>
        </ColorModeContextProvider>
    );
}

export default App;
