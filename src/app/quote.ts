export class Quote {
    showQuote:boolean;
    constructor(public id:string,public quote:string,public author:string){
        this.showQuote=true;
    }
}
