import { BaseKey } from "@refinedev/core";

export interface AgentCardProp {
    id?: BaseKey | undefined;
    name: string;
    email: string;
    avatar: string;
    role: string;
    noOfApps: number;
    noOfJobs: number;
    noOfEmp: number;
}
export interface OffCardProp {
    id?: BaseKey | undefined;
    name: string;
    date: string;
    email: string;
    avatar: string;
    offStats: string;
    hiringManager: string;
}

export interface InfoBarProps {
    icon: ReactNode;
    name: string;
}
