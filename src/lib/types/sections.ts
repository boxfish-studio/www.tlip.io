/**
 * A Link component.
 */
export interface Link {
    /**
     * The text that will be shown in the link.
     */
    title: string;
    /**
     * The url that the user will be redirected to.
     */
    url: string;
    /**
     * Adds the `a` tag `rel=”noopener noreferrer target="_blank"` if this property is true.
     */
    isExternal?: boolean;
    /**
     * The classes to be applied to the component.
     */
    classes?: string;
}

/**
 * An object with a title and a description.
 */
export interface Heading {
    /**
     * Heading Title.
     */
    title: string;
    /**
     * Heading Description.
     */
    description: string;
}
