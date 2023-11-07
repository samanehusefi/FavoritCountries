import { defineStore } from "pinia";
import { remove } from "lodash";

export const usefavFlag = defineStore("countires", {
  state: () => {
    return {
      selectedCountries: [],
      bordersCountry: [],
      borderCodes: [],
    };
  },
  actions: {
    isInFav(country) {
      return this.selectedCountries.some((selectedCountry) => {
        return selectedCountry.cca2 === country.cca2;
      });
    },
    removeFromFav(country) {
      debugger;
      remove(this.selectedCountries, (selectedCountry) => {
        return selectedCountry.cca2 === country.cca2;
      });
      remove(this.borderCodes, (borderCode) => {
        debugger;
        return borderCode === country.borders;
      });
    },
    addToFav(country) {
      debugger;
      if (!this.isInFav(country)) {
        debugger;
        this.selectedCountries.push(country);
        this.borderCodes.push(country.borders);
      }
    },
  },
  getters: {
    fetchBorders(state) {
      if (!!state.borderCodes) {
        const borderCodes = state.borderCodes.flat().join(",");
        const { data: response } = useFetch(
          `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
        );
        this.bordersCountry = response;
      }
      return this.bordersCountry;
    },
  },
});
