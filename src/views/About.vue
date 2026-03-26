<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello there!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>EJ Taylan</strong>, a game developer and college undergrad based in Santa Rosa, Laguna. <br/>
        Currently I'm pursuing a <strong> BS in Interactive Entertainment major in Game Development </strong> from DLSU-Laguna.
        I'm more of a generalist but most of my work has been in <strong>UI/UX and sound development</strong>, along with some gameplay mechanics and sprite implementation.
      </div>

      <div style="margin-top: 20px;">Here are some <router-link to="/game-projects">projects</router-link> I've worked on, either for school or as a personal project.   
        Here's some of my <router-link to="/other-projects">skills</router-link> and courses/certifications I've taken, and here is my <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer. You can reach me at <a href="mailto:ejrtaylan@gmail.com">ejrtaylan@gmail.com</a> or through these <router-link to="/contact">links.</router-link></div>
    </div>

    <div class="photo">
      <img src="img/photo.png" alt="Me!" /> 
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
  margin-top: 0px;
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