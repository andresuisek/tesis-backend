# Tesis Backend

Backend desarrollado con Node.js y Express para proyecto de tesis.

## 📋 Requisitos Previos

- Node.js (versión 20 o superior)
- npm (viene incluido con Node.js)

## 🚀 Instalación y Configuración

### 1. Clonar o descargar el proyecto

Si aún no tienes el código, clónalo:

```bash
git clone https://github.com/andresuisek/tesis-backend.git
cd tesis-backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` basado en el archivo de ejemplo:

```bash
# En Windows
copy .env.example .env

# En Linux/Mac
cp .env.example .env
```

Luego puedes modificar el archivo `.env` según tus necesidades:

```bash
PORT=3000
NODE_ENV=development
```

## 🏃‍♂️ Ejecutar el Proyecto

### Modo Desarrollo (con recarga automática)

```bash
npm run dev
```

### Modo Producción

```bash
npm start
```

El servidor se ejecutará en: `http://localhost:3000`

## 🧪 Endpoints Disponibles

### Endpoint Principal

- **GET** `/` - Página principal del servidor
  ```json
  {
    "message": "¡Servidor funcionando correctamente!",
    "status": "success",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "version": "1.0.0"
  }
  ```

### Endpoint de Prueba

- **GET** `/api/test` - Endpoint de prueba
  ```json
  {
    "message": "Endpoint de prueba funcionando",
    "data": {
      "server": "Node.js + Express",
      "project": "Tesis Backend",
      "environment": "development"
    }
  }
  ```

### Health Check

- **GET** `/api/health` - Estado del servidor
  ```json
  {
    "status": "healthy",
    "uptime": 123.456,
    "memory": {...},
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

## 📁 Estructura del Proyecto

```
tesis-backend/
├── index.js          # Archivo principal del servidor
├── package.json       # Dependencias y scripts
├── .env.example      # Ejemplo de variables de entorno
├── .gitignore        # Archivos ignorados por git
├── README.md         # Este archivo
└── .git/             # Control de versiones
```

## 🏗️ Detalle de Arquitectura y Tecnologías Utilizadas

| Capa / utilidad    | Herramienta      | Propósito                          |
| ------------------ | ---------------- | ---------------------------------- |
| **Runtime**        | Node.js 20 (LTS) | Flujo I/O no bloqueante            |
| **Framework**      | Express 4        | Enrutamiento HTTP                  |
| **ORM**            | Prisma 5         | Tipos seguros, migraciones         |
| **Auth**           | Supabase         | JWT + RLS sobre Postgres           |
| **Queue**          | BullMQ + Redis   | Jobs pesados (XML SRI, embeddings) |
| **Observabilidad** | Sentry           | Monitoreo de errores y trazas      |
| **CORS**           | cors (npm)       | Política de origen cruzado segura  |
| **Testing**        | Jest + Supertest | Pruebas unitarias e integración    |
| **CI/CD** | GitHub Actions | Lint → tests → deploy (Render) |
| --------- | -------------- | ------------------------------ |

## 📝 Scripts Disponibles

- `npm start` - Ejecuta el servidor en modo producción
- `npm run dev` - Ejecuta el servidor en modo desarrollo con nodemon
- `npm test` - Ejecuta las pruebas (por configurar)

## 🤝 Contribución

Este es un proyecto de tesis. Para contribuir o reportar issues, contacta al desarrollador.

