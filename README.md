# 🎫 leiva-checker

Este proyecto es un pequeño bot desarrollado con [Puppeteer](https://pptr.dev/) y [node-cron](https://www.npmjs.com/package/node-cron) que verifica cada 5 minutos si las entradas para el concierto de **Leiva** ya están disponibles.

## 🎯 ¿Por qué hice esto?

Soy un gran fan de **Leiva** y estoy emocionado por ir a su concierto. Como quiero conseguir los mejores lugares posibles, decidí aprovechar mis habilidades como programador para automatizar el seguimiento de la página de entradas. Así puedo saber en cuanto estén disponibles y comprarlas de inmediato.

## ⚙️ ¿Cómo funciona?

El script hace lo siguiente:

1. Abre una instancia del navegador con Puppeteer (en modo `headless`).
2. Visita la página oficial de entradas: [https://leivaentradas.com](https://leivaentradas.com)
3. Extrae el texto del botón correspondiente al estado de los boletos.
4. Verifica si dice `"Próximamente"` o si ya están disponibles.
5. Muestra un mensaje en consola dependiendo del estado.
6. Se ejecuta automáticamente **cada 5 minutos** gracias a `node-cron`.

## 🧠 Tecnologías usadas

- [Node.js](https://nodejs.org/)
- [Puppeteer](https://pptr.dev/) – para automatizar el navegador.
- [node-cron](https://www.npmjs.com/package/node-cron) – para programar tareas periódicas.

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/leiva-checker.git
   cd leiva-checker
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el script:

   ```bash
   node index.js
   ```

El bot se mantendrá corriendo y revisará cada 5 minutos el estado de los boletos.

## ⏲ Frecuencia de ejecución

El cronjob está configurado para ejecutarse **cada 5 minutos**:

```js
cron.schedule('*/5 * * * *', () => {
    validarVentaBoletos();
});
```

## ✨ Resultado

Verás en consola un mensaje como:

```bash
⏱ Ejecutando función...
Aun estan proximos
```

O bien:

```bash
⏱ Ejecutando función...
Los boletos ya estan a la venta
```

## 🧪 Notas

- Asegúrate de tener una conexión estable a internet.
- Este proyecto no realiza compras automáticas, solo notifica si los boletos ya están disponibles.

## ❤️ Contribución

Este proyecto es personal, pero si quieres adaptarlo a otro concierto o artista, ¡adelante!

---

_Disfrutar un concierto con buena vista empieza desde el código. ¡Nos vemos en el show de Leiva!_
