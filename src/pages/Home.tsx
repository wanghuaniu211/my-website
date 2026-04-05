import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Camera,
  Settings,
  Terminal,
  Music,
  Video,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WorksGallery } from '@/components/WorksGallery';
import avatarImage from '@/assets/avatar.jpg';

/**
 * 个人作品集主页
 * 包含：我的项目、关于我、联系方式三大板块
 */

function Home() {
  // 项目数据
  const projects = [
    {
      title: '电商平台',
      description: '基于 React 和 Node.js 构建的现代化电商平台，支持商品浏览、购物车、订单管理等功能',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      link: '#',
      image: '🛒',
    },
    {
      title: '任务管理系统',
      description: '团队协作任务管理工具，支持任务分配、进度跟踪、团队沟通等功能',
      tags: ['Vue', 'Vite', 'Pinia', 'Element Plus'],
      link: '#',
      image: '✅',
    },
    {
      title: '数据可视化大屏',
      description: '企业级数据可视化解决方案，支持多种图表类型和实时数据更新',
      tags: ['React', 'ECharts', 'WebSocket', 'Express'],
      link: '#',
      image: '📊',
    },
    {
      title: '移动端 APP',
      description: '跨平台移动应用，提供流畅的用户体验和丰富的功能模块',
      tags: ['React Native', 'Redux', 'Firebase'],
      link: '#',
      image: '📱',
    },
  ];

  // 技能数据
  const skills = [
    {
      category: '拍摄类型',
      icon: Camera,
      items: ['人物摄影', '风光摄影', '产品拍摄', '活动跟拍', '旅行记录', '访谈摄影'],
    },
    {
      category: '设备器材',
      icon: Settings,
      items: ['索尼FX30', '大疆RS4稳定器', '18-105mm f4/11mm f1.8', '风光拍摄滤镜', '专业摄影灯具'],
    },
    {
      category: '精通软件',
      icon: Terminal,
      items: ['After Effects', 'DaVinci Resolve', '剪映专业版', '即梦AI'],
    },
  ];

  // 平滑滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-b border-blue-800/50 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg text-white">Portfolio</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('works-gallery')}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                作品展示
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                关于我
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                联系方式
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src={avatarImage} alt="头像" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold">
                  P
                </AvatarFallback>
              </Avatar>
            </div>

            <p className="text-xl sm:text-2xl text-blue-200 mb-4">
              你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">王花牛</span>
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              捕捉生活中每个精彩瞬间
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8">热爱影像拍摄与剪辑，不仅注重技巧，更注重思想表达。 拥有 6 年以上的拍摄剪辑经验，并熟练掌握最新AI技术辅助视频制作</p>

            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('works-gallery')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                作品展示
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              >
                联系我
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-blue-900/50" />

      {/* 作品展示板块 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <WorksGallery />
        </div>
      </section>

      <Separator className="bg-blue-900/50" />

      {/* 关于我板块 */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              关于我
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              了解我的背景、技能和工作经验
            </p>
          </div>

          <div className="space-y-8">
            {/* 个人简介 - 居中稍宽 */}
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>个人简介</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    本人从事拍摄剪辑行业6年，熟悉活动记录、人物访谈、自然风光等内容创作；熟练使用相机、稳定器等设备，擅长运镜、调色、节奏剪辑与配乐包装；能独立完成从脚本构思 — 实地拍摄 — 后期剪辑 — 成片输出全流程
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 技能展示 - 三个卡片同一行，稍窄 */}
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => {
                  const IconComponent = skillGroup.icon;
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                          <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg border border-blue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-blue-900/50" />

      {/* 联系方式板块 */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              联系方式
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              有项目合作或问题咨询？欢迎通过以下方式联系我
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            {/* 左边：邮箱和微信 */}
            <div className="flex-1 flex flex-col justify-between">
              {/* 邮箱 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">邮箱</CardTitle>
                  <CardDescription className="text-xs">通过邮件与我联系</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-gray-500">电子邮箱</div>
                      <div className="text-sm font-medium text-gray-900 truncate">469084704@qq.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 微信 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">微信</CardTitle>
                  <CardDescription className="text-xs">添加微信好友进行沟通</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">微</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-gray-500">微信号</div>
                      <div className="text-sm font-medium text-gray-900">469084704</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右边：社交媒体 */}
            <div className="flex-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>社交媒体</CardTitle>
                  <CardDescription>通过社交媒体平台与我联系</CardDescription>
                </CardHeader>
                <CardContent className="h-full flex flex-col space-y-3">
                  <a
                    href="https://www.douyin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Music className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        抖音
                      </div>
                      <div className="text-sm text-gray-500 truncate">王花牛</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </a>

                  <a
                    href="https://www.bilibili.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        B站
                      </div>
                      <div className="text-sm text-gray-500 truncate">王花牛</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </a>

                  <a
                    href="https://www.xiaohongshu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        小红书
                      </div>
                      <div className="text-sm text-gray-500 truncate">王花牛</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg">Portfolio</span>
            </div>
            <p className="text-blue-200 mb-6">
              用心创造，用技术实现
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="https://www.douyin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-cyan-400 transition-colors"
                title="抖音"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href="https://www.bilibili.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-cyan-400 transition-colors"
                title="B站"
              >
                <Video className="w-5 h-5" />
              </a>
              <a
                href="https://www.xiaohongshu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-cyan-400 transition-colors"
                title="小红书"
              >
                <Heart className="w-5 h-5" />
              </a>
            </div>
            <Separator className="my-6 bg-blue-900/50" />
            <p className="text-sm text-blue-300">
              © 2024 Portfolio. All rights reserved. Made with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
