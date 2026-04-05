import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * 作品数据接口
 */
interface Work {
  id: string;
  title: string;
  duration?: string;
  videoUrl?: string;
}

/**
 * 作品展示组件
 * 展示视频缩略图和标题，采用 3x2 网格布局
 */
interface WorksGalleryProps {
  works?: Work[];
}

export function WorksGallery({ works }: WorksGalleryProps) {
  // 默认作品数据（可以替换为实际的视频缩略图）
  const defaultWorks: Work[] = [
    {
      id: '1',
      title: 'CBA平度赛开场舞混剪',
      duration: '1:33',
      videoUrl: 'https://weixin.qq.com/sph/AfQt7YzTsy',
    },
    {
      id: '2',
      title: '雅过敏乐队全国巡演宣传片',
      duration: '1:33',
      videoUrl: 'https://weixin.qq.com/sph/AMBsssZzmU',
    },
    {
      id: '3',
      title: '霹雳猴子十周年演出混剪',
      duration: '2:40',
      videoUrl: 'https://weixin.qq.com/sph/AQpgO9FBfZ',
    },
    {
      id: '4',
      title: '中国舞舞蹈老师采访',
      duration: '7:53',
      videoUrl: 'https://weixin.qq.com/sph/AcQR6mkIPb',
    },
    {
      id: '5',
      title: '少儿模特in印象胶东MV',
      duration: '2:10',
      videoUrl: 'https://weixin.qq.com/sph/A1BemDf5NK',
    },
    {
      id: '6',
      title: '平度有Yound青年音乐会',
      duration: '0:32',
      videoUrl: 'https://weixin.qq.com/sph/AgpreOApsK',
    },
  ];

  const displayWorks = works || defaultWorks;

  // 处理作品点击事件
  const handleWorkClick = (work: Work) => {
    if (work.videoUrl) {
      window.open(work.videoUrl, '_blank');
    }
  };

  return (
    <div id="works-gallery" className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          作品展示
        </h3>
        <p className="text-base text-blue-200">
          
        </p>
      </div>

      {/* 3x2 网格布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayWorks.map((work) => (
          <Card
            key={work.id}
            className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-cyan-400"
            onClick={() => handleWorkClick(work)}
          >
            {/* 缩略图区域 */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden group-hover:bg-gradient-to-br group-hover:from-slate-700 group-hover:to-slate-800 transition-colors">
              {/* 播放按钮 - 只显示箭头 */}
              <div className="group-hover:scale-110 transition-all duration-300">
                <Play className="w-16 h-16 text-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600" style={{ color: '#06b6d4' }} />
              </div>

              {/* 时长标签 */}
              {work.duration && (
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {work.duration}
                </div>
              )}
            </div>

            {/* 标题区域 */}
            <CardContent className="p-4">
              <h4 className="font-medium text-gray-800 group-hover:text-cyan-600 transition-colors line-clamp-1">
                {work.title}
              </h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WorksGallery;
