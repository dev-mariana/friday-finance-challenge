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
            <td class="text-center">{{ item?.reference }}</td>
          </tr>
          <tr class="border border-slate-300" v-for="item in categories">
            <!-- <td class="text-center">{{ item?.name }}</td> -->
            <td class="text-center">Francisco Chang</td>
            <td class="text-center">Mexico</td>
            <td class="text-center">Mexico</td>
          </tr>
          <tr class="border border-slate-300">
            <!-- <td class="text-center" v-for="item in transactions">{{ item?.date }}</td> -->
            <td class="text-center">Roland Mendel</td>
            <td class="text-center">Austria</td>
            <td class="text-center">Austria</td>
          </tr>
          <tr class="border border-slate-300">
            <!-- <td class="text-center" v-for="item in transactions">{{ item?.amount }}</td> -->
            <td class="text-center">Helen Bennett</td>
            <td class="text-center">UK</td>
            <td class="text-center">UK</td>
          </tr>
          <tr class="border border-slate-300">
            <td class="text-center">Laughing Bacchus Winecellars</td>
            <td class="text-center">Yoshi Tannamuri</td>
            <td class="text-center">Canada</td>
            <td class="text-center">Canada</td>
          </tr>
          <tr class="border border-slate-300">
            <td class="text-center">Magazzini Alimentari Riuniti</td>
            <td class="text-center">Giovanni Rovelli</td>
            <td class="text-center">Italy</td>
            <td class="text-center">Italy</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- <div v-for="item in transactions">
    {{ item?.reference }}
  </div> -->
  <div v-if="!transactions">
    <h2>Ainda não há conteúdo para mostrar.</h2>
  </div>
</template>

<script lang="ts" setup>
  import { state } from '../store/data'

  const store = state()
  const transactions = store.transactions;
  const categories = store.categories;
  const accounts = store.accounts;
  console.log(transactions)
  console.log(categories)
  console.log(accounts)

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

thead {
  background-color: #f7fafc;
}

tbody {
  background-color: #ffffff;
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
