// main.ts
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './style.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faWhatsapp, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

// Páginas
import Home from '@/pags/home.vue'
import QuemSomos from '@/pags/QuemSomos.vue'
import Manifesto from '@/pags/Manifesto.vue'
import Solucoes from '@/pags/Solucoes.vue'
import NotFound from '@/pags/NotFound.vue'

// Adiciona ícones na library
library.add(faInstagram, faWhatsapp, faEnvelope, faBars, faLinkedin, faLinkedinIn)

// Rotas
const routes = [
  { path: '/', component: Home },
  { path: '/quem-somos', component: QuemSomos },
  { path: '/manifesto', component: Manifesto },
  { path: '/solucoes', component: Solucoes },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

// Cria a aplicação SSG
export const createApp = ViteSSG(
  App,
  { 
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Registra o componente FontAwesome
    app.component('font-awesome-icon', FontAwesomeIcon)
    
    // Configuração adicional para SSG
    if (!isClient) {
      // Configurações específicas para server-side rendering
      console.log('SSG: Renderizando rotas:', routes.map(r => r.path))
    }
  }
)
