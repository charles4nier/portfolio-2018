<template>
  <div id="project-detail-container">
    <h2 id="project-detail-title"><span>{{projectDetails[0].name}}</span></h2>
    <div id="background-container">
      <div class="background-part"></div>
      <div class="background-part"></div>
      <div class="background-part"></div>
    </div>
    <button class="close-button" id="close-detail" @click="hide">
      <div></div>
    </button>
    <div id="part-1" class="detail-row">
      <img :src="projectDetails[0].imgDetail1" alt="une photo du projet">
      <div>
        <p>Technologies :</p>
        <ul>
          <li v-for="(item, index) in projectDetails[0].techno" :key="index">- {{item.name}}</li>
        </ul>
      </div>
    </div>
    <div id="part-2" class="detail-row">
      <div>
        <p>Missions :</p>
        <ul>
          <li v-for="(item, index) in projectDetails[0].missions" :key="index">- {{item.mission}}</li>
        </ul>
      </div>
      <img :src="projectDetails[0].imgDetail2" alt="une photo du projet">
    </div>
    <div id="part-3" class="detail-row">
      <img :src="projectDetails[0].imgDetail3" alt="une photo du projet">
      <div>
        <p>Enjeux :</p>
        <ul>
          <li v-for="(item, index) in projectDetails[0].enjeux" :key="index">- {{item.enjeu}}</li>
        </ul>
        <a :href="projectDetails[0].link" target='_blank'><span data-hover="Visiter le site">Visiter le site</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from '../assets/jsModules/ScrollReveal'

export default {
  name: 'ProjectDetail',
  props: ['projectDetails', 'showProjectDetail'],
  data () {
    return {
      openDetail: false,
      revealOpts: [
        { 
          target: '#part-2',
          delay: 150,
          origin: 'bottom'
        },
        { 
          target: '#part-2 p',
          delay: 150,
          origin: 'left'
        },
        { 
          target: '#part-2 ul',
          delay: 150,
          origin: 'bottom'
        },
        { 
          target: '#part-3',
          delay: 250,
          origin: 'bottom'
        },
        { 
          target: '#part-3 p',
          delay: 550,
          origin: 'left'
        },
        { 
          target: '#part-3 ul',
          delay: 150,
          origin: 'bottom'
        },
        { 
          target: '#part-3 a',
          delay: 150,
          origin: 'right'
        }
      ]
    }
  },
  methods: {
    hide: function () {
      this.$store.state.showDetails = false
    }
  },
  watch: {
    '$store.state.showDetails': function (newVal, oldVal) {
      if (newVal === true) {
        this.revealOpts.map(item => {
          ScrollReveal.reveal(item.target, {
            container: '#project-detail-container',
            duration: item.target === ('#part-2' || '#part-3') ? 1000 : 500,
            delay: item.delay,
            opacity: 0,
            origin: item.origin,
            distance: item.target === ('#part-2' || '#part-3') ? '10%' : '50px',
            easing: 'ease-out'
          })
        })
      } else {
        this.revealOpts.map(item => {
          ScrollReveal.clean(item.target)
        })
      }
    }
  }  
}
</script>
