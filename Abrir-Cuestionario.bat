@echo off
title Cuestionario Interactivo - Parcial 2 Seguridad Informatica
cd /d "%~dp0"
echo ========================================================
echo   Iniciando Simulador de Examen - Parcial 2
echo ========================================================
echo.
echo Iniciando servidor local en http://localhost:3000...
start "" node server.js
timeout /t 1 /nobreak >nul
start "" "http://localhost:3000"
echo.
echo Cuestionario abierto con exito.
echo Puedes cerrar esta ventana cuando termines de estudiar.
pause
