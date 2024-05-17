<template>
  <div class="pet-status">
    <img :src="pet.image" alt="Pet Image">
    <h2>{{ pet.name }}</h2>
    <p>Mood: {{ moodText }}</p>
    <p>Health: {{ healthText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pet: Object,
    mood: Number,
    health: Number,
  },
  computed: {
    moodText() {
      if (this.mood >= 80) return 'Happy';
      if (this.mood >= 60) return 'Content';
      if (this.mood >= 40) return 'Neutral';
      if (this.mood >= 20) return 'Sad';
      return 'Angry';
    },
    healthText() {
      if (this.health >= 80) return 'Healthy';
      if (this.health >= 60) return 'Fine';
      if (this.health >= 40) return 'Unwell';
      if (this.health >= 20) return 'Sick';
      return 'Critical';
    },
  },
};
</script>

<style scoped>
.pet-status {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pet-status img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.pet-status h2 {
  margin: 10px 0;
}

.pet-status p {
  margin: 5px 0;
}
</style>
