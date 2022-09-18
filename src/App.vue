<template>
  <div class="h-screen">
    <HeaderComponent />
    <div class="max-w-[90rem] my-0 mx-auto px-24 py-20">
        <h1 class="font-semibold text-3xl text-white-600">Lista dos alunos do curso</h1>
        <div class="flex justify-between items-center mt-10">
          <div class="flex flex-col w-[48%]">
            <label class="font-semibold text-base text-grey-300">
              Pesquisar
            </label>
            <input 
              type="text" 
              placeholder="Nome do aluno" 
              class="bg-dark-400 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base"
              @keyup="onSearchUser"
              v-model="search"
            />
          </div>
          <div class="flex flex-col w-[48%]">
            <label class="font-semibold text-base text-grey-300">
              Nacionalidade
            </label>
            <select 
              name="nacionalidade" 
              id="nacionalidade" 
              class="bg-dark-400 rounded-lg mt-2 border-none py-3 px-5 text-white-600 text-base hover:cursor-pointer"
              @change="onSearchUser"
              v-model="searchCountry"
            >
              <option value="">Todas</option>
              <option 
                v-for="nat in $store.state.dataUser"
                :key="nat.location.country.postcode"
              >
                {{nat.location.country}}
              </option>
            </select>
          </div>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-8">
          <table class="w-full text-sm text-left text-grey-400 bg-dark-400">
              <thead class="text-xs text-gray-400">
                  <tr>
                      <th scope="col" class="py-3 px-6">
                        Nome
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Sexo
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Nacionalidade
                      </th>
                      <th scope="col" class="py-3 px-6">
                        Ação
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr 
                    class="border-t border-gray-200 dark:border-gray-700"
                    v-for="user in onSearch()"
                    :key="user.id.value"
                  >
                      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          {{`${user.name.first} ${user.name.last}`}}
                      </th>
                      <td class="py-4 px-6">
                          {{user.gender}}
                      </td>
                      <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                          {{user.location.country}}
                      </td>
                      <td class="py-4 px-6">
                        <button class="bg-dark-500 rounded py-0.5 px-1.5">
                          Visualizar
                        </button>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
    
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      loading: false,
      showModal: false,
      search: '',
      searchCountry: ''
    }
  },
  created() {
    this.loading = true;
    this.$store.dispatch('getUsers').finally(() =>{
      this.loading = false;
    })
  },
  methods: {
    onSearch(){
      if(this.search.length > 0){
        return this.$store.state.dataUser.filter(a => (a.name.first.toUpperCase() || a.name.last.toUpperCase()).includes(this.search.toUpperCase()))
      } else if(this.searchCountry.length > 0) {
        return this.$store.state.dataUser.filter(a => a.location.country.toUpperCase().includes(this.searchCountry.toUpperCase()))
      } else {
        return this.$store.state.dataUser;
      }
    }
  }
}
</script>

<style>
</style>
