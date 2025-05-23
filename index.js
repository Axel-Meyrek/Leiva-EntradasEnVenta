/* IMPORTACIONES */
import puppeteer from "puppeteer";
import 'dotenv/config';

/* FUNCIONES */
const validarVentaBoletos = async () =>  {
    const navegador = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await navegador.newPage();
    await page.goto('https://leivaentradas.com');

    const estadoDeBoletos = await page.evaluate(() => {
        const buttons = document.querySelectorAll('.btn');
        return buttons[63].textContent;
    });

    if(estadoDeBoletos == 'Próximamente') {
        console.log('Aun estan proximos');
        enviarMensajeTelegram('Aun están proximos');
    }
    else {
        console.log('Los boletos ya estan disponibles');
        enviarMensajeTelegram('🎟 ¡Ya puedes comprar tus boletos de Leiva en https://leivaentradas.com!');
    }

    await navegador.close();
}

const enviarMensajeTelegram = async (mensaje) => {
  const token = process.env.TOKEN;
  const chatId = process.env.CHATID;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: mensaje,
    }),
  });
};


validarVentaBoletos();