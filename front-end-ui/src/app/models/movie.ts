export class Movie {
    constructor(title: string, format: string, quantity: number){
        this.title = title;
        this.format = format;
        this.quantity = quantity;
    }

    public title: string;
    public format: string;
    public quantity: number;
    public movieFormatId!: number;
} 