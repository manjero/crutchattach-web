<!-- ContactUs.vue -->

<script>
import { ref } from 'vue'
import { useVueform, Vueform } from '@vueform/vueform'
import { EXTERNAL_URLS } from '@/constants/urls'

export default {
  mixins: [Vueform],
  setup(props, context)
  {
    const form = useVueform(props, context)

    const vueform = ref({
      size: 'lg',
      displayErrors: false,
      displayMessages: false,
      addClass: 'vf-contact-us',
      schema: {
        make_button: {
          type: 'button',
          secondary: true,
          align: 'center',
          info: 'Instructions and files to make one yourself',
          buttonLabel: 'I Can Make It Myself!',
          target: '_blank',
          buttonType: 'anchor',
          href: EXTERNAL_URLS.MAKERWORLD,
          id: 'make_button',
        },
        divider: {
          type: 'static',
          tag: 'hr',
        },
        page_title: {
          type: 'static',
          content: 'I Need One!',
          tag: 'h1',
          align: 'center',
        },
        name: {
          type: 'text',
          placeholder: 'Name',
          columns: {
            label: 12,
            wrapper: 12,
          },
          fieldName: 'First name',
          rules: [
            'required',
            'max:255',
          ],
          messages: {
            required: 'Name is required',
            max: 'Name must not exceed 255 characters'
          },
          id: 'name_field',
        },
        email: {
          type: 'text',
          inputType: 'email',
          rules: [
            'required',
            'max:255',
            'email',
          ],
          placeholder: 'Email',
          fieldName: 'Email',
          messages: {
            required: 'Email is required',
            max: 'Email must not exceed 255 characters',
            email: 'Please enter a valid email address'
          },
          id: 'email_field',
        },
        country: {
          type: 'select',
          search: true,
          native: false,
          inputType: 'search',
          placeholder: 'Country',
          autocomplete: 'enabled',
          items: import.meta.env.BASE_URL + 'countries.json',
          fieldName: 'country',
          rules: [
            'required',
          ],
          messages: {
            required: 'Please select your country'
          },
          id: 'country_field',
        },
        message: {
          type: 'textarea',
          placeholder: 'Tell us about your need and how we might be able to help',
          id: 'message_field',
          rules: [
            'required',
          ],
          messages: {
            required: 'Please enter your message'
          },
          fieldName: 'message',
        },
        divider_1: {
          type: 'static',
          tag: 'hr',
        },
        send: {
          type: 'button',
          submits: true,
          buttonLabel: 'Send',
          full: true,
          size: 'lg',
        },
      },
    })

    return {
      ...form,
      vueform,
    }
  }
}
</script>

<style>
.vf-contact-us *,
.vf-contact-us *:before,
.vf-contact-us *:after,
.vf-contact-us:root {
  --vf-primary: #002db5;
  --vf-primary-darker: #000000;
  --vf-color-on-primary: #FFFFFF;
  --vf-danger: #ef4444;
  --vf-danger-lighter: #fee2e2;
  --vf-success: #002db5;
  --vf-success-lighter: #d9d9d9;
  --vf-gray-50: #f9fafb;
  --vf-gray-100: #f3f4f6;
  --vf-gray-200: #e5e7eb;
  --vf-gray-300: #d1d5db;
  --vf-gray-400: #9ca3af;
  --vf-gray-500: #6b7280;
  --vf-gray-600: #4b5563;
  --vf-gray-700: #374151;
  --vf-gray-800: #1f2937;
  --vf-gray-900: #111827;
  --vf-dark-50: #EFEFEF;
  --vf-dark-100: #DCDCDC;
  --vf-dark-200: #BDBDBD;
  --vf-dark-300: #A0A0A0;
  --vf-dark-400: #848484;
  --vf-dark-500: #737373;
  --vf-dark-600: #393939;
  --vf-dark-700: #323232;
  --vf-dark-800: #262626;
  --vf-dark-900: #191919;
  --vf-ring-width: 2px;
  --vf-ring-color: #07bf9b66;
  --vf-link-color: var(--vf-primary);
  --vf-link-decoration: inherit;
  --vf-font-size: 1rem;
  --vf-font-size-sm: 0.875rem;
  --vf-font-size-lg: 1rem;
  --vf-font-size-small: 0.875rem;
  --vf-font-size-small-sm: 0.8125rem;
  --vf-font-size-small-lg: 0.875rem;
  --vf-font-size-h1: 2.125rem;
  --vf-font-size-h1-sm: 2.125rem;
  --vf-font-size-h1-lg: 2.125rem;
  --vf-font-size-h2: 1.875rem;
  --vf-font-size-h2-sm: 1.875rem;
  --vf-font-size-h2-lg: 1.875rem;
  --vf-font-size-h3: 1.5rem;
  --vf-font-size-h3-sm: 1.5rem;
  --vf-font-size-h3-lg: 1.5rem;
  --vf-font-size-h4: 1.25rem;
  --vf-font-size-h4-sm: 1.25rem;
  --vf-font-size-h4-lg: 1.25rem;
  --vf-font-size-h1-mobile: 1.5rem;
  --vf-font-size-h1-mobile-sm: 1.5rem;
  --vf-font-size-h1-mobile-lg: 1.5rem;
  --vf-font-size-h2-mobile: 1.25rem;
  --vf-font-size-h2-mobile-sm: 1.25rem;
  --vf-font-size-h2-mobile-lg: 1.25rem;
  --vf-font-size-h3-mobile: 1.125rem;
  --vf-font-size-h3-mobile-sm: 1.125rem;
  --vf-font-size-h3-mobile-lg: 1.125rem;
  --vf-font-size-h4-mobile: 1rem;
  --vf-font-size-h4-mobile-sm: 1rem;
  --vf-font-size-h4-mobile-lg: 1rem;
  --vf-font-size-blockquote: 1rem;
  --vf-font-size-blockquote-sm: 0.875rem;
  --vf-font-size-blockquote-lg: 1rem;
  --vf-line-height: 1.5rem;
  --vf-line-height-sm: 1.25rem;
  --vf-line-height-lg: 1.5rem;
  --vf-line-height-small: 1.25rem;
  --vf-line-height-small-sm: 1.125rem;
  --vf-line-height-small-lg: 1.25rem;
  --vf-line-height-headings: 1.2;
  --vf-line-height-headings-sm: 1.2;
  --vf-line-height-headings-lg: 1.2;
  --vf-line-height-blockquote: 1.5rem;
  --vf-line-height-blockquote-sm: 1.25rem;
  --vf-line-height-blockquote-lg: 1.5rem;
  --vf-letter-spacing: 0px;
  --vf-letter-spacing-sm: 0px;
  --vf-letter-spacing-lg: 0px;
  --vf-letter-spacing-small: 0px;
  --vf-letter-spacing-small-sm: 0px;
  --vf-letter-spacing-small-lg: 0px;
  --vf-letter-spacing-headings: 0px;
  --vf-letter-spacing-headings-sm: 0px;
  --vf-letter-spacing-headings-lg: 0px;
  --vf-letter-spacing-blockquote: 0px;
  --vf-letter-spacing-blockquote-sm: 0px;
  --vf-letter-spacing-blockquote-lg: 0px;
  --vf-gutter: 1rem;
  --vf-gutter-sm: 0.5rem;
  --vf-gutter-lg: 1rem;
  --vf-min-height-input: 2.375rem;
  --vf-min-height-input-sm: 2.125rem;
  --vf-min-height-input-lg: 2.875rem;
  --vf-py-input: 0.375rem;
  --vf-py-input-sm: 0.375rem;
  --vf-py-input-lg: 0.625rem;
  --vf-px-input: 0.75rem;
  --vf-px-input-sm: 0.5rem;
  --vf-px-input-lg: 0.875rem;
  --vf-py-btn: 0.375rem;
  --vf-py-btn-sm: 0.375rem;
  --vf-py-btn-lg: 0.625rem;
  --vf-px-btn: 18px;
  --vf-px-btn-sm: 0.75rem;
  --vf-px-btn-lg: 1.25rem;
  --vf-py-btn-small: 4px;
  --vf-py-btn-small-sm: 0.25rem;
  --vf-py-btn-small-lg: 0.375rem;
  --vf-px-btn-small: 12px;
  --vf-px-btn-small-sm: 0.625rem;
  --vf-px-btn-small-lg: 0.75rem;
  --vf-py-group-tabs: 0.375rem;
  --vf-py-group-tabs-sm: 0.375rem;
  --vf-py-group-tabs-lg: 0.625rem;
  --vf-px-group-tabs: 0.75rem;
  --vf-px-group-tabs-sm: 0.5rem;
  --vf-px-group-tabs-lg: 0.875rem;
  --vf-py-group-blocks: 0.75rem;
  --vf-py-group-blocks-sm: 0.625rem;
  --vf-py-group-blocks-lg: 0.875rem;
  --vf-px-group-blocks: 1rem;
  --vf-px-group-blocks-sm: 1rem;
  --vf-px-group-blocks-lg: 1rem;
  --vf-py-tag: 0px;
  --vf-py-tag-sm: 0px;
  --vf-py-tag-lg: 0px;
  --vf-px-tag: 0.4375rem;
  --vf-px-tag-sm: 0.4375rem;
  --vf-px-tag-lg: 0.4375rem;
  --vf-py-slider-tooltip: 0.125rem;
  --vf-py-slider-tooltip-sm: 0.0625rem;
  --vf-py-slider-tooltip-lg: 0.1875rem;
  --vf-px-slider-tooltip: 0.375rem;
  --vf-px-slider-tooltip-sm: 0.3125rem;
  --vf-px-slider-tooltip-lg: 0.5rem;
  --vf-py-blockquote: 0.25rem;
  --vf-py-blockquote-sm: 0.25rem;
  --vf-py-blockquote-lg: 0.25rem;
  --vf-px-blockquote: 0.75rem;
  --vf-px-blockquote-sm: 0.75rem;
  --vf-px-blockquote-lg: 0.75rem;
  --vf-py-hr: 0.25rem;
  --vf-space-addon: 0px;
  --vf-space-addon-sm: 0px;
  --vf-space-addon-lg: 0px;
  --vf-space-checkbox: 0.375rem;
  --vf-space-checkbox-sm: 0.375rem;
  --vf-space-checkbox-lg: 0.375rem;
  --vf-space-tags: 0.1875rem;
  --vf-space-tags-sm: 0.1875rem;
  --vf-space-tags-lg: 0.1875rem;
  --vf-space-static-tag-1: 1rem;
  --vf-space-static-tag-2: 2rem;
  --vf-space-static-tag-3: 3rem;
  --vf-floating-top: 0rem;
  --vf-floating-top-sm: 0rem;
  --vf-floating-top-lg: 0rem;
  --vf-bg-input: #ffffff;
  --vf-bg-input-hover: #ffffff;
  --vf-bg-input-focus: #ffffff;
  --vf-bg-input-danger: #ffffff;
  --vf-bg-input-success: #ffffff;
  --vf-bg-checkbox: #ffffff;
  --vf-bg-checkbox-hover: #ffffff;
  --vf-bg-checkbox-focus: #ffffff;
  --vf-bg-checkbox-danger: #ffffff;
  --vf-bg-checkbox-success: #ffffff;
  --vf-bg-disabled: var(--vf-gray-200);
  --vf-bg-selected: #1118270d;
  --vf-bg-passive: var(--vf-gray-300);
  --vf-bg-icon: var(--vf-gray-500);
  --vf-bg-danger: var(--vf-danger-lighter);
  --vf-bg-success: var(--vf-success-lighter);
  --vf-bg-tag: var(--vf-primary);
  --vf-bg-slider-handle: var(--vf-primary);
  --vf-bg-toggle-handle: #ffffff;
  --vf-bg-date-head: var(--vf-gray-100);
  --vf-bg-addon: #ffffff00;
  --vf-bg-btn: var(--vf-primary);
  --vf-bg-btn-danger: var(--vf-danger);
  --vf-bg-btn-secondary: var(--vf-gray-200);
  --vf-bg-table-header: var(--vf-gray-100);
  --vf-color-input: var(--vf-gray-800);
  --vf-color-input-hover: var(--vf-gray-800);
  --vf-color-input-focus: var(--vf-gray-800);
  --vf-color-input-danger: var(--vf-gray-800);
  --vf-color-input-success: var(--vf-gray-800);
  --vf-color-disabled: var(--vf-gray-400);
  --vf-color-placeholder: var(--vf-gray-300);
  --vf-color-passive: var(--vf-gray-700);
  --vf-color-muted: var(--vf-gray-500);
  --vf-color-floating: var(--vf-gray-500);
  --vf-color-floating-focus: var(--vf-gray-500);
  --vf-color-floating-success: var(--vf-gray-500);
  --vf-color-floating-danger: var(--vf-gray-500);
  --vf-color-danger: var(--vf-danger);
  --vf-color-success: var(--vf-success);
  --vf-color-tag: var(--vf-color-on-primary);
  --vf-color-addon: var(--vf-gray-800);
  --vf-color-date-head: var(--vf-gray-700);
  --vf-color-btn: var(--vf-color-on-primary);
  --vf-color-btn-danger: #ffffff;
  --vf-color-btn-secondary: var(--vf-gray-700);
  --vf-color-table-header: var(--vf-gray-800);
  --vf-border-color-input: var(--vf-gray-300);
  --vf-border-color-input-hover: var(--vf-gray-300);
  --vf-border-color-input-focus: var(--vf-primary);
  --vf-border-color-input-danger: var(--vf-gray-300);
  --vf-border-color-input-success: var(--vf-gray-300);
  --vf-border-color-checkbox: var(--vf-gray-300);
  --vf-border-color-checkbox-focus: var(--vf-primary);
  --vf-border-color-checkbox-hover: var(--vf-gray-300);
  --vf-border-color-checkbox-danger: var(--vf-gray-300);
  --vf-border-color-checkbox-success: var(--vf-gray-300);
  --vf-border-color-checked: var(--vf-primary);
  --vf-border-color-passive: var(--vf-gray-300);
  --vf-border-color-slider-tooltip: var(--vf-primary);
  --vf-border-color-tag: var(--vf-primary);
  --vf-border-color-btn: var(--vf-primary);
  --vf-border-color-btn-danger: var(--vf-danger);
  --vf-border-color-btn-secondary: var(--vf-gray-200);
  --vf-border-color-blockquote: var(--vf-gray-300);
  --vf-border-color-hr: var(--vf-gray-300);
  --vf-border-color-signature-hr: var(--vf-gray-300);
  --vf-border-color-table: var(--vf-gray-300);
  --vf-border-width-input-t: 1px;
  --vf-border-width-input-r: 1px;
  --vf-border-width-input-b: 1px;
  --vf-border-width-input-l: 1px;
  --vf-border-width-radio-t: 1px;
  --vf-border-width-radio-r: 1px;
  --vf-border-width-radio-b: 1px;
  --vf-border-width-radio-l: 1px;
  --vf-border-width-checkbox-t: 1px;
  --vf-border-width-checkbox-r: 1px;
  --vf-border-width-checkbox-b: 1px;
  --vf-border-width-checkbox-l: 1px;
  --vf-border-width-dropdown: 1px;
  --vf-border-width-btn: 1px 1px 1px 1px;
  --vf-border-width-toggle: 0.125rem;
  --vf-border-width-tag: 1px;
  --vf-border-width-blockquote: 3px;
  --vf-border-width-table: 1px;
  --vf-shadow-input: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-input-hover: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-input-focus: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-handles: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-handles-hover: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-handles-focus: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-btn: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-shadow-dropdown: 0px 0px 0px 0px rgba(0,0,0,0);
  --vf-radius-input: 0.25rem;
  --vf-radius-input-sm: 0.25rem;
  --vf-radius-input-lg: 0.25rem;
  --vf-radius-btn: 90px;
  --vf-radius-btn-sm: 4px;
  --vf-radius-btn-lg: 4px;
  --vf-radius-small: 0.25rem;
  --vf-radius-small-sm: 0.25rem;
  --vf-radius-small-lg: 0.25rem;
  --vf-radius-large: 0.25rem;
  --vf-radius-large-sm: 0.25rem;
  --vf-radius-large-lg: 0.25rem;
  --vf-radius-tag: 0.25rem;
  --vf-radius-tag-sm: 0.25rem;
  --vf-radius-tag-lg: 0.25rem;
  --vf-radius-checkbox: 0.25rem;
  --vf-radius-checkbox-sm: 0.25rem;
  --vf-radius-checkbox-lg: 0.25rem;
  --vf-radius-slider: 0.25rem;
  --vf-radius-slider-sm: 0.25rem;
  --vf-radius-slider-lg: 0.25rem;
  --vf-radius-image: 0.25rem;
  --vf-radius-image-sm: 0.25rem;
  --vf-radius-image-lg: 0.25rem;
  --vf-radius-gallery: 0.25rem;
  --vf-radius-gallery-sm: 0.25rem;
  --vf-radius-gallery-lg: 0.25rem;
  --vf-checkbox-size: 1rem;
  --vf-checkbox-size-sm: 0.875rem;
  --vf-checkbox-size-lg: 1rem;
  --vf-gallery-size: 6rem;
  --vf-gallery-size-sm: 5rem;
  --vf-gallery-size-lg: 7rem;
  --vf-toggle-width: 3rem;
  --vf-toggle-width-sm: 2.75rem;
  --vf-toggle-width-lg: 3rem;
  --vf-toggle-height: 1.25rem;
  --vf-toggle-height-sm: 1rem;
  --vf-toggle-height-lg: 1.25rem;
  --vf-slider-height: 0.375rem;
  --vf-slider-height-sm: 0.3125rem;
  --vf-slider-height-lg: 0.5rem;
  --vf-slider-height-vertical: 20rem;
  --vf-slider-height-vertical-sm: 20rem;
  --vf-slider-height-vertical-lg: 20rem;
  --vf-slider-handle-size: 1rem;
  --vf-slider-handle-size-sm: 0.875rem;
  --vf-slider-handle-size-lg: 1.25rem;
  --vf-slider-tooltip-distance: 0.5rem;
  --vf-slider-tooltip-distance-sm: 0.375rem;
  --vf-slider-tooltip-distance-lg: 0.5rem;
  --vf-slider-tooltip-arrow-size: 0.3125rem;
  --vf-slider-tooltip-arrow-size-sm: 0.3125rem;
  --vf-slider-tooltip-arrow-size-lg: 0.3125rem;
}

/* Custom font styles for form */
.vf-contact-us h1 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
}

.vf-contact-us input,
.vf-contact-us textarea,
.vf-contact-us select,
.vf-contact-us .vf-input-wrapper,
.vf-contact-us .vf-text-type,
.vf-contact-us .vf-textarea-type,
.vf-contact-us .vf-select-type {
  font-family: 'Lora', serif !important;
  font-weight: 400 !important;
  font-size: 19.6px !important; /* 14px * 1.4 = 19.6px */
}

/* Make all form input wrappers and select elements 80% of frame width and center them */
.vf-contact-us .vf-input-wrapper,
.vf-contact-us .vf-text-type,
.vf-contact-us .vf-textarea-type,
.vf-contact-us .vf-select-type,
.vf-contact-us select {
  width: 80% !important;
  max-width: 80% !important;
  margin: 5px auto !important;
}

/* Disable floating labels completely */
.vf-contact-us .vf-floating {
  display: none !important;
}

.vf-contact-us .vf-input-wrapper {
  --vf-floating-top: 0rem !important;
}

.vf-contact-us .vf-input-wrapper .vf-input {
  padding-top: var(--vf-py-input) !important;
}

/* Increase field heights and spacing for better proportion */
.vf-contact-us .vf-input,
.vf-contact-us .vf-textarea {
  min-height: calc(var(--vf-min-height-input) * 1.5) !important; /* Increased for larger fonts */
  line-height: 1.6 !important;
  padding: 12px 16px !important; /* Increased padding for larger fonts */
  width: 80% !important; /* 80% of frame width */
  max-width: 80% !important;
  margin: 0 auto !important;
}

.vf-contact-us .vf-textarea {
  min-height: 140px !important; /* Increased for larger fonts */
  padding: 16px !important;
  width: 80% !important; /* 80% of frame width */
  max-width: 80% !important;
}

.vf-contact-us .vf-element {
  margin-bottom: 4rem !important; /* Increased to 4rem for even larger gaps to contain errors */
  min-height: 100px !important; /* Increased reserve space for potential error messages */
}

.vf-contact-us h1 {
  line-height: 1.4 !important;
}

/* Hide top-level error messages container */
.vf-contact-us .vf-errors,
.vf-contact-us .vf-errors-lg {
  display: none !important;
}

/* Ensure individual field error messages are still visible */
.vf-contact-us .vf-element .vf-element-description,
.vf-contact-us .vf-element .vf-element-info,
.vf-contact-us .vf-element .vf-element-error {
  display: block !important;
  font-family: 'Lora', serif !important;
  font-size: 19.6px !important; /* 40% increase */
  margin-top: 12px !important; /* Increased margin for better spacing */
  min-height: 32px !important; /* Increased reserve space for error messages */
  line-height: 1.4 !important;
}

/* Error message specific styling */
.vf-contact-us .vf-element-error {
  color: var(--vf-danger) !important;
  padding-top: 8px !important; /* Increased padding for better separation */
  padding-bottom: 8px !important; /* Added bottom padding */
}

/* Ensure consistent spacing even when no errors are present */
.vf-contact-us .vf-element-wrapper {
  padding-bottom: 16px !important; /* Increased padding for better error containment */
}

/* Ensure form elements don't overflow their containers */
.vf-contact-us .vf-element {
  overflow: visible !important;
}

/* Make sure the form container can accommodate wider elements */
.vf-contact-us {
  overflow-x: visible !important;
  width: 100% !important;
}

/* Set 19.6px font size for all form elements (40% increase from 14px) */
.vf-contact-us,
.vf-contact-us * {
  font-size: 19.6px !important;
}

/* Specific styling for buttons */
.vf-contact-us .vf-btn,
.vf-contact-us button {
  font-size: 19.6px !important;
  padding: 14px 24px !important; /* Increased padding for larger fonts */
  min-height: 56px !important; /* Increased button height */
  width: 80% !important; /* 80% of frame width */
  max-width: 80% !important;
  font-family: 'Poppins' !important;
}

/* Placeholder text */
.vf-contact-us input::placeholder,
.vf-contact-us textarea::placeholder,
.vf-contact-us select::placeholder {
  font-size: 19.6px !important;
}

/* Dropdown options */
.vf-contact-us .vf-dropdown-option,
.vf-contact-us .vf-multiselect-option {
  font-size: 19.6px !important;
}

/* Center the Send button */
.vf-contact-us .vf-btn,
.vf-contact-us button {
  margin: 0 auto !important;
  display: block !important;
}

/* Center the "I Can Make It Myself!" button */
.vf-contact-us #make_button {
  margin: 0 auto !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
}
</style>