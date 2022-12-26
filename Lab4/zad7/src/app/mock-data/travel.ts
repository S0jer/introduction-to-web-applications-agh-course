export interface Travel {
    name: string;
    country: string;
    city: string;
    startDate: Date;
    endDate: Date;
    unitPrice: number;
    peopleLimit: number;
    description: string;
    imgPath: string;
    ratings: number[];
}