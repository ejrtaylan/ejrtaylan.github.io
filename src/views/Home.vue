<template>
  <div class="home-page">
    <section class="hero page-shell" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="section-kicker">Game developer · UI/UX · Gameplay · Audio</p>
        <h1 id="hero-title">Hi There!</h1>
        <p class="hero-intro">
          I’m EJ Taylan, a game-development student and generalist based in Laguna, Philippines.
          I work across Unity and Unreal Engine, with a focus on player-facing systems and experiences.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#/" @click.prevent="scrollToSection('projects')">View my work</a>
          <a class="button button-secondary" href="d/resume.pdf" target="_blank" rel="noopener noreferrer">Download résumé</a>
        </div>
        <div class="availability"><span></span> Open to game-development opportunities</div>
      </div>

      <div class="hero-portrait" aria-label="Portrait of EJ Taylan">
        <div class="portrait-frame">
          <img src="img/photo.png" alt="EJ Taylan" width="300" height="300">
        </div>
        <div class="portrait-caption">
          <strong>BS Interactive Entertainment</strong>
          <span>DLSU–Laguna · Expected 2027</span>
        </div>
      </div>
    </section>

    <section id="projects" class="projects-section page-shell" aria-labelledby="projects-title">
      <p class="section-kicker">Selected work</p>
      <h2 id="projects-title" class="section-title">Games I’ve helped bring to life.</h2>
      <p class="section-intro">
        Team projects where I owned concrete systems—from interface and sound to gameplay mechanics and level design.
      </p>

      <div class="project-list">
        <article v-for="(project, index) in projects" :key="project.id" class="project-card">
          <router-link class="project-image-link" :to="`/projects/${project.slug}`" :aria-label="`View ${project.name} case study`">
            <img
              :src="project.thumbnailUrl"
              :alt="`${project.name} key art`"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :class="`project-image-${project.slug}`"
            >
            <span class="project-index">PROJECT_0{{ index + 1 }}</span>
          </router-link>

          <div class="project-info">
            <div class="project-meta">
              <span>{{ project.year }}</span>
              <span>{{ project.highlight }}</span>
            </div>
            <h3>{{ project.name }}</h3>
            <p class="project-summary">{{ project.summary }}</p>

            <div class="role-block">
              <span>My role</span>
              <strong>{{ project.role }}</strong>
            </div>

            <ul class="tag-list" :aria-label="`${project.name} tools and disciplines`">
              <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
            </ul>

            <router-link class="text-link" :to="`/projects/${project.slug}`">
              View case study <span aria-hidden="true">↗</span>
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <section id="skills" class="skills-section" aria-labelledby="skills-title">
      <div class="page-shell skills-layout">
        <div>
          <p class="section-kicker">How I contribute</p>
          <h2 id="skills-title" class="section-title">A generalist with a player-first lens.</h2>
          <p class="section-intro">
            I enjoy working where implementation and player experience meet: turning design intent into readable interfaces,
            reliable systems, and satisfying moment-to-moment feedback.
          </p>
        </div>

        <div class="skill-groups">
          <div class="skill-group">
            <span class="skill-number">01</span>
            <div>
              <h3>Programming</h3>
              <p>C#, C, C++, Python, SQL and UE5 Blueprints</p>
            </div>
          </div>
          <div class="skill-group">
            <span class="skill-number">02</span>
            <div>
              <h3>Game development</h3>
              <p>Unity, Unreal Engine 5, OpenGL and SFML</p>
            </div>
          </div>
          <div class="skill-group">
            <span class="skill-number">03</span>
            <div>
              <h3>Player experience</h3>
              <p>UI/UX, audio systems, gameplay mechanics and level design</p>
            </div>
          </div>
          <div class="skill-group">
            <span class="skill-number">04</span>
            <div>
              <h3>Production tools</h3>
              <p>Visual Studio, GitHub, CMake, Audacity and LMMS</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="resume" class="resume-section page-shell" aria-labelledby="resume-title">
      <div class="resume-heading">
        <div>
          <p class="section-kicker">Résumé snapshot</p>
          <h2 id="resume-title" class="section-title">Education and Certifications</h2>
        </div>
        <a class="button button-secondary" href="d/resume.pdf" target="_blank" rel="noopener noreferrer">Open full résumé</a>
      </div>

      <div class="resume-grid">
        <article class="resume-card resume-card-wide">
          <span class="resume-label">Education</span>
          <h3>De La Salle University–Laguna</h3>
          <p>BS Interactive Entertainment, major in Game Development</p>
          <span class="resume-date">Expected 2027</span>
        </article>
        <article class="resume-card">
          <span class="resume-label">Certification</span>
          <h3>Unity Junior Programmer</h3>
          <a href="https://www.credly.com/badges/d23b6cf7-05bd-4dc4-8882-119d3d5cb3c4" target="_blank" rel="noopener noreferrer">View credential ↗</a>
        </article>
        <article class="resume-card">
          <span class="resume-label">Certification</span>
          <h3>Unity Essentials</h3>
          <a href="https://www.credly.com/badges/f80f1ff4-5a88-40d6-b1dd-df3f8f46e713" target="_blank" rel="noopener noreferrer">View credential ↗</a>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-section page-shell" aria-labelledby="contact-title">
      <div class="contact-panel">
        <div>
          <p class="section-kicker">Let’s build something</p>
          <h2 id="contact-title">Looking for a game developer?</h2>
          <p>I’m currently open to internships, junior roles, and collaborative game projects.</p>
        </div>
        <div class="contact-links">
          <a href="mailto:ejrtaylan@gmail.com"><i class="fa fa-envelope-o fa-fw" aria-hidden="true"></i><span>Email</span></a>
          <a href="https://www.linkedin.com/in/ejrtaylan/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin fa-fw" aria-hidden="true"></i><span>LinkedIn</span></a>
          <a href="https://github.com/ejrtaylan" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-fw" aria-hidden="true"></i><span>GitHub</span></a>
          <a href="https://trufym.itch.io" target="_blank" rel="noopener noreferrer"><i class="fa fa-gamepad fa-fw" aria-hidden="true"></i><span>itch.io</span></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gameProjectsData from "@/data/GameProjectsData";
import Helpers from "@/helpers";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      projects: gameProjectsData.filter(project => project.featured)
    };
  },
  mounted() {
    Helpers.updateMetadata(
      "EJ Taylan - Game Developer",
      "Game developer portfolio of EJ Taylan - Unity, Unreal Engine, UI/UX, gameplay and audio."
    );

    const requestedSection = Helpers.consumeSectionScroll();
    if (requestedSection) {
      this.$nextTick(() => Helpers.scrollToSection(requestedSection));
    }
  },
  methods: {
    scrollToSection(sectionId: string) {
      Helpers.scrollToSection(sectionId);
    }
  }
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

section {
  scroll-margin-top: 84px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(260px, 0.55fr);
  align-items: center;
  gap: clamp(40px, 8vw, 110px);
  min-height: calc(100vh - 73px);
  padding-top: 72px;
  padding-bottom: 90px;
}

.hero h1 {
  max-width: 840px;
  margin: 0;
  font-size: clamp(3.2rem, 7.8vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.92;
}

.hero-intro {
  max-width: 760px;
  margin: 32px 0 0;
  color: @mutedTextColor;
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  line-height: 1.45;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid @lineColor;
  border-radius: 2px;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  font-family: 'Oxanium', 'Karla', Helvetica, Arial, sans-serif;
  font-size: 0.86rem;
  font-weight: 700;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
  border-color: fade(@accentColor, 65%);
}

.button-primary {
  border-color: @accentColor;
  background: @accentColor;
  color: #06110f;
}

.button-secondary {
  background: fade(#ffffff, 3%);
}

.availability {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  color: @mutedTextColor;
  font-size: 0.84rem;
}

.availability span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: @secondaryAccentColor;
  box-shadow: 0 0 0 5px fade(@secondaryAccentColor, 13%);
}

.hero-portrait {
  justify-self: end;
  width: 100%;
  max-width: 330px;
}

.portrait-frame {
  position: relative;
  overflow: hidden;
  border: 1px solid @lineColor;
  border-radius: 50% 50% 2px 2px;
  background: @surfaceRaisedColor;
}

.portrait-frame::before {
  position: absolute;
  inset: 18px;
  border: 1px solid fade(@accentColor, 35%);
  border-radius: inherit;
  content: "";
}

.portrait-frame img {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
}

.portrait-caption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 18px 4px 0;
  color: @mutedTextColor;
  font-size: 0.82rem;
}

.portrait-caption strong {
  color: @textColor;
}

.projects-section {
  padding-top: 120px;
  padding-bottom: 150px;
}

.project-list {
  display: grid;
  gap: 110px;
  margin-top: 70px;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  align-items: center;
  gap: clamp(36px, 7vw, 90px);
}

.project-card:nth-child(even) .project-image-link {
  order: 2;
}

.project-image-link {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 11;
  border: 1px solid @lineColor;
  border-radius: 2px;
  background: @surfaceColor;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
}

.project-image-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 28%;
  transition: transform 0.45s ease;
}

.project-image-link .project-image-clockwork-warden {
  object-position: center 5%;
}

.project-image-link:hover img,
.project-image-link:focus-visible img {
  transform: scale(1.025);
}

.project-index {
  position: absolute;
  right: 18px;
  bottom: 14px;
  z-index: 1;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-family: 'Oxanium', 'Karla', Helvetica, Arial, sans-serif;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  color: @accentColor;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-meta span + span::before {
  margin-right: 18px;
  color: @lineColor;
  content: "/";
}

.project-info h3 {
  margin: 16px 0 0;
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  letter-spacing: -0.045em;
  line-height: 1;
  transition: text-shadow 0.2s ease, transform 0.2s ease;
}

.project-card:hover .project-info h3,
.project-card:focus-within .project-info h3 {
  text-shadow: 2px 0 0 fade(@secondaryAccentColor, 55%), -2px 0 0 fade(@accentColor, 45%);
  transform: translateX(2px);
}

.project-summary {
  margin: 22px 0 0;
  color: @mutedTextColor;
}

.role-block {
  display: grid;
  gap: 4px;
  margin-top: 24px;
  padding-left: 16px;
  border-left: 2px solid @accentColor;
}

.role-block span {
  color: @mutedTextColor;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.role-block strong {
  font-size: 0.96rem;
  font-weight: 600;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.tag-list li {
  padding: 5px 10px;
  border: 1px solid @lineColor;
  border-radius: 2px;
  color: @mutedTextColor;
  font-size: 0.74rem;
}

.text-link {
  display: inline-flex;
  gap: 9px;
  margin-top: 28px;
  color: @textColor;
  font-size: 0.86rem;
  font-weight: 700;
}

.text-link span {
  color: @accentColor;
  transition: transform 0.2s ease;
}

.text-link:hover span,
.text-link:focus-visible span {
  transform: translate(2px, -2px);
}

.skills-section {
  padding: 130px 0;
  border-top: 1px solid @lineColor;
  border-bottom: 1px solid @lineColor;
  background: @bodyBgColor;
}

.skills-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: clamp(50px, 10vw, 130px);
}

.skill-groups {
  border-top: 1px solid @lineColor;
}

.skill-group {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid @lineColor;
}

.skill-number {
  color: @accentColor;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.skill-group h3 {
  margin: 0;
  font-size: 1.2rem;
}

.skill-group p {
  margin: 5px 0 0;
  color: @mutedTextColor;
  font-size: 0.9rem;
}

.resume-section {
  padding-top: 130px;
  padding-bottom: 140px;
}

.resume-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
}

.resume-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 60px;
}

.resume-card {
  min-height: 210px;
  padding: 30px;
  border: 1px solid @lineColor;
  border-radius: 2px;
  background: @surfaceColor;
  box-shadow: inset 3px 0 0 fade(@accentColor, 55%);
}

.resume-card-wide {
  grid-column: span 2;
}

.resume-label,
.resume-date {
  color: @accentColor;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.resume-card h3 {
  margin: 42px 0 5px;
  font-size: clamp(1.35rem, 3vw, 2.2rem);
}

.resume-card p {
  margin: 0 0 20px;
  color: @mutedTextColor;
}

.resume-card a {
  display: inline-block;
  margin-top: 18px;
  color: @mutedTextColor;
  font-size: 0.86rem;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.contact-section {
  padding-bottom: 130px;
}

.contact-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: 70px;
  padding: clamp(34px, 7vw, 80px);
  border: 1px solid fade(@accentColor, 36%);
  border-radius: 2px;
  background: @surfaceColor;
  clip-path: polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px));
}

.contact-panel h2 {
  max-width: 680px;
  margin: 0;
  font-size: clamp(2.4rem, 5.8vw, 5rem);
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.contact-panel p:not(.section-kicker) {
  max-width: 570px;
  margin: 24px 0 0;
  color: @mutedTextColor;
}

.contact-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid @lineColor;
}

.contact-links a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  padding: 15px 2px;
  border-bottom: 1px solid @lineColor;
  font-weight: 700;
}

.contact-links i {
  width: 24px;
  color: @accentColor;
  font-size: 1.1rem;
  text-align: center;
}

@media only screen and (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-portrait {
    display: none;
  }

  .project-card,
  .skills-layout,
  .contact-panel {
    grid-template-columns: 1fr;
  }

  .project-card:nth-child(even) .project-image-link {
    order: initial;
  }
}

@media only screen and (max-width: 620px) {
  .hero {
    padding-top: 76px;
    padding-bottom: 70px;
  }

  .hero h1 {
    font-size: clamp(3rem, 15vw, 4.6rem);
  }

  .hero-actions .button {
    width: 100%;
  }

  .projects-section,
  .resume-section {
    padding-top: 90px;
    padding-bottom: 100px;
  }

  .project-list {
    gap: 72px;
    margin-top: 48px;
  }

  .project-card {
    gap: 28px;
  }

  .project-image-link {
    aspect-ratio: 4 / 3;
  }

  .project-meta {
    display: grid;
    gap: 3px;
  }

  .project-meta span + span::before {
    display: none;
  }

  .skills-section {
    padding: 90px 0;
  }

  .skills-layout {
    gap: 50px;
  }

  .resume-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .resume-grid {
    grid-template-columns: 1fr;
    margin-top: 42px;
  }

  .resume-card-wide {
    grid-column: auto;
  }

  .contact-section {
    padding-bottom: 90px;
  }

  .contact-panel {
    gap: 42px;
  }
}
</style>
