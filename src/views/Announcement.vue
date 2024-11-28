<script setup>
import getAnnouncement from '@/composables/getAnnouncement';

  const {announcement, error, load} = getAnnouncement();
  load();
</script>

<template>
    <section class="announcement">
        <div class="d-flex justify-content-center mb-5">
            <img class="w-50 object-fit-cover shadow" :src="announcement?.image" alt="">
        </div>
        <div style="padding: 40px 80px;">
          <p v-html="announcement?.content"></p>
        </div>
    </section>
</template>

<style scoped>
    .announcement {
        padding: 30px 15%;
    }


    @media (max-width: 1600px) {
        .announcement {
          padding: 30px 9%;
        }
       
      }
      
      @media (max-width: 1200px) {
        .announcement {
          padding: 30px 3%;
        }
       
      }
</style>