# Documentação Técnica do Projeto Thesera

**Autor:** Kohesa Tech
**Data:** 22 de Setembro de 2025

## 1. Visão Geral

Este documento fornece uma análise técnica detalhada do website Thesera, um projeto frontend moderno desenvolvido com Vue.js e Vite. O objetivo é servir como um guia completo para desenvolvedores, abordando a arquitetura, as tecnologias empregadas, as funcionalidades e os processos de desenvolvimento e deploy.

A aplicação é uma Single Page Application (SPA) com geração de site estático (SSG) para otimização de performance e SEO, construída com um forte foco em componentização, manutenibilidade e uma experiência de desenvolvimento ágil.

## 2. Estrutura do Projeto

O projeto segue uma estrutura de diretórios organizada e modular, típica de aplicações Vue.js modernas. A seguir, uma descrição detalhada da estrutura:

```
thesera-main/
├── public/                  # Arquivos estáticos
├── src/                     # Código-fonte da aplicação
│   ├── assets/              # Imagens e outros recursos
│   ├── components/          # Componentes Vue reutilizáveis
│   ├── pags/                # Componentes de página (rotas)
│   ├── scss/                # Estilos globais SCSS
│   ├── types/               # Definições de tipo TypeScript
│   ├── App.vue              # Componente raiz da aplicação
│   ├── main.ts              # Ponto de entrada da aplicação
│   └── style.css            # Estilos CSS globais mínimos
├── .gitignore               # Arquivos ignorados pelo Git
├── index.html               # Template HTML principal
├── netlify.toml             # Configuração de deploy para Netlify
├── package.json             # Dependências e scripts do projeto
├── README.md                # Documentação original do projeto
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração do Vite
```

### Tabela de Diretórios e Arquivos Principais

| Caminho | Descrição |
| --- | --- |
| `public/` | Contém arquivos estáticos que são servidos diretamente, como `_redirects` para o Netlify e o `sitemap.xml` recém-criado. |
| `src/assets/` | Armazena todas as imagens e outros recursos de mídia. As imagens foram otimizadas para o formato WebP para melhor performance. |
| `src/components/` | Inclui componentes Vue reutilizáveis como `Nav.vue`, `Footer.vue` e `FormEntreEmContato.vue`, promovendo a modularidade e consistência. |
| `src/pags/` | Contém os componentes que representam as páginas principais da aplicação, mapeadas para as rotas no Vue Router. |
| `src/scss/app.scss` | Arquivo principal de estilos Sass (SCSS), onde são definidas variáveis de cores, fontes e importações globais. |
| `src/main.ts` | Ponto de entrada da aplicação. Inicializa o Vue, o Vue Router, registra o Font Awesome e configura o `vite-ssg`. |
| `App.vue` | Componente raiz que define o layout global da aplicação, incluindo o `Nav`, `Footer` e o `<router-view>` para renderizar as páginas. |
| `vite.config.ts` | Arquivo de configuração do Vite, onde são definidos plugins, aliases de caminho e opções de pré-processadores CSS. |
| `netlify.toml` | Define as configurações de build e deploy para a plataforma Netlify, especificando o comando de build e o diretório de publicação. |
| `package.json` | Lista todas as dependências do projeto (Vue, Vite, Swiper, etc.) e os scripts para desenvolvimento, build e preview. |

## 3. Tecnologias Utilizadas

O projeto utiliza um stack de tecnologias modernas para o desenvolvimento frontend, focadas em performance e experiência do desenvolvedor.

| Tecnologia | Versão/Descrição |
| --- | --- |
| **Vue.js** | `^3.5.18` - Framework progressivo para a construção de interfaces de usuário. |
| **Vite** | `^7.1.2` - Ferramenta de build de frontend que oferece uma experiência de desenvolvimento extremamente rápida. |
| **TypeScript** | `~5.8.3` - Superset de JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código. |
| **Vue Router** | `^4.5.1` - Roteador oficial para Vue.js, utilizado para gerenciar a navegação da SPA. |
| **Vite SSG** | `^28.1.0` - Plugin para Vite que implementa Geração de Site Estático (SSG), pré-renderizando as páginas em HTML estático. |
| **Sass (SCSS)** | `^1.90.0` - Pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins para uma estilização mais organizada. |
| **Swiper** | `^11.2.10` - Biblioteca para a criação de carrosséis e sliders responsivos, utilizada na página inicial. |
| **Font Awesome** | `^7.0.0` - Biblioteca de ícones vetoriais utilizada em toda a aplicação. |
| **Netlify** | Plataforma de automação para hospedar e fazer deploy de projetos web, utilizada para a publicação contínua a partir do repositório Git. |

## 4. Arquitetura e Funcionalidades

A aplicação é uma Single Page Application (SPA) com uma arquitetura baseada em componentes, onde cada parte da interface é um componente Vue reutilizável.

### 4.1. Inicialização da Aplicação (`main.ts`)

O ponto de entrada `src/main.ts` é responsável por:

- **Inicializar o ****`ViteSSG`**: Em vez de `createApp` do Vue, o projeto usa `ViteSSG` para criar a aplicação, o que habilita a geração de site estático.

- **Definir as Rotas**: Um array `routes` mapeia os caminhos de URL para os componentes de página correspondentes em `src/pags/`.

- **Registrar Componentes Globais**: O componente `FontAwesomeIcon` é registrado globalmente para uso em toda a aplicação.

- **Importar Ícones e Estilos**: Importa os ícones específicos do Font Awesome e os estilos CSS/SCSS globais.

### 4.2. Componente Raiz (`App.vue`)

O `src/App.vue` serve como o layout principal da aplicação. Ele é composto por três partes principais:

1. **`<Nav />`**: O componente de navegação, sempre visível no topo.

1. **`<router-view />`**: Onde o Vue Router renderiza o componente da página ativa com base na URL atual.

1. **`<Footer />`**: O componente de rodapé, sempre visível na parte inferior.

### 4.3. Navegação (`Nav.vue`)

O componente de navegação é altamente dinâmico e responsivo:

- **Dois Menus Desktop**: Um estático e um que se torna "sticky" (fixo no topo) após o scroll de 100 pixels, proporcionando uma melhor experiência de usuário.

- **Menu Mobile**: Um menu separado para dispositivos móveis que é acionado por um ícone de "hambúrguer".

- **Acionamento do Formulário**: O link "Entre em Contato" não navega para uma nova página, mas aciona a exibição de um modal com o componente `FormEntreEmContato.vue`.

- **Gerenciamento de Estado**: Utiliza a Composition API do Vue (`ref`, `onMounted`, `watch`) para controlar o estado do menu (sticky, mobile aberto) e do formulário.

### 4.4. Formulário de Contato (`FormEntreEmContato.vue`)

Este componente encapsula toda a lógica do formulário de contato:

- **Integração com Netlify Forms**: O formulário é um formulário padrão HTML com atributos `data-netlify="true"` e `netlify-honeypot="bot-field"` para integração direta com o serviço de formulários do Netlify.

- **Validação de Dados**: Realiza a validação no lado do cliente para os campos de nome, e-mail, telefone, assunto e mensagem, exibindo mensagens de erro específicas.

- **Formatação de Telefone**: Inclui uma função para formatar o número de telefone em tempo real enquanto o usuário digita, melhorando a usabilidade.

- **Feedback de Envio**: Exibe mensagens de sucesso ou erro após a tentativa de envio, com uma barra de progresso visual, e depois desaparece automaticamente.

- **Gerenciamento de Estado**: Controla o estado de envio (`sending`), sucesso (`success`) e erros (`errors`) para fornecer feedback claro ao usuário.

### 4.5. Geração de Site Estático (SSG)

O uso do `vite-ssg` é um ponto crucial da arquitetura:

- **Pré-renderização**: Durante o processo de build (`npm run build`), o Vite SSG visita cada uma das rotas definidas (exceto a página 404) e gera um arquivo `index.html` para cada uma dentro do diretório `dist/`.

- **Performance e SEO**: Isso resulta em um site extremamente rápido no carregamento inicial e totalmente indexável pelos motores de busca, combinando os benefícios de um site estático com a interatividade de uma SPA após o carregamento.

## 5. Build e Deploy

O processo de build e deploy do projeto é automatizado através da integração contínua com a plataforma Netlify.

### 5.1. Processo de Build

- O comando `npm run build` (definido no `package.json` como `vue-tsc -b && vite-ssg build`) é executado para iniciar o processo de build.

- `vue-tsc`: Verifica os tipos do TypeScript em todo o projeto para garantir a segurança de tipo.

- `vite-ssg build`: Executa o processo de Geração de Site Estático (SSG), pré-renderizando todas as páginas definidas nas rotas em arquivos HTML estáticos.

- O resultado é um diretório `dist/` que contém todos os arquivos estáticos prontos para serem servidos.

### 5.2. Processo de Deploy

- **Integração com Git**: O deploy é acionado automaticamente a cada `push` para o branch principal do repositório Git.

- **Configuração do Netlify (****`netlify.toml`****)**: O Netlify lê este arquivo para configurar o ambiente de build.
  - `command = "npm run build"`: Define o comando a ser executado para construir o site.
  - `publish = "dist"`: Especifica que o conteúdo do diretório `dist/` deve ser publicado.
  - `NODE_VERSION = "20"`: Garante que o ambiente de build do Netlify use a versão 20 do Node.js, mantendo a consistência com o ambiente de desenvolvimento.

- **Domínio**: Atualmente, o site está disponível em `https://thesera.com.br/`.

## 6. Sitemap

Foi criado um arquivo `sitemap.xml` e adicionado ao diretório `public/` para melhorar a indexação do site pelos motores de busca.

O sitemap define as URLs principais da aplicação, sua frequência de alteração (`changefreq`) e prioridade (`priority`).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://thesera.com.br/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://thesera.com.br/quem-somos</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thesera.com.br/manifesto</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thesera.com.br/solucoes</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

## 7. Como Executar o Projeto Localmente

Para executar o projeto em um ambiente de desenvolvimento local, siga os passos abaixo.

### 7.1. Pré-requisitos

- **Node.js**: Versão 20.x ou superior.

- **npm**: Gerenciador de pacotes do Node.js (geralmente instalado com o Node.js).

### 7.2. Passos para Instalação

1. **Clonar o Repositório (se aplicável)**

1. **Instalar as Dependências**
Execute o seguinte comando na raiz do projeto para instalar todas as dependências listadas no `package.json`:

1. **Executar o Servidor de Desenvolvimento**
Para iniciar o servidor de desenvolvimento do Vite, execute:

### 7.3. Outros Scripts

- **Build para Produção**: Para gerar a versão estática do site para produção, execute:
  ```bash
  npm run build
  ```
  Os arquivos serão gerados no diretório `dist/`.

- **Preview da Build de Produção**: Para visualizar a build de produção localmente, execute:
  ```bash
  npm run preview
  ```

