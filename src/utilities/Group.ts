import Account from "./Account";

export default class Group {
    // Group class to represent a group of users
    // It contains the group name, description, and a list of users in the group
    private name: string;
    private description: string;
    private image: string = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png";
    private members: Account[];

    public constructor(groupName: string, description: string) {
        this.name = groupName;
        this.description = description;
        this.members = [];
    }

    public getName(): string {
        return this.name;
    }
    
    public getDescription(): string {
        return this.description;
    }

    public getUsers(): Account[] {
        return this.members;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }
    
    public setName(name: string): void {
        this.name = name;
    }

    public setDescription(description: string): void { 
        this.description = description;
    }
    
    public addUser(user: Account): void {
        this.members.push(user);
    }
    public removeUser(user: Account): void {
        // Remove user from the group
    }
}