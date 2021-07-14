import { BookGenre } from "./bookGenre";

export class Book {
    constructor(title: string, author: string, quantity: number) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    public title: string;
    public author: string;
    public quantity: number;
    public bookGenreId!: number;
}