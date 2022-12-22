import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faGem, faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faCheck, faClock, faEnvelope, faLocationDot, faMotorcycle, faPhone, faRocket, faSuitcase, faTruckFast, faTruckMoving, faVanShuttle, faXmark } from '@fortawesome/free-solid-svg-icons'



library.add( faFacebook, faTwitter, faLinkedin, faUser, faEnvelope, faPhone, faClock, faLocationDot, faTruckFast, faMotorcycle, faVanShuttle, faTruckMoving, faRocket, faSuitcase,faGem, faArrowRight, faCopyright, faCheck, faXmark )


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

