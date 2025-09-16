/**
 * External URLs used throughout the application
 */
export const EXTERNAL_URLS = {
  /**
   * MakerWorld URL for the CrutchAttach project
   * Contains 3D printing files and instructions
   */
  MAKERWORLD: 'https://makerworld.com/en/models/715070',
  
  /**
   * Instructables URL for the CrutchAttach project
   * Contains detailed step-by-step instructions
   */
  INSTRUCTABLES: 'https://www.instructables.com/CrutchAttach-3D-Printed-Crutch-Attachment-for-Sma/',
} as const

/**
 * Type for the external URLs object
 */
export type ExternalUrls = typeof EXTERNAL_URLS
