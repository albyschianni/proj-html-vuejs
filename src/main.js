import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGem, faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faClock, faEnvelope, faLocation, faMotorcycle, faPhone, faRocket, faSuitcase, faTruckFast, faTruckMoving, faVanShuttle } from '@fortawesome/free-solid-svg-icons'



library.add( faFacebook, faTwitter, faLinkedin, faUser, faEnvelope, faPhone, faClock, faLocation, faTruckFast, faMotorcycle, faVanShuttle, faTruckMoving, faRocket, faSuitcase,faGem, faArrowRight )


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

