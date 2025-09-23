<script setup lang="ts">
    import logoWhite from '@/assets/logo-thesera-white.webp'
</script>


<template>
    <footer>
        <div class="contem_logo_redes_sociais contem_conteudo">
            <div class="contem_logo_thesera">
                <img class="logo_thesera" :src="logoWhite" alt="Logo da Thésera branco." />
            </div>
            <div class="redes_sociais desktop_redes_sociais">
                <a href="" class="icone">
                    <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
                    <span>@thesera.rh</span>
                </a>
                <a href="#" class="icone">
                    <font-awesome-icon class="icon" icon="envelope" />
                    <span>thiara@thesera.com.br</span>
                </a>
                <a href="" class="icone">
                    <font-awesome-icon class="icon" :icon="['fab', 'whatsapp']" />
                    <span>+55 (47) 99288-9906</span>
                </a>
            </div>

            <div class="redes_sociais mobile_redes_sociais">
                <p>Entre em contato!</p>
                <div class="contem_icones">
                    <a href="" class="icone">
                        <font-awesome-icon class="icon" icon="envelope" />
                    </a>
                    <a href="" class="icone">
                        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
                    </a>
                    <a href="" class="icone">
                        <font-awesome-icon class="icon" :icon="['fab', 'whatsapp']" />
                    </a>
                </div>
            </div>
        </div>
        <p class="assinatura_kohesa">Designed and developed by Kohesa © 2025</p>
    </footer>
</template>

<style scoped lang="scss">
    *{
        padding: 0;
        font-family: $font-mulish;
        box-sizing: border-box;
    }
    .contem_conteudo{
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
    }
    footer{
        background-image: url('@/assets/imagem_footer.webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 20px 0;
        .contem_logo_redes_sociais{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 80px;
            .contem_logo_thesera{
                flex: 1;
                .logo_thesera{
                    width: 400px;
                }
            }
            .redes_sociais{
                .icone{
                    text-decoration: none;
                    display: block;
                    font-size: 18px;
                    margin: 10px 0;
                    span, .icon{
                        color: $white;
                    }
                    span{
                        margin-left: 2px;
                    }
                }
            }
            .desktop_redes_sociais{
                display: block;
            }
            .mobile_redes_sociais{
                display: none;
                .contem_icones{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .icone{
                        margin: 0 4px;
                        font-size: 20px;
                    }
                }
            }
        }
        p{
            margin-top: 80px;
            font-size: 18px;
            text-align: center;
            color: $white;
        }
    }

    @media(max-width: 866px){
        footer{
            .contem_logo_redes_sociais{
                display: block;
                .contem_logo_thesera{
                    display: flex;
                    justify-content: center;
                }
                .desktop_redes_sociais{
                    display: none;
                }
                .mobile_redes_sociais{
                    display: block;
                }
            }
            .redes_sociais{
                margin-top: 50px;
            }
            p{
                margin-top: 0px;
                font-size: 15px;
            }
        }
    }

    @media(max-width: 866px){
        footer{
            padding: 10x 0;
            .contem_logo_redes_sociais{
                padding: 10px 80px;
                padding-bottom: 20px;
                .contem_logo_thesera{
                    .logo_thesera{
                        width: 180px;
                    }
                }
            }
            .redes_sociais{
                margin-top: 25px;
            }
            p{
                margin-top: 0px;
                font-size: 12px;
            }
        }
    }
</style>