import { Brand } from "./brand";

export class BrandData implements Brand {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}