module.exports = {
  async up(knex) {
    try {
      const projectsToUpdate = await knex('projects')
        .where({ locale: 'en', slug: null })
        .select('id', 'project_name');

      if (projectsToUpdate.length === 0) {
        strapi.log.info('Projects slug values update: No projects found to update.');
        return;
      }

      for (const project of projectsToUpdate) {
        const slug = project.project_name.toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '');

        await knex('projects')
          .where({ id: project.id })
          .update({ slug: slug });
      }

      strapi.log.info(`Projects slug values update: Updated slugs for ${projectsToUpdate.length} projects.`);
    } catch (error) {
      strapi.log.error('Projects slug values update: An error occurred while updating projects:', error);
    }
  },
};

