import ProjectData from '@/data/ProjectData'

export default [
    //-----------------------------------------------------------------CLOCKWORK WARDEN-----------------------------------------------------------------------
    new ProjectData("project-1", "Clockwork Warden", "img/projects/clockwork-warden-poster.png", 
    `
    <div class="paragraph">
     <strong>Clockwork Warden</strong> is a 2.5D hack-and-slash roguelike based on Hades and built in Unity. 
     Take on the role of the Clockwork Warden, plunging into the depths of the Movement to detain the deviant Clockworks.
     Built over the course of a year by my group Lethal Tempo, the game won first place in an inter-class competition held in our IEPRJ course.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/dvfld1waako" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="two-paragraphs">
        <p>
        My Role:
            <ul>
            <li>Main UI/UX, sound systems, and sprite developer</li>
            <li>Developed insta-kill mechanic for early stealth-based prototype</li>
            <li>Worked on player abilities' selection and implementation</li>
            <li>Implemented every in-game sprite and animation</li> 
            </ul>
        </p>

        <p>
        Project Details:
            <ul>
            <li>Built in Unity 2023 for Windows, using C#</li>
            <li>2.5D isometric perspective</li>
            <li>Has 4 weapon skill trees, allowing players to experiment with different builds</li>
            <li>Multiple levels with unique layouts and environmental hazards, including a boss level</li>
            </ul>
        </p>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://josiahaviso.itch.io/clockwork-warden" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/DevNikz/Project-Hades" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/clockwork-cronos.png" alt="Boss level Screenshot" />
        <img class="pc-screenshot" src="img/projects/clockwork-level.png" alt="Normal level Screenshot" />
    </div>
    `, "#977005", true, false, {
        slug: "clockwork-warden",
        thumbnailUrl: "img/projects/thumbnails/clockwork-warden.jpg",
        summary: "A 2.5D hack-and-slash roguelike built around expressive combat, branching weapon skills, and an isometric clockwork world.",
        role: "UI/UX, audio systems, abilities, sprites and animation",
        tools: ["Unity 2023", "C#", "UI/UX", "Audio"],
        year: "2025",
        highlight: "1st place — IEPRJ inter-class competition",
        featured: true,
        breakdown: "Clockwork Warden is a 2.5D hack-and-slash roguelike inspired by Hades and built in Unity. Players descend into the Movement as the Clockwork Warden, detaining deviant Clockworks while developing distinct weapon builds. Our team, Lethal Tempo, built the game over the course of a year.",
        videoUrl: "https://www.youtube.com/embed/dvfld1waako",
        roleItems: [
            "Led UI/UX, sound systems, and sprite implementation",
            "Developed an instant-kill mechanic for the early stealth prototype",
            "Worked on player ability selection and implementation",
            "Implemented every in-game sprite and animation"
        ],
        detailItems: [
            "Built in Unity 2023 for Windows using C#",
            "2.5D isometric hack-and-slash roguelike",
            "Four weapon skill trees for experimenting with different builds",
            "Multiple levels with unique layouts, hazards, and a boss encounter"
        ],
        links: [
            { label: "Play on itch.io", url: "https://josiahaviso.itch.io/clockwork-warden" },
            { label: "View source on GitHub", url: "https://github.com/DevNikz/Project-Hades" }
        ],
        screenshots: [
            "img/projects/screenshots/clockwork-cronos.jpg",
            "img/projects/screenshots/clockwork-level.jpg"
        ]
    }),

    //-----------------------------------------------------------------BALETE FALLS-----------------------------------------------------------------------
    new ProjectData("project-2", "Balete Falls", "img/projects/balete-falls-poster.png", `
    <div class="paragraph">
        <strong>Balete Falls</strong> is a 3D survival horror game based around the myth of the Kapre. You play as Hazel Pineda, the lead engineer of BBDC,
        who must travel through the abandoned Balete Falls park where a Kapre is rumored to lurk. The game was made as our CAPSTONE project and my group, Dark Harvest Studios,
        currently plans to showcase the game at PGDX 2026.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/EOL0abgK6Ms" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="two-paragraphs">
        <p>
        My Role:
            <ul>
            <li>Main UI/UX developer</li>
            <li>Developed inspection system (based on Resident Evil's inspection system) using Unreal Engine's blueprints</li>
            <li>Implemented early white room design in-game, worked on the layout of the maze in the final world</li>
            </ul>
        </p>

        <p>
        Project Details:
            <ul>
            <li>Built in Unreal Engine 5.6 for Windows, using C++ and Blueprints</li>
            <li>Survival horror game with a focus on environmental immersion</li>
            <li>Developed for a research paper concerning Cultural Heritage Appreciation and Environmental Concern among young adults</li>
            <li>Beautiful and immersive environment with handcrafted assets</li>
            </ul>
        </p>
    </div>

    <div class="paragraph">
      <div class="notice">
        Balete Falls is an active capstone project. Development materials are currently kept private while the team prepares its showcase build.
      </div>
    </div>
    `, "#383838", true, false, {
        slug: "balete-falls",
        thumbnailUrl: "img/projects/thumbnails/balete-falls.jpg",
        summary: "A Filipino survival-horror game about exploring an abandoned park haunted by the myth of the Kapre.",
        role: "UI/UX, inspection system, level blockout and maze layout",
        tools: ["Unreal Engine 5.6", "C++", "Blueprints", "Level Design"],
        year: "2026",
        highlight: "Capstone project — planned for PGDX 2026",
        featured: true,
        breakdown: "Balete Falls is a 3D survival-horror game based on the myth of the Kapre. Players take the role of Hazel Pineda, the lead engineer of BBDC, and explore an abandoned park where a Kapre is rumored to lurk. The game is being developed by Dark Harvest Studios as our capstone project.",
        videoUrl: "https://www.youtube.com/embed/EOL0abgK6Ms",
        roleItems: [
            "Led UI/UX development",
            "Built a Resident Evil-inspired inspection system with Unreal Engine Blueprints",
            "Implemented the early white-room design",
            "Contributed to the final maze layout"
        ],
        detailItems: [
            "Built in Unreal Engine 5.6 for Windows using C++ and Blueprints",
            "Survival horror focused on environmental immersion",
            "Developed alongside research into cultural heritage appreciation and environmental concern",
            "Features a handcrafted environment inspired by Filipino folklore"
        ]
    }),

    //-----------------------------------------------------------------BUBBLE CRASH-----------------------------------------------------------------------
    new ProjectData("project-3", "Bubble Crash", "img/projects/bubble-crash-poster.png", `
    <div class="paragraph">
        <strong>Bubble Crash</strong> is a point-and-click stock market simulator where you must make money by buying and selling stocks in order to pay off a loan to the mafia.
        The player must use the connections they have in order to manipulate the stock market by orchestrating certain events. This game is my group's submission to Global Game Jam 2025.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Ex5qFfslDyQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="two-paragraphs">
        <p>
        My Role:
            <ul>
            <li>Main UI/UX developer and level designer</li>
            <li>Helped write narratives for the in-game events</li>
            </ul>
        </p>

        <p>
        Project Details:
            <ul>
            <li>Yes</li>
            </ul>
        </p>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://devnikz.itch.io/bubble-crash" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/JoshAviso/GlobalGameJam" target="_blank">GitHub</a>.
        Global Game Jam entry <a href="https://globalgamejam.org/games/2025/bubble-crash-7" target="_blank">here</a>.
        </div>
    </div>

    `, "#1643ab", false, false, {
        slug: "bubble-crash",
        thumbnailUrl: "img/projects/thumbnails/bubble-crash.jpg",
        summary: "A darkly comic stock-market strategy game made for Global Game Jam 2025, where every connection can move the market.",
        role: "UI/UX, level design and narrative support",
        tools: ["Unity", "C#", "UI/UX", "Game Jam"],
        year: "2025",
        highlight: "Global Game Jam 2025 submission",
        featured: true,
        breakdown: "Bubble Crash is a point-and-click stock-market simulator where players must earn enough money to repay a mafia loan. Connections can be used to orchestrate events and manipulate stock prices, turning social decisions into market strategy. The project was created for Global Game Jam 2025.",
        videoUrl: "https://www.youtube.com/embed/Ex5qFfslDyQ",
        roleItems: [
            "Led UI/UX development",
            "Worked on level design",
            "Helped write the narratives behind in-game events"
        ],
        detailItems: [
            "Built in Unity using C#",
            "Point-and-click stock-market strategy game",
            "Event-driven market manipulation system",
            "Created as a team project for Global Game Jam 2025"
        ],
        links: [
            { label: "Play on itch.io", url: "https://devnikz.itch.io/bubble-crash" },
            { label: "View source on GitHub", url: "https://github.com/JoshAviso/GlobalGameJam" },
            { label: "View Global Game Jam entry", url: "https://globalgamejam.org/games/2025/bubble-crash-7" }
        ]
    }),

    //-----------------------------------------------------------------CARPIO-----------------------------------------------------------------------
    new ProjectData("project-4", "Carpio", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Carpio</strong> is a personal project I have as a very early work in progress. It's a 2D sidescroller beat 'em up based on the myth of Bernardo Carpio.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        <div class="notice">
        Carpio is an early personal prototype and is not yet available publicly.
        </div>
    </div>
    `, "#e80fb7", false, false, {
        slug: "carpio",
        summary: "An early 2D side-scrolling beat 'em up inspired by the legend of Bernardo Carpio.",
        role: "Solo developer",
        tools: ["Unity", "C#", "2D"],
        year: "In development",
        breakdown: "Carpio is an early personal project: a 2D side-scrolling beat 'em up inspired by the Filipino legend of Bernardo Carpio.",
        roleItems: ["Solo design and development"],
        detailItems: ["Early work in progress", "2D side-scrolling beat 'em up", "Inspired by Filipino mythology"]
    }),
];
