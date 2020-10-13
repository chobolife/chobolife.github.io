---
layout: single
title:  "Jekyll의 Minimal mistakes 테마에서 HTML 압축하기"
excerpt: "#아무도관심없지만 #쓸데없이발동한욕심"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-08-17 20:26:00 +0900
last_modified_at : 2020-02-16 10:59:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - HTML 압축
  - Minimal mistakes
---
Jekyll로 웹사이트를 만드는 것은 아주 만족스러웠다.
그리고 처음에는 이 블로그에서 시작했지만, 다른 사이트도 만들어보고 싶은 욕심이 생겨서 조금 해 보고 있다.

## HTML 압축이 필요한 이유
그런데 마크다운에서 HTML로 변환이 완료된 파일을 열어 보면 조금 마음에 안 들었다.
아래는 지난 포스팅([Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %}))의 html 파일을 열어 본 것이다.

{% include i-g.html id="1lzVIUFj2bxBVweMh7KLW0joANwEpgD80" alt="Jekyll로 생성한 HTML 파일에 줄바꿈이 많이 들어 간 모습이다." title="Jekyll로 생성한 HTML 파일의 예 1" %}

맨 윗 부분에 너무 많은 blank line이 있다.
이것을 Jekyll의 layout 파일이나 include 파일을 따라가 보았는데, 그곳에서 줄이려면 굉장히 많은 수작업이 필요할 뿐 아니라 매우 비효율적일 것 같았다.
비효율적이라고 생각하는 이유는 그 소스코드에는 가독성을 위해 그 나름대로의 행바꿈이나 탭 등이 삽입되어 있는 것이기 때문이다.
그것을 layout 파일 또는 include 파일에서 삭제하는 것은 별로 내키는 방법이 아니다.

포스트의 아랫 부분에는 태그가 나열되는 부분도 있는데 그 곳의 html 코드는 아래와 같다.

{% include i-g.html id="16no0viJkdHYippaHgIQH6wO2pnXUU1ys" alt="줄바꿈 뿐 아니라 공백도 많이 포함되어 있다. 이는 layout, include 등에 포함된 공백이 HTML로 그대로 옮겨지기 때문이다." title="Jekyll로 생성한 HTML 파일의 예 2" %}

빈 줄도 문제지만, 쓸데없는 공백이 매우 많이 삽입되어 있다.
이 html 파일의 크기는 25,383 byte이다.

물론 HTML 파일이 그 자체로 보여질 일은 거의 없다.
특별히 누군가 *'이 웹페이지는 어떻게 구성되어 있는가?'* 라는 의문을 갖고 코드를 열어본다면 모르겠지만, 일반적인 경우에는 사용자가 항상 웹브라우저를 통해서 보게 된다.
하지만 기왕 만드는 거 깔끔하고 용량도 작아진다면 더 좋지 않을까?
나는 이걸 compression(압축)하는 방법은 없는지 궁금해지기 시작했다.

## Minimal mistakes 테마에서 제공하는 compression
처음에는 구글에서 찾아보았다.
Jekyll html compressor 등과 같은 키워드로 검색을 해 보면 몇 개의 플러그인이 나온다.
그 플러그인 중에 설정이 간단해 보이는 것을 하나 골라서 `gem` 명령으로 설치했다.
그리고 설정하기 위해 `_config.yml` 파일을 열었다.
어라? 그런데 `_config.yml` 파일 안에 `compress_html` 이라는 항목이 있는 것이었다.
```
# HTML Compression
# - http://jch.penibelst.de/
compress_html:
  clippings: all
  ignore:
    envs: development
```

아! Minimal mistakes 테마에서 기본적으로 쉽게 사용할 수 있도록 HTML compressor가 포함되어 있었구나...
저기에 있는 사이트에 들어가 보았다. ([http://jch.penibelst.de/][l-penibelst]{:target='_blank'})

설명이 막 있는데...
자세한 설명 참 고맙지만, 나는 일단 지금 그걸 다 읽고 이해하고 싶지는 않아. 그냥 간단하게 어떻게 쓰는지만 알면 되는데...
쭉 내리다보면 Full-blown sample 이라는 제목이 있고 그 아래에 다음과 같은 코드가 있다.
```
compress_html:
  clippings: all
  comments: ["<!-- ", " -->"]
  endings: all
  ignore:
    envs: [local]
  blanklines: false
  profile: true
  startings: [html, head, body]
```

오 좋았어.
`_config.yml`의 아까 그 부분에 저 샘플대로 입력하고 `jekyll build`를 해 보았다.

잘 되었을까?
HTML 파일을 열어보니 아까와 똑같다.

음... 뭐가 문제일까?
이제 아까 대충 스크롤 내리면서 무시했던 문서를 볼 시간이다.

Installation에 보면, 이렇게 하라고 나온다.
1. Get the latest release. Extract `compress.html` and copy it to your `_layouts`.
1. Reference the compress layout in your highest-level layout. For example in `_layouts/default.html`:
{% raw %}
```
---
layout: compress
---

<html>
{{ content }}
</html>
```
{% endraw %}

아하~ 이걸 안 해줘서 그랬구나.
Minimal mistakes 테마에는 이미 `_layouts` 폴더에 `compress.html` 파일이 포함되어 있다. 그러니까 1번 항목은 신경 쓸 필요가 없다.
2번 항목만 해 주면 된다.
가이드대로 `_layouts/default.html` 파일의 YAML 헤더에 아래 한 줄만 추가해 주었다.
{% raw %}
```
layout: compress
```
{% endraw %}

그리고 다시 `jekyll build`를 실행하였다.
그랬더니 결과 html 파일은 다음과 같다.

{% include i-g.html id="1R-hdhzga7OK0GIoeo0BuBZMP4ZCntxZN" alt="HTML 압축을 하고 난 뒤의 파일을 열어 보면 이런 모습이다. 사람은 읽고 이해할 수 없을 정도로 가독성이 떨어진다." title="HTML compression 후의 HTML 파일" %}

내가 원하던 결과물이 나왔다.
사실 처음 본 사람이라면, 이 파일을 HTML 코드로만 보면 이게 무슨 해괴망측한 것인지... 오히려 오류가 발생한 것 아닌지 의심할 수도 있겠다.
하지만 어차피 웹브라우저가 무시하는 줄바꿈, 공백, 탭 등을 모두 지워준 파일이기 때문에 우리 눈에만 복잡해 보일 뿐이지, 잘 동작하는 코드다.

이걸 웹브라우저에서 열어보면 알 수 있는데, 이전과 동일하게 잘 나온다.
그런데 맨 밑으로 내려보니 이상한 게 하나 추가되었다.

{% include i-g.html id="1_F1dKf-3DtoIXuNdQqRM3f1zlYtxtzTn" alt="포스트 하단에 위와 같은 표가 출력된다." title="얼마나 압축되었는지 알려주는 정보" %}

Compressor가 여러 단계에 걸쳐서 작업을 수행하는데, 그 단계마다 얼마나 줄였는지 알려주는 표인 것 같다.
이걸 친절하다고 생각해야 하는건지, 자랑질이라고 생각해야 하는건지 헷갈린다.

아까 그 문서를 좀 더 보면, 이 표가 `profile`이라는 변수 설정에 의해 출력된다고 한다.
그래서 다시 `_config.yml` 파일을 열어서 `profile`을 `false`로 바꾸어 주었다.
그리고 나서 다시 해 보니 이제는 그 표가 출력되지 않았다.

최종적인 HTML 파일을 보니 23,704 byte이다.
처음과 비교해 보면 1,679 byte, 비율로는 약 6.6% 줄어들었다.
엄청나게 드라마틱한 변화는 아니지만, 그래도 뿌듯하다.

위와 같이 결국 내가 `_config.yml` 파일에서 설정해 준 부분은 아래와 같다.
```
compress_html:
  clippings: all
  comments: ["<!-- ", " -->"]
  endings: all
  ignore:
    envs: [local]
  blanklines: false
  profile: false
  startings: [html, head, body]
```

## Javascript에서 발생한 문제
이렇게만 하고 모든 것이 잘 끝났다면 얼마나 좋을까.
그런데 개발을 하다보면 늘 그렇듯이, 한 번에 잘 안 끝난다.
포스팅이 잘 뜨는지만 확인했었는데 밑으로 내려 보니 댓글이 안 보이는 것이다...

Disqus가 정적 웹사이트에서 댓글을 사용할 수 있게 만들어주는 대강의 원리는 이렇다.
일단 댓글 기능을 달고 싶은 부분에 아래 HTML 코드를 넣는다.
{% raw %}
```html
<section id="disqus_thread"></section>
```
{% endraw %}

그리고 해당 웹페이지에서 disqus 서버에 있는 javascript를 실행한다.
Minimal mistakes 테마에서는 `_includes/comments-providers/disqus.html` 파일에 아래와 같은 부분이 있다.
{% raw %}
```javascript
{% if site.comments.disqus.shortname %}
  <script>
    var disqus_config = function () {
      this.page.url = "{{ page.url | absolute_url }}";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "{{ page.id }}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://{{ site.comments.disqus.shortname }}.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}
```
{% endraw %}

위 javascript 코드는 내 블로그의 경우에는 `https://chobolife.disqus.com/embed.js` 파일을 실행한다.
그리고 아까 HTML에 넣었던 `disqus_thread` 섹션에 댓글 기능을 삽입하는 식이다.

어디에서 문제가 있는 것일까 확인해 보았다.
1. Compression하면서 HTML 소스 코드에 `disqus_thread` 섹션이 사라졌나? 아니다. 그대로 있다.
1. 그러면 저 javascript 코드가 빠져 있나? 그것도 아니다.

유추해보니 **문제는 javascript가 실행되지 않고 있는 것**이다.
나의 추측을 뒷받침해주는 사실을 발견했다.
아래 그림은 HTML compression을 하기 전, 그러니까 원래의 페이지를 크롬에서 불러올 때 개발자 도구의 Network 탭을 캡쳐한 것이다.

{% include i-g.html id="1IhJYqltz-qfq-oi-1-xfQpHJIjlrZE6-" alt="크롬 개발자 도구의 Network를 보면 웹페이지를 읽어올 때 생기는 interaction을 확인할 수 있다. HTML 압축을 하기 전에는 disqus 서버로부터 embed.js 파일을 받아 왔다." title="개발자 도구에서 확인할 수 있는 embed.js 파일 다운" %}

파일 `embed.js`이 아까 `chobolife.disqus.com` 에서 가져오는 부분이다.
그런데 HTML compression을 하고 난 페이지를 로드할 때는 아래와 같다.

{% include i-g.html id="1an_kU1oXwZ7jNrL3eI4Erd5a-4dp4p6B" alt="HTML 압축을 하고 난 뒤에는 embed.js를 다운로드하지 않는다. 그 뿐 아니라 상당히 많은 interaction이 사라졌다." title="embed.js 파일을 더 이상 다운로드 하지 않는다" %}

아까 있었던 `embed.js` 파일이 없다.
Request 숫자도 76개에서 13개로 엄청나게 줄었다.
아마도 javascript가 제대로 실행되지 않는 것이다.

머릿속을 확 스치는 생각이 있었다.
Javascript의 문법을 잘 알지는 못하지만 아까 `_includes/comments-providers/disqus.html` 파일을 열어 보았을 때 주석처리를 `//` 로 하는 것 같다.
그런데 이 방법으로 주석을 다는 것은 열고 닫는 것이 없다.

예를 들면 HTML의 `<!--`와 `-->` 라든지, C/C++의 `/*`와 `*/` 처럼 열고 닫는 방식으로 주석을 달면 그 안의 모든 문자열이 무시된다.
그런데 열고 닫는 주석이 아닌, C/C++의 `//` 와 같은 주석처리 방법은 `//` 이후에 있는 해당 줄의 모든 문자열을 무시하고, 다음 줄에서는 저절로 주석 해제가 되는 식이다.
전자를 *block comment*, 후자를 *line comment*라고 한다. ([Wikipedia 참고][l-wiki-comment]{:target='_blank'})

> HTML 압축을 하면 모든 줄바꿈이 사라지는데, 그러면서 아마 javascript에서 주석처리가 되어 있는 `//`이 그 뒤의 모든 코드를 무력화시키는 것은 아닐까?

이렇게 생각하며 나는 위의 파일 `_includes/comments-providers/disqus.html`을 다시 열어서 line comment 세 부분을 아예 삭제해 버렸다.
{% raw %}
```javascript
{% if site.comments.disqus.shortname %}
  <script>
    var disqus_config = function () {
      this.page.url = "{{ page.url | absolute_url }}";
      this.page.identifier = "{{ page.id }}";
    };
    (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://{{ site.comments.disqus.shortname }}.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}
```
{% endraw %}

그리고 나서 다시 웹브라우저에 띄워 보니...
이제는 잘 된다.
휴우...
다행히 대공사가 필요한 큰 문제는 아니었다.

위와 같이 하고 나서 동일한 포스팅을 로드했을 때 개발자 도구에서 보면 아래와 같다.

{% include i-g.html id="13Ft8C_5YSM791XaYmsi0nHSawk23MFi5" alt="Javascript의 line comment를 삭제해 버리면 다시 embed.js 파일을 다운로드한다." title="HTML 압축을 하고 난 뒤 개발자 도구에서 확인" %}

HTML index page가 아까는 6.8KB였는데 6.3 KB로 줄었다.
그러면서 javascript도 잘 동작하고, 별다른 문제는 없어보인다.
굳이 문제를 꼽자면 로딩에 4초가 넘게 걸린다는 게 문제이긴 한데...
이건 여러 가지 요인이 있을 수 있으므로 다음에 생각하기로 하자.

## 덧붙임
2020년 1월 14일, 이 문제와 관련한 bugfix가 있었다.
[이 pull request][l-pull-request]{:target='_blank'}를 참고하면 된다.
문제의 해결방법은 line comment를 block comment로 바꾼 것이다.


{% capture related %}
#### 관련 포스트

* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [Jekyll 테마 설정하기]({{ site.baseurl }}{% link _posts/2019/2019-08-12-jekyll-theme.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
* [Google Analytics 설치하기]({{ site.baseurl }}{% link _posts/2020/2020-02-11-google-analytics.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-penibelst]: http://jch.penibelst.de/
[l-wiki-comment]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
[l-pull-request]: https://github.com/mmistakes/minimal-mistakes/pull/2373

