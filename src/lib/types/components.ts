/**
 *
 */
export interface Section {
    /**
     *
     */
    id: string;
    /**
     *
     */
    component: unknown;
    /**
     *
     */
    lightModeNavbar?: boolean;
}

/**
 *
 */
export interface Button {
    /**
     *
     */
    title: string;
    /**
     *
     */
    isExternal?: boolean;
    /**
     *
     */
    url: string;
    /**
     *
     */
    secondary?: boolean;
    /**
     *
     */
    small?: boolean;
    /**
     *
     */
    disabled?: boolean;
    /**
     *
     */
    classes?: string;
}
/**
 *
 */

/**
 *
 */
export interface Faq {
    /**
     *
     */
    title?: string;

    /**
     *
     */
    description?: string;

    /**
     *
     */
    sections: FaqSection[];
}

/**
 *
 */
export interface FaqSection {
    /**
     *
     */
    id: string;
    /**
     *
     */
    title: string;
    /**
     *
     */
    description?: string;
    /**
     *
     */
    subsections?: FaqSection[];
}
