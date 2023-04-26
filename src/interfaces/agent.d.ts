import { BaseKey } from "@refinedev/core";

export interface AgentCardProp {
    id?: BaseKey | undefined;
    name: string;
    email: string;
    avatar: string;
    noOfApps: number;
    noOfJobs: number;
    noOfEmp: number;
    noOfOff: number;
}
export interface OffCardProp {
    id?: BaseKey | undefined;
    name: string;
    date: string;
    email: string;
    avatar: string;
    offStats: string;
}

export interface InfoBarProps {
    icon: ReactNode;
    name: string;
}
