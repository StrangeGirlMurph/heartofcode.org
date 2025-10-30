import { defineConfig } from 'vitepress'




// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Heart of Code",
  description: "FLINTA Hackspace in Berlin",
  cleanUrls: true,
  lastUpdated: true,
  
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        nav: [
          { text: 'Über uns', link: '/about' },
          { text: 'Raum', link: '/space' },
          { text: 'Events', link: '/events' },
          { text: 'Kalendar', link: 'https://pad.systemli.org/p/heartofcode-knUZP66XbkBBZpfKxFx6-keep' },
          { text: 'Kontakt', link: '/contact' },
        ],
      }
    },
    en: {
      label: 'English',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'About us', link: '/en/about' },
          { text: 'Contact', link: '/contact' },
          { text: 'Space', link: '/en/space' },
          { text: 'Events', link: '/en/events' },
          { text: 'Calendar', link: 'https://pad.systemli.org/p/heartofcode-knUZP66XbkBBZpfKxFx6-keep' },
        ],
      }
    }
  },
  
  themeConfig: {
    logo: "/assets/logo.jpg",
    editLink: {
      pattern: 'https://github.com/heartsofcode/heartofcode/edit/main/:path',
    },
    search: {
      provider: "local"
    },

    sidebar: [],
    socialLinks: [
      {icon: "signal", link: "https://signal.group/#CjQKIKcj5S25ptG6H9bzdbaeot1_whif9j59J7bOmm91TeTlEhAc-VmeJpTuP-tZuOJad_MT"},
      {icon: "mastodon", link: "https://mastodon.social/@heartofcode@systemli.social"},
      { icon: 'github', link: 'https://github.com/heartsofcode' },
    ]
  }
})
