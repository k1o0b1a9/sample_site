<script setup>
    import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
<template>
  <DefaultLayout>
    <div class="about-container">
      <section class="fullscreen-image">
        <div class="blurred-background"></div>
        <div class="overlay">
          <h2 class="title">Who We Are</h2>
          <p class="description">
            We build modern, user-centric digital solutions to help you grow. Our team is driven by innovation, quality, and impact.
          </p>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<style scoped>
/* Layout container */
.about-container {
  display: grid;
  place-items: center;
  height: 100vh;
}

/* Fullscreen background */
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

/* Background image with blur and dark overlay */
.blurred-background,
.blurred-background::after {
  position: absolute;
  inset: 0;
}

.blurred-background {
  background-image: url('@/assets/about.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(6px);
  z-index: 0;
}

.blurred-background::after {
  content: "";
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* Overlay content */
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  padding: 2rem;
  max-width: 90%;
  animation: fadeIn 1s ease-in;
}

/* Title text */
.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

/* Description text */
.description {
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
