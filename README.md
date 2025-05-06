# 🔐 Password Strength Checker

A clean and responsive password strength checker built with **HTML**, **Tailwind CSS**, and **JavaScript**. It visually indicates the strength of a password and highlights which character types are used.

## 🔗 Live Demo 
<a href="https://amruthacgowda.github.io/password-strength" target="_blank">Password Strength Checker</a>

## 🛠️ Technologies Used

- **HTML5**
- **Tailwind CSS**
- **JavaScript (ES6)**

## 🚀 Features

- ✅ Real-time password strength feedback
- 🔡 Detects presence of lowercase, uppercase, numbers, and symbols
- 📏 Displays total password length
- 📊 Visual strength indicator bar
- 🟢 Live character-type validation indicators
- 📱 Fully responsive and minimal UI

## 📌 How to Use

1. Enter your password in the input field.
2. The progress bar and text will update to reflect strength:
   - **Weak**: Missing multiple character types or too short
   - **Moderate**: Includes some character types and decent length
   - **Strong**: Includes all character types and good length
3. Each character-type indicator will turn **green** if present, otherwise **red**.

## 📂 Project Structure

```bash
password-strength-checker/
├── index.html         # HTML structure with Tailwind classes
├── index.js           # JavaScript logic for checking password strength
