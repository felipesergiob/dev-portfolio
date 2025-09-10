export const EMAIL_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_PORTIFOLIO_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_PORTIFOLIO_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_PORTIFOLIO_EMAILJS_PUBLIC_KEY,
};

export const validateEmailConfig = () => {
  const requiredVars = [
    'REACT_APP_PORTIFOLIO_EMAILJS_SERVICE_ID',
    'REACT_APP_PORTIFOLIO_EMAILJS_TEMPLATE_ID', 
    'REACT_APP_PORTIFOLIO_EMAILJS_PUBLIC_KEY'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    return false;
  }
  
  return true;
};
