export interface ProjectLink {
    label: string;
    url: string;
}

export interface ProjectOptions {
    slug?: string;
    thumbnailUrl?: string;
    summary?: string;
    role?: string;
    tools?: string[];
    year?: string;
    highlight?: string;
    featured?: boolean;
    breakdown?: string;
    videoUrl?: string;
    roleItems?: string[];
    detailItems?: string[];
    links?: ProjectLink[];
    screenshots?: string[];
}

export default class ProjectData {
    id: string;
    slug: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    thumbnailUrl: string;
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar
    summary: string;
    role: string;
    tools: string[];
    year: string;
    highlight: string;
    featured: boolean;
    breakdown: string;
    videoUrl: string;
    roleItems: string[];
    detailItems: string[];
    links: ProjectLink[];
    screenshots: string[];

    constructor(
        id: string,
        name: string,
        iconUrl: string,
        html: string,
        accentColor = "#000000",
        isHigh = false,
        isWide = false,
        options: ProjectOptions = {}
    ){
        this.id = id;
        this.slug = options.slug || id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.thumbnailUrl = options.thumbnailUrl || iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.summary = options.summary || "";
        this.role = options.role || "";
        this.tools = options.tools || [];
        this.year = options.year || "";
        this.highlight = options.highlight || "";
        this.featured = options.featured || false;
        this.breakdown = options.breakdown || this.summary;
        this.videoUrl = options.videoUrl || "";
        this.roleItems = options.roleItems || [];
        this.detailItems = options.detailItems || [];
        this.links = options.links || [];
        this.screenshots = options.screenshots || [];
    }
}
