<template>
  <div id="project-template">
  <div id="canvas-container">
    <h2>{{projectDetails[0].name}}</h2>
    <canvas></canvas>
  </div>
  <aside id="project-description">
    <p>{{projectDetails[0].presentation}}</p>
  </aside>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['projectDetails']
}
</script>
