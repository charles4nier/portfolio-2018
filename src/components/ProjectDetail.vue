<template>
  <div id="project-detail-container" v-if="showDetails">
    <h2>{{projectDetails[0].name}}</h2>
    <div id="background-container">
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
    </div>
    <button id="close-detail">
    </button>
    <div id="part-1" class="detail-row">
      <img :src="projectDetails[0].imgDetail1" alt="une photo du projet">
      <div>
        <p>Technologies :</p>
        <ul>
          <li v-for="(item, index) in projectDetails[0].techno" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div id="part-2" class="detail-row">
      <div>
        <p>Missions :</p>
        <ul>
          <li v-for="(item, index) in projectDetails[0].missions" :key="index">{{item.mission}}</li>
        </ul>
      </div>
      <img :src="projectDetails[0].imgDetail2" alt="une photo du projet">
    </div>
    <div id="part-3" class="detail-row">
      <img :src="projectDetails[0].imgDetail3" alt="une photo du projet">
      <div>
        <p>Enjeux :</p>
        <ul>
          <li v-for="(item, index) in projectDetails[0].enjeux" :key="index">{{item.enjeu}}</li>
        </ul>
        <a :href="projectDetails[0].link" target="_blank"><span>Visiter le site</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: ['projectDetails', 'showDetails']
}
</script>
