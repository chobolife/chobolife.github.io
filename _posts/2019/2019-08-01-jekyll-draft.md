---
layout: single
title:  "Jekyll 초안 관리에 대한 고민"
excerpt: "#이번엔S3다 #역시Amazon이야 #삽질의시작"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-08-01 22:35:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - draft
---
Jekyll을 이용한 블로깅은 그 자체로 재미가 있었다.
게다가 포스팅이 쉽기까지 했다.
(일단 Jekyll을 설치할 때까지는 약간 험난했지만 말이다.)

## 문제의식
그런데 쓰다보니 한 가지 불편한 점이 있었다.
바로 초안을 관리하는 것이었다.

나는 사진이든 동영상이든 트위터같은 짧은 글이든 아니면 엄청나게 긴 길이든, 어떤 형태로든지 인터넷에 자료를 올리는 것은 publish, 즉 출판이라는 생각을 갖고 있다.
그래서 가급적 완성된 포스트만 공개하고 싶고, 한 번 publish한 이후로는 내용에 큰 오류가 있지 않은 이상 수정도 하고 싶지 않다.

{% include i-g.html id="1xrbsPQGO3jV8uNYr8H7l40oovXTjNyLi" alt="인터넷에 정보를 '공개'하는 것은 '출판'과 유사하다." title="출판물" %}

초안은 아직 완성되지도 않았을 뿐 아니라, 초안 작성 당시에는 실제로 이걸 포스팅을 할 것인지, 말 것인지조차도 결정하지 못한 것이 많을 것이라고 예상한다.
그래서 나는 **초안이 다른 포스팅과 함께 공개되지 않으면서도 나만 확인할 수 있는 방법**을 찾기 시작했다.

## Jekyll의 초안 작성 방법
[Jekyll 홈페이지][l-jekyll-drafts]{:target='_blank'}에는 초안을 이렇게 관리하면 된다고 나와 있다.
작성하고 있는 초안은 `_drafts` 디렉토리에 넣으면 되고 그 파일명은 연, 월, 일에 대한 정보 없이 `title.md`와 같은 식으로 지정하면 된다.
이렇게 하고 `jekyll build --drafts`를 실행하면 초안이 빌드되고 가장 최신 포스트로 표시된다고 한다.
내가 해보니 `drafts` 대신 s를 빼고 `draft`까지만 쳐도 문제가 없는 것 같다.
`jekyll build --draft`를 실행해도 동일하게 초안까지 포함해서 빌드된다.

AWS EC2에 ssh로 접속해서 Jekylling을 하는 나에게 Jekyll 문서에서 이야기하는 위 방법은 도움이 되긴 하지만 또 어떤 면에서는 도움이 별로 되지 못한다.
현재까지 작성한 초안을 빌드해서 웹브라우저에서 확인할 수 있는 것은 좋다.
하지만 문제는 `jekyll build --draft`를 실행하게 되면 `_site` 디렉토리에 초안을 포함한 사이트가 발행되므로 이걸 확인하려면 Github Pages에 commit해야 하며, 그렇게 되면 **초안이 블로그에 공개되어 버린다는 것이다**.

보통 다른 사람들은 windows, ubuntu 등 OS에 관계없이 로컬에서 `jekyll serve`를 실행해서 빌드하고 웹브라우저로 `http://localhost:4000/`에 접속하여 확인하는 것 같다.
그렇게 하면 commit하기 전에 확인 후 수정이 필요한 부분을 변경할 수 있다.
하지만 나는 cygwin에서 EC2 instance에 ssh로 접속하여 Jekylling을 하고 있으므로 다른 방법을 찾아야 했다.

물론 나도 `jekyll serve`를 실행하여 확인할 수 있는 방법은 있다.
EC2에 **vnc**로 접속하면 가능하다.
그런데 나는 그 방법은 쓰고 싶지 않았다.
왜냐하면 우선 EC2에 vnc server를 설치해야 하는데 그 용량이 꽤 크다고 알고 있다.
뿐만 아니라 현재는 free tier에서 무료로 사용이 가능한 intsance인 t2.micro를 이용하고 있는데 다른 t2.micro가 필요하거나 free tier가 끝나는 시점이 되면 t2.nano로 옮기게 될 수도 있다.
그러면 vnc server 구동은 시스템에 부담이 되어 사용하기 어려울 것이다.
또 한 가지 문제는 너무 복잡할 것이라는 점이다.
Cygwin으로 접속해서 vim으로 내용을 입력하고 포스팅하는 것이 지금까지는 굉장히 가벼운 작업이었는데, 초안을 확인하겠다고 옆에 다른 vnc viewer 프로그램을 띄워놓고 그 안에 Firefox 같은 웹브라우저를 실행하는 것은 생각만 해도 번거롭고 복잡한 일이었다.

## 고민 끝에 S3
`_site` 디렉토리에 git repository가 만들어져 있으므로 버전 관리가 되고 있는데 혹시 git의 branch를 이용한 방법이 없을까 하는 생각도 해 보았다.
그런데 branch를 활용할 수 있는 뾰족한 방법이 떠오르지 않았다.
그 외에도 여러 가지 고민을 더 해 보았는데 괜찮은 방법이 없는 것 같았다.

그러다가 생각한 방법은 이것이다.
> 어차피 작성하던 초안이 웹브라우저에 어떻게 표시되는지 확인하기 위해서는 `jekyll build --drafts`를 해서 발행을 해야 한다. 그렇다면 그것을 블로그가 공개되는 Github Pages 말고 **나만 아는 곳**에 올려두고 확인하면 되지 않을까?

생각할수록 괜찮은 방법인 것 같았다.
포스팅을 완성하기 전의 작성 및 수정 단계에서는 Github Pages에만 올리지 않으면 내 블로그를 통해 공개되지 않는 것이고, 그 때에 바로 그 **나만 아는 곳**에 올려서 확인해보는 건 아무 문제가 없으니까.
그렇게 확인하면서 수정하다가 포스트가 완성되고 나면 md 파일을 `_drafts` 디렉토리에서 `_posts` 디렉토리로 옮기면서 Github Pages에도 commit하면 될 것 같다.
그런 절차를 생각하고 보니 초안을 처음부터 굳이 `_drafts` 디렉토리에 넣을 것 없이 `_posts` 디렉토리에서 시작을 해도 될 것 같기는 하다.
하지만 우선은 정석대로 초안은 `_drafts` 디렉토리에서만 작성할 생각이다.

그 **나만 아는 곳**은 AWS S3에 구축하려고 한다.
AWS S3가 편할 것 같기도 하고... 사실 다른 마땅한 곳이 생각이 안 난다.
정적 웹 호스팅을 제공하는 곳은 여러 군데 있기는 한데 거의 다 생소한 곳들이라서...
처음에 Jekyll을 시작하면서 정적 웹 호스팅을 어디에 할지를 놓고 [Github Pages][l-github]{:target='_blank'}와 [AWS S3][l-aws-s3]{:target='_blank'} 사이에서 고민했었다.
([나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %}) 참고)
둘을 놓고 고민하다가 S3보다 간단할 것 같아서 github을 쓴 것이었는데...
이렇게 둘 다 쓰게 될 줄이야.

그렇다면 이제 앞으로 해야 할 일은 ubuntu에 AWS CLI를 설치하고 `_site` 폴더에 있는 파일들을 S3 버킷에 업로드하는 것인데, 한 번도 해 보지 않은 일이라서 약간 험난한 과정이 예상된다.
이 방법을 시도해 보고 다음 포스팅에 업로드할 예정이다.

{% capture next %}
#### 다음 포스트

* [EC2에서 S3에 접근하는 방법]({{ site.baseurl }}{% link _posts/2019/2019-08-04-ec2-s3-authority.md %})
{% endcapture %}

<div class="notice--primary">
  {{ next | markdownify }}
</div>

{% capture related %}
#### 관련 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [EC2에서 웹서버 구동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-06-ec2-web-server.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-jekyll-drafts]: https://jekyllrb-ko.github.io/docs/drafts/
[l-github]: https://pages.github.com/
[l-aws-s3]: https://aws.amazon.com/s3/

