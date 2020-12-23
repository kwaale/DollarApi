//https://kwaale.github.io/DollarApi/.
//https://api-dolar-argentina.herokuapp.com/
//https://api-dolar-argentina.herokuapp.com/api/riesgopais
//Cotizacion dólar bolsa {"fecha":"2020/12/23 13:32:36","compra":"139.63","venta":"139.47"}
//Valor riesgo pais {"fecha":"2020/12/23 13:33:32","valor":"1386.000"}
//Cotizacion dolar del Banco Galicia {"fecha":"2020/12/23 13:34:00","compra":"82.30","venta":"89.00"}
//Cotizacion dolar del Banco Santander {"fecha":"2020/12/23 13:34:30","compra":"81.98","venta":"88.23"}
//Cotizacion dolar del Banco Nación {"fecha":"2020/12/23 13:34:53","compra":"82.25","venta":"88.25"}
//Cotizacion dolar de Mar del Plata Exchange S.A {"fecha":"2020/12/23 13:35:16","compra":"No cotiza","venta":"No cotiza"}
//Reservas del BCRA en dólares {"fecha":"2020/12/23 13:35:42","valor":"38780000000","moneda":"USD"}
//Total de pesos en circulación {"fecha":"2020/12/23 13:36:00","valor":"1766360000000","moneda":"ARS"}
//Evolución mensual anualizada del dólar blue
//{"fecha":"2020/12/23 13:36:22","meses":[{"anio":"2019","mes":"12","valor":"69.71"},{"anio":"2020","mes":"1","valor":"77.00"},{"anio":"2020","mes":"2","valor":"77.79"},{"anio":"2020","mes":"3","valor":"79.45"},{"anio":"2020","mes":"4","valor":"97.10"},{"anio":"2020","mes":"5","valor":"121.35"},{"anio":"2020","mes":"6","valor":"126.03"},{"anio":"2020","mes":"7","valor":"126.19"},{"anio":"2020","mes":"8","valor":"134.19"},{"anio":"2020","mes":"9","valor":"136.80"},{"anio":"2020","mes":"10","valor":"165.16"},{"anio":"2020","mes":"11","valor":"161.60"}]}
const urlBase ='https://api-dolar-argentina.herokuapp.com/';
const urlSegundaria = {
    bolsa:'api/dolarbolsa',
    riesgopais:'api/riesgopais',
    galicia:'api/galicia',
    santander:'api/santander',
    nacion:'api/nacion',
    casasBolsaMarP:'api/casas/mdp/exchange',
    reservas:'api/bcra/reservas',
    pesosCircul:'api/bcra/circulante',
    dolarBlue:'api/evolucion/dolarblue'
}
let data = {
    bolsa:{},
    riesgopais:{},
    galicia:{},
    santander:{},
    nacion:{},
    casasBolsaMarP:{},
    reservas:{},
    pesosCircul:{},
    dolarBlue:{}
}
const apiFetch = async (url1, url2)=>{
    console.log('fetch');
    try{
        const response = await fetch(url1, url2);
        let info = await response.json();
        return info;
    }catch(err){
        console.error('Fetch error', err)
    }
}

const start = async()=>{
    data.bosa = await apiFetch(urlBase, urlSegundaria.bolsa);
    data.riesgopais = await apiFetch(urlBase, urlSegundaria.bolsa);
    data.galicia = await apiFetch(urlBase, urlSegundaria.galicia);
    data.santander = await apiFetch(urlBase, urlSegundaria.santander);
    data.nacion = await apiFetch(urlBase, urlSegundaria.nacion);
    data.casasBolsaMarP = await apiFetch(urlBase, urlSegundaria.casasBolsaMarP);
    data.reservas = await apiFetch(urlBase, urlSegundaria.reservas);
    data.pesosCircul = await apiFetch(urlBase, urlSegundaria.pesosCircul);
    data.dolarBlue = await apiFetch(urlBase, urlSegundaria.dolarBlue);
    console.log("IMPRIMO LA DATA BOLSA", data.bolsa);
}
window.onload = start();
