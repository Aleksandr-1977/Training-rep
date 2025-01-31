import { google } from 'googleapis';
import dotenv from 'dotenv';
import { readFile } from 'fs/promises';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

dotenv.config();

async function loadCredentials() {
  // Проверяем правильный путь
  const credentialsPath = path.resolve('credentials.json');
  console.log('Credentials path:', credentialsPath);

  try {
    const credentials = await readFile(credentialsPath, 'utf8');
    return JSON.parse(credentials);
  } catch (error) {
    console.error('Error loading credentials:', error);
    throw error;
  }
}

async function initializeGoogleSheets() {
  const credentials = await loadCredentials();

  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

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
  const sheets = await initializeGoogleSheets();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  try {
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
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

addProduct(2, 'Monitor', 30, 'Toshiba', 5);
