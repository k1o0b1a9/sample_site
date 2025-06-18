<script setup>
    import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
<template>
   <DefaultLayout>
        <section id="contact" class="contact-section" style="display: flex; flex-direction: column; align-items: center; padding: 60px 20px; gap: 30px;">
          <h2 style="font-size: 2rem; margin-bottom: 20px;">Contact</h2>
          <form class="contact-form" style="display: flex; flex-direction: column; width: 100%; max-width: 400px; gap: 15px;">
            <input type="text" placeholder="Your Name" required style="padding: 10px; border-radius: 5px; border: none; background: #333; color: #fff;" />
            <input type="email" placeholder="Your Email" required style="padding: 10px; border-radius: 5px; border: none; background: #333; color: #fff;" />
            <textarea placeholder="Your Message" rows="4" required style="padding: 10px; border-radius: 5px; border: none; background: #333; color: #fff;"></textarea>
            <button type="submit" style="padding: 10px; border-radius: 5px; border: none; background: #007BFF; color: #fff; cursor: pointer;">Send Message</button>
          </form>
          <div class="social-links" style="display: flex; gap: 20px; margin-top: 20px;">
            <a href="#" class="social-icon" style="color: #1DA1F2;">Twitter</a>
            <a href="#" class="social-icon" style="color: #4267B2;">Facebook</a>
            <a href="#" class="social-icon" style="color: #0077B5;">LinkedIn</a>
          </div>
        </section>
    </DefaultLayout> 
</template>