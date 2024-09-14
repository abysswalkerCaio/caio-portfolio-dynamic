<template>
  <div class="mt-12 flex-col gap-6 w-full max-w-[1300px]">
    <div
      class="flex flex-col min-[1100px]:flex-row min-[1100px]:justify-around gap-10 items-center"
    >
      <div class="flex-none max-w-[704px] max-h-[396px]">
        <ClientOnly>
          <img
            class="border border-lilly-costa-950 dark:border-lilly-costa-200 rounded shadow-md dark:shadow-zinc-800"
            src="@/assets/img/projects/anime-world-main-page.png"
            alt="Anime World's System Main Page"
          />
        </ClientOnly>
      </div>
      <div
        class="flex flex-col justify-around items-center min-[1100px]:items-start gap-6 mt-12 min-[1100px]:mt-0"
      >
        <div class="flex flex-col items-center min-[1100px]:items-start gap-6">
          <HeadingsFourthHeader :content="'Anime World v1'" />
          <p
            class="leading-loose text-zinc-800 dark:text-zinc-200 max-w-[80%] min-[1100px]:max-w-full"
          >
            Anime listing application using Nuxt.js and the Jikan API. The app
            offers detailed search and filtering options, showcasing anime
            titles with information such as genres, ratings, and episode
            summaries, all within a responsive and user-friendly interface.
          </p>
        </div>
        <div
          class="flex flex-col min-[1100px]:flex-row items-center mt-4 w-full gap-6"
        >
          <SectionsProjectsContentButton
            :project="''"
            :content="'CASE STUDY'"
          />
          <ClientOnly>
            <SectionsProjectsContentButtonDemo
              :project="'https://anime-world-abysswalkercaio.vercel.app/'"
              :content="'DEMO'"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
