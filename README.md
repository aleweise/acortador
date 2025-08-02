# 🚀 Futuristic URL Shortener

Un acortador de URLs moderno con diseño futurista y funcionalidad completa. Permite crear enlaces cortos personalizados con una interfaz elegante y minimalista.

## ✨ Características

- 🎨 **Diseño Futurista**: Interfaz moderna con efectos de neón y tema oscuro
- 🔗 **Acortamiento de URLs**: Convierte URLs largas en enlaces cortos y manejables
- 🎯 **Slugs Personalizados**: Opción de crear enlaces con nombres personalizados
- ⚡ **Rápido y Ligero**: Construido con Node.js y Express para máximo rendimiento
- 💾 **Almacenamiento Local**: Base de datos JSON simple para persistencia de datos
- 📱 **Responsive**: Diseño adaptable a diferentes dispositivos

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Base de Datos**: JSON file storage
- **Dependencias**: body-parser para manejo de requests

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/acortador.git
   cd acortador
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🚀 Uso

### Interfaz Web
1. Ingresa la URL que deseas acortar
2. (Opcional) Especifica un slug personalizado
3. Haz clic en "Shorten"
4. ¡Tu enlace corto estará listo!

### API Endpoints

#### Acortar URL
```http
POST /shorten
Content-Type: application/json

{
  "url": "https://ejemplo.com/url-muy-larga",
  "slug": "mi-enlace" // opcional
}
```

**Respuesta:**
```json
{
  "slug": "mi-enlace"
}
```

#### Redirección
```http
GET /:slug
```
Redirige automáticamente a la URL original.

## 📁 Estructura del Proyecto

```
acortador/
├── server.js          # Servidor Express principal
├── index.html         # Interfaz de usuario
├── script.js          # Lógica del frontend
├── style.css          # Estilos futuristas
├── package.json       # Configuración del proyecto
├── urls.json          # Base de datos de URLs (se crea automáticamente)
├── vercel.json        # Configuración para deploy en Vercel
└── README.md          # Este archivo
```

## 🌐 Deploy

### Vercel
El proyecto incluye configuración para Vercel. Simplemente:

1. Conecta tu repositorio a Vercel
2. El deploy se realizará automáticamente

### Otros Servicios
- **Heroku**: Añade `"engines": {"node": ">=14.0.0"}` al package.json
- **Railway**: Deploy directo desde GitHub
- **Render**: Compatible sin configuración adicional

## 🔧 Configuración

### Variables de Entorno
```bash
PORT=3000  # Puerto del servidor (opcional, default: 3000)
```

### Personalización
- **Estilos**: Modifica `style.css` para cambiar la apariencia
- **Puerto**: Cambia la variable `PORT` en `server.js`
- **Base de datos**: El archivo `urls.json` se crea automáticamente

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 🐛 Reportar Bugs

Si encuentras algún bug, por favor abre un [issue](https://github.com/tu-usuario/acortador/issues) con:
- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots (si aplica)

## 🎯 Roadmap

- [ ] Autenticación de usuarios
- [ ] Estadísticas de clicks
- [ ] API key para uso programático
- [ ] Expiración de enlaces
- [ ] Dashboard administrativo
- [ ] Base de datos SQL
- [ ] Rate limiting
- [ ] QR codes para enlaces

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@ejemplo.com

---

⭐ ¡No olvides dar una estrella al proyecto si te gustó!