import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    let name, email, phone, service, message, organization;
    let attachments = [];
    
    // Check content type to determine how to handle the request
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      // Handle JSON request
      const jsonData = await request.json();
      name = jsonData.name;
      email = jsonData.email;
      phone = jsonData.phone;
      service = jsonData.service;
      message = jsonData.message;
      organization = jsonData.organization || 'Not specified';
    } else {
      // Handle FormData request (multipart/form-data)
      const formData = await request.formData();
      name = formData.get('name');
      email = formData.get('email');
      phone = formData.get('phone');
      service = formData.get('service');
      message = formData.get('message');
      organization = formData.get('organization') || 'Not specified';
      
      // Handle file uploads
      for (const [key, value] of formData.entries()) {
        if (key.startsWith('file-') && value instanceof Blob) {
          const fileName = value.name || `attachment-${key.split('-')[1]}`;
          
          // Convert file to buffer for nodemailer
          const buffer = Buffer.from(await value.arrayBuffer());
          
          attachments.push({
            filename: fileName,
            content: buffer
          });
        }
      }
    }

    // Check required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }    

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Siva.kumar@vxsoftwaresolutions.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #5029FF; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          ${attachments.length > 0 ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Attachments</h3>
            <p>${attachments.length} file(s) attached</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px;">This email was sent from your website's contact form.</p>
          </div>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}