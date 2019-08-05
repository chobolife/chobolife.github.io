var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/07/26/welcome-to-jekyll/",
        "teaser":null},{
        "title": "나의 Jekyll 여행기 (1)",
        "excerpt":"Jekyll의 시작 블로그를 시작하려고 한다. 아마 나의 이런저런 생각들, 그리고 내가 했던 것들을 기록하기 위한 용도로 사용할 것 같다. 그리고 나는 여러 가지 방법을 알아보고 나서, Jekyll을 사용해 보기로 했다. 일반 포털 사이트에서 제공하는 블로그는 자유도가 낮아 새로운 것을 시도해보기 어렵기 때문에 처음부터 별로 생각이 없었다. 그리고 다음으로 생각했던 것은...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/07/26/start-jekyll-1/",
        "teaser":null},{
        "title": "나의 Jekyll 여행기 (2)",
        "excerpt":"AWS에서 시도하다 지난 포스팅 (나의 Jekyll 여행기 (1))에서 했던 실패를 뒤로 하고 나는 계속 Jekyll을 사용할 수 있는 방법을 고민했다. 사실 Jekyll 홈페이지에는 Windows에서도 Jekyll을 사용할 수 있는 방법에 대해 나오기는 한다. 하지만 공식적으로 지원하지는 않는 플랫폼이고, 언제 어디서 무슨 문제가 발생할지도 모르는 것이었기 때문에 나는 다른 방법이 가능하면 다른...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/07/27/start-jekyll-2/",
        "teaser":null},{
        "title": "Jekyll로 만든 사이트를 github에 올리기",
        "excerpt":"일단 commit 지난 포스팅 (나의 Jekyll 여행기 (2))에서 Jekyll을 설치하고 jekyll build까지 실행해 보았다. 그리고 결과가 _site 폴더에 생성되는 것을 확인하였다. 그러면 이제는 _site 폴더에 생긴 사이트를 웹에 올리는 일만 남았다. 나는 github hosting을 이용하려고 생각하였다. Github에 올리면 git commit 명령으로 쉽게 올릴 수도 있고, 도메인도 해결이 되며 어느 정도까지는...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/07/28/jekyll-github/",
        "teaser":null},{
        "title": "Google drive에 공개 이미지 올리기",
        "excerpt":"Jekyll에서 이미지를 올리는 방법에 대해서 찾아보았고, 코드조각이라는 것을 이용하여 나름의 방법을 구축했다. 그 방법을 소개하려고 하는데 그에 앞서 우선 이번 포스팅에서는 Google drive에 이미지 파일을 올리고 웹에 공개하는 방법까지만 작성했다. 그렇게 올린 이미지 파일을 Jekyll post에 표시하는 방법은 다음 포스팅에서 다룰 예정이다. 네이버와 워드프레스에서 이미지 관리 방법의 차이 일단 먼저...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/07/29/google-drive-image/",
        "teaser":null},{
        "title": "Jekyll post에 이미지 첨부하기",
        "excerpt":"이전 포스팅 (Google drive에 공개 이미지 올리기)에서 구글 드라이브에 이미지 파일을 올리고 공개하는 방법을 소개했다. 이번 포스팅은 그렇게 올린 이미지 파일을 Jekyll에서 웹페이지에 포함시키는 방법에 대한 포스팅이다. 이미지를 표현하는 markdown 기본 문법 우선 Jekyll 공식 문서에 나와 있는 이미지 첨부 방법은 아래와 같다. 기본적인 syntax는 간단하다. ![alt-text-message](image-link) 이렇게 하면 이미지를...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/07/31/jekyll-image/",
        "teaser":null},{
        "title": "Jekyll 초안 관리에 대한 고민",
        "excerpt":"문제의식 Jekyll을 이용한 블로깅은 그 자체로 재미가 있었다. 게다가 포스팅이 쉽기까지 했다. (일단 Jekyll을 설치할 때까지는 약간 험난했지만 말이다.) 그런데 쓰다보니 한 가지 불편한 점이 있었다. 바로 초안을 관리하는 것이었다. 나는 사진이든 동영상이든 트위터같은 짧은 글이든 아니면 엄청나게 긴 길이든, 어떤 형태로든지 인터넷에 자료를 올리는 것은 publish, 즉 출판이라는 생각을...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/08/01/jekyll-draft/",
        "teaser":null},{
        "title": "EC2에서 S3에 접근하는 방법",
        "excerpt":"Your Name Jekyll 블로그의 초안을 AWS S3에 업로드 이전 포스팅(Jekyll 초안 관리에 대한 고민)에서 했던 고민의 결론은 _‘Jekyll 블로그의 초안을 github page에 commit하기 전에 AWS S3에 업로드해서 나만 먼저 확인해보겠다’_는 것이었다. 그리고 그것을 위해 약간의 삽질을 했지만 결국 AWS CLI를 이용하여 ubuntu에서 S3에 업로드하는 방법을 찾았다. 이번 포스팅에서는 그 방법을...","categories": ["블로그"],
        "tags": [],
        "url": "/blog/2019/08/04/ec2-s3-authority/",
        "teaser":null}]
