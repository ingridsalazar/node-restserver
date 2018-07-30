/**
 * Puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno
 */
process.env.NODE_EV = process.env.NODE_EV || 'dev';

/**
 * Base de Datos
 */
let urlDB;
if (process.env.NODE_EV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:Aleja1109@ds111059.mlab.com:11059/cafe';
}

process.env.URLDB = urlDB;