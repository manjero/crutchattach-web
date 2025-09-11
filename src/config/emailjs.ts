// EmailJS Configuration
// You'll need to replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS User ID (Public Key)
  USER_ID: 'QmY-upJ3FsJXpDCvO', // Replace with your actual User ID
  
  // Your EmailJS Service ID
  SERVICE_ID: 'service_elikbts', // Replace with your actual Service ID (e.g., 'service_xyz123')
  
  // Your EmailJS Template ID
  TEMPLATE_ID: 'template_cvpboxf', // Replace with your actual Template ID (e.g., 'template_abc456')
};

// Template parameters that will be sent to EmailJS
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  country: string;
  message: string;
  to_name?: string;
}
