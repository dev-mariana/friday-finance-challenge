import { defineStore } from 'pinia'
import transactions from '../assets/data/transactions.json'
import categories from '../assets/data/categories.json'
import accounts from '../assets/data/accounts.json'
import { State } from '~~/interfaces/state'
import { Transaction } from '~~/interfaces/transaction'
import axios from "axios";
import { Category } from '~~/interfaces/category'

export const dataStore = defineStore('data', {
    state: () => {
        return {
            transactions: [],
            categories: [],
        }
    },
    actions: {
        async getTransactions() {
            try {
                const response = await axios.get('http://localhost:8080/transactions?_page=1&_limit=19')
                this.transactions = response.data
                console.log(this.transactions)
                return this.transactions 
            } catch (error) {
                console.log(error)
            }
        },
        async getCategories(): Promise<Category[] | undefined> {
            try {
                const response = await axios.get('http://localhost:8080/categories?_page=1&_limit=19')
                this.categories = response.data
                console.log(this.categories)
                return this.categories 
            } catch (error) {
                console.log(error)
            }
        }
    },
})