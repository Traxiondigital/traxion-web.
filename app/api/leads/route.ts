import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const lead = await prisma.lead.create({
      data: {
        productoServicio: data?.productoServicio ?? '',
        clienteIdeal: data?.clienteIdeal ?? '',
        objetivoCampana: data?.objetivoCampana ?? '',
        ofertaIncentivo: data?.ofertaIncentivo ?? null,
        gestionClientes: data?.gestionClientes ?? '',
        presupuestoMensual: data?.presupuestoMensual ?? '',
        valorPromedio: data?.valorPromedio ?? '',
        contenidoDisponible: data?.contenidoDisponible ?? '',
        experienciaPrevia: data?.experienciaPrevia ?? '',
        diferenciador: data?.diferenciador ?? '',
      },
    });

    // Send email notification
    try {
      const appUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
      let appName = 'TRAXION';
      try {
        appName = new URL(appUrl).hostname?.split?.('.')?.[0] || 'TRAXION';
      } catch { /* ignore */ }

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 24px; border-radius: 12px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">🚀 Nuevo Lead - Formulario de Briefing</h2>
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Producto/Servicio:</strong> ${data?.productoServicio ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Cliente Ideal:</strong> ${data?.clienteIdeal ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Objetivo:</strong> ${data?.objetivoCampana ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Oferta/Incentivo:</strong> ${data?.ofertaIncentivo || 'No especificado'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Gestión Clientes:</strong> ${data?.gestionClientes ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Presupuesto Mensual:</strong> ${data?.presupuestoMensual ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Valor Promedio:</strong> ${data?.valorPromedio ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Contenido Disponible:</strong> ${data?.contenidoDisponible ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Experiencia Previa:</strong> ${data?.experienciaPrevia ?? 'N/A'}</p>
            <p style="margin: 8px 0;"><strong style="color: #60a5fa;">Diferenciador:</strong> ${data?.diferenciador ?? 'N/A'}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Lead ID: ${lead?.id ?? 'N/A'} | Recibido: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}</p>
        </div>
      `;

      let senderEmail = 'noreply@traxiondigital.cl';
      try {
        senderEmail = `noreply@${new URL(appUrl).hostname}`;
      } catch { /* ignore */ }

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_NUEVO_LEAD_BRIEFING,
          subject: `🚀 Nuevo Lead: ${data?.productoServicio ?? 'Sin especificar'}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'contacto@traxiondigital.cl',
          sender_email: senderEmail,
          sender_alias: 'TRAXION Leads',
        }),
      });
    } catch (emailErr: any) {
      console.error('Email notification error:', emailErr?.message ?? emailErr);
      // Don't fail the lead creation if email fails
    }

    return NextResponse.json({ success: true, id: lead?.id });
  } catch (err: any) {
    console.error('Lead creation error:', err?.message ?? err);
    return NextResponse.json(
      { success: false, message: 'Error al guardar el formulario' },
      { status: 500 }
    );
  }
}
