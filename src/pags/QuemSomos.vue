<script setup lang="ts">

    import imgApresentacao from '@/assets/QUEM SOMOS/4V5A9637.avif'
    import imgInfanciaThiara from '@/assets/QUEM SOMOS/Generated-Image-September-04_-2025-9_57PM.webp'
    import imgSonho from '@/assets/QUEM SOMOS/4V5A9729-_1_.avif'
    import imgAdimiracaoThiara from '@/assets/QUEM SOMOS/4V5A9566.avif'

    import { useHead } from '@unhead/vue'
    useHead({
        title: 'Thésera RH: Quem Somos | Thésera RH – Consultoria Humanizada e Estratégica ',
        meta: [
            {
                name: 'description',
                content: 'A Thésera RH une técnica, propósito e sensibilidade humana para apoiar empresas na gestão de pessoas, desenvolvimento de líderes e fortalecimento da cultura.'
            },
            {
                property: 'og:title',
                content: 'Quem Somos | Thésera RH – Consultoria de RH Humanizada e Estratégica'
            },
            {
                property: 'og:description',
                content: 'Conheça a missão da Thésera RH: unir conhecimento técnico e sensibilidade humana para transformar a gestão de pessoas.'
            },{
                property: 'og:image',
                content: imgAdimiracaoThiara
            },{
                property: 'og:url',
                content: 'https://thesera.com.br/quem-somos'
            },{
                property: 'og:type',
                content: 'website'
            }
        ]
    } satisfies Parameters<typeof useHead>[0])

</script>

<template>
    <header>
        <div class="contem_conteudo">
            <div class="imagem_apresentacao">
                <img :src="imgApresentacao" alt="Foto profissional da fundadora da Thesera Consultoria de RH, o rosto por trás da abordagem humanizada em gestão de pessoas para PMEs no Vale do Itajaí, SC.">
            </div>
            <div class="texto_apresentacao">
                <h1>
                    <span>Antes de virar</span>
                    <span>sonho</span>
                    <span>era vocação.</span>
                </h1>
            </div>
        </div>
    </header>

    <section class="infancia_thiara">
        <div class="contem_conteudo">
            <p class="texto_desktop">Meu desejo de trabalhar com Recursos Humanos nasceu cedo, inspirado pela admiração que eu sentia pela minha tia, profissional da área. Essa inspiração se transformou em propósito e direcionou minha formação em Administração, com ênfase em RH. Ao longo da trajetória, cada experiência fortaleceu minha convicção de que desenvolver pessoas é também desenvolver empresas.</p>
            <p class="texto_mobile">Meu desejo de trabalhar com Recursos Humanos nasceu cedo, inspirado pela admiração que eu sentia pela minha tia, profissional da área. Essa inspiração se transformou em propósito e direcionou minha formação em Administração, com ênfase em RH.</p>
            <div class="contem_imagem">
                <img :src="imgInfanciaThiara" alt="Retrato de menina, representando a inspiração e o início da paixão pela carreira em Recursos Humanos da fundadora da Thesera Consultoria de RH no Vale do Itajaí, SC">
            </div>
        </div>
        <div class="conteudo_mobile_continuacao">
            <p>Ao longo da trajetória, cada experiência fortaleceu minha convicção de que desenvolver pessoas é também desenvolver empresas.</p>
        </div>
    </section>

    <section class="adimiracao_thiara">
        <div class="contem_conteudo">
            <div class="contem_imagem">
                <img :src="imgAdimiracaoThiara" alt="Profissional de recursos humanos com formação em Administração, refletindo a dedicação da fundadora da Thesera em oferecer consultoria estratégica para PMEs em Santa Catarina">
            </div>
            <p>Essa admiração transformou-se em propósito de vida. Sou formada em Administração, com ênfase em Recursos Humanos, e ao longo da minha trajetória percorri diferentes caminhos. Cada experiência contribuiu para o meu desenvolvimento, trazendo aprendizados valiosos e reforçando minha paixão por gente e gestão.</p>
        </div>
    </section>

    <section class="infancia_thiara sonho_thiara">
        <div class="contem_conteudo">
            <p class="texto_desktop">Hoje, meu maior sonho é contribuir para que empresas construam culturas mais humanas e sustentáveis, com pessoas que se sintam parte, que tenham espaço para crescer e gerar valor real. Porque, no fim das contas, não é apenas sobre RH,  é sobre gente, sobre propósito e sobre transformar relações de trabalho em algo que faça sentido.</p>
            <p class="texto_mobile">Hoje, meu maior sonho é contribuir para que empresas construam culturas mais humanas e sustentáveis, com pessoas que se sintam parte, que tenham espaço para crescer e gerar valor real.</p>
            <div class="contem_imagem">
                <img :src="imgSonho" alt="Retrato profissional da dona da Thesera Consultoria de RH, que acredita que o propósito e as pessoas são os maiores ativos para transformar as relações de trabalho.">
            </div>
        </div>
        <div class="conteudo_mobile_continuacao">
            <p>Porque, no fim das contas, não é apenas sobre RH,  é sobre gente, sobre propósito e sobre transformar relações de trabalho em algo que faça sentido.</p>
        </div>
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
        max-width: 1350px;
        margin: 0 auto;
        position: relative;
    }
    header{
        background-color: $rozaClaro;
        padding: 15px 25px 40px 25px;
        .texto_apresentacao{
            width: 50%;
            margin-top: 90px;
            margin-left: auto;
            margin-right: 0%;
            position: relative;
            z-index: 2;
            h1{
                line-height: 100px;
                font-size: 32px;
                font-weight: normal;
                text-align: center;
                span:nth-of-type(1){
                    margin-right: 230px;
                }
                span:nth-of-type(2){
                    margin-top: -80px;
                    color: $rozaEscuro;
                    font-size: 200px;
                    font-family: $font-liana;
                }
                 span:nth-of-type(3){
                    margin-left: 170px;
                }
                span{
                    display: block;
                }
            }
        }
        .imagem_apresentacao{
            width: 460px;
            height: 460px;
            position: absolute;
            left: 7%;
            border-top-left-radius: 85%;
            overflow: hidden;
            top: -70px;
            z-index: 1;
            background-color: $cinza;
            img{
                margin-top: -5%;
                width: 100%;
            }
        }
    }
    .infancia_thiara{
        padding: 50px 25px;
        .contem_conteudo{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 150px;
            p{
                flex: 1;
                max-width: 455px;
                margin-right: auto;
                margin-left: 7%;
                font-size: 20px;
                text-align: justify;
            }
            .contem_imagem{
                width: 445px;
                height: 445px;
                overflow: hidden;
                border-radius: 50%;
                position: relative;
                margin-right: 11%;
                background-color: $cinza;
                img{
                    position: absolute;
                    width: 100%;
                    top: -20%;
                }
            }
        }
    }
    .adimiracao_thiara{
        padding: 40px 25px;
        .contem_conteudo{
            display: flex;
            align-items: center;
            justify-content: center;
            p{
                flex: 1;
                max-width: 455px;
                margin-left: auto;
                margin-right: 10%;
                font-size: 20px;
                text-align: justify;
            }
            .contem_imagem{
                width: 445px;
                height: 445px;
                overflow: hidden;
                position: relative;
                margin-left: 7%;
                border-top-right-radius: 85%;
                background-color: $cinza;
                img{
                    position: absolute;
                    width: 100%;
                    top: -33%;
                    transform: scaleX(-1);
                }
            }
        }
    }
    .sonho_thiara{
        padding-top: 0;
        .contem_conteudo{
            margin-top: 0;
            .contem_imagem{
                img{
                    top: -11%;
                }
            }
        }
    }
    .texto_desktop{
        display: block;
    }
    .texto_mobile, .conteudo_mobile_continuacao{
        display: none;
    }

    @media (max-width: 1076px){
        header{
            padding: 10px 25px 10px 25px;
            .texto_apresentacao{
                margin-top: 30px;
                h1{
                    font-size: 28px;
                    span:nth-of-type(1){
                        margin-right: 200px;
                    }
                    span:nth-of-type(2){
                        margin-top: -70px;
                        font-size: 180px;
                    }
                    span:nth-of-type(3){
                        margin-left: 170px;
                    }
                }
            }
            .imagem_apresentacao{
                width: 360px;
                height: 360px;
                top: -10px;
            }
        }
        .infancia_thiara{
            .contem_conteudo{
                p{
                    max-width: 400px;
                    font-size: 16px;
                    margin-right: 30px;
                }
                .contem_imagem{
                    width: 345px;
                    height: 345px;
                }
            }
        }
        .adimiracao_thiara{
            .contem_conteudo{
                p{
                    max-width: 400px;
                    font-size: 16px;
                    margin-left: 30px;
                }
                .contem_imagem{
                    width: 380px;
                    height: 380px;
                }
            }
        }
    }

    @media (max-width: 890px){
        header{
            padding: 35px 0px 10px 0px;
            .texto_apresentacao{
                margin-top: 80px;
                h1{
                    font-size: 23px;
                    span:nth-of-type(1){
                        margin-right: 180px;
                    }
                    span:nth-of-type(2){
                        margin-top: -70px;
                        font-size: 150px;
                    }
                    span:nth-of-type(3){
                        margin-left: 140px;
                    }
                }
            }
            .imagem_apresentacao{
                width: 300px;
                height: 300px;
                top: 25px;
                left: 5%;
            }
        }
        .infancia_thiara{
            .contem_conteudo{
                p{
                    font-size: 14px;
                    margin-right: 30px;
                }
                .contem_imagem{
                    width: 300px;
                    height: 300px;
                }
            }
        }
        .adimiracao_thiara{
            .contem_conteudo{
                p{
                    font-size: 14px;
                    margin-left: 30px;
                }
                .contem_imagem{
                    width: 300px;
                    height: 300px;
                }
            }
        }
    }

    @media (max-width: 683px){
        header{
            max-width: 360px;
            margin: auto;
            background-color: white;
            padding: 0;
            .texto_apresentacao{
                margin-top: 70px;
                h1{
                    line-height: 90px;
                    font-size: 14px;
                    span:nth-of-type(1){
                        margin-right: 55px;
                    }
                    span:nth-of-type(2){
                        font-size: 70px;
                    }
                    span:nth-of-type(3){
                        margin-left: 50px;
                        margin-top: -50px;
                    }
                }
            }
            .imagem_apresentacao{
                width: 134px;
                height: 138px;
                top: 20px;
            }
        }
        .infancia_thiara{
            position: relative;
            padding: 0;
            .texto_desktop{
                display: none;
            }
            .texto_mobile, .conteudo_mobile_continuacao{
                display: block;
            }
            .conteudo_mobile_continuacao{
                background-color: $rozaClaro;
                margin: 30px 0;
                margin-bottom: 0;
                padding: 20px 30px;
                text-align: center;
                font-size: 12px;
                p{
                    max-width: 335px;
                    margin: 0 auto;
                }
            }
            .contem_conteudo{
                max-width: 360px;
                margin-top: 30px;
                padding: 0;
                p{
                    font-size: 12px;
                    margin-right: 15px;
                    margin-left: 5%;
                }
                .contem_imagem{
                    width: 150px;
                    height: 150px;
                    margin-right: 5%;
                }
            }
        }
        .adimiracao_thiara{
            padding: 20px 0;
            .contem_conteudo{
                max-width: 360px;
                p{
                    font-size: 12px;
                    margin-left: 15px;
                    margin-right: 5%;
                }
                .contem_imagem{
                    width: 134px;
                    height: 138px;
                    margin-left: 5%;
                    top: -20px;
                }
            }
        }
    }

</style>