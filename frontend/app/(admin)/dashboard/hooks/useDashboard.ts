export type DateRange = {
    startDate: Date | null;
    endDate: Date | null;
}

export type DashboardContextType = {
    click: boolean;
    setClick: (click: boolean) => void;
    dateRange: DateRange;
    setDateRange: (range: DateRange) => void;
}