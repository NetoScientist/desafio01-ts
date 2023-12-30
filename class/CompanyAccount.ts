import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus() && this.validateNumberPositive(value) ){
      this.balance += value
    }
    
    console.log('Voce pegou um empréstimo'+ value + " Seu Saldo é "+ this.balance)
    
  }
}
