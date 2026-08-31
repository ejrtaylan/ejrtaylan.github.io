<template>
  <div v-if="project" class="project-page" :style="{ borderColor: project.accentColor }">
    <section class="project-hero page-shell">
      <a class="back-link" href="#/" @click.prevent="returnToProjects">← All projects</a>

      <div class="project-heading">
        <div>
          <p class="project-eyebrow">{{ project.year }} · {{ project.highlight }}</p>
          <h1>{{ project.name }}</h1>
          <p class="project-summary">{{ project.summary }}</p>
        </div>

        <div class="project-role">
          <span>My contribution</span>
          <strong>{{ project.role }}</strong>
          <ul>
            <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
          </ul>
        </div>
      </div>

    </section>

    <section
      class="case-study page-shell"
      :class="{ 'has-screenshots': project.screenshots.length }"
    >
      <aside class="media-column">
        <figure
          class="project-artwork-frame"
          :class="`project-artwork-frame-${project.slug}`"
        >
          <img
            :src="project.thumbnailUrl"
            :alt="`${project.name} project artwork`"
            decoding="async"
          >
        </figure>

        <div v-if="project.videoUrl" class="trailer-block">
          <p class="content-label">Trailer</p>
          <div class="video-frame">
            <iframe
              :src="project.videoUrl"
              :title="`${project.name} trailer`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </aside>

      <article class="written-column">
        <section class="written-section breakdown-section">
          <p class="section-kicker">Project breakdown</p>
          <h2>What we made</h2>
          <p>{{ project.breakdown }}</p>
        </section>

        <section class="written-section">
          <p class="content-label">Project details</p>
          <ul class="detail-list">
            <li v-for="detail in project.detailItems" :key="detail">{{ detail }}</li>
          </ul>
        </section>

        <section class="written-section">
          <p class="content-label">My role</p>
          <ul class="detail-list">
            <li v-for="roleItem in project.roleItems" :key="roleItem">{{ roleItem }}</li>
          </ul>
        </section>

        <section v-if="project.links.length" class="written-section project-links">
          <p class="content-label">Project links</p>
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
          >{{ link.label }} <span aria-hidden="true">↗</span></a>
        </section>
      </article>

    </section>

    <section v-if="project.screenshots.length" class="screenshot-section page-shell">
      <p class="content-label">Gameplay</p>
      <div class="screenshot-gallery">
        <img
          v-for="(screenshot, index) in project.screenshots"
          :key="screenshot"
          :src="screenshot"
          :alt="`${project.name} gameplay screenshot ${index + 1}`"
          loading="lazy"
          decoding="async"
        >
      </div>
    </section>

    <nav class="project-navigation page-shell" aria-label="Project navigation">
      <a href="#/" @click.prevent="returnToProjects">Back to selected work</a>
      <router-link v-if="nextProject" :to="`/projects/${nextProject.slug}`">Next: {{ nextProject.name }} →</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gameProjectsData from "@/data/GameProjectsData";
import ProjectData from "@/data/ProjectData";
import Helpers from "@/helpers";

export default Vue.extend({
  name: "ProjectDetails",
  computed: {
    project(): ProjectData | undefined {
      return gameProjectsData.find(item => item.slug === this.$route.params.slug);
    },
    nextProject(): ProjectData | undefined {
      const currentProject = this.project;
      if (!currentProject) {
        return undefined;
      }

      const featuredProjects = gameProjectsData.filter(item => item.featured);
      const currentIndex = featuredProjects.findIndex(item => item.id === currentProject.id);
      return featuredProjects[(currentIndex + 1) % featuredProjects.length];
    }
  },
  methods: {
    returnToProjects() {
      Helpers.queueSectionScroll("projects");
      this.$router.push("/");
    }
  },
  watch: {
    project: {
      immediate: true,
      handler(project: ProjectData | undefined) {
        if (!project) {
          this.$router.replace('/404');
          return;
        }

        Helpers.updateMetadata(
          `${project.name} — EJ Taylan`,
          project.summary,
          project.iconUrl
        );
      }
    }
  }
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.project-page {
  border-top: 3px solid;
}

.project-hero {
  padding-top: 54px;
}

.back-link {
  display: inline-block;
  color: @mutedTextColor;
  font-size: 0.84rem;
  font-weight: 700;
  transition: color 0.2s ease;
}

.back-link:hover,
.back-link:focus-visible {
  color: @textColor;
}

.project-heading {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
  align-items: end;
  gap: 70px;
  padding: 72px 0 54px;
}

.project-eyebrow {
  margin: 0 0 14px;
  color: @accentColor;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-heading h1 {
  margin: 0;
  font-size: clamp(3.4rem, 8vw, 7.8rem);
  letter-spacing: -0.065em;
  line-height: 0.9;
}

.project-summary {
  max-width: 720px;
  margin: 30px 0 0;
  color: @mutedTextColor;
  font-size: 1.12rem;
}

.project-role {
  padding: 24px;
  border: 1px solid @lineColor;
  border-radius: 2px;
  background: @surfaceColor;
  box-shadow: inset 3px 0 0 fade(@accentColor, 55%);
}

.project-role > span {
  display: block;
  margin-bottom: 8px;
  color: @accentColor;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-role strong {
  display: block;
  line-height: 1.35;
}

.project-role ul {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.project-role li {
  padding: 4px 9px;
  border: 1px solid @lineColor;
  border-radius: 2px;
  color: @mutedTextColor;
  font-size: 0.7rem;
}

.case-study {
  display: grid;
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1.18fr);
  align-items: start;
  gap: clamp(42px, 8vw, 100px);
  padding-top: 30px;
  padding-bottom: 110px;
}

.case-study.has-screenshots {
  padding-bottom: 54px;
}

.media-column {
  display: grid;
  min-width: 0;
  gap: 34px;
}

.project-artwork-frame {
  overflow: hidden;
  aspect-ratio: 4 / 5;
  margin: 0;
  border: 1px solid @lineColor;
  border-radius: 2px;
  background: @surfaceColor;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
}

.project-artwork-frame-balete-falls {
  aspect-ratio: 1397 / 2048;
}

.project-artwork-frame-bubble-crash {
  aspect-ratio: 16 / 9;
}

.project-artwork-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.content-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: @accentColor;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  font-family: 'Oxanium', 'Karla', Helvetica, Arial, sans-serif;
}

.content-label::before {
  color: @secondaryAccentColor;
  content: "//";
}

.video-frame {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border: 1px solid @lineColor;
  border-radius: 2px;
  background: #000;
}

.video-frame iframe {
  display: block;
  width: 100%;
  height: 100%;
}

.written-column {
  min-width: 0;
  border-top: 1px solid @lineColor;
}

.written-section {
  padding: 34px 0;
  border-bottom: 1px solid @lineColor;
}

.breakdown-section {
  padding-top: 0;
}

.breakdown-section h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.04em;
  line-height: 1;
}

.breakdown-section > p:last-child {
  margin: 24px 0 0;
  color: @mutedTextColor;
  font-size: 1.04rem;
}

.detail-list {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.detail-list li {
  position: relative;
  padding-left: 22px;
  color: @mutedTextColor;
}

.detail-list li::before {
  position: absolute;
  top: 0.7em;
  left: 0;
  width: 7px;
  height: 2px;
  background: @accentColor;
  content: "";
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.project-links .content-label {
  width: 100%;
}

.project-links a {
  padding: 9px 13px;
  border: 1px solid @lineColor;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 700;
  transition: border-color 0.2s ease;
}

.project-links a:hover,
.project-links a:focus-visible {
  border-color: @accentColor;
}

.project-links span {
  margin-left: 4px;
  color: @accentColor;
}

.screenshot-section {
  padding-bottom: 110px;
  border-top: 1px solid @lineColor;
}

.screenshot-section > .content-label {
  margin-top: 30px;
}

.screenshot-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.screenshot-gallery img {
  display: block;
  min-width: 0;
  width: 100%;
  height: auto;
  border: 1px solid @lineColor;
  border-radius: 2px;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}

.project-navigation {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 34px;
  padding-bottom: 70px;
  border-top: 1px solid @lineColor;
  font-size: 0.86rem;
  font-weight: 700;
}

.project-navigation a:last-child {
  color: @accentColor;
  text-align: right;
}

@media only screen and (max-width: 760px) {
  .project-heading {
    grid-template-columns: 1fr;
    gap: 36px;
    padding-top: 50px;
  }

  .project-heading h1 {
    font-size: clamp(3.3rem, 17vw, 5.4rem);
  }

  .case-study {
    grid-template-columns: 1fr;
    gap: 54px;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .case-study.has-screenshots {
    padding-bottom: 44px;
  }

  .media-column {
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
  }

  .screenshot-gallery {
    grid-template-columns: 1fr;
  }

  .screenshot-section {
    padding-bottom: 80px;
  }

  .project-navigation {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-navigation a:last-child {
    text-align: left;
  }
}
</style>
