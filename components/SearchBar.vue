<template>
  <div
    class="
      flex flex-col
      md:flex-row md:items-center md:border-2 md:border-gray-200
      rounded
      text-sm
      space-y-4
      md:space-y-0
    "
  >
    <select
      v-model="selectedCategory"
      class="
        md:mx-2
        py-2
        w-full
        md:w-36
        rounded
        focus:outline-none focus:ring focus:border-blue-300
      "
    >
      <option v-for="{ text, value } in categories" :value="value" class="px-2">
        {{ text }}
      </option>
    </select>
    <div class="hidden md:block text-3xl font-thin text-gray-400">|</div>
    <div class="flex border border-gray-400 md:border-0 md:rounded-none">
      <input
        v-model="search"
        type="text"
        placeholder="Search Entire Store Here"
        class="px-2 md:py-1.5 placeholder-gray-500 w-full md:w-72"
      />
      <div class="bg-red-500 text-white px-4 py-1.5 md:py-2.5 cursor-pointer">
        <i class="bx bx-search text-2xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      search: '',
      selectedCategory: 'all',
      categories: [
        { text: 'All Categories', value: 'all' },
        { text: 'Fashion', value: 'all' },
        { text: 'Summer', value: 'summer' },
        { text: 'Mens', value: 'mens' },
        { text: 'Womens', value: 'womens' },
      ],
    }
  },
}
</script>

<style></style>
