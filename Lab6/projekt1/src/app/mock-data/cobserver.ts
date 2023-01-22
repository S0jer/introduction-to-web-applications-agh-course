import { Observer } from "./observer";


export interface Cobserver {

    addObserver(o:Observer) : void;

    notify() : void;
}
