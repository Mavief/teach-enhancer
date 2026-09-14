import {Permission} from "../../permissions/models/Permission";

export default class Person {
    public name: string;
    public permissions: Permission[];

    constructor(name: string, permissions: Permission[] = []) {
        this.name = name;
        this.permissions = permissions;
    }
}