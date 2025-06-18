<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <section id="services" class="services-section">
      <h2>Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <img src="@/assets/serviceCard_consulting.png" alt="Consulting Logo" class="service-icon icon-consulting" />
          <h3>Consulting</h3>
          <p>Expert advice to help your business grow.</p>
        </div>
        <div class="service-card">
          <img src="@/assets/serviceCard_marketing.png" alt="Marketing Logo" class="service-icon icon-marketing" />
          <h3>Marketing</h3>
          <p>Innovative marketing strategies to boost your brand.</p>
        </div>
        <div class="service-card">
          <img src="@/assets/serviceCard_development.png" alt="Development Logo" class="service-icon icon-development" />
          <h3>Development</h3>
          <p>Custom software solutions tailored to your needs.</p>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>

.services-section {
  padding: 4em 2em;
  background-color: transparent;
  text-align: center;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}

.services-section h2 {
  font-size: 2.4rem;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 600;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.service-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

.icon-consulting {
    transform: scale(5.0);
}

.icon-marketing {
    transform: scale(1.8);
}

.icon-development {
    transform: scale(5.0);
}

.service-card {
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 280px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 36px rgba(0, 0, 0, 0.4);
}

.service-card h3 {
  color: #fff;
  font-size: 1.4rem;
  margin: 0.5rem 0;
}

.service-card p {
  color: #ccc;
  font-size: 0.95rem;
}
</style>