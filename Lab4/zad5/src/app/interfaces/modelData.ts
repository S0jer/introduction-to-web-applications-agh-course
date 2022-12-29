import { Model } from "./model";

export class ModelData implements Model {
    id: number;
    brand_id: number;
    name: string;
    description: string;


    constructor(id: number, brand_id: number, name: string, description: string){
        this.id = id;
        this.brand_id = brand_id;
        this.name = name;
        this.description = description;
    }
}