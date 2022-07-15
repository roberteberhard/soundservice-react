import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import useShop from '../context/AppContext'

// styles
const StyledPlayerSection = styled.div`
  display: ${props => (props.hasPlayer !== '' ? `block` : `none`)};
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  &.player-home {
    width: 420px;
    height: 236px;
    top: calc(100vh - 65px);
    left: calc(100% - 470px);
    box-shadow: 0px 2px 3px rgb(0 0 0 / 50%);
    @media (min-height: 1000px) {
      top: calc(100px - 30px);
    }
    @media (max-width: 1080px) {
      left: calc(100% - 460px);
    }
    @media (max-width: 768px) {
      top: calc(100vh + 95px);
      left: calc((100% - 420px) * 0.5);
    }
    @media (max-width: 480px) {
      top: calc(100vh + 95px);
      left: calc((100% - 420px) * 0.5);
    }
    .remote-control {
      display: none;
    }
    .partner-links {
      display: none;
    }
  }
  &.player-privacy,
  &.player-legal {
    position: fixed;
    width: 420px;
    height: 236px;
    top: calc(100vh - 286px);
    left: calc(100% - 470px);
    box-shadow: 0px 2px 3px rgb(0 0 0 / 50%);
    .remote-control {
      display: none;
    }
    .partner-links {
      display: none;
    }
  }
`

const StyledRemoteControl = styled.div`
  .remote-control {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 55;
    top: calc(100vh - 97px);
    left: 40px;
    font-size: 0;
    .play {
      cursor: pointer;
      display: block;
      width: 54px;
      height: 36px;
      outline: none !important;
      font-size: 0;
      border-radius: 18px;
      border: 0;
      background-position: 22px 12px;
      background-repeat: no-repeat;
      background-size: 12px 12px;
      background-color: white(0.35);
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Imljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMiAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9InBsYXkiIGNsYXNzPSJzdDAiIGQ9Ik0xMC4yLDUuNEwxLjEsMC4xQzAuOSwwLDAuNiwwLDAuNCwwLjFDMC4xLDAuMiwwLDAuNSwwLDAuN3YxMC41YzAsMC4zLDAuMSwwLjUsMC40LDAuNgoJQzAuNSwxMiwwLjYsMTIsMC43LDEyYzAuMSwwLDAuMywwLDAuNC0wLjFsOS4xLTUuM2MwLjItMC4xLDAuNC0wLjQsMC40LTAuNkMxMC42LDUuNywxMC40LDUuNSwxMC4yLDUuNHoiLz4KPC9zdmc+Cg==');
    }
    .pause {
      cursor: pointer;
      display: block;
      width: 54px;
      height: 36px;
      outline: none !important;
      font-size: 0;
      border-radius: 18px;
      border: 0;
      background-position: 22px 12px;
      background-repeat: no-repeat;
      background-size: 12px 12px;
      background-color: white(0.35);
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Imljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMiAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9InBhdXNlIiBjbGFzcz0ic3QwIiBkPSJNMy4zLDEwLjNjMCwwLjktMC43LDEuNy0xLjcsMS43bDAsMEMwLjcsMTIsMCwxMS4zLDAsMTAuM1YxLjdDMCwwLjcsMC43LDAsMS43LDBsMCwwCgljMC45LDAsMS43LDAuNywxLjcsMS43VjEwLjN6IE05LjYsMTAuM2MwLDAuOS0wLjcsMS43LTEuNywxLjdsMCwwYy0wLjksMC0xLjctMC43LTEuNy0xLjdWMS43QzYuMywwLjcsNywwLDcuOSwwbDAsMAoJYzAuOSwwLDEuNywwLjcsMS43LDEuN1YxMC4zeiIvPgo8L3N2Zz4K');
    }
    .next {
      cursor: pointer;
      display: block;
      width: 54px;
      height: 36px;
      margin-left: 8px;
      outline: none !important;
      font-size: 0;
      border-radius: 18px;
      border: 0;
      background-position: 18px 12px;
      background-repeat: no-repeat;
      background-size: 24px 12px;
      background-color: white(0.35);
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Imljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9Im5leHQiIGNsYXNzPSJzdDAiIGQ9Ik0yMC4zLDUuMWwtOC42LTVjLTAuMy0wLjItMC43LTAuMi0xLDBjLTAuMywwLjItMC41LDAuNS0wLjUsMC45djQuMWwtOC42LTVDMS4yLDAsMC44LDAsMC41LDAuMQoJUzAsMC42LDAsMXYxMGMwLDAuNCwwLjIsMC43LDAuNSwwLjlDMC43LDEyLDAuOCwxMiwxLDEyczAuMywwLDAuNS0wLjFsOC42LTVWMTFjMCwwLjQsMC4yLDAuNywwLjUsMC45QzEwLjgsMTIsMTEsMTIsMTEuMSwxMgoJczAuMywwLDAuNS0wLjFsOC42LTVjMC4zLTAuMiwwLjUtMC41LDAuNS0wLjlDMjAuOCw1LjYsMjAuNiw1LjMsMjAuMyw1LjF6Ii8+Cjwvc3ZnPgo=');
    }
  }
`

const StyledPartnerLinks = styled.div`
  .partner-links {
    right: 0;
    top: calc(100vh - 92px);
    position: absolute;
    z-index: 1;
    ul {
      list-style: none;
      li.brand {
        float: left;
        margin-left: 20px;
        a {
          cursor: pointer;
          display: block;
          width: 28px;
          height: 28px;
          font-size: 0;
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: 28px 28px;
        }
        &.youtube a {
          background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InlvdXR1YmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MiA0MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDIgNDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9Imljb24iIGNsYXNzPSJzdDAiIGQ9Ik0xNy40LDM1LjdjLTgtMC4xLTEwLjctMC4zLTEyLjQtMC42Yy0xLjEtMC4yLTIuMS0wLjctMi44LTEuNWMtMC42LTAuNi0xLTEuNC0xLjMtMi42CgljLTAuMy0xLTAuNC0xLjgtMC42LTMuOEMwLDIyLjcsMCwxOSwwLjMsMTQuOGMwLjMtMi4zLDAuNC01LDIuMS02LjZDMy4xLDcuNSw0LDcsNS4xLDYuOEM2LjcsNi41LDEzLjgsNi4zLDIxLDYuMwoJczE0LjMsMC4yLDE1LjksMC42YzEuMywwLjIsMi42LDEsMy4zLDEuOWMxLjYsMi41LDEuNiw1LjUsMS43LDcuOWMwLjEsMS4xLDAuMSw3LjYsMCw4LjdjLTAuMiwzLjgtMC40LDUuMS0xLDYuNQoJYy0wLjMsMC45LTAuNiwxLjMtMS4yLDEuOEMzOSwzNC41LDM4LDM1LDM2LjksMzUuMkMyOS45LDM1LjcsMjQuMSwzNS44LDE3LjQsMzUuN0wxNy40LDM1Ljd6IE0yOCwyMC42Yy0zLjktMi4xLTcuNS00LTExLjMtNS45Cgl2MTEuOEMyMC43LDI0LjMsMjQuOCwyMi4zLDI4LDIwLjZMMjgsMjAuNkwyOCwyMC42eiIvPgo8L3N2Zz4K');
        }
        &.google a {
          background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Imdvb2dsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBpZD0iaWNvbiIgY2xhc3M9InN0MCIgZD0iTTIuOSwzOS40bDE3LjEtMTdsNiw2TDUuNywzOS43Yy0wLjgsMC40LTEuOCwwLjQtMi41LDBMMi45LDM5LjR6IE0xOC4zLDIwLjdMMiwzN1Y0LjRMMTguMywyMC43egoJIE0yOC41LDE0bDgsNC40YzAuOCwwLjQsMS4zLDEuMywxLjMsMi4xYzAsMC45LTAuNSwxLjctMS4zLDIuMWwtOC4yLDQuNmwtNi41LTYuNUMyMS43LDIwLjcsMjguNSwxNCwyOC41LDE0eiBNMi43LDEuN2wwLjUtMC40CgljMC44LTAuNCwxLjgtMC41LDIuNSwwbDIwLjYsMTEuNEwyMCwxOUwyLjcsMS43eiIvPgo8L3N2Zz4K');
        }
        &.amazon a {
          background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImFtYXpvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBpZD0iaWNvbiIgY2xhc3M9InN0MCIgZD0iTTAuMSwzMS41YzAuMS0wLjIsMC4zLTAuMiwwLjYsMEM3LjEsMzUuMiwxNCwzNywyMS41LDM3YzUsMCw5LjktMC45LDE0LjgtMi44CgljMC4xLTAuMSwwLjMtMC4xLDAuNi0wLjJjMC4yLTAuMSwwLjQtMC4yLDAuNS0wLjJjMC40LTAuMiwwLjctMC4xLDAuOSwwLjJzMC4xLDAuNi0wLjIsMC44Yy0wLjUsMC4zLTEsMC43LTEuOCwxLjEKCWMtMi4yLDEuMy00LjYsMi4zLTcuMywzUzIzLjcsNDAsMjEuMSw0MGMtNCwwLTcuNy0wLjctMTEuMy0yLjFjLTMuNS0xLjQtNi43LTMuMy05LjUtNS45QzAuMSwzMiwwLDMxLjksMCwzMS44CglDMCwzMS43LDAsMzEuNiwwLjEsMzEuNXogTTExLjYsMjAuN2MwLTEuOCwwLjQtMy4zLDEuMy00LjVjMC45LTEuMiwyLTIuMiwzLjYtMi44YzEuNC0wLjYsMy4xLTEsNS4xLTEuM2MwLjctMC4xLDEuOC0wLjIsMy40LTAuMwoJdi0wLjZjMC0xLjYtMC4yLTIuNy0wLjUtMy4zQzI0LDcuMSwyMy4xLDYuOCwyMiw2LjhoLTAuM2MtMC44LDAuMS0xLjYsMC4zLTIuMiwwLjhzLTEsMS4xLTEuMiwxLjljLTAuMSwwLjUtMC40LDAuOC0wLjgsMC45TDEzLDkuNwoJYy0wLjQtMC4xLTAuNi0wLjMtMC42LTAuN2MwLTAuMSwwLTAuMiwwLTAuM2MwLjQtMi4zLDEuNS0zLjksMy4yLTVzMy43LTEuNyw1LjktMS44aDFjMi45LDAsNS4yLDAuOCw2LjgsMi4zCglDMjkuNSw0LjQsMjkuNyw0LjcsMzAsNWMwLjIsMC4zLDAuNCwwLjYsMC41LDAuOGMwLjEsMC4yLDAuMiwwLjYsMC4zLDFDMzAuOSw3LjIsMzEsNy41LDMxLDcuN2MwLjEsMC4yLDAuMSwwLjUsMC4xLDEuMQoJYzAsMC41LDAsMC45LDAsMVYxOWMwLDAuNywwLjEsMS4zLDAuMywxLjhzMC40LDAuOSwwLjYsMS4yYzAuMiwwLjIsMC41LDAuNiwwLjksMS4yYzAuMiwwLjIsMC4yLDAuNCwwLjIsMC42cy0wLjEsMC40LTAuMywwLjUKCWMtMi4xLDEuOC0zLjMsMi44LTMuNCwzYy0wLjMsMC4yLTAuNywwLjMtMS4xLDAuMWMtMC40LTAuMy0wLjctMC42LTAuOS0wLjlzLTAuNS0wLjUtMC42LTAuNnMtMC4zLTAuNC0wLjYtMC43CgljLTAuMy0wLjQtMC40LTAuNi0wLjUtMC43Yy0xLjQsMS42LTIuOCwyLjUtNC4yLDIuOWMtMC45LDAuMy0xLjksMC40LTMuMiwwLjRjLTIsMC0zLjYtMC42LTQuOC0xLjhDMTIuMiwyNC42LDExLjYsMjIuOSwxMS42LDIwLjd6CgkgTTE4LjEsMTkuOWMwLDEsMC4yLDEuOCwwLjcsMi40czEuMiwwLjksMiwwLjljMC4xLDAsMC4yLDAsMC4zLDBjMC4xLDAsMC4yLDAsMC4zLDBjMS4xLTAuMywxLjktMSwyLjUtMi4xYzAuMy0wLjUsMC41LTEsMC42LTEuNgoJczAuMi0xLDAuMi0xLjRzMC0wLjksMC0xLjh2LTFjLTEuNSwwLTIuNiwwLjEtMy40LDAuM0MxOS4zLDE2LjMsMTguMSwxNy43LDE4LjEsMTkuOXogTTM0LjIsMzIuMmMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuMwoJYzAuNi0wLjQsMS4yLTAuNywxLjgtMC45YzEtMC4zLDEuOS0wLjQsMi44LTAuNGMwLjMsMCwwLjUsMCwwLjcsMGMxLjEsMC4xLDEuOCwwLjMsMi4xLDAuNmMwLjEsMC4yLDAuMiwwLjQsMC4yLDAuN3YwLjMKCWMwLDAuOS0wLjIsMS45LTAuNywzLjJjLTAuNSwxLjItMS4yLDIuMi0yLDIuOWMtMC4xLDAuMS0wLjIsMC4yLTAuMywwLjJzLTAuMSwwLTAuMiwwYy0wLjItMC4xLTAuMi0wLjItMC4xLTAuNAoJYzAuOS0yLjIsMS40LTMuOCwxLjQtNC42YzAtMC4zLTAuMS0wLjUtMC4yLTAuNmMtMC4zLTAuMy0xLTAuNS0yLjEtMC41Yy0wLjQsMC0wLjksMC0xLjUsMC4xcy0xLjIsMC4yLTEuOCwwLjIKCWMtMC4yLDAtMC4zLDAtMC4zLTAuMWMtMC4xLTAuMS0wLjEtMC4xLDAtMC4yQzM0LjEsMzIuMywzNC4xLDMyLjIsMzQuMiwzMi4yeiIvPgo8L3N2Zz4K');
        }
        &.spotify a {
          width: 27px;
          height: 28px;
          background-size: 27px 27px;
          background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InNwb3RpZnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MiA0MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDIgNDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggaWQ9Imljb24iIGNsYXNzPSJzdDAiIGQ9Ik0yMSwxQzEwLDEsMSwxMCwxLDIxczksMjAsMjAsMjBzMjAtOSwyMC0yMFMzMiwxLDIxLDF6IE0zMC4yLDMyLjdjLTAuMiwwLjUtMC43LDAuNy0xLjIsMC43CgljLTAuMiwwLTAuNS0wLjEtMC43LTAuMmMtMy4yLTEuOC02LjgtMi43LTEwLjUtMi43Yy0yLjIsMC00LjQsMC4zLTYuNSwxYy0wLjcsMC4yLTEuNS0wLjItMS43LTAuOWMtMC4yLTAuNywwLjItMi4zLDAuOS0yLjUKCWMyLjMtMC43LDQuOC0xLjEsNy4zLTEuMWM0LjEsMCw4LjIsMS4xLDExLjgsM0MzMC40LDMwLjUsMzAuNiwzMi4xLDMwLjIsMzIuN3ogTTMyLjgsMjUuMmMtMC4zLDAuNi0wLjgsMS40LTEuNCwxLjQKCWMtMC4zLDAtMC41LTAuMS0wLjctMC4yYy00LTIuMS04LjMtMy4xLTEyLjgtMy4xYy0yLjUsMC00LjksMC4zLTcuMywxYy0wLjksMC4yLTEuNy0wLjMtMi0xLjFjLTAuMi0wLjksMC4zLTIuMywxLjEtMi41CgljMi42LTAuNyw1LjQtMS4xLDguMi0xLjFjNC45LDAsOS45LDEuMiwxNC4yLDMuNUMzMi45LDIzLjQsMzMuMiwyNC40LDMyLjgsMjUuMnogTTMzLjgsMTkuMmMtMC4zLDAtMC42LTAuMS0wLjgtMC4yCgljLTQuNy0yLjQtOS44LTMuNi0xNS4yLTMuNmMtMi44LDAtNS41LDAuMy04LjIsMWMtMSwwLjItMi0wLjQtMi4yLTEuM2MtMC4yLTEsMC40LTIuMiwxLjMtMi40YzMtMC43LDYtMS4xLDkuMS0xLjEKCWM1LjksMCwxMS42LDEuMywxNi44LDMuOWMwLjksMC41LDEuMywxLjYsMC44LDIuNUMzNS4yLDE4LjYsMzQuNSwxOS4yLDMzLjgsMTkuMnoiLz4KPC9zdmc+Cg==');
        }
        &.apple a {
          margin-top: -3px;
          background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImFwcGxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDIgNDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyIDQyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGlkPSJpY29uXzJfIiBjbGFzcz0ic3QwIiBkPSJNMzIuMSwyMi4yYy0wLjEtMy40LDEuNC02LjEsNC40LThjLTEuNy0yLjUtNC4yLTMuOS03LjUtNC4yYy0xLjEtMC4xLTIuNywwLjItNC41LDAuOQoJYy0yLDAuNy0zLjEsMS4xLTMuMywxLjFjLTAuNSwwLTEuNS0wLjMtMy0wLjljLTEuNS0wLjYtMi43LTAuOS0zLjgtMC45Yy0xLjgsMC0zLjQsMC41LTQuOSwxLjVjLTEuNSwwLjktMi43LDIuMi0zLjYsMy45CgljLTEuMiwyLTEuNyw0LjQtMS43LDcuMmMwLDIuNSwwLjQsNSwxLjMsNy42YzAuOCwyLjQsMS44LDQuNSwzLDYuNGMxLjEsMS43LDIuMSwyLjksMi45LDMuNmMxLjIsMS4yLDIuNCwxLjcsMy42LDEuNwoJYzAuOCwwLDEuOC0wLjMsMy4xLTAuOWMxLjItMC41LDIuNC0wLjgsMy42LTAuOGMxLjEsMCwyLjMsMC4zLDMuNSwwLjhjMS4zLDAuNiwyLjQsMC44LDMuMywwLjhjMS4zLTAuMSwyLjQtMC42LDMuNS0xLjYKCWMwLjQtMC4zLDAuOC0wLjgsMS4zLTEuNGMwLjUtMC43LDEtMS40LDEuNS0yLjFjMC40LTAuNiwwLjgtMS4yLDEuMS0xLjljMC40LTAuNywwLjctMS40LDEtMi4xYzAuMS0wLjMsMC4zLTAuNiwwLjQtMC45CgljMC4xLTAuMywwLjItMC43LDAuMy0xYy0xLTAuNC0xLjktMS4xLTIuOC0xLjlDMzMuMSwyNy4xLDMyLjEsMjQuOCwzMi4xLDIyLjJMMzIuMSwyMi4yeiBNMjcsNi43YzEuNS0xLjgsMi4yLTMuOCwyLjItNS45VjAuNAoJYzAtMC4xLDAtMC4zLDAtMC40Yy0xLDAuMS0yLjEsMC40LTMuMiwxcy0yLjEsMS4zLTIuOCwyLjJDMjEuNyw1LDIxLDYuOSwyMSw4Ljl2MC40YzAsMC4xLDAsMC4zLDAsMC40QzIzLjIsOS45LDI1LjMsOC45LDI3LDYuNwoJTDI3LDYuN3oiLz4KPC9zdmc+Cg==');
        }
      }
    }
  }
`

// markup
const Player = () => {
  const [videoId, setVideoId] = useState('')
  const [videoSize, setVideoSize] = useState({ x: 0, y: 0, w: '420px', h: '236px' })
  const { playlistSlug, trackId, playPauseTrack, nextTrack, pageView, appTrackIsPlaying } = useShop()
  const refPlayer = useRef(null)
  const navigate = useNavigate()

  const opts = {
    width: videoSize.w,
    height: videoSize.h,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      autohide: 1,
      showinfo: 0,
      controls: 0,
      playsinline: 1,
      rel: 0
    }
  }

  useEffect(() => {
    if (pageView === 'track') {
      setVideoSize({ x: 0, y: 0, w: '1200px', h: '768px' })
    } else {
      setVideoSize({ x: 0, y: 0, w: '420px', h: '236px' })
    }
    // eslint-disable-next-line
  }, [pageView])

  useEffect(() => {
    if (trackId) {
      setVideoId(trackId)
    }
    // eslint-disable-next-line
  }, [trackId])

  useEffect(() => {
    playPauseTrack === 'play' ? onPlayClick() : onPauseClick()
    // eslint-disable-next-line
  }, [playPauseTrack])

  const onPlayClick = () => {
    refPlayer.current.internalPlayer.playVideo()
  }
  const onPauseClick = () => {
    refPlayer.current.internalPlayer.pauseVideo()
  }
  const onNextClick = () => {
    navigate(`/track/${playlistSlug}/${nextTrack}`)
  }

  const onReady = event => {
    event.target.pauseVideo()
  }
  const onPlay = event => {
    appTrackIsPlaying(true)
  }
  const onPause = event => {
    appTrackIsPlaying(false)
  }
  const onEnd = event => {
    navigate(`/track/${playlistSlug}/${nextTrack}`)
  }
  const onError = event => {
    event.target.pauseVideo()
  }

  const RemoteControl = (
    <div className="remote-control">
      <button className="play" onClick={() => onPlayClick()}>
        Play
      </button>
      <button className="pause" onClick={() => onPauseClick()}>
        Pause
      </button>
      <button className="next" onClick={() => onNextClick()}>
        Next
      </button>
    </div>
  )

  const PartnerLinks = (
    <div className="partner-links">
      <ul>
        <li className="brand amazon">
          <a href="activeVideolist.amazon" target="_blank">
            Amazon
          </a>
        </li>
        <li className="brand google">
          <a href="activeVideolist.google" target="_blank">
            Google Play
          </a>
        </li>
        <li className="brand apple">
          <a href="activeVideolist.apple" target="_blank">
            Apple
          </a>
        </li>
        <li className="brand youtube">
          <a href="activeVideolist.youtube" target="_blank">
            Youtube
          </a>
        </li>
        <li className="brand spotify">
          <a href="activeVideolist.spotify" target="_blank">
            Spotify
          </a>
        </li>
      </ul>
    </div>
  )

  const VideoPlayer = <YouTube ref={refPlayer} videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} onEnd={onEnd} onError={onError} />

  return (
    <StyledPlayerSection hasPlayer={playlistSlug} className={`player-${pageView}`}>
      <StyledRemoteControl>{RemoteControl}</StyledRemoteControl>
      <StyledPartnerLinks>{PartnerLinks}</StyledPartnerLinks>
      {VideoPlayer}
    </StyledPlayerSection>
  )
}

export default Player
