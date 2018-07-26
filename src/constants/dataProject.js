import Superjoli from '../assets/images/superjoli.jpg'
import SuperjoliDetail1 from '../assets/images/SuperjoliDetail-1.png'
import SuperjoliDetail2 from '../assets/images/SuperjoliDetail-2.png'
import SuperjoliDetail3 from '../assets/images/SuperjoliDetail-3.png'
import Bamboo from '../assets/images/bamboo.jpg'
import bambooDetail1 from '../assets/images/bambooDetail-1.png'
import bambooDetail2 from '../assets/images/bambooDetail-2.png'
import bambooDetail3 from '../assets/images/bambooDetail-3.png'
import Ikmusic from '../assets/images/iKmusic.jpg'
import ikDetail1 from '../assets/images/ikDetail-1.png'
import ikDetail2 from '../assets/images/ikDetail-2.png'
import ikDetail3 from '../assets/images/ikDetail-3.png'
import LearnEat from '../assets/images/learnEat.png'
import Disp from '../assets/images/dispFactor.png'
// import Disp from '../assets/images/dispFactor.jpg'
// import Disp from '../assets/images/einstein.jpg'
// import MusicsPicture from '../assets/img/musics.jpg';
// import ReviewsPicture from '../assets/img/reviews.jpg';

/* eslint-disable */
const dataProject = [
  { 
    name: 'superjoli',
    title: 'svg.path',
    src: Superjoli,
    path: 'picturepath',
    span: 'Superjoli',
    presentation: ' est un site réalisé pour une agence de communication basée au Vietnam. Il a pour but de mettre en avant l\'ensemble des productions réalisées par l\'agence grâce à un support moderne et dynamique.',
    imgDetail1: SuperjoliDetail1,
    imgDetail2: SuperjoliDetail2,
    imgDetail3: SuperjoliDetail3,
    techno: [
        {
            name:'- Html5'
        }, 
        {
            name:'- Css3'
        }, 
        {
            name:'- Js'
        }, 
        {
            name:'- Vue.js'
        }
    ],
    span2: 'Missions :',
    missions: [
        {
            mission: '- Développer un site dynamique et moderne'
        },
        {
            mission: '- Offrir une expérience utilisateur améliorée en développant une SPA'
        }, 
        {
            mission: '- Site à la fois responsive et fluide'
        }
    ],
    span3: 'Enjeux :',
    enjeux: [
        {
            enjeu: '- Concevoir entièrement un site de grande taille'
        },
        {
            enjeu: '- Réaliser des templates de pages réutilisables'
        },
        {
            enjeu: '- Mettre en place une base de données internes'
        },
        {
            enjeu: '- Apprendre le fonctionnement des transitions de pages animées'
        },
        {
            enjeu: '- Développer des modules de scroll animé'
        }],
    key: 1,
    disp: Disp,
    link: 'http://www.superjoli.com/'
  },
  { 
    name: 'bamboo-step',
    title: 'svg.path',
    src: Bamboo,
    path: 'picturepath',
    span: 'Bamboo Step',
    presentation: ' est un site réalisé pour mettre en avant un produit novateur : des pailles en bambou. Objet sobre et élégant, le site souligne les qualités essentielles de ces nouvelles pailles.',
    imgDetail1: bambooDetail1,
    imgDetail2: bambooDetail2,
    imgDetail3: bambooDetail3,
    techno: [
        {
            name: '- Html5'
        },
        {
            name: '- Sass'
        }, 
        {
            name: '- Js'
        }
    ],
    span2: 'Missions :',
    missions: [
        {
            mission: '- Développer un site dynamique et moderne, à la fois responsive et fluide'
        },
        {
            mission: '- Site à la fois responsive et fluide'
        },
        {
            mission: '- Réaliser un site sobre et esthétique, à l\'image du produit'
        } 
    ],
    span3: 'Enjeux :',
    enjeux: [
        {
            enjeu: '- Réaliser des animations au scroll'
        },
        {
            enjeu: '- Développer dans un environnement js natif'
        }
    ],
    key: 2,
    disp: Disp,
    link:'https://www.bamboostep.com/'
  },
  { 
    name: 'ik-music',
    title: 'svg.path',
    src: Ikmusic,
    span: 'Ik Music',
    presentation: ' est un site réalisé pour Idrisse Khelifi, compositeur basé à Paris. Le site a pour but de mettre en avant ses créations audios grâce à un support sobre, dynamique et élégant.',
    imgDetail1: ikDetail1,
    imgDetail2: ikDetail2,
    imgDetail3: ikDetail3,
    techno: [
        {
            name:'- Html5'
        },
        {
            name: '- Css3'
        }, 
        {
            name: '- Js'
        },
        {
            name: '- Vue.js'
        }
    ],
    span2: 'Missions :',
    missions: [
        {
            mission: '- Développer un site dynamique et moderne'
        },
        {
            mission: '- Améliorer l\'expérience utilsiateur grâce à une SPA'
        },
        {
            mission: '- Réaliser un site moderne, design tout en restant sobre'
        }
    ],
    span3: 'Enjeux :',
    enjeux: [
        {
            enjeu: '- Proposer un design innovant'
        },
        {
            enjeu: '- Concevoir l\'architecture du site pour réaliser de belles animations'
        },
        {
            enjeu: '- Améliorer mes connaissances dans la gestion du router et des transitions de pages'
        },
        {
            enjeu: '- Progresser dans l\'utilsiation de bibliothque d\'animation'
        }
    ],
    key: 3,
    disp: Disp,
    link: 'http://ikmusic.org/'
  },
  { 
    name: 'learn-eat',
    title: 'svg.path',
    src: LearnEat,
    span: 'Learn eat',
    presentation: ' est un site réalisé pour Marie Gaillard qui propose d\'apprendre l\'anglais ou le français en cuisinant. Inspiré par la cuisine et l\'enseignement, il reprend les codes couleurs de la gastronomie tout en restant ludique.',
    imgDetail1: 'src',
    imgDetail2: 'src',
    imgDetail3: '',
    techno: [
        {
            name:'Html5'
        },
        {
            name: 'Css3'
        }, 
        {
            name: 'jQuery'
        }
    ],
    span2: 'Missions :',
    description: 'text',
    description2: 'text',
    key: 4,
    disp: Disp,
    link: 'http://www.learn-eat.fr/'
  },
]
  
export default dataProject

/* eslint-disable */
