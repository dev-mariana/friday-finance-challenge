<template>
    <!-- <div v-for="let item in categories">
        <div class="text-center">{{ item?.name }}</div>
    </div> -->
  <div>{{ findCategory(categories?.id) }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Category } from '~~/interfaces/category'
import { dataStore } from '~~/store/data'

export default defineComponent({
  async setup() {
    const store = dataStore()
    const categories: Category[] = await store.getCategories()

    const findCategory = ((id: string) => {
        const result = store.categories.find(category => category.id === id)
        console.log(result)
    })

    return {
        findCategory,
        categories,
    }
  },
  props: {
    categories: {
        type: Object,
        required: true
    }
  }
})
</script>

<style scoped></style>
