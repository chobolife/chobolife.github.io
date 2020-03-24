---
layout: single
title:  "나의 Jekyll 여행기 (2)"
excerpt: "#일단은성공 #역시Amazon이야 #AWS탐험기"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-07-27 18:00:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - AWS
  - AWS EC2
---
[지난 포스팅 (나의 Jekyll 여행기 (1))]({{ site.baseurl }}{% link _posts/2019/2019-07-26-start-jekyll-1.md %})에서 했던 실패를 뒤로 하고 나는 계속 Jekyll을 사용할 수 있는 방법을 고민했다.
사실 [Jekyll 홈페이지][l-jekyll-docs]{:target='_blank'}에는 Windows에서도 Jekyll을 사용할 수 있는 방법에 대해 나오기는 한다.
하지만 공식적으로 지원하지는 않는 플랫폼이고, 언제 어디서 무슨 문제가 발생할지도 모르는 것이었기 때문에 나는 다른 방법이 가능하면 다른 방법으로 하고 싶었다.
그래서 생각한 방법이 AWS EC2였다.
EC2에 linux instance를 만들고 거기서 설치하면 되지 않을까? 하고 생각했던 것이었다.

## AWS에서 시도하다
EC2를 만들 때 기존의 AMI를 기반으로 만들 수 있는데, 이 때 나오는 메뉴는 아래와 같다.

{% include i-g.html id="1THimdPLJAn2gHGm5_BTGkuw2yP-JqTiY" alt="Amazon EC2를 생성할 때 이미 만들어진 템플릿인 AMI를 선택할 수 있다." title="Amazon EC2 AMI의 목록" %}

그동안 linux instance가 필요할 때면 나는 아무런 생각없이 Amazon Linux 로 시작하는 AMI를 생성했다.
사실 Ubuntu와 Amazon Linux의 차이를 잘 모르고 (알아보려고 한 적도 없다) 그냥 가장 위에 있으니까 썼다.
Amazon이 약간 필요한 대로 수정했을 것이라고만 생각했다.
어쨌든 이번에도 나는 가장 위에 있는 Amazon Linux 2 AMI (HVM), SSD Volume Type으로 만들었다.

EC2 instance를 만드는 것은 금세 끝난다.
ssh로 접속하고 나서 아까와 마찬가지로 습관처럼 몇 개의 필수 package를 설치한 뒤 Jekyll에 필요한 ruby 관련 package를 설치했다. 이것도 금방 되었다.
그리고 나서 gem에서 jekyll과 bundler를 설치하려고 하니...
이건 또 왠걸.
Jekyll은 ruby 2.1 이상의 버전이 필요한데 여기에 설치되어 있는 ruby의 버전은 2.0이라서 설치를 못한다고 한다.

## 드디어 성공
그러면 방금 만든 EC2 instance는 재빨리 terminate시키고 이번에는 Ubuntu의 EC2를 설치해 보기로 했다.
어차피 지금까지도 여러 가지 시행착오와 고생을 했는데 한 번 더 하는 걸 못할까?
이번에는 왠지 될 것 같았다.
[Jekyll 공식 홈페이지][l-jekyll-docs]{:target='_blank'}에서도 ubuntu에서 설치하는 방법이 나와 있기 때문에 나도 그것과 동일하게 ubuntu에서 설치하려고 하면 잘 될 것 같았다.
사실 cygwin에서 설치를 시도했을 때는
> '될까? 안 될까? 에이... 되겠지... 설마 안 되겠어?'

라는 생각이었는데 ubuntu에서는

> '이건 무조건 되어야지. 이것도 안 되면 말이 안 되지'

라는 생각이 들었다.
(결과부터 말하자면 이번에는 설치에 성공했으므로 설치 과정을 간략하게 기록해 두겠다.)

아까 그림에서 3번째에 있었던 Ubuntu Server 18.04 LTS (HVM), SSD Volume Type 의 EC2를 생성했다.
EC2에 ssh로 접속하고 나서, 익숙한 명령어들을 다시 입력한다.
```
sudo apt-get update
sudo apt-get upgrade
```
이렇게 package manager를 업데이트해 주고 나서
```
sudo apt-get install vim curl git openssh
```
를 입력하면 필수 package가 설치된다. 그런데 Ubuntu AMI는 이미 필요한 package가 많이 설치되어 있었다.

그리고 나서 이제 진짜 Jekyll에 필요한 package들을 설치했다.
여기부터는 [Jekyll 공식 홈페이지][l-jekyll-docs]{:target='_blank'}에 있는 대로 한 것이다.
```
sudo apt-get install ruby ruby-dev build-essential
```
어느 정도의 저장 공간이 필요한데 동의하겠느냐고 묻는다.
사뿐히 `y`를 누르고 엔터를 치면 본격적으로 설치가 된다.

그리고 `.bashrc`에 `GEM_HOME`과 `PATH`를 추가해 준다.
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```
이렇게 하면 되는데 나는 사실 `.bashrc` 파일을 직접 편집했다.
특히 처음 세팅하는 환경에서는 내가 필요한 설정도 해 주어야 하기 때문에 같이 했다.

이렇게 `.bashrc`에 추가한 후 이제 gem을 이용해서 jekyll을 설치했다.
```
gem install jekyll bundler
```

그런데 이와 같이 설치할 때 중간에 약간 미심쩍은 메세지가 나온다.
```
Fetching: sass-3.7.4.gem (100%)

Ruby Sass has reached end-of-life and should no longer be used.

* If you use Sass as a command-line tool, we recommend using Dart Sass, the new
  primary implementation: https://sass-lang.com/install

* If you use Sass as a plug-in for a Ruby web framework, we recommend using the
  sassc gem: https://github.com/sass/sassc-ruby#readme

* For more details, please refer to the Sass blog:
  https://sass-lang.com/blog/posts/7828841

Successfully installed sass-3.7.4
```

잘 읽어보면 더 이상 지원되지 않는다는 이야기인 것 같고, 그래도 설치에 실패할 정도로 치명적인 문제는 아닌 것 같다.
마지막에는 아래와 같은 메세지가 출력되며 설치 과정이 끝났다.
```
Done installing documentation for bundler after 3 seconds
26 gems installed
```

## Jekyll 설치, 그 이후
Jekyll 설치는 잘 되었다.
다음으로 생각해야 할 것은 Jekyll로 만든 사이트를 [github][l-github]{:target='_blank'}이나 [AWS S3][l-aws-s3]{:target='_blank'} 등에 업로드하는 것이다.

github.io에 하면 호스팅도 자동으로 되고, 무료이며, git으로 commit만 하면 바로 웹에 올릴 수 있기 때문에 편하다.
AWS S3도 정적 웹 호스팅을 쉽게 할 수 있고, 요금이 부과될 정도로 traffic이 발생하지 않는다는 전제 하에 개인 블로그 용도로만 쓰자면 돈이 거의 들지 않으며, 몇 가지 세팅을 해 주면 github처럼 쉽게 할 수 있다.
마지막 세팅에 관해서 엄밀히 말하자면, 안 해봐서 모르지만 쉽게 할 수 있을 **것 같다**. IAM 역할 설정을 해 주고 AWS cli를 설치해서 이렇게 이렇게 해주면 되겠지...라고 생각만 해 봤는데 직접 해 본 건 아니다.
분명히 그 세팅 과정에서 내 생각대로 한 번에 쭉 될 리가 없다. 어렵거나 복잡할 수도 있으니... 다음에 다른 걸로 대체할 수 없이 꼭 S3를 써야만 할 때 해 보기로 하자.

어쨌든 나는 github을 이용하기로 마음먹었다.
그러면 github에 어떻게 올릴 수 있는지 한번 부딪혀 봐야겠다.
이것은 시도해 보고 다음 포스팅에 올려야겠다.

아 그 전에 방금 설치한 Jekyll이 잘 동작하는지 확인해 보자.
처음 환경을 만들었다면 Hello World라도 출력해 보는 것이 인지상정 아니겠는가.

## Jekyll 동작 확인
Jekyll 공식 홈페이지에 있는 [빠른시작 설명서][l-jekyll-quickstart]{:target='_blank'}, [기본 사용법][l-jekyll-usage]{:target='_blank'}을 참고해서 진행했다.
먼저 home 디렉토리에서 아래와 같이 입력했다.
```
jekyll new chobolife
```
그러면 아래와 같은 아름다운 로그가 출력된다.
```
Running bundle install in /home/ubuntu/chobolife...
  Bundler: Fetching gem metadata from https://rubygems.org/..............
  Bundler: Fetching gem metadata from https://rubygems.org/..
  Bundler: Resolving dependencies...
  Bundler: Using public_suffix 3.1.1
  Bundler: Using addressable 2.6.0
  Bundler: Using bundler 2.0.2
  Bundler: Using colorator 1.1.0
  Bundler: Using concurrent-ruby 1.1.5
  Bundler: Using eventmachine 1.2.7
  Bundler: Using http_parser.rb 0.6.0
  Bundler: Using em-websocket 0.5.1
  Bundler: Using ffi 1.11.1
  Bundler: Using forwardable-extended 2.6.0
  Bundler: Using i18n 0.9.5
  Bundler: Using rb-fsevent 0.10.3
  Bundler: Using rb-inotify 0.10.0
  Bundler: Using sass-listen 4.0.0
  Bundler: Using sass 3.7.4
  Bundler: Using jekyll-sass-converter 1.5.2
  Bundler: Using ruby_dep 1.5.0
  Bundler: Using listen 3.1.5
  Bundler: Using jekyll-watch 2.2.1
  Bundler: Using kramdown 1.17.0
  Bundler: Using liquid 4.0.3
  Bundler: Using mercenary 0.3.6
  Bundler: Using pathutil 0.16.2
  Bundler: Using rouge 3.7.0
  Bundler: Using safe_yaml 1.0.5
  Bundler: Using jekyll 3.8.6
  Bundler: Fetching jekyll-feed 0.12.1
  Bundler: Installing jekyll-feed 0.12.1
  Bundler: Fetching jekyll-seo-tag 2.6.1
  Bundler: Installing jekyll-seo-tag 2.6.1
  Bundler: Fetching minima 2.5.0
  Bundler: Installing minima 2.5.0
  Bundler: Bundle complete! 6 Gemfile dependencies, 29 gems now installed.
  Bundler: Use `bundle info [gemname]` to see where a bundled gem is installed.
New jekyll site installed in /home/ubuntu/chobolife.
```

제대로 된 것일까? 일단 home 디렉토리 밑에 chobolife라는 디렉토리가 새로 생겼다.
`cd chobolife` 명령으로 새로 생긴 디렉토리에 들어가서 `ll` 명령을 쳐 보면 이렇게 나온다.
```
total 40
drwxrwxr-x 3 ubuntu ubuntu 4096 Jul 26 23:50 ./
drwxr-xr-x 9 ubuntu ubuntu 4096 Jul 26 23:49 ../
-rw-r--r-- 1 ubuntu ubuntu   35 Jul 26 23:49 .gitignore
-rw-r--r-- 1 ubuntu ubuntu  398 Jul 26 23:49 404.html
-rw-rw-r-- 1 ubuntu ubuntu 1119 Jul 26 23:49 Gemfile
-rw-rw-r-- 1 ubuntu ubuntu 1871 Jul 26 23:50 Gemfile.lock
-rw-r--r-- 1 ubuntu ubuntu 1652 Jul 26 23:49 _config.yml
drwxrwxr-x 2 ubuntu ubuntu 4096 Jul 26 23:49 _posts/
-rw-r--r-- 1 ubuntu ubuntu  539 Jul 26 23:49 about.md
-rw-r--r-- 1 ubuntu ubuntu  175 Jul 26 23:49 index.md
```

아직 Jekyll의 구조나 원리에 대해서는 아무 것도 모르지만 뭔가 잘 된 것 같다. 기분이 편안하다.
그러면 여기서 아래 명령으로 Jekyll을 간단하게 실행해 보자.
```
jekyll build
```

위와 같이 입력하니 Jekyll이 무언가 일을 한 것 같다. 이번에는 아래와 같이 출력되었다. 역시 마음이 편안하다.
```
Configuration file: /home/ubuntu/chobolife/_config.yml
            Source: /home/ubuntu/chobolife
       Destination: /home/ubuntu/chobolife/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.395 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
```

뭐가 달라진 게 있을까? `ll` 명령으로 다시 한번 무엇이 바뀌었는지 확인해 보았다.
```
total 48
drwxrwxr-x 5 ubuntu ubuntu 4096 Jul 26 23:51 ./
drwxr-xr-x 9 ubuntu ubuntu 4096 Jul 26 23:49 ../
-rw-r--r-- 1 ubuntu ubuntu   35 Jul 26 23:49 .gitignore
drwxrwxr-x 4 ubuntu ubuntu 4096 Jul 26 23:51 .sass-cache/
-rw-r--r-- 1 ubuntu ubuntu  398 Jul 26 23:49 404.html
-rw-rw-r-- 1 ubuntu ubuntu 1119 Jul 26 23:49 Gemfile
-rw-rw-r-- 1 ubuntu ubuntu 1871 Jul 26 23:50 Gemfile.lock
-rw-r--r-- 1 ubuntu ubuntu 1652 Jul 26 23:49 _config.yml
drwxrwxr-x 2 ubuntu ubuntu 4096 Jul 26 23:49 _posts/
drwxrwxr-x 5 ubuntu ubuntu 4096 Jul 26 23:51 _site/
-rw-r--r-- 1 ubuntu ubuntu  539 Jul 26 23:49 about.md
-rw-r--r-- 1 ubuntu ubuntu  175 Jul 26 23:49 index.md
```

확실히 무언가 바뀌었다.
`jekyll build` 명령 후에 `.sass-cache` 디렉토리와 `_site` 디렉토리가 새로 생긴 것을 알 수 있다.
그리고 조금 더 자세히 살펴보니 `_site` 디렉토리 아래 깊숙한 곳에 `welcome-to-jekyll.html` 파일이 생성되었다.
이 파일을 vim으로 열어보면 Jekyll의 설치 및 작동에는 문제가 없는 것 같다.
Hello World를 출력해 보지는 않았지만 별다른 에러 메시지가 없고 파일이 잘 생성되는 것으로 봐서 이번에는 성공한 것 같다.

그러면 이제 이렇게 생성된 html 파일을 배포하는 방법을 고민해 봐야겠다.

{% capture previous %}
#### 이전 포스트

* [나의 Jekyll 여행기 (1)]({{ site.baseurl }}{% link _posts/2019/2019-07-26-start-jekyll-1.md %})
{% endcapture %}

<div class="notice--primary">
  {{ previous | markdownify }}
</div>

{% capture previous %}
#### 다음 포스트

* [나는 Jekyll을 잘못 사용하고 있었다]({{ site.baseurl }}{% link _posts/2020/2020-02-18-jekyll-new.md %})
{% endcapture %}

<div class="notice--primary">
  {{ previous | markdownify }}
</div>

{% capture related %}
#### 관련 포스트

* [Welcome to Jekyll!]({{ site.baseurl }}{% link _posts/2019/2019-07-26-welcome-to-jekyll.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [Google drive에 공개 이미지 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-29-google-drive-image.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Google Analytics 설치하기]({{ site.baseurl }}{% link _posts/2020/2020-02-11-google-analytics.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-jekyll-docs]: https://jekyllrb.com/docs/
[l-jekyll-quickstart]: https://jekyllrb-ko.github.io/docs/quickstart/
[l-jekyll-usage]: https://jekyllrb-ko.github.io/docs/usage/
[l-github]: https://pages.github.com/
[l-aws-s3]: https://aws.amazon.com/s3/

