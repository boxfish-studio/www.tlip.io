import { browser } from "$app/env";
import { goto } from "$app/navigation";
import { activeSectionId } from "./store";

/**
 * Starts an Observer that checks the section that you are navigating.
 * @param container The HTML Element that is going to be observed.
 * @returns A disconnect function that stops the service.
 */
export const startActiveSectionObserver = (container: HTMLElement): (() => void) => {
    const visible: string[] = [];
    const arr: [] = [];
    const sectionElements: HTMLElement[] = arr.slice.call(container.querySelectorAll("section"));
    const sections: string[] = sectionElements?.map(s => s.id) ?? [];

    const intersectionObserver = new IntersectionObserver(
        entries => {
            for (const {
                target: { id },
                isIntersecting
            } of entries) {
                if (isIntersecting) {
                    if (sections.indexOf(id) < sections.indexOf(visible[0])) {
                        visible.unshift(id);
                    } else {
                        visible.push(id);
                    }
                } else {
                    const visiblePosition = visible.indexOf(id);
                    if (visiblePosition > -1) {
                        visible.splice(visiblePosition, 1);
                    }
                }
            }
            activeSectionId.set(visible[0]);
        },
        { threshold: [0], rootMargin: "-1px" }
    );

    for (const element of sectionElements) {
        intersectionObserver.observe(element);
    }

    return () => {
        activeSectionId.set(undefined);
        intersectionObserver.disconnect();
    };
};

/**
 * Receives an event from an anchor tag and scrolls to the section.
 * @param event - An event object of an anchor tag.
 * @param event.target - The target of the event.
 */
export const scrollIntoView = ({ target }): ((event: Event) => void) => {
    if (browser) {
        const targetID = target.getAttribute("href").replace("/", "");
        const el = document.querySelector(targetID);
        if (!el) {
            goto(target.href, { noscroll: true })
                .then(() => {
                    document.querySelector(targetID).scrollIntoView({
                        behavior: "smooth"
                    });
                })
                .catch(() => []);
            return;
        }
        el.scrollIntoView({
            behavior: "smooth"
        });
        window.history.replaceState(null, "", targetID);
    }
};
