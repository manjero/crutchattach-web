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
            <div class="form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ContactForm from './ContactForm.vue';
  
  export default {
    name: "ContactModal",
    components: {
      ContactForm
    },
    props: {
      downloadLink: {
        type: String,
        default: "#"
      }
    },
    emits: ['close']
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
    font-size: 2rem; /* increased from 1.5rem */
    font-weight: 700;
    color: #002db5;
  }
  
  .modal-download {
    display: inline-block;
    margin-top: 10px;
    color: #002db5;
    text-decoration: underline;
    font-size: 1.5rem; /* increased from 1.25rem */
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
    display: flex;
    justify-content: center;
  }
  
  /* Form container with rounded corners and narrower width */
  .form-container {
    width: 100%;
    max-width: 600px; /* Adjust to fit ContactForm better */
    background-color: #ffffff;
    border-radius: 12px; /* rounded corners */
    padding: 0; /* remove extra padding since parent has padding */
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .form-container {
      width: 95%; /* wider on mobile */
    }
    
    .modal-title {
      font-size: 1.8rem;
    }
    
    .modal-download {
      font-size: 1.3rem;
    }
  }
  </style>
  