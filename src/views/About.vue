<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello there!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>EJ Taylan</strong>, a game developer and college undergraduate based in Santa Rosa, Laguna. <br/>
        Currently I'm pursuing a Bachelor of Science in Interactive Entertainment major in Game Development from DLSU-Laguna.
        I specialize in UI/UX and gameplay mechanics, with interest in narratives and level and sound design.
      </div>

      <div style="margin-top: 20px;">Here are some <router-link to="/game-projects"> projects </router-link> I've worked on, either for school or as a personal project.
        <router-link to="/other-projects">Here's</router-link> some of my skills and courses/certifications I've taken, and here is my <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer. You can reach me at <a href="mailto:ejrtaylan@gmail.com">ejrtaylan@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>