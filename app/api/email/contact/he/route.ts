import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Parse the request body and destructure the properties
  const data = await req.json();

  // Check if all the required fields are present and not empty
  if (!data.phone || !data.name || !data.email || !data.message) {
    return NextResponse.json(
      {
        message: 'חסרים או שדות ריקים. אנא ספק טלפון, שם, דוא"ל והודעה.',
      },
      { status: 400 }
    );
  }

  // Set the SendGrid API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  // Create the email message object
  const msg = {
    to: process.env.RECEIVER_EMAIL as string,
    from: process.env.SENDER_EMAIL as string,
    subject: `A new Contact Request from ${data.name.toUpperCase()}`,
    text: `Hi there, a new user wants to contact you. Their details are: Phone: ${data.phone}, Name: ${data.name}, Email: ${data.email}. Their message is: ${data.message}`,
    html: `<html>
<head>
  <style>
    /* Define some CSS rules for the HTML elements */

    p {
      color: #333;
      font-size: 16px;
    }

    strong {
      color: #000;
      font-weight: bold;
    }

    ul {
      list-style-type: circle;
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px auto;
      width: 50%;
    }

    li {
      color: #666;
      font-size: 14px;
    }

    a {
      color: #00f;
      text-decoration: none;
    }

    a:hover {
      color: #f00;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <p><strong>A new user wants to contact you.</strong></p>
  <p>Their details are:</p>
  <ul>
    <li>Phone: <a href="tel:${data.phone}">${data.phone}</a></li>
    <li>Name: ${data.name}</li>
    <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
  </ul>
  <p>Their message is:</p>
  <p>${data.message}</p>
</body>
</html>`,
  };

  // Try to send the email using SendGrid
  try {
    await sgMail.send(msg);
    return NextResponse.json(
      {
        message: "דואר נשלח בהצלחה",
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors that may occur
    return NextResponse.json({ message: error }, { status: 403 });
  }
}
