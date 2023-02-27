import { defineStore } from 'pinia'
import { Transaction } from '~~/interfaces/transaction'
import axios from 'axios'
import { Category } from '~~/interfaces/category'

export const dataStore = defineStore('data', {
  state: () => {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      transactions: [],
      categories: [],
    }
  },
  getters: {
    startIndex(state) {
      return (state.currentPage - 1) * state.itemsPerPage
    },
    endIndex(state) {
      return state.currentPage * state.itemsPerPage
    },
  },
  actions: {
    setPage(page: number) {
      this.currentPage = page
    },
    setItemsPerPage(itemsPerPage: number) {
      this.itemsPerPage = itemsPerPage
    },
    async getTransactions() {
      try {
        const response: Transaction[] = await axios.get('http://localhost:8080/transactions?')
        this.transactions = response
        // console.log(this.transactions)
        return this.transactions
      } catch (error) {
        console.log(error)
      }
    },
    async getCategories() {
      try {
        const response: Category[] = await axios.get('http://localhost:8080/categories')
        this.categories = response
        // console.log(this.categories)
        return this.categories
      } catch (error) {
        console.log(error)
      }
    },
  },
})
