export class Quote {
     public showDescription: boolean;
    constructor(public id:string, public description:string, public author:string, public completeDate:Date){
        this.showDescription=false;
    }
}
