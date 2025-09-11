<template>
    <div class="modal-overlay">
      <div class="modal-container">
        <!-- Close button in top‐right corner -->
        <button class="modal-close" @click="$emit('close')">
          ×
        </button>
  
        <!-- Outer blue background with padding -->
        <div class="modal-wrapper">
          <!-- Top half: “I can make it myself!” + Download link -->
          <div class="modal-top">
            <h2 class="modal-title">
              I can make it myself!
            </h2>
            <a 
              :href="downloadLink"
              class="modal-download"
              target="_blank"
              rel="noopener"
            >
              Download
            </a>
          </div>
  
          <!-- Separator line -->
          <div class="separator"></div>
  
          <!-- Bottom half: contact form -->
          <div class="modal-bottom">
            <form @submit.prevent="handleSubmit">
              <!-- Name field -->
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  id="name"
                  v-model.trim="form.name"
                  type="text"
                  :class="{ 'input-error': errors.name }"
                />
                <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
              </div>
  
              <!-- Email field -->
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  :class="{ 'input-error': errors.email }"
                />
                <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
              </div>
  
              <!-- Country field -->
              <div class="form-group">
                <label for="country">Country</label>
                <input
                  id="country"
                  v-model.trim="form.country"
                  type="text"
                  :class="{ 'input-error': errors.country }"
                />
                <span v-if="errors.country" class="error-msg">{{ errors.country }}</span>
              </div>
  
              <!-- Message field -->
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model.trim="form.message"
                  rows="4"
                  :class="{ 'input-error': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
              </div>
  
              <!-- General error message -->
              <div v-if="errors.general" class="general-error">
                {{ errors.general }}
              </div>

              <!-- Success message -->
              <div v-if="submitStatus === 'success'" class="success-message">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>

              <!-- Send button -->
              <div class="form-actions">
                <button 
                  type="submit" 
                  class="btn-send"
                  :disabled="isLoading"
                  :class="{ 'loading': isLoading }"
                >
                  <span v-if="isLoading">Sending...</span>
                  <span v-else>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import emailjs from '@emailjs/browser';
  import { EMAILJS_CONFIG } from '../config/emailjs.ts';
  
  export default {
    name: "ContactModal",
    props: {
      downloadLink: {
        type: String,
        default: "#"
      }
    },
    emits: ['close'],
    data() {
      return {
        form: {
          name: "",
          email: "",
          country: "",
          message: ""
        },
        errors: {},
        isLoading: false,
        submitStatus: null // 'success', 'error', or null
      };
    },
    methods: {
      async handleSubmit() {
        this.errors = {};
        this.submitStatus = null;
  
        // Validate form fields
        if (!this.form.name) {
          this.errors.name = "Name is required.";
        }
        if (!this.form.email) {
          this.errors.email = "Email is required.";
        } else if (!this.validEmail(this.form.email)) {
          this.errors.email = "Please enter a valid email.";
        }
        if (!this.form.country) {
          this.errors.country = "Country is required.";
        }
        if (!this.form.message) {
          this.errors.message = "Message is required.";
        }
  
        // If validation passes, send email
        if (Object.keys(this.errors).length === 0) {
          await this.sendEmail();
        }
      },
      
      async sendEmail() {
        this.isLoading = true;
        
        try {
          // Check if EmailJS is configured
          if (EMAILJS_CONFIG.USER_ID === 'YOUR_EMAILJS_USER_ID' || 
              EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
              EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
            throw new Error('EmailJS not configured. Please update your credentials in src/config/emailjs.ts');
          }

          // Initialize EmailJS
          emailjs.init(EMAILJS_CONFIG.USER_ID);
          
          // Prepare template parameters
          const templateParams = {
            from_name: this.form.name,
            from_email: this.form.email,
            country: this.form.country,
            message: this.form.message,
            to_name: 'CrutchAttach Team' // You can customize this
          };
          
          // Send email
          const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams
          );
          
          console.log('Email sent successfully:', response);
          this.submitStatus = 'success';
          
          // Reset form after successful submission
          setTimeout(() => {
            this.resetForm();
            this.$emit("close");
          }, 2000);
          
        } catch (error) {
          console.error('Email sending failed:', error);
          this.submitStatus = 'error';
          
          // Show user-friendly error message
          if (error.message.includes('EmailJS not configured')) {
            this.errors.general = 'Email service not configured. Please contact the administrator.';
          } else {
            this.errors.general = 'Failed to send message. Please try again later.';
          }
        } finally {
          this.isLoading = false;
        }
      },
      
      resetForm() {
        this.form = {
          name: "",
          email: "",
          country: "",
          message: ""
        };
        this.errors = {};
        this.submitStatus = null;
      },
      
      validEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Overlay backdrop */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  /* Modal container larger size */
  .modal-container {
    background-color: transparent;
    width: 90%;
    max-width: 1000px; /* Twice as large */
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  
  /* Close button */
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem; /* larger close icon */
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002db5;
    z-index: 10000;
  }
  
  /* Outer wrapper: blue background with padding */
  .modal-wrapper {
    background-color: #002db5;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 8px;
  }
  
  /* Top part: white background */
  .modal-top {
    background-color: #ffffff;
    color: #002db5;
    padding: 20px;
    text-align: center;
    font-size: 1rem; /* match site font */
  }
  
  .modal-title {
    margin: 0;
    font-size: 1.5rem; /* larger text */
    font-weight: 700;
    color: #002db5;
  }
  
  .modal-download {
    display: inline-block;
    margin-top: 10px;
    color: #002db5;
    text-decoration: underline;
    font-size: 1.25rem;
  }
  
  /* Separator line: thick blue */
  .separator {
    height: 4px;
    background-color: #002db5;
    margin: 0;
  }
  
  /* Bottom part: white background */
  .modal-bottom {
    background-color: #ffffff;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    color: #002db5;
    font-size: 1.1rem;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  
  .input-error {
    border-color: #e74c3c;
  }
  
  .error-msg {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 4px;
    display: block;
  }
  
  .form-actions {
    text-align: center;
  }
  
  .btn-send {
    background-color: #002db5;
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    border-radius: 50px; /* round */
    cursor: pointer;
    min-width: 120px;
  }
  
  .btn-send:hover:not(:disabled) {
    opacity: 0.9;
  }

  .btn-send:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-send.loading {
    opacity: 0.7;
  }

  /* Status messages */
  .general-error {
    background-color: #fee;
    color: #c33;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid #fcc;
    text-align: center;
    font-size: 0.9rem;
  }

  .success-message {
    background-color: #efe;
    color: #363;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid #cfc;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
  }
  </style>
  