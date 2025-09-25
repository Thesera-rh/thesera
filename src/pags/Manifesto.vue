<script setup lang="ts">

    import imgApresentacao from '@/assets/MANIFESTO/business-people-stacking-hands-express-support-unity-team-spirit-before-starting-work-big-project 1.webp'
    import imgApresentacao2 from '@/assets/MANIFESTO/image 10.webp'
    import imgApresentacao3 from '@/assets/MANIFESTO/image 11.webp'
    import imgApresentacao4 from '@/assets/MANIFESTO/image 12.webp'

    import { useHead } from '@unhead/vue'
    useHead({
        title: 'Manifesto Thésera RH | Onde Tem Gente com Propósito, Tem Negócio que Prospera',
        meta: [
            {
                name: 'description',
                content: 'Nosso manifesto: negócios são feitos de pessoas. A Thésera acredita no propósito humano, na confiança e na clareza como motores da verdadeira transformação.'
            },
            {
                property: 'og:title',
                content: 'Manifesto Thésera RH | Onde Tem Gente com Propósito, Tem Negócio que Prospera'
            },
            {
                property: 'og:description',
                content: 'Negócios são feitos de pessoas. Conheça o manifesto da Thésera RH: propósito, confiança e conexões genuínas para transformar organizações.'
            },{
                property: 'og:image',
                content: imgApresentacao3
            },{
                property: 'og:url',
                content: 'https://thesera.com.br/manifesto'
            },{
                property: 'og:type',
                content: 'website'
            }
        ]
    } satisfies Parameters<typeof useHead>[0])
</script>

<template>
    <div class="contem_tudo">
        <header>
            <div class="contem_conteudo">
                <div class="contem_header">
                    <div class="contem_imagem_header">
                        <img :src="imgApresentacao" alt="Mãos de diferentes pessoas e origens unidas, simbolizando a Thesera Consultoria de RH, que promove a união de talentos para criar culturas empresariais mais humanas e sustentáveis">
                    </div>
                    <div class="contem_texto_header">
                        <div class="contem_texto">
                            <h1>Negócios são feitos de pessoas.</h1>
                            <div class="linha_separadora"></div>
                            <p>De histórias que se cruzam.</p>
                            <p>De talentos que se revelam.</p>
                            <p>De propósitos que se encontram.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="gente_que_acredita_no_que_faz">
            <div class="contem_conteudo">
                <div class="contem_header">
                    <div class="contem_texto_header">
                        <div class="contem_texto">
                            <p>É na escuta atenta, nas conexões genuínas, nas relações de confiança que as grandes transformações começam. Toda empresa que cresce de verdade tem algo em comum:</p>
                            <div class="linha_separadora"></div>
                            <h2>gente que acredita no que faz.</h2>
                        </div>
                    </div>
                    <div class="contem_imagem_header">
                        <img :src="imgApresentacao2" alt="Profissional sorrindo ao receber uma xícara em uma conversa genuína, representando a escuta atenta e as relações de confiança que a Thesera Consultoria de RH constrói.">
                    </div>
                </div>
            </div>
        </section>

        <section class="toda_ideia_ganha_forma_pelas_maos_de_alguem">
            <div class="contem_conteudo">
                <div class="contem_header">
                    <div class="contem_imagem_header">
                        <img :src="imgApresentacao3" alt="Mãos de profissionais unidas para montar um quebra-cabeça, ilustrando a crença da Thesera de que toda conquista é, no fundo, coletiva e precisa de gente para acontecer.">
                    </div>
                    <div class="contem_texto_header">
                        <div class="contem_texto">
                            <h2>Toda ideia ganha forma pelas mãos de alguém.</h2>
                            <div class="linha_separadora"></div>
                            <p>Todo plano precisa de gente para acontecer.</p>
                            <p>Toda conquista é, no fundo, coletiva.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="texto_chamativo">
            <p>Pessoas não são engrenagens.</p>
            <p>São a <strong>alma</strong> de qualquer cultura.</p>
            <p>São ideias, sentimentos, escolhas.</p>
            <p><strong>São movimento, evolução, presença.</strong></p>
        </section>
        
        <section class="ambiente">
            <div class="contem_conteudo">
                <div class="contem_primeiro_texto view_desktop">
                    <div class="contem_texto">
                        <p>Quando o ambiente é fértil, as pessoas <strong>florescem</strong>.</p>
                        <p>Quando há clareza, elas se alinham.</p>
                    </div>
                    <div class="linha_separadora"></div>
                </div>
                <div class="contem_imagem">
                    <img :src="imgApresentacao4" alt="Planta em um escritório, simbolizando a Thesera Consultoria de RH que cria ambientes de trabalho férteis para que pessoas e negócios floresçam">
                </div>
                <div class="contem_primeiro_texto">
                    <div class="contem_texto view_mobile">
                        <p>Quando o ambiente é fértil, as pessoas <strong>florescem</strong>.</p>
                        <p>Quando há clareza, elas se alinham.</p>
                    </div>
                    <div class="linha_separadora"></div>
                    <div class="contem_texto">
                        <p>Quando há confiança, elas voam.</p>
                        <p>E quando tudo isso acontece, o negócio ganha <strong>potência, alma e direção</strong>.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="contem_trabalhamos">
            <p>Trabalhamos todos os dias para que isso seja realidade, porque...</p>
        </section>

        <section class="footer_manifesto">
            <div class="texto_apresentacao">
                <h2>
                    <span>Onde tem gente com</span>
                    <span>propósito</span>
                    <span>tem negócio que <span>prospera</span></span>
                </h2>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .contem_tudo{
        background-color: $rozaClaro;
    }
    *{
        padding: 0;
        font-family: $font-mulish;
        box-sizing: border-box;
        color: $verdeMusgo;
    }
    .contem_conteudo{
        max-width: 1400px;
        margin: 0 auto;
    }
    .contem_header{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 551px; //651
        .contem_imagem_header{
            width: 50%;
            max-width: 558px;
            height: 100%;
            overflow: hidden;
            background-color: $cinza;
            img{
                height: 100%;
            }
        }
        .contem_texto_header{
            flex: 1;
            background-color: $cinza;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .contem_texto{
                text-align: center;
                .linha_separadora{
                    width: 2px;
                    height: 130px;
                    opacity: 1;
                    margin: 40px auto;
                    background-color: $verdeMusgo;
                }
                h1, h2{
                    max-width: 270px;
                    font-size: 30px;
                    margin: 0 auto;
                }
                p{
                    line-height: 5px;
                    font-size: 23px;
                }
            }
        }
    }
    .gente_que_acredita_no_que_faz{
        .contem_conteudo{
            .contem_header{
                height: 600px; //660
                .contem_texto_header{
                    max-width: 558px;
                    background-color: $rozaClaro;
                    .linha_separadora{
                        background-color: $rozaEscuro;
                    }
                    p{
                        color: $rozaEscuro;
                        max-width: 306px;
                        line-height: normal;
                        font-size: 23px;
                    }
                    h2{
                        color: $rozaEscuro;
                    }
                }
                .contem_imagem_header{
                    max-width: none;
                    flex: 1;
                    background-color: $cinza;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }   
        }
    }
    .toda_ideia_ganha_forma_pelas_maos_de_alguem{
        .contem_header{
            height: 550px;
            .contem_imagem_header{
                width: 70%;
                max-width: 670px;
                background-color: $cinza;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .contem_texto_header{
                h2{
                    max-width: 350px;
                }
            }
        }
    }
    .texto_chamativo{
        background-color: $rozaClaro;
        padding: 50px 0;
        p, strong{
            color: $rozaEscuro;
            text-align: center;
            line-height: 5px;
            font-size: 23px;
        }
    }
    .ambiente{
        .contem_conteudo{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 530px;
            background-color: $cinza;
            .contem_primeiro_texto{
                flex: 1;
                .contem_texto:first-child{
                    p{
                        max-width: 220px;
                    }
                }
                .contem_texto{
                    p{
                        max-width: 250px;
                        font-size: 23px;
                        text-align: center;
                        margin: 0 auto;
                    }
                }
                .linha_separadora{
                    width: 2px;
                    height: 200px;
                    margin: 0 auto;
                    background-color: $verdeMusgo;
                    margin-bottom: 45px;
                }
                .linha_separadora:last-child{
                    margin-top: 60px;
                    margin-bottom: 0;
                }
            }
            .view_mobile{
                display: none;
            }
        }
        .contem_imagem{
            width: 494px;
            height: 100%;
            overflow: hidden;
            background-color: $cinza;
            img{
                width: 100%;
            }
        }
    }
    .contem_trabalhamos{
        padding: 45px 0;
        background-color: $rozaEscuro;
        p{
            font-size: 23px;
            text-align: center;
            color: $rozaClaro;
            max-width: 500px;
            margin: 0   auto;
        }
    }
    .footer_manifesto{
        padding: 150px 0;
        background-image: 
            linear-gradient(rgba(240, 225, 211, .8), rgba(240, 225, 211, .8)),
            url('@/assets/MANIFESTO/Group 12.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        h2{
            font-size: 25px;
            line-height: 50px;
            font-weight: normal;
            max-width: 500px;
            margin: 0 auto;
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

    //mobile
    @media (max-width: 1227px){
        .gente_que_acredita_no_que_faz{
            .contem_conteudo{
                .contem_header{
                    .contem_imagem_header{
                        img{
                            width: auto;
                            height: 100%;
                        }
                    }
                }   
            }
        }
    }

    @media (max-width: 1165px){
        .toda_ideia_ganha_forma_pelas_maos_de_alguem{
            .contem_header{
                .contem_texto_header{
                    p{
                        line-height: normal;
                        margin: 0 auto;
                    }
                }
            }
        }
    }

    @media (max-width: 1000px){
        .toda_ideia_ganha_forma_pelas_maos_de_alguem{
            .contem_header{
                height: 400px;
                .contem_imagem_header{
                    max-width: 500px;
                }
            }
        }
        .ambiente{
            .contem_imagem{
                width: 350px;
                img{
                    width: auto;
                    height: 100%;
                    margin-left: -5%;
                }
            }
        }
    }

    @media (max-width: 865px){
        .toda_ideia_ganha_forma_pelas_maos_de_alguem{
            .contem_header{
                height: 500px;
                .contem_imagem_header{
                    max-width: 400px;
                    img{
                        width: auto;
                        height: 100%;
                        margin-left: -30%;
                    }
                }
                .contem_texto_header{
                    h2, p{
                        width: 90%;
                    }
                }
            }
        }
        .ambiente{
            .contem_conteudo{
                height: 320px;
                .contem_primeiro_texto{
                    margin: 0 15px;
                    .contem_texto:first-child{
                        p{
                            max-width: 220px;
                        }
                    }
                    .contem_texto{
                        p{
                            max-width: 220px;
                            font-size: 18px;
                        }
                    }
                    .linha_separadora{
                        height: 80px;
                        margin-bottom: 30px;
                    }
                    .linha_separadora:last-child{
                        margin-top: 40px;
                    }
                }
            }
            .contem_imagem{
                width: 220px;
            }
        }
    }

    @media (max-width: 800px){
        header{
            padding-top: 70px;
            .contem_header{
                .contem_imagem_header{
                    max-width: 330px;
                    img{
                        margin-top: -11%;
                        width: 100%;
                        height: auto;
                    }
                }   
            }
        }
        .contem_header{
            height: 330px; //651
            .contem_texto_header{
                .contem_texto{
                    .linha_separadora{
                        height: 80px;
                        margin: 20px auto;
                    }
                    h1, h2{
                        font-size: 25px;
                    }
                    p{
                        font-size: 18px;
                    }
                }
            }
        }
        .gente_que_acredita_no_que_faz{
            .contem_conteudo{
                .contem_header{
                    height: 380px;
                    .contem_texto_header{
                        p{
                            max-width: 306px;
                            font-size: 18px;
                        }
                    }
                }   
            }
        }
        .texto_chamativo{
            p, strong{
                font-size: 18px;
            }
        }
        .contem_trabalhamos{
            padding: 25px 0;
            p{
                font-size: 18px;
                max-width: 300px;
            }
        }
        .footer_manifesto{
            padding: 100px 0;
            h2{
                font-size: 18px;
                line-height: 30px;
                max-width: 400px;
                span:nth-of-type(2){
                    font-size: 120px;
                }
                    span:nth-of-type(3){
                    margin-left: 170px;
                }
            }
        }
    }

    @media (max-width: 645px){
        header{
            .contem_header{
                .contem_imagem_header{
                    max-width: 250px;
                    img{
                        margin-top: 0%;
                    }
                }   
            }
        }
        .contem_header{
            height: 280px;
        }
        .gente_que_acredita_no_que_faz{
            .contem_conteudo{
                .contem_header{
                    .contem_imagem_header{
                        display: none;
                    }
                }   
            }
        }
        .toda_ideia_ganha_forma_pelas_maos_de_alguem{
            .contem_header{
                flex-direction: row-reverse;
                height: 300px;
                .contem_imagem_header{
                    max-width: 220px;
                }
                .contem_texto_header{
                    p{
                        max-width: 250px;
                    }
                }
            }
        }
        .ambiente{
            .contem_conteudo{
                height: 400px;
                .view_desktop{
                    display: none;
                }
                .view_mobile{
                    display: block;
                }
                .contem_primeiro_texto{
                    .linha_separadora{
                        margin: 15px auto;
                    }
                }
            }
            .contem_imagem{
                width: 320px;
            }
        }
    }

    @media (max-width: 560px){
        header{
            .contem_header{
                .contem_imagem_header{
                    max-width: 210px;
                }   
            }
        }
        .contem_header{
            height: 230px;
            .contem_texto_header{
                .contem_texto{
                    .linha_separadora{
                        height: 60px;
                    }
                    h1, h2{
                        font-size: 20px;
                    }
                    p{
                        font-size: 13px;
                    }
                }
            }
        }
        .gente_que_acredita_no_que_faz{
            .contem_conteudo{
                .contem_header{
                    height: 300px;
                    .contem_texto_header{
                        p{
                            max-width: 200px;
                            font-size: 13px;
                            margin: 0 auto;
                        }
                        h2{
                            max-width: 200px;
                        }
                    }
                }   
            }
        }
        .texto_chamativo{
            p, strong{
                font-size: 13px;
            }
        }
        .ambiente{
            .contem_conteudo{
                height: 248px;
                .contem_primeiro_texto{
                    .contem_texto:first-child{
                        p{
                            max-width: 130px;
                        }
                    }
                    .contem_texto{
                        p{
                            max-width: 140px;
                            font-size: 13px;
                        }
                    }
                    .linha_separadora{
                        height: 32px;
                        margin: 5px auto;
                    }
                }
            }
            .contem_imagem{
                width: 200px;
            }
        }
        .contem_trabalhamos{
            p{
                font-size: 13px;
                max-width: 200px;
            }
        }
        .footer_manifesto{
            padding: 40px 0;
            h2{
                font-size: 13px;
                line-height: 25px;
                max-width: 190px;
                span:nth-of-type(2){
                    font-size: 60px;
                    margin-left: 20px;
                }
                span:nth-of-type(3){
                    margin-left: 80px;
                    margin-top: 15px;
                    max-width: 120px;
                    line-height: 10px;
                }
                span{
                    span{
                        margin-top: 5px;
                    }
                }
            }
        }
    }

    @media (max-width: 420px){
        header{
            .contem_header{
                .contem_imagem_header{
                    max-width: 145px;
                }   
            }
        }
        .contem_header{
            height: 170px; //651
            .contem_texto_header{
                .contem_texto{
                    .linha_separadora{
                        height: 32px;
                        margin: 10px auto;
                    }
                    h1, h2{
                        max-width: 150px;
                        font-size: 15px;
                    }
                    p{
                        font-size: 12px;
                    }
                }
            }
        }
        .gente_que_acredita_no_que_faz{
            .contem_conteudo{
                .contem_header{
                    height: 217px;
                    .contem_texto_header{
                        p{
                            max-width: 210px;
                            font-size: 12px;
                        }
                        h2{
                            max-width: 150px;
                        }
                    }
                }   
            }
        }
        .toda_ideia_ganha_forma_pelas_maos_de_alguem{
            .contem_header{
                height: 181px;
                .contem_imagem_header{
                    max-width: 150px;
                }
                .contem_texto_header{
                    h2, p{
                        max-width: 200px;
                    }
                }
            }
        }
        .texto_chamativo{
            padding: 25px 0;
            p, strong{
                font-size: 12px;
            }
        }
        .ambiente{
            .contem_conteudo{
                .contem_primeiro_texto{
                    .contem_texto:first-child{
                        p{
                            max-width: 120px;
                        }
                    }
                    .contem_texto{
                        p{
                            max-width: 130px;
                            font-size: 12px;
                        }
                    }
                }
            }
            .contem_imagem{
                width: 169px;
                img{
                    margin-left: -10%;
                }
            }
        }
        .contem_trabalhamos{
            p{
                font-size: 12px;
            }
        }
    }

</style>