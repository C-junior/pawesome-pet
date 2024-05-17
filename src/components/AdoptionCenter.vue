<template>
    <div class="adoption-center">
      <h2>Adopt a New Pet</h2>
      <div class="pet" v-for="pet in pets" :key="pet.name" @click="adoptPet(pet)">
        <img :src="pet.image" alt="Pet Image">
        <p>{{ pet.name }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pets: [
          { name: 'Cat', image: 'https://raw.githubusercontent.com/C-junior/khaoz-art-portfolio/main/src/assets/cris-junior-nijinrework.jpg' },
          { name: 'Dog', image: 'https://raw.githubusercontent.com/C-junior/khaoz-art-portfolio/main/src/assets/cris-junior-mistyfullrework.jpg' },
          { name: 'Bird', image: 'https://raw.githubusercontent.com/C-junior/khaoz-art-portfolio/main/src/assets/cris-junior-nemesis.jpg' },
        ],
        adoptedPets: JSON.parse(localStorage.getItem('adoptedPets')) || [],
      };
    },
    methods: {
      adoptPet(pet) {
        this.adoptedPets.push({ ...pet, name: `${pet.name} #${this.adoptedPets.length + 1}`, mood: 100, health: 100 });
        localStorage.setItem('adoptedPets', JSON.stringify(this.adoptedPets));
        this.$router.push('/house');
      },
    },
  };
  </script>
  
  <style>
  .adoption-center {
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
  