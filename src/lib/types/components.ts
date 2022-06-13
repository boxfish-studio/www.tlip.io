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

