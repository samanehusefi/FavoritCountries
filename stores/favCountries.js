import { defineStore } from "pinia";
import { remove } from "lodash";

export const useCountiresStore = defineStore("countires", {
  state: () => {
    return {
      selectedCountries: [],
      // bordersCountry: [],
      // borderCodes: [],
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
      // remove(this.borderCodes, (borderCode) => {
      //   debugger
      //   return borderCode === country.borders;
      // });
    },
    addToFav(country) {
      if (!this.isInFav(country)) {
        console.log("country.borderCodes", country.borders);
        this.selectedCountries.push(country);
        // this.borderCodes.push(country.borders);
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
