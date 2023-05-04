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
import { AuthPage } from "@refinedev/mui";
import {
    Login,
    Home,
    Agents,
    MyProfile,
    PropertyDetails,AllProperties,CreateProperty,EditProperty,
    AgentProfile,
    editJobs,createJobs,allJobs,jobDetails,
    createEmp,allEmp,editEmp,EmpDetails,
    PendingOff,CreateOff,
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
import { useEffect, useState } from "react";



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

 const [data, setData] = useState<any[]>([])
// GET ALL USER DATA for LOGIN
useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://167.172.236.212:8080/api/v1/users`);
        const newData = await response.json();
        setData(newData);
      };

      fetchData();

},[data]);

//AUTH PROVIDE METHODS
    const authProvider: AuthProvider = {
        login: async ({ email, password }) => {
            if (data != null) {

               
                const user = data.find((item: { email: any; }) => item.email === email);

                if (user) {

                    const pass = data.find((item: { password: any; }) => item.password === password);

                    if(pass)
                    {
                        localStorage.setItem("email", JSON.stringify(user));
                        alert("Log-in success, Welcome")
                        axiosInstance.defaults.headers.common = {
                            Authorization: `Bearer ${user.token}`,
                        };
                            return Promise.resolve();
                    }

                    alert("Wrong password")
                    return Promise.reject();
                    
                }
              
            }
                alert("Incorrect, Check your email or password")
              return Promise.reject();
            },
            register: async ({ email, password, name }) => {
                const user = data.find((item: { email: any; }) => item.email === email);
                if (user) {
                    alert("User already exist, Try another email")
                    return Promise.reject();
                }
                const response = await fetch(
                    "http://167.172.236.212:8080/api/v1/users",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: email,
                            name: email,
                            password: password
                       
                        }),
                    },
                   
                );
                return Promise.resolve();
            },
            // Logout
            logout: () => {
                localStorage.removeItem("email");
                return Promise.resolve();
              },
            //   Error Handling
              checkError: () => Promise.resolve(),
            //   AUTH
              checkAuth: async () =>
                localStorage.getItem("email") ? Promise.resolve() : Promise.reject(),
            // User ROLES
            getPermissions: () => Promise.resolve(["admin"]),
            //   GET USER INFO
             getUserIdentity: async () => {
                const user = localStorage.getItem("email");
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
                    dataProvider={dataProvider("http://167.172.236.212:8080/api/v1", axiosInstance)}
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
                            name: "Talents",
                            list: Agents,
                            show: AgentProfile,
                             icon: <BadgeOutlinedIcon />,
                        },
                    
                        {
                            name: "Timeoff",
                            options: { label: "Time-Off" },
                            list: PendingOff,
                            create: CreateOff,
                            icon: <AlarmAddIcon />,
                          },
                          
                    ]}
                    Title={Title}
                    Sider={Sider}
                    Layout={Layout}
                    Header={Header}
                    legacyRouterProvider={{
                        ...routerProvider,
                        routes: [
                            {
                                path: "/register",
                                element: <AuthPage type="register" />,
                            },
                        ],
                    }}
                    legacyAuthProvider={authProvider}
                    LoginPage={Login}
                    DashboardPage={Home}
                />
            </RefineSnackbarProvider>
        </ColorModeContextProvider>
    );
}

export default App;
