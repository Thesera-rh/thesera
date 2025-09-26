<script setup lang="ts">
import { ref } from 'vue'
import header from '@/assets/FORM/foto_header_form.avif'
import { watch } from 'vue'

const props = defineProps<{
  onFormAction: (option: string) => void
  isOpen: boolean
}>()

const submitForm = () => {
  props.onFormAction('Entre em Contato')
}

const resetForm = () => {
  formData.value = { nome: '', email: '', telefone: '', assunto: '', mensagem: '' }
  errors.value = {}
  success.value = null
  sending.value = false
}

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) resetForm()
  }
)

const formData = ref({
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
})

const sending = ref(false)
const success = ref<boolean | null>(null)
const errors = ref<{ [key: string]: string }>({})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/

const formatPhoneInput = (value: string) => {
  const numbersOnly = value.replace(/\D/g, '').slice(0, 11)
  const len = numbersOnly.length

  if (len === 0) return ''
  if (len <= 2) return `(${numbersOnly}`
  if (len <= 6) {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`
  }
  if (len <= 10) {
    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 6)}-${numbersOnly.slice(6)}`
  }
  return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 7)}-${numbersOnly.slice(7)}`
}

const onPhoneInput = (e: Event) => {
  const el = e.target as HTMLInputElement
  const formatted = formatPhoneInput(el.value)
  formData.value.telefone = formatted

  requestAnimationFrame(() => {
    try {
      el.setSelectionRange(formatted.length, formatted.length)
    } catch {
      /* ignore */
    }
  })

  if (errors.value.telefone) errors.value.telefone = ''
}

const validateForm = () => {
  const newErrors: { [key: string]: string } = {}

  if (!formData.value.nome.trim()) newErrors.nome = 'O nome é obrigatório.'
  if (!formData.value.email.trim()) {
    newErrors.email = 'O email é obrigatório.'
  } else if (!emailRegex.test(formData.value.email)) {
    newErrors.email = 'Digite um email válido.'
  }

  if (!formData.value.telefone.trim()) {
    newErrors.telefone = 'O telefone é obrigatório.'
  } else if (!phoneRegex.test(formData.value.telefone)) {
    newErrors.telefone = 'Digite um telefone válido. Ex: (11) 91234-5678'
  }

  if (!formData.value.assunto.trim()) newErrors.assunto = 'O assunto é obrigatório.'
  if (!formData.value.mensagem.trim()) newErrors.mensagem = 'A mensagem é obrigatória.'

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  if (!validateForm()) return

  sending.value = true

  const form = e.target as HTMLFormElement
  const data = new FormData(form)
  data.append('form-name', 'contact')

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
    success.value = true
    formData.value = { nome: '', email: '', telefone: '', assunto: '', mensagem: '' }
    errors.value = {}

    setTimeout(() => {
      success.value = null
    }, 3000)
  } catch (err: unknown) {
    success.value = false

    setTimeout(() => {
      success.value = null
    }, 3000)
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="contem_box_form">
    <div class="contem_img contem_img_mobile">
      <img :src="header" alt="" />
    </div>

    <div class="contem_form">
      <h1>Nossa porta está sempre aberta!</h1>
      <span>Vamos conversar</span>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        @submit="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Não preencha este campo: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="nome" placeholder="Nome completo" v-model="formData.nome" />
        <span v-if="errors.nome" class="erro">{{ errors.nome }}</span>

        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          :value="formData.telefone"
          @input="onPhoneInput"
        />
        <span v-if="errors.telefone" class="erro">{{ errors.telefone }}</span>

        <input type="email" name="email" placeholder="Email" v-model="formData.email" />
        <span v-if="errors.email" class="erro">{{ errors.email }}</span>

        <input type="text" name="assunto" placeholder="Assunto" v-model="formData.assunto" />
        <span v-if="errors.assunto" class="erro">{{ errors.assunto }}</span>

        <textarea name="mensagem" placeholder="Mensagem" v-model="formData.mensagem" />
        <span v-if="errors.mensagem" class="erro">{{ errors.mensagem }}</span>

        <button type="submit" :disabled="sending">
          {{ sending ? 'Enviando...' : 'Enviar' }}
        </button>
      </form>

      <span 
        v-if="success === true"
        class="mensagem_status_form"
      >
        Mensagem enviada com sucesso!
        <div class="progress_bar"></div>
      </span>
      <span 
        v-if="success === false"
        class="mensagem_status_form msg_erro"
      >
        Ocorreu um erro. Tente novamente.
        <div class="progress_bar"></div>
      </span>
    </div>

    <div class="contem_chamada">
      <div class="contem_img">
        <img :src="header" alt="" />
      </div>
      <div class="contem_redes_sociais">
        <h2>Nos acompanhe nas redes sociais!</h2>
        <div class="contem_incones">
          <a href="https://wa.me/5547992889906" target="_blank" class="icone">
            <font-awesome-icon class="icon" :icon="['fab', 'whatsapp']" />
          </a>
          <a href="https://www.instagram.com/thesera.rh" target="_blank" class="icone">
            <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.linkedin.com/in/thiara-francielle-heckmann-6074b52b/" target="_blank" class="icone">
            <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
    </div>

    <p class="closeMenu" @click="submitForm">x</p>
  </div>
</template>

<style scoped lang="scss">
    *{
        font-family: $font-mulish;
        box-sizing: border-box;
    }
    .erro {
        color: red;
        font-size: 12px;
        margin-bottom: 5px;
        display: block;
    }

    .contem_box_form{
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        -webkit-box-shadow: 2px 1px 13px 0px rgba(0,0,0,0.66); 
        box-shadow: 2px 1px 13px 0px rgba(0,0,0,0.66);
        border-radius: 30px;
        padding: 20px 50px;
        padding-right: 0;
        width: 90%;
        max-width: 850px;
        animation: slideFade 0.4s ease forwards;

        p{
            position: absolute;
            top: -40px;
            right: -10px;
            background-color: $rozaEscuro;
            color: white;
            border-radius: 50%;
            font-size: 30px;
            font-weight: bolder;
            padding: 0px 13px;
            padding-bottom: 5px;
            cursor: pointer;
            transition: .5s;
            border: 5px solid white;
        }
        p:hover{
            background-color: $verdeMusgo;
        }

        .contem_form{
            flex: 1;
            h1{
                max-width: 300px;
                margin: 0;
                margin-bottom: 10px;
            }
            form{
                position: relative;
                max-width: 380px;
                width: 100%;
                margin-top: 10px;
                input,
                textarea{
                    width: 90%;
                    display: block;
                    margin-bottom: 10px;
                    border: 3px solid #D9D9D9;
                    border-radius: 7px;
                    padding: 7px;
                    padding-top: 10px;
                    font-size: 12px;
                    outline: none;
                    color: $verdeMusgo;
                }
                input::placeholder,
                textarea::placeholder {
                    color: #D9D9D9;
                }
                textarea{
                    height: 100px;
                }
                button{
                    background-color: $verdeMusgo;
                    outline: none;
                    border: none;
                    color: white;
                    padding: 5px 50px;
                    border-radius: 5px;
                    display: block;
                    margin: 0 auto;
                    transition: .3s;
                    cursor: pointer;
                }
                button:hover{
                    background-color: $rozaEscuro;
                }
            }
            .mensagem_status_form{
              background-color: $rozaEscuro;
              color: $rozaClaro;
              padding: 10px 50px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 100000;
              border-radius: 10px;
              -webkit-box-shadow: 2px 1px 13px 0px rgba(0,0,0,0.66); 
              box-shadow: 2px 1px 13px 0px rgba(0,0,0,0.66);
              animation: mostrarMsg 0.4s ease forwards;

              .progress_bar {
                position: absolute;
                bottom: -10px;
                left: 3%;
                height: 5px;
                width: 0%;
                background-color: $verdeMusgo; 
                animation: progressLoad 3s linear forwards;
                border-radius: 30px;
              }
            }
            .msg_erro{
              background-color: red;
            }

            @keyframes progressLoad {
              from { width: 0%; }
              to { width: 94%; }
            }

            @keyframes mostrarMsg {
              0%{
                opacity: 0;
              }
              100%{
                opacity: 1;
              }
            }
        }

        .contem_img_mobile{
            display: none;
        }
        .contem_img{
            width: 300px;
            margin-top: -180px;
            overflow: hidden;
            img{
                width: 100%;
                position: relative;
                right: -1px;
            }
        }
        .contem_chamada{
            .contem_redes_sociais{
                h2{
                    color: $rozaEscuro;
                    font-size: 20px;
                    max-width: 180px;
                    font-weight: normal;
                    text-align: center;
                }
                .contem_incones{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    max-width: 180px;
                    a{
                        color: white;
                        background-color: $rozaEscuro;
                        padding: 5px;
                        border-radius: 50%;
                        font-size: 22px;
                        transition: .3s;
                    }
                    a:hover{
                        background-color: $verdeMusgo;
                    }
                }
            }
        }
    }

    @keyframes slideFade {
        0% {
            top: -530px;
        }
        100% {
            top: 0;
        }
    }

    @media (max-width: 690px){
       .contem_box_form{
            display: block;
            padding-right: 50px;
            p{
                left: -10px;
                right: auto;
                font-size: 20px;
                padding: 3px 13px;
                padding-bottom: 8px;
                top: -30px;
            }

            .contem_form{
                h1{
                    max-width: 200px;
                    font-size: 20px;
                }
                span{
                    font-size: 16px;
                }
                form{
                    max-width: none;
                    margin-top: 65px;
                    input,
                    textarea{
                        width: 100%;
                        padding: 5px 10px;
                        padding-top: none;
                    }
                    button{
                        border-radius: 20px;
                    }
                }
            }

            .contem_img_mobile{
                display: block;
            }
            .contem_img{
                width: 200px;
                margin-top: -160px;
                right: 0;
                position: absolute;
                overflow: hidden;
                img{
                    width: 100%;
                    position: relative;
                    right: -1px;
                }
            }

            .contem_chamada{
                .contem_img{
                    display: none;
                }
                .contem_redes_sociais{
                    h2{
                        margin: 10px auto;
                        margin-top: 20px;
                    }
                    .contem_incones{
                        margin: 0 auto;
                    }
                }
            }
        }
    }

    @media (max-width: 460px){
       .contem_box_form{
            padding: 20px 35px;
            .contem_form{
                h1{
                    max-width: 150px;
                    font-size: 16px;
                    margin-bottom: 0px;
                }
                span{
                    font-size: 12px;
                }
                form{
                    margin-top: 20px;
                    button{
                        font-size: 12px;
                    }
                }
            }
            .contem_img{
                width: 122px;
                margin-top: -100px;
            }

            .contem_chamada{
                .contem_img{
                    display: none;
                }
                .contem_redes_sociais{
                    h2{
                        max-width: 150px;
                        font-size: 16px;
                    }
                    .contem_incones{
                        margin: 0 auto;
                        a{
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
</style>