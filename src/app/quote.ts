export class Quote {
    showQuote:boolean;
    constructor(public id:number,public quote:string,public author:string){
        this.showQuote=true;
    }
}
