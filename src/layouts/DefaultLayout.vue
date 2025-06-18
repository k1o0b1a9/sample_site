<template>
  <header>
    <h1 class="company-name">
      <router-link to="/"><img :src="logo" alt="Company Logo" class="logo-image" /></router-link>
    </h1>
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">☰</button>
    <nav :class="['navigation', { open: isMenuOpen }]">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.png'
const isMenuOpen = ref(false)
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1e1e1e;
  z-index: 1000;
  padding: 0.25rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 70px;
}

.company-name {
  font-size: 1.8rem;
  font-weight: bold;
  color: #dddddd;
  margin: 0;
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  text-decoration: none;
  color: #dddddd;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #a0f0c0;
}

main {
  margin-top: 100px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #dddddd;
  font-size: 1.8rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navigation {
    display: none;
    flex-direction: column;
    gap: 1rem;
    background-color: #1e1e1e;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem 2rem;
  }

  .navigation.open {
    display: flex;
    animation: fadeIn 0.3s ease-out;
  }

  .navigation ul {
    flex-direction: column;
    gap: 1rem;
  }
}

.logo-image {
  height: 90px;
  display: block;
}


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>