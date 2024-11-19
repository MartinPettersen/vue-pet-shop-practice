import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';




import App from './App.vue'
import router from './router'

library.add(faWhatsapp);
library.add(faLock);
library.add(faTrashCan);
library.add(faMessage);
library.add(faThumbsUp);
library.add(faTwitter);
library.add(faCircle);
library.add(faPinterestP);
library.add(faStarHalf);
library.add(faStar);
library.add(faFacebookF);
library.add(faYoutube);
library.add(faInstagram);
library.add(faCommentDots);
library.add(faFaceSmile);
library.add(faPaperclip);
library.add(faPaperPlane);
library.add(faXmark);
library.add(faChevronRight);
library.add(faChevronDown);
library.add(faChevronUp);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
