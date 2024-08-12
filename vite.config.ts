import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Load environment variables from `.env` file
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_FE_PORT ? Number(process.env.VITE_FE_PORT) : 3000, // Default to 3000 if VITE_FE_PORT is not set
  }
})
