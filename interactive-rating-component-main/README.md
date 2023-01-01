# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- ✅ View the optimal layout for the app depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ Select and submit a number rating
- ✅ See the "Thank you" card state after submitting a rating

### Screenshot

![image](https://user-images.githubusercontent.com/44540726/210162131-9916f848-bd42-4682-9ac9-780613626c7d.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/12Ahn22/Frontend-Mentor-Challenges/tree/main/interactive-rating-component-main)
- Live Site URL: [Add live site URL here](https://12ahn22.github.io/Frontend-Mentor-Challenges/interactive-rating-component-main/)

## My process

1. 컴포넌트 분석하기
2. rating 컴포넌트 마크업 작업
3. rating 컴포넌트 CSS 작업
4. result 컴포넌트 마크업 작업
5. result 컴포넌트 CSS 작업
6. JS 기능 완성
7. 웹접근성 & 리팩토링

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

#### SVG 사용해보기

`svg`를 사용할 때, width와 height를 비율을 지키며 확대하기 위해서는 `viewBox`를 설정해야한다.

```html
<svg
  width="15"
  height="14"
  viewBox="0 0 17 16"
  xmlns="http://www.w3.org/2000/svg"
></svg>
```

#### radio 버튼

처음에는 button 태그를 사용했지만, 5개의 점수 중에 하나만 선택해서 제출하는 로직이기 때문에 input태그의 radio로 교체했다.

radio버튼은 원래 그룹에서 단 하나만 선택할 수 있기때문에 하나만 선택하기 위한 추가 로직을 내가 작성해 줄 필요가 없다.

그러나 button태그를 사용하는 경우, 이전에 클릭한 버튼의 css를 수정하는 로직을 CSS가 아닌 JS로 구현해야했었다.

```css
#rating_form input:checked + label {
  background-color: var(--color-light-grey);
  color: var(--color-white) !important;
}
```

위 코드처럼 선택된 input의 라벨을 CSS로 쉽게 수정해줄 수 있다.
