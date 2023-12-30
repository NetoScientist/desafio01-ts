import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewTypeAccounts } from './class/NewTypeAccounts'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)
const newtypesaccounts: NewTypeAccounts = new NewTypeAccounts('Chico', 15)
newtypesaccounts.deposit(400)
console.log(newtypesaccounts)
