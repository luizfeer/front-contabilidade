# front-contabilidade

Aplicacao web em React com Vite para teste contabilidade.com.

## Tecnologias

- React 19
- Vite 7
- CSS Modules
- ESLint
- `vite-plugin-svgr` (importação de SVG como componente React)
- `@fontsource` (fontes Inter e Poppins)

Inicialmente importei o @mdi/js para icones, mas vi que os icones eram de familias diferentes, então optei por importalos como SVG por customização simples e performace.

As fontes foram instaladas por questão de performace, optei pela versão versionada do npm.

## Como executar

### 1) Instalar dependências

```bash
npm install
```

### 2) Ambiente de desenvolvimento

```bash
npm run dev
```

### 3) Gerar versao de producao

```bash
npm run build
```

### 4) Visualizar versao de producao

```bash
npm run preview
```

### 5) Verificar padrao de codigo (lint)

```bash
npm run lint
```

## Estrutura atual do projeto

```text
front-contabilidade/
├─ public/
│  └─ favicon.png
├─ src/
│  ├─ assets/
│  │  ├─ icons/
│  │  └─ images/
│  ├─ components/
│  │  ├─ FeatureItem/
│  │  │  ├─ FeatureItem.jsx
│  │  │  └─ FeatureItem.module.css
│  │  ├─ HeroSection/
│  │  │  ├─ HeroSection.jsx
│  │  │  └─ HeroSection.module.css
│  │  ├─ PricingSection/
│  │  │  ├─ PricingSection.jsx
│  │  │  └─ PricingSection.module.css
│  │  └─ ui/
│  │     └─ Button/
│  │        ├─ Button.jsx
│  │        └─ Button.module.css
│  ├─ styles/
│  │  ├─ global.css
│  │  └─ typography.module.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ vite.config.js
└─ package.json
```

## Padrão de importações

### CSS Modules por componente

Cada componente importa seu arquivo `.module.css` e usa as classes via objeto `styles`:

```jsx
import styles from './PricingSection.module.css'

export default function PricingSection() {
  return <section className={styles.section}>...</section>
}
```

### Módulo de tipografia compartilhado

Para estilos reutilizáveis de tipografia:

```jsx
import typography from '../../styles/typography.module.css'

<h1 className={typography.title}>...</h1>
```

### CSS global

Estilos globais são carregados no `main.jsx`:

```jsx
import './styles/global.css'
```

### Importação de SVG como componente React

Com `vite-plugin-svgr`, use `?react` no import:

```jsx
import IconNotas from '../../assets/icons/hugeicons_note.svg?react'
```


## Decisões técnicas

### 1) `global.css` em CSS puro

O arquivo `src/styles/global.css` foi mantido em CSS puro porque concentra regras realmente globais, como:

- reset/base de estilos
- comportamento geral de `html` e `body`
- ajustes compartilhados da aplicação

Nesses casos, não há necessidade de escopo por componente.

### 2) CSS Modules para estilos de componente

Os estilos locais ficam em arquivos `.module.css` por componente (ex.: `HeroSection.module.css`, `PricingSection.module.css`) com importação via:

```jsx
import styles from './PricingSection.module.css'
```

Motivos da escolha:

- escopo automático de classes (evita conflitos)
- solução nativa, leve e simples no Vite
- manutenção mais previsível por componente

### 3) Módulo de tipografia compartilhado

Foi criado `src/styles/typography.module.css` para classes reaproveitáveis de tipografia:

```jsx
import typography from '../../styles/typography.module.css'
```

Isso evita duplicação de estilos e mantém consistência visual entre seções.

### 4) Vite como base do projeto

O Vite foi adotado para ter:

- inicialização rápida no desenvolvimento
- configuração enxuta
- integração direta com React

### 5) SVG como componente React (`vite-plugin-svgr`)

Ícones SVG são importados com `?react`, por exemplo:

```jsx
import IconNotas from '../../assets/icons/hugeicons_note.svg?react'
```

Isso facilita uso com `className`, tamanho e cor via CSS.

### 6) Organização de pastas por responsabilidade

A estrutura em `src/components`, `src/assets` e `src/styles` separa claramente:

- componentes de interface
- recursos estáticos (ícones e imagens)
- estilos globais e compartilhados

Com isso, o projeto fica mais escalável e fácil de manter.

