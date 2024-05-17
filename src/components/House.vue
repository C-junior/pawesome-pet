<template>
    <div class="house">
      <h2>Your Pets</h2>
      <div class="pet" v-for="pet in adoptedPets" :key="pet.name" @click="selectPet(pet)">
        <img :src="pet.image" alt="Pet Image">
        <p>{{ pet.name }}</p>
        <p>Mood: {{ getMoodStatus(pet.mood) }}</p>
        <p>Health: {{ getHealthStatus(pet.health) }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        adoptedPets: JSON.parse(localStorage.getItem('adoptedPets')) || [],
      };
    },
    methods: {
      selectPet(pet) {
        localStorage.setItem('selectedPet', JSON.stringify(pet));
        this.$router.push('/');
      },
      getMoodStatus(mood) {
        if (mood >= 80) return 'Happy';
        if (mood >= 60) return 'Content';
        if (mood >= 40) return 'Neutral';
        if (mood >= 20) return 'Unhappy';
        return 'Angry';
      },
      getHealthStatus(health) {
        if (health >= 80) return 'Excellent';
        if (health >= 60) return 'Good';
        if (health >= 40) return 'Fair';
        if (health >= 20) return 'Poor';
        return 'Critical';
      },
    },
  };
  </script>
  
  <style>
  .house {
    text-align: center;
  }
  .pet {
    cursor: pointer;
    display: inline-block;
    margin: 10px;
  }
  .pet img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  </style>
  