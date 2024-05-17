<template>
    <div class="pet-selection">
      <div v-if="!isAdopted">
        <h2>Select Your Pet</h2>
        <div class="pet" v-for="pet in pets" :key="pet.name" @click="selectPet(pet)">
          <img :src="pet.image" alt="Pet Image">
          <p>{{ pet.name }}</p>
        </div>
      </div>
      <div v-else>
        <div class="adopted-pet">
         
        </div>
        <PetStatus :pet="selectedPet" :mood="petMood" :health="petHealth" />
        <CaretakingActions @feed="handleFeed" @play="handlePlay" @groom="handleGroom" /> 
      </div>
      <div v-if="!isAdopted">
        <h3>Choose a name for your pet:</h3>
        <input type="text" v-model="petName" placeholder="Enter a name">
        <button @click="adoptPet">Adopt</button>
      </div>
    </div>
  </template>
  
  <script>
  import PetStatus from './PetStatus.vue';
  import CaretakingActions from './CaretakingActions.vue';
  
  export default {
    data() {
      return {
        pets: [
          { name: 'Cat', image: 'https://raw.githubusercontent.com/C-junior/khaoz-art-portfolio/main/src/assets/cris-junior-nijinrework.jpg' },
          { name: 'Dog', image: 'https://raw.githubusercontent.com/C-junior/khaoz-art-portfolio/main/src/assets/cris-junior-mistyfullrework.jpg' },
          { name: 'Bird', image: 'https://raw.githubusercontent.com/C-junior/khaoz-art-portfolio/main/src/assets/cris-junior-nemesis.jpg' },
        ],
        selectedPet: null,
        petName: '',
        petMood: 100, // Initial mood value
        petHealth: 100, // Initial health value
        isAdopted: false,
        isInteracting: false, // Flag to indicate if the player is interacting with the pet
      };
    },
    methods: {
      selectPet(pet) {
        this.selectedPet = pet;
      },
      handleFeed() {
        this.petHealth = Math.min(this.petMood + 20, 100); // Increase mood by 20, up to 100
      },
      handlePlay() {
        this.petMood = Math.min(this.petMood + 30, 100); // Increase mood by 30, up to 100
      },
      handleGroom() {
        this.petMood = Math.min(this.petMood + 10, 100); // Increase mood by 10, up to 100
      },
      adoptPet() {
  if (this.petName.trim() !== '') {
    this.selectedPet.name = this.petName;
    this.isAdopted = true;

    let adoptedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    adoptedPets.push({
      name: this.petName,
      image: this.selectedPet.image,
      mood: this.petMood,
      health: this.petHealth,
    });
    localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets));

    localStorage.setItem('selectedPet', JSON.stringify({
      name: this.petName,
      image: this.selectedPet.image,
      mood: this.petMood,
      health: this.petHealth,
    }));
    localStorage.setItem('petName', this.petName);
    localStorage.setItem('petMood', this.petMood);
    localStorage.setItem('petHealth', this.petHealth);
    this.decreaseMoodAndHealth();
  } else {
    alert('Please enter a name for your pet.');
  }
}

,
      decreaseMoodAndHealth() {
        setInterval(() => {
          if (!this.isInteracting) {
            this.petMood = Math.max(this.petMood - 5, 0); // Decrease mood by 5, minimum 0
            this.petHealth = Math.max(this.petHealth - 3, 0); // Decrease health by 3, minimum 0
            localStorage.setItem('petMood', this.petMood);
            localStorage.setItem('petHealth', this.petHealth);
          }
        }, 600000); // Decrease every 5 seconds (you can adjust this interval as needed)
      },
    },
    mounted() {
      const savedPet = localStorage.getItem('selectedPet');
      if (savedPet) {
        this.selectedPet = JSON.parse(savedPet);
        this.petName = localStorage.getItem('petName');
        this.petMood = parseInt(localStorage.getItem('petMood'));
        this.petHealth = parseInt(localStorage.getItem('petHealth'));
        this.isAdopted = true;
        this.decreaseMoodAndHealth();
      }
    },
    components: {
      PetStatus,
      CaretakingActions,
    },
  };
  </script>
  
  
  <style>
 .pet-selection {
  margin-bottom: 20px;
}

.pet-selection h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.pet-selection .pet {
  display: inline-block;
  margin: 0 10px;
}

.pet-selection .pet img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}

.pet-selection .pet img:hover {
  transform: scale(1.1);
}

  </style>
  