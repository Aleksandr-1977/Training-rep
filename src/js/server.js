import express from 'express';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import { readFile } from 'fs/promises';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = 3000;
app.use(
  cors({
    origin: 'http://localhost:3000', // Разрешаем запросы только с этого домена
    methods: ['GET', 'POST'], // Разрешаем определенные методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешаем заголовки
  })
);

async function loadCredentials() {
  const credentials = await readFile(
    'C:/Projects Go IT/Training-rep/credentials.json',
    'utf8'
  );
  return JSON.parse(credentials);
}

const credentials = await loadCredentials();
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
app.get('/getImage', (req, res) => {
  const fileId = '1A1aV7GhHsubzQn1skF-776Ap_AHposKU';
  const driveLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
  res.json({ imageUrl: driveLink });
});
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

export { loadCredentials, auth };

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
console.log('Spreadsheet ID: ', spreadsheetId);
// Функція отримання даних
// async function getProducts() {
//   const res = await sheets.spreadsheets.values.get({
//     spreadsheetId,
//     range: 'A:E', // Отримати всі дані з таблиці
//   });
//   console.log(res.data.values);
// }

// Функція додавання товару
async function addProduct(id, name, price, category, stock) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'A:E',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [[id, name, price, category, stock]],
    },
  });
  console.log('Product added!');
}
addProduct(1, 'Mouse', 20, 'Sony', 10);
