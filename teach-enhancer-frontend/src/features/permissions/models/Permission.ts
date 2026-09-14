export class Permission {
    public name: string;
    public description: string;
    public canRead: boolean = false;
    public canWrite: boolean = false;
    public canDelete: boolean = false;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}