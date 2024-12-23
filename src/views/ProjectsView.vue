<template>
  <div>
    <h1>Проекты</h1>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        { id: 1, title: 'Проект 1', description: 'Описание проекта 1' },
        { id: 2, title: 'Проект 2', description: 'Описание проекта 2' },
        { id: 3, title: 'Проект 3', description: 'Описание проекта 3' },
        { id: 4, title: 'Проект 4', description: 'Описание проекта 4' },
      ],
    };
  },
};
</script>
