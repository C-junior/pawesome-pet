<template>
    <div class="pet-house-container">
      <h1>Pet House</h1>
      <div class="pets-grid">
        <div v-for="pet in pets" :key="pet.name" class="pet-card" @click="selectPet(pet)">
          <img :src="pet.image" alt="Pet Image">
          <p>{{ pet.name }}</p>
        </div>
      </div>
      <div v-if="selectedPet" class="selected-pet">
        <h2>Selected Pet: {{ selectedPet.name }}</h2>
        <PetStatus :pet="selectedPet" :mood="selectedPet.mood" :health="selectedPet.health" />
        <CaretakingActions @feed="handleFeed" @play="handlePlay" @groom="handleGroom" />
      </div>
    </div>
  </template>
  
  <script>
  import PetStatus from '../components/PetStatus.vue';
  import CaretakingActions from '../components/CaretakingActions.vue';
  
  export default {
    components: {
      PetStatus,
      CaretakingActions,
    },
    data() {
      return {
        pets: [],
        selectedPet: null,
      };
    },
    methods: {
      selectPet(pet) {
        this.selectedPet = pet;
      },
      handleFeed() {
        if (this.selectedPet) {
          this.selectedPet.health = Math.min(this.selectedPet.health + 20, 100);
          this.updatePetStorage();
        }
      },
      handlePlay() {
        if (this.selectedPet) {
          this.selectedPet.mood = Math.min(this.selectedPet.mood + 30, 100);
          this.updatePetStorage();
        }
      },
      handleGroom() {
        if (this.selectedPet) {
          this.selectedPet.mood = Math.min(this.selectedPet.mood + 10, 100);
          this.updatePetStorage();
        }
      },
      updatePetStorage() {
        const adoptedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
        const index = adoptedPets.findIndex(pet => pet.name === this.selectedPet.name);
        if (index !== -1) {
          adoptedPets[index] = this.selectedPet;
          localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets));
        }
      },
    },
    mounted() {
      const savedPets = JSON.parse(localStorage.getItem('adoptedPets'));
      if (savedPets) {
        this.pets = savedPets;
      }
    },
  };
  </script>
  
  <style scoped>
  .pet-house-container {
    text-align: center;
    padding: 20px;
  }
  
  .pets-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .pet-card {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .pet-card:hover {
    transform: scale(1.05);
  }
  
  .pet-card img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .selected-pet {
    margin-top: 20px;
  }
  </style>
  