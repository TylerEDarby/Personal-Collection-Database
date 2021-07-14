export class Card {
    constructor(name: string, type: string, quantity: number) {
        this.name = name;
        this.type = type;
        this.quantity = quantity;
    }

    public name: string;
    public type: string;
    public quantity: number;
    public cardTypeId!: number;
}