import { defineStore } from "pinia";
import { remove } from "lodash";

export const usefavFlag = defineStore("countires", {
  state: () => {
    return {
      selectedCountries: [],
      borders: [],
    };
  },
  actions: {
    isInFav(country) {
      return this.selectedCountries.some((selectedCountry) => {
        return selectedCountry.cca2 === country.cca2;
      });
    },
    removeFromFav(country) {
      remove(this.selectedCountries, (selectedCountry) => {
        return selectedCountry.cca2 === country.cca2;
      });
    },
    addToFav(country) {
      if (!this.isInFav(country)) {
        this.selectedCountries.push(country);
      }
    },
    fetchBorders(country) {
      if (!!country.borders) {
        const borderCodes = country.borders.join(",");
        const { data: response } = useFetch(
          `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
        );
        this.borders = response;
      }
    },
  },
  computed:{
    
  }
});
