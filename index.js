const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "¡Servidor funcionando correctamente!",
    status: "success",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// Endpoint de prueba adicional
app.get("/api/test", (req, res) => {
  res.json({
    message: "Endpoint de prueba funcionando",
    data: {
      server: "Node.js + Express",
      project: "Tesis Backend",
      environment: process.env.NODE_ENV || "development",
    },
  });
});

// Endpoint para información del servidor
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString(),
  });
});

// Manejo de rutas no encontradas
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
    status: "error",
    path: req.originalUrl,
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Error interno del servidor",
    status: "error",
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📊 Endpoint de prueba: http://localhost:${PORT}/api/test`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
