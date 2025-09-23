<script setup lang="ts">
import logo from "@/assets/Logo-Thésera-Principal.webp"
import { ref, onMounted, onUnmounted, watch } from "vue"
import { useRoute } from "vue-router"

import FormEntreEmContato from "./FormEntreEmContato.vue"

// estado do menu sticky
const navRef = ref<HTMLElement | null>(null)
const isSticky = ref(false)

const handleScroll = () => {
    isSticky.value = window.scrollY > 100
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

// estado do menu mobile
const isMenuOpen = ref(false)
const isMenuClick = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    isMenuClick.value = true
}

// estado do formulário
const isFormOpen = ref(false)
const handleForm = (opction: string) => {
  if(opction === 'Entre em Contato'){
    isFormOpen.value = !isFormOpen.value
  }
}

// fecha o formulário sempre que mudar de rota
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    isFormOpen.value = false
  }
)

// links de navegação centralizados em um único array
const navLinks = [
    { name: "Home", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Manifesto", path: "/manifesto" },
    { name: "Soluções", path: "/solucoes" }
]
</script>

<template>
  <!-- MENU DESKTOP ESTÁTICO -->
  <nav class="menu_desktop menu_desktop_estatico">
    <div class="contem_conteudo">
      <div class="log_thesera">
        <img :src="logo" alt="logo da Thésera." />
      </div>
      <ul>
        <li v-for="link in navLinks" :key="link.path">
          <router-link
            :to="link.path"
            exact-active-class="pagina_ativa"
          >
            {{ link.name }}
          </router-link>
        </li>
        <li key="entre_em_contato">
          <span 
            @click="handleForm('Entre em Contato')"
            class="entre_em_contato"
          >Entre em Contato</span>
        </li>
      </ul>
    </div>
  </nav>

  <!-- MENU DESKTOP SCROLL -->
  <nav
    class="menu_desktop"
    ref="navRef"
    :class="{ sticky: isSticky, menu_estatico: !isSticky }"
  >
    <div class="contem_conteudo">
      <div class="log_thesera">
        <img :src="logo" alt="logo da Thésera." />
      </div>
      <ul>
        <li v-for="link in navLinks" :key="link.path">
          <router-link
            :to="link.path"
            exact-active-class="pagina_ativa"
          >
            {{ link.name }}
          </router-link>
        </li>
        <li key="entre_em_contato">
          <span 
            @click="handleForm('Entre em Contato')"
            class="entre_em_contato"
          >Entre em Contato</span>
        </li>
      </ul>
    </div>
  </nav>

  <!-- MENU MOBILE -->
  <nav class="nav_mobile">
    <div class="contem_conteudo mobile">
      <div class="log_thesera">
        <img :src="logo" alt="logo da Thésera." />
      </div>
      <div class="contem_icone" @click="toggleMenu">
        <font-awesome-icon class="icon" :icon="['fas', 'bars']" />
      </div>
    </div>
    <ul :class="{ open: isMenuOpen, close: !isMenuOpen && isMenuClick }">
      <li v-for="link in navLinks" :key="link.path">
        <router-link
          :to="link.path"
          exact-active-class="pagina_ativa_mobile"
          @click="toggleMenu()"
          >
          {{ link.name }}
        </router-link>
      </li>
      <li key="entre_em_contato">
          <span 
            @click="() => {
              toggleMenu()
              handleForm('Entre em Contato')
            }"
            class="entre_em_contato"
          >Entre em Contato</span>
        </li>
    </ul>
  </nav>

  <!-- FUNDO ESCURO DO MENU MOBILE -->
  <div
    :class="{
      backgroud_escuro_menu_mobile_display: isMenuOpen,
      backgroud_escuro_menu_mobile: true
    }"
    @click="toggleMenu"
  ></div>

  <!-- FORMULÁRIO -->
   <div
    :class="['contem_form', { closeform: !isFormOpen }]"
   >
      <div class="contem_conteudo_form">
        <FormEntreEmContato
          :onFormAction="handleForm"
          :isOpen="isFormOpen"
        />
      </div>
   </div>
</template>

<style scoped lang="scss">
    *{
        padding: 0;
        font-family: $font-mulish;
        box-sizing: border-box;
        color: $verdeMusgo;
    }
    .nav_mobile{
        display: none;
    }
    .contem_conteudo{
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
    }
    .menu_desktop_estatico{
        padding-left: 20px;
    }
    nav{
        background-color: $rozaClaro;
        z-index: 1000;
        position: relative;
        &.menu_estatico{
            position: absolute;
            top: -100px
        }
        &.sticky {
            transition: all 0.3s ease;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: $rozaClaro;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            .log_thesera{
                margin-left: 25px;
            }
        }
        .contem_conteudo{
            display: flex;
            align-items: center;
            .log_thesera{
                width: 150px;
                margin-top: 10px;
                img{
                    width: 100%;
                }
            }
            ul{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 0 10px;
                flex: 1;
                li{
                    list-style: none;
                    margin: 0 10px;
                    cursor: pointer;
                    a{
                        width: 100%;
                        text-decoration: none;
                        font-size: 18px;
                    }
                    a:hover{
                        border-bottom: 2px solid $rozaEscuro;
                    }
                    .pagina_ativa{
                        border-bottom: 2px solid $rozaEscuro;
                    }
                    .entre_em_contato{
                        background-color: $rozaEscuro;
                        color: $white;
                        padding: 2px 10px;
                        border-radius: 100px;
                    }
                    .entre_em_contato:hover{
                        border: none;
                        background-color: $verdeMusgo;
                    }
                }
            }
        }
    }
    .backgroud_escuro_menu_mobile{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }
    .backgroud_escuro_menu_mobile_display{
        display: block;
    }

    @keyframes blur {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .contem_form{
      position: fixed;
      z-index: 900;
      top: 0px;
      left: 0;
      width: 100vw;
      height: 100vh;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      animation: blur 0.4s ease forwards;
      .contem_conteudo_form{
        padding-top: 150px;
        padding-bottom: 50px;
        position: relative;
        width: 100%;
        height: 100%;
        max-height: 1000px;
        overflow: hidden;
        overflow-y: auto;
      }
    }
    .closeform{
      display: none;
    }

    @keyframes menuDown {
        0% {
            height: 0;
        }
        99%{
            height: 250px;
        }
        100% {
            height: auto;
        }
    }
    @keyframes menuUp {
        0% {
            height: 250px;
        }
        100% {
            height: 0;
        }
    }

    @media(max-width: 891px){
        .menu_desktop{
            display: none;
        }
        .nav_mobile{
            display: block;
        }
        nav{
            .mobile{
                justify-content: center;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                padding: 10px 15px;
                background-color: #E7CCB3;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                z-index: 102;
                .log_thesera{
                    flex: 1;
                    img{
                        max-width: 150px;
                    }
                }
                .contem_icone{
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    .icon{
                        font-size: 25px;
                    }
                }
                .contem_icone:hover{
                    cursor: pointer;
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
            ul{
                position: fixed;
                top: 53px;
                left: 0;
                width: 100%;
                height: 0;
                transform: .5s;
                overflow: hidden;
                text-align: center;
                background-color: $rozaClaro;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                z-index: 101;
                li{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    a, span{
                        flex: 1;
                        padding: 15px 0;
                        text-decoration: none;
                    }
                    a:hover, .pagina_ativa_mobile, span:hover{
                        background-color: $verdeMusgo;
                        color: $white;
                        opacity: 0.8;
                    }
                }
            }
            .open{
                height: auto;
                animation: menuDown 0.6s ease forwards;
            }
            .close{
                animation: menuUp 0.6s ease forwards;
            }

        }
    }

    @media(max-width: 690px){
      .contem_form{
        .contem_conteudo_form{
          padding-top: 180px;
        }
      }
    }

    @media(max-width: 460px){
      .contem_form{
        .contem_conteudo_form{
          padding-top: 135px;
        }
      }
    }

</style>