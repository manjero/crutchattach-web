<template>
    <div class="modal-overlay">
      <div class="modal-container">
        <!-- Close button in top‐right corner -->
        <button class="modal-close" @click="$emit('close')">×</button>
  
        <!-- Outer blue background with padding -->
        <div class="modal-wrapper">
          <!-- Top half: “I can make it myself!” + Download link -->
          <div class="modal-top">
            <h2 class="modal-title">I can make it myself!</h2>
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
                  type="text"
                  v-model.trim="form.name"
                  :class="{ 'input-error': errors.name }"
                />
                <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
              </div>
  
              <!-- Email field -->
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  v-model.trim="form.email"
                  :class="{ 'input-error': errors.email }"
                />
                <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
              </div>
  
              <!-- Country field -->
              <div class="form-group">
                <label for="country">Country</label>
                <input
                  id="country"
                  type="text"
                  v-model.trim="form.country"
                  :class="{ 'input-error': errors.country }"
                />
                <span v-if="errors.country" class="error-msg">{{ errors.country }}</span>
              </div>
  
              <!-- Message field -->
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  v-model.trim="form.message"
                  :class="{ 'input-error': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
              </div>
  
              <!-- Send button -->
              <div class="form-actions">
                <button type="submit" class="btn-send">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactModal",
    props: {
      downloadLink: {
        type: String,
        default: "#"
      }
    },
    data() {
      return {
        form: {
          name: "",
          email: "",
          country: "",
          message: ""
        },
        errors: {}
      };
    },
    methods: {
      handleSubmit() {
        this.errors = {};
  
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
  
        if (Object.keys(this.errors).length === 0) {
          this.$emit("close");
        }
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
  
  .btn-send:hover {
    opacity: 0.9;
  }
  </style>
  