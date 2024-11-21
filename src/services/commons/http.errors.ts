export class WrongDataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "WrongDataError";
    }
}
