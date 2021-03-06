---
layout: single
title:  "Jekyll 테마 설정하기"
excerpt: "#디자인은몰라요 #그냥많이쓰는거 #따라쓰자"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-08-12 22:54:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - jekyll theme
  - nokogiri 오류
  - Minimal mistakes
---
Jekyll의 기본적인 사항들은 어느 정도 익혔다.
이제 본격적으로 Jekyll을 즐길 준비가 된 것인데, 그러기 위해서는 테마를 내가 원하는 대로 설정하는 일이 남았다.
지금은 Jekyll의 테마 설정을 다 하고 나서 포스팅을 쓰고 있다.
그런데 이전의 그 어떤 작업보다 테마 설정을 하는 것이 어려웠던 것 같다.
이런 줄 미리 알았다면 맨 처음에 `jekyll new chobolife`를 치기 전에 테마 repository를 클론부터 할 걸 그랬다.

## Jekyll 테마 찾기
Jekyll에 테마를 적용하려면 당연한 소리이지만, 우선 마음에 드는 테마를 찾아야 한다.

구글링을 해 보면 몇 개의 사이트가 나온다.
[Free Jekyll Themes][l-jekyllthemes-org]{:target='_blank'}, [Jekyll Themes - a curated directory][l-jekyllthemes-io]{:target='_blank'}, [Jekyll Themes][l-jekyllrc-org]{:target='_blank'} 같은 사이트들이 있다.

처음에는 아무 것도 모르는 상태였으므로 저 사이트들을 서핑하면서 마음에 드는 테마를 고르고 그 중에 몇 개를 설치해 보았다.
내가 마음에 들어했던 테마는 화려한 것보다는 단순하고 눈이 편안한 스타일이었다.
여기에 그 중에 몇 개의 링크를 남겨 둔다.

- [Cayman Blog Theme][l-cayman]{:target='_blank'}
- [Hydrogen][l-hydrogen]{:target='_blank'}
- [MaterializeHG Theme][l-materialize]{:target='_blank'}
- [jekyllDecent][l-jekylldecent]{:target='_blank'}

테마들을 둘러보며 구글링을 해 보니 Jekyll 테마를 설치하는 방법은 크게 세 가지가 있는 것 같다.

1. zip 압축파일을 다운받아서 압축을 해제
1. 테마 파일이 업로드된 git repository를 clone
1. gem을 통한 테마 설치

일단 zip파일을 다운받아서 EC2에 올리고 압축을 푸는 것은 귀찮은 일일 것 같았다.
그리고 gem을 통한 설치도 왠지 한 번에 잘 안 될 것 같았다.
(사실 딱히 단점이 없는 방법이긴 한데 그냥 왠지 모르게 본능적인 두려움이...)
그래서 나는 대부분 git repository를 clone해서 설치했다.

그런데 두 번째 방법인 git clone을 통한 설치를 하려면 사실 테마를 구글링으로 찾는 것보다 더 좋고 확실한 방법이 있다.
그리고 누군가 Jekyll 테마를 새로 설치하려는 사람이 있다면 나는 자신있게 이 방법을 추천할 것이다.
내가 생각할 때 **Jekyll의 테마를 찾아볼 때 가장 좋은 방법**은 바로 github에서 검색하는 것이다.
Github에서 그냥 검색해도 되고 topic을 찾아 들어가도 된다.
아래에 있는 두 개의 링크를 클릭하면 연결된다.

- [jekyll topic][l-github-jekyll]{:target='_blank'}
- [jekyll-themes topic][l-github-jekyll-themes]{:target='_blank'}

구글에서 단순히 jekyll free theme 등으로 검색하는 것보다는 github에서 찾는 것이 훨씬 더 나은 것 같다.
테마 자체의 퀄리티도 더 나을 뿐 아니라, 코드의 완성도도 높다. 그리고 꾸준히 관리도 잘 되는 것 같다.
Fork와 Star 갯수로 어떤 테마가 많이 쓰이는지 한 눈에 확인할 수 있는 것도 편리한 점이다.

## 테마 설치
원하는 테마를 찾았으면 이제 설치를 해야 한다.
처음에 github에서 검색하지 않고 구글링해서 나오는 Jekyll 테마 중 이것저것 설치해 보려고 시도했을 때 많은 오류가 생겼다.
그리고 내가 `ruby`와 `gem`에 아직 익숙하지 않기 때문에 발생하는 문제의 원인도, 해결 방법도 몰랐다.
[Stackoverflow][l-stackoverflow-index]{:target='_blank'}나 구글링을 통해 검색한 방법대로 해 봐도 계속 설치에 실패하거나 버전이 맞지 않거나 하는 문제가 발생하는 등... 잘 되지 않았다.

> 그냥 포기할까?
자꾸 보다보니 Jekyll의 기본 테마도 마음에 들어.
딱 필요한 것만 있고 얼마나 심플하고 좋아.
그럼 충분하잖아.

이런 생각이 들면서 Jekyll의 테마 설정을 포기하고 싶은 마음도 있었다.
하지만 **지금 이 블로그에는 하지 않더라도 다른 홈페이지를 Jekyll의 테마를 설정해서 만들고 싶어질 수도 있지 않을까?**
그러면 그냥 지금 연습하는 셈 치고 만들어 보는 것도 나쁘지는 않을 것 같았다.

결국 내가 github에서 검색해서 찾은 테마는 [Minimal Mistakes Jekyll theme][l-minimal-mistakes]{:target='_blank'} 이라는 것이다.
내가 포스팅하고 있는 지금 기준으로 Star가 5511, Fork는 9274이며, 이는 jekyll 테마 중에서 가장 높다.
아마도 굉장히 많이 쓰이는 테마인 것 같다.

{% include i-g.html id="1-lrTJnivYHGfnxkVauASzLgPpCC19qM-" alt="Jekyll에서 사용할 수 있는 minimal mistakes 테마의 github repository 화면이다. 높은 수의 Star와 Fork를 자랑한다." title="Jekyll 테마의 절대강자인 minimal mistakes" %}

대부분 테마 홈페이지 또는 github repository에 설치 방법에 대한 안내가 있다.
그런데 이 테마 설치가 정말 골치아프다.

지금은 테마를 다 설치한 상태에서 기억을 되살리는 거라 정확하지 않을지도 모르겠다.
테마를 설치하려면 우선 `bundler`가 설치되어 있어야 한다.
구글링을 해 보면 이 `bundler`라는 것은 Ruby의 package manager인데, Jekyll 테마들이 Ruby의 package 형태일 뿐 아니라, 테마에서 사용하는 plugin이 있다면 이런 것들도 설치되어야 하기 때문에 `bundler`를 먼저 설치해야 한다.
`bundler`의 설치는 아래 명령으로 할 수 있다.
```
gem install bundler
```

`bundler`의 설치는 어렵지 않다. `bundler`를 설치했다면 이번에는 테마에 필요한 파일을 다운받아야 한다.
이 파일은 zip 형식으로 압축되어 있을 수도 있고, git repository에 공개되어 있을 수도 있고, gem으로 설치할 수도 있다. 어떤 방법이든지 일단 다운받아서 빈 폴더에 넣어놓는다.

그리고 나면 이 폴더에 있는 `Gemfile`을 업데이트하고 `bundler`를 실행하면 된다.
`bundler`를 실행하면 `Gemfile`을 읽고 그 안에 있는 Ruby package들을 설치하기 때문에, 먼저 Gemfile을 확인하는 것이 좋다.
```
bundle
```
(`bundler`는 `bundler`가 아니라 뒤에 `r`을 빼고 `bundle`이라고 쳐야 실행된다.)

운이 좋게도 자신이 쓰던 환경과 맞는다면 의외로 쉽게 설치될 수도 있다.
하지만 `bundle` 설치 과정에서 문제가 발생할 수도 있다.
특히 내 체감상 그런지는 모르겠으나 구글에서 검색한 테마를 설치할 때 그런 문제가 많았다.

문제는 대부분 어떤 버전이 맞지 않는다, 지금 내 ubuntu에 설치된 package가 테마에서 요구하는 버전보다 높아서 문제가 된다는 것으로 기억한다.
아니 낮아서 문제가 되면 이해를 하겠는데... 더 상위 버전이 설치되어 있는 게 문제가 된다고? (절레절레...)
아마도 github에서 검색했을 때 상위에 있는 테마들은 최근까지도 업데이트가 되고 있는 것이지만 구글에서 다운받을 수 있는 테마는 오래 전에 개발되었으나 방치된 상태인 것이 많은 것 같다.

## nokogiri 문제
내가 설치한 minimal-mistake 테마에서도 설치 과정에서 유사한 문제는 있었다.
결국은 Stackoverflow에 달린 답변을 통해서 해결하기는 했는데 아래는 그 중의 하나이다.

설치하려고 minimal mistakes를 설치한 디렉토리에서 `bundle` 명령을 쳤을 때 아래와 같이 나왔다.
```
$ bundle
Fetching gem metadata from https://rubygems.org/..........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
Using concurrent-ruby 1.1.5

...

Fetching nokogiri 1.10.3
Installing nokogiri 1.10.3 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    current directory: /home/ubuntu/gems/gems/nokogiri-1.10.3/ext/nokogiri/usr/bin/ruby2.5 -r ./siteconf20190805-1715-3az9fg.rb extconf.rb
checking if the C compiler accepts ... yes
Building nokogiri using packaged libraries.
Using mini_portile version 2.4.0
checking for gzdopen() in -lz... no
zlib is missing; necessary for building libxml2
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary libraries and/or headers.  Check the mkmf.log file for more details.  You may need configuration options.

Provided configuration options:
        --with-opt-dir
        --without-opt-dir
        --with-opt-include
        --without-opt-include=${opt-dir}/include
        --with-opt-lib
        --without-opt-lib=${opt-dir}/lib
        --with-make-prog
        --without-make-prog
        --srcdir=.
        --curdir
        --ruby=/usr/bin/$(RUBY_BASE_NAME)2.5
        --help
        --clean
        --use-system-libraries
        --enable-static
        --disable-static
        --with-zlib-dir
        --without-zlib-dir
        --with-zlib-include
        --without-zlib-include=${zlib-dir}/include
        --with-zlib-lib
        --without-zlib-lib=${zlib-dir}/lib
        --enable-cross-build
        --disable-cross-build

To see why this extension failed to compile, please check the mkmf.log which can be found here:

  /home/ubuntu/gems/extensions/x86_64-linux/2.5.0/nokogiri-1.10.3/mkmf.log

extconf failed, exit code 1

Gem files will remain installed in /home/ubuntu/gems/gems/nokogiri-1.10.3 for inspection.
Results logged to /home/ubuntu/gems/extensions/x86_64-linux/2.5.0/nokogiri-1.10.3/gem_make.out

An error occurred while installing nokogiri (1.10.3), and Bundler cannot continue.
Make sure that `gem install nokogiri -v '1.10.3' --source 'https://rubygems.org/'` succeeds before bundling.

In Gemfile:
  minimal-mistakes-jekyll was resolved to 4.16.5, which depends on
    jemoji was resolved to 0.11.0, which depends on
      html-pipeline was resolved to 2.11.1, which depends on
        nokogiri
```
기억을 잘 더듬어보면 분명히 다른 테마를 설치할 때도 이 `nokogiri`라는 녀석이 문제를 일으켰던 것 같다.
`nokogiri`? 너 뭔데?

Github에서 그렇게 많은 star와 fork를 받았던 테마가 문제가 있을 리가 없다고 확신했다.
그래서 에러 메시지를 그대로 긁어서 구글링을 해 보았다.
[Stackoverflow에 유사한 질문][l-stackoverflow]{:target='_blank'}이 있고 거기에 달린 답변들 중 아래쪽에 있는 답변대로 해 보았다.

```
$ sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev
Reading package lists... Done
Building dependency tree
Reading state information... Done
build-essential is already the newest version (12.4ubuntu1).
ruby-dev is already the newest version (1:2.5.1).
patch is already the newest version (2.7.6-2ubuntu1.1).
patch set to manually installed.
Suggested packages:
  liblzma-doc
The following NEW packages will be installed:
  liblzma-dev zlib1g-dev
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 320 kB of archives.
After this operation, 1125 kB of additional disk space will be used.
Do you want to continue? [Y/n]
Get:1 http://ap-northeast-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 zlib1g-dev amd64 1:1.2.11.dfsg-0ubuntu2 [176 kB]
Get:2 http://ap-northeast-2.ec2.archive.ubuntu.com/ubuntu bionic/main amd64 libl zma-dev amd64 5.2.2-1.3 [145 kB]
Fetched 320 kB in 1s (460 kB/s)
Selecting previously unselected package zlib1g-dev:amd64.
(Reading database ... 95052 files and directories currently installed.)
Preparing to unpack .../zlib1g-dev_1%3a1.2.11.dfsg-0ubuntu2_amd64.deb ...
Unpacking zlib1g-dev:amd64 (1:1.2.11.dfsg-0ubuntu2) ...
Selecting previously unselected package liblzma-dev:amd64.
Preparing to unpack .../liblzma-dev_5.2.2-1.3_amd64.deb ...
Unpacking liblzma-dev:amd64 (5.2.2-1.3) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Setting up liblzma-dev:amd64 (5.2.2-1.3) ...
Setting up zlib1g-dev:amd64 (1:1.2.11.dfsg-0ubuntu2) ...

$ sudo gem install nokogiri
Fetching: mini_portile2-2.4.0.gem (100%)
Successfully installed mini_portile2-2.4.0
Fetching: nokogiri-1.10.3.gem (100%)
Building native extensions. This could take a while...
Successfully installed nokogiri-1.10.3
Parsing documentation for mini_portile2-2.4.0
Installing ri documentation for mini_portile2-2.4.0
Parsing documentation for nokogiri-1.10.3
Installing ri documentation for nokogiri-1.10.3
Done installing documentation for mini_portile2, nokogiri after 2 seconds
2 gems installed
```

뭔지 정확히는 몰라도 왠지 그 `nokogiri`라는 놈이 설치가 된 것 같다.
그러면 이제 다시 `bundle`을 쳐보자.
```
$ bundle
Fetching gem metadata from https://rubygems.org/..........
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
Using concurrent-ruby 1.1.5
Using i18n 0.9.5
Using minitest 5.11.3
Using thread_safe 0.3.6
Using tzinfo 1.2.5
Using activesupport 5.2.3
Using public_suffix 3.1.1
Using addressable 2.6.0
Using bundler 2.0.2
Using colorator 1.1.0
Using eventmachine 1.2.7
Using http_parser.rb 0.6.0
Using em-websocket 0.5.1
Using multipart-post 2.1.1
Using faraday 0.15.4
Using ffi 1.11.1
Using forwardable-extended 2.6.0
Using gemoji 3.0.1
Using mini_portile2 2.4.0
Using nokogiri 1.10.3
Fetching html-pipeline 2.11.1
Installing html-pipeline 2.11.1
Using rb-fsevent 0.10.3
Using rb-inotify 0.10.0
Using sass-listen 4.0.0
Using sass 3.7.4
Using jekyll-sass-converter 1.5.2
Using ruby_dep 1.5.0
Using listen 3.1.5
Using jekyll-watch 2.2.1
Using kramdown 1.17.0
Using liquid 4.0.3
Using mercenary 0.3.6
Using pathutil 0.16.2
Using rouge 3.7.0
Using safe_yaml 1.0.5
Using jekyll 3.8.6
Fetching jekyll-data 1.0.0
Installing jekyll-data 1.0.0
Using jekyll-feed 0.12.1
Using sawyer 0.8.2
Using octokit 4.14.0
Using jekyll-gist 1.5.0
Fetching jekyll-include-cache 0.2.0
Installing jekyll-include-cache 0.2.0
Using jekyll-paginate 1.1.0
Fetching jekyll-sitemap 1.3.1
Installing jekyll-sitemap 1.3.1
Fetching jemoji 0.11.0
Installing jemoji 0.11.0
Fetching minimal-mistakes-jekyll 4.16.5
Installing minimal-mistakes-jekyll 4.16.5
Bundle complete! 6 Gemfile dependencies, 46 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
Post-install message from html-pipeline:
-------------------------------------------------
Thank you for installing html-pipeline!
You must bundle Filter gem dependencies.
See html-pipeline README.md for more details.
https://github.com/jch/html-pipeline#dependencies
-------------------------------------------------
```

그렇지!
이제야 되었다.

`nokogiri`가 뭐하는 package인지, 어떤 영향을 미치는지 알 수 없다.
알고 싶지도 않다.
다만 나는 일단 지금의 목적을 달성했기 때문에 만족하며, 나의 정신건강을 위해 더 이상의 호기심은 차단하기로 했다.

{% include i-g.html id="1XX3ZQhDkZmu68U-juYZNaxaKewrvZvWG" alt="Minimal mistakes 테마를 적용한 후 아직 별도의 customization을 하지 않은 모습이다." title="Minimal mistakes 테마가 적용된 블로그" %}

{% capture related %}
#### 관련 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Jekyll로 만든 사이트를 github에 올리기]({{ site.baseurl }}{% link _posts/2019/2019-07-28-jekyll-github.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
* [Jekyll의 Minimal mistakes 테마에서 HTML 압축하기]({{ site.baseurl }}{% link _posts/2019/2019-08-17-jekyll-compress.md %})
* [웹페이지에 지도 삽입하기]({{ site.baseurl }}{% link _posts/2019/2019-10-05-map-in-blog.md %})
* [Google Analytics 설치하기]({{ site.baseurl }}{% link _posts/2020/2020-02-11-google-analytics.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-jekyllthemes-org]: http://jekyllthemes.org/
[l-jekyllthemes-io]: https://jekyllthemes.io/
[l-jekyllrc-org]: http://themes.jekyllrc.org/
[l-cayman]: http://jekyllthemes.org/themes/jekyll-theme-cayman-blog/
[l-hydrogen]: http://jekyllthemes.org/themes/hydrogen/
[l-materialize]: http://jekyllthemes.org/themes/jekyll-materialize-hg/
[l-jekylldecent]: http://jekyllthemes.org/themes/jekyllDecent/

[l-github-jekyll]: https://github.com/topics/jekyll
[l-github-jekyll-themes]: https://github.com/topics/jekyll-themes
[l-stackoverflow-index]: https://stackoverflow.com/

[l-minimal-mistakes]: https://github.com/mmistakes/minimal-mistakes
[l-stackoverflow]: https://stackoverflow.com/questions/33996523/error-installing-nokogiri-failed-to-build-gem-native-extension-libiconv-is-mi

