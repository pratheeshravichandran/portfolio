import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_zio0z5t',
      'template_60tmtyc',
      formData,
      '_GpYLzK19wK21d1eL'
    );
    
    console.log('Email sent:', result.text);
    return { success: true, message: '✅ Your message was sent!' };
  } catch (error) {
    console.error('Email error:', error.text);
    return { success: false, message: '❌ Something went wrong. Please try again.' };
  }
};