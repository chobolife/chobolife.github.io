var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": [],
        "tags": ["블로그","jekyll"],
        "url": "https://chobolife.github.io/blog/2019/07/26/welcome-to-jekyll/",
        "teaser":null},{
        "title": "나의 Jekyll 여행기 (1)",
        "excerpt":"블로그를 시작하려고 한다. 아마 나의 이런저런 생각들, 그리고 내가 했던 것들을 기록하기 위한 용도로 사용할 것 같다. Jekyll의 시작 나는 여러 가지 방법을 알아보고 나서, Jekyll을 사용해 보기로 했다. 일반 포털 사이트에서 제공하는 블로그는 자유도가 낮아 새로운 것을 시도해보기 어렵기 때문에 처음부터 별로 생각이 없었다. 그리고 다음으로 생각했던 것은 전에도...","categories": [],
        "tags": ["블로그","jekyll","cygwin"],
        "url": "https://chobolife.github.io/blog/2019/07/26/start-jekyll-1/",
        "teaser":null},{
        "title": "나의 Jekyll 여행기 (2)",
        "excerpt":"지난 포스팅 (나의 Jekyll 여행기 (1))에서 했던 실패를 뒤로 하고 나는 계속 Jekyll을 사용할 수 있는 방법을 고민했다. 사실 Jekyll 홈페이지에는 Windows에서도 Jekyll을 사용할 수 있는 방법에 대해 나오기는 한다. 하지만 공식적으로 지원하지는 않는 플랫폼이고, 언제 어디서 무슨 문제가 발생할지도 모르는 것이었기 때문에 나는 다른 방법이 가능하면 다른 방법으로 하고...","categories": [],
        "tags": ["블로그","jekyll","AWS","AWS EC2"],
        "url": "https://chobolife.github.io/blog/2019/07/27/start-jekyll-2/",
        "teaser":null},{
        "title": "Jekyll로 만든 사이트를 github에 올리기",
        "excerpt":"지난 포스팅 (나의 Jekyll 여행기 (2))에서 Jekyll을 설치하고 jekyll build까지 실행해 보았다. 그리고 결과가 _site 폴더에 생성되는 것을 확인하였다. 그러면 이제는 _site 폴더에 생긴 사이트를 웹에 올리는 일만 남았다. 나는 github hosting을 이용하려고 생각하였다. Github에 올리면 git commit 명령으로 쉽게 올릴 수도 있고, 도메인도 해결이 되며 어느 정도까지는 무료이다. 일단...","categories": [],
        "tags": ["블로그","jekyll","github","git","호스팅"],
        "url": "https://chobolife.github.io/blog/2019/07/28/jekyll-github/",
        "teaser":null},{
        "title": "Google drive에 공개 이미지 올리기",
        "excerpt":"Jekyll에서 이미지를 올리는 방법에 대해서 찾아보았고, 코드조각이라는 것을 이용하여 나름의 방법을 구축했다. 그 방법을 소개하려고 하는데 그에 앞서 우선 이번 포스팅에서는 Google drive에 이미지 파일을 올리고 웹에 공개하는 방법까지만 작성했다. 그렇게 올린 이미지 파일을 Jekyll post에 표시하는 방법은 다음 포스팅에서 다룰 예정이다. 네이버와 워드프레스에서 이미지 관리 방법의 차이 일단 먼저...","categories": [],
        "tags": ["블로그","jekyll","구글 드라이브","이미지","공개 설정"],
        "url": "https://chobolife.github.io/blog/2019/07/29/google-drive-image/",
        "teaser":null},{
        "title": "Jekyll post에 이미지 첨부하기",
        "excerpt":"이전 포스팅 (Google drive에 공개 이미지 올리기)에서 구글 드라이브에 이미지 파일을 올리고 공개하는 방법을 소개했다. 이번 포스팅은 그렇게 올린 이미지 파일을 Jekyll에서 웹페이지에 포함시키는 방법에 대한 포스팅이다. 이미지를 표현하는 markdown 기본 문법 우선 Jekyll 공식 문서에 나와 있는 이미지 첨부 방법은 아래와 같다. 기본적인 syntax는 간단하다. ![alt-text-message](image-link) 이렇게 하면 이미지를...","categories": [],
        "tags": ["블로그","jekyll","구글 드라이브","이미지","include","조각파일"],
        "url": "https://chobolife.github.io/blog/2019/07/31/jekyll-image/",
        "teaser":null},{
        "title": "Jekyll 초안 관리에 대한 고민",
        "excerpt":"Jekyll을 이용한 블로깅은 그 자체로 재미가 있었다. 게다가 포스팅이 쉽기까지 했다. (일단 Jekyll을 설치할 때까지는 약간 험난했지만 말이다.) 문제의식 그런데 쓰다보니 한 가지 불편한 점이 있었다. 바로 초안을 관리하는 것이었다. 나는 사진이든 동영상이든 트위터같은 짧은 글이든 아니면 엄청나게 긴 길이든, 어떤 형태로든지 인터넷에 자료를 올리는 것은 publish, 즉 출판이라는 생각을...","categories": [],
        "tags": ["블로그","jekyll","draft"],
        "url": "https://chobolife.github.io/blog/2019/08/01/jekyll-draft/",
        "teaser":null},{
        "title": "EC2에서 S3에 접근하는 방법",
        "excerpt":"약간의 삽질을 했지만 결국 AWS CLI를 이용하여 ubuntu에서 S3에 업로드하는 방법을 찾았다. 이번 포스팅에서는 그 방법을 정리해 두려고 한다. Jekyll 블로그의 초안을 AWS S3에 업로드 이전 포스팅(Jekyll 초안 관리에 대한 고민)에서 했던 고민의 결론은 이것이었다. Jekyll 블로그의 초안을 github page에 commit하기 전에 AWS S3에 업로드해서 나만 먼저 확인해보겠다. 참고로 Jekyll...","categories": [],
        "tags": ["블로그","jekyll","AWS","AWS S3","AWS CLI","AMI"],
        "url": "https://chobolife.github.io/blog/2019/08/04/ec2-s3-authority/",
        "teaser":null},{
        "title": "EC2에서 웹서버 구동하기",
        "excerpt":"지난 포스팅(EC2에서 S3에 접근하는 방법)에서는 EC2에서 만든 정적 웹사이트를 S3에 업로드했다. 그 작업의 목적은 내가 Jekyll을 통해 만든 웹사이트를 github을 통해 배포하기 전에 확인하기 위한 것이었다. 문제 발생 지난 포스트(나의 Jekyll 여행기 (2))를 보면 알겠지만 나는 내 작업 컴퓨터에서 Jekyll을 돌리고 있지 않다. EC2에 만들어 놓은 ubuntu에 ssh로 접속해서 Jekyll을...","categories": [],
        "tags": ["블로그","AWS","AWS EC2","apache2","보안 그룹"],
        "url": "https://chobolife.github.io/blog/2019/08/06/ec2-web-server/",
        "teaser":null},{
        "title": "Jekyll 테마 설정하기",
        "excerpt":"Jekyll의 기본적인 사항들은 어느 정도 익혔다. 이제 본격적으로 Jekyll을 즐길 준비가 된 것인데, 그러기 위해서는 테마를 내가 원하는 대로 설정하는 일이 남았다. 지금은 Jekyll의 테마 설정을 다 하고 나서 포스팅을 쓰고 있다. 그런데 이전의 그 어떤 작업보다 테마 설정을 하는 것이 어려웠던 것 같다. 이런 줄 미리 알았다면 맨 처음에...","categories": [],
        "tags": ["블로그","jekyll","jekyll theme","nokogiri 오류","Minimal mistakes"],
        "url": "https://chobolife.github.io/blog/2019/08/12/jekyll-theme/",
        "teaser":null},{
        "title": "Jekyll에 disqus 연동하기",
        "excerpt":"Jekyll에 테마를 설정한 후 이제 블로그답게 만드는 일은 하나 남았다. 그것은 바로 댓글이다. 사실 댓글 시스템이 꼭 필요한 블로그라면 이미 성공한 블로그일 것이다. 대부분의 개인 블로그에는 댓글 섹션이 있지만 유명무실하다. 방문자도 많지 않을 것이고, 방문자 중에서 작성자에게 피드백을 해 주는 사람은 그보다 훨씬 적을 것이기 때문이다. 단언컨대, 댓글로 의견이 활발하게...","categories": [],
        "tags": ["블로그","jekyll","disqus","댓글"],
        "url": "https://chobolife.github.io/blog/2019/08/16/jekyll-disqus/",
        "teaser":null}]
