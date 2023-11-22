import { defineStore } from "pinia";
import { remove } from "lodash";

export const useCountiresStore = defineStore("countires", {
  state: () => {
    return {
      selectedCountries: []
    };
  },
  actions: {
    isInFav(country) {
      return this.selectedCountries.some((selectedCountry) => {
        return selectedCountry.cca3 === country.cca3;
      });
    },
    removeFromFav(country) {
       remove(this.selectedCountries, (selectedCountry) => {
        return selectedCountry.cca3 === country.cca3;
      });
    },
    addToFav(country) {
      if (!this.isInFav(country)) {
        console.log("country.borderCodes", country.borders);
        this.selectedCountries.push(country);
      }
    },
    fetchBorders() {
      if (!!this.borderCodes) {
        const borderCodes = this.borderCodes.flat().join(",");
        const { data: response } = useFetch(
          `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
        );
        this.bordersCountry = response;
      }
    },
  },
  getters: {
    borderCodes() {
      const bordersSet = new Set(
        this.selectedCountries
          .map((country) => country.borders)
          .flat()
          .filter(
            (code) =>
              code &&
              !this.selectedCountries.some((country) => country.cca3 === code)
          )
      );
      return [...bordersSet];
    },
  },
});
