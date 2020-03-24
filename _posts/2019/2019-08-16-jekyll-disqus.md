---
layout: single
title:  "Jekyll에 disqus 연동하기"
excerpt: "#역시disqus야 #어차피아무도안써 #그냥장식용"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-08-16 21:53:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - Minimal mistakes
  - disqus
  - 댓글
---
Jekyll에 테마를 설정한 후 이제 블로그답게 만드는 일은 하나 남았다.
그것은 바로 댓글이다.
사실 댓글 시스템이 꼭 필요한 블로그라면 이미 성공한 블로그일 것이다.
대부분의 개인 블로그에는 댓글 섹션이 있지만 유명무실하다.
방문자도 많지 않을 것이고, 방문자 중에서 작성자에게 피드백을 해 주는 사람은 그보다 훨씬 적을 것이기 때문이다.
단언컨대, 댓글로 의견이 활발하게 교환되는 블로그는 분명히 이미 대박이 난 블로그임에 틀림없다.

나는 그렇게까지 블로그를 흥행시킬 자신이 없다.
그러고 싶은 생각도 별로 없다.
그냥 고만고만한 개인 블로그를 하고 싶다.
**하지만** 어쨌든 나도 그 유명무실한 것이나마 좀 달아보자.

## disqus란?
이미 이 글을 읽고 있는 사람이라면 Jekyll도 알 것이고 disqus도 알 것이라고 생각한다.
하지만 약간만 설명하자면...

Jekyll은 정적 웹사이트 생성 도구이다.
정적 웹사이트에서는 클라이언트(=사용자)의 요청을 받고 이를 처리해 줄 서버가 없다.
그렇기 때문에 원래는 댓글을 달 수가 없다.

하지만 방법이 전혀 없는 것은 아니다.
[Disqus][l-disqus]{:target='_blank'}는 이런 정적 웹사이트에 간단한 javascript 코드 추가만으로도 댓글을 읽고 쓸 수 있게 해 준다.
물론 wordpress 같은 동적 웹사이트에도 사용이 가능하다.

{% include i-g.html id="1bOcW9nwJllnnmo5OdGgy4X3ayIBRxIPJ" alt="Disqus는 어떤 사이트에서도 쉽게 댓글을 이용할 수 있게 해 주는 서비스이다." title="disqus 홈페이지의 초기 화면" %}

Disqus와 유사한 서비스는 많이 있다.
하지만 그 중에서 disqus가 가장 유명하고 많이 쓰이는 것 같다.

## disqus 가입 및 사이트 생성
[Disqus][l-disqus]{:target='_blank'}는 구성이 직관적이고 간단하여 특별한 가이드가 없어도 쉽게 가입할 수 있다.
초기화면에서 "GET STARTED"라는 버튼을 누르면 가입할 수 있는 화면이 나온다.

{% include i-g.html id="1AV3JaimVRLZb5joYPhBVz4N0RFbZLVCF" alt="Facebook, Twitter, Google의 계정이 있으면 바로 시작할 수 있고, 계정이 없으면 disqus에 가입하여 서비스를 이용할 수 있다." title="Disqus의 가입 화면" %}

Facebook, Twitter, Google 계정이 있으면 별도로 가입할 필요가 없다.
해당 계정으로 바로 로그인할 수 있다.
하지만 계정이 없거나 연동을 원하지 않는다면 이메일 인증 후 가입이 가능하다.
로그인 또는 가입하면 다음 화면으로 넘어간다.

{% include i-g.html id="1qDq8bv-E6DTK4pvFM5qU7W0fH2VNVehq" alt="로그인하면 댓글을 달 것인지, 본인의 웹사이트에 disqus를 설치할 것인지 선택한다." title="Disqus의 심플한 두 가지 메뉴" %}

여기에서는 사이트에 댓글을 달기 원하는지, 아니면 본인이 소유한 사이트에 disqus의 댓글을 설치하기 원하는지 선택한다.
지금은 내 블로그에 댓글 기능을 추가하려는 것이므로 두 번째 메뉴를 클릭한다.
그러면 새로운 사이트를 만드는 다음 화면으로 넘어간다.

{% include i-g.html id="1GGAuv3Iird9yULo7vTZYyHp_oFqNPquV" alt="본인의 사이트에 disqus를 설치하려면 먼저 위와 같은 정보를 입력해야 한다." title="웹사이트에 disqus 설치하기" %}

이 화면에서는 웹사이트의 이름과 카테고리를 설정한다.
Site Owner는 본인이 가입했을 때의 이름으로 자동으로 설정된다.
나는 Website Name은 chobolife라고 입력, Category는 Living으로 선택하였다.

{% include i-g.html id="1KvjUOGeTJWjyNZxjQepLPhNZVNWY9sK-" alt="다음으로는 요금제를 선택해야 한다." title="Disqus의 요금제 선택 화면" %}

그리고 나서 위의 화면이 나오는데 처음엔 당황스러웠다.
Billed Monthly, Billed Yearly 둘 중에 하나 선택하라는데...
아니 disqus가 유료인 줄은 몰랐는데??
원래 유료였나?
이런 생각을 하며 혼란스러워 하고 있던 중에 스크롤을 내려보니 다행히도 Basic plan이 있었다.

{% include i-g.html id="15tXJqrByEq9uyg-cesYxjNVwMVK_cLi2" alt="무료 요금제인 Basic이 있다. 기본적인 댓글만 써도 된다면 Basic plan으로 충분하다." title="Disqus의 무료 요금제" %}

휴...
가벼운 마음으로 Basic plan에 있는 Subscribe now 버튼을 클릭한다.
다음으로는 어떤 플랫폼에 disqus를 올릴지 선택하는 것이다.

{% include i-g.html id="1E9W1rPpatQLxgsxYEy-5LX76rw4oiCtY" alt="Disqus를 설치할 본인의 웹사이트가 어떤 플랫폼 기반인지 선택한다. 많은 웹사이트 생성 도구가 있는데, 이 중에서 본인이 사용하고 있는 것을 찾아서 클릭한다." title="어떤 플랫폼을 이용하고 있는지 선택하기" %}

나는 Jekyll을 사용하고 있으므로 Jekyll을 찾아서 클릭했다.
여기서 보니 웹사이트를 만들 수 있는 도구가 참 많은 것 같다.

{% include i-g.html id="14FCIMn5VmeNMe6IJbA1Ps9X4DlYMlddr" alt="선택한 플랫폼에서 disqus를 어떻게 설치하는지 안내하는 화면이 나온다. Jekyll을 선택했을 때의 안내 화면이다." title="Jekyll에서 disqus를 설치하는 방법" %}

다음 화면에는 Jekyll에서 어떻게 disqus를 사용하는지 간단한 안내가 나와 있다.
기본적으로는 이 안내를 참고하여 disqus를 붙이면 된다.
그런데 본인이 사용하는 Jekyll 테마에서 쉽게 disqus를 다는 방법을 제공할 수도 있으므로, 테마의 메뉴얼을 먼저 보는 것이 좋다.
만약 아무 테마를 사용하지 않거나, 테마에서 별도로 제공하는 방법이 없다면 위의 그림대로 하면 된다.

## Minimal mistakes에 disqus 달기
내가 사용하는 [Minimal mistakes 테마]({{ site.baseurl }}{% link _posts/2019/2019-08-12-jekyll-theme.md %})에는 disqus를 쉽게 달 수 있는 방법이 있다.
먼저 `_config.yml` 파일을 열어서 `comments`를 찾으면 아래와 같은 부분이 있다.
```
comments:
  provider    : "disqus" # false (default), "disqus", "discourse", "facebook", "staticman", "staticman_v2", "utterances", "custom"
  disqus:
    shortname : "chobolife" # https://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-
```

이 아래에도 조금 더 이어지기는 하는데 disqus와는 관계가 없으므로 신경쓰지 않아도 된다.
저 중에서 `provider`에는 `disqus`를, `shortname`에는 위에서 만들어 둔 Website Name을 입력하면 된다.
나의 경우에는 `chobolife`라고 입력하였다.

그리고 같은 파일에서 맨 아래쪽에 comments를 enable시켜주는 부분이 있다.
아래와 같이 `defaults - values - comments`의 값을 `true`로 입력시켜 주어야 한다.
다른 부분은 관계없다.
```
# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: false
      read_time: false
      comments: true
      share: false
      related: true
```
이렇게 하면 설정은 다 끝났다.
커맨드 라인에서 `jekyll build`를 치고 능숙하게 `git commit`과 `git push`를 이어서 실행하였다.
그리고 나서 github에 호스팅한 내 블로그를 열어 보면 당연히 disqus의 댓글이 동작하겠지?

**땡! 틀렸습니다.**

안 나온다. 어라? 이상하다. 아무리 해봐도 잘못이 없는데 안 나온다.
내가 직접 jekyll의 소스 코드를 보며 따라가 보았다.

`_includes/comments.html`에 보면 이런 부분이 있다.
{% raw %}
```
{% when "disqus" %}
  <h4 class="page__comments-title">{{ comments_label }}</h4>
  <section id="disqus_thread"></section>
```
{% endraw %}
아마 여기에 disqus의 댓글 섹션이 들어가는 것 같다.
그런데 크롬의 개발자 도구에서 보면 내가 만든 페이지에 `disqus_thread`라는 섹션이 없다.
그러면 이 `comments.html`을 include하는 부분이 어디인지 다시 찾아보자.

이것은 `_layout/single.html` 파일 안에 있다.
{% raw %}
```
{% if jekyll.environment == 'production' and site.comments.provider and page.comments %}
  {% include comments.html %}
{% endif %}
```
{% endraw %}

`comments.html`을 include하려면 세 개의 조건을 만족해야 하는데 뒤의 두 조건은 아까 `_config.yml`에서 설정했기 때문에 true가 된다.
그런데 첫 번째 조건은 생소했다.
아마 저것 때문에 disqus가 삽입되지 않고 있는 것 같았다.
그래서 저것과 관련해서 구글링을 해 보니 [빌드 시점에 Jekyll 환경변수 지정하기][l-jekyll-docs-environment]{:target='_blank'}라는 문서를 발견했다.

Jekyll의 환경 변수를 설정해 주면 저 부분이 돌아가게 될 것 같다.
그래서 위 문서에서 말하는 대로 `jekyll build` 대신 이렇게 실행해 보았다.
```
JEKYLL_ENV=production jekyll build
```

그랬더니 된다.
이제 문제 없이 disqus 영역이 보인다.

하지만 매번 저 명령을 치는 것은 귀찮을 것 같다.
물론 저 명령을 shell script 파일로 만들고 그걸 exclude시키면 되긴 하지만...
어차피 disqus를 다는 데에 성공했고, 앞으로 계속 이렇게 달 것이므로 해당 부분의 `if`문을 수정했다.
{% raw %}
```
{% if site.comments.provider and page.comments %}
  {% include comments.html %}
{% endif %}
```
{% endraw %}

이제 블로그에 댓글 시스템까지 붙였다.
다만 한 가지 마음에 걸리는 것은, 익명 댓글이 불가능하다는 것이다.
Facebook, Twitter, Google 또는 Disqus 계정이 있으면 그것으로 로그인하여 댓글을 달 수 있고, 계정이 없다면 댓글을 달 수가 없다.
사실 웹서핑하는 사람 입장에서는 누구의 블로그인지도 모르고 신뢰할 수 없는 곳에 내 계정으로 로그인해서까지 댓글을 달고 싶지 않을 것이다.
블로그 관리자 입장에서는 스팸으로부터 해방되겠지만 자유로운 피드백이나 의견 교환이 어렵겠지...
(disqus의 시스템에 로그인해서 댓글을 다는 것이 본인의 SNS 계정에 어떤 연동이 되는지는 잘 모르겠다. 그런데 개인정보에 민감한 사람이라면 찜찜한 마음은 들 것 같다.)
하지만 이건 어쩔 수 없는 문제인 것 같다.
아쉽지만 정적 웹사이트에 댓글 섹션을 넣은 것으로 만족하자.

{% capture related %}
#### 관련 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [Jekyll 테마 설정하기]({{ site.baseurl }}{% link _posts/2019/2019-08-12-jekyll-theme.md %})
* [Jekyll의 Minimal mistakes 테마에서 HTML 압축하기]({{ site.baseurl }}{% link _posts/2019/2019-08-17-jekyll-compress.md %})
* [웹페이지에 지도 삽입하기]({{ site.baseurl }}{% link _posts/2019/2019-10-05-map-in-blog.md %})
* [Google Analytics 설치하기]({{ site.baseurl }}{% link _posts/2020/2020-02-11-google-analytics.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-disqus]: https://disqus.com/
[l-jekyll-docs-environment]: http://jekyllrb-ko.github.io/docs/configuration/#specifying-a-jekyll-environment-at-build-time

