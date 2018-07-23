<template>
  <div id="project-template">
  <div id="canvas-container" ref="canvasContainer">
    <!-- data-displacement="img/displacement/8.jpg"  -->
    <h2>{{projectDetails[0].name}}</h2>
    <img :src="projectDetails[0].src"/>
    <canvas></canvas>
  </div>
  <aside>
    <div id="project-description">
      <p><span>{{projectDetails[0].span}}</span>{{projectDetails[0].presentation}}</p>
      <ul class="techno-container">
        <li v-for="(item, index) in projectDetails[0].techno" :key="index">{{item.name}}</li>
      </ul>
    </div>
     <div id="see-more-container" class="bottom-container">
      <div id="plus-icon"></div>
      <button><span data-content="En savoir plus"></span></button>
    </div>
    <div id="project-nav-container" :style="{ backgroundColor: projectDetails[0].backgroundColor}">
        <button :data-key="projectDetails[0].key" @click="(event)=> {changePage(event, $refs.canvasContainer)}" data-action="previous"><span data-content="Projet précédent"></span></button><button :data-key="projectDetails[0].key" @click="(event)=> {changePage(event, $refs.canvasContainer)}" data-action="next"><span data-content="Projet suivant"></span></button>
    </div>
  </aside>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['projectDetails', 'changePage']
}
</script>
