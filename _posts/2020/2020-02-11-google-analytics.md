---
layout: single
title:  "Google Analytics 설치하기"
excerpt: "#방문자를분석해보자 #근데방문자가없잖아"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2020-02-11 20:02:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - 구글 애널리틱스
---
[구글 애널리틱스(Google Analytics)][l-google-analytics]{:target='_blank'}를 블로그에 달았다.

조금 오래 전에 달긴 했지만 이제서야 관련 내용을 포스팅한다.
사실 그 동안에는 애초에 블로그에 유입되는 트래픽도 거의 없었기 때문에 애널리틱스를 달기만 하고 제대로 관찰한 적도 없었다.
지금은 1주일동안 30~50 정도의 방문자가 있기 때문에 그래도 애널리틱스에 들어가 보는 재미가 조금은 생겼다.

## 구글 애널리틱스(GA)가 뭐지?
나는 이전에 블로그나 웹사이트 운영 경험이 없고 구글 애널리틱스를 이용해 본 적도 없다.
사이트 운영에 도움이 될 통계를 제공해 준다고는 들었는데 그게 얼마나 자세한 자료인지, 얼마나 보기 좋게 제공해 주는지는 이 블로그에 달기 전까지는 몰랐다.

구글 애널리틱스에서 제공하는 통계는 워낙 다양해서 나도 아직 정확히 어떤 것이 있는지 모른다.
어떻게 활용해야 할지는 더더욱 모르겠고 말이다.
일단 아래와 같은 5가지 종류의 보고서가 있고, 각 보고서마다 많은 하위 메뉴가 있다.

1. 실시간
1. 잠재고객
1. 획득
1. 행동
1. 전환

위 내용은 2020년 2월 현재 기준으로, 앞으로 더 많은 보고서가 추가될 수도, 활용도가 떨어지는 보고서는 사라질 수도 있다.

그 중에 내가 종종 보고 참고하는 자료들은 **획득**과 **행동**이다.
우선 첫 번째 항목인 **실시간**은 방문자가 많은 사이트라면 모를까, 블로그 수준에서는 볼 이유가 없다.
그리고 **잠재고객**과 **전환**은 사업을 목적으로 운영하는 사이트(ex. 쇼핑몰)에서는 활용 가치가 높겠지만 개인 블로그에서는 이 항목들 역시 볼 필요가 없어 보인다.

**획득** 항목에서는 이 사이트에 어떻게 사용자가 들어왔는지 보여준다.
예를 들면 검색에 의해서인지, 직접 주소 입력을 통해서인지, SNS를 통해서인지 등이다.

{% include i-g.html id="1u55OM36fkjS1oEWz9Hj32wAEJHdbqwKQ" alt="구글 애널리틱스의 획득 항목을 통해 방문자들이 어떻게 이 사이트에 들어왔는지 알 수 있다." title="구글 애널리틱스의 획득 보고서" %}

Direct는 원소스 없이 사이트에 바로 들어온 트래픽을 의미한다.
직접 도메인 주소를 입력했거나 웹브라우저의 즐겨찾기를 통해서 들어오는 것 등이 있을 것이다.
현재 내 블로그는 SEO도 적용하지 않고 있고 특별히 홍보를 하고 있는 것은 아니므로 Direct 접근은 전적으로 내가 만들어 낸 트래픽이다.
최근에 블로그에 광고도 넣고 contact form도 넣으면서 확인하기 위해 들어왔던 트래픽이 잡힌 것이다.
Direct를 제외한 블로그의 순수 방문자는 Organic Search와 Referral로 접근한 것인데 Organic Search에 해당하는 것은 아직 구글 검색밖에는 없다.
구글 봇은 이 블로그를 자동으로 인덱싱했지만, 네이버와 다음에서는 아직 이 블로그가 검색되지 않기 때문이다.
아쉬운 것은 이 경우에 어떤 검색어를 통해서 유입된 것인지 알면 좋겠는데 그런 기능은 없는 것 같다.
아니면 있는데 블로그 방문자가 적어서 잡히지 않는 것일 수도 있다.
그리고 Referral은 [카카오맵에 등록된 장소][l-place-kakaomap]{:target='_blank'}인 분당올림픽스포츠센터에 내 리뷰를 등록한 적이 있는데 그것을 통한 접근인 것 같다.
**획득** 항목의 보고서로 간단하게나마 이 정도의 내용을 분석할 수 있다.
블로그 방문자가 늘어나면 더 깊은 분석도 가능할 것이다.

그리고 내가 많이 보는 것은 **행동** 보고서이다.
**행동**은 말 그대로 사이트에 들어온 사람이 어떤 행동들을 하는지에 관한 것이다.
**행동->개요**에서는 전체 페이지뷰 수를 알 수 있도록 아래와 같이 통계를 제공한다.

{% include i-g.html id="16ti3inZb1kLjl27Kq37qRjLa28LJz3Uf" alt="행동 보고서를 통해서는 각 페이지의 페이지뷰, 페이지에 머문 시간 등을 볼 수 있다. 방문자가 어떤 글을 더 많이, 그리고 오래 보았는지는 중요한 자료가 될 것이다." title="구글 애널리틱스의 행동 보고서" %}

블로그에 광고를 게재하는 것과 about 페이지에 contact form을 넣는 것 때문에 도메인 루트와 about 페이지에 많은 페이지뷰가 있는 것이 보인다.

**행동->사이트 콘텐츠->방문 페이지**에서는 사이트에 처음 유입된 이용자가 어떤 페이지를 통해서 들어왔는지를 보여준다.

{% include i-g.html id="1mbzHJVb-nj7qzVt6jEYzUbr-_2FzV5xa" alt="방문 페이지에서 제공하는 자료이다. 획득, 동작, 전환 지표를 한 눈에 볼 수 있다." title="구글 애널리틱스의 행동/사이트 콘텐츠/방문 페이지 보고서" %}

**행동->사이트 콘텐츠->종료 페이지**에서는 사이트의 서핑을 마치고 종료한 이용자가 마지막으로 어떤 페이지에서 나갔는지를 보여준다.

{% include i-g.html id="1p6QyS5N6jcPLPJM2Qwehdet6lYshMTyO" alt="종료 페이지이다. 방문자가 마지막으로 보고 사이트 밖으로 나간 경우, 무엇 때문에 보고 나갔는지 알 수 있다. 사이트 운영자가 방문자를 가급적 오랫동안 사이트에 붙잡아 두려 한다면, 이 항목을 눈여겨 보아야 할 것이다." title="구글 애널리틱스의 행동/사이트 콘텐츠/ 종료 페이지 보고서" %}

제일 재미있는 것은 **행동->행동 흐름**이다.
블로그에 방문한 사람들이 어떤 흐름으로 탐색하는지 한 눈에 알 수 있다.

{% include i-g.html id="11Iv2Ko6t_anMH9YRTJJV2XWXj2T1UMgg" alt="행동 흐름은 다이어그램으로 사용자들의 이동 경로를 보여준다." title="구글 애널리틱스의 행동/행동 흐름" %}

캡쳐 화면에는 두 번째 상호작용까지밖에 담지 못했지만 세 번째 상호작용까지 있다.
사이트가 더 커서 그 이상 상호작용이 있다면 더 담을 수 있을지 모르겠다.

내가 구글 애널리틱스를 잘 몰라서 활용을 못 하고 있기는 하지만 그래도 꽤 많은 정보를 알 수 있다.
100%는 고사하고 한 20%정도나 볼 줄 알려나?
구글 애널리틱스는 소규모 개인 블로그인 이 블로그에도 어느 정도 도움이 된다.
그러니 이용자가 많은 사이트, 쇼핑몰, 수익형 블로그 등에서는 더더욱 좋은 자료가 될 것이고, 구글 애널리틱스를 꼭 설치하고 활용해야 한다고 생각한다.

## 구글 애널리틱스 설치하기
구글 애널리틱스는 구글 계정만 있으면 일단 시작할 수 있다.
물론 애널리틱스를 설치할 웹사이트는 당연히 있어야 한다.

일단 [구글 애널리틱스][l-google-analytics]{:target='_blank'} 사이트에 들어가서 구글 계정으로 로그인한 후 가입한다.
그러면 사이트에 대한 추적 정보를 얻을 수 있다.
추적 정보는 사이트의 각종 정보 수집을 위한 코드이다.
이 추적 정보를 통해 사이트 방문, 행동 등에 관한 정보를 구글 애널리틱스 서버가 수집할 수 있는 것이다.

{% include i-g.html id="1sEeeYiGNm5dzAGAA1erMYpOUHXfBmMs_" alt="구글 애널리틱스를 사이트에 설치하기 위해서는 범용 사이트 태그(gtag.js) 박스 안에 있는 코드를 추가해야 한다. 해본 적 없다면 코드를 직접 다루는 것이 약간 생소할 수 있지만 어려운 작업은 아니다." title="구글 애널리틱스의 추적 코드" %}

저 코드를 사이트 내에 있는 모든 페이지의 `<head>`와 `</head>` 사이에 넣어야 한다.
티스토리, 워드프레스를 비롯한 대부분의 블로그 플랫폼에서 head 커스터마이징을 제공할 것이다.
그 방법에 따라서 하면 쉽고 편하게 할 수 있다.
단, 폐쇄적인 정책으로 운영되고 있는 네이버에서는 가능한지 모르겠다.

## Jekyll에서 구글 애널리틱스 설치하기
Jekyll에서는 모든 페이지가 참조하는 default layout에 삽입하면 된다.
그것은 layout 파일 자체에 넣어도 되고, 애널리틱스 추적 코드만 담은 파일을 만들어서 include시켜도 된다.
그런데 현재 이용 중인 Minimal mistakes 테마에서 analytics 기능을 제공하고 있었기 때문에, 간단히 정보만 입력하면 쉽게 가능했다.

`_config.yml` 파일을 열어 보면 아래와 같은 부분이 있다.

```
# Analytics
analytics:
  provider       : false # false (default), "google", "google-universal", "custom"
  google:
    tracking_id  :
    anonymize_ip : # true, false (default)
```

위 부분에서 `provider`와 `tracking_id`를 수정해 주면 된다.
`provider`에는 "google"을, `tracking_id`에는 구글에서 제공한 추적 ID를 입력한다.
그러면 아래와 같이 될 것이다.

```
# Analytics
analytics:
  provider       : "google"
  google:
    tracking_id  : "UA-*********-*"
    anonymize_ip : # true, false (default)
```

추적 ID는 UA로 시작하고 뒷부분은 숫자인데, 정보는 *로 마스킹한 것이다.

저 부분을 수정하면 `_includes/analytics.html` 에 있는 아래 부분에 반영된다.

{% raw %}
```
{% if jekyll.environment == 'production' and site.analytics.provider and page.analytics != false %}

{% case site.analytics.provider %}
{% when "google" %}
  {% include /analytics-providers/google.html %}
{% when "google-universal" %}
  {% include /analytics-providers/google-universal.html %}
{% when "google-gtag" %}
  {% include /analytics-providers/google-gtag.html %}
{% when "custom" %}
  {% include /analytics-providers/custom.html %}
{% endcase %}

{% endif %}
```
{% endraw %}

`provider`를 `"google"`이라고 입력하였으므로 `when` 분기 중에서 가장 첫 번째에 있는 코드만 실행될 것이다.
그래서 `/analytics-providers/google.html` 파일이 저 자리에 include될 것이다.
저 파일을 열어서 내용을 확인해 보지는 않았지만, 아마 구글 애널리틱스의 스크립트를 불러오는 뻔한 코드가 있지 않을까?

단, 저 코드가 실행되기 위해서는 맨 위의 `jekyll.environment == 'production'`을 만족시켜야 한다.
Jekyll build를 실행할 때 아래와 같이 production mode로 하면 위 코드가 실행된다.
```
JEKYLL_ENV=production jekyll build
```
Production mode가 아니면 위 부분은 실행되지 않는다.
현재는 production mode를 적용하는 부분은 analytics밖에 없다.
간단한 수정이나 레이아웃, 디자인 변경 등을 한 후 공개하기 전 버전을 확인하고자 하는 경우에는 production mode를 끄고 아래와 같이 build한다.
```
jekyll build
```
이렇게 build한 후에 `git push`를 수행하면 그대로 공개가 되므로, 위와 같이 build한 후에는 자체적으로만 확인해야 한다.

자 그럼 이렇게 구글 애널리틱스도 설치했으니 이제 방문자만 많아지면 되겠다.

응?

<div class="tenor-gif-embed" data-postid="5036980" data-share-method="host" data-width="100%" data-aspect-ratio="1.5151515151515151"><a href="https://tenor.com/view/ponder-pondering-hmm-tapping-wondering-gif-5036980">Ponder Pondering GIF</a> from <a href="https://tenor.com/search/ponder-gifs">Ponder GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

{% capture related %}
#### 관련 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
* [웹페이지에 지도 삽입하기]({{ site.baseurl }}{% link _posts/2019/2019-10-05-map-in-blog.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-google-analytics]: https://marketingplatform.google.com/intl/ko/about/analytics/
[l-place-kakaomap]: https://place.map.kakao.com/10946071

