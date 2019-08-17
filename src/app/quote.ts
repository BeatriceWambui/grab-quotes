export class Quote {
     public showDescription: boolean;
    constructor(public id:string, public description:string, public author:string, public completeDate:Date, public upvote:number,public downvote:number ){
        this.showDescription=false;
    }
}
