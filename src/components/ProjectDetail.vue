<template>
  <div id="project-detail-container">
    <div id="background-container">
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
    </div>
    <button id="close-detail">
    </button>
    <div id="part-1" class="detail-row">
      <h3>{{projectDetails[0].name}}</h3>
      <img src="" alt="">
      <p></p>
    </div>
    <div id="part-2" class="detail-row">
      <p></p>
      <img src="" alt="">
    </div>
    <div id="part-3" class="detail-row">
      <img src="" alt="">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: ['projectDetails']
}
</script>
