// app/api/send-booking/route.ts
export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, service, withSamagri, address, details } = await req.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: "tocoollucky007@gmail.com",
                pass: "irakoizgkerdwsbc",
            },
        });

        // Email content for the business owner
        const ownerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d97706; margin: 0;">🕉️ New Pooja Booking Request</h1>
          <p style="color: #666; margin: 5px 0;">Poojari Ji - Religious Services</p>
        </div>
        
        <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #ea580c; margin-top: 0;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #d97706; margin-top: 0;">Service Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
              <td style="padding: 8px 0; color: #6b7280;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">With Samagri:</td>
              <td style="padding: 8px 0; color: #6b7280;">${withSamagri === 'yes' ? 'Yes (Include all materials)' : 'No (Customer will arrange)'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Address:</td>
              <td style="padding: 8px 0; color: #6b7280;">${address}</td>
            </tr>
          </table>
        </div>

        ${details ? `
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #374151; margin-top: 0;">Additional Details</h2>
          <p style="color: #6b7280; line-height: 1.6; margin: 0;">${details}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">
            Please contact the customer within 24 hours to confirm the booking details.
          </p>
        </div>
      </div>
    `;

        // Email content for the customer
        const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d97706; margin: 0;">🕉️ Booking Confirmation</h1>
          <p style="color: #666; margin: 5px 0;">Poojari Ji - Religious Services</p>
        </div>
        
        <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
          <h2 style="color: #16a34a; margin: 0;">Thank You for Your Booking!</h2>
          <p style="color: #15803d; margin: 10px 0 0 0;">We have received your pooja booking request.</p>
        </div>

        <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #ea580c; margin-top: 0;">Your Booking Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
              <td style="padding: 8px 0; color: #6b7280;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">With Samagri:</td>
              <td style="padding: 8px 0; color: #6b7280;">${withSamagri === 'yes' ? 'Yes (All materials included)' : 'No (You will arrange materials)'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; vertical-align: top;">Address:</td>
              <td style="padding: 8px 0; color: #6b7280;">${address}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #d97706; margin-top: 0;">What Happens Next?</h3>
          <ul style="color: #6b7280; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li>Our team will contact you within 24 hours</li>
            <li>We'll confirm the date, time, and final details</li>
            <li>Our experienced pandit will arrive at your location</li>
            <li>All arrangements will be made as per your requirements</li>
          </ul>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p style="color: #6b7280; margin: 5px 0;"><strong>Phone:</strong> +91 9310065609</p>
          <p style="color: #6b7280; margin: 5px 0;"><strong>Email:</strong> info@poojariji.in</p>
          <p style="color: #6b7280; margin: 5px 0;"><strong>WhatsApp:</strong> +91 9310065609</p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">
            Thank you for choosing Poojari Ji for your religious ceremonies.
          </p>
        </div>
      </div>
    `;

        // Send email to business owner
        await transporter.sendMail({
            from: "tocoollucky007@gmail.com",//`"Poojari Ji" <info@poojariji.in>`,
            to: 'tocoollucky007@gmail.com', // Business email
            subject: `New Pooja Booking Request from ${name}`,
            html: ownerEmailContent,
        });

        // Send confirmation email to customer
        await transporter.sendMail({
            from: "tocoollucky007@gmail.com",//`"Poojari Ji" <info@poojariji.in>`,
            to: email,
            subject: 'Pooja Booking Confirmation - Poojari Ji',
            html: customerEmailContent,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error('Email error:', err);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}