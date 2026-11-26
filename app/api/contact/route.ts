import { NextRequest, NextResponse } from 'next/server'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import nodemailer from 'nodemailer'

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Store in Firestore
    const docRef = await addDoc(collection(db, 'contacts'), {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),
      read: false,
    })

   

    // Send email notification to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f9954;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #1f9954;">
            ${message.replace(/\n/g, '<br />')}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">This is an automated message from your portfolio contact form.</p>
        </div>
      `,
    }

    await transporter.sendMail(adminMailOptions)


    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f9954;">Thank You for Reaching Out</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible. Here's a copy of what you sent:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #1f9954;">
            ${message.replace(/\n/g, '<br />')}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p>Best regards,<br />Portfolio Team</p>
        </div>
      `,
    }

    await transporter.sendMail(userMailOptions)
  

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        id: docRef.id,
      },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to process your message. Please try again later.',
      },
      { status: 500 }
    )
  }
}

// GET route to fetch all contacts (optional - for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key')
    
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // You could implement pagination and fetching here
    // For now, this is a placeholder
    return NextResponse.json({
      message: 'Use Firestore console to view contacts',
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}
