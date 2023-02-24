<template>
  <div class="container">
    <h2
      class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
    >
      Transactions
    </h2>
    <div class="flex flex-row flex-wrap gap-4 mb-4 mobile">
      <div class="flex flex-col gap-3 flex-wrap mb-4 w-30 w-100">
        <span>Search</span>
        <input type="search" name="search" id="search" />
      </div>
      <div class="flex flex-col gap-3 flex-wrap mb-4 w-15 w-100">
        <label for="" class="">Bank</label>
        <select id="select-bank" name="select-bank" class="">
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
      <div class="flex flex-col gap-3 flex-wrap mb-4 w-15 w-100">
        <label for="" class="">Account</label>
        <select id="select-account" name="select-account" class="">
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
      <div class="flex flex-col gap-3 flex-wrap mb-4 w-15 w-100">
        <span>Starting month</span>
        <input type="date" name="" id="start-date" />
      </div>
      <div class="flex flex-col gap-3 flex-wrap mb-4 w-15 w-100">
        <span>Ending month</span>
        <input type="date" name="" id="end-date" />
      </div>
    </div>
    <div class="table">
      <table class="border border-slate-400 table-fixed">
        <thead>
          <tr class="border border-slate-300">
            <th>Reference</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-slate-300" v-for="item in transactionsLength">
            <td class="text-center" v-if="item?.reference">{{ item?.reference }}</td>
            <td class="text-center" v-if="!item?.reference">No Reference</td>
            <div v-for="item in categoriesLength">
              <td class="text-center">{{ item?.name }}</td>  
              <td class="text-center" v-if="!item?.name">No Name</td>
            </div>
            <td class="text-center">{{ item?.date }}</td> 
            <td class="text-center" v-if="!item?.date">No Date</td>
            <td class="text-center">{{ item?.amount }}</td> 
            <td class="text-center" v-if="!item?.amount">No Amount</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 
  <div>
    <button 
      id="click"
      @click="loadMore()" 
      v-if="transactions.length != transactionsLength.length && categories.length != categoriesLength.length">
        Load More
    </button>
    <!-- <button @click="previousPage()">Previous Page</button> -->
  </div> 
  <!-- <div v-for="item in transactions">
    {{ item?.reference }}
    {{ item?.amount }}
    {{ item?.date }}
  </div> -->
  <div v-if="!transactions">
    <h2>Ainda não há conteúdo para mostrar.</h2>
  </div>
</template>

<script lang="ts" setup>
import { State } from '~~/interfaces/state'
import { state } from '../store/data'

const store = state()
const transactions = store.transactions
const categories = store.categories
const accounts = store.accounts
const pageAtual = 1
const transactionsLength = transactions.slice((pageAtual - 1) * 20, pageAtual * 19)
const categoriesLength = categories.slice((pageAtual - 1) * 20, pageAtual * 19)

console.log(transactions)
// console.log(categories)
// console.log(accounts)

function loadMore() {
  if(transactions.length > 19 && categories.length > 19) {
    

    // console.log(transactionsLength, categoriesLength)

    return { 
      transactionsLength, categoriesLength
    }
  }
}

function nextPage() {
  let nextPage: boolean
  // (pageAtual - 1) * 20, pageAtual * 19  
  for (let i = 0; i < transactions.length; i++) {
    if (i < 19) {
      nextPage = true
      const result = transactions.slice((pageAtual - 1) * 20, pageAtual * 19)
      i++
      console.log(result)
    }
  }
}

function previousPage() {
  let nextPage: boolean
  for (let i = 0; i < transactions.length; i--) {
    if (i > 19) {
      nextPage = false
      const result = transactions.slice(0, 19)
      i--
      console.log(result)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 5vh;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-top: 5vh;
  font-family: Arial, Helvetica, sans-serif;
}

.w-30 {
  width: 30%;
}

.w-15 {
  width: 16%;
}

#search {
  border: 1px solid grey;
  border-radius: 3px;
  padding: 5px;
}

#select-bank,
#select-account,
#start-date,
#end-date {
  padding: 6px;
  border: 1px solid grey;
  border-radius: 3px;
}

.text-2xl {
  margin-bottom: 5vh;
}

table {
  width: 100%;
}

#click {
  background-color: #fb3c00;
}

thead {
  background-color: #f7fafc;
}

tbody {
  background-color: #ffffff;
}

#pagination {
  display: block;
  padding: 10px;
  text-align: center;
  background-color: #fb3c00;
}

#pagination > a {
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 0;
  background: rgba(0, 0, 0, 0.08);
  color: #000;
  font-weight: 600;
}

#pagination > a:last-child {
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}

#pagination > a:hover {
  background: rgba(0, 0, 0, 0.03);
  color: #fb3c00;
}

/* .table {
  width: 100%;
  display: table;
  font-family: arial, sans-serif;
  border-collapse: collapse;
} */

/* td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
} */

@media screen and (max-width: 768px) {
  .mobile {
    flex-direction: column;
    width: 100%;
  }

  .w-100 {
    width: 100%;
  }
}
</style>
