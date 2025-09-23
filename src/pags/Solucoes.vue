<script setup lang="ts">

    import imgApresentacao from '@/assets/SOLUCOES/image 7.avif'
    import img19 from '@/assets/SOLUCOES/image 19.avif'
    import img22 from '@/assets/SOLUCOES/image 22.avif'
    import img21 from '@/assets/SOLUCOES/image 21.avif'
    import img20 from '@/assets/SOLUCOES/image 20.avif'
    import img18 from '@/assets/SOLUCOES/image 18.avif'

    import { useHead } from '@unhead/vue'
    useHead({
        title: 'Soluções de RH | Diagnóstico, Liderança, Cultura Organizacional e Comunicação',
        meta: [
            {
                name: 'description',
                content: 'Consultoria de RH personalizada para empresas: desenho estrutural, liderança, cultura organizacional, comunicação interna e processos que elevam a performance.'
            },
            {
                property: 'og:title',
                content: 'Soluções de RH | Diagnóstico, Liderança, Cultura Organizacional e Comunicação'
            },
            {
                property: 'og:description',
                content: 'Soluções sob medida em gestão de pessoas: liderança, cultura organizacional, comunicação e estruturação de RH.'
            },{
                property: 'og:image',
                content: img19
            },{
                property: 'og:url',
                content: 'https://theserarh.netlify.app/solucoes'
            },{
                property: 'og:type',
                content: 'website'
            }
        ]
    } satisfies Parameters<typeof useHead>[0])

    import { reactive } from "vue"

    const solucoes = reactive([
        {
            id:0, 
            img: img18, 
            alt: 'Blocos de madeira com ícones de engrenagens, lupa, pessoas e gráficos. Representa os serviços de consultoria da Thesera em estruturação de processos, cargos e salários e gestão de benefícios.',
            flexDirection: 'normal', 
            titulo: 'Estrutura e Organização', 
            texto: 'Toda empresa precisa de base sólida para crescer. Estruturamos processos, responsabilidades e rotinas que trazem clareza ao trabalho e eliminam ruídos, criando um ambiente mais leve, alinhado e produtivo.',
            itens: [
                {
                    id: 0,
                    texto: 'Estruturação de processos e organogramas'
                },
                {
                    id: 1,
                    texto: 'Mapeamento de responsabilidades'
                },{
                    id: 2,
                    texto: 'Descrição de cargos'
                },{
                    id: 3,
                    texto: 'Estruturação e política de cargos e salários'
                },{
                    id: 4,
                    texto: 'Pesquisa salarial'
                },{
                    id: 5,
                    texto: 'Rotinas básicas e boas práticas do departamento pessoal'
                },{
                    id: 6,
                    texto: 'Gestão de benefícios'
                },{
                    id: 7,
                    texto: 'Gestão documental e compliance trabalhista'
                }
            ]
        },
        {
            id:1, 
            img: img20,
            alt: 'Mãos de profissionais analisando um gráfico de resultados, simbolizando a Thesera Consultoria de RH que otimiza a cultura e o Employee Experience com base em dados de pesquisa de clima', 
            flexDirection: 'invertido', 
            titulo: 'Cultura e Experiência do Colaborador', 
            texto: 'Cultura forte e experiência positiva são construídas no dia a dia. Criamos ferramentas e práticas que fortalecem a identidade da empresa, promovem engajamento e tornam o ambiente de trabalho mais inspirador.',
            itens: [
                {
                    id: 0,
                    texto: 'Manual do colaborador e Código de Conduta'
                },
                {
                    id: 1,
                    texto: 'Onboarding estruturado'
                },{
                    id: 2,
                    texto: 'Avaliação de experiência'
                },{
                    id: 3,
                    texto: 'Employer Branding e Employee Experience'
                },{
                    id: 4,
                    texto: 'Endomarketing e ações de engajamento'
                },{
                    id: 5,
                    texto: 'Pesquisa de clima organizacional e NPS'
                },{
                    id: 6,
                    texto: 'Protocolos e ferramentas de comunicação'
                },{
                    id: 7,
                    texto: 'Programas de diversidade, equidade e inclusão'
                }
            ]
        },
        {
            id:2, 
            img: img21, 
            alt: 'Mulher movendo uma peça de madeira em um tabuleiro, simbolizando a consultoria da Thesera para o desenvolvimento de talentos e a preparação de lideranças por meio de PDI e Avaliação de Desempenho.',
            flexDirection: 'normal', 
            titulo: 'Desenvolvimento e Desempenho', 
            texto: 'Empresas crescem quando pessoas crescem. Desenvolvemos programas de capacitação e métodos de avaliação que estimulam a evolução contínua, aumentam a performance e preparam talentos para os próximos desafios.',
            itens: [
                {
                    id: 0,
                    texto: 'Avaliação de desempenho'
                },
                {
                    id: 1,
                    texto: 'Matriz de combinados'
                },{
                    id: 2,
                    texto: 'Treinamento e desenvolvimento'
                },{
                    id: 3,
                    texto: 'Levantamento de Necessidades de Treinamento (LNT)'
                },{
                    id: 4,
                    texto: 'Trilhas de aprendizagem'
                },{
                    id: 5,
                    texto: 'Planos de Desenvolvimento Individual (PDI)'
                },{
                    id: 6,
                    texto: 'Sucessão e preparação de lideranças'
                }
            ]
        },
        {
            id:3, 
            img: img22,
            alt: 'Mãos com luvas replantando uma muda, simbolizando a Thesera, que nutre o crescimento dos colaboradores através de programas de bem-estar e planos de carreira e sucessão.', 
            flexDirection: 'invertido', 
            titulo: 'Gestão e Retenção', 
            texto: 'Manter talentos exige cuidado e estratégia. Apoiamos sua empresa na gestão de benefícios e na criação de práticas que aumentam a satisfação, reduzem a rotatividade e fortalecem o vínculo entre colaborador e organização.',
            itens: [
                {
                    id: 0,
                    texto: 'Entrevista de desligamento'
                },
                {
                    id: 1,
                    texto: 'Planos de carreira e sucessão'
                },{
                    id: 2,
                    texto: 'Políticas de reconhecimento e recompensa'
                },{
                    id: 3,
                    texto: 'Programas de bem-estar e qualidade de vida'
                }
            ]
        },
        {
            id:4, 
            img: img19,
            alt: 'Duas profissionais em um escritório moderno, representando os serviços de Recrutamento e Seleção da Thesera e o hunting para posições estratégicas.', 
            flexDirection: 'normal', 
            titulo: 'Atração e Seleção', 
            texto: 'Encontrar as pessoas certas é o primeiro passo para construir times de alta performance. Atuamos em todas as etapas da atração e seleção, garantindo que o processo seja ágil, estratégico e conectado à cultura da empresa.',
            itens: [
                {
                    id: 0,
                    texto: 'Recrutamento e seleção'
                },
                {
                    id: 1,
                    texto: 'Recrutamento interno'
                },{
                    id: 2,
                    texto: 'Gestão de talentos e banco de currículos'
                },{
                    id: 3,
                    texto: 'Entrevista por competências'
                },{
                    id: 4,
                    texto: 'Hunting para posições estratégicas'
                }
            ]
        }
    ])

    import { ref} from "vue"

    const isCardIndex = ref<number[]>([])

    const handleCard = (cardIndex: number) => {
        
        if(isCardIndex.value.includes(cardIndex)){
            isCardIndex.value = isCardIndex.value.filter(i => i !== cardIndex)
        }else{
            isCardIndex.value.push(cardIndex)
        }
    }
</script>

<template>
    <header>
        <div class="contem_conteudo">
            <div class="texto_apresentacao">
                <h1>
                    <span>Nascemos para ser</span>
                    <span>apoio</span>
                    <span>suporte e método</span>
                </h1>
            </div>
            <div class="imagem_apresentacao">
                <img :src="imgApresentacao" alt="Mãos entrelaçadas em gesto de apoio e suporte, simbolizando a Thesera Consultoria de RH como um método essencial para PMEs otimizarem gestão de pessoas e processos.">
            </div>
        </div>
    </header>

    <section class="contem_solucoes">
        <div
            v-for="solucao in solucoes"
            :key="solucao.id"
            class="contem_conteudo"
            :class="{ 'contem_conteudo_invertido': solucao.flexDirection === 'invertido' }"
        >
            <div
                class="detalhe_solucao"
                :class="{ 'detalhe_solucao_aberto': isCardIndex.includes(solucao.id) }"
            >
                <div 
                    class="contem_detalhe_solucao"
                    :class="{ 'contem_detalhe_solucao_aberto': isCardIndex.includes(solucao.id) }"
                >
                    <button
                        :class="{'button_roza': solucao.flexDirection === 'normal'}"
                        @click="handleCard(solucao.id)"
                    >x</button>
                    <div class="contem_imagem">
                        <img :src="solucao.img" :alt="solucao.alt">
                    </div>
                    <div class="contem_texto">
                        <h3
                            :class="{'texto_roza': solucao.flexDirection === 'normal'}"
                        >{{ solucao.titulo }}</h3>
                        <ul>
                            <li
                                v-for="item in solucao.itens"
                                :key="item.id"
                                :class="{'texto_roza': solucao.flexDirection === 'normal'}"
                            >
                            {{ item.texto }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="imagem_solucao">
                <img :src="solucao.img" alt="">
            </div>
            <div class="contem_conteudo_solucao">
                <h2>{{ solucao.titulo }}</h2>
                <p>{{ solucao.texto }}</p>
                <button
                    @click="handleCard(solucao.id)"
                >Conheça as soluções</button>
            </div>
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
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
    }
    header{
        background-color: $rozaClaro;
        padding: 15px 25px 70px 25px;
        //margin-bottom: 250px;
        .texto_apresentacao{
            width: 50%;
            margin-top: 90px;
            margin-left: 7%;
            position: relative;
            z-index: 4;
            h1{
                font-size: 25px;
                line-height: 13px;
                font-weight: normal;
                span:nth-of-type(2){
                    color: $rozaEscuro;
                    font-size: 150px;
                    margin-left: 160px;
                    font-family: $font-liana;
                }
                span:nth-of-type(3){
                    margin-left: 260px;
                    margin-top: 55px;
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
            right: 7%;
            border-top-right-radius: 500px;
            overflow: hidden;
            top: -70px;
            z-index: 3;
            img{
                width: 100%;
            }
        }
    }
    .contem_solucoes{
        position: relative;
        padding-top: 250px;
        overflow: hidden;
        .contem_conteudo{
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 90%;
            margin: 0 auto;
            margin-bottom: 50px;
            padding: 0 40px;
            .detalhe_solucao{
                width: 100%;
                height: 110%;
                background-color: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);         
                position: absolute;
                top: -5%;
                z-index: 2;
                display: none;
                align-items: center;
                justify-content: center;
                animation: slideLeftCloseBoxPai 0.5s forwards;
                .contem_detalhe_solucao{
                    width: 80%;
                    max-width: 810px;
                    border-radius: 40px;
                    padding: 50px 10px;
                    background-color: white;
                    z-index: 4;
                    -webkit-box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.52); 
                    box-shadow: 5px 5px 12px 2px rgba(0,0,0,0.52);
                    border-right: 6px solid #D9D9D9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-150%);
                    transition: transform 0.5s ease;
                    animation: slideLeftClose 0.5s forwards;
                    button{
                        background-color: $verdeMusgo;
                        border: none;
                        outline: none;
                        padding: 0px 11px;
                        padding-bottom: 5px;
                        border-radius: 50%;
                        color: white;
                        font-weight: bolder;
                        font-size: 23px;
                        position: absolute;
                        top: 0;
                        right: -5px;
                        cursor: pointer;
                    }
                    .button_roza{
                        background-color: $rozaEscuro;
                    }
                    button:hover{
                        transform: scale(1.05);
                        transition: .3s;
                    }
                    .contem_imagem{
                        width: 40%;
                        height: 300px;
                        overflow: hidden;
                        margin-right: 20px;
                        border-top-left-radius: 500px;
                        img{
                            width: 100%;
                        }
                    }
                    .contem_texto{
                        flex: 1;
                        h3{
                            font-size: 32px;
                        }
                        ul{
                            list-style: inside;
                            li{
                                font-size: 15px;
                            }
                        }
                        .texto_roza{
                            color: $rozaEscuro;
                        }
                    }
                }
                .contem_detalhe_solucao_aberto{
                    animation: slideLeftOpen 0.5s forwards;
                }
                @keyframes slideLeftOpen{
                    0%{
                        transform: translateX(-200%);
                    }
                    100%{
                        transform: translateX(-50%);
                    }
                }
                @keyframes slideLeftClose{
                    0%{
                        transform: translateX(-50%);
                    }
                    100%{
                        transform: translateX(-200%);
                    }
                }
            }
            @keyframes slideLeftCloseBoxPai{
                0%{
                    display: flex;
                }
                100%{
                    display: none;
                }
            }
            @keyframes slideLeftOpenBoxPai{
                100%{
                    display: flex;
                }
            }
            .detalhe_solucao_aberto{
                display: flex;
                animation: slideLeftOpenBoxPai 0s forwards;
            }
            .imagem_solucao{
                width: 500px;
                height: 500px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .contem_conteudo_solucao{
                margin-left: -20px;
                flex: 1;
                background-color: $rozaClaro;
                padding: 30px 40px;
                p, h2{
                    color: $rozaEscuro;
                }
                h2{
                    font-size: 35px;
                }
                p{
                    font-size: 22px;
                }
                button{
                    background-color: $rozaEscuro;
                    color: white;
                    outline: none;
                    border: none;
                    padding: 10px 30px;
                    font-size: 22px;
                    border-radius: 20px;
                    cursor: pointer;
                }
                button:hover{
                    transform: scale(1.05);
                    transition: .3s;
                }
            }
        }
        .contem_conteudo_invertido{
            flex-direction: row-reverse;
            .contem_conteudo_solucao{
                margin-left: 0;
                margin-right: -30px;
                z-index: 1;
                background-color: $verdeMusgo;
                h2, p{
                    color: #D9D9D9;
                }
                button{
                    background-color: #D9D9D9;
                    color: $verdeMusgo;
                }
            }
        }
    }

    @media(max-width: 1024px){
        header{
            background-color: $rozaClaro;
            padding: 15px 10px 70px 10px;
        }
        .contem_solucoes{
            .contem_conteudo{
                padding: 0 30px;
                .imagem_solucao{
                    width: 400px;
                    height: 400px;
                }
                .contem_conteudo_solucao{
                    margin-left: -60px;
                    h2{
                        font-size: 30px;
                    }
                    p{
                        font-size: 18px;
                    }
                    button{
                        font-size: 18px;
                    }
                }
            }
            .contem_conteudo_invertido{
                .contem_conteudo_solucao{
                    margin-left: 0;
                    margin-right: -60px;
                }
            }
        }
    }

    @media(max-width: 983px){
        header{
            .texto_apresentacao{
                margin-top: 50px;
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
                top: -20px;
                img{
                    width: 100%;
                }
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
            .imagem_apresentacao{
                width: 300px;
                height: 300px;
            }
        }
        .contem_solucoes{
            padding-top: 190px;
            .contem_conteudo{
                 .detalhe_solucao{
                    padding: 0;
                    .contem_detalhe_solucao{
                        width: 80%;
                        padding: 0;
                        padding-bottom: 10px;
                        .contem_imagem{
                            display: none;
                        }
                        .contem_texto{
                            h3{
                                text-align: center;
                            }
                            ul{
                                padding: 0 30px;
                            }
                        }
                    }
                }
                .imagem_solucao{
                    width: 350px;
                    height: 350px;
                }
                .contem_conteudo_solucao{
                    margin-left: -80px;
                    h2{
                        font-size: 22px;
                    }
                    p{
                        font-size: 16px;
                    }
                    button{
                        font-size: 16px;
                    }
                }
            }
            .contem_conteudo_invertido{
                .contem_conteudo_solucao{
                    margin-left: 0;
                    margin-right: -80px;
                }
            }
        }
    }

    @media(max-width: 800px){
        header{
            .texto_apresentacao{
                h1{
                    font-size: 20px;
                    span:nth-of-type(2){
                        font-size: 110px;
                        margin-left: 120px;
                    }
                    span:nth-of-type(3){
                        margin-top: 30px;
                        margin-left: 160px;
                    }
                }
            }
        }
    }

    @media(max-width: 700px){
        header{
            padding-top: 80px;
            padding-bottom: 20px;
            .texto_apresentacao{
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
                width: 220px;
                height: 220px;
            }
        }
        .contem_solucoes{
            padding-top: 150px;
            .contem_conteudo{
                .detalhe_solucao{
                    .contem_detalhe_solucao{
                        width: 90%;
                        .contem_texto{
                            h3{
                                font-size: 14px;
                            }
                            ul{
                                li{
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
                .imagem_solucao{
                    width: 300px;
                    height: 300px;
                }
                .contem_conteudo_solucao{
                    padding: 20px 20px;
                    margin-left: -120px;
                    h2{
                        font-size: 16px;
                    }
                    p{
                        font-size: 14px;
                    }
                    button{
                        font-size: 14px;
                    }
                }
            }
            .contem_conteudo_invertido{
                .contem_conteudo_solucao{
                    margin-left: 0;
                    margin-right: -120px;
                }
            }
        }
    }

    @media(max-width: 624px){
        header{
            padding-bottom: 20px;
            .texto_apresentacao{
                margin-top: 40px;
                margin-left: 1%;
                width: 80%;
                h1{
                    font-size: 12px;
                    span:nth-of-type(2){
                        font-size: 80px;
                        margin-left: 70px;
                    }
                    span:nth-of-type(3){
                        margin-left: 90px;
                    }
                    span{
                        display: block;
                    }
                }
            }
            .imagem_apresentacao{
                width: 124px;
                height: 127px;
                top: 5px;
                right: 1%;
            }
        }
        .contem_solucoes{
            padding-top: 100px;
            .contem_conteudo{
                padding: 0;
                margin-bottom: 100px;
                .detalhe_solucao{
                    width: 110%;
                    height: 150%;
                    margin-top: -10%;
                    .contem_detalhe_solucao{
                        width: 95%;
                    }
                }
                .imagem_solucao{
                    width: 171px;
                    height: 171px;
                }
                .contem_conteudo_solucao{
                    padding: 5px 10px;
                    margin-left: -80px;
                    position: relative;
                    h2{
                        font-size: 13px;
                        margin: 0;
                        margin-bottom: 5px;
                    }
                    p{
                        font-size: 12px;
                        margin: 0;
                    }
                    button{
                        padding: 5px 10px;
                        font-size: 12px;
                        position: absolute;
                        top: 105%;
                        right: 0;
                    }
                }
            }
            .contem_conteudo_invertido{
                .contem_conteudo_solucao{
                    margin-left: 0;
                    margin-right: -80px;
                    button{
                        left: 0;
                        right: auto;
                    }
                }
            }
        }
    }

</style>
