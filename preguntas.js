window.PREGUNTAS = [
  {
    "id": 1,
    "categoria": "IA en Ciberseguridad",
    "pregunta": "Un analista de seguridad (Blue Team) utiliza una IA generativa para crear rápidamente un script en PowerShell que aísla equipos infectados. Sin embargo, lo ejecuta inmediatamente en la red sin revisión previa y el script bloquea accidentalmente servidores críticos. Según el flujo de trabajo correcto, ¿qué paso fundamental omitió el analista?",
    "opciones": [
      "Redacción detallada del Prompt (Ingeniería de Prompts).",
      "Ejecución en un entorno de pruebas tipo Sandbox.",
      "Auditoría y Revisión Humana (Human-in-the-Loop) del código generado.",
      "Generación de código en un lenguaje compilado en lugar de interpretado."
    ],
    "respuesta_correcta": "Auditoría y Revisión Humana (Human-in-the-Loop) del código generado.",
    "explicacion": "El principio de 'Human-in-the-Loop' (HITL) exige que cualquier artefacto de código o script generado por IA sea revisado, validado y auditado por un experto humano antes de ser desplegado en producción, para evitar alucinaciones o comportamientos destructivos."
  },
  {
    "id": 2,
    "categoria": "IA en Ciberseguridad",
    "pregunta": "Durante un ejercicio de Red Teaming, los atacantes recopilan audio de entrevistas públicas del CEO de la empresa. Utilizando Inteligencia Artificial, generan un mensaje de voz exacto ordenando a contabilidad una transferencia urgente. ¿Qué técnica ofensiva apoyada por IA se está aplicando en este escenario?",
    "opciones": [
      "Cross-Site Scripting (XSS) dirigido.",
      "Ingeniería Social mediante Clonación de Voz (Deepfake) para Vishing.",
      "Análisis Estático de vulnerabilidades de autenticación.",
      "Ataque de diccionario automatizado mediante Machine Learning."
    ],
    "respuesta_correcta": "Ingeniería Social mediante Clonación de Voz (Deepfake) para Vishing.",
    "explicacion": "La clonación de voz mediante modelos generativos de IA aplicada para engañar a víctimas telefónicamente o mediante mensajes de audio es una forma avanzada de Vishing (Voice Phishing) y Deepfake de audio."
  },
  {
    "id": 3,
    "categoria": "IA en Ciberseguridad",
    "pregunta": "Un Centro de Operaciones de Seguridad (SOC) recibe miles de alertas diarias. Al integrar una IA, esta logra identificar que un inicio de sesión inusual en la madrugada, seguido de la ejecución de un programa desconocido y una conexión externa, forman parte del mismo ataque coordinado. ¿Qué etapa del proceso de análisis de incidentes está optimizando la IA en este caso?",
    "opciones": [
      "Gestión de vulnerabilidades y priorización de parches.",
      "Relación de eventos y detección de patrones complejos.",
      "Aislamiento físico del sistema comprometido.",
      "Revisión manual de los registros de Firewall."
    ],
    "respuesta_correcta": "Relación de eventos y detección de patrones complejos.",
    "explicacion": "La correlación de eventos y detección de anomalías contextuales permite a la IA vincular señales dispersas que individualmente parecerían aisladas o benignas, identificando la cadena de ataque (Kill Chain)."
  },
  {
    "id": 4,
    "categoria": "Arquitectura y Redes",
    "pregunta": "Un ingeniero necesita supervisar los valores de una bomba de agua en una planta industrial, pero la política prohíbe conexiones directas desde la red corporativa (IT) hacia la red industrial (OT). ¿Qué componente de arquitectura se debe implementar para permitir un acceso intermedio y controlado?",
    "opciones": [
      "Servidor de Salto (Jump Server) alojado en una DMZ.",
      "Un switch no administrable con segmentación basada en direcciones MAC.",
      "Un Access Point inalámbrico con WPA2-Personal.",
      "Un controlador de dominio con SMBv1 habilitado."
    ],
    "respuesta_correcta": "Servidor de Salto (Jump Server) alojado en una DMZ.",
    "explicacion": "Un Jump Server (o Bastion Host) en una DMZ (o zona desmilitarizada industrial IDMZ) actúa como punto intermedio con autenticación robusta, evitando el enrutamiento directo entre IT y OT de acuerdo al modelo Purdue."
  },
  {
    "id": 5,
    "categoria": "Control de Acceso y Principios",
    "pregunta": "En un panel de control SCADA (HMI), un operario de mantenimiento requiere visualizar los niveles de presión de los tanques para sus reportes. Sin embargo, su usuario también le permite modificar los parámetros de las válvulas de seguridad, tarea exclusiva de los ingenieros de planta. ¿Qué principio de seguridad fundamental se está violando?",
    "opciones": [
      "Principio de Defensa en Profundidad.",
      "Autenticación Multifactor (MFA).",
      "Principio de Mínimo Privilegio (PoLP).",
      "Sincronización de Tiempo y Kerberos."
    ],
    "respuesta_correcta": "Principio de Mínimo Privilegio (PoLP).",
    "explicacion": "El Principio de Mínimo Privilegio (PoLP - Principle of Least Privilege) dicta que todo usuario, proceso o programa debe contar únicamente con los privilegios estrictamente necesarios para cumplir con sus funciones legítimas."
  },
  {
    "id": 6,
    "categoria": "Sistemas Operativos y OT",
    "pregunta": "El controlador del sistema de frenos ABS de un automóvil requiere que las acciones mecánicas se ejecuten dentro de límites temporales estrictos para evitar accidentes, sin importar la carga del procesador. ¿Qué tipo de tecnología es indispensable para cumplir con este requisito?",
    "opciones": [
      "Un contenedor Docker orquestado con Kubernetes.",
      "Un Sistema Operativo en Tiempo Real (RTOS).",
      "Una plataforma de Gestión Unificada de Puntos Finales (UEM).",
      "Una red definida por software (SDN) centralizada."
    ],
    "respuesta_correcta": "Un Sistema Operativo en Tiempo Real (RTOS).",
    "explicacion": "Un RTOS (Real-Time Operating System) ofrece determinismo estricto: garantiza que las tareas críticas se procesen dentro de plazos temporales máximos garantizados (deadlines)."
  },
  {
    "id": 7,
    "categoria": "Gestión de Vulnerabilidades",
    "pregunta": "Se descubre una vulnerabilidad crítica en un servidor legado de manufactura. El fabricante del equipo ya no existe, por lo que no habrá un parche disponible. El equipo de seguridad decide aislar el servidor en una VLAN sin acceso a Internet e implementa un IPS delante de él. ¿Qué técnica de tratamiento de vulnerabilidades se aplicó?",
    "opciones": [
      "Aplicación de controles de compensación.",
      "Generación de una excepción permanente de riesgo.",
      "Reescaneo automatizado de red.",
      "Segmentación lógica pasiva sin mitigación."
    ],
    "respuesta_correcta": "Aplicación de controles de compensación.",
    "explicacion": "Los controles de compensación son salvaguardas alternas que reducen el riesgo o mitigan la probabilidad de explotación cuando no es técnicamente viable aplicar la solución primaria (parche)."
  },
  {
    "id": 8,
    "categoria": "Gestión de Vulnerabilidades",
    "pregunta": "Un escáner automatizado alerta sobre una inyección SQL crítica en una página de la intranet. Tras la revisión manual, el analista comprueba que la página es puramente estática (solo HTML) y no interactúa con ninguna base de datos, imposibilitando el ataque. ¿Cómo se clasifica el hallazgo del escáner?",
    "opciones": [
      "Falso Negativo.",
      "Falso Positivo.",
      "Verdadero Positivo.",
      "Verdadero Negativo."
    ],
    "respuesta_correcta": "Falso Positivo.",
    "explicacion": "Un Falso Positivo ocurre cuando una herramienta de seguridad reporta una vulnerabilidad o amenaza que en realidad no existe."
  },
  {
    "id": 9,
    "categoria": "Gestión de Vulnerabilidades",
    "pregunta": "El departamento financiero solicita no aplicar los parches de seguridad críticos al servidor del ERP durante la última semana del mes, argumentando que un reinicio afectaría el cierre contable. El equipo de TI aprueba posponer la actualización 5 días tras documentar el caso. ¿Qué figura de gestión representa esta acción?",
    "opciones": [
      "Control de compensación dinámico.",
      "Auditoría de cumplimiento de parches.",
      "Excepción temporal basada en el riesgo.",
      "Resolución y validación de vulnerabilidades."
    ],
    "respuesta_correcta": "Excepción temporal basada en el riesgo.",
    "explicacion": "Una excepción temporal basada en riesgo documenta una desviación planificada y autorizada de la política de parches por un período de tiempo definido, asumiendo el riesgo operacional."
  },
  {
    "id": 10,
    "categoria": "Gestión de Vulnerabilidades",
    "pregunta": "Una empresa confía plenamente en sus escaneos de red automatizados mensuales. Sin embargo, sufre una brecha de seguridad a través de la concatenación de varias vulnerabilidades de baja severidad que el escáner catalogó como inofensivas por separado. ¿Por qué un ejercicio de Pentesting (Pruebas de Penetración) habría aportado valor adicional frente al simple escaneo?",
    "opciones": [
      "Porque el Pentesting utiliza firmas de malware más actualizadas que los escáneres de vulnerabilidades.",
      "Porque el Pentesting valida y comprueba en un entorno real cómo las debilidades pueden ser explotadas y combinadas por un atacante.",
      "Porque el Pentesting parchea automáticamente las vulnerabilidades mientras se realiza la evaluación.",
      "Porque el escáner solo analiza el código estático, mientras que el Pentesting solo analiza el código fuente."
    ],
    "respuesta_correcta": "Porque el Pentesting valida y comprueba en un entorno real cómo las debilidades pueden ser explotadas y combinadas por un atacante.",
    "explicacion": "El Pentesting va más allá de listar fallos: simula el comportamiento de un adversario real concatenando debilidades para evaluar el impacto e impacto real en el negocio."
  },
  {
    "id": 11,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Tras instalar Puntos de Acceso en un nuevo almacén corporativo, los operarios reportan que sus lectores de código de barras pierden la señal Wi-Fi sistemáticamente al pasar detrás de los estantes metálicos (RSSI inferior a -80 dBm). ¿Qué procedimiento preventivo falló o se omitió antes de la instalación?",
    "opciones": [
      "Implementar WPA3-Enterprise con EAP-TLS.",
      "Realizar un Site Survey (encuesta de sitio) para modelar obstáculos y atenuación de RF.",
      "Configurar filtrado de direcciones MAC en el switch principal.",
      "Elevar la potencia de transmisión de los lectores portátiles."
    ],
    "respuesta_correcta": "Realizar un Site Survey (encuesta de sitio) para modelar obstáculos y atenuación de RF.",
    "explicacion": "Un Site Survey (estudio de cobertura de radiofrecuencia) es fundamental para prever zonas de sombra, obstáculos metálicos y atenuación antes de desplegar antenas."
  },
  {
    "id": 12,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Durante una auditoría de una red con WPA2, un atacante logra manipular el proceso de establecimiento de claves del 4-Way Handshake, forzando a un cliente a reinstalar una clave criptográfica previamente utilizada, comprometiendo así la confidencialidad. ¿Qué nombre recibe este ataque específico?",
    "opciones": [
      "Kerberoasting inalámbrico.",
      "Dragonblood.",
      "KRACK (Key Reinstallation Attacks).",
      "Ataque de Gemelo Malvado (Evil Twin)."
    ],
    "respuesta_correcta": "KRACK (Key Reinstallation Attacks).",
    "explicacion": "KRACK (Key Reinstallation Attacks) aprovecha fallas de diseño en el 4-Way Handshake de WPA2 para forzar la reutilización de contadores de paquetes (nonces), permitiendo descifrar y manipular tráfico."
  },
  {
    "id": 13,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Una corporación decide migrar sus redes personales de WPA2-Personal a WPA3-Personal para evitar que atacantes capturen un handshake y descifren la contraseña fuera de línea mediante fuerza bruta (ataques de diccionario offline). ¿Qué protocolo criptográfico introducido en WPA3 ofrece esta protección mejorada?",
    "opciones": [
      "Protocolo de Integridad de Clave Temporal (TKIP).",
      "Autenticación Simultánea de Iguales (SAE).",
      "Galois/Counter Mode Protocol (GCMP) puro.",
      "Protocolo de Acceso a Directorio Ligero (LDAP)."
    ],
    "respuesta_correcta": "Autenticación Simultánea de Iguales (SAE).",
    "explicacion": "SAE (Simultaneous Authentication of Equals, basado en Dragonfly) utiliza intercambio de claves tipo Diffie-Hellman resistente a ataques de diccionario offline y proporciona Forward Secrecy."
  },
  {
    "id": 14,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Una universidad necesita brindar Wi-Fi a sus 5,000 estudiantes, exigiendo que cada uno utilice sus propias credenciales institucionales para conectarse y poder revocar el acceso de estudiantes graduados sin afectar a los demás. ¿Qué arquitectura inalámbrica es la adecuada para este escenario?",
    "opciones": [
      "WPA3-Personal con una PSK robusta rotada semestralmente.",
      "WPA2-Enterprise o WPA3-Enterprise operando con 802.1X, EAP y RADIUS.",
      "Implementación de WEP con filtrado de direcciones MAC estáticas.",
      "Filtrado pasivo basado en VLANs definidas por hardware."
    ],
    "respuesta_correcta": "WPA2-Enterprise o WPA3-Enterprise operando con 802.1X, EAP y RADIUS.",
    "explicacion": "WPA Enterprise integra el estándar IEEE 802.1X y autenticación centralizada mediante servidores RADIUS/EAP, permitiendo credenciales únicas por usuario y revocación instantánea."
  },
  {
    "id": 15,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Para mejorar la señal Wi-Fi en su oficina, un empleado desconecta su computadora de escritorio y conecta un router inalámbrico que trajo de su casa directamente al puerto Ethernet de la red corporativa. ¿Qué amenaza de seguridad inalámbrica acaba de introducir el empleado?",
    "opciones": [
      "Un Ataque de Hombre en el Medio (MitM) de Capa 7.",
      "Un Punto de Acceso No Autorizado (Rogue AP) tipo Shadow IT.",
      "Una suplantación de Identidad (Evil Twin) externa.",
      "Un Bypass de autenticación 802.1X centralizado."
    ],
    "respuesta_correcta": "Un Punto de Acceso No Autorizado (Rogue AP) tipo Shadow IT.",
    "explicacion": "Un Rogue AP es cualquier punto de acceso inalámbrico conectado físicamente a la red cableada de la organización sin autorización de TI, abriendo un puente no seguro a atacantes."
  },
  {
    "id": 16,
    "categoria": "Seguridad en Aplicaciones Web",
    "pregunta": "Un usuario malintencionado intercepta el tráfico de una tienda en línea y modifica el parámetro `precio=500` a `precio=-50` antes de enviar la petición al servidor. El sistema procesa la compra y acredita dinero a la cuenta del atacante. ¿Qué tipo de vulnerabilidad se explotó?",
    "opciones": [
      "Inyección de comandos SQL (SQLi).",
      "Vulnerabilidad de Lógica de Negocio.",
      "Falsificación de Petición en Sitios Cruzados (CSRF).",
      "Cross-Site Scripting (XSS) Reflejado."
    ],
    "respuesta_correcta": "Vulnerabilidad de Lógica de Negocio.",
    "explicacion": "Las fallas en la lógica de negocio ocurren cuando el flujo o las reglas de validación del negocio (como asumir que los precios siempre son positivos) no se validan adecuadamente en el backend."
  },
  {
    "id": 17,
    "categoria": "Seguridad en Aplicaciones Web / OSINT",
    "pregunta": "Un analista de ciberinteligencia (OSINT) descarga varios manuales en formato PDF que una empresa publicó en su sitio web corporativo. Al analizar los archivos, logra identificar los nombres de usuario de los empleados que redactaron los documentos y las rutas de los directorios internos de sus computadoras. ¿Qué técnica utilizó el analista?",
    "opciones": [
      "Explotación de configuraciones débiles (Security Misconfiguration).",
      "Salto de Flujo (Process Bypass) de autenticación.",
      "Análisis y extracción de Metadatos.",
      "Ataque de fuerza bruta contra directorios expuestos."
    ],
    "respuesta_correcta": "Análisis y extracción de Metadatos.",
    "explicacion": "Los metadatos (EXIF, propiedades del documento) en PDFs y archivos ofimáticos frecuentemente contienen autores, versiones de software, impresoras y rutas locales que revelan información interna."
  },
  {
    "id": 18,
    "categoria": "Seguridad en Aplicaciones Web",
    "pregunta": "Un ciberdelincuente logra insertar código JavaScript malicioso en la sección de comentarios de un foro web. Cuando otros usuarios legítimos visitan la página, el script se ejecuta en sus navegadores y envía sus cookies de sesión al servidor del atacante. ¿Qué tipo de vulnerabilidad web permitió este ataque?",
    "opciones": [
      "Inyección SQL (SQLi).",
      "Autenticación Deficiente (Broken Authentication).",
      "Cross-Site Scripting (XSS).",
      "Falla de control de acceso basada en roles (RBAC)."
    ],
    "respuesta_correcta": "Cross-Site Scripting (XSS).",
    "explicacion": "Cross-Site Scripting (XSS) almacenado o persistente ocurre cuando datos no saneados introducidos por un atacante se guardan y luego se renderizan como código ejecutable en el navegador de otros usuarios."
  },
  {
    "id": 19,
    "categoria": "Seguridad en Aplicaciones Web",
    "pregunta": "Un desarrollador quiere asegurarse de que un atacante no pueda extraer la base de datos de la empresa, incluso si el atacante ingresa comillas y sentencias SQL manipuladas en el campo de 'Nombre de usuario' del formulario de inicio de sesión. ¿Cuál es la principal técnica de programación defensiva que debe implementar?",
    "opciones": [
      "Cifrado AES-256 de las contraseñas en tránsito.",
      "Hashing de contraseñas utilizando el algoritmo bcrypt.",
      "Uso exclusivo de Consultas Preparadas (Parameterized Queries).",
      "Implementación de Autenticación Multifactor (MFA)."
    ],
    "respuesta_correcta": "Uso exclusivo de Consultas Preparadas (Parameterized Queries).",
    "explicacion": "Las consultas preparadas (parameterized queries) separan la lógica de la consulta SQL de los datos proporcionados por el usuario, imposibilitando que las entradas se interpreten como comandos SQL."
  },
  {
    "id": 20,
    "categoria": "Gestión de Activos y Ciclo de Vida",
    "pregunta": "Una computadora portátil asignada a un gerente que fue despedido hace dos años es donada a una organización benéfica. Antes de la entrega, TI solo formateó superficialmente el disco duro, permitiendo que la organización benéfica recuperara planos confidenciales. ¿Qué procedimiento de gestión de ciclo de vida de activos falló estrepitosamente?",
    "opciones": [
      "Asignación de mínimo privilegio (PoLP).",
      "Disposición final mediante borrado seguro de la información.",
      "Reescaneo continuo de dispositivos no autorizados.",
      "Cálculo del Costo Total de Propiedad (TCO)."
    ],
    "respuesta_correcta": "Disposición final mediante borrado seguro de la información.",
    "explicacion": "El borrado seguro (sanitization/purging) mediante sobreescritura criptográfica o destrucción física (según NIST SP 800-88) es imprescindible en la fase de disposición final para evitar recuperación residual de datos."
  },
  {
    "id": 21,
    "categoria": "Gobernanza y Roles de Datos",
    "pregunta": "En la gestión de activos y datos, el Gerente de Finanzas es quien decide que la base de datos de nóminas es 'Estrictamente Confidencial' y determina quién puede acceder a ella. Por su parte, el Administrador de Base de Datos (DBA) se encarga de aplicar los backups y cifrar los discos. ¿Qué rol específico cumple el Gerente de Finanzas en este escenario?",
    "opciones": [
      "Custodio de los datos.",
      "Propietario de los datos.",
      "Auditor de seguridad interna.",
      "Responsable del inventario de activos."
    ],
    "respuesta_correcta": "Propietario de los datos.",
    "explicacion": "El Propietario de los Datos (Data Owner) es el líder de negocio responsable de clasificar la información y definir los permisos de acceso; el Custodio de los Datos (Data Custodian/DBA) implementa los controles técnicos."
  },
  {
    "id": 22,
    "categoria": "Gestión de Activos",
    "pregunta": "Un sistema automatizado escanea activamente la red corporativa y cruza los equipos detectados contra la base de datos oficial del inventario, descubriendo tres servidores Linux que nadie en el departamento de TI reconoce haber instalado. ¿Cómo se denominan a estos recursos identificados?",
    "opciones": [
      "Dispositivos no autorizados (Shadow IT).",
      "Controladores de Dominio (DC) redundantes.",
      "Jump Servers expuestos.",
      "Sistemas aislados tipo Air Gap."
    ],
    "respuesta_correcta": "Dispositivos no autorizados (Shadow IT).",
    "explicacion": "Shadow IT comprende todo hardware, software o servicio utilizado dentro de la organización sin aprobación, visibilidad ni gestión explícita del departamento de TI/Seguridad."
  },
  {
    "id": 23,
    "categoria": "Active Directory y Windows Security",
    "pregunta": "Un Administrador de Dominio (Domain Admin) utiliza sus credenciales de alto privilegio para iniciar sesión en la computadora de uso diario de un recepcionista y revisar su configuración de impresora. ¿Por qué esta acción es un riesgo masivo según el Modelo de Tiers de Active Directory?",
    "opciones": [
      "Porque el servicio de impresión (Spooler) no es compatible con el protocolo Kerberos.",
      "Porque expone credenciales de la capa más alta (Tier 0) en un equipo de baja confianza (Tier 2) propenso a infecciones.",
      "Porque los recepcionistas no tienen cuentas asignadas en unidades organizativas (OU) seguras.",
      "Porque bloquea automáticamente el uso de contraseñas locales (LAPS) en la estación de trabajo."
    ],
    "respuesta_correcta": "Porque expone credenciales de la capa más alta (Tier 0) en un equipo de baja confianza (Tier 2) propenso a infecciones.",
    "explicacion": "El modelo de capas (Tier Model) prohíbe que credenciales de Tier 0 (controladores de dominio, Domain Admins) inicien sesión en endpoints de Tier 2, donde programas como Mimikatz pueden volcar las credenciales de la memoria LSASS."
  },
  {
    "id": 24,
    "categoria": "Active Directory y Windows Security",
    "pregunta": "Durante una prueba de penetración en una red Windows, un atacante logra obtener acceso a una estación de trabajo, extrae la contraseña de la cuenta del administrador local genérico, y descubre que esta misma contraseña le permite acceder a todas las computadoras del edificio. ¿Qué solución de Microsoft previene este movimiento lateral automatizando contraseñas rotativas para administradores locales?",
    "opciones": [
      "Group Policy Preferences (GPP) en SYSVOL.",
      "Group Managed Service Accounts (gMSA).",
      "Selective Authentication en relaciones de confianza.",
      "Windows LAPS (Local Administrator Password Solution)."
    ],
    "respuesta_correcta": "Windows LAPS (Local Administrator Password Solution).",
    "explicacion": "LAPS (Local Administrator Password Solution) genera automáticamente contraseñas únicas, aleatorias y rotativas para la cuenta de administrador local de cada endpoint, almacenándolas de forma segura en Active Directory / Entra ID."
  },
  {
    "id": 25,
    "categoria": "Active Directory y Windows Security",
    "pregunta": "Un atacante con permisos de usuario normal solicita todos los tickets de servicio (TGS) posibles al controlador de dominio para servicios como SQL Server. Luego, los lleva a su máquina local e intenta descifrar las contraseñas de las cuentas de servicio asociadas usando ataques de fuerza bruta. ¿Qué nombre recibe esta técnica de ataque en Active Directory?",
    "opciones": [
      "Ataque de Golden Ticket.",
      "Kerberoasting.",
      "Ataque de Silver Ticket.",
      "AS-REP Roasting."
    ],
    "respuesta_correcta": "Kerberoasting.",
    "explicacion": "Kerberoasting permite a cualquier usuario autenticado solicitar tickets TGS cifrados con el hash de la cuenta de servicio (SPN), para luego descifrar la contraseña fuera de línea mediante fuerza bruta."
  },
  {
    "id": 26,
    "categoria": "Active Directory y Windows Security",
    "pregunta": "Tras comprometer profundamente un bosque de Active Directory, un atacante logra robar el hash de la cuenta 'krbtgt'. Usando este hash, forja un ticket de autenticación falso que le otorga acceso persistente e indetectable a cualquier recurso del dominio como administrador. ¿Qué ataque ha ejecutado?",
    "opciones": [
      "Golden Ticket.",
      "Falsificación de SID History.",
      "Escalamiento de Privilegios por AD CS.",
      "Inyección LDAP sobre canal no cifrado."
    ],
    "respuesta_correcta": "Golden Ticket.",
    "explicacion": "Un Golden Ticket es un Ticket Granting Ticket (TGT) forjado con el hash NTLM de la cuenta de servicio Kerberos de Active Directory (krbtgt), otorgando persistencia total y privilegios ilimitados en el dominio."
  },
  {
    "id": 27,
    "categoria": "Protocolos y Seguridad de Red",
    "pregunta": "Un auditor de seguridad identifica que un equipo legado aún utiliza tráfico de archivos basado en el protocolo SMBv1, argumentando compatibilidad. ¿Por qué el auditor clasifica esto como un riesgo crítico que debe erradicarse?",
    "opciones": [
      "Porque SMBv1 solo soporta el uso de cifrado DES, el cual ha sido deprecado.",
      "Porque es un protocolo obsoleto que permitió la propagación de ataques devastadores de ransomware como WannaCry.",
      "Porque interfiere con el tráfico del protocolo LLMNR en subredes locales.",
      "Porque SMBv1 no puede integrarse con objetos de políticas de grupo (GPO) de Active Directory."
    ],
    "respuesta_correcta": "Porque es un protocolo obsoleto que permitió la propagación de ataques devastadores de ransomware como WannaCry.",
    "explicacion": "SMBv1 carece de mecanismos modernos de autenticación y cifrado, y sus vulnerabilidades críticas (como EternalBlue) fueron el vector de propagación de malware masivo como WannaCry y NotPetya."
  },
  {
    "id": 28,
    "categoria": "Seguridad Móvil y MDM",
    "pregunta": "Una corporación permite a sus ejecutivos utilizar sus propios teléfonos inteligentes personales para acceder al correo y archivos corporativos. Sin embargo, para evitar fugas de datos, TI instala un perfil que crea un espacio aislado cifrado en el móvil, sobre el cual la empresa tiene control total sin ver las fotos del usuario. ¿Qué modelo de despliegue móvil se implementó?",
    "opciones": [
      "CYOD (Choose Your Own Device).",
      "COPE (Corporate-Owned, Personally-Enabled).",
      "BYOD (Bring Your Own Device) con Contenerización.",
      "UEM (Unified Endpoint Management) de propiedad institucional estricta."
    ],
    "respuesta_correcta": "BYOD (Bring Your Own Device) con Contenerización.",
    "explicacion": "BYOD (Bring Your Own Device) con contenedorización o perfil de trabajo separa estrictamente los datos personales de los corporativos, protegiendo la privacidad del usuario y la confidencialidad empresarial."
  },
  {
    "id": 29,
    "categoria": "Seguridad Móvil y MDM",
    "pregunta": "Un empleado renuncia y debe devolver su iPad asignado. El dispositivo fue adquirido por la empresa bajo el modelo COPE (Propiedad Corporativa, Habilitado Personalmente). ¿Qué acción ejecuta el administrador en la plataforma MDM para reacondicionar el equipo para un nuevo empleado?",
    "opciones": [
      "Borrado Selectivo (Enterprise Wipe) de la partición de trabajo.",
      "Deshabilitación remota del chip de telefonía celular.",
      "Borrado Completo (Full Wipe) para restablecer a valores de fábrica.",
      "Implementación de un túnel VPN de emergencia."
    ],
    "respuesta_correcta": "Borrado Completo (Full Wipe) para restablecer a valores de fábrica.",
    "explicacion": "Al tratarse de un dispositivo propiedad de la empresa (COPE) que será reasignado a otro empleado, un Borrado Completo (Full Device Wipe) garantiza eliminar todos los datos y configuraciones personales previas."
  },
  {
    "id": 30,
    "categoria": "Seguridad Móvil y MDM",
    "pregunta": "Un usuario de la empresa intenta evitar las restricciones instalando un software para hacer 'Jailbreak/Root' a su dispositivo móvil gestionado. Inmediatamente, la plataforma MDM detecta que la integridad del kernel ha sido vulnerada y revoca automáticamente sus credenciales corporativas. ¿Qué mecanismo del MDM actuó en este caso?",
    "opciones": [
      "VPN por Aplicación (Per-App VPN).",
      "Reglas de Políticas de Seguridad y Cumplimiento (Compliance).",
      "Autenticación EAP-TLS de red inalámbrica.",
      "Contenedor cifrado de hardware basado en Knox."
    ],
    "respuesta_correcta": "Reglas de Políticas de Seguridad y Cumplimiento (Compliance).",
    "explicacion": "Las políticas de cumplimiento (Compliance Policies) en MDM supervisan continuamente la integridad del SO (ausencia de jailbreak/root, parches mínimos, cifrado) y ejecutan remediaciones automáticas si el dispositivo es no conforme."
  },
  {
    "id": 31,
    "categoria": "Seguridad Móvil y Redes",
    "pregunta": "En lugar de enviar todo el tráfico de red de un teléfono inteligente (incluyendo Netflix y redes sociales personales) a través de los servidores de la empresa, el administrador de MDM configura una política para que *únicamente* los datos de la aplicación de CRM interno transiten por el túnel cifrado. ¿Cómo se llama esta tecnología de conexión?",
    "opciones": [
      "VPN Persistente (Always-On VPN).",
      "Autenticación WPA3-Enterprise.",
      "Red Privada Virtual Móvil Selectiva o por Aplicación (Per-App VPN).",
      "Acceso Directo por Protocolo Ligero (LDAP)."
    ],
    "respuesta_correcta": "Red Privada Virtual Móvil Selectiva o por Aplicación (Per-App VPN).",
    "explicacion": "Per-App VPN (VPN por Aplicación) permite que solo el tráfico generado por apps corporativas designadas viaje por el túnel VPN seguro, optimizando el ancho de banda y resguardando la privacidad de las aplicaciones personales."
  },
  {
    "id": 32,
    "categoria": "Zero Trust (ZTNA)",
    "pregunta": "Un auditor de seguridad evalúa una estrategia de Acceso de Red de Cero Confianza (ZTNA) para los dispositivos móviles de los empleados. A diferencia de una VPN tradicional que solo pide usuario y contraseña, ¿qué validación extra realiza ZTNA antes de otorgar el acceso corporativo?",
    "opciones": [
      "Evalúa en tiempo real la postura de seguridad, registro MDM y estado de actualización del dispositivo solicitante.",
      "Aplica un escaneo pasivo de los canales de radiofrecuencia (Site Survey) para evitar puntos de acceso falsos.",
      "Obliga al usuario a conectarse mediante un cable de red en lugar de Wi-Fi.",
      "Ejecuta una compilación multietapa (Multi-Stage Build) dentro del dispositivo para aislar las aplicaciones."
    ],
    "respuesta_correcta": "Evalúa en tiempo real la postura de seguridad, registro MDM y estado de actualización del dispositivo solicitante.",
    "explicacion": "ZTNA basa la decisión de acceso en el contexto continuo: evalúa la identidad del usuario, salud del endpoint (postura de seguridad), geolocalización y nivel de riesgo antes y durante la conexión."
  },
  {
    "id": 33,
    "categoria": "Seguridad en Contenedores",
    "pregunta": "Al auditar un archivo Dockerfile, un ingeniero de DevSecOps rechaza el uso de la directiva `FROM ubuntu:latest` para una aplicación web sencilla escrita en Node.js. ¿Cuál es el principal riesgo de seguridad de utilizar imágenes base tan amplias?",
    "opciones": [
      "La directiva 'latest' impide que el orquestador asigne correctamente los Control Groups (cgroups).",
      "Incluyen cientos de utilidades, comandos y librerías que aumentan innecesariamente la superficie de ataque si el contenedor es vulnerado.",
      "El gestor de paquetes de Ubuntu entra en conflicto con las firmas de Active Directory.",
      "Impide el montaje de volúmenes persistentes en tiempo de ejecución de Docker."
    ],
    "respuesta_correcta": "Incluyen cientos de utilidades, comandos y librerías que aumentan innecesariamente la superficie de ataque si el contenedor es vulnerado.",
    "explicacion": "Las imágenes de propósito general incluyen utilidades innecesarias (curl, wget, compiladores, shells) que amplían la superficie de ataque y pueden ser usadas por atacantes para pivotar. Se prefieren imágenes mínimas o 'distroless'."
  },
  {
    "id": 34,
    "categoria": "Seguridad en Contenedores",
    "pregunta": "En un entorno de contenedores, una aplicación sufre una fuga de memoria (memory leak) y consume el 100% de la RAM disponible en el servidor físico, provocando que los demás contenedores alojados en ese mismo host se caigan. ¿Qué mecanismo de aislamiento nativo de Linux no se configuró correctamente?",
    "opciones": [
      "Namespaces de Red (NET Namespace).",
      "Control Groups (cgroups).",
      "Módulos de Seguridad de Linux (AppArmor/SELinux).",
      "Gestor de secretos distribuido (Vaulting)."
    ],
    "respuesta_correcta": "Control Groups (cgroups).",
    "explicacion": "Los cgroups (Control Groups) en el kernel de Linux limitan, miden y aíslan el uso de recursos de hardware (CPU, memoria, I/O) entre grupos de procesos/contenedores para evitar ataques de vecino ruidoso y agotamiento de recursos."
  },
  {
    "id": 35,
    "categoria": "Seguridad en Contenedores",
    "pregunta": "Un desarrollador junior codifica la conexión a una base de datos pasando la contraseña explícitamente usando la instrucción `ENV DB_PASSWORD=\"12345\"` dentro del archivo Dockerfile. ¿Cuál es la consecuencia directa de esta mala práctica en materia de seguridad?",
    "opciones": [
      "La contraseña queda grabada permanentemente en el historial y metadatos de las capas de la imagen, siendo extraíble por cualquiera que tenga la imagen.",
      "La imagen fallará al compilarse, ya que Docker prohíbe sintácticamente el uso de la directiva ENV para variables que contienen números.",
      "La contraseña se cifrará automáticamente, pero causará latencia en las consultas a la base de datos.",
      "El orquestador Kubernetes borrará automáticamente la contraseña al desplegar el pod para protegerla."
    ],
    "respuesta_correcta": "La contraseña queda grabada permanentemente en el historial y metadatos de las capas de la imagen, siendo extraíble por cualquiera que tenga la imagen.",
    "explicacion": "Cualquier variable declarada con ENV o instrucción en el Dockerfile persiste en las capas intermedias y metadatos del contenedor (visibles con `docker history` o `docker inspect`). Se deben usar secretos montados en tiempo de ejecución."
  },
  {
    "id": 36,
    "categoria": "Seguridad en Contenedores",
    "pregunta": "Un atacante explota una vulnerabilidad en una aplicación alojada en un contenedor Docker con privilegios excesivos. Desde allí, logra montar el directorio raíz del servidor anfitrión y ejecutar comandos directamente en el sistema operativo principal. ¿Qué nombre recibe este incidente crítico?",
    "opciones": [
      "Cross-Site Scripting Reflejado.",
      "Denegación de Servicio por vecino ruidoso.",
      "Salto de Flujo (Process Bypass).",
      "Fuga de Contenedores (Container Breakout)."
    ],
    "respuesta_correcta": "Fuga de Contenedores (Container Breakout).",
    "explicacion": "Un Container Breakout (escape de contenedor) ocurre cuando un proceso malicioso dentro del contenedor traspasa las barreras de aislamiento (namespaces, cgroups, capacidades) y accede al host anfitrión."
  },
  {
    "id": 37,
    "categoria": "Seguridad en Contenedores",
    "pregunta": "Para optimizar y asegurar una imagen de Docker, un equipo de desarrollo implementa compilaciones multietapa (Multi-Stage Builds). ¿De qué manera esta práctica mejora directamente la seguridad de la imagen final del contenedor?",
    "opciones": [
      "Cifra automáticamente todo el código fuente mediante algoritmos de curva elíptica durante la construcción.",
      "Aísla el entorno de desarrollo del de producción, permitiendo copiar únicamente el binario limpio sin los SDKs ni herramientas pesadas de compilación.",
      "Activa por defecto las políticas estrictas de control de acceso obligatorio (MAC) de SELinux.",
      "Evita que el orquestador almacene las llaves de autenticación en texto plano en su base de datos (etcd)."
    ],
    "respuesta_correcta": "Aísla el entorno de desarrollo del de producción, permitiendo copiar únicamente el binario limpio sin los SDKs ni herramientas pesadas de compilación.",
    "explicacion": "Las compilaciones multietapa permiten compilar la aplicación en una etapa temporal con herramientas pesadas (compiladores, gestores de paquetes) y copiar únicamente el artefacto ejecutable final en una imagen limpia y mínima."
  },
  {
    "id": 38,
    "categoria": "Seguridad en Contenedores y Kubernetes",
    "pregunta": "En un clúster de Kubernetes, los administradores se dan cuenta de que las contraseñas de las bases de datos (almacenadas como objetos tipo Secret) pueden ser leídas por cualquier desarrollador que acceda a la base de datos principal de Kubernetes (etcd). ¿Cuál es la causa subyacente de este fallo de seguridad estructural por defecto?",
    "opciones": [
      "Kubernetes almacena los secretos ofuscados únicamente en Base64, en lugar de utilizar un cifrado en reposo real de forma predeterminada.",
      "La red de pods no implementa el estándar IEEE 802.1X de manera obligatoria.",
      "Se ha aplicado el principio de control de acceso basado en roles (RBAC) de forma excesivamente restrictiva.",
      "Los contenedores en el clúster fueron desplegados con la instrucción USER root en sus imágenes."
    ],
    "respuesta_correcta": "Kubernetes almacena los secretos ofuscados únicamente en Base64, en lugar de utilizar un cifrado en reposo real de forma predeterminada.",
    "explicacion": "Por defecto, los Secrets de Kubernetes solo están codificados en Base64 (que NO es cifrado). Se requiere habilitar 'Encryption at Rest' en etcd o integrar KMS externos (HashiCorp Vault, AWS KMS, etc.)."
  },
  {
    "id": 39,
    "categoria": "DevSecOps y Arquitectura en la Nube",
    "pregunta": "Un administrador de sistemas utiliza una herramienta como Terraform o Ansible para definir un archivo de configuración que levanta servidores web, redes y reglas de firewall de manera automatizada y repetible, sin tener que configurar las consolas manualmente. ¿Qué técnica está aplicando?",
    "opciones": [
      "Detección y Prevención de Intrusos (IPS/IDS).",
      "Virtualización anidada en la nube híbrida.",
      "Infraestructura como código (IaC).",
      "Segmentación física basada en VLANs."
    ],
    "respuesta_correcta": "Infraestructura como código (IaC).",
    "explicacion": "Infraestructura como Código (IaC) permite aprovisionar y gestionar infraestructura informática mediante archivos de configuración legibles por máquina, garantizando trazabilidad y repetibilidad."
  },
  {
    "id": 40,
    "categoria": "Arquitectura en la Nube",
    "pregunta": "Un desarrollador de backend escribe una función en Python y la despliega directamente en AWS Lambda. No tiene que provisionar servidores, aplicar parches al sistema operativo ni configurar el escalado; el proveedor gestiona todo y solo cobra por los milisegundos de ejecución. ¿Qué modelo de arquitectura es este?",
    "opciones": [
      "Infraestructura on-premise estática.",
      "Monolítica.",
      "Computación Sin Servidor (Serverless).",
      "Computación de Borde en Sistemas SCADA."
    ],
    "respuesta_correcta": "Computación Sin Servidor (Serverless).",
    "explicacion": "La computación Serverless (como FaaS - Function as a Service) abstrae completamente la gestión de servidores físicos o virtuales, escalando automáticamente y cobrando solo por el tiempo de ejecución."
  },
  {
    "id": 41,
    "categoria": "Arquitectura de Software",
    "pregunta": "El sitio de comercio electrónico de una empresa es rediseñado de tal manera que el servicio de procesamiento de pagos, el servicio de catálogo de productos y el servicio de gestión de usuarios son componentes pequeños que se comunican entre sí por APIs. Si el catálogo falla, los usuarios aún pueden pagar sus compras previas. ¿Qué tipo de arquitectura de software se utilizó?",
    "opciones": [
      "Arquitectura monolítica centralizada.",
      "Arquitectura de microservicios.",
      "Arquitectura basada en hardware físico dedicado.",
      "Arquitectura de clúster SCADA heredado."
    ],
    "respuesta_correcta": "Arquitectura de microservicios.",
    "explicacion": "En una arquitectura de microservicios, la aplicación se divide en servicios pequeños, modulares e independientes que se comunican vía APIs, aislando fallos y facilitando la resiliencia."
  },
  {
    "id": 42,
    "categoria": "Modelos de Despliegue",
    "pregunta": "Para garantizar la seguridad en un banco, una regla determina que las transacciones y los datos de clientes operen sobre servidores cuyo hardware y software se alojen, administren y permanezcan enteramente dentro del centro de datos físico de las instalaciones del banco. ¿Qué modelo de despliegue define esta infraestructura?",
    "opciones": [
      "Nube pública (SaaS).",
      "En sitio (On-premise / On-site).",
      "Plataforma como Servicio (PaaS).",
      "Redes definidas por software global (SD-WAN)."
    ],
    "respuesta_correcta": "En sitio (On-premise / On-site).",
    "explicacion": "El despliegue local o 'On-premise' implica que la infraestructura física y lógica reside directamente dentro de las instalaciones y control exclusivo de la propia organización."
  },
  {
    "id": 43,
    "categoria": "Principios de Seguridad y Resiliencia",
    "pregunta": "Tras una falla masiva de electricidad, un firewall diseñado para proteger datos altamente confidenciales se apaga abruptamente y, por defecto, bloquea absolutamente todo el tráfico entrante y saliente, deteniendo las operaciones del negocio para asegurar que nada pase. ¿En qué modo de falla operó este dispositivo de seguridad?",
    "opciones": [
      "Fail-open (Abierto al fallo).",
      "Fail-closed (Cerrado al fallo).",
      "Bypass pasivo.",
      "Alta disponibilidad redundante."
    ],
    "respuesta_correcta": "Fail-closed (Cerrado al fallo).",
    "explicacion": "'Fail-closed' (o Fail-Secure) prioriza la seguridad y confidencialidad bloqueando todo el acceso ante un fallo; por el contrario, 'Fail-open' prioriza la disponibilidad y continuidad permitiendo el paso del tráfico."
  },
  {
    "id": 44,
    "categoria": "Arquitectura y Redes",
    "pregunta": "Un departamento de cumplimiento audita a una organización y solicita que un sistema específico que alberga claves de cifrado maestras no tenga absolutamente ninguna conexión lógica o por cable de red hacia el resto de la empresa o hacia internet. ¿A qué medida estricta de aislamiento de red hace referencia esta solicitud?",
    "opciones": [
      "Uso de un salto mediante servidor Proxy inverso.",
      "Separación mediante VLANs etiquetadas.",
      "Redes Aisladas Físicamente por Espacio de Aire (Air Gap).",
      "Segmentación dinámica definida por software."
    ],
    "respuesta_correcta": "Redes Aisladas Físicamente por Espacio de Aire (Air Gap).",
    "explicacion": "Un Air Gap (espacio de aire) es una medida de seguridad física que garantiza la desconexión total de un equipo o red respecto a cualquier otra red externa o interna."
  },
  {
    "id": 45,
    "categoria": "Clasificación de Información",
    "pregunta": "Un fabricante de galletas guarda en un archivo digital seguro las proporciones exactas y los ingredientes exclusivos que le otorgan el sabor característico a su producto principal. La divulgación de esta información destruiría su ventaja competitiva. ¿Bajo qué clasificación legal/empresarial encaja mejor este tipo de información?",
    "opciones": [
      "Propiedad intelectual pública.",
      "Información financiera regulada.",
      "Dato personal sensible (PII).",
      "Secreto comercial."
    ],
    "respuesta_correcta": "Secreto comercial.",
    "explicacion": "Un Secreto Comercial (Trade Secret) es cualquier fórmula, práctica, proceso, diseño o información confidencial que proporciona a una empresa una ventaja competitiva sobre quienes no la poseen."
  },
  {
    "id": 46,
    "categoria": "Ciclo de Vida de los Datos",
    "pregunta": "Un empleado viaja por trabajo y se conecta a una red Wi-Fi pública de un aeropuerto. Para evitar que alguien intercepte los correos corporativos que su teléfono recibe de los servidores de Microsoft Exchange, ¿en qué estado del ciclo de vida de los datos deben aplicarse controles como cifrado TLS o VPN?",
    "opciones": [
      "Datos en reposo (Data at rest).",
      "Datos en uso (Data in use).",
      "Datos en tránsito (Data in motion).",
      "Datos ofuscados (Tokenized data)."
    ],
    "respuesta_correcta": "Datos en tránsito (Data in motion).",
    "explicacion": "Los datos en tránsito (Data in motion / in transit) son aquellos que viajan a través de una red de comunicación y deben protegerse mediante protocolos de cifrado como TLS o túneles VPN."
  },
  {
    "id": 47,
    "categoria": "Gestión del Riesgo",
    "pregunta": "Una clínica decide no implementar medidas correctivas costosas para proteger sus servidores contra la pérdida total de datos en caso de incendios; en su lugar, compra una póliza financiera a una aseguradora que les pagará los daños en caso de que ocurra un siniestro. ¿Qué estrategia de mitigación del riesgo se aplicó?",
    "opciones": [
      "Reducción del riesgo mediante controles de infraestructura.",
      "Aceptación tácita del riesgo sin acción.",
      "Evitación del riesgo desconectando la red.",
      "Transferencia de riesgos."
    ],
    "respuesta_correcta": "Transferencia de riesgos.",
    "explicacion": "La transferencia del riesgo traslada el impacto financiero potencial del riesgo a una tercera parte (por ejemplo, mediante la contratación de una póliza de seguro cibernético o de desastres)."
  },
  {
    "id": 48,
    "categoria": "Firewalls y Seguridad de Red",
    "pregunta": "Una empresa utiliza un firewall tradicional que solo bloquea conexiones basándose en direcciones IP y en el uso de los puertos TCP 80 o TCP 443. Sin embargo, para cumplir con nuevas normativas, deciden comprar un equipo capaz de inspeccionar si el usuario dentro del puerto 443 está usando Facebook o un servicio de la empresa, bloqueando solo el primero. ¿A qué nivel actúa este nuevo firewall especializado?",
    "opciones": [
      "Capa 2 (Enlace de datos).",
      "Capa 3 y 4 (Red y Transporte clásico).",
      "Capa 7 (Inspección de aplicaciones de próxima generación / WAF).",
      "Solo en modo monitor/tap (Pasivo)."
    ],
    "respuesta_correcta": "Capa 7 (Inspección de aplicaciones de próxima generación / WAF).",
    "explicacion": "Los firewalls de próxima generación (NGFW) y los WAF operan en la Capa 7 (Aplicación del modelo OSI), permitiendo descifrar SSL/TLS e inspeccionar el contenido de la aplicación independientemente del puerto utilizado."
  },
  {
    "id": 49,
    "categoria": "Almacenamiento y Alta Disponibilidad",
    "pregunta": "Se requiere que el servidor de base de datos de transacciones de un banco posea un mecanismo en sus discos duros para asegurar que, si un disco físico se quema, la información se encuentre duplicada en un segundo disco espejo (mirror) y el servicio no se detenga. ¿Qué mecanismo proporciona directamente esta funcionalidad de alta disponibilidad para el almacenamiento local?",
    "opciones": [
      "Implementación de Arreglo RAID 1.",
      "Red de Área Amplia Definida por Software (SD-WAN).",
      "Virtualización mediante Contenedores (Docker).",
      "Autenticación simultánea de iguales (SAE)."
    ],
    "respuesta_correcta": "Implementación de Arreglo RAID 1.",
    "explicacion": "RAID 1 (espejo o mirroring) replica de forma exacta los mismos bloques de datos en dos o más discos físicos, garantizando tolerancia a fallos frente a la pérdida de una de las unidades."
  },
  {
    "id": 50,
    "categoria": "Sistemas Industriales (OT / ICS)",
    "pregunta": "En las instalaciones de una embotelladora, los sensores de llenado de líquido se comunican directamente con un Controlador Lógico Programable (PLC) a nivel de la línea de ensamblaje, el cual interactúa mediante el protocolo Modbus. ¿A qué categoría general pertenece esta tecnología?",
    "opciones": [
      "Sistemas y Tecnología Operacional Industrial (OT / ICS).",
      "Entornos de Oficina de TI Tradicional.",
      "Infraestructura orientada a Microservicios y API Gateway.",
      "Arquitectura de Confianza Cero orientada a Móviles (ZTNA)."
    ],
    "respuesta_correcta": "Sistemas y Tecnología Operacional Industrial (OT / ICS).",
    "explicacion": "La Tecnología Operacional (OT) y los Sistemas de Control Industrial (ICS) abarcan el hardware y software que monitorea y controla dispositivos físicos, PLCs, RTUs y protocolos de planta como Modbus."
  },
  {
    "id": 51,
    "categoria": "Seguridad en la Nube",
    "pregunta": "Una PyME compra software como servicio (SaaS) directamente desde la nube de un proveedor (ej. Google Workspace). Días después, ocurre una falla de seguridad porque el centro de datos físico de Google no tenía control de guardias de seguridad física. De acuerdo con la matriz de responsabilidad compartida del modelo de nube, ¿quién era el responsable principal de la seguridad física en un entorno SaaS?",
    "opciones": [
      "La PyME (el cliente o consumidor del servicio).",
      "El proveedor de telecomunicaciones local (ISP).",
      "El proveedor de servicios en la nube (el tercero que aloja el SaaS).",
      "Ambos comparten la responsabilidad de las cerraduras del edificio."
    ],
    "respuesta_correcta": "El proveedor de servicios en la nube (el tercero que aloja el SaaS).",
    "explicacion": "En el modelo de Responsabilidad Compartida de la nube (especialmente en SaaS), la seguridad física de los centros de datos, servidores, hipervisores y red es responsabilidad 100% exclusiva del proveedor de nube."
  },
  {
    "id": 52,
    "categoria": "Redes Definidas por Software",
    "pregunta": "El equipo de redes reconfigura las subredes de la empresa enviando comandos a un plano de control central (Control Plane) por software, el cual automáticamente instruye a docenas de switches subyacentes sobre cómo encaminar el tráfico, todo esto sin necesidad de tocar los equipos físicos. ¿Cómo se llama este enfoque arquitectónico?",
    "opciones": [
      "Segmentación física mediante Jump Servers.",
      "Soberanía de datos geolocalizada.",
      "Redes definidas por software (SDN).",
      "Aislamiento de espacio de aire (Air Gap Network)."
    ],
    "respuesta_correcta": "Redes definidas por software (SDN).",
    "explicacion": "Software-Defined Networking (SDN) desacopla el plano de control (inteligencia y decisiones de enrutamiento) del plano de datos (envío de paquetes en conmutadores físicos), centralizando la gestión programable."
  },
  {
    "id": 53,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Durante una evaluación de seguridad, se identifica que un router inalámbrico corporativo aún soporta el protocolo TKIP (Protocolo de Integridad de Clave Temporal) heredado de las primeras versiones de WPA. Según las mejores prácticas modernas de criptografía en Wi-Fi, ¿por qué debe evitarse el uso de TKIP en redes actuales?",
    "opciones": [
      "Porque consume demasiada batería en dispositivos móviles bajo el modelo BYOD.",
      "Porque no es compatible con conexiones a RADIUS en modo Enterprise.",
      "Porque fue desarrollado puramente como una solución de transición insegura y ha sido superado por mecanismos criptográficos más robustos basados en AES como CCMP.",
      "Porque exige el uso exclusivo de certificados digitales que la mayoría de empresas no posee."
    ],
    "respuesta_correcta": "Porque fue desarrollado puramente como una solución de transición insegura y ha sido superado por mecanismos criptográficos más robustos basados en AES como CCMP.",
    "explicacion": "TKIP se creó como parche temporal sobre WEP para hardware antiguo con RC4. Posee debilidades conocidas y ha sido completamente sustituido por CCMP/GCMP basados en AES."
  },
  {
    "id": 54,
    "categoria": "Active Directory y Relaciones de Confianza",
    "pregunta": "Para permitir que los empleados de una compañía 'A' utilicen sus mismas contraseñas para acceder a un servidor de una compañía filial 'B' recién adquirida, los administradores vinculan ambos dominios de Active Directory a nivel de bosque. ¿Cómo se conoce técnicamente al mecanismo que permite que la autenticación fluya de un dominio a otro de forma controlada?",
    "opciones": [
      "Delegación administrativa mediante Tiers.",
      "Relación de Confianza (Trust).",
      "Escalamiento de grupos privilegiados (Domain Admins).",
      "Sincronización de GPP (Group Policy Preferences)."
    ],
    "respuesta_correcta": "Relación de Confianza (Trust).",
    "explicacion": "Una Relación de Confianza (Trust Relationship) entre dominios o bosques de Active Directory permite que usuarios de un dominio sean autenticados por controladores de otro dominio sin duplicar cuentas."
  },
  {
    "id": 55,
    "categoria": "Detección y Monitoreo de Red",
    "pregunta": "Un sistema de prevención de intrusiones (IPS) se conecta en un puerto espejo (SPAN port) de un switch principal en la empresa. El dispositivo recibe copias de todo el tráfico, lo analiza, alerta al administrador en caso de detectar un ataque, pero no puede intervenir, bloquear o modificar los paquetes maliciosos reales en tiempo real para evitar que lleguen al destino. Atendiendo a la interacción del dispositivo con el flujo de tráfico en esta topología específica, ¿cómo clasificaría su modo de operación?",
    "opciones": [
      "Es un dispositivo activo operando en línea (inline).",
      "Es un servidor proxy inverso transparente.",
      "Es un dispositivo pasivo operando en modo monitor o TAP.",
      "Es un firewall de próxima generación (NGFW)."
    ],
    "respuesta_correcta": "Es un dispositivo pasivo operando en modo monitor o TAP.",
    "explicacion": "Al estar conectado a un puerto SPAN/TAP fuera de la ruta directa de paquetes, opera en modo pasivo (IDS). Para bloquear activamente tráfico malicioso, tendría que estar configurado 'inline' (en línea)."
  },
  {
    "id": 56,
    "categoria": "Seguridad Inalámbrica (Wi-Fi)",
    "pregunta": "Un atacante intercepta las comunicaciones y roba el IV (Vector de Inicialización) y fracciones del texto cifrado (Keystream) de una red Wi-Fi sumamente antigua protegida únicamente con RC4, logrando recuperar la contraseña con facilidad gracias a las debilidades estructurales del protocolo. ¿A qué estándar de seguridad inalámbrica obsoleto pertenece este método?",
    "opciones": [
      "WPA3-Personal con Dragonfly SAE.",
      "WPA2-Enterprise con RADIUS.",
      "Wired Equivalent Privacy (WEP).",
      "EAP-TLS (Extensible Authentication Protocol)."
    ],
    "respuesta_correcta": "Wired Equivalent Privacy (WEP).",
    "explicacion": "WEP (Wired Equivalent Privacy) utiliza el cifrado de flujo RC4 con vectores de inicialización (IV) de solo 24 bits, lo que genera colisiones rápidas y permite descifrar la clave en minutos mediante herramientas como Aircrack-ng."
  },
  {
    "id": 57,
    "categoria": "Identidad y Federación",
    "pregunta": "Una aplicación empresarial moderna requiere conectarse con Google Cloud utilizando delegación de permisos sin tener que solicitar ni guardar la contraseña del usuario final en la base de datos de la empresa, operando bajo protocolos como OAuth o SAML. ¿Qué concepto de arquitectura y control de acceso ilustra esta dinámica inter-sistemas?",
    "opciones": [
      "Uso de un salto de flujo o Process Bypass.",
      "Inyección en la Lógica de Negocios.",
      "Redes privadas virtuales por aplicación (Per-App VPN).",
      "Relaciones de Confianza y Federación de Identidades."
    ],
    "respuesta_correcta": "Relaciones de Confianza y Federación de Identidades.",
    "explicacion": "La Federación de Identidades (Identity Federation) mediante estándares abiertos (OAuth 2.0, OpenID Connect, SAML 2.0) permite compartir identidades y delegar autenticación/autorización entre diferentes dominios de confianza sin compartir contraseñas."
  },
  {
    "id": 58,
    "categoria": "Seguridad en Contenedores",
    "pregunta": "Si un desarrollador comete el error de utilizar comandos como `ADD paquete_externo.tar.gz /aplicacion` en lugar de la directiva `COPY` en un Dockerfile al armar una imagen de contenedor, ¿cuál es el peligro de seguridad particular e inherente que introduce la instrucción ADD?",
    "opciones": [
      "Le da permisos de ejecución completos al usuario de invitado (Guest OS).",
      "Extrae y descomprime automáticamente archivos remotos o empaquetados de forma descontrolada, abriendo la puerta a vulnerabilidades como los 'Zip Bombs' (denegación de servicio por expansión maliciosa).",
      "Borra permanentemente las capas base del sistema operativo host para ahorrar espacio.",
      "Sustituye la directiva de aislamiento cgroups provista por el kernel."
    ],
    "respuesta_correcta": "Extrae y descomprime automáticamente archivos remotos o empaquetados de forma descontrolada, abriendo la puerta a vulnerabilidades como los 'Zip Bombs' (denegación de servicio por expansión maliciosa).",
    "explicacion": "La directiva ADD en Docker descomprime automáticamente archivos tar/zip y admite URLs remotas, lo que introduce riesgos de descompresión maliciosa (Zip Bombs) y descargas no verificadas. Las mejores prácticas recomiendan usar COPY."
  },
  {
    "id": 59,
    "categoria": "Autenticación y Gestión de Contraseñas",
    "pregunta": "Una auditoría de contraseñas demuestra que un administrador usa 'P@ssw0rd123' en la cuenta compartida 'Admin' para el ingreso al sistema de compras y para la red inalámbrica personal. Aunque la longitud sea aceptable, ¿qué recomendación de seguridad de alto nivel viola flagrantemente el administrador y abre vulnerabilidades a nivel sistémico?",
    "opciones": [
      "Falta de aislamiento físico del sistema Wi-Fi mediante un router especializado.",
      "Asociar una contraseña a una cuenta que debió implementarse usando EAP-TLS en todos los casos.",
      "Reutilización de credenciales entre diferentes servicios o plataformas, ampliando drásticamente la superficie de compromiso de credenciales (Credential Stuffing).",
      "Violación de la clasificación de datos orientada a secretos comerciales."
    ],
    "respuesta_correcta": "Reutilización de credenciales entre diferentes servicios o plataformas, ampliando drásticamente la superficie de compromiso de credenciales (Credential Stuffing).",
    "explicacion": "La reutilización de contraseñas permite que la filtración de credenciales en un servicio comprometa de inmediato todos los demás sistemas donde se usó la misma clave (técnica aprovechada en ataques de Credential Stuffing)."
  },
  {
    "id": 60,
    "categoria": "Active Directory y Relaciones de Confianza",
    "pregunta": "En las instalaciones de un banco central, se implementa una configuración en la que un usuario de la sucursal de atención solo tiene autorización para conectarse en los dominios y servidores donde atiende al público; se niega rotundamente su intento de ingreso con esas mismas credenciales válidas en las bases de datos contables del edificio administrativo, cruzando un puente de bosque. ¿Qué herramienta de limitación se habilitó sobre la Relación de Confianza (Trust)?",
    "opciones": [
      "Golden Ticket Prevention.",
      "Kerberoasting Offline Mitigation.",
      "Selective Authentication (Autenticación selectiva).",
      "Sincronización de la Autoridad de Certificados (AD CS)."
    ],
    "respuesta_correcta": "Selective Authentication (Autenticación selectiva).",
    "explicacion": "Selective Authentication en relaciones de confianza de Active Directory restringe la autenticación entre bosques, exigiendo otorgar explícitamente el permiso 'Allowed to Authenticate' en los servidores específicos a los que el usuario externo debe acceder."
  }
]
;
