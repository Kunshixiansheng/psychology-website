import React, { useState } from 'react';
import { Menu, Star, Quote, ChevronRight, Calendar, Clock, MessageSquare, User, Book, Users, Heart, Award, BookOpen } from 'lucide-react';

// CoursesSection Component
const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "自我疗愈系列课",
      price: "¥999",
      duration: "12课时",
      description: "通过专业的心理学理论和实践练习，帮助你建立健康的自我认知，走出情绪困扰。",
      highlights: ["认识自我与情绪觉察", "创伤疗愈与自我关怀", "建立健康思维模式"],
      icon: Heart
    },
    {
      id: 2,
      title: "个人成长系列课",
      price: "¥1299",
      description: "系统化的个人成长课程，助你突破瓶颈，实现自我提升。",
      highlights: ["目标设定与行动计划", "时间管理与效率提升", "压力管理与适应力"],
      icon: Users
    },
    {
      id: 3,
      title: "亲密关系必修课",
      price: "¥1199",
      description: "深入探讨亲密关系的本质，学习建立健康的关系模式。",
      highlights: ["依恋风格与关系模式", "沟通技巧与冲突处理", "边界设立与自我保护"],
      icon: Heart
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">精品心理课程</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <course.icon className="h-8 w-8 text-teal-600" />
                <span className="text-teal-600 font-bold">{course.price}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-1 h-1 bg-teal-600 rounded-full mr-2"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// AboutSection Component
const AboutSection = () => {
  const achievements = [
    { number: "10000+", label: "服务用户", icon: Users },
    { number: "100+", label: "专业文章", icon: Book },
    { number: "50+", label: "企业合作", icon: Award },
    { number: "4.9", label: "用户评分", icon: Star }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/api/placeholder/400/400" alt="恩哲心理创始人" className="rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">关于恩哲心理</h2>
            <p className="text-gray-600 mb-6">恩哲心理创始人，持有国家二级心理咨询师资格证书，专注于个人成长、情绪管理、亲密关系等领域的研究与实践。</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <item.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{item.number}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Success Cases Component
const SuccessCases = () => {
  const testimonials = [
    {
      id: 1,
      name: "张女士",
      age: "28岁",
      issue: "职场焦虑",
      content: "通过8次咨询，我学会了如何管理压力和焦虑情绪，工作效率提升了很多。",
      rating: 5,
      duration: "3个月",
      improvement: "焦虑程度降低80%"
    },
    {
      id: 2,
      name: "李先生",
      age: "35岁",
      issue: "婚姻关系",
      content: "在咨询师的帮助下，我和妻子的沟通方式有了很大改善，家庭关系更和谐。",
      rating: 5,
      duration: "4个月",
      improvement: "关系满意度提升85%"
    },
    {
      id: 3,
      name: "王同学",
      age: "22岁",
      issue: "自我探索",
      content: "在恩哲老师的引导下，我逐渐认识了真实的自己，找到了人生的方向。",
      rating: 5,
      duration: "2个月",
      improvement: "自我认知提升90%"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">成功案例</h2>
        <p className="text-gray-600 text-center mb-12">每一个改变都值得被看见</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.age} | {testimonial.issue}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <Quote className="h-6 w-6 text-teal-600 mb-2" />
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">咨询周期</p>
                    <p className="font-semibold">{testimonial.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">改善程度</p>
                    <p className="font-semibold text-teal-600">{testimonial.improvement}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/api/placeholder/48/48" alt="恩哲心理" className="h-12 w-12"/>
              <span className="ml-2 text-xl font-bold text-teal-600">恩哲心理</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-teal-600">首页</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600">关于我们</a>
              <a href="#courses" className="text-gray-600 hover:text-teal-600">课程服务</a>
              <a href="#cases" className="text-gray-600 hover:text-teal-600">成功案例</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700">
                预约咨询
              </button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block text-teal-600">首页</a>
              <a href="#about" className="block text-gray-600">关于我们</a>
              <a href="#courses" className="block text-gray-600">课程服务</a>
              <a href="#cases" className="block text-gray-600">成功案例</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">遇见更好的自己</h1>
          <p className="text-xl text-gray-600 mb-12">
            专业的心理咨询服务，助您探索内心，成就成长
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700">
              开始咨询
            </button>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section id="about"><AboutSection /></section>
      <section id="courses"><CoursesSection /></section>
      <section id="cases"><SuccessCases /></section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <p className="text-gray-400">服务时间：周一至周日 9:00-21:00</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <a 
                href="https://www.douyin.com/user/MS4wLjABAAAASZi905sCS9BgK2mL-RP1d19eZQdLbFgB1PiWxqU-uas?from_tab_name=main" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                抖音号：恩哲心理
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white">关于我们</a>
                <a href="#courses" className="block text-gray-400 hover:text-white">课程服务</a>
                <a href="#cases" className="block text-gray-400 hover:text-white">成功案例</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">预约咨询</h3>
              <img src="/api/placeholder/120/120" alt="预约二维码" className="w-32 h-32"/>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 恩哲心理. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;