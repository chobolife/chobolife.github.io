---
layout: single
title:  "나의 Jekyll 여행기 (1)"
excerpt: "#첫번째블로그 #시작부터삽질"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-07-26 21:05:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - cygwin
---
블로그를 시작하려고 한다. 아마 나의 이런저런 생각들, 그리고 내가 했던 것들을 기록하기 위한 용도로 사용할 것 같다.

## Jekyll의 시작
나는 여러 가지 방법을 알아보고 나서, Jekyll을 사용해 보기로 했다.
일반 포털 사이트에서 제공하는 블로그는 자유도가 낮아 새로운 것을 시도해보기 어렵기 때문에 처음부터 별로 생각이 없었다.
그리고 다음으로 생각했던 것은 전에도 써 본 적이 있었던 설치형 워드프레스였는데, 워드프레스는 장점도 많지만 단점도 여럿 있다.
결국 워드프레스인가... 하고 생각하면서 계속 찾아보니 Jekyll이라는 것을 통해 정적 웹사이트를 만들 수 있다는데, 이 Jekyll이 나의 호기심을 자극했다. 그래서 한 번 Jekyll을 사용해 보기로 했다.

솔직히 말하자면 블로그를 해야겠다고 생각한 것보다 Jekyll을 써 보고 싶다는 생각이 먼저였다.
블로그는 Jekyll을 써먹어보기 위해 하는 것에 가깝다.
대부분의 개발자는 나의 생각을 이해할 것이다.
뭔가 하고 싶은 게 먼저 있어서 그것을 구현하기 위한 기술을 찾아보는 절차도 있지만, 역순으로 어떤 기술을 먼저 접하고 그것을 활용해 보고 싶어서 내가 직접 해보는 절차도 있다는 것이다.

블로그를 하는 목적이랄까. 블로그를 시작하며 내가 생각한 바는 있는데 이 포스팅은 아니고 아마 다른 기회에 그것을 쓰면 좋을 것 같다.

## Jekyll 설치, 그리고 첫 번째 실패
나는 Windows 환경에서 cygwin을 사용하고 있었기 때문에 여기에 Jekyll을 설치해서 사용하려고 했다.
Jekyll의 설치는 [Jekyll 공식 홈페이지][l-jekyll-docs]{:target='_blank'}를 참고했다.

Cygwin 설치 파일을 실행하면 package list가 아래처럼 주르륵 나온다.

{% include i-g.html id="1NOyxYFusREbMq291ZIjnmt4KqMBaBbLd" alt="Cygwin 설치 과정에서 package list를 만나게 된다." title="Cygwin 설치 과정의 package list" %}

위 그림은 category 기준으로 보이는데, 잘 보면 Ruby도 발견할 수 있다.
그 중에서 이미 설치되어 있는 package를 찾아서 삭제할 수 있고 설치되어 있지 않는 package를 찾아서 새로 설치할 수도 있다.
여기에서 나는 ruby, ruby-devel을 설치했다.
원래 공식 홈페이지에는 ubuntu linux에서 설치할 때 ruby, ruby-dev, build-essential를 설치하라고 되어 있었는데 cygwin package list에서는 ruby-dev가 없는 대신 ruby-devel이 있었고, build-essential은 아예 없었다.
그것을 대체할만한 다른 package가 있겠지만 잘 모르니까 일단 위의 2개만 설치해 보았다.

그렇게 순조롭게 설치한 후 Jekyll을 설치하다가 아래와 같은 문제에 봉착했다.
```
$ gem install jekyll
Building native extensions.  This could take a while...
      1 [main] ruby 6344 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0xE30000)
      1 [main] ruby 11208 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0xE40000)
      1 [main] ruby 20176 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0xE40000)
      2 [main] ruby 18388 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0xDF0000)
      2 [main] ruby 10036 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0xE00000)
      1 [main] ruby 17064 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0x650000)
      2 [main] ruby 10300 child_info_fork::abort: C:\cygwin\bin\cyggmp-10.dll: Loaded to different address: parent(0x690000) != child(0xC30000)
```
위와 같은 abort가 발생했다.
당연히 Jekyll의 설치는 제대로 되지 않았다.
Stackoverflow 등 구글링을 해 보면 다른 사람들도 이와 같은 문제를 겪었다는 것을 알 수 있다. 그런데 이렇다할 뾰족한 방법이 없었다.
정확히 말하자면 답변으로 달린 방법은 몇 개 있었지만 내가 직접 해 보니 다 제대로 된 해결법은 아니었다.

그렇다면 Jekyll은 cygwin에서 사용할 수 없는 것일까? 그건 아닐 거라고 생각했다.
나는 이번에 cygwin에 처음 ruby 및 그와 관련된 package를 설치한 것이지만, cygwin은 워낙 사용자가 많아서 package 자체에 문제가 있는 것은 아닐 것이고, 어떤 이유로 인해 내가 기존에 쓰던 환경에서 꼬이지 않았을까 생각했다.

그래서 나는 **과감하게** cygwin을 재설치했다.
Cygwin에는 내가 그동안 개발해 오면서 많은 것들을 설치하고 나에 맞게끔 설정한 것이 많기 때문에 그것은 매우 과감한 결정이었다.
이것 역시 개발자들은 이해할 것이다. 환경을 바꾸는 것이 얼마나 과감하고 그리고 무모한 일인지.
Cygwin 설치에 대한 것은 조금 자세하게 다음에 포스팅할 예정이다.
똑같은 삽질이라도 다음번에는 더 빠르게 하기 위해서 기록을 남길 필요는 있다.

## 두 번째 실패
어쨌든, cygwin을 삭제 후 다시 설치했다.
이번에는 cygwin 설치 파일을 실행했을 때 나오는 package list에서 설치하지 않고, cygwin에 package manager인 apt-cyg를 설치한 후 그 package manager에서 ruby를 설치해 보기로 했다.
어차피 cygwin의 자체 package list를 통해서 설치한다면 아까와 동일하게 ruby, ruby-devel을 설치하게 될 텐데, 그러면 결과도 왠지 똑같을 것 같았기 때문이다.

[이 블로그][l-cygwin-wget]{:target='_blank'}를 참고해서 apt-cyg를 설치했다.
맨 처음 cygwin을 설치할 때에는 package list 중에서 다른 것은 모두 무시하고 wget만 깔았다.
그리고 cygwin의 설치가 다 되면 아래와 같은 명령으로 apt-cyg를 설치할 수 있다.
```
wget raw.github.com/transcode-open/apt-cyg/master/apt-cyg
chmod +x apt-cyg
mv apt-cyg /usr/local/bin
```
보면 알겠지만 누군가 올려 놓은 apt-cyg를 github에서 받아와서, 권한 설정한 후 `/usr/local/bin` 폴더에 넣어주는 것이다.
위와 같이 해서 apt-cyg를 설치하고 나면 apt-cyg를 통해서 다른 필요한 package를 설치할 수 있다.

습관인지 아니면 본능인지 모르겠지만 command line에서 뭘 하든 필수라고 할 수 있는 package들을 가장 먼저 설치했다.
```
apt-cyg update
apt-cyg install vim curl git openssh
```

그 다음부터는 또 Jekyll의 설치법을 따라서 그대로 진행했다.

```
apt-cyg install ruby ruby-dev build-essential
```

이렇게 하면 주르륵 길게 로그가 출력되면서 열심히 설치한다. 그런데 불길하게 그 중에 이런 문구가 나타난다.
```
Installing ruby-dev
Unable to locate package ruby-dev
```

아마도 ruby-dev가 제대로 설지되지 않았다는 말일 것 같은데... 일단 무시하고 설치를 계속했다.
(왜 불길한 예감은 항상 틀리지 않는 것일까...)

`.bashrc`에 `GEM_HOME`과 `PATH`를 설정하고 나서 gem을 통해 Jekyll을 설치해 보았다.
(Jekyll의 구체적인 설치 과정은 [다음 포스팅 (나의 Jekyll 여행기 (2))]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})에서 다루었다.)
```
$ gem install jekyll bundler
Fetching: public_suffix-3.1.1.gem (100%)
Successfully installed public_suffix-3.1.1
Fetching: addressable-2.6.0.gem (100%)
Successfully installed addressable-2.6.0
Fetching: colorator-1.1.0.gem (100%)
Successfully installed colorator-1.1.0
Fetching: http_parser.rb-0.6.0.gem (100%)
Building native extensions.  This could take a while...
ERROR:  Error installing jekyll:
        ERROR: Failed to build gem native extension.

    current directory: /home/sb.lee/.gem/ruby/2.3.0/gems/http_parser.rb-0.6.0/ext/ruby_http_parser
/usr/bin/ruby.exe -r ./siteconf20190727-17252-bha32i.rb extconf.rb
mkmf.rb can't find header files for ruby at /usr/share/ruby/include/ruby.h

extconf failed, exit code 1

Gem files will remain installed in /home/sb.lee/.gem/ruby/2.3.0/gems/http_parser.rb-0.6.0 for inspection.
Results logged to /home/sb.lee/.gem/ruby/2.3.0/extensions/x86-cygwin/2.3.0/http_parser.rb-0.6.0/gem_make.out
Fetching: bundler-2.0.2.gem (100%)
Successfully installed bundler-2.0.2
Parsing documentation for bundler-2.0.2
Installing ri documentation for bundler-2.0.2
Done installing documentation for bundler after 16 seconds
1 gem installed
```

위 로그를 잘 보면 bundler는 제대로 설치가 되었는데 Jekyll을 설치하지 못했다.
이래서는 cygwin에서 Jekyll을 쓸 수가 없지 않을까?
처음 cygwin을 재설치하고 나서부터 진행했던 것이기 때문에 이번에는 package끼리 꼬인다거나 다른 문제가 발생할 소지가 없었기 때문이다.

이렇게 Jekyll을 설치하려고 했던 나의 첫 시도는 내게 익숙했던 개발 환경만 허망하게 날린 채 아무런 결과를 내지 못했다.

{% capture next %}
#### 다음 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [나는 Jekyll을 잘못 사용하고 있었다]({{ site.baseurl }}{% link _posts/2020/2020-02-18-jekyll-new.md %})
{% endcapture %}

<div class="notice--primary">
  {{ next | markdownify }}
</div>

[l-jekyll-docs]: https://jekyllrb.com/docs/
[l-cygwin-wget]: https://brunch.co.kr/@davisasan/37

