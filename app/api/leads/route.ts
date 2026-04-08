import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('New lead received:', JSON.stringify(data, null, 2));

    try {
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 24px; border-radius: 12px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Nuevo Lead - Formulario de Briefing</h2>
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Nombre:</strong> ${data?.nombre ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">WhatsApp:</strong> ${data?.whatsapp ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Producto/Servicio:</strong> ${data?.productoServicio ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Cliente Ideal:</strong> ${data?.clienteIdeal ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Objetivo:</strong> ${data?.objetivoCampana ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Presupuesto Mensual:</strong> ${data?.presupuestoMensual ?? 'N/A'}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Recibido: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}</p>
        </div>
      `;

      if (process.env.ABACUSAI_API_KEY && process.env.WEB_APP_ID) {
        await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deployment_token: process.env.ABACUSAI_API_KEY,
            app_id: process.env.WEB_APP_ID,
            notification_id: process.env.NOTIF_ID_NUEVO_LEAD_BRIEFING,
            subject: 'Nuevo Lead: ' + (data?.productoServicio ?? 'Sin especificar'),
            body: htmlBody,
            is_html: true,
            recipient_email: 'contacto@traxiondigital.cl',
            sender_email: 'noreply@traxiondigital.cl',
            sender_alias: 'TRAXION Leads',
          }),
        });
      }
    } catch (emailErr) {
      console.error('Email notification error:', emailErr);
    }

    return NextResponse.json({ success: true, message: 'Lead recibido correctamente' });
  } catch (err) {
    console.error('Lead creation error:', err);
    return NextResponse.json(
      { success: false, message: 'Error al guardar el formulario' },
      { status: 500 }
    );
  }
}
