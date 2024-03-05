import { createStore } from "vuex";

export default createStore({
  state: {
    locale: "EN",
    categories: [
      {
        id: 1,
        name: "Topical Cream",
        img: require("@/assets/images/category/topical-cream.jpg"),
      },
      {
        id: 2,
        name: "Anti Allergic",
        img: require("@/assets/images/category/anti-allergic.jpg"),
      },
      {
        id: 3,
        name: "Neuropathic Pain Reliever",
        img: require("@/assets/images/category/pain-reliever.jpg"),
      },
      {
        id: 4,
        name: "Anti Platelet",
        img: require("@/assets/images/category/anti-platelet.jpg"),
      },
      {
        id: 5,
        name: "Antiangina",
        img: require("@/assets/images/category/antiangina.jpg"),
      },
      {
        id: 6,
        name: "Antianxiety drug",
        img: require("@/assets/images/category/anxiety.jpg"),
      },
      {
        id: 7,
        name: "Antibiotic",
        img: require("@/assets/images/category/antibiotic.webp"),
      },
      {
        id: 8,
        name: "Antifibrinolytic",
        img: require("@/assets/images/category/antifibrinolytic.jpg"),
      },
      {
        id: 9,
        name: "Antihypertensive ",
        img: require("@/assets/images/category/antihypertensive .webp"),
      },
      {
        id: 10,
        name: "Antipsychotic ",
        img: require("@/assets/images/category/antipsychotic.jpg"),
      },
      {
        id: 11,
        name: "Antispasmodic ",
        img: require("@/assets/images/category/anti-spasmodic.jpg"),
      },
      {
        id: 12,
        name: "Calcium + Vitamin D supplement  ",
        img: require("@/assets/images/category/calcium-vitaminD.jpg"),
      },
    ],

    products: [
      {
        id: 1,
        name: "Doloneuron-100",
        img: require("@/assets/images/products/3-neuropathic/Doloneuron-100.png"),
        category: "Neuropathic Pain Reliever",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 2,
        name: "Doloneuron-300",
        img: require("@/assets/images/products/3-neuropathic/Doloneuron-300.png"),
        category: "Neuropathic Pain Reliever",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 3,
        name: "Prenura-M",
        img: require("@/assets/images/products/3-neuropathic/Prenura-M.png"),
        category: "Neuropathic Pain Reliever",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 4,
        name: "Nikoran",
        img: require("@/assets/images/products/5-anti-angina/Nikoran.png"),
        category: "Antiangina",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 5,
        name: "Frixitas",
        img: require("@/assets/images/products/6-anti-anxiety/Frixitas.png"),
        category: "Antianxiety drug",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 6,
        name: "Beniclav-625",
        img: require("@/assets/images/products/7-anti-biotic/Beniclav-625.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 7,
        name: "Benixim-100",
        img: require("@/assets/images/products/7-anti-biotic/Benixim-100.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 8,
        name: "Benixim-200",
        img: require("@/assets/images/products/7-anti-biotic/Benixim-200.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 9,
        name: "Bherumn-S",
        img: require("@/assets/images/products/7-anti-biotic/Bherumn-S.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 10,
        name: "Ceftipime-1G-ps",
        img: require("@/assets/images/products/7-anti-biotic/Ceftipime-1G-ps.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 11,
        name: "CFM-(Inj)",
        img: require("@/assets/images/products/7-anti-biotic/CFM-(Inj).png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 12,
        name: "Clindamycin-150",
        img: require("@/assets/images/products/7-anti-biotic/Clindamycin-150.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 13,
        name: "Clindamycin-300",
        img: require("@/assets/images/products/7-anti-biotic/Clindamycin-300.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 14,
        name: "Furocef-Inj",
        img: require("@/assets/images/products/7-anti-biotic/Furocef-Inj.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 15,
        name: "Pantin-500",
        img: require("@/assets/images/products/7-anti-biotic/Pantin-500.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 16,
        name: "Repenem-1G",
        img: require("@/assets/images/products/7-anti-biotic/Repenem-1G.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 17,
        name: "Repenem-500-mg",
        img: require("@/assets/images/products/7-anti-biotic/Repenem-500-mg.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
      {
        id: 18,
        name: "Vamocin",
        img: require("@/assets/images/products/7-anti-biotic/Vamocin.png"),
        category: "Antibiotic",
        ingredient: ["Cefexime 100mg", "Amoxicilin", "Pantoprazole 40mg"],
      },
    ],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getProducts(state) {
      return state.products;
    },
    getLocale(state) {
      return state.locale;
    },
  },
  mutations: {
    setLocale: (state, value) => (state.locale = value),
  },
  actions: {
    getLocale: (context, value) => {
      context.commit("setLocale", value);
    },
  },
  modules: {},
});
