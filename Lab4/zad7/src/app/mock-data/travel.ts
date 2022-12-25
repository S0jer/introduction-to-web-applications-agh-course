export interface Travel {
    name: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    unitPrice: number;
    peopleLimit: number;
    description: string;
    imgPath: string;
    ratings: number[];
}