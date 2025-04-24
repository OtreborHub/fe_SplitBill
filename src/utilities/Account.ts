export default class Account {
    private sessionId: string;
    private username: string;

    public constructor(username: string, sessionId: string) {
        this.username = username;
        this.sessionId = sessionId;
    }

    public getSessionId(): string {
        return this.sessionId;
    }
    public getUsername(): string {
        return this.username;
    }   
}