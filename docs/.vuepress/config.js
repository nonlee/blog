module.exports = {
	title: '工作经验分享',
	description: '记录日常的学习资料，心得等	',
	base: '/blog/',
	themeConfig: {
		nav: [
				{ text: '首页', link: '/' },
				{ text: 'nonlee blog', 
				  items: [
				    { text: 'Github', link: 'https://github.com/nonlee' },
				  { text: '微博', link: 'https://weibo.com/u/2434167382' }
				  ]
				}
			],
		sidebar: [
            {
                title: '首页',
                path: '/',
                collapsable: false, // 不折叠
            },
            {
              title: "x86-64体系下一个奇怪问题的定位",
              path: '/handbook/x86-64体系下一个奇怪问题的定位',
              collapsable: false, // 不折叠
            },
            {
              title: "回归问题",
              path: '/handbook/回归问题',
              collapsable: false, // 不折叠
            }
            ]
		}
}