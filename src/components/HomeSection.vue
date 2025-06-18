<script setup>
import { RouterLink } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import logo from '@/assets/logo.png'
</script>

<template>
  <DefaultLayout>
    <section class="home-hero">
      <div class="hero-content">
        <h2>Welcome to Our Company</h2>
        <p class="subheading">Innovation. Excellence. Trust.</p>
        <img :src="logo" alt="Company Image" class="hero-logo" />
        <p>This is the homepage. Use the navigation above to learn more about us.</p>
        <RouterLink to="/about">
          <button class="cta-button">Learn More</button>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.home-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  margin: 0;
  padding: 0 1rem;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
}

.hero-content {
  max-width: 600px;
  color: #ddd;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.subheading {
  font-size: 1.25rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.hero-logo {
  max-width: 100%;
  height: auto;
  margin-top: 1em;
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
}

.cta-button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  background-color: #e65c00;
  transform: scale(1.08) rotate(-1deg);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

</style>