<template>
    <div>
      <h1>Adoption Center</h1>
      <PetSelection @selectPet="handlePetSelected" />
    </div>
  </template>
  
  <script>
  import PetSelection from '../components/PetSelection.vue';
  
  export default {
    components: {
      PetSelection,
    },
    methods: {
      handlePetSelected(pet) {
        // Handle pet adoption logic here
        // You can store the adopted pet in a global state or local storage
      },
    },
  };
  </script>
  
  <style>
  /* Add any styles for the Adoption Center view */
  </style>
  