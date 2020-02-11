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
        "tags": ["일상","수영","수영기초","수영초보","팁","수영장"],
        "url": "https://chobolife.github.io/blog/2019/08/20/swim-start-1/",
        "teaser":null},{
        "title": "수영을 배우기 위한 준비 2편: 수영복",
        "excerpt":"이번 포스팅에서는 수영을 배울 때 어떤 것이 필요한지 말씀드리려고 합니다. 사실 수영 초보자가 처음 수영을 하려고 할 때 많이 고민이 되는 것이거든요. 자주 써보지도 않은 것이고, 사 본 적도 거의 없는 물건들인데 어떻게 골라야 할지 잘 모르는 건 당연하겠죠. 저도 수영을 1년 이상 했지만 수영용품에는 별로 관심도 없고 이것저것 많이...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","수영용품"],
        "url": "https://chobolife.github.io/blog/2019/08/29/swim-start-2/",
        "teaser":null},{
        "title": "[수영고정관념 1] 수영은 관절에 무조건 좋을까?",
        "excerpt":"오늘의 주제는 이것입니다. 정말 수영은 관절에 무조건 좋을까? ‘수영고정관념’을 시작하며… 안녕하세요. 초보라이프입니다. 수영을 아주 잘 하지는 않지만 그래도 열심히, 꾸준히 수영을 하고 있습니다. 수영을 하면서 몸으로 느끼고 머리로 생각했던 것들을 말씀드리는 데에 어떤 방법이 좋을까 고민해 보았는데요. 수영에 대한 일반적인 인식을 중심으로 꼭 그것이 맞다, 틀리다는 것을 넘어서 제 생각을...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","무릎","허리","관절"],
        "url": "https://chobolife.github.io/blog/2019/09/27/swim-and-joint/",
        "teaser":null},{
        "title": "수영장 정보: 분당올림픽스포츠센터 프로그램 안내",
        "excerpt":"안녕하세요. 오늘은 분당올림픽스포츠센터의 브로셔를 공유하고 정보를 알려드리려고 합니다. 각 프로그램의 시간, 요일, 수강료, 수강대상 등의 정보가 있습니다. 브로셔 전체의 pdf 파일은 이 포스트 제일 하단에 있습니다. 분당올림픽스포츠센터 사진입니다. 사진으로 알 수 있듯이 규모가 꽤 큽니다. 분당올림픽스포츠센터에서는 굉장히 많은 종목들의 강습이 이루어지고 있는데요. 저는 수영만 이용해 보았지만 수영과 아쿠아로빅, 헬스를 비롯해서...","categories": ["분당올림픽스포츠센터"],
        "tags": ["분당올림픽스포츠센터","분당","스포츠센터","성인","수영","아쿠아로빅","골프","헬스","토탈보디 토닝","배드민턴","탁구","스피닝바이크","요가","댄스로빅","에어로빅","검도","라인댄스","필라테스","발레핏","째즈댄스","다이어트댄스","댄스스포츠","줌바댄스"],
        "url": "https://chobolife.github.io/blog/2019/09/28/bundang-olympic/",
        "teaser":null},{
        "title": "귀에 물이 들어갔을 때 어떻게 해요?",
        "excerpt":"안녕하세요. 수영을 하다 보면 귀에 물이 들어갈 때가 많죠? 저도 자주 그래요. 근데 이게 처음에는 당황스러웠는데 인터넷에서 이 방법, 저 방법 찾아서 해 보다가 지금은 저에게 맞는 방법을 찾아서 그 방법으로 하고 있습니다. (사실은… 미리 말씀드리자면 그 방법이라는 것은 그냥 무리해서 빼려고 하지 말고 그대로 두는 거예요.) 고개 기울이고 뛰기...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","귀에 물"],
        "url": "https://chobolife.github.io/blog/2019/10/02/water-in-ear/",
        "teaser":null},{
        "title": "웹페이지에 지도 삽입하기",
        "excerpt":"지난 주에는 분당올림픽스포츠센터의 브로셔를 올리면서 포스팅에 지도를 삽입했다. (해당 포스팅은 수영장 정보: 분당올림픽스포츠센터 프로그램 안내이다.) 지도를 삽입하는 방법에 대해서 약간의 시행착오가 있었지만 지금은 좋은 방법을 찾았다. 지도를 제공하는 사이트 정확한 통계를 찾아보지는 않았지만, 아마도 우리나라에서는 네이버 지도, 카카오맵, 구글 지도 순으로 많이 사용될 것이다. 나는 국내 장소의 검색에 대해서는 카카오맵을,...","categories": ["블로그"],
        "tags": ["블로그","HTML","iframe","jekyll","지도","카카오맵","구글 지도"],
        "url": "https://chobolife.github.io/blog/2019/10/05/map-in-blog/",
        "teaser":null},{
        "title": "[수영고정관념 2] 수영은 몸 만들기에 좋은 운동이다?",
        "excerpt":"오늘의 주제는 이것입니다. 수영은 몸 만들기에 좋은 운동일까? 보통 수영선수라고 하면 떡 벌어진 넓은 어깨와 역삼각형의 다부진 몸을 떠올립니다. 그래서 저도 처음 수영을 시작할 때 열심히만 하면 그렇게 될 줄 알았습니다. 오늘도 살도 빠지고 근육도 멋있게 자란 몸짱을 꿈꾸면서 수영을 열심히 합니다. 수영과 몸매에 대한 의문 수영장에 처음 갔을 때는...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","다이어트","벌크업","근육","유산소운동"],
        "url": "https://chobolife.github.io/blog/2019/10/17/swim-muscle-diet/",
        "teaser":null},{
        "title": "분당올림픽스포츠센터 어린이, 청소년 프로그램 안내",
        "excerpt":"안녕하세요. 지난번에는 분당올림픽스포츠센터의 브로셔를 올리고 어떤 프로그램이 있는지 확인해 보았는데요. (수영장 정보: 분당올림픽스포츠센터 프로그램 안내) 해당 포스팅에 있는 내용은 성인용 프로그램이었죠? 분당올림픽스포츠센터에서는 그 외에도 어린이, 청소년 프로그램도 많이 운영하고 있는데요. 오늘은 그와 관련된 프로그램을 소개해 드리겠습니다. 지난 포스팅과 마찬가지로 시간, 요일, 수강료, 수강대상 등의 정보가 있구요. 브로셔 전체의 pdf 파일은...","categories": ["분당올림픽스포츠센터"],
        "tags": ["분당올림픽스포츠센터","분당","스포츠센터","어린이","청소년","수영","골프","째즈댄스","농구","리듬체조","탁구","배드민턴","검도","음악줄넘기","어린이체능","헬스","발레","치어리딩","발레스트레치","방송댄스"],
        "url": "https://chobolife.github.io/blog/2019/10/19/bundang-olympic-youth/",
        "teaser":null},{
        "title": "내가 수영을 권하는 이유",
        "excerpt":"안녕하세요. 오늘도 즐겁게 수영하고 있으신가요? 오늘은 제가 왜 수영을 하고 있는지 말씀드려 보도록 할게요. 제가 처음에 왜 수영을 시작하게 되었는지, 그리고 수영을 통해서 얻은 것이 무엇인지에 대한 이야기입니다. 계곡에서의 경험 어렸을 때 물에 빠져서 죽을 뻔한 경험 해 보신 적 있는 분들이 종종 있는데요. 저도 그 중의 한 명입니다. 정확히...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","스트레스","다이어트","수영효과"],
        "url": "https://chobolife.github.io/blog/2019/11/01/why-dont-swim/",
        "teaser":null},{
        "title": "물에 도저히 안 떠요. 사람이 어떻게 물에 뜰 수가 있죠?",
        "excerpt":"안녕하세요. 오늘은 나는 물에 도저히 뜨지 않는다 하시는 분들을 위한 팁을 알려드리려고 합니다. 우리 인간도 태어날 떄부터 수영을 잘 한다면 얼마나 재미있을까요. 아쉽게도 그렇지는 않습니다. 하지만 대신에 연습하면 누구나 할 수 있습니다. 나만 물에 안 뜬다? 그런 건 없습니다. 새빨간 거짓말: 몸에 힘을 빼라구? 수영을 하려면 제일 먼저 해야 하는...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","물에 뜨는 방법"],
        "url": "https://chobolife.github.io/blog/2019/12/02/why-do-i-sink/",
        "teaser":null},{
        "title": "음주 후 갑자기 실신하다 - 미주 신경성 실신",
        "excerpt":"안녕하세요. 요즘은 연말이라 많은 송년회 모임이 있는 시즌입니다. 다사다난했던 한 해 2019년을 보내며 사람들을 만난다는 명분 하에 갖는 송년회이지만 그 실상은 역시 술자리죠… Alcohol Beer GIF from Alcohol GIFs 저도 지난 주말에 가까운 지인들과 함께 송년 모임이 있었습니다. 그 자리에서 오랜만에 술을 마시게 되었고 제 주량을 넘어서는 술을 마시게 되었습니다....","categories": ["일상"],
        "tags": ["일상","의학정보","미주 신경성 실신","음주","탈수","응급실"],
        "url": "https://chobolife.github.io/blog/2019/12/17/vasovagal-syncope/",
        "teaser":null},{
        "title": "수영, 할까 말까? 수영이 잘 맞는 사람은 따로 있을까?",
        "excerpt":"안녕하세요. 이제 한 해가 가고 새해가 시작되는 연말연시입니다. 이때쯤 되면 내년에 이루고자 하는 소망 하나씩 떠올리실텐데요. 역시 제일 많은 결심을 하는 건 운동에 대한 것 아닐까요? 무슨 일이나 그렇듯이, 운동 역시 시작이 반입니다. 본격적으로 하기 전에 망설이고 고민하면서 귀차니즘을 이겨내고 운동을 시작하는 것은 어려운 일이죠. 하지만 시작했다고 해서 끝난 것이...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","팁","운동","건강"],
        "url": "https://chobolife.github.io/blog/2019/12/24/born-to-swim/",
        "teaser":null},{
        "title": "분당올림픽스포츠센터 자유수영 후기 및 공사 안내",
        "excerpt":"안녕하세요. 오늘은 제가 분당올림픽스포츠센터에 일일입장으로 자유수영을 하러 다녀왔는데요. 간단한 후기 및 수영장 천장 공사와 관련된 정보를 공유하려고 합니다. 분당올림픽스포츠센터 수영 일일입장 정보 분당올림픽스포츠센터는 서현역 근처에 있습니다. 서현역 AK플라자 2층으로 나오면 금방 갈 수 있는데요. 마을버스(3, 3-1, 3-2)나 시내버스(520)로 두 정거장이고, 걸어서도 7~8분 정도면 도착합니다. 수영장에 입장하려면 엘리베이터를 타고 4층으로 올라가야...","categories": ["분당올림픽스포츠센터"],
        "tags": ["분당올림픽스포츠센터","분당","스포츠센터","일상","수영","수영기초","수영초보","자유수영"],
        "url": "https://chobolife.github.io/blog/2020/01/13/bundang-olympic-under-construction/",
        "teaser":null},{
        "title": "우한 폐렴(신종 코로나바이러스)과 수영",
        "excerpt":"안녕하세요. 2020년이 시작하자마자 1월부터 국내외에서 사람들을 떨게 만드는 뉴스가 있습니다. 바로 신종 코로나바이러스(우한 폐렴)가 유행하고 있다는 것이죠. 새해를 맞이해서 수영을 비롯해 운동을 하시려는 분들이 많으셨을텐데요. 차라리 한두 달 전에 신종 코로나바이러스가 유행했다면 운동 말고 기술 습득, 외국어 학습, 독서 등 다른 영역의 자기계발을 목표로 삼았을텐데 “하필이면 내가 운동을 시작하자마자 이런...","categories": ["수영"],
        "tags": ["일상","수영","수영기초","수영초보","자유수영","우한 폐렴","신종 코로나바이러스"],
        "url": "https://chobolife.github.io/blog/2020/01/30/2019-nCoV-coronavirus-swimming/",
        "teaser":null},{
        "title": "Google Analytics 설치하기",
        "excerpt":"구글 애널리틱스(Google Analytics)를 블로그에 달았다. 조금 오래 전에 달긴 했지만 이제서야 관련 내용을 포스팅한다. 사실 그 동안에는 애초에 블로그에 유입되는 트래픽도 거의 없었기 때문에 애널리틱스를 달기만 하고 제대로 관찰한 적도 없었다. 지금은 1주일동안 30~50 정도의 방문자가 있기 때문에 그래도 애널리틱스에 들어가 보는 재미가 조금은 생겼다. 구글 애널리틱스(GA)가 뭐지? 나는 이전에...","categories": ["블로그"],
        "tags": ["블로그","jekyll","구글 애널리틱스"],
        "url": "https://chobolife.github.io/blog/2020/02/11/google-analytics/",
        "teaser":null}]
