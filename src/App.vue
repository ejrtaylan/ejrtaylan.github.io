<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});
</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0;
  background-color: @bodyBgColor;
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
  background: @contentBgColor;
  color: @textColor;
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  line-height: 1.65;
}

h1,
h2,
h3,
.section-kicker {
  font-family: 'Oxanium', 'Karla', Helvetica, Arial, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

img {
  max-width: 100%;
}

.main-content {
  min-height: calc(100vh - 160px);
}

.page-shell {
  width: calc(100% - 40px);
  max-width: 1180px;
  margin: 0 auto;
}

.section-kicker {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 12px;
  color: @accentColor;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.section-kicker::before {
  color: @secondaryAccentColor;
  content: "//";
}

.section-title {
  max-width: 760px;
  margin: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1;
}

.section-intro {
  max-width: 660px;
  margin: 22px 0 0;
  color: @mutedTextColor;
  font-size: 1.08rem;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@media (prefers-reduced-motion: reduce) {
  html, body {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

@media only screen and (max-width: 620px) {
  #app {
    font-size: 16px;
  }

  .page-shell {
    width: calc(100% - 28px);
  }
}

</style>
