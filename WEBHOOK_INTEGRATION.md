# Integración de Webhook - Formulario de Leads

## Descripción General

El nuevo formulario progresivo en `traxiondigital.cl` captura leads altamente calificados de dueños de alojamientos. Los datos se envían a través de la API `/api/leads` que actualmente notifica por email a `contacto@traxiondigital.cl`.

## Estructura de Datos del Lead

```json
{
  "serviceType": "Cabañas",
  "location": "Puerto Varas, Los Lagos",
  "units": "5",
  "pricePerNight": "150000",
  "clientSources": ["Instagram", "Booking"],
  "hasEmptyDates": "Sí, constantemente",
  "monthlyBudget": "$300.000 – $600.000",
  "interested": "Sí, quiero aumentar mis reservas"
}
```

## Campos Disponibles

| Campo | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `serviceType` | string | Tipo de alojamiento | "Cabañas", "Hotel", "Lodge", "Departamento", "Otro" |
| `location` | string | Ubicación del alojamiento | "Puerto Varas, Los Lagos" |
| `units` | string | Cantidad de unidades disponibles | "5" |
| `pricePerNight` | string | Precio promedio por noche | "150000" |
| `clientSources` | array | Canales actuales de adquisición | ["Instagram", "Booking", "Referidos", "Facebook Ads", "Google", "Otro"] |
| `hasEmptyDates` | string | Disponibilidad de fechas vacías | "Sí, constantemente", "Sí, en temporada baja", "No, estoy siempre lleno" |
| `monthlyBudget` | string | Presupuesto mensual para publicidad | "Menos de $100.000", "$100.000 – $300.000", "$300.000 – $600.000", "Más de $600.000" |
| `interested` | string | Nivel de interés en la estrategia | "Sí, quiero aumentar mis reservas", "Tal vez, quiero saber más", "No, no me interesa" |

## Integración con n8n

Para conectar este formulario con n8n y automatizar el flujo de leads:

1. **Crear un Webhook en n8n:**
   - Ir a `Workflows` > `New Workflow`
   - Agregar nodo `Webhook`
   - Copiar la URL del webhook

2. **Actualizar la variable de entorno:**
   - Agregar `WEBHOOK_URL` en `.env.local`
   - Ejemplo: `WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id`

3. **Modificar el endpoint `/api/leads`:**
   - Agregar lógica para enviar datos al webhook de n8n
   - Ejemplo de código:

```typescript
if (process.env.WEBHOOK_URL) {
  await fetch(process.env.WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
```

## Integración con Privyr (CRM)

Para conectar con Privyr:

1. **Obtener API Key de Privyr:**
   - Ir a Settings > API Keys en tu cuenta de Privyr
   - Copiar la clave

2. **Agregar variable de entorno:**
   - `PRIVYR_API_KEY=tu_clave_aqui`

3. **Crear contacto en Privyr:**
   - Usar el endpoint de Privyr para crear contactos
   - Mapear los campos del formulario a los campos de Privyr

## Integración con Zapier

1. **Crear un Zap:**
   - Ir a `Zapier.com` > `Make a Zap`
   - Trigger: `Webhooks by Zapier` > `Catch Raw Hook`
   - Copiar la URL del webhook

2. **Configurar en `.env.local`:**
   - `ZAPIER_WEBHOOK_URL=tu_url_aqui`

3. **Acciones disponibles:**
   - Enviar email personalizado
   - Crear contacto en CRM
   - Agregar a lista de email
   - Crear tarea en proyecto

## Filtrado de Leads por Calidad

El formulario ya filtra automáticamente por:

- **Presupuesto:** Solo captura leads con presupuesto de $100.000 o más
- **Interés:** Prioriza a quienes respondieron "Sí, quiero aumentar mis reservas"
- **Ocupación:** Identifica a quienes tienen problemas de ocupación

## Ejemplo de Implementación en el Endpoint

```typescript
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Filtro de calidad
    const isHighQualityLead = 
      data?.interested === "Sí, quiero aumentar mis reservas" &&
      !data?.monthlyBudget?.includes("Menos de $100.000");
    
    // Enviar a webhook externo
    if (process.env.WEBHOOK_URL && isHighQualityLead) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          qualityScore: 'high',
          receivedAt: new Date().toISOString(),
        }),
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
```

## Próximos Pasos

1. Elegir la plataforma de integración (n8n, Zapier, Privyr, etc.)
2. Configurar las variables de entorno necesarias
3. Actualizar el endpoint `/api/leads/route.ts`
4. Probar el flujo completo con un lead de prueba
5. Monitorear la calidad y tasa de conversión de los leads

## Soporte

Para preguntas sobre la integración, contacta a `contacto@traxiondigital.cl`.
