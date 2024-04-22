<template>
  <div class="mt-12 flex flex-col md:flex-row gap-10 w-full max-w-[1000px]">
    <div class="flex flex-col flex-1 gap-4">
      <HeadingsThirdHeader :content="'Get to known me!'" />
      <p
        class="leading-loose max-w-[500px] md:max-w-full text-zinc-800 dark:text-zinc-200"
      >
        As an experienced Fullstack Developer, I excel in creating and managing
        dynamic Web Applications, guiding projects from start to finish. With
        expertise across the entire development process, from front-end design
        to back-end implementation, I ensure smooth functionality and superior
        user experiences. Feel free to browse through my portfolio below to see
        the quality of my work firsthand and my impact on the digital sphere.
      </p>
      <p
        class="leading-loose max-w-[500px] md:max-w-full text-zinc-800 dark:text-zinc-200 mb-6"
      >
        I'm actively looking for career opportunities to apply my skills, learn,
        and grow professionally. If you have a suitable position available, I'd
        love to discuss how I can contribute to your team. Please don't hesitate
        to contact me—I'm eager to explore potential collaborations and advance
        my career.
      </p>
      <SectionsButtonSectionsPage :content="'CONTACT'" :to="'#contact'" />
    </div>
    <div class="flex flex-col flex-1 gap-4">
      <HeadingsFourthHeader :content="'Hard Skills'" />
      <div class="flex flex-wrap gap-4 select-none mb-4">
        <div
          v-for="skills in hardSkills"
          class="p-3 shadow-md dark:shadow-zinc-800 bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded hover:scale-125 transition ease-in-out duration-300"
        >
          {{ skills }}
        </div>
      </div>
      <HeadingsFourthHeader :content="'Soft Skills'" />
      <div class="flex flex-wrap gap-4 select-none">
        <div
          v-for="skills in softSkills"
          class="p-3 shadow-md dark:shadow-zinc-800 bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded hover:scale-125 transition ease-in-out duration-300"
        >
          {{ skills }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hardSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "Nuxt.js",
  "PHP",
  "Laravel",
  "MySQL",
  "Microsoft Windows",
  "Linux",
];

const softSkills = [
  "Communication",
  "Problem-solving",
  "Adapability",
  "Teamwork",
  "Time management",
  "Leadership",
  "Emotional intelligence",
  "Creativity",
  "Empathy",
  "Resilience",
];
</script>
