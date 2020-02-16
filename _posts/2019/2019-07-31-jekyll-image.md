---
layout: single
title:  "Jekyll post에 이미지 첨부하기"
excerpt: "#중복의제거 #충고는고맙지만 #나는이렇게할게"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-07-31 22:03:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - 구글 드라이브
  - 이미지
  - include
  - 조각파일
---
이전 포스팅([Google drive에 공개 이미지 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-29-google-drive-image.md %}))에서 구글 드라이브에 이미지 파일을 올리고 공개하는 방법을 소개했다.
이번 포스팅은 그렇게 올린 이미지 파일을 Jekyll에서 웹페이지에 포함시키는 방법에 대한 포스팅이다.

## 이미지를 표현하는 markdown 기본 문법
우선 [Jekyll 공식 문서][l-jekyll-image]{:target='_blank'}에 나와 있는 이미지 첨부 방법은 아래와 같다.
기본적인 syntax는 간단하다.
```md
![alt-text-message](image-link)
```

이렇게 하면 이미지를 첨부할 수 있다.
`image-link`는 이미지의 주소이고 `alt-text-message`는 대체 텍스트, 즉 이미지가 정상적으로 표시되지 않을 때 대신해서 나타나는 텍스트이다.

예를 들어서 이전 포스팅에서 업로드했던 Grand Canyon의 이미지를 첨부하려면 이렇게 하면 된다.
```md
![Grand Canyon](https://drive.google.com/uc?id=1fbAf4Hdbi5GZjeLVztTuhDpYDMVN_dCa)
```
위의 예시 코드에서 이미지의 주소는 이전 포스팅에 소개한 방법으로 얻어냈고, 대체 텍스트는 'Grand Canyon'으로 입력한 것이다.
그리고 이 markdown을 문서에 삽입하고 `jekyll build`를 실행하면 그 부분에 아래와 같은 html 코드가 생긴다.
```html
<img src="https://drive.google.com/uc?id=1fbAf4Hdbi5GZjeLVztTuhDpYDMVN_dCa" alt="Grand Canyon">
```

아주 간단하고 편한 방법이다.
나는 처음에 이 방법만으로 매우 만족했으므로 이 방법을 계속 쓰려고 생각했다.

## 쓰다보니 보이는 문제
하지만 막상 이렇게 이미지를 첨부해보니 한 가지 문제가 있었다.
이미지의 캡션이 없다는 것이다.
검색을 통해 알아보니 Jekyll 자체적으로는 이미지의 캡션을 달아주지 않는댄다.
즉, markdown 문법만 가지고는 캡션을 달 방법이 없다고 한다.

캡션은 있으면 좋지만 없어도 큰 문제는 없으므로...
나는 뭐 그냥 이대로 캡션 없어도 된다고 생각하고 쓰려고 했다.

그런데 이미지 여러 개를 첨부하고 포스팅도 여러 개 쓰다보니 불편한 점이 하나 더 있었다.
그것은 바로 이미지 주소 중 `open` 을 `uc`로 바꾸어 주어야 한다는 것이다.
이미지 여러 개를 첨부하고, 포스팅도 여러 개 쓰다보니 이걸 자꾸 잊어버리게 되었다.
빠뜨렸더라도 확인하고 금방 고칠 수 있으니 사소한 문제이긴 하지만 분명히 이걸 해결할 수 있는 간단한 방법이 있을 것 같았다.

이미지에 캡션을 달고 싶다는 생각, 그리고 이미지의 주소를 쉽게 변환하고 싶다는 욕심.
꼭 이 두 가지를 해결해야겠다는 생각으로 찾아낸 것은 아니었다.
그것과는 상관없이 그냥 Jekyll 공식 문서나 Jekyll 관련한 블로그의 웹서핑을 하면서 알게 된 것이 있다.
바로 **조각파일**이다.

## 조각파일로 이미지 첨부를 간단하게
[Jekyll 공식 문서][l-jekyll-include]{:target='_blank'}에 나온 조각파일의 설명에 따르면 조각파일이란 **반복되는 코드를 미리 정의하고 markdown에서 이를 함수 호출하듯이 이용하는 방법**인 것 같다.
위 문서를 보면 조각파일을 이용해서 이미지 첨부를 쉽게 하는 방법으로 아래와 같은 예제가 소개되어 있다.
{% raw %}
```html
<figure>
   <a href="{{ include.url }}">
   <img src="{{ include.file }}"
        style="max-width: {{ include.max-width }};"
        alt="{{ include.alt }}"/>
   <figcaption>{{ include.caption }}</figcaption>
</figure>
```
{% endraw %}

이 예제를 보면 `url`, `file`, `max-width`, `alt`, `caption`의 다섯 개의 파라미터를 넘겨주게 되어 있다.
코드를 그대로 써도 무방하지만 나는 이 방법을 참고해서 아래와 같이 `_includes` 디렉토리에 `i-g.html` 파일을 만들었다.
{% raw %}
```html
<figure>
    <img src="https://drive.google.com/uc?id={{ include.id }}"
         alt="{{ include.alt }}"
         title="{{ include.title }}"/>
    <figcaption>{{ include.alt }}</figcaption>
</figure>
```
{% endraw %}

예제 파일에서 내가 수정한 사항들은 아래와 같다.
* 가장 먼저 이미지의 주소 부분을 수정했다.
  * `i-g.html` 조각파일 안에 `https://drive.google.com/uc?id=` 부분까지 hard coding 으로 박아넣고 그 뒷 부분만 파라미터화하였다.
  * 이렇게 하면 내가 처음에 의도한 대로 `open`과 `uc`를 바꾸어 주는 작업을 대체할 수 있을 뿐 아니라 중복되는 코드를 아예 조각파일 안으로 넣어버릴 수 있어서 깔끔해진다.
  * Markdown에서 `i-g.html`을 include 시킬 때는 구글 드라이브에서 따온 이미지 주소의 뒷부분인 id 속성만 `id` 파라미터의 값으로 넣어 주면 된다.
* 그리고 나는 이미지에 링크를 걸 필요가 없으므로 `a` 태그와 `url` 파라미터를 삭제했다.
(만약에 필요한 일이 생기면 이 조각파일을 쓰지 못할 것 같은데... 그건 그 때 다시 생각하기로 하자.)
* `max-width` 속성도 굳이 필요하지 않을 것 같아서 삭제했다.
* 이미지의 캡션 따로, 대체 텍스트 따로 써 주기 귀찮을 것 같았다. 그래서 캡션과 대체 텍스트가 동일하게 표시되게 하기 위해 `figcaption` 태그 안에 있었던 `caption` 대신 `alt`를 넣어주었다.
* 대신 이미지의 `title` 속성을 추가하였다. Title은 대체 텍스트나 캡션과는 다르게 간단한 키워드 중심으로 이미지의 제목을 지정해 주기 위해 추가했다.

위와 같이 `i-g.html` 파일을 작성했다면 이미지 파일을 첨부하려는 곳에는 아래와 같이 입력한다.
{% raw %}
```md
{% include i-g.html id="1fbAf4Hdbi5GZjeLVztTuhDpYDMVN_dCa" alt="하늘과 Grand Canyon이 만나는 드넓은 곳에서 앞으로 열릴 탁 트인 미래를 상상하자." title="시원하게 열릴 내 미래" %}
```
{% endraw %}

조금 길어서 복잡해 보이지만 사실 내용은 간단하다.
`i-g.html` 조각파일을 `include`한다는 것이고 그것을 위해 넘겨주는 파라미터는 `id`, `alt`, `title` 이 세 개가 끝이다.

어쨌든 위와 같은 markdown을 추가하면 생성되는 html 문서에는 아래와 같은 html 코드가 생긴다.
{% raw %}
```html
<figure>
    <img src="https://drive.google.com/uc?id="1fbAf4Hdbi5GZjeLVztTuhDpYDMVN_dCa
         alt="하늘과 Grand Canyon이 만나는 드넓은 곳에서 앞으로 열릴 탁 트인 미래를 상상하자."
         title="시원하게 열릴 내 미래"/>
    <figcaption>하늘과 Grand Canyon이 만나는 드넓은 곳에서 앞으로 열릴 탁 트인 미래를 상상하자.</figcaption>
</figure>
```
{% endraw %}

실제 웹페이지에 표시되는 모습은 아래와 같다.

{% include i-g.html id="1K39Zz-BryUke96T0fOgGKWdHXqJAssCG" alt="하늘과 Grand Canyon이 만나는 드넓은 곳에서 앞으로 열릴 탁 트인 미래를 상상하자." title="시원하게 열릴 내 미래" %}

그림 위에 마우스 커서를 놓고 있으면 `title` 속성으로 지정한 문구가 툴팁으로 뜬다.
이미지의 `title` 속성을 추가한 것은 SEO에 도움이 될까 싶어서였지 이 효과를 의도한 것은 아니다.
하지만 어쨌든 이렇게 `title` 속성이 뜨는 것도 괜찮은 것 같다.

## 알아두어야 할 점
조각파일에 대한 Jekyll 문서를 보고 일단 필요한 것은 했는데...
문서를 계속 읽다보면 아래와 같은 언급이 나온다.

> 하지만, 조각파일을 너무 많이 사용하는 것은, 사이트의 빌드 시간을 느리게 ~~만드므로~~(만들므로), 가급적 피해야 합니다. 예를 들어, 이미지를 삽입할 때마다 매번 조각파일을 사용하는 것은 좋지 않습니다. (위의 예시는 특별취급해야하는 일부 이미지에 사용할만한 기법입니다.)

어.. 음... 그.. 그,그래. 알겠어.
알겠고 충고는 고마운데 나는 일단 이대로 해볼게.
(= 나는 이미지 첨부할 때마다 조각파일 사용하겠다는 얘기)

이 방법이 주는 편리함 때문에 포기하긴 어려울 것 같다.
빌드타임이 많이 느려진다면 그건 그 때 또 좋은 방법이 없을지 생각해 봐야겠다.

P.S.
실제 내가 작성한 조각파일에서는 `img` 태그 안에 줄바꿈을 넣지 않았다.
이 포스팅을 작성하면서 코드가 좌우로 너무 길어져서 가독성을 해치는 것을 방지하기 위해 줄바꿈을 추가한 것이다.
그래서 위의 code block에서는 `src`, `alt`, `title` 속성별로 한 행씩 차지하고 있다.
하지만 이 포스팅의 소스를 확인하면 실제로 줄바꿈이 들어가 있지 않음을 알 수 있다.

{% capture previous %}
#### 이전 포스트

* [Google drive에 공개 이미지 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-29-google-drive-image.md %})
{% endcapture %}

<div class="notice--primary">
  {{ previous | markdownify }}
</div>

{% capture related %}
#### 관련 포스트

* [Jekyll 테마 설정하기]({{ site.baseurl }}{% link _posts/2019/2019-08-12-jekyll-theme.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
* [웹페이지에 지도 삽입하기]({{ site.baseurl }}{% link _posts/2019/2019-10-05-map-in-blog.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-jekyll-image]: https://jekyllrb-ko.github.io/docs/posts/#이미지와-자원-삽입하기
[l-jekyll-include]: http://jekyllrb-ko.github.io/docs/includes/

