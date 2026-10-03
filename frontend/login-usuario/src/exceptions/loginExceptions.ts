export class UnauthorizedError extends Error {
    constructor() {
        super("unauthorized");
        this.name = "UnauthorizedError"
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}