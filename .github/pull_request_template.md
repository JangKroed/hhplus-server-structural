### **커밋 설명**

**과제에 대한 링크 및 이미지는 README.md에 작성되어있습니다.**
[README 바로가기](https://github.com/JangKroed/hhplus-server-structural?tab=readme-ov-file#hhplus-server)

- 기본과제
  - [API 명세서](http://110.47.85.154:32475/swagger)
    - Users: 061859
    - Concerts: b5d59f
    - Wallets: 14668
  - [ERD](https://www.erdcloud.com/d/mwJD8tnp8hqC9nM8u)
    ![hhplus-week2-erd](docs/images/Server%20Structural_2.png 'erd')
  - [인프라 구성도](docs/images/InfraStructural.png)
    ![hhplus-week2-infra](docs/images/InfraStructural.png 'infra')
- 심화과제
  - [시퀀스 다이어그램](https://github.com/JangKroed/hhplus-server-structural?tab=readme-ov-file#%EC%8B%9C%ED%80%80%EC%8A%A4-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%A0%98)
  - [마일스톤](https://github.com/users/JangKroed/projects/1/views/1)

---

### **리뷰 받고 싶은 내용(질문)**

- 리뷰 포인트 1
  - [ERD](https://www.erdcloud.com/d/mwJD8tnp8hqC9nM8u)
  - 내용: ERD 작성중 실선/점선이 식별/비식별 관계에 따라 적용한다고 해보았는데 적절한지에 대한 확신이 없습니다. 또, MySQL 테이블에 대한 정보만 ERD에 작성되어있는데 추후 다른 RDB또는 Redis나 MongoDB가 추가된다면 현업에서 보통 ERD에 포함시키는지 궁금합니다.
    한가지 reserves(예약) 테이블과 reserve_histories(예약 이력) 테이블의 관계를 예시로 적절한지와 아직 요구사항에 따라 테이블구성하는데에 있어 어려움을 느끼는데 테이블 생성한것은 DDD관점에서 적절한지 궁금합니다.
- 리뷰 포인트 2
  - [API 명세서](http://110.47.85.154:32475/swagger)
  - 내용: 해당 단계에서는 직접적인 비즈니스 로직을 구성하기보다 서로 어떤데이터를 어떤 필드 및 구성으로 주고받을지에대한 약속을 한다고 이해되었는데, 해당 데이터들이 필요에 의해서 구성이 변경되어질때 현업에서는 어떤 소통방식을 이용하는지 궁금합니다.
    ERD에서와 마찬가지로 DDD관점에서 적절한지 피드백 부탁드립니다.
- 리뷰 포인트 3
  - [시퀀스 다이어그램](https://github.com/JangKroed/hhplus-server-structural?tab=readme-ov-file#%EC%8B%9C%ED%80%80%EC%8A%A4-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%A0%98)
  - 내용: 시퀀스 다이어그램 작성하였는데 아무리 봐도 제대로 작성했다는 생각이 들지않는데 막상 무언가 추가하고나면 적절한지에 대한 의문이 드네요.
- 리뷰 포인트 4
  - [마일스톤](https://github.com/users/JangKroed/projects/1/views/1)
  - 내용: 마일스톤을 처음 사용하여봤는데 해당주차에 대해서만 작성하고나니 아마도 프로젝트 전체에 대한게 아닐까 생각이 들었습니다. WBS와 같은 느낌으로 받아들여졌는데 해당 기능을 현업에서와 개인 또는 사이드 프로젝트에서 활용시 차이점이 궁금합니다.

---

### **과제 셀프 피드백**

- 과제에서 모호하거나 애매했던 부분
  - 뭔가 익숙하면서도 낯선 느낌이랄까... 간단하게라도 처음부터 계획해보는것을 자주 해보아야겠다는 생각이 들었다.
  - 요구사항별 기능의 우선순위를 나누고 데이터를 어떻게 사용하고 API를 어떻게 정의해야 유지보수가 수월할지에 대한 확신이 부족한것같다.
- 과제에서 좋았던 부분
  - 시퀀스 다이어그램을 통해 API명세서를 이해하는데 도움을 줄 수있다.
  - 정도를 떠나 설계단계가 있다면 추후 개발하는데 있어 큰 도움이 될 것 같다.

### 기술적 성장

- 새로 학습한 개념
  - 마일스톤
  - 시퀀스 다이어그램
- 기존 지식의 재발견/심화
  - ERD 작성시 관계에 대한 식별/비식별
- 구현 과정에서의 기술적 도전과 해결
  - 마일스톤 작성시 깃허브 > 프로젝트 > 레포 > 마일스톤 > 이슈 단계로 얽혀있는것을 확인했지만 익숙해지려면 좀 더 시간이 필요할 것 같다.
