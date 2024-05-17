<template>
  <div class="actions">
    <button @click="$emit('feed')">Feed</button>
    <button @click="$emit('play')">Play</button>
    <button @click="$emit('groom')">Groom</button>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.actions button {
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.actions button:hover {
  background-color: #45a049;
}
</style>
