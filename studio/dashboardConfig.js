export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8d26ee8824e73012e6ad64',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oo6j9gt6',
                  apiId: 'e7a9f65c-35bf-4de8-adc0-919eb8b68e12'
                },
                {
                  buildHookId: '5f8d26efd1a03c2de195cd28',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3bkh54e7',
                  apiId: '58c02299-e4c5-4c19-a7f8-65a8460d3de8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aygunaye/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3bkh54e7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
