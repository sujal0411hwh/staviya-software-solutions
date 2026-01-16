/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: brandstorymilestones
 * Interface for BrandStoryMilestones
 */
export interface BrandStoryMilestones {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  milestoneTitle?: string;
  /** @wixFieldType text */
  narrativeText?: string;
  /** @wixFieldType number */
  year?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  milestoneImage?: string;
  /** @wixFieldType text */
  shortSummary?: string;
  /** @wixFieldType url */
  ctaUrl?: string;
}


/**
 * Collection ID: companystats
 * Interface for CompanyStats
 */
export interface CompanyStats {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  label?: string;
  /** @wixFieldType number */
  statisticValue?: number;
  /** @wixFieldType text */
  unit?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  iconImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  geometricIconImage?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType url */
  learnMoreUrl?: string;
}


/**
 * Collection ID: technologies
 * Interface for Technologies
 */
export interface Technologies {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  technologyName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  techIcon?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  officialWebsite?: string;
  /** @wixFieldType text */
  usageContext?: string;
}
