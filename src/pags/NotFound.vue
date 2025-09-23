<script setup lang="ts">
    import img from '@/assets/NOTFOUND/header_not_found.avif'
</script>

<template>
  <div class="contem_pag_not_found">
    <div class="contem_conteudo_erro">
        <div class="contem_texto">
            <h1>Ainda não temos nada por aqui.</h1>
            <div class="contem_img img_mobile">
                <img :src="img" alt="">
            </div>
            <p>Parece que você achou uma peça fora de encaixe, que tal voltar ao início e encontrar o caminho correto?</p>
            <router-link to="/">Home</router-link>
        </div>
        <div class="contem_img">
            <img :src="img" alt="">
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    *{
        padding: 0;
        font-family: $font-mulish;
        box-sizing: border-box;
        color: $verdeMusgo;
        margin: 0;
    }

    .contem_pag_not_found{
        background-color: $rozaClaro;
        padding: 40px 0;
        .contem_conteudo_erro{
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            border-radius: 40px;
            padding: 50px 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            .contem_texto{
                text-align: center;
                width: 50%;
                h1{
                    max-width: 400px;
                    font-size: 48px;
                    margin: 0 auto;
                    margin-bottom: 30px;
                }
                p{
                    color: $rozaEscuro;
                    max-width: 450px;
                    font-size: 24px;
                    margin: 0 auto;
                    margin-bottom: 30px;
                }
                a{
                    background-color: $verdeMusgo;
                    color: white;
                    text-decoration: none;
                    padding: 5px 50px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: .3s;
                    font-size: 15px;
                }
                a:hover{
                    background-color: $rozaEscuro;
                }
            }
            .img_mobile{
                display: none;
            }
            .contem_img{
                width: 50%;
                max-width: 400px;
                img{
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 950px){
        .contem_pag_not_found{
            .contem_conteudo_erro{
                .contem_texto{
                    h1{
                        font-size: 30px;
                        max-width: 250px;
                    }
                    p{
                        max-width: 350px;
                        font-size: 18px;
                    }
                }
            }
        }
    }

    @media (max-width: 890px){
        .contem_pag_not_found{
            padding-top: 110px;
        }
    }

    @media (max-width: 765px){
        .contem_pag_not_found{
            .contem_conteudo_erro{
                .contem_texto{
                    text-align: center;
                    width: 100%;
                    h1{
                        font-size: 20px;
                        max-width: 200px;
                    }
                    p{
                        font-size: 12px;
                        max-width: 220px;
                    }
                    a{
                        font-size: 12px;
                        border-radius: 10px;
                    }
                }
                .contem_img{
                    width: 100%;
                    max-width: 200px;
                    display: none;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    img{
                        width: 100%;
                    }
                }
                .img_mobile{
                    display: block;
                }
            }
        }
    }
</style>