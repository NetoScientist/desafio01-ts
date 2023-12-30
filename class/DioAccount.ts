export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      if(this.validateNumberPositive(value)){
        this.balance += value
        console.log("Voce Depositou "+ value + " Seu Saldo é "+ this.balance)
      }
    }
  }

  withdraw = (value: number): void => {
    if( this.validateStatus() && this.balance > value){
      this.balance -= value
      console.log("Voce Sacou "+ value + " Seu Saldo é "+ this.balance)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  validateNumberPositive = (value: number): boolean => {
    if (value > 0){
      return true
    }
    return false
  }
}
