export declare global {
    interface Window {
        Calendly: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }

    declare namespace NodeJS {
        interface ProcessEnv {
            GHOST_BLOG_URL: string;
            GHOST_BLOG_CONTENT_API_KEY: string;
        }
    }
}
