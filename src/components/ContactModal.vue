<template>
    <div class="modal-overlay">
      <div class="modal-container">
        <!-- Close button in top‐right corner -->
        <button class="modal-close" @click="$emit('close')">
          ×
        </button>
  
        <!-- ContactUs component wrapper -->
        <div class="modal-wrapper">
          <div class="form-container">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import ContactUs from './ContactUs.vue';

export default {
  name: "ContactModal",
  components: {
    ContactUs
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
  
  /* Modal container half the size */
  .modal-container {
    background-color: transparent;
    width: 60%;
    max-width: 800px; /* Half the original size */
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  
  /* Close button */
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 4rem; /* 2 times larger close icon */
    background: transparent;
    border: none;
    cursor: pointer;
    color: #002db5;
    z-index: 10000;
  }
  
  /* Outer wrapper: simplified for ContactUs component */
  .modal-wrapper {
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
  }
  
  /* Form container for ContactUs component - 1.5 times larger */
  .form-container {
    width: 100%;
    max-width: 1200px; /* 1.5 times larger than 800px */
    background-color: #ffffff;
    border-radius: 8px;
    padding: 30px; /* 1.5 times larger padding */
    box-sizing: border-box;
    margin: 0 auto; /* Center the form horizontally */
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 600px; /* Ensure adequate height */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .modal-container {
      width: 90%; /* wider on mobile */
    }
    .form-container {
      width: 95%; /* wider on mobile */
      padding: 22px; /* 1.5 times 15px */
      transform: scale(1.3); /* Slightly smaller scale on mobile */
    }
  }
  </style>
  