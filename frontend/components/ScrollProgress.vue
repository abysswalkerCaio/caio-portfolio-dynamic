<template>
  <div
    id="scroll-progress"
    class="h-1 absolute bottom-0 left-0 z-20 bg-lilly-costa-950 dark:bg-lilly-costa-100"
  ></div>
</template>

<script setup lang="ts">
onMounted(() => {
  const progressBar: HTMLElement | null =
    document.getElementById("scroll-progress");

  if (progressBar) {
    window.addEventListener("scroll", function () {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollableHeight) * 100;
      progressBar!.style.width = progress + "%";
    });
  }
});
</script>
