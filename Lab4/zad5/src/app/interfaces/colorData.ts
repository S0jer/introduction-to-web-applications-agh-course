import { Color } from "./color";

export class ColorData implements Color {
    id: number;
    model_id: number;
    name: string;

    constructor(id: number, model_id: number, name: string,){
        this.id = id;
        this.model_id = model_id;
        this.name = name;
    }
}