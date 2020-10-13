---
layout: single
title:  "EC2에서 웹서버 구동하기"
excerpt: "#제정신찾았다 #리눅스에웹서버설치"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-08-06 22:15:00 +0900
categories: 블로그
tags:
  - 블로그
  - AWS
  - AWS EC2
  - apache2
  - 보안 그룹
---
지난 포스팅([EC2에서 S3에 접근하는 방법]({{ site.baseurl }}{% link _posts/2019/2019-08-04-ec2-s3-authority.md %}))에서는 EC2에서 만든 정적 웹사이트를 S3에 업로드했다.
그 작업의 목적은 내가 Jekyll을 통해 만든 웹사이트를 github을 통해 배포하기 전에 확인하기 위한 것이었다.

## 문제 발생
지난 포스트([나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %}))를 보면 알겠지만 나는 내 작업 컴퓨터에서 Jekyll을 돌리고 있지 않다.
EC2에 만들어 놓은 ubuntu에 ssh로 접속해서 Jekyll을 수행하고 있었기 때문에 내가 수정하고 있는 것을 바로 확인할 수가 없었다.
그래서 S3에 업로드해서 웹브라우저에서 확인하고, 다시 터미널에서 수정하고 S3에 업로드하고, 하는 식으로 작업했던 것이다.

그런데 문제는 새로운 테마를 시도해보면서 발생했다.
내가 포스팅의 초안을 발행하고 확인하는 작업만 했으면 문제가 늦게 발생했을지도 모르겠다.
이것저것 테마를 깔아서 S3에 올리고 웹브라우저에서 다시 확인해보는 작업을 얼마 하지도 않았는데, AWS의 프리 티어를 소진했다는 메일이 왔다.
AWS의 결제 화면에 들어가서 보니 다른 건 문제가 안 되는데 PUT request가 2천회를 초과했다.

{% include i-g.html id="1WkGWysw_TALupGH-RyZ947PLwYdHb62Y" alt="AWS 프리 티어를 초과했다는 메일을 받고 부랴부랴 결제 페이지에 들어가 보았다. AWS S3의 Put request가 프리 티어 제공량을 초과했다." title="AWS 프리 티어의 기본 제공량을 초과한 결제 화면" %}

테마마다 생성되는 파일이 많기 때문에 그런 것 같다.
각 파일의 용량은 작을지라도 숫자 자체가 많은 건 어쩔 수 없다.

그래서 S3에 업로드하고 확인하는 것을 중단하고 그냥 테마를 바꾸는 것도 그냥 github pages에 올려서 확인하였다.
Github pages에 파일을 올리면 웹서버에 반영되기까지 약간 딜레이가 있다.
불편하긴 하지만 어쩔 수 없는 것이라고 생각했다.
참고 써야지 뭐...

마음에 드는 테마도 설치하고 Jekyll에 익숙해지다보니 Jekyll을 이용해서 다른 웹사이트도 만들어보고 싶다는 생각이 들었다.
그런데 또 다시 고민이 생겼다.
> 호스팅을 어디에 할 건가?
Github pages는 이미 내가 쓰고 있고, AWS S3는 요금이 발생하게 된다.
물론 방법은 있지...
다른 무료 호스팅을 제공하는 서비스를 찾아도 되고, github이나 AWS 계정을 새로 만들어도 되니까...

하지만 문득 이런 생각이 들었다.
> 잠깐... 내가 지금 쓰고 있는 EC2 instace를 웹서버로 만들면 되잖아?

도대체 왜 이 생각을 못했던 거지?
어차피 뭐 대단한 사이트 만들 것도 아니고 이용자도 나 말고는 없을텐데...

바로 실행에 옮겨보기로 했다.

## EC2 instance에 apache2 설치
과정은 간단하다.
Apache2를 설치하고 보안 설정을 해 주면 된다.
먼저 apache2를 설치하려면 터미널에서 다음과 같이 입력한다.
```
sudo apt-get install apache2
```

그러면 주르륵 로그가 출력되며 apache2가 설치된다.
Apache2의 설치 과정은 어렵지도 않고 중간에 문제가 발생할 일도 거의 없으므로 더 설명할 것이 없다.

## 보안 설정하기
웹서버를 구동할 수 있는 apache2를 설치했다면, 다음으로는 이 EC2 instace에 대한 접근을 열어주어야 한다.
AWS EC2에서는 이것을 EC2 instance에 보안 그룹을 연결해 주는 것으로 한다.
이미 원하는 접근 권한으로 보안 그룹이 만들어져 있다면 그것을 바로 해당 EC2 instance에 연결해 주면 되지만, 없다면 보안 그룹을 생성해야 한다.

보안 그룹이 없다면 이렇게 생성할 수 있다.

EC2 대시보드의 왼쪽에 있는 메뉴 중에서 **네트워크 및 보안** 아래에 있는 **보안 그룹**을 클릭한다.
그러면 보안 그룹 화면이 뜨는데 거기에서 위쪽에 있는 파란색 버튼인 **보안 그룹 생성**을 클릭한다.
'보안 그룹 생성'이라는 창이 뜨게 된다.
아래 그림과 같이 입력한다.

{% include i-g.html id="17w2XaSlAXjZ553OXzrdd0vx018oTLa_Z" alt="공개 웹 서버에 연결하기 위한 보안 그룹을 설정한다. SSH, HTTP, HTTPS의 인바운드를 열어 주면 된다." title="공개 웹 서버의 보안 그룹 설정" %}

**보안 그룹 이름**과 **설명**에는 말 그대로 이름과 간단한 설명을 써 준다.
그리고 하단에 있는 **보안 그룹 규칙**을 채워야 한다.
아래에 있는 **규칙 추가** 버튼을 누르면 레코드가 생기는데, 여기에서 필요한 유형은 **SSH**, **HTTP**, **HTTPS**이다.
오른쪽에 있는 항목들은 대부분 저절로 입력되는데, 혹시 자동으로 입력되지 않는 항목이 있다면 위 그림과 동일하게 채워 준다.
내가 했을 때는 SSH의 소스가 자동으로 채워지지 않았던 것 같다.

모두 입력했으면 오른쪽 하단의 **생성** 버튼을 클릭한다.
이렇게 하면 웹서버를 공개할 수 있도록 보안 그룹을 생성한 것이다.

이제는 EC2 instance에 보안 그룹을 연결해 주어야 한다.
다시 인스턴스 화면으로 돌아가서, EC2 instance에서 마우스 우클릭을 하여 **네트워킹** → **보안 그룹 변경**을 클릭한다.

{% include i-g.html id="1gszYTez1h0zIfQm9OGL2WB5tUl_yjPdZ" alt="보안 그룹을 생성했다면, 다음으로는 EC2 인스턴스에 보안 그룹을 연결해 주어야 한다." title="EC2 인스턴스에 보안 그룹 연결하기" %}

그러면 '보안 그룹 변경'이라는 창이 뜬다.
여기에서 아까 만들어 준 보안 그룹을 체크하고 **보안 그룹 할당** 버튼을 클릭하면 된다.

## 접속하기
이제 EC2 instance는 웹서버로 동작할 것이다.
웹서버에 접속할 주소는 EC2 instance를 클릭하면 하단에 나오는 정보 중에서 오른쪽 위에 있는 **퍼블릭 DNS(IPv4)** 또는 **IPv4 퍼블릭 IP**이다.

{% include i-g.html id="1pvB2YP5gSYQ1BchVlBUjfUJR5dTnOGUb" alt="EC2 인스턴스의 속성 중에서 '퍼블릭 DNS(IPv4)' 또는 'IPv4 퍼블릭 IP'이 주소가 된다." title="EC2 인스턴스의 속성" %}

아래와 같은 화면이 나온다면 제대로 웹서버가 동작하고 있는 것이다.

{% include i-g.html id="10ZfCjmtWcmxt-9N4UH4z8NYfOLWZgxGm" alt="Apache2를 설치하고 난 후 웹브라우저에서 접속하면 기본으로 설정된 페이지가 보인다." title="Apache2의 default index 페이지" %}

만약에 안 된다면 EC2 instance를 재부팅해보면 될 것이다.
그래도 안 된다면... 나도 잘 모르겠다. 하지만 아마 구글은 알겠지...

위 화면은 `/var/www/html/` 아래에 있는 `index.html` 파일이다.
이제 내가 만든 사이트를 위 디렉토리로 복사하면 된다.

{% capture previous %}
#### 이전 포스트

* [Jekyll 초안 관리에 대한 고민]({{ site.baseurl }}{% link _posts/2019/2019-08-01-jekyll-draft.md %})
* [EC2에서 S3에 접근하는 방법]({{ site.baseurl }}{% link _posts/2019/2019-08-04-ec2-s3-authority.md %})
{% endcapture %}

<div class="notice--primary">
  {{ previous | markdownify }}
</div>

{% capture related %}
#### 관련 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

