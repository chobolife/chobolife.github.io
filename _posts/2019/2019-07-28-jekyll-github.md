---
layout: single
title:  "Jekyll로 만든 사이트를 github에 올리기"
excerpt: "#결국github #역시github이야 #Github탐험기"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-07-28 14:35:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - github
  - git
  - 호스팅
---
[지난 포스팅 (나의 Jekyll 여행기 (2))]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})에서 Jekyll을 설치하고 `jekyll build`까지 실행해 보았다.
그리고 결과가 `_site` 폴더에 생성되는 것을 확인하였다.
그러면 이제는 `_site` 폴더에 생긴 사이트를 웹에 올리는 일만 남았다.
나는 github hosting을 이용하려고 생각하였다.
Github에 올리면 `git commit` 명령으로 쉽게 올릴 수도 있고, 도메인도 해결이 되며 어느 정도까지는 무료이다.

## 일단 commit
먼저 github에 repository를 만들었다.
Repository의 이름은 사용할 github 계정의 이름이자 도메인의 이름과 같은 `chobolife.github.io`라고 생성했다.
Github에 계정을 만들고 난 뒤에 필요한 작업은 다른 포스팅에서 설명할 예정이다. (key를 등록하여 ssh에서 github에 쉽게 접근할 수 있게 하는 설정)

그리고 command line에서 일단 git을 사용하기 위해 아래와 같은 설정을 해야 한다.
```
git config --global --edit
```
Git 자체가 협업을 위한 도구이다보니 사용자의 이름과 이메일 주소를 먼저 입력해야만 작업을 할 수 있다.
위 명령은 그것을 위한 명령이다.

그런데 이렇게 했더니 nano가 뜬다.
vim에 익숙하고 nano는 전혀 써 본 적이 없기 때문에 나는 이걸 vim으로 바꾸고 싶었다.
물론 이 기회에 nano를 써볼 수 있기도 하겠지만 vim으로 설정을 바꾸는 것이 더 빠르고 편할 것 같아서 vim으로 바꾸었다.
먼저
```
which vim
```
명령으로 vim의 위치를 알아내었다.
내 경우에는 `/usr/bin/vim`이다.
그러면
```
git config --global core.editor /usr/bin/vim
```
을 입력한다.
그러면 git의 기본 편집기가 nano에서 vim으로 변경이 된다.
그리고 나서 다시
```
git config --global --edit
```
명령으로 git 사용자 정보를 입력하고 나면 git을 사용할 수 있는 상태가 된다.

이제 `_site` 폴더에 있는 파일들을 github에 올려야 하는데, 우선 `index.html` 파일 하나만 올려보기로 했다.
`_site` 폴더에서 아래와 같은 명령을 수행한다.
```
git init
git remote add origin git@github.com:chobolife/chobolife.github.io.git
git add index.html
git commit -m "first commit"
git push origin master
```

Github repository를 확인해보면 아래와 같다.

{% include i-g.html id="1ohbainY8rXtT8NU3owAAlrNbV0fuGt2C" alt="웹에서 repository에 들어가 보면 index.html 파일이 정상적으로 commit된 것을 확인할 수 있다." title="index.html 파일만 commit한 후의 repository" %}

`index.html` 파일이 잘 올라간 것을 확인할 수 있다.

## 웹페이지 올려보기
Github repository에 파일은 바로 올라가지만 이것이 웹에 표시되기까지는 시간이 조금 걸리는 것 같다.
잠시 후 주소를 찾아 들어와보니 이렇게 출력된다.

{% include i-g.html id="1Vm8epjRHPsCsLXlPw9zraNIbOMuipSDS" alt="index.html 파일만 올리면 웹브라우저에는 볼품없이 표현된다." title="index.html만 올렸을 때 웹브라우저에 표현되는 화면" %}

`index.html` 파일 하나만 올린 상태이기 때문에 css 적용도 안 되어 있고 이래저래 볼품없는 디자인이긴 하다.
하지만 우선 git으로 github에 제대로 올린 것 같다.
이어서 모든 파일을 올려보았다.
`_site` 폴더에서 아래와 같이 수행했다.
```
git add *
git commit -m "initial files"
git push origin master
```

잠시 후 확인해보니 이렇게 표시된다.

{% include i-g.html id="17QUGDeaS_XZhlDZNlsizfaK4Nu7R3CJX" alt="site 폴더의 모든 파일을 올리고 Internet Explorer로 보면 그나마 아까보다는 나아진다." title="Jekyll을 build한 후 site 폴더의 모든 파일을 올린 뒤 Internet Explorer에 표현되는 첫 페이지" %}

잘 된다.
그런데 레이아웃이 조금 겹치고 깨지는 듯한 모습이다.
이게 왜 이러지... 뭔가 테마를 적용해야 하나? 하는 생각을 하는데...
아맞다. Internet Explorer구나.
Internet Explorer 11에서 보면 레이아웃이 위 그림처럼 약간 깨진다.
Chrome에서 보면 아래 그림처럼 잘 보인다.

{% include i-g.html id="13kzd4B-zXN1gSQqyLZxUeJpiLpEuEnlS" alt="Jekyll의 기본 테마를 Chrome에 띄우고 보면 훨씬 낫다." title="Jekyll을 build한 후 site 폴더의 모든 파일을 올린 뒤 Chrome에서 보았을 때의 첫 페이지" %}

아마 Firefox나 Opera 등에서도 잘 보일 것 같다.
Jekyll의 기본 테마는 Edge는 어떨지 모르겠지만 적어도 IE는 지원하지 않는 것 같다.

자동으로 생성된 첫 번째 포스팅인 [welcome-to-jekyll]({{ site.baseurl }}{% link _posts/2019/2019-07-26-welcome-to-jekyll.md %})은 삭제하지 않을 예정이다.
스스로 Jekylling을 성공했다는 일종의 기념품이랄까?
왠지 간직하고 싶다.

그럼 본격적으로 포스팅을 해 보기 위해 이미지를 올리는 방법, 링크 거는 방법, 테마 적용, disqus 삽입 등을 알아봐야겠다. 써 놓고 보니 할 게 많네...
(지금까지의 포스팅은 블로그에 직접 올리고 있는 것이 아니다. 메모장에 글을 기록하고 있다. 아마 다음 작업 이후에 글을 몰아서 올리게 되지 않을까 생각한다.)

{% capture previous %}
#### 이전 포스트

* [나의 Jekyll 여행기 (1)]({{ site.baseurl }}{% link _posts/2019/2019-07-26-start-jekyll-1.md %})
* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
{% endcapture %}

<div class="notice--primary">
  {{ previous | markdownify }}
</div>

{% capture related %}
#### 관련 포스트

* [Welcome to Jekyll!]({{ site.baseurl }}{% link _posts/2019/2019-07-26-welcome-to-jekyll.md %})
* [Google drive에 공개 이미지 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-29-google-drive-image.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Jekyll 테마 설정하기]({{ site.baseurl }}{% link _posts/2019/2019-08-12-jekyll-theme.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

