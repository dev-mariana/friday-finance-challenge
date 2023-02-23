import { Account } from "./account";
import { Category } from "./category";
import { Transaction } from "./transaction";

export interface State {
    transactions: Transaction[] | null;
    categories: Category[] | null;
    accounts: Account[] | null;
}