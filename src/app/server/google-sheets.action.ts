"use server";

import {
  SHEET_BANGIA,
  SHEET_BAOGIA,
  SHEET_CHINHSACH,
  SHEET_ID,
  SHEET_THAMQUAN,
  SHEET_THONGTIN,
  YOUR_CLIENT_EMAIL,
  YOUR_PRIVATE_KEY,
  YOUR_PRIVATE_KEY_ID,
  YOUR_PROJECT_ID,
} from "@/lib/constant";
import { google } from "googleapis";

export async function submitGoogleSheet(
  type: string,
  name: string,
  email: string,
  phone: string,
  product: string,
  content: string
) {
  try {
    let RANGE = SHEET_THAMQUAN;
    switch (type) {
      case "thamquan":
        RANGE = SHEET_THAMQUAN;
        break;
      case "bangia":
        RANGE = SHEET_BANGIA;
        break;
      case "chinhsach":
        RANGE = SHEET_CHINHSACH;
        break;
      case "thongtin":
        RANGE = SHEET_THONGTIN;
        break;
      case "baogia":
        RANGE = SHEET_BAOGIA;
        break;
    }

    const glAuth = await google.auth.getClient({
      projectId: YOUR_PROJECT_ID,
      credentials: {
        type: "service_account",
        project_id: YOUR_PROJECT_ID,
        private_key_id: YOUR_PRIVATE_KEY_ID,
        private_key: YOUR_PRIVATE_KEY,
        client_email: YOUR_CLIENT_EMAIL,
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const glSheets = google.sheets({ version: "v4", auth: glAuth });

    const data = await glSheets.spreadsheets.values.append({
      auth: glAuth,
      spreadsheetId: SHEET_ID,
      range: RANGE + "!A:F",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [new Date().toLocaleString(), name, email, phone, product, content],
        ],
      },
    });

    return data;
  } catch (error) {
    console.error("Error in submitGoogleSheet:", error);
    throw error;
  }
}
