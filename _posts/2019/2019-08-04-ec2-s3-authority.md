---
layout: single
title:  "EC2에서 S3에 접근하는 방법"
excerpt: "#삽질은 #그렇게 #재밌더라"
header:
  overlay_image: /assets/images/computer-1209641_1920.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
date:   2019-08-04 15:15:00 +0900
categories: 블로그
tags:
  - 블로그
  - jekyll
  - AWS
  - AWS S3
  - AWS CLI
  - AMI
  - IAM
---
약간의 삽질을 했지만 결국 AWS CLI를 이용하여 ubuntu에서 S3에 업로드하는 방법을 찾았다.
이번 포스팅에서는 그 방법을 정리해 두려고 한다.

## Jekyll 블로그의 초안을 AWS S3에 업로드
이전 포스팅([Jekyll 초안 관리에 대한 고민]({{ site.baseurl }}{% link _posts/2019/2019-08-01-jekyll-draft.md %}))에서 했던 고민의 결론은 이것이었다.
> Jekyll 블로그의 초안을 github page에 commit하기 전에 AWS S3에 업로드해서 나만 먼저 확인해보겠다.

참고로 Jekyll 블로그를 S3에서 호스팅하는 것이 목적이라면 `s3_website`라는 package로 아주 쉽게 할 수 있다.

하지만 지금 나는 Jekyll에서 생성한 블로그를 github pages에 호스팅하고 있으며, S3에는 초안 또는 수정사항만 공개하기 전에 내가 확인하려는 것이 목적이다.
그래서 `_site` 디렉토리 밑에 `.git` 디렉토리가 있고, 여기에는 꽤 많은 폴더와 파일이 있는 상태이다.
이 상태에서 `s3_website`를 이용해서 S3 버킷에 올리면 `.git` 폴더에 있는 모든 폴더와 파일도 업로드되는데, 이는 S3에 상당한 용량을 차지할 뿐 아니라 많은 수의 PUT request를 발생시키게 된다.
그래서 나는 `s3_website`를 사용하지 않고 아래와 같이 awscli를 사용하는 것이다.

## Ubuntu에 AWS CLI 설치
가장 먼저 해야 할 일은 ubuntu에 AWS CLI를 설치하는 것이다.
[Amazon docs][l-amazon-cli]{:target='_blank'}를 참고하면, **사전 요구 사항**으로 Python을 설치해야 한다고 한다.
먼저 `python --version` 또는 `python3 --version`을 실행하여 파이썬이 설치되어 있는지 확인해 보고, 설치되어 있지 않다면 아래의 명령으로 파이썬을 설치하면 된다.
```
sudo apt-get install python3
```
이미 파이썬이 설치되어 있는 상태에서 위의 명령을 실행하면 아래와 같은 메시지가 출력된다.
```
Reading package lists... Done
Building dependency tree
Reading state information... Done
python3 is already the newest version (3.6.7-1~18.04).
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
```
(사실 내가 이 메시지를 본 건... 파이썬이 설치되어 있을 줄 몰랐다. 내가 설치한 EC2 AMI에서는 python3가 이미 설치되어 있었다.)

다음은 파이썬의 패키지 설치 관리자인 pip를 통해 awscli를 설치하면 된다.
[Amazon docs][l-amazon-cli]{:target='_blank'}에는 이렇게 설치하라고 나와 있다.
```
pip3 install awscli --upgrade --user
```
위와 같은 명령을 실행하면 awscli가 설치되며, 아래와 같이 설치 로그가 출력된다.
```
Collecting awscli
  Downloading https://files.pythonhosted.org/packages/6a/82/99ed4bfad39ace624a5a547b96e520b8f61a01348758c277f0a79aeeb315/awscli-1.16.209-py2.py3-none-any.whl (1.8MB)
    100% |                                | 1.8MB 806kB/s
Collecting rsa<=3.5.0,>=3.1.2 (from awscli)
  Downloading https://files.pythonhosted.org/packages/e1/ae/baedc9cb175552e95f3395c43055a6a5e125ae4d48a1d7a924baca83e92e/rsa-3.4.2-py2.py3-none-any.whl (46kB)
    100% |                                | 51kB 10.8MB/s
Collecting botocore==1.12.199 (from awscli)
  Downloading https://files.pythonhosted.org/packages/50/f8/dbe656ee191c2d8b471a86fa07f0d37515611d865deaa034fc2b71dd71e4/botocore-1.12.199-py2.py3-none-any.whl (5.6MB)
    100% |                                | 5.6MB 248kB/s
Collecting PyYAML<=5.1,>=3.10; python_version != "2.6" (from awscli)
  Downloading https://files.pythonhosted.org/packages/9f/2c/9417b5c774792634834e730932745bc09a7d36754ca00acf1ccd1ac2594d/PyYAML-5.1.tar.gz (274kB)
    100% |                                | 276kB 914kB/s
Collecting colorama<=0.3.9,>=0.2.5 (from awscli)
  Downloading https://files.pythonhosted.org/packages/db/c8/7dcf9dbcb22429512708fe3a547f8b6101c0d02137acbd892505aee57adf/colorama-0.3.9-py2.py3-none-any.whl
Collecting s3transfer<0.3.0,>=0.2.0 (from awscli)
  Downloading https://files.pythonhosted.org/packages/16/8a/1fc3dba0c4923c2a76e1ff0d52b305c44606da63f718d14d3231e21c51b0/s3transfer-0.2.1-py2.py3-none-any.whl (70kB)
    100% |                                | 71kB 10.3MB/s
Collecting docutils<0.15,>=0.10 (from awscli)
  Downloading https://files.pythonhosted.org/packages/36/fa/08e9e6e0e3cbd1d362c3bbee8d01d0aedb2155c4ac112b19ef3cae8eed8d/docutils-0.14-py3-none-any.whl (543kB)
    100% |                                | 552kB 2.5MB/s
Collecting pyasn1>=0.1.3 (from rsa<=3.5.0,>=3.1.2->awscli)
  Downloading https://files.pythonhosted.org/packages/6a/6e/209351ec34b7d7807342e2bb6ff8a96eef1fd5dcac13bdbadf065c2bb55c/pyasn1-0.4.6-py2.py3-none-any.whl (75kB)
    100% |                                | 81kB 10.8MB/s
Collecting python-dateutil<3.0.0,>=2.1; python_version >= "2.7" (from botocore==1.12.199->awscli)
  Downloading https://files.pythonhosted.org/packages/41/17/c62faccbfbd163c7f57f3844689e3a78bae1f403648a6afb1d0866d87fbb/python_dateutil-2.8.0-py2.py3-none-any.whl (226kB)
    100% |                                | 235kB 2.3MB/s
Collecting urllib3<1.26,>=1.20; python_version >= "3.4" (from botocore==1.12.199->awscli)
  Downloading https://files.pythonhosted.org/packages/e6/60/247f23a7121ae632d62811ba7f273d0e58972d75e58a94d329d51550a47d/urllib3-1.25.3-py2.py3-none-any.whl (150kB)
    100% |                                | 153kB 7.7MB/s
Collecting jmespath<1.0.0,>=0.7.1 (from botocore==1.12.199->awscli)
  Downloading https://files.pythonhosted.org/packages/83/94/7179c3832a6d45b266ddb2aac329e101367fbdb11f425f13771d27f225bb/jmespath-0.9.4-py2.py3-none-any.whl
Collecting six>=1.5 (from python-dateutil<3.0.0,>=2.1; python_version >= "2.7"->botocore==1.12.199->awscli)
  Downloading https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
Building wheels for collected packages: PyYAML
  Running setup.py bdist_wheel for PyYAML ... done
  Stored in directory: /home/ubuntu/.cache/pip/wheels/ad/56/bc/1522f864feb2a358ea6f1a92b4798d69ac783a28e80567a18b
Successfully built PyYAML
Installing collected packages: pyasn1, rsa, docutils, six, python-dateutil, urllib3, jmespath, botocore, PyYAML, colorama, s3transfer, awscli
Successfully installed PyYAML-5.1 awscli-1.16.209 botocore-1.12.199 colorama-0.3.9 docutils-0.14 jmespath-0.9.4 pyasn1-0.4.6 python-dateutil-2.8.0 rsa-3.4.2 s3transfer-0.2.1 six-1.12.0 urllib3-1.25.3
```
(사실 이 설치 로그가 중요한 것은 아닌데, 혹시 나중에 똑같은 과정을 수행할 때 문제가 있는지 없는지 확인하기 위한 용도로 남겨 두는 것이다.)

그리고 나서 프롬프트가 떨어지면 awscli의 설치는 끝난 것이다.
하지만 모든 것이 끝난 것은 아니다.
이어서 해 주어야 하는 일이 있는데, 그것은 바로 어느 경로에서나 awscli를 실행할 수 있도록 설치 경로를 `PATH`에 추가하는 것이다.
위와 같이 설치했다면 awscli는 `~/.local/bin` 디렉토리 밑에 설치되어 있을 것이므로 이 경로를 추가해 주면 된다.

awscli의 설치 경로를 `PATH`에 추가해 주기 위해 `.bashrc` 파일을 열었다.
`.bashrc`의 맨 마지막에는 지난 번 Jekyll을 설치하면서 편집했던 아래와 같은 내용이 있었다.
([나의 Jekyll 여행기 (2)]({{ site.baseurl }}{% link _posts/2019/2019-07-27-start-jekyll-2.md %}) 참고)
```
# Install Ruby Gems to ~/gems
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
```

그래서 그 아래에 이렇게 추가해 주었다.
```
# Install aws-cli to ~/.local/bin
export PATH=$HOME/.local/bin:$PATH
```

그리고 나서 방금 수정한 내용을 현재 열려 있는 터미널에도 적용시키기 위해 아래와 같이 실행해 주었다.
```
source .bashrc
```

여기까지 하면 awscli의 설치 과정이 끝났다.
아래 명령으로 설치가 완료되었는지 확인해 보았다.
```
$ aws --version
aws-cli/1.16.209 Python/3.6.8 Linux/4.15.0-1044-aws botocore/1.12.199
```

방금 설치한 awscli의 버전을 출력하는 것인데 잘 실행된다.
정상적으로 설치된 것을 알 수 있다.

## EC2 instance에서 S3 접근을 위한 IAM 설정하기
위와 같이 awscli를 설치해 주고 나면 이제는 현재 사용 중인 EC2 instance에서 S3에 접근할 수 있도록 IAM 설정을 해 주어야 한다.
awscli를 설치했다고 해서 아무나 내 S3 버킷에 접근하면 안 되므로 당연히 필요한 절차다.
사실 이번 포스팅에서 가장 중요한 절차가 아닐까 생각한다.

EC2 instance 위에서 오른쪽 버튼을 클릭하면 메뉴가 나오는데, 그 중에서 **인스턴스 설정** → **IAM 역할 연결/바꾸기**를 클릭한다.

{% include i-g.html id="1LJqr0Yvf6oliHJ7ApEUJhmwxodrzweup" alt="EC2 인스턴스에 S3의 접근 권한을 주기 위해서는 IAM 역할을 부여해 주어야 한다." title="EC2 인스턴스에서 IAM 설정하는 메뉴" %}

그러면 새 탭이 뜨면서 아래와 같은 IAM 역할 연결/바꾸기 페이지가 연결된다.

{% include i-g.html id="1N-nvO_RRHabYgqNZOfnrulwcCNcLhJYG" alt="EC2 인스턴스에 부여할 IAM 역할을 선택하는 탭이 뜬다." title="EC2 인스턴스에 연결할 IAM 역할 선택" %}

이 화면에서는 EC2 instance에 어떤 IAM 역할을 연결할지 선택할 수 있다.
만약 이전에 S3에 접근할 수 있는 IAM 역할을 만든 적이 있다면 그 IAM 역할을 선택하면 된다.

사실 나는 wordpress 블로그를 만지면서 그런 IAM 역할을 만든 적이 있긴 하다.
지금은 wordpress도 안 쓰고 있고 따라서 자연히 그 때 만들어 둔 IAM 역할도 floating 상태이다.
어쨌든 오래되기도 했으니 이번에 새로 EC2 인스턴스에 연결할 IAM 역할을 만들었다.
파란색 글씨로 되어 있는 **새 IAM 역할 생성**을 클릭한다.
그러면 이렇게 생긴 화면이 뜬다.

{% include i-g.html id="1NGPAfBA3TTGJc2zlzSd6ISrSSBvRIoLe" alt="새 IAM 역할 생성을 시작하는 페이지." title="IAM 역할 생성 페이지" %}

AWS의 EC2 서비스 페이지에서 IAM 서비스 페이지로 이동되었다.
상단에 있는 **역할 만들기**라는 눈에 띄는 파란색 버튼을 클릭한다.

그러면 아래와 같은 역할 만들기 페이지가 나온다.

{% include i-g.html id="1FsF9aszUJHZdg0ewQp_ViGnkG8CSTk7L" alt="IAM 역할 만들기의 첫 번째 단계에서는 만들 IAM 역할을 어떤 유형의 개체에서, 어떤 서비스에서 이용할지 정해 주어야 한다." title="IAM 역할 만들기 첫 번째 단계: 개체, 서비스 선택" %}

여기에서 지금은 EC2 instance에서 S3 버킷에 접근할 수 있는 권한을 주려는 것이므로
신뢰할 수 있는 유형의 개체 선택에서는 **AWS 서비스**, 이 역할을 사용할 서비스 선택에서는 **EC2**에 해당한다.
**EC2**를 클릭한다.

{% include i-g.html id="1E4k40eo_J7d4Z-lKrI6F8gaYM8Lygcz3" alt="IAM 역할 만들기의 두 번째 단계에서는 해당 IAM 역할에서 어떤 권한을 줄 지 선택한다." title="IAM 역할 만들기 두 번째 단계: 연결 (선택 전)" %}

이번에는 역할 만들기의 두 번째 페이지인데, 권한 정책 연결을 해 주어야 한다.
이미 정의된 많은 정책 중에서 하나를 선택해 주면 된다.
정책 필터에 's3'라고 입력하면 s3와 관련된 권한 정책만 볼 수 있다.
**'AmazonS3FullAccess'의 체크박스**를 클릭하여 선택 상태로 만들어 준다.

{% include i-g.html id="1ph5O78laBaYyBhfkY6LAufnr-KxdUtoK" alt="지금은 S3의 접근 권한을 부여하는 것이 목적이므로 AmazonS3FullAccess에 체크한다." title="IAM 역할 만들기 두 번째 단계: 연결 (선택 후)" %}

지금은 S3에만 접근하면 되기 때문에 다른 정책은 필요가 없었지만, 여러 가지의 권한을 동시에 부여하는 것도 가능하다.
AmazonS3FullAccess의 체크를 유지한 채로 다른 정책을 찾아서 선택해 주면 된다.

권한 정책의 선택이 완료되었으면 오른쪽 하단의 **다음:태그** 버튼을 클릭한다.
이번에는 태그 추가(선택 사항) 페이지가 떴다.

{% include i-g.html id="1KIRuvarjuTcU_Qds7DMQ5c_MDaet8j4G" alt="IAM 권한의 태그를 추가할 수 있는 페이지가 나온다." title="IAM 역할 만들기 세 번째 단계: 태그" %}

여기서는 그냥 넘어가도 관계없지만, 나는 {Name: Jekyll}이라는 태그를 추가했다.
그리고 오른쪽 하단의 **다음:검토** 버튼을 클릭한다.

{% include i-g.html id="1iVBLrimON0Z-_xebEIDoczq6vc5aFczw" alt="마지막으로 IAM 역할의 이름을 설정하며 검토한 후 완료된다." title="IAM 역할 만들기 네 번째 단계: 검토" %}

역할 만들기 페이지의 마지막, 검토 단계이다.
역할 이름을 설정해 주어야 하는데, 이 이름을 Jekyll이라고 입력하였다.
그리고 나서 오른쪽 하단의 **역할 만들기** 버튼을 클릭하면 된다.
이렇게 하면 성공적으로 S3에 접근할 수 있는 IAM 역할을 만든 것이다.

{% include i-g.html id="1NHDmVrj5K0Z2qWv0_Up7dqw-N9xR2tW0" alt="조금 전 추가한 IAM 역할이 추가된 모습을 확인할 수 있다." title="IAM 역할이 추가된 후" %}

위와 같이 IAM 역할 리스트에 나온다.
이 탭에서 해야 할 일은 끝났으므로 탭을 닫아주었다.

아까 **새 IAM 역할 생성**을 클릭했던 탭으로 돌아왔다.
그 왼쪽에 있었던 새로고침 심볼을 클릭한 후, 현재 **역할 없음**으로 선택되어 있는 콤보박스를 클릭하여 조금 전에 만들었던 **Jekyll**을 선택한다.

{% include i-g.html id="1ApxqKbDD8mQ7OQ2j1eWgSMGNxgW_DabL" alt="조금 전 추가한 IAM 역할을 선택해 준다." title="EC2 인스턴스에 IAM 역할을 부여하는 페이지" %}

그리고 나서 오른쪽 하단의 적용 버튼을 클릭하면 된다.
이렇게 하면 EC2 instance에서 S3에 접근할 수 있는 권한이 생긴다.

그럼 이제 제대로 되었는지 간단한 명령을 통해 확인해 볼 시간이다.
아래 명령은 `test.txt`라는 빈 텍스트 파일을 생성한 후, S3에 `chobolife-test`라는 버킷을 만들고, `test.txt`를 업로드하는 것이다.
```
$ touch test.txt
$ aws s3 mb s3://chobolife-test
make_bucket: chobolife-test
$ aws s3 cp test.txt s3://chobolife-test
upload: ./test.txt to s3://chobolife-test/test.txt
```
위와 같이 `aws s3 mb` 명령에는 `make_bucket`라는 메시지가, `aws s3 cp` 명령에는 `upload`라는 메시지가 출력되었다.
제대로 업로드가 된 것 같아 보인다.
웹브라우저에서 AWS 콘솔에 들어가서 확인해 보았다.

{% include i-g.html id="1dPPbpx8qQyhkgsk7RR72t7k1pSqiGnXY" alt="S3 버킷 생성과 테스트 파일 업로드가 잘 된 것을 알 수 있다." title="Ubuntu에서 S3 버킷을 만들고 테스트 파일을 올린 모습" %}

위 그림과 같이 `chobolife-test`라는 버킷 안에 `test.txt`라는 0바이트의 파일이 잘 업로드되었다.
그런데 너 왜... 버지니아에 있니?
아마 `aws s3 mb` 명령으로 버킷을 생성하면서 리전을 지정하는 방법이 있을 것 같은데, 지정하지 않으면 임의의 리전에 생성되는 것 같다.
어쨌든 이렇게 EC2 instance에서 ubuntu 터미널에서 S3에 접근할 수 있다는 점은 확인하였다.

## Jekyll 폴더를 S3에 올리기
이제 마지막 단계에 왔다.
터미널에서 S3에 접근할 수 있는 package도 설치했고, EC2 instance에서 S3에 접근할 수 있는 권한도 얻었다.
이제는 Jekyll에서 만든 사이트를 S3에 올리는 일만 남았다.

일단 먼저 S3 버킷을 생성했다.
아까처럼 터미널에서 `aws s3 mb` 명령으로 만들 수도 있지만, 나는 아래와 같이 AWS 콘솔에 들어가서 만들었다.

S3 서비스 페이지로 들어가서 **버킷 만들기** 버튼을 클릭하면 이렇게 생긴 상자가 뜬다.

{% include i-g.html id="1msCek3yVJQjziGSf5ZTI2z7cbaDuXxmg" alt="AWS 콘솔에서 S3 서비스 페이지에 들어온 후 버킷을 만드는 페이지에 들어왔다." title="S3 버킷 만들기: 이름 및 리전" %}

여기에서 **버킷 이름**에 `chobolife-draft`라고 입력하였다.
그리고 **다음** 버튼을 클릭한다.
그러면 옵션 구성이라는 화면으로 넘어가는데 여기에서는 특별히 설정할 것이 없으므로 아무 작업도 없이 바로 **다음** 버튼을 클릭했다.
그리고 나면 권한 설정이라는 화면이 나온다.

{% include i-g.html id="1_xPOfukljqmSnaMbv_6sDVErxO98qkYd" alt="정적 웹 호스팅을 위한 S3 버킷은 퍼블릭 액세스를 허용해 주어야 한다. 퍼블릭 액세스 차단을 설정하는 체크박스를 해제해 준다." title="S3 버킷 만들기: 권한 설정" %}

여기에서는 현재 버킷의 목적이 정적 웹 호스팅을 하기 위한 것이므로 모든 퍼블릭 액세스 차단을 풀어 주어야 한다.
체크박스를 해제한 후 **다음** 버튼을 클릭한다.
그리고 나면 `chobolife-draft`라는 이름의 버킷 생성이 완료되었다.

따로 캡쳐하지는 않았지만, 정적 웹 호스팅을 위한 설정을 해 주어야 한다.
S3 버킷의 **속성** 페이지에 들어가서 **정적 웹 사이트 호스팅**을 설정해 주었다.

그리고 나서 나는 당당하게 Jekyll의 `_site` 디렉토리에서 아래와 같이 실행했다.
```
$ aws s3 cp * s3://chobolife-draft
Unknown options: assets,blog,feed.xml,index.html,s3://chobolife-draft
```

어라? 이상하다.
아까 분명히 `aws s3 cp` 명령으로 `test.txt` 파일을 올렸는데 왜 안되지?
이것은 다행히 구글링을 통해 금방 해결하였다.

더불어서 `.git` 폴더를 제외한 모든 폴더와 파일을 올리는 방법도 찾았고, [Amazon docs][l-amazon-access]{:target='_blank'}에서 S3에 업로드하면서 퍼블릭 권한을 설정하는 방법까지 찾았다.
아래의 명령으로 하면 된다.
```
aws s3 cp ~/chobolife/_site s3://chobolife-draft --recursive --exclude ".git/*" --acl public-read
```

그러면 `.git`을 제외한 `_site` 디렉토리 아래에 있는 모든 파일이 업로드되며 아래와 같이 뜬다.
아까 `test.txt` 파일 하나만 올렸을 때와 동일한 로그가 각 파일마다 뜨는 것이다.
```
upload: _site/blog/2019/08/01/jekyll-draft/index.html to s3://chobolife-draft/blog/2019/08/01/jekyll-draft/index.html
upload: _site/blog/2019/08/03/ec2-s3-authority/index.html to s3://chobolife-draft/blog/2019/08/03/ec2-s3-authority/index.html
upload: _site/about/index.html to s3://chobolife-draft/about/index.html
upload: _site/assets/minima-social-icons.svg to s3://chobolife-draft/assets/minima-social-icons.svg
upload: _site/index.html to s3://chobolife-draft/index.html
upload: _site/feed.xml to s3://chobolife-draft/feed.xml
upload: _site/blog/2019/07/29/google-drive-image/index.html to s3://chobolife-draft/blog/2019/07/29/google-drive-image/index.html
upload: _site/blog/2019/07/31/jekyll-image/index.html to s3://chobolife-draft/blog/2019/07/31/jekyll-image/index.html
upload: _site/404/index.html to s3://chobolife-draft/404/index.html
upload: _site/blog/2019/07/26/welcome-to-jekyll/index.html to s3://chobolife-draft/blog/2019/07/26/welcome-to-jekyll/index.html
upload: _site/blog/2019/07/28/jekyll-github/index.html to s3://chobolife-draft/blog/2019/07/28/jekyll-github/index.html
upload: _site/blog/2019/07/27/start-jekyll-2/index.html to s3://chobolife-draft/blog/2019/07/27/start-jekyll-2/index.html
upload: _site/blog/2019/07/26/start-jekyll-1/index.html to s3://chobolife-draft/blog/2019/07/26/start-jekyll-1/index.html
upload: _site/assets/main.css to s3://chobolife-draft/assets/main.css
```

이렇게 하면 내가 처음에 의도했던 모든 작업은 끝이 났다.
Jekyll의 초안을 웹브라우저에서 확인해 보고 싶었는데, 이를 S3를 통해 실현하였다.
이제 작성하던 초안이 웹에 공개되지 않아도 되고, 사소한 수정사항에도 git의 로그가 더럽혀지는 것을 막을 수 있게 되었다.

{% capture previous %}
#### 이전 포스트

* [Jekyll 초안 관리에 대한 고민]({{ site.baseurl }}{% link _posts/2019/2019-08-01-jekyll-draft.md %})
{% endcapture %}

<div class="notice--primary">
  {{ previous | markdownify }}
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

[l-amazon-cli]: https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-install.html
[l-amazon-access]: https://aws.amazon.com/ko/premiumsupport/knowledge-center/read-access-objects-s3-bucket/

