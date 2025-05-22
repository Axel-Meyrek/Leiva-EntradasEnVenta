/* IMPORTACIONES */
import puppeteer from "puppeteer";

/* FUNCIONES */
const validarVentaBoletos = async () =>  {
    const navegador = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
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