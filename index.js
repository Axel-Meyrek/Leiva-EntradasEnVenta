/* IMPORTACIONES */
import puppeteer from "puppeteer";
import cron from 'node-cron';

/* FUNCIONES */
const validarVentaBoletos = async () =>  {
    const navegador = await puppeteer.launch({
        headless: true,
    });
    const page = await navegador.newPage();
    await page.goto('https://leivaentradas.com');

    /* proceso */
    const estadoDeBoletos = await page.evaluate(() => {
        const buttons = document.querySelectorAll('.btn');
        return buttons[63].textContent;
    });

    if(estadoDeBoletos == 'Próximamente') console.log('Aun estan proximos');
    else console.log('Los boletos ya estan a la venta');

    /* cierra navegador */
    await navegador.close();
}

cron.schedule('*/5 * * * *', () => {
    console.log('⏱ Ejecutando función...');
    validarVentaBoletos();
});