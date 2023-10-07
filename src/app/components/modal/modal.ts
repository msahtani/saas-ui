export enum Operation{
    ADD, EDIT, DELETE
}


export abstract class Modal<T=unknown> {

    data: T

    operation: Operation

    constructor(data: T, op?:Operation){
        this.data = data
        this.operation = (op) ? op : Operation.ADD
    }

    abstract close(): void
}