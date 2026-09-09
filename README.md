# Cosas de Anime — Frontend

Plataforma de catálogo y streaming de anime construida con Next.js. Permite gestionar anime con metadatos completos (título, sinopsis, fechas, géneros, temporadas), administrar episodios/openings/endings, subir y reproducir contenido multimedia, y chatear en tiempo real.

> **Backend API**: [Netflix_Anime_Api](https://github.com/jorbencas/Netflix_Anime_Api)

---

## Tech Stack

| Categoría | Tecnología |
|-----------|------------|
| Framework | [Next.js 12](https://nextjs.org/) |
| UI | [React 18](https://react.dev/) |
| Lenguaje | JavaScript + TypeScript (parcial) |
| State | React Context (useReducer) |
| Estilos | CSS Modules + CSS Custom Properties |
| i18n | JSON files (es/en) |
| Backend | [Netflix_Anime_Api](https://github.com/jorbencas/Netflix_Anime_Api) (Express + Prisma + PostgreSQL) |
| Realtime | Socket.IO (chat) |

---

## Características

- **CRUD de Anime**: título, abreviatura (siglas), saga, sinopsis, fechas, idioma, estado, tipo, géneros, temporadas
- **Gestión de episodios**: CRUD con soporte de subtítulos y media
- **Openings y Endings**: gestión de themes musicales por anime
- **Sistema de media**: subida y visualización de imágenes (jpg/png/gif/bmp) y vídeos (mp4)
- **Reproductor de vídeo**: controles personalizados (play/pause, skip, barra de progreso)
- **Chat en tiempo real**: WebSocket con Socket.IO, indicadores de escritura, notificaciones de sonido
- **Dark/Light mode**: toggle de tema con CSS Custom Properties
- **Internacionalización**: español e inglés (useReducer + JSON)
- **Filtros**: búsqueda por géneros y temporadas

---

## Estructura del proyecto

```
Netflix_Anime/
├── pages/                    # Rutas Next.js
│   ├── index.js              # Home
│   ├── edit/index.jsx        # Panel de administración (pestañas)
│   └── api/hello.js          # API route de ejemplo
├── components/               # Componentes React
│   ├── Header/               # Navegación
│   ├── Footer/               # Footer con scroll-to-top
│   ├── Modal/                # Modal reutilizable (React Portal)
│   ├── Tabs/                 # Sistema de pestañas
│   ├── EditAnime/            # Formulario de anime
│   ├── EditEpisodes/         # Formulario de episodios
│   ├── EditOpenings/         # Formulario de openings
│   ├── EditEndings/          # Formulario de endings
│   ├── EditSeasions/         # Formulario de temporadas
│   ├── Media/                # Sistema de media (upload + display)
│   ├── VideoTest/            # Reproductor de vídeo custom
│   ├── Filters/              # Sistema de filtros
│   └── SwitchButton/         # Toggle dark/light mode
├── context/                  # React Context providers
│   ├── ThemeContext.jsx       # Estado del tema
│   ├── LangContext.jsx        # i18n
│   ├── ModalContext.jsx       # Estado del modal
│   ├── SiglasContext.jsx      # Abreviaturas de anime
│   └── Media.jsx             # Archivos media
├── hooks/                    # Custom hooks
│   ├── useAnime.jsx          # Lógica CRUD de anime
│   ├── useEpisodes.jsx       # Lógica CRUD de episodios
│   ├── useMediaFile.tsx      # Carga de archivos media
│   └── useMediaForm.jsx      # Formulario de subida
├── services/                 # Capa de API (conexión al backend)
├── lang/                     # Traducciones (es.json, en.json)
├── styles/                   # CSS (globals, themes, componentes)
└── reducers/                 # Anime state reducer
```

---

## Requisitos

- [Node.js](https://nodejs.org/) 16+
- npm o yarn
- [Netflix_Anime_Api](https://github.com/jorbencas/Netflix_Anime_Api) ejecutándose en `localhost:3001`

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jorbencas/Netflix_Anime.git
cd Netflix_Anime

# Instalar dependencias
npm install

# Arrancar en desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción |
| `npm start` | Ejecutar build de producción |
| `npm run lint` | ESLint |

---

## Backend

El frontend se conecta a una API backend en `localhost:3001`. Consulta el repositorio [Netflix_Anime_Api](https://github.com/jorbencas/Netflix_Anime_Api) para ver los endpoints, el schema de la base de datos y cómo arrancarlo.

---

## Licencia

Proyecto personal de [Jorge Beneyto Castelló](https://github.com/jorbencas).
