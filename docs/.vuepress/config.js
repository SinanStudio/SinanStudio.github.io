module.exports = {
    "title": "司南社区",
    "description": "让你的每一分努力，都能产生价值。",
    "head":[
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    "locales": {
        "/": {
            "lang": "zh-CN"
        }
    },
    "plugins": [
        [
            "@vuepress/back-to-top",
            true
        ],
        [
            "@vuepress/medium-zoom",
            true
        ]
    ],
    "themeConfig": {
        "nav": [
            {
                "text": "指南",
                "link": "/guide/"
            },
            {
                "text": "配置",
                "link": "/config/"
            },
            {
                "text": "社区规范",
                "link": "/standard/"
            },
            {
                "text": "Changelog",
                "link": "/changelog/"
            },
            {
                "text": "Github",
                "link": "https://github.com/SinanStudio/SinanStudio.github.io"
            },
        ],
        "sidebar": {
            "/standard/": [
                "",
                "for-develop",
            ],
            "/": [
                ""
            ]
        },
        "sidebarDepth": 2,
        "lastUpdated": "最后更新于",
        "search": true,
        "searchMaxSuggestions": 10,
        "docsRepo": "SinanStudio/SinanStudio.github.io",
        "docsDir": "docs",
        "docsBranch": "master",
        "editLinks": true,
        "editLinkText": "在 GitHub 上编辑此页"
    }
}