var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["블로그"],
        "tags": ["블로그","jekyll"],
        "url": "https://chobolife.github.io/blog/2019/07/26/welcome-to-jekyll/",
        "teaser":null},{
        "title": "나의 Jekyll 여행기 (1)",
        "excerpt":"블로그를 시작하려고 한다. 아마 나의 이런저런 생각들, 그리고 내가 했던 것들을 기록하기 위한 용도로 사용할 것 같다. Jekyll의 시작 나는 여러 가지 방법을 알아보고 나서, Jekyll을 사용해 보기로 했다. 일반 포털 사이트에서 제공하는 블로그는 자유도가 낮아 새로운 것을 시도해보기 어렵기 때문에 처음부터 별로 생각이 없었다. 그리고 다음으로 생각했던 것은 전에도...","categories": ["블로그"],
        "tags": ["블로그","jekyll","cygwin"],
        "url": "https://chobolife.github.io/blog/2019/07/26/start-jekyll-1/",
        "teaser":null},{
        "title": "나의 Jekyll 여행기 (2)",
        "excerpt":"지난 포스팅 (나의 Jekyll 여행기 (1))에서 했던 실패를 뒤로 하고 나는 계속 Jekyll을 사용할 수 있는 방법을 고민했다. 사실 Jekyll 홈페이지에는 Windows에서도 Jekyll을 사용할 수 있는 방법에 대해 나오기는 한다. 하지만 공식적으로 지원하지는 않는 플랫폼이고, 언제 어디서 무슨 문제가 발생할지도 모르는 것이었기 때문에 나는 다른 방법이 가능하면 다른 방법으로 하고...","categories": ["블로그"],
        "tags": ["블로그","jekyll","AWS","AWS EC2"],
        "url": "https://chobolife.github.io/blog/2019/07/27/start-jekyll-2/",
        "teaser":null},{
        "title": "Jekyll로 만든 사이트를 github에 올리기",
        "excerpt":"지난 포스팅 (나의 Jekyll 여행기 (2))에서 Jekyll을 설치하고 jekyll build까지 실행해 보았다. 그리고 결과가 _site 폴더에 생성되는 것을 확인하였다. 그러면 이제는 _site 폴더에 생긴 사이트를 웹에 올리는 일만 남았다. 나는 github hosting을 이용하려고 생각하였다. Github에 올리면 git commit 명령으로 쉽게 올릴 수도 있고, 도메인도 해결이 되며 어느 정도까지는 무료이다. 일단...","categories": ["블로그"],
        "tags": ["블로그","jekyll","github","git","호스팅"],
        "url": "https://chobolife.github.io/blog/2019/07/28/jekyll-github/",
        "teaser":null},{
        "title": "Google drive에 공개 이미지 올리기",
        "excerpt":"Jekyll에서 이미지를 올리는 방법에 대해서 찾아보았고, 코드조각이라는 것을 이용하여 나름의 방법을 구축했다. 그 방법을 소개하려고 하는데 그에 앞서 우선 이번 포스팅에서는 Google drive에 이미지 파일을 올리고 웹에 공개하는 방법까지만 작성했다. 그렇게 올린 이미지 파일을 Jekyll post에 표시하는 방법은 다음 포스팅에서 다룰 예정이다. 네이버와 워드프레스에서 이미지 관리 방법의 차이 일단 먼저...","categories": ["블로그"],
        "tags": ["블로그","jekyll","구글 드라이브","이미지","공개 설정"],
        "url": "https://chobolife.github.io/blog/2019/07/29/google-drive-image/",
        "teaser":null},{
        "title": "Jekyll post에 이미지 첨부하기",
        "excerpt":"이전 포스팅 (Google drive에 공개 이미지 올리기)에서 구글 드라이브에 이미지 파일을 올리고 공개하는 방법을 소개했다. 이번 포스팅은 그렇게 올린 이미지 파일을 Jekyll에서 웹페이지에 포함시키는 방법에 대한 포스팅이다. 이미지를 표현하는 markdown 기본 문법 우선 Jekyll 공식 문서에 나와 있는 이미지 첨부 방법은 아래와 같다. 기본적인 syntax는 간단하다. ![alt-text-message](image-link) 이렇게 하면 이미지를...","categories": ["블로그"],
        "tags": ["블로그","jekyll","구글 드라이브","이미지","include","조각파일"],
        "url": "https://chobolife.github.io/blog/2019/07/31/jekyll-image/",
        "teaser":null},{
        "title": "Jekyll 초안 관리에 대한 고민",
        "excerpt":"Jekyll을 이용한 블로깅은 그 자체로 재미가 있었다. 게다가 포스팅이 쉽기까지 했다. (일단 Jekyll을 설치할 때까지는 약간 험난했지만 말이다.) 문제의식 그런데 쓰다보니 한 가지 불편한 점이 있었다. 바로 초안을 관리하는 것이었다. 나는 사진이든 동영상이든 트위터같은 짧은 글이든 아니면 엄청나게 긴 길이든, 어떤 형태로든지 인터넷에 자료를 올리는 것은 publish, 즉 출판이라는 생각을...","categories": ["블로그"],
        "tags": ["블로그","jekyll","draft"],
        "url": "https://chobolife.github.io/blog/2019/08/01/jekyll-draft/",
        "teaser":null},{
        "title": "EC2에서 S3에 접근하는 방법",
        "excerpt":"약간의 삽질을 했지만 결국 AWS CLI를 이용하여 ubuntu에서 S3에 업로드하는 방법을 찾았다. 이번 포스팅에서는 그 방법을 정리해 두려고 한다. Jekyll 블로그의 초안을 AWS S3에 업로드 이전 포스팅(Jekyll 초안 관리에 대한 고민)에서 했던 고민의 결론은 이것이었다. Jekyll 블로그의 초안을 github page에 commit하기 전에 AWS S3에 업로드해서 나만 먼저 확인해보겠다. 참고로 Jekyll...","categories": ["블로그"],
        "tags": ["블로그","jekyll","AWS","AWS S3","AWS CLI","AMI"],
        "url": "https://chobolife.github.io/blog/2019/08/04/ec2-s3-authority/",
        "teaser":null},{
        "title": "EC2에서 웹서버 구동하기",
        "excerpt":"지난 포스팅(EC2에서 S3에 접근하는 방법)에서는 EC2에서 만든 정적 웹사이트를 S3에 업로드했다. 그 작업의 목적은 내가 Jekyll을 통해 만든 웹사이트를 github을 통해 배포하기 전에 확인하기 위한 것이었다. 문제 발생 지난 포스트(나의 Jekyll 여행기 (2))를 보면 알겠지만 나는 내 작업 컴퓨터에서 Jekyll을 돌리고 있지 않다. EC2에 만들어 놓은 ubuntu에 ssh로 접속해서 Jekyll을...","categories": ["블로그"],
        "tags": ["블로그","AWS","AWS EC2","apache2","보안 그룹"],
        "url": "https://chobolife.github.io/blog/2019/08/06/ec2-web-server/",
        "teaser":null},{
        "title": "Jekyll 테마 설정하기",
        "excerpt":"Jekyll의 기본적인 사항들은 어느 정도 익혔다. 이제 본격적으로 Jekyll을 즐길 준비가 된 것인데, 그러기 위해서는 테마를 내가 원하는 대로 설정하는 일이 남았다. 지금은 Jekyll의 테마 설정을 다 하고 나서 포스팅을 쓰고 있다. 그런데 이전의 그 어떤 작업보다 테마 설정을 하는 것이 어려웠던 것 같다. 이런 줄 미리 알았다면 맨 처음에...","categories": ["블로그"],
        "tags": ["블로그","jekyll","jekyll theme","nokogiri 오류","Minimal mistakes"],
        "url": "https://chobolife.github.io/blog/2019/08/12/jekyll-theme/",
        "teaser":null},{
        "title": "Jekyll에 disqus 연동하기",
        "excerpt":"Jekyll에 테마를 설정한 후 이제 블로그답게 만드는 일은 하나 남았다. 그것은 바로 댓글이다. 사실 댓글 시스템이 꼭 필요한 블로그라면 이미 성공한 블로그일 것이다. 대부분의 개인 블로그에는 댓글 섹션이 있지만 유명무실하다. 방문자도 많지 않을 것이고, 방문자 중에서 작성자에게 피드백을 해 주는 사람은 그보다 훨씬 적을 것이기 때문이다. 단언컨대, 댓글로 의견이 활발하게...","categories": ["블로그"],
        "tags": ["블로그","jekyll","Minimal mistakes","disqus","댓글"],
        "url": "https://chobolife.github.io/blog/2019/08/16/jekyll-disqus/",
        "teaser":null},{
        "title": "Jekyll의 Minimal mistakes 테마에서 HTML 압축하기",
        "excerpt":"Jekyll로 웹사이트를 만드는 것은 아주 만족스러웠다. 그리고 처음에는 이 블로그에서 시작했지만, 다른 사이트도 만들어보고 싶은 욕심이 생겨서 조금 해 보고 있다. HTML 압축이 필요한 이유 그런데 마크다운에서 HTML로 변환이 완료된 파일을 열어 보면 조금 마음에 안 들었다. 아래는 지난 포스팅(Jekyll에 disqus 연동하기)의 html 파일을 열어 본 것이다. Jekyll로 생성한 HTML...","categories": ["블로그"],
        "tags": ["블로그","jekyll","HTML 압축","Minimal mistakes"],
        "url": "https://chobolife.github.io/blog/2019/08/17/jekyll-compress/",
        "teaser":null},{
        "title": "수영을 배우기 위한 준비 1편: 시간, 장소",
        "excerpt":"수영 강습을 한 번도 받아본 적이 없지만 수영을 배우기 위해 고민을 하고 있는 사람이라면 이 포스팅이 도움이 될 것 같습니다. 제가 그 때 했던 고민을 떠올리면서 써 보려고 하거든요. 수영과 관련된 블로그를 돌아다니다보면 자주 보이는 사진입니다. 저도 한 번 써보고 싶었어요. 이렇게 멋지게 수영할 수 있으면 얼마나 좋을까요. 수영 강습...","categories": ["수영"],
        "tags": ["일상","수영","수영초보","팁","수영장"],
        "url": "https://chobolife.github.io/blog/2019/08/20/swim-start-1/",
        "teaser":null},{
        "title": "수영을 배우기 위한 준비 2편: 수영복",
        "excerpt":"이번 포스팅에서는 수영을 배울 때 어떤 것이 필요한지 말씀드리려고 합니다. 사실 수영 초보자가 처음 수영을 하려고 할 때 많이 고민이 되는 것이거든요. 자주 써보지도 않은 것이고, 사 본 적도 거의 없는 물건들인데 어떻게 골라야 할지 잘 모르는 건 당연하겠죠. 저도 수영을 1년 이상 했지만 수영용품에는 별로 관심도 없고 이것저것 많이...","categories": ["수영"],
        "tags": ["일상","수영","수영초보","팁","수영용품"],
        "url": "https://chobolife.github.io/blog/2019/08/29/swim-start-2/",
        "teaser":null},{
        "title": "Verilog에서 사용한 배열을 simvision에서 확인하기",
        "excerpt":"전통적인 배열 사용 방법 Verilog로 코드를 짜다보면 가끔 2차원 배열을 사용하고 싶을 때가 있다. 거의 대부분은 2차원 배열을 아래와 같이 선언한다. 아래 코드는 32-bit wire를 1024개짜리의 배열로 선언하고 사용하는 코드이다. wire [31:0] x_array [0:1023]; assign x_array[0] = 32'h01234567; assign x_array[1] = 32'h12345678; assign x_array[2] = 32'h23456789; ... assign x_array[1023] =...","categories": ["개발"],
        "tags": ["코딩","Verilog","베릴로그","array","배열","simvision"],
        "url": "https://chobolife.github.io/blog/2019/09/19/verilog-array-simvision/",
        "teaser":null},{
        "title": "[수영고정관념 1] 수영은 관절에 무조건 좋을까?",
        "excerpt":"오늘의 주제는 이것입니다. 정말 수영은 관절에 무조건 좋을까? ‘수영고정관념’을 시작하며… 안녕하세요. 초보라이프입니다. 수영을 아주 잘 하지는 않지만 그래도 열심히, 꾸준히 수영을 하고 있습니다. 수영을 하면서 몸으로 느끼고 머리로 생각했던 것들을 말씀드리는 데에 어떤 방법이 좋을까 고민해 보았는데요. 수영에 대한 일반적인 인식을 중심으로 꼭 그것이 맞다, 틀리다는 것을 넘어서 제 생각을...","categories": ["수영"],
        "tags": ["일상","수영","수영초보","팁","무릎","허리","관절"],
        "url": "https://chobolife.github.io/blog/2019/09/27/swim-and-joint/",
        "teaser":null},{
        "title": "수영장 정보: 분당올림픽스포츠센터",
        "excerpt":"안녕하세요. 오늘은 분당올림픽스포츠센터의 브로셔를 공유하고 정보를 알려드리려고 합니다. 각 프로그램의 시간, 요일, 수강료, 수강대상 등의 정보가 있습니다. 브로셔 전체의 pdf 파일은 이 포스트 제일 하단에 있습니다. 분당올림픽스포츠센터 사진입니다. 사진으로 알 수 있듯이 규모가 꽤 큽니다. 분당올림픽스포츠센터에서는 굉장히 많은 종목들의 강습이 이루어지고 있는데요. 저는 수영만 이용해 보았지만 수영과 아쿠아로빅, 헬스를 비롯해서...","categories": ["수영"],
        "tags": ["일상","수영","수영초보","수영장","분당올림픽스포츠센터","분당"],
        "url": "https://chobolife.github.io/blog/2019/09/28/bundang-olympic/",
        "teaser":null},{
        "title": "귀에 물이 들어갔을 때 어떻게 해요?",
        "excerpt":"안녕하세요. 수영을 하다 보면 귀에 물이 들어갈 때가 많죠? 저도 자주 그래요. 근데 이게 처음에는 당황스러웠는데 인터넷에서 이 방법, 저 방법 찾아서 해 보다가 지금은 저에게 맞는 방법을 찾아서 그 방법으로 하고 있습니다. (사실은… 미리 말씀드리자면 그 방법이라는 것은 그냥 무리해서 빼려고 하지 말고 그대로 두는 거예요.) 고개 기울이고 뛰기...","categories": ["수영"],
        "tags": ["일상","수영","수영초보","팁","귀에 물"],
        "url": "https://chobolife.github.io/blog/2019/10/02/water-in-ear/",
        "teaser":null},{
        "title": "웹페이지에 지도 삽입하기",
        "excerpt":"지난 주에는 분당올림픽스포츠센터의 브로셔를 올리면서 포스팅에 지도를 삽입했다. (해당 포스팅은 수영장 정보: 분당올림픽스포츠센터이다.) 지도를 삽입하는 방법에 대해서 약간의 시행착오가 있었지만 지금은 좋은 방법을 찾았다. 지도를 제공하는 사이트 정확한 통계를 찾아보지는 않았지만, 아마도 우리나라에서는 네이버 지도, 카카오맵, 구글 지도 순으로 많이 사용될 것이다. 나는 국내 장소의 검색에 대해서는 카카오맵을, 해외 장소...","categories": ["블로그"],
        "tags": ["블로그","HTML","iframe","jekyll","지도","카카오맵","구글 지도"],
        "url": "https://chobolife.github.io/blog/2019/10/05/map-in-blog/",
        "teaser":null}]
