export default class Helpers {

    private static pendingSectionId = "";

    static queueSectionScroll = (sectionId: string) => {
        Helpers.pendingSectionId = sectionId;
    }

    static consumeSectionScroll = () => {
        const sectionId = Helpers.pendingSectionId;
        Helpers.pendingSectionId = "";
        return sectionId;
    }

    static scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) {
            return false;
        }

        section.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
    }

    static updateMetadata = (title: string, description: string, imageUrl = "img/avatar-og.png") => {
        document.title = title;

        Helpers.setMetaContent('meta[name="description"]', description);
        Helpers.setMetaContent('meta[property="og:title"]', title);
        Helpers.setMetaContent('meta[property="og:description"]', description);
        Helpers.setMetaContent('meta[name="twitter:title"]', title);
        Helpers.setMetaContent('meta[name="twitter:description"]', description);

        const siteUrl = process.env.VUE_APP_PRODUCTION_URL || window.location.origin;
        const absoluteImageUrl = `${siteUrl.replace(/\/$/, "")}/${imageUrl.replace(/^\//, "")}`;
        Helpers.setMetaContent('meta[property="og:image"]', absoluteImageUrl);
        Helpers.setMetaContent('meta[name="twitter:image"]', absoluteImageUrl);
    }

    static preloadImages = (urls: string[]) => {
        urls.forEach(url => {
            Helpers.preloadImage(url);
        });
    }

    private static preloadImage = (url: string) => {
        const image = new Image();
        image.src = url;
    }

    private static setMetaContent = (selector: string, content: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute("content", content);
        }
    }
}
