module.exports = {
    async afterCreate(event) {
      const { result } = event;
  
      try {
        // Send email to admin
        await strapi.plugins['email'].services.email.send({
          to: 'info@arabfest.cz',
          from: 'noreply@yourdomain.com',
          subject: 'New Contact Form Submission',
          html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>From:</strong> ${result.name} (${result.email})</p>
            <p><strong>Message:</strong></p>
            <p>${result.message}</p>
          `,
        });
      } catch (err) {
        console.error('Error sending email:', err);
      }
    },
  };