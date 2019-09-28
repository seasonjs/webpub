# webpub

###  开发规范
1. 代码简洁易读
2. 为了提高个人能力，不引入任何第三方功能库，只使用基础的react和vue全家桶

###  命名规范

---------------------------

css命名规范

前言中略微描述了 CSS 怎么使用；下面介绍一下 CSS 的一些代码规范；


CSS 命名一般采用小写英文单词或组合命名，单词与单词间以"-"分割；英文单词不缩


写，除非一看就能明白的单词。

文本命名规范


index.css: 一般用于首页建立样式


head.css: 头部样式，当多个页面头部设计风格相同时使用。


base.css: 共用样式。


style.css: 独立页面所使用的样式文件。


global.css: 页面样式基础，全局公用样式，页面中必须包含。


layout.css: 布局、版面样式，公用类型较多时使用，一般用在首页级页面和产品类


页面中


module.css: 模块，用于产品类页，也可与其它样式配合使用。


master.css: 主要的样式表


columns.css: 专栏样式


themes.css: 主体样式


forms.css: 表单样式


mend.css: 补丁，基于以上样式进行的私有化修补。


页面结构命名：


page: 代表整个页面，用于最外层。


wrap: 外套，将所有元素包在一起的一个外围包，用于最外层


wrapper: 页面外围控制整体布局宽度，用于最外层


container: 一个整体容器，用于最外层


head, header: 页头区域，用于头部


nav: 导航条


content: 内容，网站中最重要的内容区域，用于网页中部主体


main: 网站中的主要区域（表示最重要的一块位置），用于中部主体内容


column: 栏目


sidebar: 侧栏


foot, footer: 页尾、页脚。网站一些附加信息放置区域，（或命名为 copyright）用于底部


导航命名：


nav, navbar, navigation, nav-wrapper: 导航条或导航包，代表横向导航


topnav: 顶部导航


mainbav: 主导航


subnav: 子导航


sidebar: 边导航


leftsidebar 或 sidebar_a: 左导航


rightsidebar 或 sidebar_b: 右导航


title: 标题


summary: 摘要


menu: 菜单，区域包含一般的链接和菜单


submenu: 子菜单


drop: 下拉


dorpmenu: 下拉菜单


links: 链接菜单


功能命名


logo: 标记网站logo标志


banner: 标语、广告条、顶部广告条


login: 登陆，（例如登录表单：form-login）


loginbar: 登录条


register: 注册


tool, toolbar: 工具条


search: 搜索


searchbar: 搜索条


searchlnput: 搜索输入框


shop: 功能区，表示现在的


icon: 小图标


label: 商标


homepage: 首页


subpage: 二级页面子页面


hot: 热门热点


list: 文章列表，（例如：新闻列表：list-news）


scroll: 滚动


tab: 标签


sitemap: 网站地图


msg 或 message: 提示信息


current: 当前的


joinus: 加入


status: 状态


btn: 按钮，（例如：搜索按钮可写成：btn-search）


tips: 小技巧


note: 注释


guild: 指南


arr, arrow: 标记箭头


service: 服务


breadcrumb: (即页面所处位置导航提示）


download: 下载


vote: 投票


siteinfo: 网站信息


partner: 合作伙伴


link, friendlink: 友情链接


copyright: 版权信息


siteinfoCredits: 信誉


siteinfoLegal: 法律信息

-----------------------------------------

js 命名规范

尽量使用局部变量


减少for循环嵌套


变量命名大小写风格统一


禁止使用 A  B a b这样的单字母命名


全局静态或const变量应使用 全大写命名 例如： MAX_SIZE


所有js 风格需要遵从standardjs，并在提交前通过检测。


