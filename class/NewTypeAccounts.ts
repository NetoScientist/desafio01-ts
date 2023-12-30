import { DioAccount } from "./DioAccount";

export class NewTypeAccounts extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

   deposit = (value: number): void =>{
        if(this.validateNumberPositive(value)){
            this.balance += value + 10
            console.log("despositou "+ value +" foi acrescido 10 e Seu Saldo é "+ this.balance)
        }
   } 
}