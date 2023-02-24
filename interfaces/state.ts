import { Account } from "./account";
import { Category } from "./category";
import { Transaction } from "./transaction";

export interface State {
    transactions: Transaction[];
    categories: Category[];
    accounts: Account[];
}