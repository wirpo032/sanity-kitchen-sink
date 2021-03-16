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
                  buildHookId: '6050f251dd728610a1be1cbf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fcpnznov',
                  apiId: '50f782ed-decb-4deb-90a8-bea11aacd6af'
                },
                {
                  buildHookId: '6050f251cc3fd714a067a1cb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4xnuwbkt',
                  apiId: 'f0f591fd-c1c0-4099-88e1-5a395693452e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wirpo032/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4xnuwbkt.netlify.app', category: 'apps'}
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
