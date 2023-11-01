import {defineStore} from 'pinia'
import{remove} from 'lodash'
  
export const usefavFlag = defineStore('countires', {
  state: () => {
    return {
      selectedCountries:[]
    }
    
  },
  actions:{
    isInFav(country){
       return this.selectedCountries.some(
        selectedCountry=>{
         return selectedCountry.cca2===country.cca2
        })
    },
    removeFromFav(country){
     remove(this.selectedCountries,(selectedCountry)=>{
      return selectedCountry.cca2===country.cca2
     })
    },
    addToFav(country){
      if(!this.isInFav(country)){
        this.selectedCountries.push(country)
      }
      
    },

   
  }
 
})