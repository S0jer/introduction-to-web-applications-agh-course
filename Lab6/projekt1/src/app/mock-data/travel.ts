export interface Travel {
    id?: string;
    name: string;
    country: string;
    city: string;
    startDate: string;
    endDate: string;
    unitPrice: number;
    peopleLimit: number;
    description: string;
    imgPath: string;
    ratings: number[];
    reservationsCnt: number;
}