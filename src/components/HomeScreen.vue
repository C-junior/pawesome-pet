<template>
  <div class="home-container">
    <h1>Welcome to Pawesome Pets</h1>
    <div v-if="selectedPet" class="pet-container">
      <PetStatus :pet="selectedPet" :mood="petMood" :health="petHealth" />
      <CaretakingActions @feed="handleFeed" @play="handlePlay" @groom="handleGroom" />
    </div>
    <div v-else class="no-pet">
      <p>No pet adopted yet. Go to the <router-link to="/adoption-center">adoption center</router-link> to adopt a pet.</p>
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
      selectedPet: null,
      petMood: 100,
      petHealth: 100,
    };
  },
  methods: {
    handleFeed() {
      this.petHealth = Math.min(this.petHealth + 20, 100);
      this.updatePetStorage();
    },
    handlePlay() {
      this.petMood = Math.min(this.petMood + 30, 100);
      this.updatePetStorage();
    },
    handleGroom() {
      this.petMood = Math.min(this.petMood + 10, 100);
      this.updatePetStorage();
    },
    updatePetStorage() {
      if (this.selectedPet) {
        this.selectedPet.mood = this.petMood;
        this.selectedPet.health = this.petHealth;
        localStorage.setItem('selectedPet', JSON.stringify(this.selectedPet));
      }
    },
  },
  mounted() {
    const savedPet = JSON.parse(localStorage.getItem('selectedPet'));
    if (savedPet) {
      this.selectedPet = savedPet;
      this.petMood = savedPet.mood || 100;
      this.petHealth = savedPet.health || 100;
    }
  },
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

.pet-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-pet {
  font-size: 1.2em;
  margin-top: 20px;
}
</style>
