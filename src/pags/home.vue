<script setup lang="ts">

    import imgApresentacao from '@/assets/imagem_apresentacao.webp'
    import imgCorpo from '@/assets/foto_header.webp'
    import logoAlternativo from '@/assets/carimbo thesera.webp'

    import { ref, onMounted } from "vue"

    import { useHead } from '@unhead/vue'
    useHead({
        title: 'Thésera RH: Consultoria Estratégica em Gestão de Pessoas',
        meta: [
            {
                name: 'description',
                content: 'Transformamos o RH em diferencial competitivo. Consultoria de gestão de pessoas, liderança, cultura e retenção de talentos.'
            },
            {
                property: 'og:title',
                content: 'Thésera RH – Consultoria estratégica em gestão de pessoas'
            },
            {
                property: 'og:description',
                content: 'Soluções de RH sob medida para empresas que valorizam pessoas. Liderança, cultura organizacional e desempenho sustentável.'
            },{
                property: 'og:image',
                content: imgCorpo
            },{
                property: 'og:url',
                content: 'https://theserarh.netlify.app/'
            },{
                property: 'og:type',
                content: 'website'
            }
        ]
    } satisfies Parameters<typeof useHead>[0])

    import { Swiper, SwiperSlide } from "swiper/vue"
    import { Navigation, Pagination } from "swiper/modules";

    // Import CSS do Swiper
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";

    import { reactive } from "vue"

    const servicos = reactive([
        {id:0, titulo: 'RH como estratégia do negócio', texto: 'Atuamos para posicionar o RH como uma área essencial à performance empresarial, diretamente conectada ao planejamento e aos objetivos da organização.'},
        {id:1, titulo: 'Soluções personalizadas', texto: 'Não trabalhamos com fórmulas prontas. Cada proposta é construída de forma conjunta, respeitando o contexto, o estágio de maturidade e os desafios específicos de cada cliente.'},
        {id:2, titulo: 'Parceria próxima, técnica e sensível', texto: 'Mais do que consultoria, oferecemos apoio real. Combinamos conhecimento técnico e um olhar humano para promover mudanças sólidas, sustentáveis e alinhadas ao propósito do negócio.'}
    ])

    const loopSlide = ref(false)

    onMounted(() => {
        setTimeout(() => {
            loopSlide.value = true
        }, 100) // 5000ms = 5 segundos
    })
</script>

<template>
    <header>
        <div class="contem_conteudo">
            <div class="texto_apresentacao">
                <h1>
                    <span>Onde tem gente com</span>
                    <span>propósito</span>
                    <span>tem negócio que <span>prospera</span></span>
                </h1>
            </div>
            <div class="imagem_apresentacao">
                <img :src="imgApresentacao" alt="imagem de apresentação da Thésera.">
            </div>
        </div>
    </header>

    <div class="texto_chamada">
        <p>Acreditamos no potencial de transformação, oferecendo apoio sob medida para o crescimento estratégico.</p>
    </div>

    <section class="cotem_apresentacao_da_atuacao contem_conteudo">
        <div class="contem_imagem_atuacao">
            <img :src="imgCorpo" alt="imagem para representar o que a Thésera faz."></img>
        </div>
        <div class="contem_descritivo">
            <p>Atuamos na raiz dos desafios de gestão de pessoas.</p>
            <p>Identificamos, organizamos e fortalecemos os processos que sustentam a gestão de pessoas: do desenho da estrutura à atuação das lideranças, passando pela cultura, comunicação, ritos e responsabilidades.</p>
            <p>Acreditamos que o RH não deve se limitar à execução operacional. Nosso foco é ajudar as empresas a enxergarem e tratarem as pessoas como o que elas realmente são: seu maior ativo.</p>
            <div class="contem_background_descritivo"></div>
        </div>
    </section>

    <section class="contem_solucoes">
        <div class="logo_alternativo">
            <img :src="logoAlternativo" alt="Logo da Thésera.">
        </div>

        <h2>Como você pode contar com a gente?</h2>
        <div class="solucoes contem_conteudo">
            <div class="solucao" v-for="servico in servicos" :key="servico.id">
                <div class="taxinha"></div>
                <h3>{{ servico.titulo }}</h3>
                <p>{{ servico.texto }}</p>
            </div>
        </div>

        <Swiper
            class="solucoes contem_conteudo slide_mobile"
            :modules="[Navigation, Pagination]"
            :slides-per-view="'auto'"
            :centered-slides="true"
            :space-between="9"
            :loop="loopSlide"
            :pagination="{ clickable: true }"
            :navigation="false"
            :initial-slide="1"
        >
            <SwiperSlide
                class="solucao"
                v-for="servico in servicos"
                :key="servico.id"
            >
                <div class="taxinha"></div>
                <h3>{{ servico.titulo }}</h3>
                <p>{{ servico.texto }}</p>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<style scoped lang="scss">
    *{
        padding: 0;
        font-family: $font-mulish;
        box-sizing: border-box;
        color: $verdeMusgo;
    }
    .contem_conteudo{
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
    }
    header{
        background-color: $rozaClaro;
        padding: 15px 25px 70px 25px;
        .texto_apresentacao{
            width: 50%;
            margin-top: 90px;
            margin-left: 7%;
            position: relative;
            z-index: 2;
            h1{
                font-size: 25px;
                line-height: 50px;
                font-weight: normal;
                span:nth-of-type(2){
                    color: $rozaEscuro;
                    font-size: 150px;
                    margin-left: 50px;
                    font-family: $font-liana;
                }
                 span:nth-of-type(3){
                    margin-left: 170px;
                }
                span{
                    display: block;
                    span{
                        margin-top: 50px;
                        font-weight: bolder;
                        display: inline-block;
                    }
                }
            }
        }
        .imagem_apresentacao{
            width: 460px;
            height: 460px;
            position: absolute;
            right: 7%;
            border-top-right-radius: 500px;
            overflow: hidden;
            top: -70px;
            z-index: 1;
            img{
                width: 100%;
            }
        }
    }
    .texto_chamada{
        padding: 60px 0;
        margin-top: 94px;
        p{
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            font-size: 30px;
            color: $rozaEscuro;
        }
    }
    .cotem_apresentacao_da_atuacao{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-left: 45px;
        z-index: 2;
        .contem_imagem_atuacao{
            width: 460px;
            height: 460px;
            border-top-left-radius: 500px;
            overflow: hidden;
            img{
                width: 100%;
                margin-top: -35%;
            }
        }
        .contem_descritivo{
            flex: 1;
            padding: 50px 30px;
            position: relative;
            p{
                color: $white;
                margin: 15px auto;
                text-align: left;
                font-size: 20px;
                max-width: 600px;
            }
            .contem_background_descritivo{
                background-color: $verdeMusgo;
                width: 100vw;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }
        }
    }
    .contem_solucoes{
        background-color: $rozaClaro;
        padding: 90px 30px;
        margin-top: -70px;
        position: relative;
        z-index: 1;
        .logo_alternativo{
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 220px;
            align-items: center;
            justify-content: center;
            img{
                max-width: 127px;
                width: 80%;
                margin: 0 auto;
            }
        }
        h2{
            text-align: center;
            font-size: 30px;
            max-width: 400px;
            margin: 50px auto 30px auto;
        }
        .solucoes{
            max-width: 1250px;
            margin: 0 auto;
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            .solucao{
                position: relative;
                background-color: $white;
                padding: 18px 50px;
                margin-top: 50px;
                border-radius: 20px;
                font-size: 15px;
                .taxinha{
                    position: absolute;
                    top: -35px;
                    left: calc(50% - 35px);
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background-color: $rozaEscuro;
                }
                h3{
                    color: $rozaEscuro;
                    margin-top: 35px;
                    text-align: center;
                }
                p{
                    padding: 0;
                    margin: 0;
                    text-align: justify;
                    hyphens: auto;
                }
            }
        }
        .slide_mobile {
            width: 100%;
            display: none;
            .solucao{
                position: normal;
                padding: 15px 20px;
                font-size: 12px;
                .taxinha{
                    top: -25px;
                    left: calc(50% - 25px);
                    width: 50px;
                    height: 50px;
                }
                h3{
                    margin-top: 20px;
                }
            }
        }
    }

    //MOBILE
    ::v-deep(.swiper-pagination-bullet) {
        background-color: $rozaEscuro;
        opacity: 1;
        width: 10px;
        height: 10px;
        transition: all 0.3s ease;
    }

    ::v-deep(.swiper-pagination-bullet-active) {
        background-color: grey;
        transform: scale(1.1);
    }

    .slide_mobile{
        padding-bottom: 40px;
        .swiper-slide {
            width: 300px !important; /* largura do slide */
            min-height: 160px;
        }
    }

    @media(max-width: 1024px){
        header{
            background-color: $rozaClaro;
            padding: 15px 10px 70px 10px;
        }
    }

    @media(max-width: 983px){
        header{
            .texto_apresentacao{
                margin-top: 50px;
                margin-left: 2%;
                h1{
                    font-size: 22px;
                    span:nth-of-type(2){
                        font-size: 130px;
                    }
                    span:nth-of-type(3){
                        margin-left: 180px;
                    }
                }
            }
            .imagem_apresentacao{
                width: 370px;
                height: 370px;
                top: 45px;
                right: 2%;
                img{
                    width: 100%;
                }
            }
        }
        .cotem_apresentacao_da_atuacao{
            .contem_imagem_atuacao{
                width: 370px;
                height: 370px;
            }
        }
    }

    @media(max-width: 932px){
        header{
            .texto_apresentacao{
                h1{
                    font-size: 26px;
                    span:nth-of-type(3){
                        margin-top: 40px;
                        line-height: 30px;
                    }
                    span{
                        span{
                            margin-top: 0px;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 891px){
        header{
            padding-top: 70px;
        }
        .cotem_apresentacao_da_atuacao{
            .contem_descritivo{
                p{
                    font-size: 14px;
                }
            }
        }
    }

    @media(max-width: 850px){
        .cotem_apresentacao_da_atuacao{
            align-items: start;
            margin-top: 25px;
            .contem_imagem_atuacao{
                margin-top: -25px;
            }
        }
        .contem_solucoes{
            padding: 90px 15px;
            padding-bottom: 45px;
            .solucoes{
                display: none;
            }
            .slide_mobile {
                display: block;
            }
        }
    }

    @media(max-width: 800px){
        header{
            padding-top: 100px;
            .texto_apresentacao{
                h1{
                    font-size: 20px;
                    span:nth-of-type(2){
                        font-size: 110px;
                    }
                    span:nth-of-type(3){
                        margin-top: 30px;
                    }
                }
            }
        }
    }

    @media(max-width: 750px){
        .contem_solucoes{
            margin-top: -200px;
            h2{
                margin: 160px auto 30px auto;
            }
        }
    }

    @media(max-width: 700px){
        header{
            padding-bottom: 30px;
            .texto_apresentacao{
                margin-top: 10px;
                h1{
                    font-size: 18px;
                    span:nth-of-type(2){
                        font-size: 100px;
                    }
                    span:nth-of-type(3){
                        margin-top: 25px;
                    }
                }
            }
            .imagem_apresentacao{
                width: 300px;
                height: 300px;
                top: 45px;
            }
        }
        .cotem_apresentacao_da_atuacao{
            .contem_imagem_atuacao{
                width: 300px;
                height: 300px;
            }
        }
    }

    @media(max-width: 624px){
        header{
            padding-bottom: 20px;
            .texto_apresentacao{
                margin-top: 10px;
                width: 60%;
                h1{
                    font-size: 12px;
                    line-height: 20px;
                    span:nth-of-type(2){
                        font-size: 54px;
                        margin-left: 30px;
                    }
                    span:nth-of-type(3){
                        margin-top: 20px;
                        margin-left: 80px;
                        line-height: 10px;
                    }
                }
            }
            .imagem_apresentacao{
                width: 137px;
                height: 141px;
                top: 5px;
                border-top-right-radius: 85%;
            }
        }
        .texto_chamada{
            margin-top: 0px;
            padding: 50px 20px;
            width: 58%;
            p{
                font-size: 12px;
                text-align: justify;
                hyphens: auto;
                margin: 0 auto;
            }
        }
        .cotem_apresentacao_da_atuacao{
            padding-left: 3px;
            margin-top: 0px;
            .contem_imagem_atuacao{
                width: 200px;
                height: 213px;
                margin-right: -20px;
            }
            .contem_descritivo{
                padding: 10px;
                padding-left: 30px;
                p{
                    font-size: 12px;
                }
            }
        }
        .contem_solucoes{
            margin-top: -166px;
            h2{
                text-align: center;
                font-size: 15px;
                margin: 140px auto 30px auto;
            }
        }
    }

    @media(max-width: 390px){
        .contem_solucoes{
            .logo_alternativo{
                display: flex;
            }
        }
    }

    @media(max-width: 390px){
        header{
            .texto_apresentacao{
                margin-left: 1%;
            }
            .imagem_apresentacao{
                right: 1%;
                width: 140px;
                height: 144px;
            }
        }
        .cotem_apresentacao_da_atuacao{
            margin-top: 20px;
            .contem_imagem_atuacao{
                width: 184px;
                height: 197px;
                margin-right: -15px;
            }
            .contem_descritivo{
                padding-left: 25px;
            }
        }
        .contem_solucoes{
            margin-top: -213px;
            h2{
                margin: 160px auto 20px auto;
            }
        }
    }

</style>
