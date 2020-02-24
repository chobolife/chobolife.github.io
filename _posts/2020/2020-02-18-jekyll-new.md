---
layout: single
title:  "나는 Jekyll을 잘못 사용하고 있었다"
excerpt: "#한숨,탄식 #머리가나쁘면손이고생 #대규모토목공사급삽질"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2020-02-18 08:35:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - github
  - git
  - 호스팅
---

나는 Jekyll을 그동안 잘못 사용하고 있었다.
그것도 아주 많이...

## 잘못하고 있던 방식
### 1
처음 Github Pages를 통해서 블로깅을 할 때, 정적 웹페이지를 repository에 올리면 되는 것으로 알았다.
어디서 얻은 정보였는지는 모르겠지만 뭐 대부분의 문서나 블로그에서 다 그렇게 소개하니까 나도 그런 줄로만 알았다.
`index.html` 파일을 올려보고 확인하는 과정을 통해 _'아 이렇게 돌아가는구나'_ 하고 알게 되었던 것으로 기억한다.

### 2
그리고 Jekyll은 마크다운으로 작성한 문서를 간단하고 편하게 웹페이지로 바꿔주는 정적 웹사이트 생성기이다.
즉, Jekyll을 사용할 수 있는 환경에서
```
jekyll build
```
위 명령을 입력하면 `_site`라는 폴더에 정적 웹사이트로 사용할 수 있는 파일이 생기는 방식이다.

### 3 = 1+2
나는 이 두 가지 정보만 알고 있는 상태에서 Jekyll을 통해 정적 웹사이트를 만들고 그걸 github pages를 이용해서 배포하려고 했다.
그래서 내 사고의 흐름은, 당연하게도 이랬다.

> Jekyll로 빌드하고 `_site` 폴더에 출력된 파일을 github에 올리자

사실 처음에는 이렇게 하는 게 문제가 아닐 수 있지만 조금만 더 하다보면 문제라는 것을 알았어야 했는데 나는 그걸 이제야 알았다.

## 문제의 발견
나는 Jekyll의 파일을 이것저것 수정하면서 이것의 버전관리를 하고 싶었다.
예를 들면 `_include`나 `_layout` 폴더의 파일 등 말이다.
그나마 그동안에는 간단한 추가, 수정 뿐이었지만 이게 쌓이다보니 내가 무슨 작업을 했었는지 기억나지 않을 것 같아서 걱정이 되었다.
그래서 이 jekyll 작업폴더 전체를 git으로 버전 관리를 하고 싶었다.

나의 Jekyll의 작업 폴더에는 위에서 말한 폴더 외에도 `_data`, `_pages`, `_posts`, `assets`, `category` 등의 폴더가 있었는데 이 중에서 `_site`는 이미 github에 올리고 있으므로 나머지 폴더 및 파일에 대해서 버전 관리를 하려고 했다.
그래서 다른 repository를 만들고 거기에 올리려고 했다.
일단 나와 같은 문제의식을 가진 사람들이 많을 것이므로, 다른 사람들은 어떻게 했을지 검색을 해 보기로 했다.

그런데 검색을 해도 잘 안나왔다.
이상했다.

> 내가 했던 생각과 같은 생각을 한 사람이 없을리가 없는데... 이 jekyll 작업 폴더 전체에 대한 버전 관리에 대한 문제와 해결이 왜 없을까?

## 밀려드는 허무함
그런데 그럴만한 이유가 있었다.

한 번에 많은 창을 띄워놓고 있어서 정확히 어디에서 봤는지는 모르겠다.
Jekyll 작업 폴더 전체를 github에 올려놓으면 알아서 렌더링해서 웹페이지로 보여준다는 것이었다.

그래서 아주 편하고 쉽게 Jekyll 작업 폴더를 git으로 버전관리시킬 수 있으며, 그 중에서도 `_site` 폴더는 `.gitignore`에 추가시켜서 아예 버전관리에서 빼버리라고까지 했다.

<div class="tenor-gif-embed" data-postid="5436796" data-share-method="host" data-width="100%" data-aspect-ratio="1.3555555555555556"><a href="https://tenor.com/view/hopeless-disappointed-ryan-reynolds-facepalm-embarrassed-gif-5436796">Ryan Reynolds Facepalm GIF</a> from <a href="https://tenor.com/search/hopeless-gifs">Hopeless GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

**하...**

그래서 git에 다시 올렸다.

{% capture next %}
#### 이전 포스트

* [나의 Jekyll 여행기 (1)]({{ site.baseurl }}{% link _posts/2019/2019-07-26-start-jekyll-1.md %})
* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
{% endcapture %}

<div class="notice--primary">
  {{ next | markdownify }}
</div>

{% capture related %}
#### 관련 포스트

* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
* [Jekyll의 Minimal mistakes 테마에서 HTML 압축하기]({{ site.baseurl }}{% link _posts/2019/2019-08-17-jekyll-compress.md %})
* [웹페이지에 지도 삽입하기]({{ site.baseurl }}{% link _posts/2019/2019-10-05-map-in-blog.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

