import { defineStore } from 'pinia'
import transactions from '../assets/data/transactions.json'
import categories from '../assets/data/categories.json'
import accounts from '../assets/data/accounts.json'
import { State } from '~~/interfaces/state'
import { Transaction } from '~~/interfaces/transaction'

export const state = defineStore('state', {
    state: () => {
        return {
            transactions,
            categories,
            accounts,
        } as unknown as State
    },
})