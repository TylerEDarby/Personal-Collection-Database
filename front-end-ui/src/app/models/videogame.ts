export class Videogame {
    constructor(title: string, console: string, quantity: number) {
        this.title = title;
        this.console = console;
        this.quantity = quantity;
    }

    public title: string;
    public console: string;
    public quantity: number;
    public videogameConsoleId!: number;
}