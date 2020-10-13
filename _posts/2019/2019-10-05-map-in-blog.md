---
layout: single
title:  "웹페이지에 지도 삽입하기"
excerpt: "#역시Google이야 #보는사람보다는 #내가편한게최고"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-10-05 16:12:00 +0900
categories: 블로그
tags:
  - 블로그
  - HTML
  - iframe
  - jekyll
  - 지도
  - 카카오맵
  - 구글 지도
---

지난 주에는 분당올림픽스포츠센터의 브로셔를 올리면서 포스팅에 지도를 삽입했다.
(해당 포스팅은 [수영장 정보: 분당올림픽스포츠센터 프로그램 안내]({{ site.baseurl }}{% link _posts/2019/2019-09-28-bundang-olympic.md %})이다.)
지도를 삽입하는 방법에 대해서 약간의 시행착오가 있었지만 지금은 좋은 방법을 찾았다.

## 지도를 제공하는 사이트
정확한 통계를 찾아보지는 않았지만, 아마도 우리나라에서는 [네이버 지도][l-naver-map]{:target='_blank'}, [카카오맵][l-kakao-map]{:target='_blank'}, [구글 지도][l-google-map]{:target='_blank'} 순으로 많이 사용될 것이다.
나는 국내 장소의 검색에 대해서는 카카오맵을, 해외 장소 검색은 구글 지도를 사용한다.
특별한 이유가 있어서 네이버 지도를 피하는 것은 아니다.
사실은 오래 전부터 카카오맵을 써 온 관계로, 익숙하기 때문에 계속 카카오맵을 쓰고 있는 것이지, 다른 이유는 없다.

그럼에도 불구하고 굳이 뭔가 이유를 꼽자면 네이버 지도를 카카오맵과 비교했을 때 약간 인터페이스가 구린(?) 것 같다.
특히 줌인, 줌아웃할 때 카카오맵은 자연스럽지만 네이버 지도는 뭔가 뚝뚝 끊기는 느낌이다.
그리고 응답 속도도 카카오맵이 조금 더 빠르고 모바일 애플리케이션도 카카오맵이 조금 더 편한 것 같다.

해외에서는 구글 지도가 매우 많이 사용된다.
하지만, 우리나라에서는 네이버나 다음이 사람들에게 익숙한 포털 사이트이고, 그와 연계되어 많은 지역 특화 정보가 네이버 지도와 카카오맵에 있기 때문에 외국만큼 구글 지도가 사용되지는 않는 것 같다.
게다가 로드뷰의 데이터만큼은 국내 포털 사이트들이 구글 지도를 훨씬 앞선다.
(카카오맵에서는 로드뷰라고 부르지만, 네이버 지도에서는 거리뷰, 구글 지도에서는 스트리트 뷰라고 부른다.
그냥 각자 서비스 이름만 다를 뿐, 실질적으로는 같다.)
우리나라를 방문하는 외국인들이 그런 점에서 어려움이 있다고 한다.
대부분의 외국인들은 한국어를 잘 구사하지 못하고 네이버나 다음에 익숙하지 않기에 구글 지도만 보기 때문이다.

그래도 개인적인 이용 경험으로는 구글 지도도 괜찮은 것 같다.
구글에도 많은 데이터가 쌓여서 국내 사이트들과 비교해도 정보의 격차가 그리 크지 않다.
게다가 요즘에는 네이버 지도, 카카오맵에 작성된 음식점, 상점 등에 대한 비판적인 리뷰가 삭제되거나 비공개 조치되는 일이 잦은 데에 반해 구글 지도는 그렇지 않기 때문에 국내 사용자들 중에서 구글 지도로 옮겨가는 수요도 꽤 있다.

## 카카오맵 삽입하기
어쨌든 나는 주로 쓰는 것이 [카카오맵][l-kakao-map]{:target='_blank'}이므로, 우선 카카오맵에서 지도 소스코드를 가져와서 첨부해 보기로 했다.
네이버 지도는 시도해 보지 않았지만, 아마 방법은 비슷할 것이다.

먼저 첨부하고자 하는 장소를 검색하거나 지도에서 클릭하면 아래와 같은 툴팁이 뜬다.

{% include i-g.html id="1hvYDZTn-unckTMxIQcKrTJXKpxPFtpc7" alt="카카오맵에서 장소를 먼저 검색하고 공유, HTML 태그 복사를 클릭한다." title="카카오맵에서 지도 공유하는 방법" %}

거기에서 공유 버튼, HTML 태그 복사 버튼을 차례로 클릭한다.
그러면 작은 박스가 뜬다.

{% include i-g.html id="1NYmryWwa2d0kOcJtaWf5pGDJW41Hbrk3" alt="카카오맵에서 HTML 태그 복사를 위한 단계로, 설정을 확인하는 박스가 뜬다." title="카카오맵에서 지도를 HTML 태그 복사로 공유하기" %}

이 박스에서는 첨부하려는 지도의 포커싱을 확인하고 지도 크기 설정, 아이콘 변경을 할 수 있다.
적당히 마음에 들게 선택하고 나서 아래에 있는 소스 생성하기를 클릭한다.

그러면 소스코드가 생성된다.
이 소스코드를 복사한 후 지도를 삽입하고자 하는 곳에 붙여넣으면 된다.

{% include i-g.html id="19h-L4gWNEngUNfL0wflgOtVR9-undbdV" alt="HTML 소스코드가 생성되었다. 생성된 소스코드를 복사하여 삽입하고자 하는 곳에 붙이면 된다." title="카카오맵에서 생성된 HTML 소스코드" %}

생성된 소스코드를 자세히 보면 아래와 같다.

```html
<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div id="daumRoughmapContainer1569676989615" class="root_daum_roughmap root_daum_roughmap_landing"></div>

<!--
  2. 설치 스크립트
  * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
-->
<script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
  new daum.roughmap.Lander({
    "timestamp" : "1569676989615",
    "key" : "v7x2",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();
</script>
```

소스코드를 생성하기 전에 설정할 수 있지만, 기본 사이즈는 640 x 360 이다.
지도를 넣고 싶은 곳에 위와 같이 생성된 코드를 삽입하기만 하면 된다.
그러면 블로그 포스팅에 아래 그림처럼 지도가 나타난다.

{% include i-g.html id="1gInLkd6HJMe7uUSO7463tbyIgwSLA6cU" alt="카카오맵에서 생성된 HTML 소스코드를 삽입한 부분에 카카오맵이 삽입되었다." title="웹사이트에 카카오맵 첨부" %}

간단한 방법으로 이렇게 근사하게 지도를 추가했다!

여기서 끝난다면 참 좋겠으나... 문제가 있다.
화면이 넓은 PC에서 보면 깔끔하지만 이걸 모바일에서 보면 마음에 안 든다.
가로 길이 640 pixel이 너무 크기 때문에 화면 오른쪽으로 넘어가게 되는 것이다.

{% include i-g.html id="1G_MRLJ1PkxmiIzlx-Orl_CyPEX71LfmD" alt="카카오맵의 기본 설정대로 웹페이지에 삽입하고, 이를 모바일에서 열어보면 이렇게 표시된다. 모바일 화면의 가로폭보다 표시되는 지도가 더 길어서 오른쪽으로 넘어갔다." title="첨부한 카카오맵이 오른쪽으로 넘어가 버린 모습" %}

모바일에서는 위 그림처럼 표시되는데, 화면 가로길이보다 지도가 더 크게 표시되어 오른쪽의 일부가 잘린 것이 보인다.
화면을 좌우로 스크롤하면 지도를 볼 수는 있지만 별로 깔끔하지 않다.
이 문제를 해결할 방법은 없을까?

그래서 구글 지도를 생각해 보았다.

## 구글 지도 삽입하기
[구글 지도][l-google-map]{:target='_blank'}에서도 소스코드를 얻는 방법은 거의 비슷하다.
우선 구글 지도에서 원하는 장소를 검색한다.
그리고 나오는 왼쪽의 메뉴 중에서 공유 버튼을 클릭한다.

{% include i-g.html id="1l5MPKk-816Rf6lpGlhHKbhyp_YBHWirP" alt="원하는 장소를 구글 지도에서 검색한다. 왼쪽에 나오는 메뉴 중에서 공유 버튼을 클릭한다." title="구글 지도에서 공유 기능 이용하기" %}

그러면 아래와 같은 박스가 뜬다.
여기에서 기본으로는 '링크 보내기'라는 탭이 뜨는데 '지도 퍼가기'를 클릭한다.

{% include i-g.html id="1Ctc0ZInTYkc1bT-lziIN7Y5lih9ZWgby" alt="구글 지도의 공유는 링크 보내기가 기본적으로 선택되어 있다. HTML 소스코드 생성을 위해 두 번째 탭인 지도 퍼가기를 클릭한다." title="구글 지도 퍼가기" %}

그러면 아래와 같은 박스가 뜬다.

{% include i-g.html id="1HGG_NJKfk0n6cXTRybhGIeRdZB1NEjtG" alt="지도 퍼가기를 클릭하면 HTML 소스코드가 생성된다. 크기를 설정할 수도 있다." title="구글 지도에서 HTML 소스코드로 지도 퍼가기" %}

위 그림에서 블록 설정 되어 있는 부분이 삽입할 소스코드이다.
카카오맵을 첨부할 때와 마찬가지로 저 부분을 복사한 후 원하는 곳에 붙여넣으면 된다.
소스코드는 아래와 같다.

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3273218519307!2d127.1256713971345!3d37.382090754530935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b57f70a3def75%3A0x9a841fab3fc65a7b!2z67aE64u57Jis66a87ZS97Iqk7Y-s7Lig7IS87YSw!5e0!3m2!1sko!2skr!4v1569676495045!5m2!1sko!2skr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
```

소스코드를 보면 알겠지만 여기에서는 기본 사이즈가 600 x 450으로 생성된다.
이것을 모바일에서 보면 카카오맵과 마찬가지로 화면 영역 바깥쪽으로 지도가 넘어갈 것이 뻔하다.
어차피 뻔하지만 혹시 모르니까 모바일에서 한번 확인해 보자.

{% include i-g.html id="1-zuYgOFLa7gUEko5Nxym7pXzsrgRcZYZ" alt="구글 지도를 첨부해도 모바일에서 페이지를 열어 보면 화면 오른쪽으로 넘어가는 현상은 동일하다." title="첨부한 구글 지도가 오른쪽으로 넘어가 버린 모습" %}

위 그림처럼 나온다.
단지 지도 배경만 바뀌었을 뿐 카카오맵이나 구글 지도나 문제가 되는 상황은 똑같다.

## width 속성아, 일해라!
이 문제는 이렇게 해결할 수 있다.

구글 지도에서 복사한 소스코드를 다시 한 번 확인해 보자.
아까는 별 생각 없이 그냥 <kbd>Ctrl</kbd>+<kbd>C</kbd>, <kbd>Ctrl</kbd>+<kbd>V</kbd>를 했지만 조금 자세히 볼 필요가 있다.

소스코드는 간단한 구조인데, 태그는 `iframe` 태그 하나밖에 없다.
그리고 그 안에는 `src`, `width`, `height`, `frameborder`, `style`, `allowfullscreen` 속성들이 있다.
이 중에서 첫 번째 속성인 `src`가 갖는 값은 너무 길어서 `blabla`로 대체한 것이다.

```html
<iframe src="blabla" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
```

`width`와 `height` 속성값은 각각 `600`, `450`으로 설정되어 있는데 이것이 바로 삽입되는 구글 지도의 크기를 의미한다.
지금 문제가 되는 것은 가로폭이 화면보다 크다는 것이므로 `width` 속성값만 `100%`라고 바꾸어 준다.
세로 길이도 조절하고 싶다면 `height` 속성값을 바꾸어 주면 된다.
그리고 다른 것은 건드릴 필요가 없다.
당연한 소리지만, `src` 속성은 건드리면 안 된다.

그래서 최종적으로는 아래와 같이 수정된 코드를 얻었다.

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3273218519307!2d127.1256713971345!3d37.382090754530935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b57f70a3def75%3A0x9a841fab3fc65a7b!2z67aE64u57Jis66a87ZS97Iqk7Y-s7Lig7IS87YSw!5e0!3m2!1sko!2skr!4v1569676495045!5m2!1sko!2skr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
```

이제 위 HTML 코드를 원하는 곳에 삽입하면 된다.
그렇게 했을 때 모바일에서 페이지를 열어 보면 아래 그림과 같이 표시된다.

{% include i-g.html id="1tAP1_Ho_v-VljAR41GQgkBV8yLwSOtWi" alt="width 속성의 값을 변경하면 화면의 가로폭이 좁은 모바일에서 열어도 더 이상 화면 오른쪽으로 넘어가지 않게 할 수 있다." title="width 속성값을 변경하여 화면 크기에 맞게 지도가 생성된 모습" %}

이제는 지도의 가로폭이 화면을 넘어가지 않는다.
내가 원하는 대로 표시되었다.

이 방법을 카카오맵에도 적용할 수 있을까 생각해 보았다.
카카오맵의 소스에도 javascript 안에 아래와 같은 부분이 있다.
```html
    "mapWidth" : "640",
```
그런데 이 부분의 `640`을 `100%`로 바꾸어도 변화가 없었다.
아마 구글 지도에서처럼 간단하게 속성값을 바꾸는 것으로 해결될 것 같지는 않다.

다른 방법도 있을 것이다.
시도해 보지는 않았지만, `div` 태그로 wrapper를 씌워 주고 적절히 처리해 주면 될 것 같다.
아니면 반응형으로 만드는 다른 방법이 있을지도 모른다.
그런데 HTML 비전문가의 입장에서는 그나마 구글 지도에서 소스코드를 얻고, `width` 속성값을 바꾸어 주는 게 제일 간단한 방법인 것 같다.

## 결과 비교
마지막으로, 지금까지는 캡쳐 이미지만 띄웠지만 내가 지도를 삽입하기 위해 시도했던 방법의 코드를 적용시켜 본다.

* 카카오맵
<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div id="daumRoughmapContainer1569676989615" class="root_daum_roughmap root_daum_roughmap_landing"></div>

<!--
  2. 설치 스크립트
  * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
-->
<script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
  new daum.roughmap.Lander({
    "timestamp" : "1569676989615",
    "key" : "v7x2",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();
</script>

* 구글 지도 (수정 전)
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3273218519307!2d127.1256713971345!3d37.382090754530935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b57f70a3def75%3A0x9a841fab3fc65a7b!2z67aE64u57Jis66a87ZS97Iqk7Y-s7Lig7IS87YSw!5e0!3m2!1sko!2skr!4v1569676495045!5m2!1sko!2skr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

* 구글 지도 (`width` 수정)
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3273218519307!2d127.1256713971345!3d37.382090754530935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b57f70a3def75%3A0x9a841fab3fc65a7b!2z67aE64u57Jis66a87ZS97Iqk7Y-s7Lig7IS87YSw!5e0!3m2!1sko!2skr!4v1569676495045!5m2!1sko!2skr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

{% capture related %}
#### 관련 포스트

* [나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %})
* [Jekyll post에 이미지 첨부하기]({{ site.baseurl }}{% link _posts/2019/2019-07-31-jekyll-image.md %})
* [Jekyll에 disqus 연동하기]({{ site.baseurl }}{% link _posts/2019/2019-08-16-jekyll-disqus.md %})
* [Google Analytics 설치하기]({{ site.baseurl }}{% link _posts/2020/2020-02-11-google-analytics.md %})
* [Google Adsense와 쿠팡 파트너스 신청하다]({{ site.baseurl }}{% link _posts/2020/2020-02-15-google-adsense-coupang-partners.md %})
{% endcapture %}

<div class="notice--primary">
  {{ related | markdownify }}
</div>

[l-naver-map]: https://map.naver.com/
[l-kakao-map]: https://map.kakao.com/
[l-google-map]: https://www.google.com/maps

