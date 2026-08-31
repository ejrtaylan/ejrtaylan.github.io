<template>
  <header class="site-header">
    <div class="header-inner">
      <nav class="nav-bar" aria-label="Main navigation">
        <a href="#/" @click.prevent="navigateToSection('projects')">Projects</a>
        <a href="#/" @click.prevent="navigateToSection('skills')">Skills</a>
        <a href="#/" @click.prevent="navigateToSection('resume')">Resume</a>
        <a href="#/" @click.prevent="navigateToSection('contact')">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Helpers from "@/helpers";

export default Vue.extend({
  name: "Header",
  methods: {
    navigateToSection(sectionId: string) {
      if (this.$route.path === "/") {
        Helpers.scrollToSection(sectionId);
        return;
      }

      Helpers.queueSectionScroll(sectionId);
      this.$router.push("/");
    }
  }
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  width: 100%;
  border-bottom: 1px solid fade(@accentColor, 28%);
  background: fade(@contentBgColor, 90%);
  backdrop-filter: blur(18px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 40px);
  max-width: 1180px;
  min-height: 72px;
  margin: 0 auto;
}

.nav-bar {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-bar a {
  position: relative;
  color: @mutedTextColor;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  white-space: nowrap;
  font-family: 'Oxanium', 'Karla', Helvetica, Arial, sans-serif;
  transition: color 0.2s ease, text-shadow 0.2s ease;
}

.nav-bar a::before,
.nav-bar a::after {
  color: @accentColor;
  opacity: 0.45;
}

.nav-bar a::before {
  margin-right: 5px;
  content: "[";
}

.nav-bar a::after {
  margin-left: 5px;
  content: "]";
}

.nav-bar a:hover,
.nav-bar a:focus-visible {
  color: @textColor;
  text-shadow: 2px 0 0 fade(@secondaryAccentColor, 55%);
}

.nav-bar a:hover::before,
.nav-bar a:hover::after,
.nav-bar a:focus-visible::before,
.nav-bar a:focus-visible::after {
  opacity: 1;
}

@media only screen and (max-width: 620px) {
  .header-inner {
    width: calc(100% - 28px);
    min-height: 64px;
  }

  .nav-bar a:nth-child(2),
  .nav-bar a:nth-child(3) {
    display: none;
  }

  .nav-bar {
    gap: 18px;
  }
}

</style>
