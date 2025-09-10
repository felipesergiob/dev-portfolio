import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, validateEmailConfig } from '../config/emailConfig';
import i18next from 'i18next';
class EmailService {
  constructor() {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  }

  async sendContactEmail(formData) {
    try {
      if (!validateEmailConfig()) {
        const currentLanguage = i18next.language;
        const errorMessage = currentLanguage === 'pt' 
          ? 'Configuração de email não encontrada. Verifique as variáveis de ambiente.'
          : 'Email configuration not found. Check environment variables.';
        
        return {
          success: false,
          message: errorMessage,
          error: 'Missing environment variables'
        };
      }

      const currentLanguage = i18next.language;
      const isPortuguese = currentLanguage === 'pt';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        language: currentLanguage,
        subject_prefix: isPortuguese ? 'Nova mensagem do portfólio' : 'New message from portfolio',
        footer_text: isPortuguese 
          ? 'Enviado através do formulário de contato do portfólio'
          : 'Sent through the portfolio contact form'
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      const successMessage = isPortuguese 
        ? 'Email enviado com sucesso!'
        : 'Email sent successfully!';
        
      return {
        success: true,
        message: successMessage,
        response: response
      };
    } catch (error) {
      const currentLanguage = i18next.language;
      const errorMessage = currentLanguage === 'pt' 
        ? 'Erro ao enviar email. Tente novamente.'
        : 'Error sending email. Please try again.';
        
      return {
        success: false,
        message: errorMessage,
        error: error
      };
    }
  }
}

const emailService = new EmailService();
export default emailService;
