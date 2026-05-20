# E-Commerce API (Node.js + Express + MongoDB)

## 📌 Projektziel

Backend-API für ein E-Commerce-System mit User-Management, Authentifizierung, Produkt- und Kategorienverwaltung sowie späterem Order-System.

---

## ⚙️ Anforderungen

- REST API mit Express.js
- MongoDB als Datenbank
- User Management (CRUD)
- Authentifizierung mit JWT
- Rollen-System (user / admin)
- Produkte & Kategorien
- Validierung mit Zod
- Passwort-Hashing mit bcrypt

---

## ✅ Aktueller Stand (Implementiert)

### 👤 User System
- User erstellen
- User abrufen (alle / einzeln)
- User updaten & löschen
- Passwort wird gehashed gespeichert

### 🔐 Auth System
- Login mit JWT Token
- Token-basierte Auth Middleware
- Protected Routes implementiert

### 🛡️ Role System
- Admin / User Rollen
- Zugriffsbeschränkung für sensible Routes (z.B. Produkte erstellen)

### 📦 Products
- Produkte erstellen (nur Admin)
- Produkte abrufen (öffentlich)
- Kategorie-Zuordnung

### 🗂️ Categories
- Kategorien erstellen & abrufen

### ✔ Validation
- Zod Schema Validierung für Requests
- Middleware-basierte Validierung

---

## 🚧 Geplante Features

- Warenkorb / Orders System
- Checkout Logik (User kauft Produkte)
- Order History pro User
- Refresh Token System (JWT Security Upgrade)
- Bessere Architektur (Service Layer / DTOs)
- Optional: Admin Dashboard APIs

---

## 🧪 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT (Authentication)
- Zod (Validation)
- bcrypt (Password Hashing)

---

## 🚀 Starten

```bash
npm install
npm run dev
