export interface Transaction {
    accountId: string;
    amount: number;
    categoryId: string;
    currency: string;
    date: Date;
    id: string;
    reference: string;
}