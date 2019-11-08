export class User{
    constructor(
        public id:string, 
        public email:string, 
        private _token:string,
        private _tokenExprationDate:Date
        ){}
        
    get token(){
        if( !this._tokenExprationDate || this._tokenExprationDate <= new Date){
            return null
        } 
        return this._token;
    }
}