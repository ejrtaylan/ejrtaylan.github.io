<template>
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <span class="footer-name">EJ Taylan</span>
        <span class="footer-note">Game developer based in Laguna, Philippines.</span>
      </div>
      <a href="mailto:ejrtaylan@gmail.com">ejrtaylan@gmail.com</a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  border-top: 1px solid @lineColor;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: calc(100% - 40px);
  max-width: 1180px;
  min-height: 110px;
  margin: 0 auto;
  color: @mutedTextColor;
  font-size: 0.86rem;
}

.footer-name {
  margin-right: 12px;
  color: @textColor;
  font-weight: 700;
}

.footer-name::before {
  margin-right: 8px;
  color: @secondaryAccentColor;
  content: "SYS://";
  font-family: 'Oxanium', 'Karla', Helvetica, Arial, sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.footer a {
  color: @accentColor;
}

@media only screen and (max-width: 620px) {
  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 28px);
    min-height: 140px;
    gap: 12px;
  }

  .footer-note {
    display: block;
  }
}
</style>
