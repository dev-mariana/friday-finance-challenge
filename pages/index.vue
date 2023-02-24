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
          <tr class="border border-slate-300" v-for="item in transactions">
            <td class="text-center" v-if="item?.reference">{{ item?.reference }}</td>
            <td class="text-center" v-if="!item?.reference">No Reference</td>
            <div v-for="item in categories">
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
      @click="" >
        Load More
    </button>
    <!-- <button @click="previousPage()">Previous Page</button> -->
  </div> 
</template>

<script setup>
import { dataStore } from '../store/data'

const store = dataStore()
const transactions = await store.getTransactions()
const categories = await store.getCategories()

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
