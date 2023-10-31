import {defineStore} from 'pinia'

  
export const usefavFlag = defineStore('countires', {
  state: () => {
    return {
      selectedCountries:[]
    }
  },
})