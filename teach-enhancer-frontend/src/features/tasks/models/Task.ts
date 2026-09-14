import Person from "../../persons/models/Person";

export default class Task {
    public name: string;
    public lastExecutionDate: Date | null = null;
    public assignedTo: Person | null = null;

    constructor(name: string) {
        this.name = name;
    }
}