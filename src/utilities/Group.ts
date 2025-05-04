import Account from "./Account";

export default class Group {
    private name: string;
    private description: string;
    private image: string = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
    private members: Account[];
    private admins: Account[];

    public constructor(groupName: string, description: string, admin: Account) {
        this.name = groupName;
        this.description = description;
        this.members = [];
        this.admins = [admin]
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

    public getAdmins(): Account[] {
        return this.admins; 
    }

    public getMembers(): Account[] {
        return this.members;    
    }

    public setDescription(description: string): void { 
        this.description = description;
    }
    
    public addMember(user: Account): void {
        this.members.push(user);
    }
    public removeMember(user: Account): void {
        this.members = this.members.filter(member => member !== user);
    }

    public addAdmin(user: Account): void {
        this.admins.push(user);
    }
    public removeAdmin(user: Account): void {
        this.admins = this.admins.filter(admin => admin !== user);
    }   
}