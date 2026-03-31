<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      <li>Currently pursuing a <strong>BS in Interactive Entertainment major in Game Development</strong></li>
      <li>Have extensive experience building projects using Unity and Unreal Engine 5</li>
      <li>Proficient in C, C++, and C#, with experience using SFML and OpenGL</li>
      <li>Developed several game prototypes while collaborating with different teams</li>
      <li>Special interest in computer hardware, level design, narratives, and game mechanics</li>

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <!-- <h2>Work experience</h2>

      <h3>Job Title</h3>
      <h4>2018-2019</h4>

      <div>Description</div>

      <div class="tech-stack">Tech Stack</div> -->

      <div class="section">
        <h2>Skills</h2>
        <div class="skills">
          <div class="skills-grid">
            
            <!-- Languages -->
            <div class="skill-group">
              <h3>Languages</h3>
              <div class="tags">
                <span>C#</span>
                <span>C</span>
                <span>C++</span>
                <span>Python</span>
                <span>SQL</span>
                <span>UE5 Blueprints</span>
              </div>
            </div>

            <!-- Gamedev -->
            <div class="skill-group">
              <h3>Gamedev</h3>
              <div class="tags">
                <span>Unity (2023, 6)</span>
                <span>UE 5.6</span>
                <span>OpenGL</span>
                <span>SFML</span>
              </div>
            </div>

            <!-- Tools -->
            <div class="skill-group">
              <h3>Tools</h3>
              <div class="tags">
                <span>Visual Studio</span>
                <span>Github</span>
                <span>CMake</span>
                <span>Audacity</span>
                <span>LMMS</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div style="clear:both"></div>

      <div class="section">
        <h2>Certifications</h2>

        <div class="badges">
          <!-- Junior Programmer -->
          <div class="badge-item"> 
            <div>Unity Junior Programmer</div>
            <a 
              href="https://www.credly.com/badges/d23b6cf7-05bd-4dc4-8882-119d3d5cb3c4"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img 
              src="https://images.credly.com/size/220x220/images/a7bea4b9-3704-4905-8681-aeaf64efd2f1/blob"
              alt="Junior Programmer Badge"
            />
            </a>
          </div>

          <!-- Unity Essentials -->
          <div class="badge-item">
            <div>Unity Essentials</div>
            <a 
              href="https://www.credly.com/badges/f80f1ff4-5a88-40d6-b1dd-df3f8f46e713"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img 
              src="https://images.credly.com/size/220x220/images/99f74b86-46d7-429d-9d43-2ed446b35af9/blob"
              alt="Unity Essentials Badge"
            />
            </a>
          </div>
        </div>
      </div>

      <div style="clear:both"> </div>

      <div class="section">
        <h2>Education</h2>
        
        <div class="edu-item">
          <div class="edu-title">College — expected 2027</div>

          <div class="edu-details">
            <div class="edu-school">De La Salle University - Laguna</div>
            <div class="edu-degree">
              BS Interactive Entertainment major in Game Development
            </div>
            <div class="edu-extra">
              Game Design and Theory, Data Structures and Algorithms, UI/UX,
            </div>
            <div class="edu-extra">
              Computer Graphics, Networking, Web and Mobile Game Development
            </div>
          </div>
        </div>

        <div class="edu-item">
          <div class="edu-title">Senior High School - 2022</div>

          <div class="edu-details">
            <div class="edu-school">De La Salle University Integrated School</div>
            <div class="edu-degree">
              STEM Strand
            </div>
            <div class="edu-extra">
              Paper Presenter in 4th DLSU-SHS Research Congress (Paper <a href="https://animorepository.dlsu.edu.ph/conf_shsrescon/2022/paper_see/14/" target="_blank">here</a>)
            </div>
          </div>
        </div>

        <div class="edu-item">
          <div class="edu-title">Junior High School - 2020</div>

          <div class="edu-details">
            <div class="edu-school">La Salle Green Hills</div>
            <div class="edu-extra">
              Batch Top 4 (Overall)
            </div>
            <div class="edu-extra">
              Game Development Guild - President (2019)
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Languages</h2>

        <div class="test">
          <h3>English</h3>

          <h3>Filipino</h3>
        </div>
        <div class="test">
          <div>Fluent</div>

          <div>Native</div>
        </div>
      </div>

      <!-- <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

      </div> -->
    </div>
  </div>
</template>

<!-- <script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
}
);

</script>  -->

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  /* padding-top: 15px; */
  font-style: italic;
}
.education {
  max-width: 700px;
}

.edu-item {
  margin-bottom: 35px;
}

.edu-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 30px;
}

.edu-details {
  margin-left: 20px;
  padding-left: 15px;
  border-left: 2px solid rgba(255,255,255,0.15);
}

.edu-school {
  font-weight: 500;
  margin-bottom: 4px;
}

.edu-degree {
  font-style: italic;
  opacity: 0.9;
  margin-bottom: 8px;
}

.edu-extra {
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.6;
}

.edu-item + .edu-item {
  margin-top: 40px;
}

.paragraph {
  max-width: 800px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.tech-stack {
  font-style: italic;
}

.skills {
  color: #ddd;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* Make bottom section span all columns */
.full-width {
  grid-column: span 3;
}

.test {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column: span 2;
}

.skill-group h2 {
  margin-bottom: 15px;
  font-weight: 500;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tags span {
  border: 2px solid rgba(255,255,255,0.3);
  padding: 8px 12px;
  font-size: 18px;
  border-radius: 2px;
  /* transition: all 0.2s ease; */
}

/* optional hover effect */
/* .tags span:hover {
  border-color: white;
  transform: translateY(-2px);
} */

.badges {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.badges img {
  width: 120px;
  height: auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 8px;
}

.badges img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.badge-item{
  display: block;
  text-align: center;
  margin-right: 50px;
}

.section{
  margin-bottom: 50px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }
}
</style>