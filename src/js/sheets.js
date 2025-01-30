import { google } from 'googleapis';
import dotenv from 'dotenv';
import { readFile } from 'fs/promises';

dotenv.config();

async function loadCredentials() {
  const credentials = await readFile(
    'C:/Projects Go IT/Training-rep/credentials.json',
    'utf8'
  );
  return JSON.parse(credentials);
}

const credentials = await loadCredentials(); // Завантаження облікових даних асинхронно

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

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
addProduct(4, 'Keyboard', 50, 'Electronics', 20);

// async function getImgurImage() {
//   const imgurUrl = 'https://i.imgur.com/SjxJdyt.jpg'; // Прямая ссылка на изображение

//   try {
//     const response = await fetch(imgurUrl);
//     if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

//     const blob = await response.blob();
//     document.getElementById('imgurImage').src = URL.createObjectURL(blob);
//   } catch (error) {
//     console.error('Ошибка загрузки', error.message);
//   }
// }

// getImgurImage();
