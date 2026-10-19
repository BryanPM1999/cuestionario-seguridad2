# 🛡️ CyberSec Arena - Simulador de Examen (Parcial 2 de Seguridad Informática)

Simulador interactivo web de alto rendimiento diseñado con principios de **código limpio (Clean Code)** y **cero redundancia (DRY)** para preparar el segundo examen parcial de **Seguridad Informática**.

---

## 🚀 Despliegue y Ejecución

### Opción 1: GitHub Pages (Web en la nube)
La aplicación es 100% estática y compatible con **GitHub Pages**. Al activar GitHub Pages en la rama `main`, estará disponible inmediatamente en cualquier dispositivo:
👉 `https://bryanpm1999.github.io/cuestionario-seguridad2/`

### Opción 2: Ejecución Local en Windows
1. Haz doble clic en **[Abrir-Cuestionario.bat](file:///c:/Users/IdeaPad/Desktop/ESTUDIO/parcial2-seguridad-informatica/Abrir-Cuestionario.bat)**.
2. Se iniciará el servidor local y abrirá automáticamente tu navegador en **[http://localhost:3000](http://localhost:3000)**.

### Opción 3: Vía Terminal (Node.js)
```bash
# Iniciar servidor ligero nativo (sin dependencias externas)
npm start
```

---

## 🧩 Arquitectura y Buenas Prácticas de Programación

* **Principio DRY (Don't Repeat Yourself)**: Única fuente de verdad en `preguntas.json`. Eliminación de cualquier duplicación de reactivos.
* **Separación de Responsabilidades**:
  * `QuizModel`: Gestión de estado, algoritmo de barajado Fisher-Yates, persistencia en memoria y métricas categóricas.
  * `QuizUI`: Renderizado reactivo, mapa de navegación de 30 reactivos y actualización de componentes sin mutaciones colaterales.
  * `AudioService`: Sintetizador de frecuencias con **Web Audio API** nativo (cero librerías o archivos pesados de audio).
  * `QuizApp`: Orquestador desacoplado con control asíncrono y atajos de teclado.
* **Diseño y Experiencia de Usuario (UI/UX)**:
  * Paleta de alto contraste inspirada en centros de operaciones de seguridad (SOC) y estética *cyberpunk / glassmorphism*.
  * Totalmente adaptable a dispositivos móviles, tablets y monitores ultrawide.
  * Hoja de estilos de impresión `@media print` para exportar resultados limpios a PDF.

---

## 🎮 Controles y Atajos de Teclado

| Tecla / Atajo | Acción |
| :--- | :--- |
| **`1`**, **`2`**, **`3`**, **`4`** / **`A`**, **`B`**, **`C`**, **`D`** | Seleccionar opción correspondiente |
| **`Enter`** o **`→`** (Flecha Derecha) | Siguiente reactivo / Solicitar entrega |
| **`←`** (Flecha Izquierda) | Reactivo anterior |
| **`F`** | Marcar / Desmarcar reactivo para revisión |
| **`Esc`** | Cerrar ventana modal de confirmación |

---

## 📚 Temario Oficial Evaluado

1. **Inteligencia Artificial en Seguridad**: *Human-in-the-Loop* (HITL), Deepfake Voice Phishing (Vishing), Correlación y análisis de anomalías en SOC.
2. **Seguridad Inalámbrica (Wi-Fi)**: WPA2/WPA3-Enterprise con 802.1X y RADIUS, Dragonfly SAE, vulnerabilidades en WPA2 (KRACK), obsolescencia de TKIP vs AES-CCMP, Rogue APs y debilidades de WEP/RC4.
3. **Active Directory & Windows Security**: Modelo de Tiers (Tier 0 a Tier 2), LAPS contra movimiento lateral, ataques Kerberoasting, Golden Ticket con la cuenta `krbtgt`, riesgos de SMBv1 (WannaCry), Relaciones de Confianza (Trust) y Autenticación Selectiva.
4. **Contenedores Docker & DevSecOps**: Ataques de escape (*Container Breakout*), limitación de recursos con `cgroups`, reducción de superficie de ataque (imágenes distroless vs `ubuntu:latest`), fuga de secretos en `ENV`, compilaciones multietapa (*Multi-Stage Builds*), secretos en Kubernetes (Base64 vs cifrado en reposo) y riesgos de la directiva `ADD` (*Zip Bombs*).
5. **Arquitectura de Redes y Sistemas Industriales (OT/ICS)**: Jump Servers en DMZ industrial (Purdue), Principio de Mínimo Privilegio (PoLP), Sistemas Operativos en Tiempo Real (RTOS), redes aisladas por espacio de aire (*Air Gap*), Redes Definidas por Software (SDN), Microservicios vs Monolitos, Serverless, modos de falla (*Fail-Closed* vs *Fail-Open*), arreglos RAID 1 y protocolos SCADA/Modbus en PLCs.
6. **Gobernanza, Ciclo de Vida y Gestión de Riesgo**: Propietario de datos vs Custodio de datos, disposición final con borrado seguro (NIST SP 800-88), Shadow IT, clasificación de secretos comerciales, transferencia de riesgos y matriz de responsabilidad compartida en SaaS.

---

## 📦 Estructura del Repositorio

```text
├── .gitignore              # Exclusiones de Git (node_modules, logs, SO)
├── Abrir-Cuestionario.bat  # Acceso directo para Windows
├── app.js                  # Lógica modular de la aplicación (Clean Code)
├── index.html              # Estructura semántica accesible HTML5
├── package.json            # Configuración y script npm start
├── preguntas.json          # Única fuente de verdad de las 60 preguntas
├── README.md               # Documentación y guía de uso
├── server.js               # Servidor HTTP nativo en Node.js
└── styles.css              # Sistema de diseño con variables CSS y tema oscuro
```
