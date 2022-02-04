/*! For license information please see landbot-3.0.0.js.LICENSE.txt */
  && {
    z-index: ${({theme:e})=>e.zIndex.background};
    pointer-events: none;

    ${()=>qi()===n.NATIVE?"position: fixed;\n         bottom: initial;\n         right: initial;\n         width: 100%;\n         height: 100vh;\n      ":"position: absolute;"}
  }
`,$i=Ui(Hi)`
  pointer-events: none;
  background-color: ${({theme:e})=>e.design.background_color_mask};
`,Yi=Ui(Hi)`
  background-color: ${({theme:e})=>e.design.background_color};
`,Ki=Ui(Hi)`
  background-image: linear-gradient(
    to bottom,
    var(--background_color_gradient_from) 6rem,
    var(--background_color_gradient_to)
  );
`,Gi=Ui(Hi)`
  /* Image should cover the full screen. */
  background-size: cover;
  background-position: center;
`,Qi=Ui(Hi)`
  /* Video should cover the full screen. */
  video {
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    display: block;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    max-width: initial;
    background-size: cover;
    transform: translateX(-50%) translateY(-50%);

    &::-webkit-media-controls {
      display: none;
    }
  }
`;function Xi(e){const{background_type:n,background_image:r,background_image_mobile:i,background_video_webm:o,background_video_mp4:a}=e;switch(n){case Hn.SOLID:return t.createElement(Yi,{id:"Background",className:"Background Background--color is-overlay"});case Hn.GRADIENT:return t.createElement(Ki,{id:"Background",className:"Background Background--gradient is-overlay"});case Hn.IMAGE:return t.createElement(t.Fragment,null,t.createElement(Gi,{id:"Background",className:"Background Background--image is-overlay is-hidden-mobile",style:{backgroundImage:`url(${r})`}}),t.createElement(Gi,{id:"Background",className:"Background Background--image is-overlay is-hidden-tablet",style:{backgroundImage:`url(${i||r})`}}),t.createElement($i,{className:"Background--overlay is-overlay"}));case Hn.VIDEO:return t.createElement(Qi,{id:"Background",className:"Background Background--video is-overlay"},t.createElement("video",{key:a,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},t.createElement("source",{src:a,type:"video/mp4"}),t.createElement("source",{src:o,type:"video/webm"})),t.createElement($i,{className:"Background--overlay is-overlay"}));default:return null}}function Zi(){const{design:e}=d(),{background_type:n,background_image:r,background_image_mobile:i,background_video_webm:o,background_video_mp4:a}=e;return t.createElement(Xi,{background_type:n,background_image:r,background_image_mobile:i,background_video_webm:o,background_video_mp4:a})}Xi.propTypes={background_type:i().string,background_image:i().string,background_image_mobile:i().string,background_video_webm:i().string,background_video_mp4:i().string},Xi.defaultProps={background_type:null,background_image:null,background_image_mobile:null,background_video_webm:null,background_video_mp4:null};const Ji=t.createContext({agent:0,setAssignation:()=>{}}),eo=e=>t.createElement(Ji.Provider,{value:e.value},e.children);eo.propTypes={value:i().object,children:i().node},eo.defaultProps={value:{},children:null};const to=()=>(0,t.useContext)(Ji),no=t.createContext({}),ro=e=>t.createElement(no.Provider,{value:e.value},e.children);ro.propTypes={value:i().object,children:i().node},ro.defaultProps={value:{},children:null};const io=()=>(0,t.useContext)(no),oo=t.createContext({isOpen:!1,isProactiveOpen:!1,proactiveMessages:null}),{Provider:ao}=oo,so=()=>(0,t.useContext)(oo);function lo(){const e=qi(),{isOpen:t}=so();return[n.LIVECHAT,n.POPUP,n.CONTAINER_POPUP].includes(e)&&t}function co(){const{agent:e}=to();return m(e)}function uo(){const e=d(),t=co(),n=e.design.header_visible?2:0;return!t&&e.persistent_menu.length>n}function fo(){return d().persistent_menu.length>0}function po(){const e=d();return{hasHeader:e.design.header_visible,hideHeader:!0===e.header_hidden}}var ho=__webpack_require__(4184),mo=__webpack_require__.n(ho);const bo={mobile:480,small_tablet:576,tablet:768,small_mobile_only:480,mobile_only:767,small_desktop:992,medium_desktop:1200,large_desktop:1440},go=`(min-width: ${bo.tablet}px)`,vo=`(min-width: ${bo.small_tablet}px)`,yo=`(max-width: ${bo.mobile_only}px)`,wo=`(max-width: ${bo.small_mobile_only}px)`,_o=`(max-width: ${bo.mobile_only}px) and (min-width: ${bo.mobile}px)`,ko=({qty:e,unit:t},n=1)=>`${e*n}${t}`,xo=({qty:e,unit:t},n=1)=>`${e/n}${t}`,Eo=(e,t)=>`\noverflow: hidden;\n  \n&::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: ${e};\n  opacity: ${t};\n}\n`,So=Ui.header`
  z-index: ${({theme:e})=>e.zIndex.header};
  width: 100%;
  height: ${e=>e.theme.header.height.default};
  top: 0;
  left: 0;
  padding: 10px 30px;
  border-bottom: 1px solid transparent;
  transition: 0.25s height ease-in-out;
  color: ${({theme:e})=>e.design.header_text};

  ${()=>qi()===n.NATIVE?"position: fixed;\n      ":"position: absolute;"}

  @media ${go} {
    padding: 22px 34px;
    margin: auto;
  }

  &.is-transparent {
    padding: 12px 10px;
    .custom-buttons {
      align-items: flex-start;
    }
  }

  &:not(.Header--hasPersistentMenu),
  &.Header--isAgentActive {
    .Header__Row {
      height: 100%;
    }
  }

  &.Header--isAgentActive {
    .Header__NavigationButton--Menu,
    .PersistentMenu .buttons {
      display: none;
    }

    .Header__BotInfo {
      transform: translateY(-100%);
      opacity: 0;
    }

    .Header__AgentInfo {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.Header--isSticky {
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.16);
  }

  &:not(.is-transparent) {
    background-color: ${({theme:e})=>e.design.header_background_color};
  }

  &.Header--hasSeparator {
    border-bottom-color: ${({theme:e})=>e.design.top_bar_separator_color};
  }

  .custom-buttons {
    .Header__NavigationButton {
      &.custom-button {
        width: 44px;
        height: 37px;
        min-width: initial;
        min-height: initial;
        max-width: initial;
        max-height: initial;
        padding: 0 0.6rem 0 0.5rem;
        color: ${({theme:e})=>e.design.header_text};
      }

      &.custom-button:hover {
        ${Eo("var(--header_text)",.1)};
        color: ${({theme:e})=>e.design.header_text};

      }

      &--Menu {
        /* The navigation button menu will have a fixed border radius and no border color */
        border-radius: 3px !important;
        border: hidden !important;
        flex-wrap: wrap;
        align-content: center;
      }

      &--Menu span {
        height: 2px;
        display: block;
        width: 100%;
        margin: 1px;
        border-radius: 1px;
        background-color: currentColor;
      }

      &--Menu span:not(:first-child) {
        margin-top: 3px;
      }

      &--Close {
        &:after,
        &:not(:hover):before {
          display: none;
        }
        &:before {
          transform: none;
        }
        position: relative;
      }
      &--Close span:first-child {
        transform: rotate(45deg);
      }

      &--Close span:last-child {
        transform: rotate(-45deg);
      }

      &--Close span {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        border-radius: 3px;
        background-color: currentColor;
      }
    }
  }

  /* Mobile */
  @media ${yo} {
    &:not(.Header--hasPersistentMenu) {
      height: ${e=>e.theme.header.height.not_persistent_mobile};
    }

    &.Header--isSticky.Header--hasPersistentMenu {
      height: ${e=>e.theme.header.height.sticky};

      .custom-buttons {
        transform: translate(12px, 54px) scale(0.8);
        transform-origin: center right;
      }

      &.Header--isAgentActive {
        .custom-buttons {
          transform: translate(12px, -2px) scale(0.8);
        }
      }
    }

    &.Header--hasPersistentMenu:not(.Header--isAgentActive):not(.Header--isSticky) {
      height: ${e=>e.theme.header.height.with_menu};
    }

    &.Header--hasPersistentMenu {
      .Header__Row:first-child {
        z-index: ${({theme:e})=>e.zIndex.Header__Row};
        position: relative;
        .custom-buttons {
          transition: transform 0.25s ease-in-out;
        }
      }

      &.Header--isSticky.Header--hasPersistentMenu {
        .Header__Row {
          transform: translateY(-58px);
        }
      }

      &.Header--hasPersistentMenu.Header--isAgentActive {
        .Header__Row:first-child {
          transform: translateY(0);
        }

        .Header__Row:nth-child(2) {
          display: none;
        }
      }
    }
  }

  ${e=>{const{hasOffsetMenu:t,hasCloseButton:n,theme:r}=e;return!0===n&&!0===t?Ei`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${r.header.persistent_menu_button_and_close_button_width};
        }
      `:!0===t?Ei`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${r.header.persistent_menu_button_width};
        }
      `:null}}
`,Co=Ui.div`
  display: flex;
  align-items: stretch;
  transition: transform 0.25s ease-in-out;

  &:not(:first-child) {
    margin-top: 18px;
  }
`,To=Ui.div`
  display: inline-flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  transition: 0.25s transform ease-in-out;
`,Oo=Ui.div`
  display: inline-flex;
  justify-content: center;
  transition: 0.25s transform ease-in-out;

  @media ${yo} {
    width: 100%;
  }
`;function Po(){return(Po=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Io=t.forwardRef(((e,n)=>t.createElement("div",Po({},e,{ref:n,className:mo()({[e.className]:!!e.className,"custom-buttons":!String(e.className).includes("input-buttons"),buttons:!0})}))));Io.propTypes={className:i().string},Io.defaultProps={className:""};var No=Ui(Io)`
  .custom-button,
  .input-button {
    border-radius: calc(var(--border_radius) * 0.1rem);
    border: ${e=>xo(e.theme.initial_vars.vertical_unit,4)}
      solid transparent;
    padding: ${e=>ko(e.theme.initial_vars.vertical_unit,2)}
      ${e=>ko(e.theme.initial_vars.horizontal_unit,2)};
  }

  .custom-button:hover:not([disabled]),
  .input-button:hover:not([disabled]) {
    box-shadow: 0 6px 21px -11px rgba(0, 0, 0, 0.29),
      0 13px 17px -16px rgba(47, 49, 72, 0.3);
  }
`;function Mo({isAgentActive:e,isSticky:n,hasPersistentMenu:r,persistentMenu:i,hasSeparator:o,description:a,navigation:s,hasOffsetMenu:l,hasCloseButton:c}){return t.createElement(So,{className:mo()({Header:!0,"Header--isAgentActive":e,"Header--isSticky":n,"Header--hasPersistentMenu":r,"Header--hasSeparator":o}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:l,hasCloseButton:c},t.createElement(Co,{className:"Header__Row"},t.createElement(To,{className:"Header__Info is-relative is-overflow-ellipsis"},a),r&&t.createElement(Oo,{className:"Header__Menu is-hidden-mobile"},i),t.createElement(No,{className:"custom-buttons is-inline-flex are-transparent"},s)),t.createElement(Co,{className:"Header__Row is-hidden-tablet"},r&&t.createElement(Oo,{className:"Header__Menu"},i)))}Mo.propTypes={description:i().element,navigation:i().element,hasSeparator:i().bool,persistentMenu:i().element,isAgentActive:i().bool,isSticky:i().bool,hasPersistentMenu:i().bool,hasOffsetMenu:i().bool,hasCloseButton:i().bool},Mo.defaultProps={description:null,navigation:null,hasSeparator:!1,persistentMenu:null,isAgentActive:!1,isSticky:!1,hasPersistentMenu:!1,hasOffsetMenu:!1,hasCloseButton:!1};const Do=t.createContext({isOpen:!1,setIsOpen:null,src:null}),Ao=e=>t.createElement(Do.Provider,{value:e.value},e.children);Ao.propTypes={value:i().object,children:i().node},Ao.defaultProps={value:{},children:null};const jo=()=>(0,t.useContext)(Do),Ro=t.createContext(!1),{Provider:Lo}=Ro,Fo=()=>(0,t.useContext)(Ro),zo=e=>{switch(e){case"1x1":return"is-1by1";case"5x4":return"is-5by4";case"4x3":return"is-4by3";case"3x2":return"is-3by2";case"5x3":return"is-5by3";case"16x9":return"is-16by9";case"2x1":return"is-2by1";case"3x1":return"is-3by1";case"4x5":return"is-4by5";case"3x4":return"is-3by4";case"2x3":return"is-2by3";case"3x5":return"is-3by5";case"9x16":return"is-9by16";case"1x2":return"is-1by2";case"1x3":return"is-1by3";default:return null}};function Bo(e){const{setIsOpen:n,setSrc:r}=jo(),i=Fo();return t.createElement("figure",{className:mo()({image:!0,[`is-${e.size}x${e.size}`]:!!e.size,[zo(e.ratio)]:!!e.ratio,[e.className]:!!e.className,"u-pointer":e.openModal}),onClick:e.openModal&&!i?()=>{r(e.src),n(!0)}:null,style:e.figureStyle},e.src&&t.createElement("img",{alt:e.alt||e.src,className:mo()({Media:!0,[e.imgClassName]:!!e.imgClassName,"is-rounded":e.rounded,"is-contain":e.contain}),onLoad:e.onLoad,src:e.src,style:e.style}))}Bo.propTypes={contain:i().bool,className:i().string,imgClassName:i().string,figureStyle:i().object,openModal:i().bool,ratio:i().string,rounded:i().bool,size:i().number,src:i().string,alt:i().string,style:i().object,onLoad:i().func},Bo.defaultProps={contain:!1,className:"",imgClassName:"",figureStyle:{},openModal:!1,ratio:null,rounded:!1,size:null,src:null,alt:null,style:{},onLoad:()=>{}};const Uo=Ui.div`
  position: relative;
  display: inline-block;
  height: inherit;
  max-width: 40%;
  margin-right: 15px;

  .image {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .image img {
    width: auto;
    height: ${e=>e.theme.header.logo_size.mobile};
    min-width: ${e=>e.theme.header.logo_size.mobile};
    display: block;

    @media ${go} {
      height: ${e=>e.theme.header.logo_size.mobile};
      min-width: ${e=>e.theme.header.logo_size.mobile};
    }
  }
`;function Wo(e){return e.src?t.createElement(Uo,{className:"Header__Logo"},t.createElement(Bo,Po({contain:!0,src:e.src},e.imageProps,{rounded:e.rounded}))):null}Wo.propTypes={imageProps:i().object,src:i().string,rounded:i().bool},Wo.defaultProps={imageProps:{},src:null,rounded:!1};const Vo=Ui.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
`,qo=Ui(Vo)`
  opacity: 1;
  width: 100%;
`,Ho=Ui(Vo)`
  position: absolute;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;

  .image img {
    width: ${e=>e.theme.header.logo_size.mobile};
  }
`,$o=Ui.hgroup`
  flex: 1;
  min-width: 0;
`,Yo=Ui.h1`
  letter-spacing: -0.75px;
  font-size: ${e=>e.theme.header.brand_font_size.mobile};

  @media ${go} {
    font-size: ${e=>e.theme.header.brand_font_size.tablet};
  }
`,Ko=Ui.h3`
  letter-spacing: -0.25px;
  font-size: ${e=>e.theme.header.subtitle_font_size.mobile};

  @media ${go} {
    font-size: ${e=>e.theme.header.subtitle_font_size.tablet};
  }
`;function Go({isBotInfo:e,title:n,subtitle:r,avatar:i,avatarRounded:o}){const a=e?qo:Ho,s=e?"Header__BotInfo":"Header__AgentInfo";return t.createElement(a,{className:s},t.createElement(Wo,{src:i,rounded:o}),t.createElement($o,{className:"Header__Description"},n&&t.createElement(Yo,{className:"Header__Title has-text-weight-bold"},n),r&&t.createElement(Ko,{className:"Header__Subtitle is-overflow-ellipsis"},r)))}Go.propTypes={isBotInfo:i().bool,avatar:i().string,avatarRounded:i().bool,title:i().string,subtitle:i().string},Go.defaultProps={isBotInfo:!0,avatar:null,avatarRounded:!1,title:null,subtitle:null};const Qo=t.createContext(new(g())({})),Xo=e=>t.createElement(Qo.Provider,{value:e.value},e.children);Xo.propTypes={value:i().object,children:i().node},Xo.defaultProps={value:{},children:null};const Zo=()=>(0,t.useContext)(Qo);var Jo="database.connection",ea="custom_data",ta="init",na="load",ra="new_message",ia="proactive_close",oa="proactive_open",aa="send_message",sa="set_config",la="set_config_context",ca="widget_open",ua="widget_close";function da({onClick:e,isVisible:n,isAnchor:r,href:i,isDisabled:o,children:a,className:s,label:l,ariaLabel:c,icon:u,type:d}){const f=e=>r?t.createElement("a",Po({href:i,target:"_blank"},e)):t.createElement("button",Po({type:d},e));return n&&t.createElement(f,{className:mo()({[s]:!0,button:!0}),onClick:e,"aria-label":c,disabled:o},a,!a&&u&&t.createElement("span",{className:"icon"},u),!a&&t.createElement("span",{className:"label is-unselectable"},l))}const fa=(e,t,n,r,i)=>e.children&&e[t]?new Error(`Property ${t} supplied to ${n} should be empty when children are received.`):e[t]&&!i?new Error(`Failed prop type: Invalid prop  ${t} of type ${typeof e[t]} supplied to ${n} , expected '${r}'.`):null;da.propTypes={onClick:i().func,isVisible:i().bool,isDisabled:i().bool,isAnchor:i().bool,children:i().node,className:i().string,href:i().string,label:(e,t,n)=>fa(e,t,n,"string","string"==typeof e[t]),ariaLabel:i().string,icon:(e,t,n)=>fa(e,t,n,"object","object"==typeof e[t]),type:i().string},da.defaultProps={onClick:()=>{},isVisible:!0,isDisabled:!1,isAnchor:!1,children:null,className:"custom-button",label:"",ariaLabel:"",href:"",icon:null,type:"button"};var pa=e=>Ui(e)`
  height: auto;
  line-height: 1.1;

  .label {
    font-size: ${e=>e.theme.header.font_size};
    color: inherit;
    font-weight: inherit;
  }

  .icon {
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    .icon {
      transform: translateY(-6px);
    }
  }
`;const ha=e=>t.createElement(da,Po({},e,{className:mo()({[e.className]:!!e.className,"custom-button":!String(e.className).includes("input-button")})}));ha.propTypes={className:i().string},ha.defaultProps={className:""};const ma=pa(ha);var ba=ma;const ga=e=>t.createElement(ma,Po({},e,{className:mo()({[e.className]:!!e.className,"custom-button":!String(e.className).includes("input-button"),button:!0}),as:"button"}));ga.propTypes={className:i().string},ga.defaultProps={className:""};const va=e=>{const{item:n,className:r,isVerticalVersion:i}=e;return t.createElement(ba,Po({},e,{key:n.payload,href:n.href,label:n.text,onClick:()=>(e=>{"keyword"===e.action&&(e.events.emit(aa,{type:"button",message:e.text,payload:e.payload}),e.setDisabled(!0),setTimeout((()=>e.setDisabled(!1)),500)),e.closeMenu()})(n),isAnchor:!0,className:mo()({"button--PersistentMenu is-overflow-ellipsis":!0,"is-transparent":!i&&"text"===n.style,[r]:!0})}))};va.propTypes={item:i().object,className:i().string,isVerticalVersion:i().bool},va.defaultProps={item:null,className:null,isVerticalVersion:!1};const ya=Ui(va)`
  padding: 10px 16px;
  border-radius: calc(var(--border_radius) * 0.1rem);
  justify-content: flex-start;
  max-width: 250px;

  @media ${yo} {
    max-width: 50%;
  }

  .label {
    font-size: ${e=>e.theme.header.font_size};
    width: 100%;
  }

  &:hover {
    border-color: transparent;
    ${Eo("var(--header_text)",.1)}
  }

  &.is-transparent {
    color: ${({theme:e})=>e.design.header_text};
  }

  ${e=>e.isVerticalVersion&&"\n    margin-bottom: 2px;\n    margin-right: 0;\n    border-radius: 3px;\n    max-width: 100% !important;\n  \n    &:first-child {\n      border-radius: 16px 16px 3px 3px;\n    }\n  \n    &:last-child {\n      border-radius: 3px 3px 16px 16px;\n    }\n"}
`,wa=Ui.nav`
  flex: 0;
  order: 1;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: auto;
  box-shadow: none;
  position: relative;
  align-items: center;

  @media ${go} {
    padding: 0;
    border: initial;
    background-color: transparent;
  }

  &:not(.PersistentMenu--VerticalVersion) {
    @media ${go} {
      margin: 0 ${e=>ko(e.theme.initial_vars.horizontal_unit,1.25)};
    }
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${e=>e.verticalVersion&&"\n    width: 100%;\n  "}
`;function _a(e){return t.createElement(wa,{className:mo()({PersistentMenu:!0,"navbar-menu":!0,"PersistentMenu--VerticalVersion":e.isVerticalVersion}),id:"navigation__persistent__menu","aria-expanded":e.ariaExpanded},t.createElement("div",{className:mo()({"is-vertically-centered is-horizontally-centered":!e.isVerticalVersion,"is-layout-vertical":e.isVerticalVersion,buttons:!e.isVerticalVersion}),ref:e.menuRef},e.children))}function ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xa(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ka(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ka(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Ea({closeMenu:e,isVerticalVersion:n,ariaExpanded:r}){const{events:i}=Zo(),[o,a]=(0,t.useState)(!1),s=(0,t.useRef)(null),{persistent_menu:l}=d(),c=l.map((t=>xa(xa({},t),{},{action:t.action||"keyword",style:t.style||"text",href:t.href||null,isKeyword:"link"!==t.action,closeMenu:e,events:i,disabled:o,setDisabled:a}))).map(((e,r)=>(n||r<2)&&t.createElement(ya,{item:e,key:e.payload,isVerticalVersion:n})));return t.createElement(_a,{isVerticalVersion:n,menuRef:s,ariaExpanded:null!==r?r:null},c)}function Sa(){const e=Zo();return t.createElement(ba,{onClick:()=>e.events.emit(ua),ariaLabel:"close",className:"Header__NavigationButton Header__NavigationButton--Close delete"},t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}))}_a.propTypes={menuRef:i().object,isVerticalVersion:i().bool,children:i().any,ariaExpanded:i().bool},_a.defaultProps={menuRef:null,isVerticalVersion:!1,children:null,ariaExpanded:null},Ea.propTypes={closeMenu:i().func,isVerticalVersion:i().bool,ariaExpanded:i().bool},Ea.defaultProps={closeMenu:()=>{},isVerticalVersion:!1,ariaExpanded:null};const Ca=t.createContext({isOpen:!1,setIsOpen:null}),Ta=e=>t.createElement(Ca.Provider,{value:e.value},e.children);Ta.propTypes={value:i().object,children:i().node},Ta.defaultProps={value:{},children:null};const Oa=()=>(0,t.useContext)(Ca);function Pa(){const{setIsOpen:e}=Oa();return t.createElement(ba,{onClick:()=>e(!0),ariaLabel:"Open Menu",className:"Header__NavigationButton Header__NavigationButton--Menu is-relative"},t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}))}function Ia(e){const n=d(),r=io(),{agent:i}=to(),o=co(),a=fo(),s=lo(),l=uo(),{hasHeader:c,hideHeader:u}=po(),[f,p]=(0,t.useState)(!1),h={name:ie()(r,`[${i}].name`,""),avatar:ie()(r,`[${i}].avatar`,"")};return!c||u?null:t.createElement(Mo,{menuActive:f,openMenu:()=>p(!0),closeMenu:()=>p(!1),isAgentActive:o,isSticky:e.isSticky,hasOffsetMenu:l,hasCloseButton:s,hasPersistentMenu:a,hasSeparator:ie()(n,"design.top_bar_separator"),persistentMenu:t.createElement(Ea,null),navigation:t.createElement(t.Fragment,null,l&&t.createElement(Pa,null),s&&t.createElement(Sa,null)),description:t.createElement(t.Fragment,null,t.createElement(Go,{title:n.brand_name,subtitle:n.tagline,avatar:n.logo}),t.createElement(Go,{isBotInfo:!1,title:h.name,subtitle:n.text.hto_agent_profile_text.replace(/@brand/i,n.brand_name),avatar:h.avatar,avatarRounded:!0}))})}function Na({navigation:e,hasOffsetMenu:n,hasCloseButton:r}){return t.createElement(So,{className:mo()({"Header is-transparent":!0}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:n,hasCloseButton:r},t.createElement(Co,{className:"Header__Row is-pulled-right"},t.createElement(No,{className:"is-inline-flex are-transparent"},e)))}function Ma(){const e=d(),n=uo(),r=lo(),[i,o]=(0,t.useState)(!1);return e.design.header_visible||!r&&!n?null:t.createElement(Na,{menuActive:i,openMenu:()=>o(!0),closeMenu:()=>o(!1),hasOffsetMenu:n,hasCloseButton:r,navigation:t.createElement(t.Fragment,null,n&&t.createElement(Pa,null),r&&t.createElement(Sa,null))})}Ia.propTypes={isSticky:i().bool},Ia.defaultProps={isSticky:!1},Na.propTypes={navigation:i().element,hasOffsetMenu:i().bool,hasCloseButton:i().bool},Na.defaultProps={navigation:null,hasOffsetMenu:!1,hasCloseButton:!1};const Da=t.createContext({}),Aa=e=>t.createElement(Da.Provider,{value:e.value},e.children);Aa.propTypes={value:i().object,children:i().node},Aa.defaultProps={value:{},children:null};const ja=()=>(0,t.useContext)(Da),Ra="last_action_idle",La={lastAction:null,isOpen:!1,isInitialized:!1,type:"notification_type_error",hasCloseButton:!1,hasRetryButton:!1,hasResetButton:!1,message:null,retryCb:null,retryInterval:0},Fa=t.createContext({cfg:La,showNotification:()=>{},closeNotification:()=>{}}),{Provider:za}=Fa,Ba=()=>(0,t.useContext)(Fa);function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Wa(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Ua(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ua(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const Va="MSG_ACTION_TYPE_SET_MESSAGES",qa="MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES",Ha="MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION",$a="MSG_ACTION_TYPE_NEW_MESSAGE",Ya="MSG_ACTION_TYPE_CLEAN",Ka="MSG_ACTION_TYPE_ADD_MESSAGES",Ga="MSG_ACTION_TYPE_MARK_AS_FAILED",Qa={messages:[],previousMessages:[]};function Xa(e,t){switch(t.type){case Ya:return Wa(Wa({},e),{},{messages:[]});case Va:return Wa(Wa({},e),{},{messages:[...t.messages]});case Ka:return Wa(Wa({},e),{},{messages:[...e.messages,...t.messages]});case qa:return Wa(Wa({},e),{},{previousMessages:[...t.messages]});case Ha:return Wa(Wa({},e),{},{messages:[...e.previousMessages]});case $a:{const n=[...e.messages],r=Wa({},t.message);return fe.updateMessage(n,r)||n.push(r),Wa(Wa({},e),{},{messages:n})}case Ga:{const{message:n,retryCb:r}=t,i=Wa(Wa({},n),{},{failed:!0,retryCb:r}),o=[...e.messages];return fe.updateMessage(o,i),Wa(Wa({},e),{},{messages:o})}}return e}const Za=t.createContext(Qa),Ja=({value:e,children:n})=>t.createElement(Za.Provider,{value:e},n);Ja.propTypes={value:i().object,children:i().node},Ja.defaultProps={value:{},children:null};const es=()=>(0,t.useContext)(Za);function ts(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ns(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ts(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ts(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const rs={get:(e,t)=>{if("function"==typeof e[t]){const n=e[t];return function(...t){return n.apply(e,t)}}return e.getValue(t)}};class is{constructor(e){this.raw=ns({},e),this.data=ns(ns({},e),{},{isRevisit:null!==ie()(e,"extra.revisit",null),isWelcome:null!==ie()(e,"extra.welcome",null),isTyping:Boolean(e&&e.evaluate&&void 0!==e.samurai),isGhost:Boolean(e&&e.ghost),isEval:Boolean(e&&e.evaluate),isInsideForm:Boolean(e&&e.isInsideForm),isFinishBot:Boolean(e&&e.type===P.HIDDEN&&"finish"===e.action),isActionUnassign:Boolean(e&&"unassign"===e.action),failed:e&&!0===e.failed,hasGDPR:ie()(e,"extra.legal.state",!1),gdpr:{text:ie()(e,"extra.legal.text",""),link:ae.Z.getHref(ie()(e,"extra.legal.link","")),linkText:ie()(e,"extra.legal.linkText","")},customSubmitFn:ie()(e,"extra.input.onSubmit",null),minValue:Number(ie()(e,"extra.textarea.minValue",null)),maxValue:Number(ie()(e,"extra.textarea.maxValue",null)),prefix:ie()(e,"extra.textarea.prefix"),multiple:ie()(e,"extra.textarea.multiple",!1),dateOptions:ie()(e,"extra.textarea.dateOptions",null),buttonsAlignment:ie()(e,"extra.buttons.alignment","horizontal"),buttonsMinOptions:ie()(e,"extra.buttons.minOptions",null),buttonsMaxOptions:ie()(e,"extra.buttons.maxOptions",null),buttonsRandomize:ie()(e,"extra.buttons.randomize",!1),isCumulative:ie()(e,"extra.buttons.cumulative",!1),buttonsLeftTag:ie()(e,"extra.buttons.tags[0]",""),buttonsRightTag:ie()(e,"extra.buttons.tags[1]",""),mustMatchSuggestion:ie()(e,"extra.buttons.must_match_suggestion",!1),key:e?e.ui_key||e.key:"",url:e?e.url:"",inputType:oe.getInputType(e),author:fe.getAuthor(e?e.samurai:null),date:e&&e.timestamp?cn.getMessageDate(e.timestamp):null,messageText:e&&(e.invite_message||e.rich_text||e.title||e.message)||"",blockID:ie()(e,"extra.id",""),className:ie()(e,"extra.className",""),submitButtonLabel:ie()(e,"send_label")}),this.data.hasInput=null!==this.data.inputType,this.data.showDatePicker=ie()(this.data.dateOptions,"showDatePicker",!0),this.data.dateFormat=ie()(this.data.dateOptions,"format","YYYY/M/D"),this.data.enabledDaysOfWeek=ie()(this.data.dateOptions,"enabledDaysOfWeek",null),this.data.isInputBubbleStyled=oe.isBubbleStyled(this.data.inputType)}getValue(e){if("raw"===e)return this.raw;if(e in this.data)return this.data[e];if("string"==typeof e&&e.startsWith("isAuthor")){const t=e.substr("isAuthor".length).toLowerCase();return this.isAuthor(t)}}setValue(e,t){this.data[e]=t}toJSON(){return this.data}getRawValue(e){return this.raw[e]}getMessageType(e){const t=fe.getMessageType(this.raw,e);return t===P.INPUT?null:t}getInputInlineMessageType(){return this.getValue("hasInput")?P.INPUT:null}getPlaceholder(e){return oe.getFieldPlaceholder({message:this.raw,text:e})}getAvatar({config:e,agents:t}){return fe.getAvatar({config:e,message:this.raw,agents:t})}getButtons(){const e=oe.getButtonsFromMessage(this.raw);return this.getValue("buttonsRandomize")?e.sort((()=>Math.random()-.5)):e}getAutocompleteOptions(){return oe.getAutocompleteOptions(this.raw)}getCards(){return oe.getCards(this.raw)}isAuthor(e){return this.getValue("author")===e}isEmpty(){return 0===Object.keys(this.raw).length}getEnabledDateRanges(){return this.getValue("enabledDateRanges")||this.setValue("enabledDateRanges",cn.getDateRanges(this.data.dateOptions)),this.getValue("enabledDateRanges")}getDatePickerInitialMonth(e){return cn.getInitialMonth(this.getEnabledDateRanges(),e)}isValidDate(e){return cn.isValidDate(e,this.getEnabledDateRanges(),this.getValue("enabledDaysOfWeek"))}getDateFnsFormat(){return cn.getFormat(this.getValue("dateFormat"))}getVideoUrl(){return fe.getVideoUrl(this.getValue("url"))}}function os(e,t){if(e instanceof is)throw new Error("TypeError: invalid arguments supplied to messageWrapper. Attempt to wrap an already wrapped message.");return new Proxy(new is(e,t),rs)}const as={MSGFILTER_SUPPORTED:fe.supportedMessageFilter,MSGFILTER_VISIBLE:fe.visibleMessageFilter,MSGFILTER_BRANDMESSAGE:fe.brandMessageFilter};function ss(e){return e.map((e=>os(e)))}class ls{constructor(e){this.raw=e,this.data=ss(e),this.filteredData={}}getLastMessage(){return this.data.length>0?this.data.slice(-1)[0]:os({})}getLastVisibleMessage(){const e=this.getSupportedMessages();return e.length>0?e.slice(-1)[0]:os({})}getLast2VisibleMessages(){const e=this.getSupportedMessages(),[t]=e.slice(-1);return[(e.length>1?e.slice(-2)[0]:os(null))||os(null),t||os(null)]}getLastBrandMessage(){const e=this.getBrandMessages();return e.length>0?e.slice(-1)[0]:os({})}replaceVariables(e){return ss(this.raw.map((t=>fe.withVariablesReplaced(t,e))))}getBrandMessages(){return this._filterMessages("MSGFILTER_BRANDMESSAGE")}getSupportedMessages(){return this._filterMessages("MSGFILTER_SUPPORTED")}getVisibleMessages(){return this._filterMessages("MSGFILTER_VISIBLE")}_filterMessages(e){return e in this.filteredData||(this.filteredData[e]=this.data.filter(as[e])),this.filteredData[e]}}function cs(e){if(e instanceof ls)throw new Error("TypeError: invalid arguments supplied to messagesWrapper. Attempt to wrap an already wrapped messages.");return new ls(e)}function us(e){return cs(fe.createSortedMessagesArray(e))}var ds={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},fs={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},ps=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],hs={CSS:{},springs:{}};function ms(e,t,n){return Math.min(Math.max(e,t),n)}function bs(e,t){return e.indexOf(t)>-1}function gs(e,t){return e.apply(null,t)}var vs={arr:function(e){return Array.isArray(e)},obj:function(e){return bs(Object.prototype.toString.call(e),"Object")},pth:function(e){return vs.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||vs.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return vs.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return vs.hex(e)||vs.rgb(e)||vs.hsl(e)},key:function(e){return!ds.hasOwnProperty(e)&&!fs.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function ys(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function ws(e,t){var n=ys(e),r=ms(vs.und(n[0])?1:n[0],.1,100),i=ms(vs.und(n[1])?100:n[1],.1,100),o=ms(vs.und(n[2])?10:n[2],.1,100),a=ms(vs.und(n[3])?0:n[3],.1,100),s=Math.sqrt(i/r),l=o/(2*Math.sqrt(i*r)),c=l<1?s*Math.sqrt(1-l*l):0,u=l<1?(l*s-a)/c:-a+s;function d(e){var n=t?t*e/1e3:e;return n=l<1?Math.exp(-n*l*s)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*s),0===e||1===e?e:1-n}return t?d:function(){var t=hs.springs[e];if(t)return t;for(var n=1/6,r=0,i=0;;)if(1===d(r+=n)){if(++i>=16)break}else i=0;var o=r*n*1e3;return hs.springs[e]=o,o}}function _s(e){return void 0===e&&(e=10),function(t){return Math.ceil(ms(t,1e-6,1)*e)*(1/e)}}var ks,xs,Es=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function i(e,i,o){return((t(i,o)*e+n(i,o))*e+r(i))*e}function o(e,i,o){return 3*t(i,o)*e*e+2*n(i,o)*e+r(i)}return function(t,n,r,a){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==a)for(var l=0;l<11;++l)s[l]=i(l*e,t,r);return function(e){return t===n&&r===a||0===e||1===e?e:i(c(e),n,a)}}function c(n){for(var a=0,l=1;10!==l&&s[l]<=n;++l)a+=e;--l;var c=a+(n-s[l])/(s[l+1]-s[l])*e,u=o(c,t,r);return u>=.001?function(e,t,n,r){for(var a=0;a<4;++a){var s=o(t,n,r);if(0===s)return t;t-=(i(t,n,r)-e)/s}return t}(n,c,t,r):0===u?c:function(e,t,n,r,o){var a,s,l=0;do{(a=i(s=t+(n-t)/2,r,o)-e)>0?n=s:t=s}while(Math.abs(a)>1e-7&&++l<10);return s}(n,a,a+e,t,r)}}}(),Ss=(ks={linear:function(){return function(e){return e}}},xs={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=ms(e,1,10),r=ms(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){xs[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(xs).forEach((function(e){var t=xs[e];ks["easeIn"+e]=t,ks["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},ks["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},ks["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),ks);function Cs(e,t){if(vs.fnc(e))return e;var n=e.split("(")[0],r=Ss[n],i=ys(e);switch(n){case"spring":return ws(e,t);case"cubicBezier":return gs(Es,i);case"steps":return gs(_s,i);default:return gs(r,i)}}function Ts(e){try{return document.querySelectorAll(e)}catch(e){return}}function Os(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in e){var a=e[o];t.call(r,a,o,e)&&i.push(a)}return i}function Ps(e){return e.reduce((function(e,t){return e.concat(vs.arr(t)?Ps(t):t)}),[])}function Is(e){return vs.arr(e)?e:(vs.str(e)&&(e=Ts(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Ns(e,t){return e.some((function(e){return e===t}))}function Ms(e){var t={};for(var n in e)t[n]=e[n];return t}function Ds(e,t){var n=Ms(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function As(e,t){var n=Ms(e);for(var r in t)n[r]=vs.und(e[r])?t[r]:e[r];return n}function js(e){return vs.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:vs.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):vs.hsl(e)?function(e){var t,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(i[1],10)/360,a=parseInt(i[2],10)/100,s=parseInt(i[3],10)/100,l=i[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==a)t=n=r=s;else{var u=s<.5?s*(1+a):s+a-s*a,d=2*s-u;t=c(d,u,o+1/3),n=c(d,u,o),r=c(d,u,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}function Rs(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function Ls(e,t){return vs.fnc(e)?e(t.target,t.id,t.total):e}function Fs(e,t){return e.getAttribute(t)}function zs(e,t,n){if(Ns([n,"deg","rad","turn"],Rs(t)))return t;var r=hs.CSS[t+n];if(!vs.und(r))return r;var i=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var a=100/i.offsetWidth;o.removeChild(i);var s=a*parseFloat(t);return hs.CSS[t+n]=s,s}function Bs(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?zs(e,i,n):i}}function Us(e,t){return vs.dom(e)&&!vs.inp(e)&&(!vs.nil(Fs(e,t))||vs.svg(e)&&e[t])?"attribute":vs.dom(e)&&Ns(ps,t)?"transform":vs.dom(e)&&"transform"!==t&&Bs(e,t)?"css":null!=e[t]?"object":void 0}function Ws(e){if(vs.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;t=r.exec(n);)i.set(t[1],t[2]);return i}}function Vs(e,t,n,r){var i=bs(t,"scale")?1:0+function(e){return bs(e,"translate")||"perspective"===e?"px":bs(e,"rotate")||bs(e,"skew")?"deg":void 0}(t),o=Ws(e).get(t)||i;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?zs(e,o,r):o}function qs(e,t,n,r){switch(Us(e,t)){case"transform":return Vs(e,t,r,n);case"css":return Bs(e,t,n);case"attribute":return Fs(e,t);default:return e[t]||0}}function Hs(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=Rs(e)||0,i=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function $s(e,t){if(vs.col(e))return js(e);if(/\s/g.test(e))return e;var n=Rs(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function Ys(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ks(e){for(var t,n=e.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=Ys(t,o)),t=o}return r}function Gs(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*Fs(e,"r")}(e);case"rect":return function(e){return 2*Fs(e,"width")+2*Fs(e,"height")}(e);case"line":return function(e){return Ys({x:Fs(e,"x1"),y:Fs(e,"y1")},{x:Fs(e,"x2"),y:Fs(e,"y2")})}(e);case"polyline":return Ks(e);case"polygon":return function(e){var t=e.points;return Ks(e)+Ys(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function Qs(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;vs.svg(t)&&vs.svg(t.parentNode);)t=t.parentNode;return t}(e),i=r.getBoundingClientRect(),o=Fs(r,"viewBox"),a=i.width,s=i.height,l=n.viewBox||(o?o.split(" "):[0,0,a,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:s,vW:l[2],vH:l[3]}}function Xs(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var i=Qs(e.el,e.svg),o=r(),a=r(-1),s=r(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(e.property){case"x":return(o.x-i.x)*l;case"y":return(o.y-i.y)*c;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function Zs(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=$s(vs.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:vs.str(e)||t?r.split(n):[]}}function Js(e){return Os(e?Ps(vs.arr(e)?e.map(Is):Is(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function el(e){var t=Js(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:Ws(e)}}}))}function tl(e,t){var n=Ms(t);if(/^spring/.test(n.easing)&&(n.duration=ws(n.easing)),vs.arr(e)){var r=e.length;2===r&&!vs.obj(e[0])?e={value:e}:vs.fnc(t.duration)||(n.duration=t.duration/r)}var i=vs.arr(e)?e:[e];return i.map((function(e,n){var r=vs.obj(e)&&!vs.pth(e)?e:{value:e};return vs.und(r.delay)&&(r.delay=n?0:t.delay),vs.und(r.endDelay)&&(r.endDelay=n===i.length-1?t.endDelay:0),r})).map((function(e){return As(e,n)}))}function nl(e,t){var n=[],r=t.keyframes;for(var i in r&&(t=As(function(e){for(var t=Os(Ps(e.map((function(e){return Object.keys(e)}))),(function(e){return vs.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var i=t[r];n[i]=e.map((function(e){var t={};for(var n in e)vs.key(n)?n==i&&(t.value=e[n]):t[n]=e[n];return t}))},i=0;i<t.length;i++)r(i);return n}(r),t)),t)vs.key(i)&&n.push({name:i,tweens:tl(t[i],e)});return n}function rl(e,t){var n;return e.tweens.map((function(r){var i=function(e,t){var n={};for(var r in e){var i=Ls(e[r],t);vs.arr(i)&&1===(i=i.map((function(e){return Ls(e,t)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=i.value,a=vs.arr(o)?o[1]:o,s=Rs(a),l=qs(t.target,e.name,s,t),c=n?n.to.original:l,u=vs.arr(o)?o[0]:c,d=Rs(u)||Rs(l),f=s||d;return vs.und(a)&&(a=c),i.from=Zs(u,f),i.to=Zs(Hs(a,u),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Cs(i.easing,i.duration),i.isPath=vs.pth(o),i.isPathTargetInsideSVG=i.isPath&&vs.svg(t.target),i.isColor=vs.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}var il={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,i){if(r.list.set(t,n),t===r.last||i){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function ol(e,t){el(e).forEach((function(e){for(var n in t){var r=Ls(t[n],e),i=e.target,o=Rs(r),a=qs(i,n,o,e),s=Hs($s(r,o||Rs(a)),a),l=Us(i,n);il[l](i,n,s,e.transforms,!0)}}))}function al(e,t){return Os(Ps(e.map((function(e){return t.map((function(t){return function(e,t){var n=Us(e.target,t.name);if(n){var r=rl(t,e),i=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(e,t)}))}))),(function(e){return!vs.und(e)}))}function sl(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,i.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,i}var ll=0;var cl=[],ul=function(){var e;function t(n){for(var r=cl.length,i=0;i<r;){var o=cl[i];o.paused?(cl.splice(i,1),r--):(o.tick(n),i++)}e=i>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){fl.suspendWhenDocumentHidden&&(dl()?e=cancelAnimationFrame(e):(cl.forEach((function(e){return e._onDocumentVisibility()})),ul()))})),function(){e||dl()&&fl.suspendWhenDocumentHidden||!(cl.length>0)||(e=requestAnimationFrame(t))}}();function dl(){return!!document&&document.hidden}function fl(e){void 0===e&&(e={});var t,n=0,r=0,i=0,o=0,a=null;function s(e){var t=window.Promise&&new Promise((function(e){return a=e}));return e.finished=t,t}var l=function(e){var t=Ds(ds,e),n=Ds(fs,e),r=nl(n,e),i=el(e.targets),o=al(i,r),a=sl(o,n),s=ll;return ll++,As(t,{id:s,children:[],animatables:i,animations:o,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}(e);s(l);function c(){var e=l.direction;"alternate"!==e&&(l.direction="normal"!==e?"normal":"reverse"),l.reversed=!l.reversed,t.forEach((function(e){return e.reversed=l.reversed}))}function u(e){return l.reversed?l.duration-e:e}function d(){n=0,r=u(l.currentTime)*(1/fl.speed)}function f(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=l.animations,r=n.length;t<r;){var i=n[t],o=i.animatable,a=i.tweens,s=a.length-1,c=a[s];s&&(c=Os(a,(function(t){return e<t.end}))[0]||c);for(var u=ms(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(u)?1:c.easing(u),f=c.to.strings,p=c.round,h=[],m=c.to.numbers.length,b=void 0,g=0;g<m;g++){var v=void 0,y=c.to.numbers[g],w=c.from.numbers[g]||0;v=c.isPath?Xs(c.value,d*y,c.isPathTargetInsideSVG):w+d*(y-w),p&&(c.isColor&&g>2||(v=Math.round(v*p)/p)),h.push(v)}var _=f.length;if(_){b=f[0];for(var k=0;k<_;k++){f[k];var x=f[k+1],E=h[k];isNaN(E)||(b+=x?E+x:E+" ")}}else b=h[0];il[i.type](o.target,i.property,b,o.transforms),i.currentValue=b,t++}}function h(e){l[e]&&!l.passThrough&&l[e](l)}function m(e){var d=l.duration,m=l.delay,b=d-l.endDelay,g=u(e);l.progress=ms(g/d*100,0,100),l.reversePlayback=g<l.currentTime,t&&function(e){if(l.reversePlayback)for(var n=o;n--;)f(e,t[n]);else for(var r=0;r<o;r++)f(e,t[r])}(g),!l.began&&l.currentTime>0&&(l.began=!0,h("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,h("loopBegin")),g<=m&&0!==l.currentTime&&p(0),(g>=b&&l.currentTime!==d||!d)&&p(d),g>m&&g<b?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,h("changeBegin")),h("change"),p(g)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,h("changeComplete")),l.currentTime=ms(g,0,d),l.began&&h("update"),e>=d&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=i,h("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,h("loopComplete"),h("complete"),!l.passThrough&&"Promise"in window&&(a(),s(l)))))}return l.reset=function(){var e=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===e,l.remaining=l.loop,t=l.children;for(var n=o=t.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===e&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(e,t){return ol(e,t),l},l.tick=function(e){i=e,n||(n=i),m((i+(r-n))*fl.speed)},l.seek=function(e){m(u(e))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,cl.push(l),d(),ul())},l.reverse=function(){c(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(e){hl(Js(e),l)},l.reset(),l.autoplay&&l.play(),l}function pl(e,t){for(var n=t.length;n--;)Ns(e,t[n].animatable.target)&&t.splice(n,1)}function hl(e,t){var n=t.animations,r=t.children;pl(e,n);for(var i=r.length;i--;){var o=r[i],a=o.animations;pl(e,a),a.length||o.children.length||r.splice(i,1)}n.length||r.length||t.pause()}fl.version="3.2.1",fl.speed=1,fl.suspendWhenDocumentHidden=!0,fl.running=cl,fl.remove=function(e){for(var t=Js(e),n=cl.length;n--;){hl(t,cl[n])}},fl.get=qs,fl.set=ol,fl.convertPx=zs,fl.path=function(e,t){var n=vs.str(e)?Ts(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:Qs(n),totalLength:Gs(n)*(r/100)}}},fl.setDashoffset=function(e){var t=Gs(e);return e.setAttribute("stroke-dasharray",t),t},fl.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?Cs(t.easing):null,i=t.grid,o=t.axis,a=t.from||0,s="first"===a,l="center"===a,c="last"===a,u=vs.arr(e),d=u?parseFloat(e[0]):parseFloat(e),f=u?parseFloat(e[1]):0,p=Rs(u?e[1]:e)||0,h=t.start||0+(u?d:0),m=[],b=0;return function(e,t,g){if(s&&(a=0),l&&(a=(g-1)/2),c&&(a=g-1),!m.length){for(var v=0;v<g;v++){if(i){var y=l?(i[0]-1)/2:a%i[0],w=l?(i[1]-1)/2:Math.floor(a/i[0]),_=y-v%i[0],k=w-Math.floor(v/i[0]),x=Math.sqrt(_*_+k*k);"x"===o&&(x=-_),"y"===o&&(x=-k),m.push(x)}else m.push(Math.abs(a-v));b=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/b)*b}))),"reverse"===n&&(m=m.map((function(e){return o?e<0?-1*e:-e:Math.abs(b-e)})))}return h+(u?(f-d)/b:d)*(Math.round(100*m[t])/100)+p}},fl.timeline=function(e){void 0===e&&(e={});var t=fl(e);return t.duration=0,t.add=function(n,r){var i=cl.indexOf(t),o=t.children;function a(e){e.passThrough=!0}i>-1&&cl.splice(i,1);for(var s=0;s<o.length;s++)a(o[s]);var l=As(n,Ds(fs,e));l.targets=l.targets||e.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=vs.und(r)?c:Hs(r,c),a(t),t.seek(l.timelineOffset);var u=fl(l);a(u),o.push(u);var d=sl(o,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},fl.easing=Cs,fl.penner=Ss,fl.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var ml=fl;class bl{constructor({document:e,filterSelector:t,mutatingElement:n,targetSelector:r,window:i}){this.document=e,this.filterSelector=t,this.mutatingElement=n,this.targetSelector=r,this.window=i,this._onMutation=this._onMutation.bind(this);const o=new MutationObserver(this._onMutation);this.observer=o.observe(n,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(e){e.forEach((e=>{e.addedNodes.forEach((e=>{if("querySelector"in e&&e.matches(this.filterSelector)){const t=e.querySelector(this.targetSelector);if(t){const e=t.offsetHeight+t.offsetTop+3;ml({targets:t,translateY:[-e,0],duration:500,easing:"easeInOutQuad"})}}}))}))}}class gl{constructor({scrollingElement:e,mutatingElement:t,inputInlineRef:n,spacerRef:r,bodyRef:i,isModeNative:o,autoScrollHandler:a}){this.scrollingElement=e,this.mutatingElement=t,this.inputInlineRef=n,this.spacerRef=r,this.bodyRef=i,this.isModeNative=o,this.autoScrollHandler=a,this.auto=!0,this.behavior="smooth",this._onUserScroll=this._onUserScroll.bind(this),this._onMutation=this._onMutation.bind(this),this._attachScrollEvents=this._attachScrollEvents.bind(this),this._dettachScrollEvents=this._dettachScrollEvents.bind(this),this._onResize=this._onResize.bind(this),this._scrollTo=this._scrollTo.bind(this);const s=new MutationObserver(this._onMutation);this.observer=s.observe(t,{attributes:!1,childList:!0,characterData:!1,subtree:!0}),this.animation=null,this._attachScrollEvents(),window.addEventListener("resize",this._onResize)}setBehavior(e){this.behavior=e}destroy(){this.observer&&this.observer.disconnect(),this._dettachScrollEvents(),window.removeEventListener("resize",this._onResize)}_attachScrollEvents(){this.scrollingElement.addEventListener("wheel",this._onUserScroll),this.scrollingElement.addEventListener("touchmove",this._onUserScroll)}_dettachScrollEvents(){this.scrollingElement.removeEventListener("wheel",this._onUserScroll),this.scrollingElement.removeEventListener("touchmove",this._onUserScroll)}_onUserScroll(){this.animation&&this.animation.pause(),this.auto=!1,this._dettachScrollEvents(),setTimeout((()=>{this.auto=!0,this._attachScrollEvents()}),1e3)}_onMutation(e){const t=Array.isArray(e)&&e.some((e=>e.target.classList.contains("is-autoscroll-mutation-target")));this.auto&&t&&(this.animation&&!this.animation.completed&&this.animation.pause(),setTimeout((()=>this._doAutoScroll()),200))}_onResize(){this.auto&&this._doAutoScroll()}_doAutoScroll(){var e,t,n,r,i,o;const a=this.scrollingElement.scrollHeight,s=this.isModeNative?window.innerHeight:(null===(e=this.bodyRef)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0,l=a-s-((null===(n=this.spacerRef)||void 0===n||null===(r=n.current)||void 0===r?void 0:r.clientHeight)||0)-((null===(i=this.inputInlineRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.scrollHeight)||0)+Math.round(.6*s);a>s&&l>this.scrollingElement.scrollTop&&l>=0&&this.scrollingElement.scrollTop>=0&&this._scrollTo(l)}_scrollTo(e){this.animation=ml({targets:this.scrollingElement,scrollTop:e,duration:1e3,easing:"easeOutQuad"}),this.autoScrollHandler&&this.autoScrollHandler(e)}}const vl="Header--isSticky",yl="Body--isSticky";class wl{constructor({scrollingElement:e,header:t,body:n}){this.scrollingElement=e,this.header=t,this.body=n,this.clientY=null,this.onUserScroll=this.onUserScroll.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onAutoScroll=this.onAutoScroll.bind(this),this.scrollingElement.addEventListener("wheel",this.onUserScroll,!1),this.scrollingElement.addEventListener("touchstart",this.onTouchStart,!1),this.scrollingElement.addEventListener("touchend",this.onTouchEnd,!1)}getAutoScrollHandler(){return this.onAutoScroll}onAutoScroll(e){this.onUserScroll({deltaY:e})}onUserScroll(e){e.deltaY>=0?(this.header.classList.add(vl),this.body.classList.add(yl)):(this.header.classList.remove(vl),this.body.classList.remove(yl))}onTouchStart(e){this.clientY=e.touches[0].clientY}onTouchEnd(e){const t=e.changedTouches[0].clientY-this.clientY;this.onUserScroll({deltaY:-t})}destroy(){this.scrollingElement.removeEventListener("wheel",this.onUserScroll),this.scrollingElement.removeEventListener("touchstart",this.onTouchStart),this.scrollingElement.removeEventListener("touchend",this.onTouchEnd)}}class _l{constructor({document:e,iframe:t,selector:n,window:r}){this.document=e,this.iframe=t,this.selector=n,this.window=r,this._onMutation=this._onMutation.bind(this);const i=new MutationObserver(this._onMutation);this.observer=i.observe(e,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(e){this._landbotFrameHasFocus()&&e.forEach((e=>{e.addedNodes.forEach((e=>{if("querySelector"in e){const t=e.querySelector(this.selector);t&&setTimeout((()=>{t.focus()}),200)}}))}))}_landbotFrameHasFocus(){return window.top===this.window||window.top.document.activeElement===this.iframe}}const kl=Ui.div`
  margin: 0 auto;
  text-align: center;
  margin-top: ${e=>ko(e.theme.initial_vars.vertical_unit)};
  display: none;

  .button {
    display: inline-block;
  }
`;function xl(e){return t.createElement(kl,{className:"LoadMore__container"},t.createElement("button",{className:mo()({button:!0,"is-loading":e.isFetching}),type:"button",onClick:e.onClick},"LOAD MORE"))}function El(){const{isFetchingMore:e,fetchMore:n}=function(){const[e,n]=(0,t.useState)(!1),{addMessages:r}=es(),i=Zo();return{isFetchingMore:e,fetchMoreMessages:()=>{n(!0),i.getMoreMessages().then(r).catch(console.error).finally((()=>n(!1)))}}}();return t.createElement(xl,{isFetching:e,onClick:n})}xl.propTypes={isFetching:i().bool,onClick:i().func},xl.defaultProps={isFetching:!1,onClick:()=>{}};const Sl=84,Cl=95,Tl=({hasNavBarFixedTop:e,hasPersistentMenu:t},n)=>{let r=50;return e&&(r+=n?Sl:Cl),n&&t&&(r+=55),`${r}px`},Ol=Ui.div`
  -webkit-overflow-scrolling: touch;
  ${()=>qi()===n.NATIVE?"max-height: auto;\n       overflow: visible;\n      ":"max-height: 100%;\n     overflow: auto;"}

  @media ${yo} {
    padding-top: ${e=>Tl(e,!0)};
    padding-bottom: ${0}px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media ${go} {
    padding-top: ${e=>Tl(e,!1)};
  }
  ${e=>e.hasInputFixed?Ei`
          padding-bottom: ${0};
        `:null}
`;function Pl({hasHeader:e,hasAgentAssigned:n,hasPersistentMenu:r,isConnectionOk:i,children:o}){return t.createElement(Ol,{className:mo()({Chat:!0,"Chat--hasNavBarFixedTop":e,"Chat--hasInputFixed":n,"Chat--hasPersistentMenu":r,"js-auto-scroll":!0,"js-revisit-fade":!0,"is-autoscroll-mutation-target":!0,"are-disabled":!i}),hasNavBarFixedTop:e,hasPersistentMenu:r},o)}Pl.propTypes={hasHeader:i().bool,hasAgentAssigned:i().bool,hasPersistentMenu:i().bool,isConnectionOk:i().bool,children:i().node},Pl.defaultProps={hasHeader:!1,hasAgentAssigned:!1,hasPersistentMenu:!1,isConnectionOk:!0,children:null};const Il=Ui.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${go} {  
    height: 300px;
  }
`;function Nl(e){return t.createElement(Il,{className:"ChatLoaderContainer"},e.children)}Nl.propTypes={children:i().node},Nl.defaultProps={children:null};const Ml=Bi`
  0%,
  80%,
  100% {
    box-shadow: 0 1em 0 -1em;
  }
  40% {
    box-shadow: 0 1em 0 -0.2em;
  }
`,Dl=Ui.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  pointer-events: none;

  &::before,
  &::after,
  & {
    border-radius: 50%;
    animation-fill-mode: both;
    animation: ${Ml} 1.8s infinite ease-in-out;
  }

  & {
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
    top: -1em;

    &::before {
      right: 100%;
      animation-delay: -0.32s;
    }

    &::after {
      left: 100%;
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: inherit;
      height: inherit;
    }
  }

  color: ${({theme:e})=>e.design.form_buttons_background_color};
`;function Al(e){return t.createElement(Dl,{className:mo()("lb-loader",e.className)})}Al.propTypes={className:i().string},Al.defaultProps={className:""};var jl=Al,Rl=function(e,t){return(Rl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Ll(e,t){function n(){this.constructor=e}Rl(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function Fl(e){return"function"==typeof e}var zl=!1,Bl={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;zl=e},get useDeprecatedSynchronousErrorHandling(){return zl}};function Ul(e){setTimeout((function(){throw e}),0)}var Wl={closed:!0,next:function(e){},error:function(e){if(Bl.useDeprecatedSynchronousErrorHandling)throw e;Ul(e)},complete:function(){}},Vl=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();function ql(e){return null!==e&&"object"==typeof e}var Hl=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),$l=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this,r=n._parentOrParents,i=n._ctorUnsubscribe,o=n._unsubscribe,a=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var s=0;s<r.length;++s){r[s].remove(this)}if(Fl(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(e){t=e instanceof Hl?Yl(e.errors):[e]}}if(Vl(a)){s=-1;for(var l=a.length;++s<l;){var c=a[s];if(ql(c))try{c.unsubscribe()}catch(e){t=t||[],e instanceof Hl?t=t.concat(Yl(e.errors)):t.push(e)}}}if(t)throw new Hl(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof e){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function Yl(e){return e.reduce((function(e,t){return e.concat(t instanceof Hl?t.errors:t)}),[])}var Kl=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),Gl=function(e){function t(n,r,i){var o=e.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=Wl;break;case 1:if(!n){o.destination=Wl;break}if("object"==typeof n){n instanceof t?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new Ql(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new Ql(o,n,r,i)}return o}return Ll(t,e),t.prototype[Kl]=function(){return this},t.create=function(e,n,r){var i=new t(e,n,r);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}($l),Ql=function(e){function t(t,n,r,i){var o,a=e.call(this)||this;a._parentSubscriber=t;var s=a;return Fl(n)?o=n:n&&(o=n.next,r=n.error,i=n.complete,n!==Wl&&(Fl((s=Object.create(n)).unsubscribe)&&a.add(s.unsubscribe.bind(s)),s.unsubscribe=a.unsubscribe.bind(a))),a._context=s,a._next=o,a._error=r,a._complete=i,a}return Ll(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;Bl.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=Bl.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Ul(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Ul(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};Bl.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),Bl.useDeprecatedSynchronousErrorHandling)throw e;Ul(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!Bl.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return Bl.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(Ul(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(Gl);var Xl=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Zl(e){return e}function Jl(e){return 0===e.length?Zl:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var ec=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this.operator,i=function(e,t,n){if(e){if(e instanceof Gl)return e;if(e[Kl])return e[Kl]()}return e||t||n?new Gl(e,t,n):new Gl(Wl)}(e,t,n);if(r?i.add(r.call(i,this.source)):i.add(this.source||Bl.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),Bl.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){Bl.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,r=t.destination,i=t.isStopped;if(n||i)return!1;e=r&&r instanceof Gl?r:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=tc(t))((function(t,r){var i;i=n.subscribe((function(t){try{e(t)}catch(e){r(e),i&&i.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[Xl]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:Jl(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=tc(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function tc(e){if(e||(e=Bl.Promise||Promise),!e)throw new Error("no Promise impl found");return e}var nc=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}(),rc=function(e){function t(t,n){var r=e.call(this)||this;return r.subject=t,r.subscriber=n,r.closed=!1,r}return Ll(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}($l),ic=function(e){function t(t){var n=e.call(this,t)||this;return n.destination=t,n}return Ll(t,e),t}(Gl),oc=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return Ll(t,e),t.prototype[Kl]=function(){return new ic(this)},t.prototype.lift=function(e){var t=new ac(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new nc;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].next(e)},t.prototype.error=function(e){if(this.closed)throw new nc;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new nc;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new nc;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new nc;return this.hasError?(e.error(this.thrownError),$l.EMPTY):this.isStopped?(e.complete(),$l.EMPTY):(this.observers.push(e),new rc(this,e))},t.prototype.asObservable=function(){var e=new ec;return e.source=this,e},t.create=function(e,t){return new ac(e,t)},t}(ec),ac=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return Ll(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):$l.EMPTY},t}(oc),sc=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return Ll(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(e){n=!0,r=!!e&&e||new Error(e)}if(n)return this.unsubscribe(),r},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return Ll(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}($l)),lc=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),cc=new(function(e){function t(n,r){void 0===r&&(r=lc.now);var i=e.call(this,n,(function(){return t.delegate&&t.delegate!==i?t.delegate.now():r()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return Ll(t,e),t.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,r,i):e.prototype.schedule.call(this,n,r,i)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(lc))(sc);var uc=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new dc(e,this.dueTime,this.scheduler))},e}(),dc=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.dueTime=n,i.scheduler=r,i.debouncedSubscription=null,i.lastValue=null,i.hasValue=!1,i}return Ll(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(fc,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(Gl);function fc(e){e.debouncedNext()}function pc(){const[e,n]=(0,t.useState)(!1),r=Zo(),{awaiting_loader:i}=d();(0,t.useEffect)((()=>{const e=()=>n(!1);return r.events.on(aa,e),r.events.on(ra,e),()=>{r.events.off(aa,e),r.events.off(ra,e)}}),[n,r.pipelines.$readableSequence,r.events]),(0,t.useEffect)((()=>{const e=new oc,t=r.pipelines.$readableSequence.pipe((i=2e3,void 0===o&&(o=cc),function(e){return e.lift(new uc(i,o))})).subscribe((()=>e.next(!0)));var i,o;const a=e.subscribe((()=>n(!0)));return()=>{t.unsubscribe(),a.unsubscribe(),n(!1)}}),[n,r.pipelines.$readableSequence]);const{messagesWrapper:o}=es(),a=o.getLastMessage(),s=co();return i&&e&&!s&&!a.isEmpty()&&!a.hasInput&&!a.isFinishBot&&!a.isActionUnassign}var hc=Ui.div`
  ${Dl} {
    left: 1em;
  }
`;const mc=Ui.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${go} {
    margin: 0 auto;
    max-width: ${e=>e.theme.messages_max_width};
  }
`,bc=Ui.div`
  display: flex;
  width: 100%;
  margin-bottom: 3px;

  &.is-end {
    margin-bottom: 8px;
  }

  @media ${go} {
    padding-right: 10px;
  }

  &.is-medium-width {
    width: 100%;

    .msg-grid-row {
      width: 100%;
    }

    .msg-grid-center {
      width: 410px;
    }
  }

  &.is-reverse {
    justify-content: flex-end;
    padding-right: 0;

    .msg-grid-left {
      display: none;
      margin-left: 1rem;
      margin-right: 0;
    }
  }
  &.Message__message-failed-text,
  &.Message__message-failed-retry-link {
    color: ${({theme:e})=>e.design.form_help_color};
  }
`,gc=Ui.article`
  display: inline-flex;
  position: relative;
  align-items: flex-end;
  max-width: 100%;

  &.is-full-width-content {
    @media ${yo} {
      display: block;
    }
    flex-grow: 1;
    .msg-grid-center {
      flex-grow: 1;
    }
  }
`,vc=Ui.div`
  margin-right: ${e=>ko(e.theme.initial_vars.horizontal_unit)};
  text-align: center;
  position: relative;
  &.is-invisible {
    visibility: hidden;
  }

  @media ${go} {
    margin-right: ${e=>e.theme.message_left_margin_right};
    &.has-fixed-width {
      width: ${e=>e.theme.msg_grid_left_fixed_width};
    }
  }
`,yc=Ui.div`
  position: relative;
  min-width: 0;
`,wc=Ui.div`
  align-self: center;
`,_c=Ui.div`
  position: relative;
  width: 100%;
  margin-top: ${e=>ko(e.theme.initial_vars.vertical_unit,10)};
  margin-bottom: ${e=>ko(e.theme.initial_vars.vertical_unit,1.5)};

  @media ${go} {
    margin-top: ${e=>ko(e.theme.initial_vars.vertical_unit,4.75)};
    margin-bottom: ${e=>ko(e.theme.initial_vars.vertical_unit,1.5)};
  }
`,kc=(e,t)=>{const[n,...r]=e;return mo()([n,t,...r])},xc=({className:e,classNames:n,containerRef:r,children:i})=>t.createElement(mc,{className:kc([...n,e],"msg-grid-container"),ref:r},i);xc.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),className:i().string,children:i().node,containerRef:i().object},xc.defaultProps={classNames:[],className:"",children:null,containerRef:null};const Ec=({containerClassNames:e,classNames:n,id:r,author:i,type:o,block:a,inputType:s,children:l})=>t.createElement(bc,{id:r,className:kc(e,"msg-grid-row-container"),"data-author":i,"data-type":o,"data-block":a,"data-input":s},t.createElement(gc,{className:kc(n,"msg-grid-row")},l));Ec.propTypes={containerClassNames:i().arrayOf(i().oneOfType([i().string,i().bool])),classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),id:i().string,author:i().string,type:i().string,block:i().string,inputType:i().string,children:i().node},Ec.defaultProps={containerClassNames:[],classNames:[],id:null,author:null,type:null,block:null,inputType:null,children:null};const Sc=({classNames:e,children:n})=>t.createElement(vc,{className:kc(e,"msg-grid-left")},n);Sc.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},Sc.defaultProps={classNames:[],children:null};const Cc=({classNames:e,children:n})=>t.createElement(yc,{className:kc(e,"msg-grid-center")},n);Cc.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},Cc.defaultProps={classNames:[],children:null};const Tc=({classNames:e,children:n})=>t.createElement(wc,{className:kc(e,"msg-grid-right")},n);Tc.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},Tc.defaultProps={classNames:[],children:null};const Oc=({classNames:e,children:n})=>t.createElement(_c,{className:kc([...e],"msg-grid-fullwidth-row")},n);Oc.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},Oc.defaultProps={classNames:[],children:null};const Pc=({children:e,hasLeftColumn:n})=>t.createElement(Ec,null,n&&t.createElement(Sc,{classNames:["has-fixed-width","is-hidden-mobile"]}),t.createElement(Cc,null,e));function Ic(){const{design:{avatar_enabled:e}}=d();return pc()&&t.createElement(xc,{className:"is-autoscroll-mutation-target"},t.createElement(Pc,{hasLeftColumn:e},t.createElement(hc,{className:"AwaitLoaderContainer"},t.createElement(jl,null))))}Pc.propTypes={children:i().node,hasLeftColumn:i().bool},Pc.defaultProps={children:null,hasLeftColumn:!0};const Nc="90px",Mc="150px",Dc="150px",Ac="180px",jc=Ui.div`
  width: 100%;

  @media ${yo} {
    height: ${e=>e.hasInputFixed?Dc:Nc};
  }

  @media ${go} {
    height: ${e=>e.hasInputFixed?Ac:Mc};
  }
`;function Rc({hasInputFixed:e,spacerRef:n}){return t.createElement(jc,{hasInputFixed:e,className:"Chat__spacer",ref:n})}function Lc({children:e}){return t.createElement(xc,{classNames:["Messages","is-autoscroll-mutation-target"]},e)}function Fc(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}Rc.propTypes={hasInputFixed:i().bool,spacerRef:i().object},Rc.defaultProps={hasInputFixed:!1,spacerRef:null},Lc.propTypes={children:i().node},Lc.defaultProps={children:null};const zc=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 64 64"},t.createElement("g",{fill:"#42ade2"},t.createElement("path",{d:"M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1"}),t.createElement("path",{d:"M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2"}),t.createElement("path",{d:"M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9"}),t.createElement("path",{d:"M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"})),t.createElement("g",{fill:"#ffdd67"},t.createElement("path",{d:"M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9"}),t.createElement("path",{d:"M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"})),t.createElement("path",{d:"M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2",fill:"#eba352"}),t.createElement("path",{d:"M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7",fill:"#ffdd67"}),t.createElement("path",{d:"M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1",fill:"#eba352"}),t.createElement("path",{d:"M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6",fill:"#ffdd67"}),t.createElement("g",{fill:"#eba352"},t.createElement("path",{d:"M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1"}),t.createElement("path",{d:"M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"})),t.createElement("path",{d:"M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5",fill:"#ffdd67"}),t.createElement("g",{fill:"#eba352"},t.createElement("path",{d:"M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"}),t.createElement("path",{d:"M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"}))),Bc=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},t.createElement("circle",{fill:"#FFCC4D",cx:"18",cy:"18",r:"18"}),t.createElement("path",{fill:"#664500",d:"M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379a.499.499 0 0 0-.237-.554a.505.505 0 0 0-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855a.502.502 0 0 0-.598-.081a.5.5 0 0 0-.239.557z"}),t.createElement("ellipse",{fill:"#664500",cx:"12",cy:"13.5",rx:"2.5",ry:"3.5"}),t.createElement("ellipse",{fill:"#664500",cx:"24",cy:"13.5",rx:"2.5",ry:"3.5"})),Uc=e=>{let{fill:n}=e,r=Fc(e,["fill"]);return t.createElement("svg",Po({width:"24",height:"24"},r),t.createElement("path",{fill:n,d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}))};Uc.propTypes={fill:i().string},Uc.defaultProps={fill:"var(--form_inputs_border_color)"};const Wc=e=>{let{fill:n}=e,r=Fc(e,["fill"]);return t.createElement("svg",Po({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",x:"3650",y:"3688"},r),t.createElement("path",{fill:n,d:"M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"}))};Wc.propTypes={fill:i().string},Wc.defaultProps={fill:"var(--form_inputs_border_color)"};const Vc=Ui.svg`
  transform: rotate(${function(e){return e.isRightArrow?"180":e.isUpArrow?"-90":e.isDownArrow?"90":"0"}}deg);
`,qc=e=>{let{fill:n}=e,r=Fc(e,["fill"]);return t.createElement(Vc,Po({height:"20",viewBox:"0 0 24 24"},r),t.createElement("path",{fill:n,d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}))};qc.propTypes={fill:i().string},qc.defaultProps={fill:"var(--form_buttons_color)"};const Hc=e=>{let{fill:n,fillRule:r,rotate45:i}=e,o=Fc(e,["fill","fillRule","rotate45"]);const a=i?"M14.68 2.31A4.54 4.54 0 0011.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 003.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0016 5.51c0-1.16-.44-2.32-1.32-3.2z":"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z";return t.createElement("svg",Po({"data-icon":"paperclip",width:"16",height:"16",viewBox:"0 0 16 16"},o),t.createElement("desc",null,"paperclip"),t.createElement("path",{d:a,fillRule:r,fill:n}))};Hc.propTypes={fill:i().string,fillRule:i().string,rotate45:i().bool},Hc.defaultProps={fill:null,fillRule:"evenodd",rotate45:!0};const $c=()=>t.createElement("svg",{className:"MessageBubble__Decorator",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"28",viewBox:"0 0 16 28"},t.createElement("title",null," Path"),t.createElement("desc",null," Created with Sketch."),t.createElement("g",{fill:"none"},t.createElement("path",{d:"M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z",fill:"#FFF"}))),Yc=e=>t.createElement("svg",Po({height:"2em",viewBox:"0 0 31 27",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),t.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},t.createElement("path",{fill:"currentColor",d:"M30.0011525,5.51999975 C30.4811549,6.6800055 30.7211525,7.89999325 30.7211525,9.17999959 C30.7211525,10.5800065 30.4311554,11.8999933 29.8511525,13.1399994 C29.2711497,14.3800056 28.4611578,15.429995 27.4211526,16.2899993 C26.6611489,16.9900027 24.7011686,18.7799848 21.5411529,21.659999 C18.5811382,24.3600124 16.7711564,26.0099958 16.1111531,26.6099988 C15.8911521,26.7899997 15.6411546,26.8799988 15.3611532,26.8799988 C15.0811518,26.8799988 14.8311543,26.7899997 14.6111532,26.6099988 C13.6311484,25.7299944 11.0611742,23.3800181 6.90115356,19.5599991 C4.92114375,17.7599902 3.7911551,16.7400005 3.51115371,16.4999993 C3.43115331,16.4199989 3.34115422,16.3399997 3.24115372,16.2599993 C2.22114867,15.399995 1.4311566,14.3550055 0.871153829,13.1249994 C0.311151054,11.8949933 0.0211539665,10.5900064 0.00115386744,9.20999959 C-0.0188462317,7.94999334 0.221151358,6.7300056 0.721153835,5.54999975 C1.18115611,4.4299942 1.84114949,3.44000415 2.70115375,2.57999988 C4.38116207,0.859991362 6.39114188,0 8.73115348,0 C10.0111598,0 11.2261476,0.279997187 12.3761533,0.839999962 C13.526159,1.40000274 14.521149,2.1899948 15.3611532,3.20999986 C16.2011573,2.1899948 17.1961473,1.40000274 18.346153,0.839999962 C19.4961587,0.279997187 20.7111465,0 21.9911529,0 C24.3311645,0 26.3411443,0.849991462 28.0211526,2.54999989 C28.8811569,3.41000415 29.5411502,4.3999942 30.0011525,5.51999975 Z M17.0411531,4.79999979 C16.621151,5.36000256 16.0611566,5.63999975 15.3611532,5.63999975 C14.6611497,5.63999975 14.1011553,5.36000256 13.6811533,4.79999979 C13.0811503,4.01999592 12.3461577,3.41000205 11.4761534,2.96999987 C10.606149,2.52999769 9.69115823,2.3099999 8.73115348,2.3099999 C7.03114505,2.3099999 5.56115982,2.93999357 4.32115367,4.19999981 C3.6811505,4.84000298 3.19115542,5.57999555 2.85115374,6.41999971 C2.47115186,7.30000407 2.29115367,8.22999473 2.31115376,9.20999959 C2.31115376,10.2300046 2.52115165,11.2049948 2.94115374,12.1349995 C3.36115582,13.0650041 3.96114979,13.8499962 4.74115366,14.4899994 C4.78115385,14.5499996 4.86115305,14.6199989 4.98115364,14.6999993 C5.00115374,14.7199994 5.02115354,14.7499991 5.04115364,14.7899993 C5.40115543,15.1100009 6.34114598,15.9599924 7.86115352,17.3399992 L9.30115345,18.6599992 C12.1811677,21.2800121 14.2011474,23.1199937 15.3611532,24.1799989 C16.2811577,23.3399948 17.8211423,21.9400088 19.981153,19.9799991 C22.6811664,17.4799867 24.6511466,15.6800048 25.8911527,14.5799993 L25.9511527,14.5199994 C26.7111565,13.8999963 27.3111504,13.130004 27.7511526,12.2099995 C28.1911548,11.2499947 28.4111526,10.2400048 28.4111526,9.17999959 C28.4111526,8.19999473 28.2311544,7.27000408 27.8711526,6.38999971 C27.5311509,5.54999555 27.0411559,4.81000298 26.4011527,4.16999981 C25.1611465,2.92999367 23.6911613,2.3099999 21.9911529,2.3099999 C21.0311481,2.3099999 20.1161573,2.52499774 19.246153,2.95499987 C18.3761487,3.385002 17.6411561,3.99999582 17.0411531,4.79999979 Z"}))),Kc="26px",Gc=(e,t=!1)=>{const n=ko(e.theme.initial_vars.horizontal_unit,1.5),r=xo(e.theme.initial_vars.horizontal_unit,4);return t?Ei`
      border-radius: ${n} ${n}
        ${r} ${n};
    `:Ei`
      border-radius: ${n} ${n}
        ${n} ${r};
    `},Qc=Ui.div`
  display: flex;
  overflow: visible;
  ${e=>Gc(e)}

  ${e=>Ei`
      padding: ${ko(e.theme.initial_vars.vertical_unit,2)} ${ko(e.theme.initial_vars.horizontal_unit,3)};
    `}

  max-width: 100%;
  background-color: ${({theme:e})=>e.design.message_background_color_bot};
  color: ${({theme:e})=>e.design.message_color_bot};

  &.is-author-user {
    background-color: ${({theme:e})=>e.design.message_background_color_user};
    color: ${({theme:e})=>e.design.message_color_user};
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }

  ul {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  blockquote {
    font-size: 1.05rem;
    font-style: italic;
  }

  &.is-shape-rounded,
  &.is-shape-rounded.is-reverse {
    border-radius: ${Kc};
  }

  &.is-shape-squared,
  &.is-shape-squared.is-reverse {
    border-radius: ${"4px"};
  }

  &.is-shape-transparent {
    padding: 0;
    background-color: transparent !important;
  }

  .MessageBubble__Decorator {
    position: absolute;
    left: -5px;
    bottom: 0;
  }

  .MessageBubble__Decorator path {
    fill: ${({theme:e})=>e.design.message_background_color_bot};
  }

  &.is-reverse {
    ${e=>Gc(e,!0)}

    .MessageBubble__Decorator {
      left: initial;
      right: -5px;
      transform: scaleX(-1);
    }

    .MessageBubble__Decorator path {
      fill: ${({theme:e})=>e.design.message_background_color_user};
    }
  }

  input,
  textarea,
  select,
  .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }

  .MessageBubble__content input,
  .MessageBubble__content textarea,
  .MessageBubble__content select,
  .MessageBubble__content .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }
`;function Xc({classNames:e,shape:n,isReverse:r,author:i,children:o}){return t.createElement(Qc,{className:mo()(["MessageBubble",r&&"is-reverse",`is-shape-${n}`,`is-author-${i}`,...e])},n===Vn.ROUNDED&&t.createElement($c,null),t.createElement("div",{className:"MessageBubble__content"},o))}Xc.propTypes={shape:i().string,classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),isReverse:i().bool,author:i().string,children:i().node},Xc.defaultProps={shape:Vn.SEMI,classNames:[],isReverse:!1,author:"",children:null};const Zc=Ui.span`
  margin-left: 34px;
`,Jc=Ui.span`
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  font-size: 23px;
  margin-left: -1px;
  position: absolute;
  margin-top: -4px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 2;
  transform-origin: 70% 70%;
`,eu=Ui.hr`
  background: transparent;
  ${e=>Ei`
      margin: 0 auto ${ko(e.theme.initial_vars.vertical_unit,3)};
    `}

  border-top: 1px dashed rgba(0, 0, 0, 0.16);
`,tu=({className:e,children:n})=>t.createElement(Oc,{classNames:["htomessage",e]},n);tu.propTypes={children:i().node,className:i().string},tu.defaultProps={children:null,className:null};const nu=Ui(tu)`
  .MessageBubble {
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  }
`,ru=({agentName:e})=>{const{text:n}=d(),r=n.hto_assignation_message.includes("@agent"),i=n.hto_assignation_message.split("@agent");return t.createElement(Zc,null,i[0],r&&t.createElement(t.Fragment,null,t.createElement("b",{className:"htomessage__AgentName"},e)," ",i[1]))};function iu({action:e,agents:n,agent_id:r}){const i="assign"===e,o={name:ie()(n,`[${r}].name`,"")};return t.createElement(nu,null,t.createElement(eu,{className:"htomessage__lineseparator u-fullwidth-avoiding-container"}),i?t.createElement(Xc,{shape:Vn.SQUARED},t.createElement(Jc,{className:"htomessage__notificationIcon",role:"img","aria-label":"wave"},t.createElement(zc,null))," ",t.createElement(ru,{agentName:o.name})):null)}function ou({message:e}){const n=io(),{action:r,agent_id:i}=e;return t.createElement(iu,{agents:n,action:r,agent_id:i})}function au(){const{animate_buttons:e,animate_messages:t,animate_on_mobile:n}=d(),r=n||!E.isMobile;return{has_buttons_animation_on:r&&e,has_messages_animation_on:r&&t}}ru.propTypes={agentName:i().string},ru.defaultProps={agentName:""},iu.propTypes={action:i().string,agent_id:i().number,agents:i().object},iu.defaultProps={action:"assign",agent_id:null,agents:{}},ou.propTypes={message:i().object},ou.defaultProps={message:{}};var su=function(){function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e}();function lu(e,t){return function(n){return n.lift(new cu(e,t))}}var cu=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new uu(e,this.predicate,this.thisArg))},e}(),uu=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.predicate=n,i.thisArg=r,i.count=0,i}return Ll(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}t&&this.destination.next(e)},t}(Gl),du=function(){function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e}(),fu=new ec((function(e){return e.complete()}));function pu(e){return e?function(e){return new ec((function(t){return e.schedule((function(){return t.complete()}))}))}(e):fu}function hu(e){return function(t){return 0===e?pu():t.lift(new mu(e))}}var mu=function(){function e(e){if(this.total=e,this.total<0)throw new du}return e.prototype.call=function(e,t){return t.subscribe(new bu(e,this.total))},e}(),bu=function(e){function t(t,n){var r=e.call(this,t)||this;return r.total=n,r.count=0,r}return Ll(t,e),t.prototype._next=function(e){var t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))},t}(Gl);function gu(e){return void 0===e&&(e=null),function(t){return t.lift(new vu(e))}}var vu=function(){function e(e){this.defaultValue=e}return e.prototype.call=function(e,t){return t.subscribe(new yu(e,this.defaultValue))},e}(),yu=function(e){function t(t,n){var r=e.call(this,t)||this;return r.defaultValue=n,r.isEmpty=!0,r}return Ll(t,e),t.prototype._next=function(e){this.isEmpty=!1,this.destination.next(e)},t.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},t}(Gl);function wu(e){return void 0===e&&(e=xu),function(t){return t.lift(new _u(e))}}var _u=function(){function e(e){this.errorFactory=e}return e.prototype.call=function(e,t){return t.subscribe(new ku(e,this.errorFactory))},e}(),ku=function(e){function t(t,n){var r=e.call(this,t)||this;return r.errorFactory=n,r.hasValue=!1,r}return Ll(t,e),t.prototype._next=function(e){this.hasValue=!0,this.destination.next(e)},t.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var e=void 0;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)},t}(Gl);function xu(){return new su}function Eu(e){return e&&"function"==typeof e.schedule}var Su;function Cu(e,t){return new ec((function(n){var r=new $l,i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function Tu(e,t){return t?Cu(e,t):new ec((n=e,function(e){for(var t=0,r=n.length;t<r&&!e.closed;t++)e.next(n[t]);e.complete()}));var n}function Ou(e){var t=e.error;e.subscriber.error(t)}Su||(Su={});var Pu=function(){function e(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}},e.prototype.accept=function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[e.length-1];return Eu(n)?(e.pop(),Cu(e,n)):Tu(e)}(this.value);case"E":return e=this.error,new ec(t?function(n){return t.schedule(Ou,0,{error:e,subscriber:n})}:function(t){return t.error(e)});case"C":return pu()}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();function Iu(e,t){void 0===t&&(t=cc);var n,r=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return function(e){return e.lift(new Nu(r,t))}}var Nu=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new Mu(e,this.delay,this.scheduler))},e}(),Mu=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.delay=n,i.scheduler=r,i.queue=[],i.active=!1,i.errored=!1,i}return Ll(t,e),t.dispatch=function(e){for(var t=e.source,n=t.queue,r=e.scheduler,i=e.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(i);if(n.length>0){var o=Math.max(0,n[0].time-r.now());this.schedule(e,o)}else this.unsubscribe(),t.active=!1},t.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},t.prototype.scheduleNotification=function(e){if(!0!==this.errored){var t=this.scheduler,n=new Du(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}},t.prototype._next=function(e){this.scheduleNotification(Pu.createNext(e))},t.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.scheduleNotification(Pu.createComplete()),this.unsubscribe()},t}(Gl),Du=function(){return function(e,t){this.time=e,this.notification=t}}();function Au(e,n){const r=Zo(),[i,o]=(0,t.useState)(e);return(0,t.useEffect)((()=>{let e;return n&&(e=r.pipelines.$typingSequence.pipe(function(e,t){var n=arguments.length>=2;return function(r){return r.pipe(e?lu((function(t,n){return e(t,n,r)})):Zl,hu(1),n?gu(t):wu((function(){return new su})))}}((e=>Boolean(e)&&!1===e.state)),Iu(1e3)).subscribe((()=>o(!1)))),()=>{e&&e.unsubscribe()}}),[r.pipelines.$typingSequence,n]),i}const ju=Ui.div`
  & + * {
    margin-top: ${e=>ko(e.theme.initial_vars.vertical_unit,1.75)};

    @media ${go} {
      margin-top: ${e=>ko(e.theme.initial_vars.vertical_unit,2.25)};
    }
  }
  &.MessageBubbleText {
    white-space: pre-wrap;
  }
`;function Ru({allowHTMLContent:e,text:n}){return e?t.createElement(ju,{className:"MessageBubbleText content ",dangerouslySetInnerHTML:{__html:ae.Z.bold(n)}}):t.createElement(ju,{className:"MessageBubbleText content "},n)}function Lu({children:e,classNames:n,message:r,showBubble:i,showText:o}){const{design:{message_shape:a}}=d();return i?t.createElement(Xc,{shape:a,classNames:n,isReverse:r.isAuthorUser,author:r.author},o&&r.messageText&&t.createElement(Ru,{allowHTMLContent:!r.isAuthorUser,text:r.messageText}),e):e}Ru.propTypes={allowHTMLContent:i().bool,text:i().string},Ru.defaultProps={allowHTMLContent:!1,text:""},Lu.propTypes={children:i().node,classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),message:i().object,showBubble:i().bool,showText:i().bool},Lu.defaultProps={children:null,classNames:["is-autoscroll-mutation-target"],message:{},showBubble:!0,showText:!1};function Fu({message:e,openModal:n}){return t.createElement(Lu,{message:e},t.createElement("div",{style:{width:e.url?300:null,maxWidth:"100%"}},e.url&&t.createElement(Bo,{figureStyle:{backgroundColor:"black",width:300,marginBottom:e.messageText?"1rem":null,maxWidth:"100%"},openModal:n,ratio:"16x9",src:e.url}),e.messageText&&t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.messageText}})))}Fu.propTypes={message:i().object,openModal:i().bool},Fu.defaultProps={message:{},openModal:!0};const zu=Ui(Qc)`
  padding: 0;
  box-shadow: none;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Safari Video Fix */
  &--isSafari .Media {
    object-fit: initial !important;
    border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
    border: 4px transparent solid;
  }
`;function Bu({classNames:e,shape:n,isReverse:r,isSafari:i,children:o}){return t.createElement(zu,{className:mo()(["MessageMediaBubble",r&&"is-reverse",`is-shape-${n}`,i&&"MessageMediaBubble--isSafari",...e])},o)}function Uu({message:e,classNames:n,children:r}){const{isSafari:i}=E,{design:{message_shape:o}}=d();return t.createElement(Bu,{shape:o,classNames:n,isReverse:e.isAuthorUser,isSafari:i},r)}Bu.propTypes={shape:i().string,classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),isReverse:i().bool,isSafari:i().bool,children:i().node},Bu.defaultProps={shape:Vn.SEMI,classNames:[],isReverse:!1,isSafari:!1,children:null},Uu.propTypes={message:i().object,classNames:i().arrayOf(i().string),children:i().node},Uu.defaultProps={message:{},classNames:["is-autoscroll-mutation-target"],children:null};const Wu=Ui.a`
  justify-content: flex-start;

  &.is-shape-rounded,
  &.is-shape-transparent {
    border-radius: ${Kc};
  }
`;function Vu({url:e}){const{setIsOpen:n,setSrc:r}=jo(),{design:{message_shape:i},text:o}=d(),a=fe.isSupportedDocumentType(e);return t.createElement("p",{className:"content is-marginless"},t.createElement(Wu,{className:mo()(["button",`is-shape-${i}`]),href:e||null,onClick:a&&!E.isIos?t=>{t.preventDefault(),r(e),n(!0)}:void 0,target:"_blank",rel:"noopener noreferrer"},t.createElement("span",{className:"icon pt-1 pl-1"},t.createElement(Hc,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",fillRule:null})),t.createElement("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"}},o.open_file)))}Vu.propTypes={url:i().string},Vu.defaultProps={url:""};const qu=Ui.video`
  max-height: 400px;
`;function Hu({url:e}){return t.createElement(qu,{controls:!0},t.createElement("source",{src:e,type:"video/mp4"}),t.createElement("source",{src:e,type:"video/ogg"}),t.createElement("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag.")}function $u({url:e}){return t.createElement("audio",{controls:!0},t.createElement("source",{src:e,type:"audio/ogg"}),t.createElement("source",{src:e,type:"audio/mpeg"}),t.createElement("source",{src:e,type:"audio/wav"}),"Your browser does not support the audio element.")}function Yu({message:e}){const n=fe.isSupportedVideoType(e.url),r=fe.isSupportedAudioType(e.url);return t.createElement(t.Fragment,null,n&&t.createElement(Uu,{message:e},t.createElement(Hu,{url:e.url})),r&&t.createElement($u,{url:e.url}),!n&&!r&&t.createElement(Lu,{message:e},t.createElement(Vu,{url:e.url})))}Hu.propTypes={url:i().string},Hu.defaultProps={url:""},$u.propTypes={url:i().string},$u.defaultProps={url:""},Yu.propTypes={message:i().object},Yu.defaultProps={message:{}};const Ku=Ui.iframe`
  border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;Ku.displayName="IframeStyled";function Gu(e){const[n,r]=(0,t.useState)(!1);return t.createElement("figure",{className:mo()({image:!0,[`is-${e.size}x${e.size}`]:!!e.size,[zo(e.ratio)]:!!e.ratio,[e.figureClassName]:!!e.figureClassName}),style:e.figureStyle},t.createElement(Ku,{allowFullScreen:!0,className:mo()({[e.className]:!!e.className,"is-rounded":e.rounded,"is-contain":e.contain,"has-loaded":n,"is-overlay":!0}),frameBorder:"0",onLoad:()=>r(!0),src:e.src,style:e.style,title:"lb-iframe",type:"text/html"}))}function Qu({message:e}){return t.createElement(Uu,{message:e},t.createElement(Gu,{src:e.getVideoUrl()}))}Gu.propTypes={className:i().string,contain:i().bool,figureClassName:i().string,figureStyle:i().object,ratio:i().string,rounded:i().bool,size:i().number,src:i().string.isRequired,style:i().object},Gu.defaultProps={className:"",contain:!1,figureClassName:"",figureStyle:{backgroundColor:"black",width:640,maxWidth:"100%"},ratio:"16x9",rounded:!1,size:null,style:{}},Qu.propTypes={message:i().object},Qu.defaultProps={message:{}};function Xu({message:e}){const n=`https://maps.googleapis.com/maps/api/staticmap?center=${e.latitude},${e.longitude}&size=600x300&zoom=15&markers=color:red%7C${e.latitude},${e.longitude}&key=AIzaSyCjznqz7l3S1OQcQNJDPkG2e8-LWgVFukc`,r=`https://www.google.com/maps/search/?api=1&query=${e.latitude},${e.longitude}`;return t.createElement(Lu,{message:e},t.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t.createElement(Bo,{figureStyle:{width:300,marginBottom:e.message?"1rem":null,maxWidth:"100%"},ratio:"16x9",src:n,style:{backgroundColor:"gray",borderRadius:4}})))}Xu.propTypes={message:i().object},Xu.defaultProps={message:{}};const Zu=Ui(Bo)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${e=>ko(e.theme.initial_vars.horizontal_unit,25)};
    max-height: ${e=>ko(e.theme.initial_vars.vertical_unit,25)};

    @media ${go} {
      max-width: ${e=>ko(e.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${e=>ko(e.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function Ju({url:e,openModal:n}){return t.createElement(Zu,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:n,src:e})}function ed({message:e,openModal:n}){return t.createElement(Uu,{message:e},e.url&&t.createElement(Ju,{openModal:n,url:e.url}))}function td({message:e}){const n=fe.isSupportedImageType(e.url);return"image"===e.media_type?n?t.createElement(ed,{message:e}):t.createElement(Yu,{message:e}):"iframe"===e.media_type?t.createElement(Qu,{message:e}):null}Ju.propTypes={url:i().string,openModal:i().bool},Ju.defaultProps={url:"",openModal:!0},ed.propTypes={message:i().object,openModal:i().bool},ed.defaultProps={message:{},openModal:!0},td.propTypes={message:i().object},td.defaultProps={message:{}};function nd({message:e}){return t.createElement(Lu,{message:e},t.createElement("div",{style:{width:300,maxWidth:"100%"}},e.urls.filter(Boolean).map(((e,n,r)=>t.createElement(Bo,{figureStyle:{width:300,marginBottom:n!==r.length-1?3:null,maxWidth:"100%"},openModal:!0,ratio:"16x9",src:e,style:{backgroundColor:"gray",borderRadius:4}})))))}function rd({message:e}){return t.createElement(Lu,{message:e,showText:!0})}function id(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function od(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?id(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):id(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}nd.propTypes={message:i().object},nd.defaultProps={message:{}},rd.propTypes={message:i().object},rd.defaultProps={message:{}};const ad=(e,t)=>e.replace(/\{timeout\}/i,t);function sd({message:e}){const n=Zo(),{url:r,evaluate:i}=e,o=ie()(e,"extra.redirect.timeout",3),a={message:e.messageText,timeout:o,redirectionURL:ae.Z.getHref(r)},{startRedirect:s,stopRedirect:l,timeMessage:c}=function({message:e,timeout:n,redirectionURL:r}){const[i,o]=(0,t.useState)(n),[a,s]=(0,t.useState)(!1),[l,c]=(0,t.useState)(ad(e,i)),u=(0,t.useCallback)((()=>{s(!1)}),[]),d=(0,t.useCallback)((()=>{o(n),s(!0)}),[n]);return(0,t.useEffect)((()=>{a&&i>0&&setTimeout((()=>{o((e=>e-1))}),1e3)}),[a,i]),(0,t.useEffect)((()=>{0===i&&(u(),window.location.href=r),c(ad(e,i))}),[i,r,e,u,d]),{startRedirect:d,stopRedirect:u,timeMessage:l}}(a);return(0,t.useEffect)((()=>{i&&(s(),n.events.once(aa,l))}),[i,n.events,s,l]),t.createElement(rd,{message:od(od({},e),{},{messageText:c})})}sd.propTypes={message:i().object},sd.defaultProps={message:{}};const ld={facebook:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"}))),twitter:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}))),linkedin:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"}))),whatsapp:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"})))},cd={facebook:"#3b5998",twitter:"#1da1f2",linkedin:"#2E77B0",whatsapp:"#0DC143"},ud=({className:e,href:n,type:r,label:i})=>t.createElement("a",{className:mo()({button:!0,"social-button":!0,[e]:!!e}),href:n,style:{backgroundColor:cd[r],color:"white"},target:"_blank",rel:"noopener noreferrer"},ld[r],t.createElement("span",{className:"social-button-label "},i));ud.propTypes={className:i().string,href:i().string,type:i().string,label:i().string},ud.defaultProps={className:"",href:"",type:"",label:""};const dd=Ui(ud)`
  display: inline-flex;
  padding: 8px 10px;
  font-size: 0.75rem;

  .social-button-label {
    padding-top: 2px;
  }
`;function fd({message:e}){const n=ae.Z.getReferralUrl(ae.Z.getHref(ie()(e.raw,"extra.socialUrl")),e.description),r=t.createElement("p",{className:"buttons"},t.createElement(dd,{type:"facebook",href:n.facebook,label:"Facebook"}),t.createElement(dd,{type:"twitter",href:n.twitter,label:"Twitter"}),t.createElement(dd,{type:"linkedin",href:n.linkedin,label:"LinkedIN"}),t.createElement(dd,{type:"whatsapp",href:n.whatsapp,label:"Whatsapp"}));return t.createElement(t.Fragment,null,e.messageText&&(e.rich_text?t.createElement("p",{className:"content is-marginless",style:{marginBottom:10},dangerouslySetInnerHTML:{__html:e.rich_text}}):t.createElement("p",{style:{marginBottom:10}},e.title||e.message)),r)}function pd({message:e}){return t.createElement(Lu,{message:e},t.createElement(fd,{message:e}))}function hd(e){return t.createElement("input",{className:mo()({[e.className]:!!e.className,input:!0,"u-no-border":e.hasNoBorder,"js-auto-focus":e.hasAutofocus}),max:e.max,min:e.min,minLength:e.minLength,maxLength:e.maxLength,name:e.name,onBlur:e.onBlur,onChange:t=>e.onChange(t.target.value),onClick:e.onClick,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,pattern:e.pattern,placeholder:e.placeholder,ref:e.inputRef,required:e.required,type:e.type,value:e.value,defaultValue:e.defaultValue})}function md({message:e}){const{text:n}=d();return t.createElement(Lu,{message:e},t.createElement("div",null,e.rich_text&&t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.rich_text}}),!e.rich_text&&t.createElement("p",null,e.title||e.message),t.createElement(hd,{name:"email",type:"email",placeholder:oe.getFieldPlaceholder({message:e.message,text:n})})))}fd.propTypes={message:i().object},fd.defaultProps={message:{}},pd.propTypes={message:i().object},pd.defaultProps={message:{}},hd.propTypes={className:i().string,max:i().any,min:i().any,minLength:i().any,maxLength:i().any,name:i().string,onBlur:i().func,onChange:i().func,onClick:i().func,onFocus:i().func,onKeyDown:i().func,onKeyUp:i().func,pattern:i().string,placeholder:i().string,inputRef:i().object,required:i().bool,type:i().string,value:i().string,defaultValue:i().string,hasAutofocus:i().bool,hasNoBorder:i().bool},hd.defaultProps={className:"",max:null,min:null,minLength:null,maxLength:null,name:null,onBlur:()=>{},onClick:()=>{},onChange:()=>{},onFocus:()=>{},onKeyDown:()=>{},onKeyUp:()=>{},pattern:null,placeholder:null,inputRef:null,required:!1,type:"text",value:void 0,defaultValue:void 0,hasAutofocus:!1,hasNoBorder:!1},md.propTypes={message:i().object},md.defaultProps={message:{}};const bd=t.createContext({isSubmitted:!1,setIsSubmitted:()=>{}}),{Provider:gd}=bd,vd=()=>(0,t.useContext)(bd);var yd=__webpack_require__(4631),wd=__webpack_require__.n(yd);const _d=Ui.form`
  width: 100%;
  @media ${go} {
    width: calc(100% - ${e=>e.theme.margin_left});
  }

  .input {
    width: 100%;
  }

  .dropdown-item:hover,
  .dropdown-item.is-active {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .input,
  .dropdown-menu,
  .dropdown-item {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }

  .dropdown-item:hover,
  .dropdown-item.is-active {
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
  }
`,kd=Ui.div`
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.2);
  overflow: auto;
  margin-bottom: 30px;
  border-radius: 4px;
  width: calc(100% - 30px);
  padding: 0;
  max-width: 400px;
  max-height: 250px;
  bottom: 32px;
  top: initial;
`,xd=Ui.div`
  padding: 0;
  border: hidden;
  min-width: 100%;
  box-shadow: none;
  overflow: hidden;
  border-radius: 0;
`,Ed=Ui.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px !important;
  cursor: pointer;
  padding: 0 20px;
  min-height: 50px;
  border: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 0;

  .DropdownItem__Content {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
  }

  .DropdownItem__Attachment {
    width: 40px;
    height: 100%;
    font-size: 34px;
    margin-right: 10px;

    .image,
    .image img {
      width: 100%;
      height: 100%;
    }
  }

  &.dropdown-item .DropdownItem__Content .DropdownItem__Attachment .icon {
    width: 40px;
  }

  &.dropdown-item.is-active .DropdownItem__Attachment .icon {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }
`;function Sd({value:e,options:n,onKeyDown:r,placeholder:i,onSubmit:o,setValue:a,onChange:s,hasAutofocus:l,autoHighlight:c}){const u=(0,t.useRef)(null),f=h(),{text:p}=d(),m=(e,t)=>ce()(e.label.toLowerCase(),t.toLowerCase());return t.createElement("div",{ref:u},t.createElement(wd(),{getItemValue:e=>e.label,inputProps:{className:mo()({input:!0,"js-auto-focus":l}),onKeyDown:e=>r(e),placeholder:i},items:n,onChange:e=>{const t=e.target.value;a(t),s(t)},onSelect:e=>{a(e),s(e)},onSubmit:o,placeholder:i,renderItem:(e,n)=>t.createElement(Ed,{as:"button",type:"button",key:e.payload,className:mo()({"dropdown-item is-size-6":!0,"is-active":n})},t.createElement("div",{className:"DropdownItem__Content"},null!==e.attachment.type&&t.createElement("span",{className:"DropdownItem__Attachment"},(({type:e,value:n})=>{let r="";switch(e){case"icon":r=t.createElement("span",{className:mo()({"icon fi is-marginless":!0,[n]:!0," is-size-3":!0})});break;case"emoji":r=t.createElement("span",{className:"icon is-marginless is-size-3"},n);break;case"image":r=t.createElement(Bo,{src:n})}return r})(e.attachment)),t.createElement("span",{className:"DropdownItem__Label"},e.label))),renderMenu:(e,r)=>n.some((e=>m(e,r)))?t.createElement(kd,{className:"dropdown-menu is-block",role:"menu"},t.createElement(xd,{className:"dropdown-content"},e)):t.createElement(kd,{className:"dropdown-menu is-block",role:"menu",style:{bottom:"100%",top:"auto",overflow:"auto"}},t.createElement(xd,{className:"dropdown-content"},t.createElement(Ed,{as:"span",className:"dropdown-item is-size-6 is-active"},p.no_results_found))),shouldItemRender:m,value:e,wrapperStyle:{display:"block",position:"relative"},autoHighlight:c,onMenuVisibilityChange:e=>{u.current&&ae.Z.getElementOffset(u.current).top<350&&f.setConfig({header_hidden:e})}}))}function Cd(e){return t.createElement("div",{className:mo()("field",e.className)},e.children)}function Td(e){return t.createElement("div",{className:mo()("control",e.className)},e.children)}Sd.propTypes={onChange:i().func,onKeyDown:i().func,onSubmit:i().func,setValue:i().func,options:i().arrayOf(i().shape({label:i().string,payload:i().string,attachment:i().shape({type:i().string,value:i().string})})),placeholder:i().string,value:i().string,hasAutofocus:i().bool,autoHighlight:i().bool},Sd.defaultProps={onChange:()=>{},onKeyDown:()=>{},onSubmit:()=>{},setValue:()=>{},options:[],placeholder:"",value:"",hasAutofocus:!1,autoHighlight:!1},Cd.propTypes={className:i().string,children:i().any},Cd.defaultProps={className:"",children:null},Td.propTypes={className:i().string,children:i().any},Td.defaultProps={className:"",children:null};var Od=()=>{const{text:e}=d();return t.createElement("div",{className:"InputSearchButton icon is-right",style:{width:"96px"}},t.createElement(Uc,null),t.createElement("span",{className:"InputSearchButton__Text is-uppercase",style:{color:"var(--form_inputs_border_color)",fontSize:"11px"}},e.search))};const Pd=Ui.button`
  width: 60px !important;
  pointer-events: auto !important;
  opacity: 1;

  > * {
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
  }

  @media ${yo} {
    width: 42px !important;
    transform: scale(0.85);
    margin-right: 7px;
    padding-right: 0;
  }
}
`;function Id({onClick:e,disabled:n,children:r,hasError:i}){let o;return o=r||(i?t.createElement("span",{role:"img","aria-label":"⚠️",className:"is-size-4"},"⚠️"):t.createElement(Wc,null)),t.createElement(Pd,{type:"button",className:"input-icon-send-button button is-text icon is-right",onClick:e,disabled:n||i},o)}Id.propTypes={onClick:i().func,disabled:i().bool,children:i().node,hasError:i().bool},Id.defaultProps={onClick:()=>{},disabled:!1,children:null,hasError:!1};const Nd=Ui.p`
  color: ${({theme:e})=>e.design.form_help_color};
  margin-top: 4px;
`;function Md({children:e,isMinimalMobile:n}){return t.createElement(Nd,{className:mo()({"input-help-text is-size-7 is-unselectable":!0,"is-hidden-mobile":n})},e)}Md.propTypes={children:i().node.isRequired,isMinimalMobile:i().bool},Md.defaultProps={isMinimalMobile:!0};const Dd=Ui.p`
  color: ${({theme:e})=>e.design.message_color_bot};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 8px;
`;function Ad({children:e,isMinimalMobile:n}){return t.createElement(Dd,{className:mo()({"input-label-text is-size-16 is-unselectable":!0,"is-hidden-mobile":n})},e)}Ad.propTypes={children:i().node.isRequired,isMinimalMobile:i().bool},Ad.defaultProps={isMinimalMobile:!0};const jd=Ui(ga)`
  padding: 12px 45px;
`;function Rd({onClick:e,disabled:n,children:r}){return t.createElement(jd,{type:"submit",className:"input-send-button is-size-6 has-text-weight-bold",onClick:e,disabled:n},r)}Rd.propTypes={onClick:i().func,disabled:i().bool,children:i().node},Rd.defaultProps={onClick:()=>{},disabled:!1,children:"Send"};const Ld=Ui.p`
  bottom: -22px;
  left: 0;
  position: absolute;
  border-radius: 2px;
  color: ${({theme:e})=>e.design.form_help_color};
`,Fd=Ui.span`
  border-width: 2px;
  border-style: none;
  min-width: 60px;
  border-color: ${({theme:e})=>e.design.form_inputs_border_color};
`,zd=({hasSearchButton:e,value:n,onSubmit:r,error:i})=>e&&""===n?t.createElement(Od,null):t.createElement(Id,{disabled:""===n,hasError:!!i,onClick:r});zd.propTypes={onSubmit:i().func,value:i().any,error:i().string,hasSearchButton:i().bool},zd.defaultProps={onSubmit:()=>{},value:null,error:"",hasSearchButton:!1};const Bd=e=>t.createElement("form",e);function Ud({children:e,className:n,error:r,help:i,hasNoBorder:o,hasSearchButton:a,isMinimalMobile:s,isAnimateMessagesOn:l,label:c,onSubmit:u,prefix:d,renderAs:f,sendButtonType:p,sendLabel:h,value:m}){const b=f||Bd;return t.createElement(b,{className:mo()({[n]:!!n,"u-no-border":o,"is-animate-messages-on":l}),onSubmit:e=>e.preventDefault()},r.length>0&&t.createElement(Ld,{className:"input-error-message is-uppercase is-unselectable is-size-7 has-text-weight-bold"},r),c&&t.createElement(Ad,{isMinimalMobile:s},c),t.createElement(Cd,{className:"has-addons is-marginless"},d&&t.createElement(Td,null,t.createElement(Fd,{className:"button is-static has-text-weight-bold input-prefix"},d)),t.createElement(Td,{className:mo()({"is-expanded":!0,"has-icons-right":"inline"===p})},e,"inline"===p&&t.createElement(zd,{hasSearchButton:a,value:m,onSubmit:u,error:r}))),i&&!r&&t.createElement(Md,{isMinimalMobile:s},i),"button"===p&&t.createElement(Cd,{className:"mt-5"},t.createElement(Td,null,t.createElement(Rd,{disabled:""===m,onClick:u},h))))}function Wd({bubbleClassName:e,children:n,className:r,hasAutofocus:i,hasNoBorder:o,hasSearchButton:a,helpText:s,message:l,onSubmit:c,prefix:u,renderAs:f,sendButtonType:p,selectedValue:h,showBubble:m,submitOnEnter:b,validate:g}){const{error:v,setValue:y,value:w}=function(e,n=""){const[r,i]=(0,t.useState)(""),[o,a]=(0,t.useState)("");return(0,t.useEffect)((()=>{const t=e?e(r):"";a(t)}),[r,e]),(0,t.useEffect)((()=>{i(n)}),[n]),{error:o,setValue:i,value:r}}(g,h||l.default),{text:_}=d(),[k,x]=(0,t.useState)(!1),{has_messages_animation_on:E}=au(),S=(0,t.useCallback)((()=>{""===v&&c({type:"text",message:w})}),[v,w,c]);(0,t.useEffect)((()=>(k&&S(),()=>{x(!1)})),[k,S]);const C={name:l.name,onChange:e=>y(e),onSubmit:S,value:w,hasAutofocus:i,hasNoBorder:!1,required:!!l.required};return b&&(C.onKeyDown=e=>{13===(e.keyCode||e.which)&&(e.preventDefault(),w&&setTimeout((()=>{x(!0)})))}),t.isValidElement(n)&&!n.props.placeholder&&(C.placeholder=l&&l.getPlaceholder(_)),t.createElement(Lu,{className:e,message:l,showBubble:m&&!l.isInsideForm,showText:!0},t.createElement(Ud,{className:r,error:v,hasNoBorder:o,hasSearchButton:a,help:l.help||(null!==s||l.isInsideForm?s:_.input_text_help),isAnimateMessagesOn:E,isMinimalMobile:!l.isInsideForm,label:l.label,onSubmit:S,prefix:u,renderAs:f,sendButtonType:p,sendLabel:_.send,value:w},t.cloneElement(n,C)))}Ud.propTypes={className:i().string,help:i().oneOfType([i().element,i().string]),isMinimalMobile:i().bool,sendLabel:i().string,label:i().string,onSubmit:i().func,value:i().any,children:i().node.isRequired,hasNoBorder:i().bool,error:i().string,prefix:i().string,hasSearchButton:i().bool,isAnimateMessagesOn:i().bool,renderAs:i().any,sendButtonType:i().string},Ud.defaultProps={className:"",help:"",isMinimalMobile:!0,label:"",sendLabel:"Send",onSubmit:()=>{},value:null,hasNoBorder:!1,error:"",prefix:null,hasSearchButton:!1,isAnimateMessagesOn:!0,renderAs:null,sendButtonType:"inline"},Wd.propTypes={bubbleClassName:i().string,children:i().node.isRequired,className:i().string,hasAutofocus:i().bool,hasNoBorder:i().bool,hasSearchButton:i().bool,helpText:i().string,label:i().string,message:i().object,onSubmit:i().func,prefix:i().string,renderAs:i().any,selectedValue:i().string,sendButtonType:i().string,showBubble:i().bool,submitOnEnter:i().bool,validate:i().func},Wd.defaultProps={bubbleClassName:"",className:"",label:null,hasNoBorder:!1,hasAutofocus:!0,hasSearchButton:!1,helpText:null,prefix:null,message:null,onSubmit:()=>{},submitOnEnter:!0,selectedValue:"",sendButtonType:"inline",showBubble:!0,renderAs:null,validate:null};const Vd=({hasNoBorder:e,message:t,onSubmit:n,sendButtonType:r})=>({hasNoBorder:e,message:t,onSubmit:n,sendButtonType:t.isInsideForm?null:r});function qd(e){const{text:n}=d(),r=e.message.getAutocompleteOptions();return t.createElement(Wd,Po({className:"InputAutocomplete",renderAs:_d},Vd(e),{hasAutofocus:!1,hasSearchButton:!0,onSubmit:({message:t})=>{const n=e.message.mustMatchSuggestion?null:t,i=oe.getPayloadFromOptions(t,r,n);null!==i&&e.onSubmit({type:"button",message:t,payload:i})},showBubble:!1}),t.createElement(Sd,{autoHighlight:e.message.mustMatchSuggestion,help:n.input_autocomplete_help,options:r,placeholder:n.autocomplete_input_placeholder}))}qd.propTypes={message:i().object,onSubmit:i().func},qd.defaultProps={message:null,onSubmit:()=>{}};const Hd=({children:e})=>t.createElement("span",{className:"icon is-marginless is-size-1"},e);Hd.propTypes={children:i().string},Hd.defaultProps={children:""};const $d=({icon:e,isBig:n})=>t.createElement("span",{className:mo()({"icon fi is-marginless":!0,[e]:!0,"is-size-3":n})});$d.propTypes={icon:i().string,isBig:i().bool},$d.defaultProps={icon:"",isBig:!1};function Yd({data:e,className:n,onClick:r,isAnimated:i,isDirectionColumn:o,isDisabled:a}){const{label:s}=e,l=e.href&&ae.Z.getHref(e.href),[c,u]=(0,t.useState)(!1),d=ie()(e,"attachment.type"),f=ie()(e,"attachment.value"),p="icon"===d,h="image"===d,m="emoji"===d,b=!!l;return t.createElement(ba,{isAnchor:b,href:l,isDisabled:c||a,className:mo()({"input-button":!0,[n]:!!n,"u-white-space-normal":!0,"is-image-button":h,"is-icon-button":p,"is-emoji-button":m,"is-flex-direction-column":o,"u-fullwidth":!o,"is-animated":i}),onClick:t=>{r(e),u(!0)}},p&&t.createElement($d,{icon:f,isBig:!0}),m&&t.createElement(Hd,null,f),h&&t.createElement(Bo,{src:f}),t.createElement("span",{className:"input-button-label",dangerouslySetInnerHTML:{__html:`${ae.Z.bold(ae.Z.escapeHTML(s))} ${b?'<ButtonIcon icon="chains" />':""}`}}))}Yd.propTypes={data:i().object,className:i().string,onClick:i().func,isAnimated:i().bool,isDirectionColumn:i().bool,isDisabled:i().bool},Yd.defaultProps={data:{},className:"",onClick:()=>{},isAnimated:!1,isDirectionColumn:!1,isDisabled:!1};var Kd=(e=>Ui(e)`
  width: calc(50% - 0.5rem);
  transition: box-shadow 0.1s linear;

  @media ${vo} {
    width: calc(33% - 0.5rem);

    &.is-four-cols {
      span.icon {
        font-size: 2rem !important;
      }
      width: calc(25% - 0.5rem);
    }
  }

  &.is-image-button {
    overflow: hidden;
    padding: 0 0 14px 0;
    position: relative;

    .image {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      margin: 0;
    }

    .image .Media {
      transform: scale(1);
      transition: transform 0.2s;
    }

    &:hover .image .Media {
      transform: scale(1.1);
    }

    .input-button-label {
      display: flex;
      position: absolute;
      align-items: center;
    }
  }

  /* Button with image
     Layout horizontal, button content vertical */
  &.is-image-button:not(.is-flex-direction-column) {
    height: 65px;
    max-width: 400px;

    .image {
      display: flex;
      align-items: center;
      width: 100px;
      height: 100%;
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }

    .input-button-label {
      justify-content: flex-start;
      padding-left: 39px;
      top: 0;
      left: 100px;
      width: 100%;
      max-width: 300px;
      height: 100%;
    }
  }

  /* Button with image
     Layout vertical, button content horizontal */
  &.is-image-button.is-flex-direction-column {
    height: 160px;

    .image {
      width: 100%;
      height: 100px;
      border-top-right-radius: $radius;
    }

    .input-button-label {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      justify-content: center;
    }
  }

  /* Button with icon/emoji
     Layout horizontal, button content vertical */
  &.is-icon-button:not(.is-flex-direction-column),
  &.is-emoji-button:not(.is-flex-direction-column) {
    height: 84px;

    .icon {
      padding: 0 37px;
    }

    .input-button-label {
      text-align: left;
    }
  }

  .input-button-label {
    width: 100%;

    .chains {
      margin-left: $horizontal-unit;
    }
  }
`)(Yd);const Gd=Ui.p`
  margin-bottom: ${({theme:{initial_vars:{vertical_unit:{qty:e,unit:t}}}})=>String(1.5*e)+t};
  color: ${({theme:e})=>e.design.form_help_color};
`;function Qd({children:e}){return t.createElement(Gd,{className:"input-small-header is-size-7 is-uppercase is-unselectable"},e)}Qd.propTypes={children:i().node.isRequired};const Xd=t.forwardRef(((e,n)=>t.createElement(No,Po({},e,{ref:n,className:mo()({[e.className]:!!e.className,"input-buttons":!0})}))));Xd.propTypes={className:i().string},Xd.defaultProps={className:""};var Zd=Ui(Xd)`
  align-items: stretch;

  .input-button {
    color: ${({theme:e})=>e.design.form_buttons_color};
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
    border-color: ${({theme:e})=>e.design.form_buttons_border_color};
  }

  .input-button.is-multiple {
    color: ${({theme:e})=>e.design.message_color_bot};
    background-color: ${({theme:e})=>e.design.message_background_color_bot};
    border-color: transparent;

    &.is-selected {
      color: ${({theme:e})=>e.design.form_buttons_color};
      background-color: ${({theme:e})=>e.design.form_buttons_background_color};
      border-color: ${({theme:e})=>e.design.form_buttons_border_color};
      box-shadow: 0 6px 21px -11px rgba(0, 0, 0, 0.29),
        0 13px 17px -16px rgba(47, 49, 72, 0.3);
    }
  }

  &.has-vertical-scroll {
    max-height: 180px;
    overflow-y: auto;

    @media ${go} {
      max-height: 300px;
    }
  }

  &.is-layout-vertical .input-button {
    max-width: 500px;
    margin: 0 0 3px 0;
  }
`;const Jd=Ui.div`
  margin-top: ${e=>xo(e.theme.initial_vars.vertical_unit,4)};

  @media ${go} {
    margin: ${e=>xo(e.theme.initial_vars.vertical_unit,4)}
      auto 0 0;
  }

  @media ${yo} {
    .has-margin-left {
      margin-left: calc(${e=>e.theme.avatar.mobile_width} + ${e=>ko(e.theme.initial_vars.horizontal_unit)})};
    }
  }

  /* Buttons with search input
     Input and input icon styles */
  .control.has-icons-right {
    .icon.is-right {
      right: 15px;
    }
  }

  .field .control input {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }

  .InputButtons .button svg path,
  .InputButtons .custom-button svg path,
  .InputButtons .input-button svg path {
    fill: ${({theme:e})=>e.design.form_buttons_color};
  }
`;function ef({help:e,buttons:n,alignment:r,buttonsRef:i,onSubmit:o,searchInput:a,isAnimated:s}){return t.createElement(Jd,{className:"InputButtons"},n.length>1&&t.createElement(Qd,null,e),a&&t.createElement("div",{className:"field has-addons"},a),t.createElement(Zd,{className:mo()({"is-layout-vertical":"vertical"===r,"has-vertical-scroll":!!a,"has-margin-left":"vertical"!==r&&1===n.length}),ref:i},n.map((e=>t.createElement(Kd,{key:e.payload,onClick:o,data:e,isAnimated:s,isDirectionColumn:"horizontal"===r,className:mo()({"is-four-cols":n.length>=4})})))))}function tf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nf(n){let{buttons:r,children:i,defaultResults:o}=n,a=Fc(n,["buttons","children","defaultResults"]);const s=(0,t.useRef)(null),[l,c]=(0,t.useState)(!1),{has_buttons_animation_on:u}=au();return(0,t.useEffect)((()=>{if(!u||!r||!s.current||l)return()=>{};const e=Array.from(s.current.querySelectorAll(".is-animated"));return ml({targets:e,translateY:[20,0],opacity:[0,1],delay:ml.stagger(120,{from:"first"}),duration:300,easing:"easeInOutSine",complete(){c(!0)}}),()=>{ml.remove(e)}}),[r,l,u]),t.cloneElement(i,function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?tf(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tf(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({buttons:r,buttonsRef:s,isAnimated:!l&&!1!==u},a))}function rf({onSubmit:e,animateOnSubmit:n,message:r}){const i=t=>{e({type:"button",message:t.label,payload:t.payload})},{text:o}=d(),a=(0,t.useMemo)((()=>r.getButtons()),[r]);return t.createElement(nf,{buttons:a},t.createElement(ef,{alignment:r.buttonsAlignment,onSubmit:e=>{n?(e=>{ml({targets:[".InputInline .input-buttons .input-button"],translateY:[0,20],opacity:[1,0],duration:300,easing:"easeInOutSine",complete:()=>{i(e)}})})(e):i(e)},help:o.input_menu_help}))}ef.propTypes={alignment:i().oneOf(["horizontal","vertical"]),buttons:i().arrayOf(i().shape({label:i().string,payload:i().string,attachment:i().shape({type:i().string,value:i().string}),href:i().string})),help:i().string,buttonsRef:i().object,onSubmit:i().func,searchInput:i().node,isAnimated:i().bool},ef.defaultProps={alignment:"horizontal",buttons:[],help:"",buttonsRef:null,onSubmit:()=>{},searchInput:null,isAnimated:!1},nf.propTypes={children:i().object.isRequired,buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),defaultResults:i().bool},nf.defaultProps={buttons:[],defaultResults:!0},rf.propTypes={message:i().object,onSubmit:i().func,animateOnSubmit:i().bool},rf.defaultProps={message:null,onSubmit:()=>{},animateOnSubmit:!1};const of=Ui.div`
  ${e=>e.searchInput&&"\n  max-width: 100%;\n  "}

  .buttons-container-full-width {
    margin-bottom: 32px;

    .button,
    .input-button {
      padding: 20px;
      text-align: left;
      width: calc(50% - 0.5rem);
    }
  }
`;function af({searchInput:e,help:n,buttons:r,onChange:i,disabled:o,onSubmit:a,sendLabel:s,isAnimated:l,buttonsRef:c,alignment:u}){return t.createElement(of,{className:mo()({InputButtonsMultiple:!e,InputButtonsMultiSearch:!!e}),searchInput:e},r.length>1&&t.createElement(Qd,null,n),e&&t.createElement("div",{className:"field has-addons "},e),r.length>0&&t.createElement(Zd,{className:mo()({"is-layout-vertical":"vertical"===u,"has-vertical-scroll":!!e}),ref:c},r.map((e=>t.createElement(Kd,{key:e.payload,isAnimated:l,isDisabled:e.isDisabled,data:e,isDirectionColumn:"horizontal"===u,className:mo()({"is-multiple":!0,"is-selected":e.isSelected,"is-four-cols":r.length>=4}),onClick:e=>i(e,!e.isSelected)})))),t.createElement("div",{className:"field is-marginless"},t.createElement(Rd,{disabled:o,onClick:a},s)))}function sf({onChange:e,placeholder:n,value:r}){return t.createElement("div",{className:"control is-expanded has-icons-right"},t.createElement("input",{className:"input js-auto-focus",onChange:e,placeholder:n,type:"search",value:r}),t.createElement("div",{className:"icon is-right"},t.createElement(Uc,null)))}function lf({buttons:e,children:n}){const{text:r}=d(),[i,o]=(0,t.useState)(""),[a,s]=(0,t.useState)([]);(0,t.useEffect)((()=>{s(e.filter((e=>!i||(e.label.toLowerCase().indexOf(i.toLowerCase())>-1||e.isSelected))))}),[i,e]);const l={buttons:a,searchInput:t.createElement(sf,{onChange:e=>o(e.target.value),placeholder:r.input_instant_search_help||"Filter the options",value:i})};return t.cloneElement(n,l)}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function uf(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?cf(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):cf(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function df({message:e,onSubmit:n,hasSearch:r}){const{text:o}=d(),a=(0,t.useMemo)((()=>e.getButtons()),[e]),[s,l,c]=(0,t.useMemo)((()=>{let t=1,n=a.length,r=o.input_multi_help;return e.buttonsMinOptions&&Number(e.buttonsMinOptions)<=n&&(t=Number(e.buttonsMinOptions)),e.buttonsMaxOptions&&Number(e.buttonsMaxOptions)>0&&(n=Number(e.buttonsMaxOptions)),r=o.input_multi_range_help.replace("@min_options",t).replace("@max_options",99===n?a.length:n),[t,n,r]}),[a,e,o]),[u,f]=(0,t.useState)([]),p=a.map((e=>{const t=ce()(u,e.payload);return uf(uf({},e),{},{isSelected:t,isDisabled:!t&&u.length===l})})),h=(e,t)=>{if(t&&u.length===l)return;const n=new Set(u);t?n.add(e.payload):n.delete(e.payload),f(Array.from(n))},m=({buttons:r,searchInput:i,isAnimated:a,buttonsRef:l})=>t.createElement(af,{alignment:e.buttonsAlignment,buttons:r,searchInput:i,disabled:u.length<s,help:c,onChange:h,onSubmit:()=>n({type:"structured_data",message:u.map((e=>p.find((t=>t.payload===e)))).map((e=>e.label)).join(", "),data:{items:u.map((e=>p.find((t=>t.payload===e)))).map((e=>e.label))}}),sendLabel:o.send,isAnimated:a,buttonsRef:l});return m.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),searchInput:i().node,isAnimated:i().bool,buttonsRef:i().object},m.defaultProps={buttons:[],searchInput:null,isAnimated:!1,buttonsRef:null},r?t.createElement(lf,{buttons:p},t.createElement(nf,null,t.createElement(m,null))):t.createElement(nf,{buttons:p},t.createElement(m,null))}function ff({message:e,onSubmit:n}){const{text:r}=d(),i=(0,t.useMemo)((()=>e.getButtons()),[e]);return t.createElement(lf,{buttons:i},t.createElement(nf,null,t.createElement(ef,{alignment:e.buttonsAlignment,onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help})))}function pf({message:e,onSubmit:n}){return t.createElement(df,{message:e,onSubmit:n,hasSearch:!0})}af.propTypes={alignment:i().oneOf(["horizontal","vertical"]),buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),disabled:i().bool,help:i().string,onChange:i().func,onSubmit:i().func,sendLabel:i().string,searchInput:i().node,isAnimated:i().bool,buttonsRef:i().object},af.defaultProps={alignment:"horizontal",buttons:[],disabled:!1,help:"",onChange:()=>{},onSubmit:()=>{},sendLabel:"Send",searchInput:null,isAnimated:!1,buttonsRef:null},sf.propTypes={onChange:i().func,placeholder:i().string,value:i().string},sf.defaultProps={onChange:()=>{},placeholder:"",value:""},lf.propTypes={children:i().object.isRequired,buttons:i().arrayOf(i().shape({label:i().string,payload:i().string}))},lf.defaultProps={buttons:[]},df.propTypes={message:i().object,onSubmit:i().func,hasSearch:i().bool},df.defaultProps={message:null,onSubmit:()=>{},hasSearch:!1},ff.propTypes={message:i().object,onSubmit:i().func},ff.defaultProps={message:null,onSubmit:()=>{}},pf.propTypes={message:i().object,onSubmit:i().func},pf.defaultProps={message:i().object,onSubmit:()=>{}};var hf=__webpack_require__(6066);const mf=e=>t.createElement("button",{className:mo()(["button InputCards__Arrow",e.isPrev?"InputCards__ArrowPrev":"InputCards__ArrowNext"]),"data-label":e.isPrev?"":e.nextText,type:"button",onClick:e.onClick},t.createElement("span",{className:"icon"},t.createElement(qc,null)));mf.propTypes={onClick:i().func,isPrev:i().bool,nextText:i().string},mf.defaultProps={onClick:()=>{},isPrev:!1,nextText:"Next"};var bf=mf;var gf=Ui.div`
  .InputCards__Slider {
    max-width: 100%;
  }

  .slick-slide {
    transform-origin: left;
    width: ${e=>e.theme.input_cards.card_width};
  }

  .InputCards__Arrow {
    position: absolute;
    top: calc(
      (${e=>e.theme.input_cards.card_height} / 2) -
        (${e=>e.theme.input_cards.button_size} / 2)
    );
    z-index: 1;
    border-radius: calc(var(--border_radius) * 0.1rem);
  }

  .InputCards__ArrowPrev {
    left: calc(
      50% -
        (
          (${e=>e.theme.input_cards.card_width} / 2) +
            (${e=>e.theme.input_cards.button_size} / 2)
        )
    );
    @media ${go} {
      left: calc(-1 * (${e=>e.theme.input_cards.button_size} / 2));
    }
  }

  .InputCards__ArrowNext {
    left: calc(
      50% +
        (
          (${e=>e.theme.input_cards.card_width} / 2) -
            (${e=>e.theme.input_cards.button_size} / 2)
        )
    );

    @media ${go} {
      right: initial;
      left: calc(
        (${e=>e.theme.input_cards.card_width}) -
          (${e=>e.theme.input_cards.button_size})
      );
    }

    svg {
      transform: rotate(180deg);
    }
  }

  .InputCards__ArrowNext::before {
    display: none;
    content: attr(data-label);
    margin-right: 26px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;

    @media ${go} {
      display: inherit;
    }
  }

  a.InputCards__Slide:not(.button):not(.tag):not(.dropdown-item) {
    text-decoration: none;
  }

  .InputCards__Slide .card {
    display: flex;
    justify-content: left;
    position: relative;
    background-color: initial;
    box-shadow: none;
    height: 100%;
    margin: 0 auto;
    max-width: ${e=>e.theme.input_cards.card_width};
  }

  .card .button,
  .card .custom-button,
  .card .input-button {
    @media ${go} {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  .slick-current .card:hover .button,
  .slick-current .card:hover .custom-button,
  .slick-current .card:hover .input-button {
    @media ${go} {
      opacity: 1;
    }
  }

  .card-image {
    width: ${e=>e.theme.input_cards.card_width};
    height: ${e=>e.theme.input_cards.card_height};
    background-size: cover;
    background-position: center;
    border-radius: 0.25rem;
    overflow: hidden;
    margin: auto;
  }
  .card-image-active-background {
    transition: opacity 200ms;
  }

  .InputCards__SlideInfo {
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .InputCards__SlideInfoContent {
    padding: 33px 30px 10px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1) 57%,
      transparent
    );
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .InputCards__CardDescription {
    color: white;
    margin-right: 10px;
    flex: 1;
  }

  /* NOT Extra Fields version */
  .slick-slide:not(.slick-current) {
    .card-content,
    .card-footer {
      display: none;
    }
  }

  /* Extra Fields Version - The extra fields are only visible when slick-slide is the current one */
  /* The rest of these selectors are fixes for animations as at the end of this file (fake current slide) */
  .slick-slide.slick-current,
  .slick-slide.slick-cloned[data-index='-1'],
  .slick-slide:not(.slick-active)
    + .slick-slide.slick-cloned[data-index='3']:not(.slick-active),
  .slick-slide:not(.slick-active):not(.slick-current):not(.slick-cloned)
    + .slick-slide.slick-active.slick-cloned,
  [is-last-slide] {
    .InputCards__Slide--ExtraFields {
      .card {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 6px;
        overflow: hidden;
      }

      /* Hide thumbnail design */
      .InputCards__SlideInfo {
        display: none;
      }

      .InputCards__ExtraFieldsImage,
      .InputCards__ExtraContent {
        height: auto;
        margin: 0;
        border-radius: 0;
        color: var(--message_color_bot);
      }

      .InputCards__ExtraContent {
        background-color: var(--message_background_color_bot);
      }

      .InputCards__ExtraFieldsImage {
        min-height: 190px;
      }

      .card-content {
        padding: 24px 28px 12px;
        display: block;
      }

      .card-footer {
        display: flex;
      }

      .card-footer-item {
        padding-bottom: 24px;
      }

      .card-footer-item:first-of-type {
        padding-left: 28px;
        padding-right: 8px;
        justify-content: flex-start;
      }

      .card-footer-item:last-of-type {
        padding-left: 8px;
        padding-right: 28px;
        justify-content: flex-end;
      }

      .InputCards__Title {
        margin-bottom: 8px;
        font-size: 1.27rem;
      }

      .InputCards__Description {
        margin-bottom: 4px;
        font-size: 1.12rem;
        opacity: 0.8;
      }

      .InputCards__Details {
        font-size: 1rem;
        opacity: 0.6;
      }

      .card-footer-item .InputCards__HighLighted {
        font-size: 1.12rem;
      }

      .card-footer-item .InputCards__CTA {
        opacity: 1;
        font-size: 1rem;
        padding: 6px 12px;
        color: var(--message_color_bot);
        border-color: var(--message_color_bot);
      }
    }
  }

  /* FIXES */
  /* ANIMATIONS - needed for animations */
  .slick-list {
    @media ${go} {
      width: calc((${e=>e.theme.input_cards.card_width}) * 2);
    }
  }

  .slick-slide {
    @media ${go} {
      display: block;
      transform: scale(0.7);
      transition: transform 0.2s ease-in-out;
      padding-left: 10px;
      opacity: 0.9;
    }
  }

  .slick-slide.slick-current,
  .slick-slide.slick-cloned[data-index='-1'],
  .slick-slide:not(.slick-active)
    + .slick-slide.slick-cloned[data-index='3']:not(.slick-active),
  .slick-slide:not(.slick-active):not(.slick-current):not(.slick-cloned)
    + .slick-slide.slick-active.slick-cloned,
  [is-last-slide] {
    @media ${go} {
      display: block;
      transform: scale(1);
      opacity: 1;
      padding-left: 0;
    }
  }

  /* FIX - When there's only one card */
  ${e=>e.totalSlides<=1&&"\n    .slick-slide.slick-active.slick-cloned {\n      display: none;\n    }\n  "}
`;const vf=({active:e,card:n,onSubmit:r,children:i})=>t.createElement("a",{className:mo()(["InputCards__Slide",n.hasExtraFields&&"InputCards__Slide--ExtraFields"]),key:n.payload,href:e&&n.href||null,target:"_blank",onClick:()=>{e&&r(n)},rel:"noopener noreferrer"},i);vf.propTypes={active:i().bool,card:i().object,onSubmit:i().func,children:i().object},vf.defaultProps={active:!1,card:{},onSubmit:()=>{},children:{}};const yf=({active:e,card:n})=>{const{text:r}=d();return t.createElement("div",{className:"card"},t.createElement("div",{className:mo()(["card-image is-relative",n.hasExtraFields&&"InputCards__ExtraFieldsImage"]),style:{backgroundImage:`url(${n.image})`}},n.hasExtraFields&&n.imageWithFooter&&t.createElement("div",{style:{backgroundImage:`url(${n.imageWithFooter})`,opacity:e?1:0},className:"card-image is-relative InputCards__ExtraFieldsImage  card-image-active-background"}),t.createElement("div",{className:"InputCards__SlideInfo is-overlay"},t.createElement("div",{className:"InputCards__SlideInfoContent"},t.createElement("p",{className:"InputCards__CardDescription is-size-6"},n.title),!n.hasExtraFields&&t.createElement("button",{type:"button",className:"button is-pulled-right"},r.select)))),n.hasExtraFields&&t.createElement("div",{className:"InputCards__ExtraContent"},t.createElement("div",{className:"card-content"},t.createElement("h1",{className:"InputCards__Title title is-spaced"},n.title),t.createElement("h2",{className:"InputCards__Description subtitle has-text-weight-medium"},n.description),t.createElement("p",{className:"InputCards__Details description has-text-weight-medium"},n.details)),(n.highlighted||n.button)&&t.createElement("footer",{className:"card-footer"},t.createElement("div",{className:"card-footer-item"},t.createElement("h3",{className:"has-text-weight-bold InputCards__HighLighted"},n.highlighted)),t.createElement("div",{className:"card-footer-item"},n.button&&t.createElement("button",{type:"button",className:"button button--bordered InputCards__CTA"},n.button)))))};function wf(e){const{text:n}=d(),r=(0,t.useRef)(),{window:i,document:o}=s(),a=i.innerWidth>768?2:1,l=e.cards.length,[c,u]=(0,t.useState)(0),f=ae.Z.appendUIKey(e.cards);return t.createElement(gf,{className:"InputButtons",totalSlides:l},l>1&&t.createElement(Qd,null,e.help),t.createElement("div",{className:"field is-relative is-marginless"},t.createElement(hf.Z,{beforeChange:(e,t)=>{setTimeout((()=>{u(t)}),0),((e,t)=>{const n=o.querySelector("[is-last-slide]");null!==n&&n.removeAttribute("is-last-slide");const r=o.querySelector(".slick-slide.slick-active.slick-cloned");null!==r&&(t>e||e===l-1&&0===t)&&r.setAttribute("is-last-slide",!0)})(e,t)},className:"InputCards__Slider",focusOnSelect:!0,infinite:!0,nextArrow:t.createElement(bf,{nextText:n.next}),onSwipe:()=>{r&&(r.current.innerSlider.clickable=!0)},prevArrow:t.createElement(bf,{isPrev:!0}),ref:r,responsive:[{breakpoint:768,settings:{slidesToShow:1}}],slidesToScroll:1,slidesToShow:a},f.map(((n,r)=>{const i={card:n};return t.createElement(vf,{active:c===r,card:n,key:i,onSubmit:e.onSubmit},t.createElement(yf,{active:c===r,card:n}))})))))}function _f({message:e,onSubmit:n}){const{text:r}=d(),i=e.getCards();return i.length>0?t.createElement(wf,{cards:i,onSubmit:e=>n({type:"button",message:e.title,payload:e.payload}),help:r.input_menu_help}):null}yf.propTypes={active:i().bool,card:i().object},yf.defaultProps={active:!1,card:{}},wf.propTypes={cards:i().arrayOf(i().shape({title:i().string,payload:i().string,image:i().string,href:i().string,hasExtraFields:i().bool,uiKey:i().string})),help:i().string,onSubmit:i().func},wf.defaultProps={cards:[],help:"",onSubmit:()=>{}},_f.propTypes={message:i().object,onSubmit:i().func},_f.defaultProps={message:null,onSubmit:()=>{}};const kf="booked",xf="skipped";function Ef({message:e,onSubmit:n}){const{window:r}=s(),{scheduling_url:i,button_message:o,skip_message:a}=e,l=a||"Skip";return function(e){const{document:n}=s();(0,t.useLayoutEffect)((()=>{const t=n.createElement("link");return t.rel="stylesheet",t.href=e,n.head.append(t),()=>t.remove()}),[n,e])}("https://assets.calendly.com/assets/external/widget.css"),function(e){const{document:n}=s();(0,t.useLayoutEffect)((()=>{const t=n.createElement("script");return t.src=e,t.type="text/javascript",n.head.append(t),()=>t.remove()}),[n,e])}("https://assets.calendly.com/assets/external/widget.js"),(0,t.useEffect)((()=>{const e=e=>{if(e.data.event&&0===e.data.event.indexOf("calendly"))switch(e.data.event){case"calendly.profile_page_viewed":case"calendly.event_type_viewed":case"calendly.date_and_time_selected":return;case"calendly.event_scheduled":return n({type:P.CALENDLY,action:kf,message:o,payload:e.data.payload}),void r.Calendly.closePopupWidget()}};return r.addEventListener("message",e),()=>r.removeEventListener("message",e)}),[r]),t.createElement(Lu,{message:e,showText:!0},t.createElement("div",{className:"is-block has-text-centered"},t.createElement(da,{className:"is-fullwidth",onClick:()=>r.Calendly.showPopupWidget(i),label:o})),t.createElement("div",{className:"is-block has-text-centered mt-2"},t.createElement("a",{className:"is-inline-block py-2 px-4",onClick:()=>{n({type:P.CALENDLY,action:xf,message:l,payload:{}})}},l)))}Ef.propTypes={message:i().shape({url:i().string}),onSubmit:i().func},Ef.defaultProps={message:{},onSubmit:()=>{}};var Sf=__webpack_require__(6733),Cf=__webpack_require__(3738);const Tf=Ui.div`
  padding: 0 0.5rem;
  display: table-caption;
  text-align: left;
  margin-bottom: 0.5rem;
`,Of=Ui.div`
  font-size: 1.15rem;
  font-weight: 500;
`,Pf=Ui.div`
  position: relative;
  border-bottom: 1px solid #000000;
  display: inline-block;
  margin-right: 4px;
`,If=Ui.select`
  padding: 0 0 4px;
  border: 0;
  outline: none;
  background: none;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  text-transform: capitalize;
`,Nf=({month:e,year:n,onChangeYear:r,onChangeMonth:i})=>{const o=an(),a=new Date(n,2,15).getFullYear(),s=Array(200).fill(0).map(((e,t)=>a+t-100)).map((e=>t.createElement("option",{key:e,value:e},e)));return t.createElement(Tf,{className:"DayPicker-Caption"},t.createElement(Of,{className:"DayPicker-CaptionContent"},t.createElement(Pf,{className:"DayPicker-CaptionItem"},t.createElement(If,{className:"DayPicker-CaptionMonth",onChange:e=>i(e.target.value),value:e},o.map(((e,n)=>t.createElement("option",{key:e,value:n},e))))),t.createElement(Pf,{className:"DayPicker-CaptionItem"},t.createElement(If,{className:"DayPicker-CaptionYear",onChange:e=>r(e.target.value),value:a},s))))};var Mf=Nf;Nf.propTypes={month:i().string,year:i().string,onChangeYear:i().func,onChangeMonth:i().func},Nf.defaultProps={month:(new Date).getMonth().toString(),year:(new Date).getFullYear().toString(),onChangeYear:()=>{},onChangeMonth:()=>{}};const Df=({onChange:e,onKeyDown:n,hasAutofocus:r,value:i,format:o,modifiers:a,showDatePicker:s,initialMonth:l})=>{const c=h(),u=null!==l.month&&void 0!==l.month?l.month:(new Date).getMonth(),d=l.year||(new Date).getFullYear(),f=(0,t.useRef)(null),[p,m]=(0,t.useState)(u.toString()),[b,g]=(0,t.useState)(d.toString()),v={className:mo()({input:!0,"js-auto-focus":r}),onKeyDown:n,readOnly:s&&E.isMobile},y=e=>{f.current&&ae.Z.getElementOffset(f.current).top<350&&c&&c.setConfig({header_hidden:e})},w={fixedWeeks:!0,selectedDays:i,month:new Date(b,p,15),onDayClick:e,onMonthChange:e=>(e=>{m(new Date(e).getMonth().toString()),g(new Date(e).getFullYear().toString())})(e),captionElement:t.createElement(Mf,{month:p,onChangeMonth:e=>m(e),onChangeYear:e=>g(e),year:b}),modifiers:a,className:s?null:"is-hidden"};return t.createElement("div",{ref:f},t.createElement(Sf.default,{dayPickerProps:w,format:o,formatDate:(e,t,n)=>ut(e,t,{locale:n}),inputProps:v,keepFocus:!1,month:new Date(b,p,15),onDayChange:(t,n,r)=>{let i=t;if(!i){const e=function(e,t){const n=e.getInput().value||"";return cn.parse(n,t)}(r,o);e&&!Number.isNaN(e.getTime())&&(i=e)}i&&(m(i.getMonth().toString()),g(i.getFullYear().toString()),e(i))},onDayPickerHide:()=>y(!1),onDayPickerShow:()=>y(!0),parseDate:(e,t,n)=>{const r=cn.parse(e,t,{locale:n});if(Cf.DateUtils.isDate(r))return r},placeholder:o,ref:f,selectedDate:i,style:{display:"block"}}))};var Af=Df;function jf(e){const{text:{error_input_date:n}}=d(),{message:r}=e,i=r.getDateFnsFormat();return t.createElement(Wd,Po({bubbleClassName:"is-relative",className:"InputDate"},Vd(e),{hasAutofocus:!1,onSubmit:({type:t,message:n})=>{e.onSubmit({type:t,message:ut(n,i),extra:{timestamp:n.valueOf()/1e3}})},validate:e=>r.isValidDate(e)?"":n.replace(/@format/i,r.dateFormat)}),t.createElement(Af,{format:i,initialMonth:r.getDatePickerInitialMonth(),modifiers:{disabled:e=>!r.isValidDate(e)},showDatePicker:r.showDatePicker}))}function Rf(e){return t.createElement(Wd,Po({className:"InputEmail"},Vd(e)),t.createElement(hd,{name:"email",type:"email"}))}Df.propTypes={onChange:i().func,onKeyDown:i().func,hasAutofocus:i().bool,value:i().any,format:i().string,showDatePicker:i().bool,modifiers:i().object,initialMonth:i().object},Df.defaultProps={onChange:()=>{},onKeyDown:()=>{},hasAutofocus:!1,value:null,format:"",showDatePicker:!0,modifiers:null,initialMonth:{}},jf.propTypes={onSubmit:i().func,message:i().object},jf.defaultProps={onSubmit:()=>{},message:null},Rf.propTypes={message:i().object},Rf.defaultProps={message:null};const Lf=Ui.div`
  @media ${go} {
    width: 356px;
  }

  &.InputFile--draggedover {

    .InputFile__DropArea {
      box-shadow: inset 0 0px 7px 7px rgba(0,0,0,0.2);
    }

    .InputFile__DropBorder {
      border-color: ${({theme:e})=>e.design.form_buttons_color};
    }
  }

  .is-loading.button::after {
    border-color: transparent transparent ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputFile__DropArea,
  .InputFile__inputarea {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputFile__DropArea {
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
  }

  .InputFile__filename {
    color: ${({theme:e})=>e.design.form_help_color};
  }

  .InputFile__HelpText {
    width: calc(66.66% - 8px);
    font-size: 14px;
  }

  .InputFile__ButtonContainer:hover .button {
    box-shadow: 0 6px 21px -11px rgba(0,0,0,0.75), 0 13px 17px -16px rgba(47,49,72,0.75);
  }
`,Ff=Ui.div`
  padding: 10px 8px;
  display: flex;
  /* overflow-x: auto; */
  align-items: center;
  box-sizing: content-box;
  justify-content: left;
  border-radius: 3px;
  flex-wrap: wrap;
  min-height: 112px;
  box-sizing: border-box;

  .InputFile__filethumbnail .InputFile__DropIcon {
    margin: 0;

    &:after {
      content: '';
      background-color: rgb(0 0 0 / 15%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`,zf=Ui.div`
  border: 2px dashed white;
  height: 92px;
  width: calc(33.33% - 8px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  left: 4px;
  margin: 6px 0;

  @media ${_o} {
    width: calc(25% - 8px);
  }
`,Bf=Ui.i`
  transform: rotate(45deg);
  font-size: 24px;
`,Uf=Ui.div`
  width: 100%;
  height: 92px;
  display: flex;
  border-radius: 2px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-width: 1px;
  border-style: dashed;
`,Wf=Ui.i`
  font-size: 40px;
  margin-right: 6px;
  
  &:before {
    position: relative;
    z-index: 1;
  }
`,Vf=Ui.span`
  @media ${yo} {
    display: none;
  }
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`,qf=Ui.div`
  height: 94px;
  display: flex;
  width: 33.33%;
  padding: 0 5px;
  margin: 6px 0;

  @media ${_o} {
    width: 25%;
  }
`,Hf=Ui.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  .custom-button.button {
    padding: 6px 16px;

    &.InputFile__SendButton {
      min-width: calc(33.33% + 12px);
      margin: 0 0 0 auto;

      @media ${_o} {
        min-width: calc(25% + 12px);
      }
    }
  }
`,$f=Ui.div`
  line-height: 1.35em;
  flex-shrink: 0;
  width: 100%;
  position: relative;
`,Yf=Ui($f)`
  color: #B50000;
  font-size: 14px;
  margin-bottom: 20px;
  padding-right: 24px;
  justify-content: space-between;

  .InputFile__closebutton {
    right: 0;
    top: 0;
    background-color: #B50000;
    height: 18px;
    width: 18px;

    &::before,
    &::after {
      background-color: white;
    }
  }
`,Kf=Ui.div`
  height: 100%;
  width: 100%;
  border-radius: 3px;
  position: relative;
  align-items: center;
  display: inline-flex;
  background-size: cover;
  justify-content: center;
  background-position: 50%;
  border: 2px dashed #ffffff;
`,Gf=Ui.div`
  top: -3px;
  z-index: 1;
  width: 24px;
  height: 24px;
  right: -10px;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;

  &::before,
  &::after {
    top: 50%;
    left: 50%;
    width: 50%;
    content: '';
    height: 2px;
    display: block;
    position: absolute;
    background-color: black;
    transform-origin: center center;
  }

  &::before {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`,Qf=({content:e,filesize:n,setError:r})=>t.createElement(Yf,{className:"InputFile__Error is-flex has-text-weight-semibold"},t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},e),n&&t.createElement("span",{className:"InputFile__Error-FileSize has-text-right"},n),t.createElement(Gf,{className:"InputFile__closebutton",onClick:()=>r(null)}));Qf.propTypes={content:i().string,filesize:i().string,setError:i().func},Qf.defaultProps={content:"error",filesize:null,setError:()=>{}};const Xf="max_size",Zf="maxnumber_files",Jf="fetch";const ep=Ui.button`
  margin: 0 6px;
  padding-top: 1em;
`,tp=Ui.ul`
  top: 0;
  right: 51px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  @media ${yo} {
    right: 45px;
  }
`,np=Ui.button`
  border: 0;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;

  svg path {
    fill: var(--message_color_bot);
  }
`,rp=Ui(np)`
  font-size: 1.3rem;
`,ip=Ui.input`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;function op({onSelectEmoji:e,uploadFile:n,hasAttachButton:r}){const{document:i}=s(),o=(0,t.useRef)(null),[a,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(!1),d=e=>{o.current.contains(e.target)||(u(!1),i.removeEventListener("click",d))};return t.createElement(t.Fragment,null,t.createElement(tp,{className:"inputaddons"},r&&t.createElement("li",null,t.createElement(ap,{uploadFile:n})),t.createElement("li",null,c&&!a&&t.createElement(ep,{className:"button is-loading is-transparent"})||t.createElement(sp,{onClick:e=>(async()=>{u(!0);const e=await Promise.all([__webpack_require__.e(949),__webpack_require__.e(640)]).then(__webpack_require__.bind(__webpack_require__,4644));l(e.default),i.addEventListener("click",d)})()}))),t.createElement("div",{className:"emoji-mart__container",ref:o},c&&a&&t.createElement(a,{style:{position:"absolute",bottom:"62px",right:"0px"},onSelect:t=>e(t)})))}op.propTypes={hasAttachButton:i().bool,onSelectEmoji:i().func,uploadFile:i().func},op.defaultProps={hasAttachButton:!1,onSelectEmoji:()=>{},uploadFile:()=>{}};const ap=({uploadFile:e})=>t.createElement(np,{type:"button",className:"inputaddons__addonitem inputaddons__filebutton is-relative"},t.createElement(ip,{onChange:t=>e(t.target.files[0]),type:"file"}),t.createElement(Hc,null));ap.propTypes={uploadFile:i().func.isRequired};const sp=({onClick:e})=>t.createElement(rp,{type:"button",className:"inputaddons__addonitem inputaddons__emojisbutton",onClick:e},t.createElement("span",{role:"img","aria-label":"slightly_smiling_face"},t.createElement(Bc,null)));function lp(e){const{uploadedFiles:n}=e,{text:r}=d(),i=n&&n.length>0,o=r.input_files_instructions_help.replace("@maxfiles","6").replace("@maxfilesize","10MB");return t.createElement(Lf,{className:mo()({InputFile:!0,"InputFile--draggedover":e.dragOver})},t.createElement(Ff,{className:"InputFile__DropArea",onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDragEnd:e.onDragLeave,onDrop:e.onDrop},i?n.map((r=>t.createElement(qf,{key:r.key,className:"InputFile__filecontainer"},t.createElement(Kf,{className:"InputFile__filethumbnail hu-text-center hu-align-center hu-justify-center",style:{backgroundImage:r.url?`url('${r.url}') `:null},"data-type":r.type||null},t.createElement(Gf,{className:"InputFile__closebutton",onClick:t=>e.onRemoveFile(t),"data-key":r.key||null}),"image"!==n.type&&t.createElement(Wf,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}))))):t.createElement(Uf,{className:"InputFile__DropBorder"},t.createElement(Wf,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}),t.createElement(Vf,{className:"InputFile__DropTitle"},r.input_files_help)),i&&n.length<6&&t.createElement(zf,{className:"InputFile__DropAreaButton"},t.createElement(ip,{onChange:t=>e.uploadFiles(t.target.files),type:"file",multiple:!0}),t.createElement(Bf,{className:"fi cross input-drop-icon hu-s-40"}))),t.createElement(Hf,{className:"InputFile__inputarea hu-display-flex hu-align-center"},e.error,!i&&t.createElement(t.Fragment,null,t.createElement($f,{className:"InputFile__filename InputFile__HelpText"},o),t.createElement("div",{className:"is-relative InputFile__ButtonContainer"},t.createElement(ip,{onChange:t=>e.uploadFiles(t.target.files),type:"file",multiple:!0}),t.createElement(ba,{className:mo()(e.loading&&"is-loading"),label:r.select_files}))),i&&t.createElement(ba,{className:mo()(e.loading&&"is-loading","InputFile__SendButton"),onClick:e.onSubmit,label:r.send})))}function cp(e){const{uploadedFiles:n}=e,{text:r}=d(),i=n&&n.length>0,o=r.input_file_instructions_help.replace("@maxfilesize","10MB");return t.createElement(Lf,{className:mo()({InputFile:!0,"InputFile--draggedover":e.dragOver})},t.createElement(Ff,{className:"InputFile__DropArea",onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDragEnd:e.onDragLeave,onDrop:e.onDrop},i?n.map((r=>t.createElement(qf,{key:r.key,className:"InputFile__filecontainer"},t.createElement(Kf,{className:"InputFile__filethumbnail hu-text-center hu-align-center hu-justify-center",style:{backgroundImage:r.url?`url('${r.url}') `:null},"data-type":r.type||null},t.createElement(Gf,{className:"InputFile__closebutton",onClick:t=>e.onRemoveFile(t),"data-key":r.key||null}),"image"!==n.type&&t.createElement(Wf,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}))))):t.createElement(Uf,{className:"InputFile__DropBorder"},t.createElement(Wf,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}),t.createElement(Vf,{className:"InputFile__DropTitle"},r.input_file_help))),t.createElement(Hf,{className:"InputFile__inputarea hu-display-flex hu-align-center"},e.error,!i&&t.createElement(t.Fragment,null,t.createElement($f,{className:"InputFile__filename InputFile__HelpText"},o),t.createElement("div",{className:"is-relative InputFile__ButtonContainer"},t.createElement(ip,{onChange:t=>e.uploadFile(t.target.files[0]),type:"file"}),t.createElement(ba,{className:mo()(e.loading&&"is-loading"),label:r.select_file}))),i&&t.createElement(ba,{className:mo()(e.loading&&"is-loading","InputFile__SendButton"),onClick:e.onSubmit,label:r.send})))}function up(e){const[n,r]=(0,t.useState)(!1),i=e=>{e.preventDefault(),r(!0)},o=e=>{e.preventDefault(),r(!1)},a=t=>{const{dataTransfer:n}=t;t.preventDefault(),r(!1),n.effectAllowed="none",n.dropEffect="none",e.onDropUpload(n.files)};return e.multiple?t.createElement(lp,Po({},e,{dragOver:n,onDragOver:i,onDragLeave:o,onDrop:a})):t.createElement(cp,Po({},e,{dragOver:n,onDragOver:i,onDragLeave:o,onDrop:a}))}function dp(e){const{multiple:n}=e.message,r=n?6:1,{uploadedFiles:i,error:o,removeUploadedFile:a,isFetching:s,uploadFile:l,uploadFiles:c,setError:u}=function(e){const[n,r]=(0,t.useState)([]),[i,o]=(0,t.useState)(null),[a,s]=(0,t.useState)(!1),l=Zo(),{text:c}=d(),u=1===e?c.input_file_max_help.replace("@maxfiles",e):c.input_files_max_help.replace("@maxfiles",e),f=(e,n)=>{switch(e){case Xf:return t.createElement(Qf,{setError:o,content:n.name,filesize:`${ae.Z.bytesToMegaBytes(n.size)}MB`});case Zf:return t.createElement(Qf,{setError:o,content:t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},u)});case Jf:return t.createElement(Qf,{setError:o,content:t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},"Error! Please, try again.")});default:return null}},p=e=>e.size<=1e7?(s(!0),(new FormData).append("image",e),v.fetchUploadFile({channelToken:l.config.channelToken,customerToken:l.customerToken,serverUrl:l.config.serverUrl,file:e}).then((({url:t})=>{const n={url:t,name:e.name,size:e.size,key:g().utils.utils.randomKey()};r((e=>[...e,n]))})).catch((e=>{o(f(Jf,null)),console.error(e)})).finally((()=>s(!1)))):(o(f(Xf,e)),null);return{uploadedFiles:n,removeUploadedFile:e=>{o(null);const{key:t}=e.target.dataset,i=n.findIndex((e=>e.key===t));r([...n.slice(0,i),...n.slice(i+1)])},error:i,isFetching:a,uploadFiles:t=>{o(null);const r=Object.values(t);r.length+n.length>e?o(f(Zf)):r.forEach((e=>{p(e)}))},uploadFile:p,setError:o}}(r);return t.createElement(up,{uploadedFiles:i,error:o,loading:s,uploadFile:l,uploadFiles:c,onDropUpload:c,onRemoveFile:a,setError:u,onSubmit:()=>!0===n?(()=>{const t=i.map((e=>({url:e.url}))),n=i.map((e=>e.name)).join(", ");e.onSubmit({type:"multiple_files",urls:t,message:n})})():(()=>{const t=i[0];e.onSubmit({type:"file",url:t.url,message:t.name})})(),multiple:n})}sp.propTypes={onClick:i().func.isRequired},lp.propTypes={uploadedFiles:i().array,loading:i().bool,error:i().any,onRemoveFile:i().func,onSubmit:i().func,uploadFiles:i().func,onDragOver:i().func,onDragLeave:i().func,onDrop:i().func,dragOver:i().bool},lp.defaultProps={uploadedFiles:null,loading:!1,error:null,onRemoveFile:()=>{},onSubmit:()=>{},uploadFiles:()=>{},onDragOver:()=>{},onDragLeave:()=>{},onDrop:()=>{},dragOver:!1},cp.propTypes={uploadedFiles:i().array,loading:i().bool,error:i().any,onRemoveFile:i().func,onSubmit:i().func,uploadFile:i().func,onDragOver:i().func,onDragLeave:i().func,onDrop:i().func,dragOver:i().bool},cp.defaultProps={uploadedFiles:null,loading:!1,error:null,onRemoveFile:()=>{},onSubmit:()=>{},uploadFile:()=>{},onDragOver:()=>{},onDragLeave:()=>{},onDrop:()=>{},dragOver:!1},up.propTypes={multiple:i().bool,onDropUpload:i().func,uploadedFiles:i().array},up.defaultProps={multiple:!1,onDropUpload:()=>{},uploadedFiles:null},dp.propTypes={onSubmit:i().func,message:i().object},dp.defaultProps={onSubmit:()=>{},message:null};var fp=e=>null==e,pp=e=>Array.isArray(e);const hp=e=>"object"==typeof e;var mp=e=>!fp(e)&&!pp(e)&&hp(e),bp=e=>mp(e)&&e.nodeType===Node.ELEMENT_NODE;const gp={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit"},vp="undefined",yp="blur",wp="change",_p="input",kp="max",xp="min",Ep="maxLength",Sp="minLength",Cp="pattern",Tp="required",Op="validate",Pp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ip=/^\w*$/,Np=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mp=/\\(\\)?/g;var Dp=e=>!pp(e)&&(Ip.test(e)||!Pp.test(e)),Ap=e=>{const t=[];return e.replace(Np,((e,n,r,i)=>{t.push(r?i.replace(Mp,"$1"):n||e)})),t};function jp(e,t,n){let r=-1;const i=Dp(t)?[t]:Ap(t),o=i.length,a=o-1;for(;++r<o;){const t=i[r];let o=n;if(r!==a){const n=e[t];o=mp(n)||pp(n)?n:isNaN(+i[r+1])?{}:[]}e[t]=o,e=e[t]}return e}var Rp=e=>Object.entries(e).reduce(((e,[t,n])=>Dp(t)?Object.assign(Object.assign({},e),{[t]:n}):(jp(e,t,n),e)),{}),Lp=e=>void 0===e,Fp=(e,t,n)=>{const r=t.split(/[,[\].]+?/).filter(Boolean).reduce(((e,t)=>fp(e)?e:e[t]),e);return Lp(r)||r===e?Lp(e[t])?n:e[t]:r},zp=(e,t)=>{bp(e)&&e.removeEventListener&&(e.removeEventListener(_p,t),e.removeEventListener(wp,t),e.removeEventListener(yp,t))},Bp=e=>"radio"===e.type,Up=e=>"checkbox"===e.type;function Wp(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&Wp(e.parentNode)}var Vp=e=>mp(e)&&!Object.keys(e).length;function qp(e){return pp(e)?e:Ap(e)}function Hp(e,t){return 1==t.length?e:function(e,t){const n=Dp(t)?[t]:qp(t),r=t.length;let i=0;for(;i<r;)e=Lp(e)?i++:e[n[i++]];return i==r?e:void 0}(e,function(e,t,n){let r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t;const o=Array(i);for(;++r<i;)o[r]=e[r+t];return o}(t,0,-1))}function $p(e,t){return t.forEach((t=>{!function(e,t){const n=Dp(t)?[t]:qp(t),r=Hp(e,n),i=n[n.length-1],o=!(null!=r)||delete r[i];let a;for(let t=0;t<n.slice(0,-1).length;t++){let r,i=-1;const o=n.slice(0,-(t+1)),s=o.length-1;for(t>0&&(a=e);++i<o.length;){const t=o[i];r=r?r[t]:e[t],s===i&&(mp(r)&&Vp(r)||pp(r)&&!r.filter((e=>mp(e)&&!Vp(e))).length)&&(a?delete a[t]:delete e[t]),a=r}}}(e,t)})),e}const Yp=(e,t)=>e&&e.ref===t;const Kp={isValid:!1,value:""};var Gp=e=>pp(e)?e.reduce(((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e),Kp):Kp,Qp=e=>"file"===e.type,Xp=e=>"select-multiple"===e.type,Zp=e=>""===e;const Jp={value:!1,isValid:!1},eh={value:!0,isValid:!0};var th=e=>{if(pp(e)){if(e.length>1){const t=e.filter((e=>e&&e.ref.checked)).map((({ref:{value:e}})=>e));return{value:t,isValid:!!t.length}}const{checked:t,value:n,attributes:r}=e[0].ref;return t?r&&!Lp(r.value)?Lp(n)||Zp(n)?eh:{value:n,isValid:!0}:eh:Jp}return Jp};function nh(e,t){const{name:n,value:r}=t,i=e[n];return Qp(t)?t.files:Bp(t)?i?Gp(i.options).value:"":Xp(t)?(o=t.options,[...o].filter((({selected:e})=>e)).map((({value:e})=>e))):Up(t)?!!i&&th(i.options).value:r;var o}var rh=e=>"string"==typeof e,ih=(e,t)=>{const n={};for(const r in e)(Lp(t)||(rh(t)?r.startsWith(t):pp(t)?t.find((e=>r.startsWith(e))):t&&t.nest))&&(n[r]=nh(e,e[r].ref));return n},oh=(e,{type:t,types:n,message:r})=>mp(e)&&e.type===t&&e.message===r&&((e={},t={})=>{const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>t[n]&&t[n]===e[n]))})(e.types,n);var ah=e=>e instanceof RegExp,sh=e=>{return mp(t=e)&&!ah(t)?e:{value:e,message:""};var t},lh=e=>"function"==typeof e,ch=e=>"boolean"==typeof e,uh=e=>rh(e)||mp(e)&&(0,t.isValidElement)(e);function dh(e,t,n="validate"){if(uh(e)||ch(e)&&!e)return{type:n,message:uh(e)?e:"",ref:t}}var fh=(e,t,n,r,i)=>{if(t){const t=n[e];return Object.assign(Object.assign({},t),{types:Object.assign(Object.assign({},t&&t.types?t.types:{}),{[r]:i||!0})})}return{}},ph=async(e,t,{ref:n,ref:{type:r,value:i,name:o},options:a,required:s,maxLength:l,minLength:c,min:u,max:d,pattern:f,validate:p})=>{var h;const m=e.current,b={},g=Bp(n),v=Up(n),y=g||v,w=Zp(i),_=fh.bind(null,o,t,b),k=(e,r,i,a=Ep,s=Sp)=>{const l=e?r:i;if(b[o]=Object.assign({type:e?a:s,message:l,ref:n},_(e?a:s,l)),!t)return b};if(s&&(!g&&!v&&(w||fp(i))||ch(i)&&!i||v&&!th(a).isValid||g&&!Gp(a).isValid)){const{value:e,message:r}=uh(s)?{value:!!s,message:s}:sh(s);if(e&&(b[o]=Object.assign({type:Tp,message:r,ref:y?null===(h=m[o].options)||void 0===h?void 0:h[0].ref:n},_(Tp,r)),!t))return b}if(!fp(u)||!fp(d)){let e,o;const{value:a,message:s}=sh(d),{value:l,message:c}=sh(u);if("number"===r||!r&&!isNaN(i)){const t=n.valueAsNumber||parseFloat(i);fp(a)||(e=t>a),fp(l)||(o=t<l)}else{const t=n.valueAsDate||new Date(i);rh(a)&&(e=t>new Date(a)),rh(l)&&(o=t<new Date(l))}if((e||o)&&(k(!!e,s,c,kp,xp),!t))return b}if(rh(i)&&!w&&(l||c)){const{value:e,message:n}=sh(l),{value:r,message:o}=sh(c),a=i.toString().length,s=!fp(e)&&a>e,u=!fp(r)&&a<r;if((s||u)&&(k(!!s,n,o),!t))return b}if(f&&!w){const{value:e,message:r}=sh(f);if(ah(e)&&!e.test(i)&&(b[o]=Object.assign({type:Cp,message:r,ref:n},_(Cp,r)),!t))return b}if(p){const e=nh(m,n),r=y&&a?a[0].ref:n;if(lh(p)){const n=dh(await p(e),r);if(n&&(b[o]=Object.assign(Object.assign({},n),_(Op,n.message)),!t))return b}else if(mp(p)){let n={};for(const[i,a]of Object.entries(p)){if(!Vp(n)&&!t)break;const s=dh(await a(e),r,i);s&&(n=Object.assign(Object.assign({},s),_(i,s.message)),t&&(b[o]=n))}if(!Vp(n)&&(b[o]=Object.assign({ref:r},n),!t))return b}}return b};const hh=(e,t)=>pp(e.inner)?e.inner.reduce(((e,{path:n,message:r,type:i})=>Object.assign(Object.assign({},e),n?e[n]&&t?{[n]:fh(n,t,e,i,r)}:{[n]:e[n]||Object.assign({message:r,type:i},t?{types:{[i]:r||!0}}:{})}:{})),{}):{[e.path]:{message:e.message,type:e.type}};async function mh(e,t,n,r,i){if(r)return r(n,i);try{return{values:await e.validate(n,{abortEarly:!1,context:i}),errors:{}}}catch(e){return{values:{},errors:Rp(hh(e,t))}}}var bh=e=>fp(e)||!hp(e);const gh=(e,t)=>{const n=(t,n,r)=>{const i=r?`${e}.${n}`:`${e}[${n}]`;return bh(t)?i:gh(i,t)};return pp(t)?t.map(((e,t)=>n(e,t))):Object.entries(t).map((([e,t])=>n(t,e,!0)))};var vh=(e,t,n,r,i)=>{let o;return n.add(t),Vp(e)?o=void 0:Lp(e[t])?(o=Fp(Rp(e),t),Lp(o)||((e,t)=>gh(e,t).flat(1/0))(t,o).forEach((e=>n.add(e)))):(o=e[t],n.add(t)),Lp(o)?i?r:Fp(r,t):o},yh=({isOnChange:e,hasError:t,isBlurEvent:n,isOnSubmit:r,isReValidateOnSubmit:i,isOnBlur:o,isReValidateOnBlur:a,isSubmitted:s})=>e&&n||r&&i||r&&!s||o&&!n&&!t||a&&!n&&t||i&&s,wh=e=>e.substring(0,e.indexOf("[")),_h=(e,t)=>{const n=Rp(ih(e));return t?Fp(n,t,n):n};function kh(e,t){let n=!1;if(!pp(e)||!pp(t)||e.length!==t.length)return!0;for(let r=0;r<e.length&&!n;r++){const i=e[r],o=t[r];if(Lp(o)||Object.keys(i).length!==Object.keys(o).length){n=!0;break}for(const e in i)if(i[e]!==o[e]){n=!0;break}}return n}const xh=(e,t)=>RegExp(`^${t}[\\d+]`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var Eh=(e,t)=>[...e].some((e=>xh(t,e)));var Sh=e=>({isOnSubmit:!e||e===gp.onSubmit,isOnBlur:e===gp.onBlur,isOnChange:e===gp.onChange}),Ch=e=>Bp(e)||Up(e);function Th({mode:e=gp.onSubmit,reValidateMode:n=gp.onChange,validationSchema:r,validationResolver:i,validationContext:o,defaultValues:a={},submitFocusError:s=!0,validateCriteriaMode:l}={}){const c=(0,t.useRef)({}),u=(0,t.useRef)({}),d=(0,t.useRef)({}),f=(0,t.useRef)({}),p=(0,t.useRef)(new Set),h=(0,t.useRef)(new Set),m=(0,t.useRef)(new Set),b=(0,t.useRef)(new Set),g=(0,t.useRef)(!0),v=(0,t.useRef)(a),y=(0,t.useRef)({}),w=(0,t.useRef)(!1),_=(0,t.useRef)(!1),k=(0,t.useRef)(!1),x=(0,t.useRef)(!1),E=(0,t.useRef)(0),S=(0,t.useRef)(!1),C=(0,t.useRef)(),T=(0,t.useRef)({}),O=(0,t.useRef)(o),P=(0,t.useRef)(new Set),[,I]=(0,t.useState)(),{isOnBlur:N,isOnSubmit:M,isOnChange:D}=(0,t.useRef)(Sh(e)).current,A="all"===l,j=typeof window===vp,R=!(!r&&!i),L=typeof document!==vp&&!j&&!Lp(window.HTMLElement),F=L?"Proxy"in window:typeof Proxy!==vp,z=(0,t.useRef)({dirty:!F,dirtyFields:!F,isSubmitted:M,submitCount:!F,touched:!F,isSubmitting:!F,isValid:!F}),{isOnBlur:B,isOnSubmit:U}=(0,t.useRef)(Sh(n)).current;O.current=o;const W=(0,t.useCallback)((()=>{w.current||I({})}),[]),V=(0,t.useCallback)(((e,t,n=!1)=>{let r=n||function({errors:e,name:t,error:n,validFields:r,fieldsWithValidation:i}){const o=Vp(n),a=Vp(e),s=Fp(n,t),l=Fp(e,t);return!(o&&r.has(t)||l&&l.isManual)&&(!!(a!==o||!a&&!l||o&&i.has(t)&&!r.has(t))||s&&!oh(l,s))}({errors:u.current,error:t,name:e,validFields:b.current,fieldsWithValidation:m.current});if(Vp(t))(m.current.has(e)||R)&&(b.current.add(e),r=r||Fp(u.current,e)),u.current=$p(u.current,[e]);else{const n=Fp(u.current,e);b.current.delete(e),r=r||!n||!oh(n,t[e]),jp(u.current,e,t[e])}if(r&&!fp(n))return W(),!0}),[W,R]),q=(0,t.useCallback)(((e,t)=>{const{ref:n,options:r}=e,i=L&&bp(n)&&fp(t)?"":t;Bp(n)&&r?r.forEach((({ref:e})=>e.checked=e.value===i)):Qp(n)?rh(i)?n.value=i:n.files=i:Xp(n)?[...n.options].forEach((e=>e.selected=i.includes(e.value))):Up(n)&&r?r.length>1?r.forEach((({ref:e})=>e.checked=i.includes(e.value))):r[0].ref.checked=!!i:n.value=i}),[L]),H=(0,t.useCallback)((e=>{if(!c.current[e]||!z.current.dirty&&!z.current.dirtyFields)return!1;let t=y.current[e]!==nh(c.current,c.current[e].ref);const n=Eh(P.current,e),r=h.current.size;if(n){const n=wh(e);t=kh(_h(c.current,n),Fp(v.current,n))}const i=(n?x.current:h.current.has(e))!==t;return t?h.current.add(e):h.current.delete(e),x.current=n?t:!!h.current.size,z.current.dirty?i:r!==h.current.size}),[]),$=(0,t.useCallback)(((e,t,n)=>{const r=pp(t);for(const i in t){const o=`${n||e}${r?`[${i}]`:`.${i}`}`,a=c.current[o];mp(t[i])&&$(e,t[i],o),a&&(q(a,t[i]),H(o))}}),[q,H]),Y=(0,t.useCallback)(((e,t)=>{const n=c.current[e];if(n){q(n,t);const r=H(e);if(ch(r))return r}else bh(t)||$(e,t)}),[H,q,$]),K=(0,t.useCallback)((async(e,t)=>{const n=c.current[e];if(n){const r=await ph(c,A,n);return V(e,r,!!t&&null),Vp(r)}return!1}),[V,A]),G=(0,t.useCallback)((async e=>{const{errors:t}=await mh(r,A,_h(c.current),i,O.current),n=g.current;if(g.current=Vp(t),pp(e))e.forEach((e=>{const n=Fp(t,e);n?jp(u.current,e,n):$p(u.current,[e])})),W();else{const r=Fp(t,e);V(e,r?{[e]:r}:{},n!==g.current)}return Vp(u.current)}),[W,V,A,i,r]),Q=(0,t.useCallback)((async e=>{const t=e||Object.keys(c.current);if(R)return G(t);if(pp(t)){const e=await Promise.all(t.map((async e=>await K(e,!0))));return W(),e.every(Boolean)}return await K(t)}),[G,K,W,R]),X=e=>_.current||p.current.has(e)||p.current.has((e.match(/\w+/)||[])[0]);C.current=C.current?C.current:async({type:e,target:t})=>{const n=t?t.name:"",o=c.current,a=u.current,s=o[n],l=Fp(a,n);let f;if(!s)return;const p=e===yp,h=yh({hasError:!!l,isOnChange:D,isBlurEvent:p,isOnSubmit:M,isReValidateOnSubmit:U,isOnBlur:N,isReValidateOnBlur:B,isSubmitted:k.current}),m=H(n);let b=X(n)||m;if(p&&!Fp(d.current,n)&&z.current.touched&&(jp(d.current,n,!0),b=!0),h)return b&&W();if(R){const{errors:e}=await mh(r,A,_h(o),i,O.current),t=g.current;g.current=Vp(e),f=Fp(e,n)?{[n]:Fp(e,n)}:{},t!==g.current&&(b=!0)}else f=await ph(c,A,s);!V(n,f)&&b&&W()};const Z=(0,t.useCallback)(((e={})=>{const t=Vp(v.current)?ih(c.current):v.current;mh(r,A,Rp(Object.assign(Object.assign({},t),e)),i,O.current).then((({errors:e})=>{const t=g.current;g.current=Vp(e),t!==g.current&&W()}))}),[W,A,i]),J=(0,t.useCallback)(((e,t)=>{C.current&&e&&function(e,t,n,r){const{ref:i,ref:{name:o,type:a},mutationWatcher:s}=n,l=e[o];if(a)if((Bp(i)||Up(i))&&l){const{options:n}=l;pp(n)&&n.length?(n.filter(Boolean).forEach(((e,i)=>{const{ref:o,mutationWatcher:a}=e;(o&&Wp(o)&&Yp(e,o)||r)&&(zp(o,t),a&&a.disconnect(),$p(n,[`[${i}]`]))})),n&&!n.filter(Boolean).length&&delete e[o]):delete e[o]}else(Wp(i)&&Yp(l,i)||r)&&(zp(i,t),s&&s.disconnect(),delete e[o]);else delete e[o]}(c.current,C.current,e,t)}),[]),ee=(0,t.useCallback)(((e,t)=>{if(!e||e&&Eh(P.current,e.ref.name)&&!t)return;J(e,t);const{name:n}=e.ref;u.current=$p(u.current,[n]),d.current=$p(d.current,[n]),y.current=$p(y.current,[n]),[h,m,b,p].forEach((e=>e.current.delete(n))),(z.current.isValid||z.current.touched)&&(W(),R&&Z())}),[W,R,Z,J]);const te=({name:e,type:t,types:n,message:r,shouldRender:i})=>{const o=c.current[e];oh(Fp(u.current,e),{type:t,message:r,types:n})||(jp(u.current,e,{type:t,types:n,message:r,ref:o?o.ref:{},isManual:!0}),i&&W())};function ne(e,t={}){if(!e.name)return console.warn("Missing name @",e);const{name:n,type:r,value:i}=e,o=Object.assign({ref:e},t),a=c.current,s=Ch(e);let l,u,d=a[n],f=!0;if(s?d&&pp(d.options)&&d.options.filter(Boolean).find((t=>i===t.ref.value&&t.ref===e)):d&&e===d.ref)a[n]=Object.assign(Object.assign({},d),t);else{if(r){const i=function(e,t){const n=new MutationObserver((()=>{Wp(e)&&(n.disconnect(),t())}));return n.observe(window.document,{childList:!0,subtree:!0}),n}(e,(()=>ee(d)));d=s?Object.assign({options:[...d&&d.options||[],{ref:e,mutationWatcher:i}],ref:{type:r,name:n}},t):Object.assign(Object.assign({},o),{mutationWatcher:i})}else d=o;var p;a[n]=d,Vp(v.current)||(u=Fp(v.current,n),f=Lp(u),l=Eh(P.current,n),f||l||q(d,u)),R&&!l&&z.current.isValid?Z():Vp(t)||(m.current.add(n),!M&&z.current.isValid&&ph(c,A,d).then((e=>{const t=g.current;Vp(e)?b.current.add(n):g.current=!1,t!==g.current&&W()}))),y.current[n]||l&&f||(y.current[n]=f?nh(a,d.ref):u),r&&function({field:{ref:e},handleChange:t,isRadioOrCheckbox:n}){bp(e)&&t&&(e.addEventListener(n?wp:_p,t),e.addEventListener(yp,t))}({field:s&&d.options?d.options[d.options.length-1]:d,isRadioOrCheckbox:s||(p=e,"select-one"===p.type),handleChange:C.current})}}const re=(0,t.useCallback)((e=>async t=>{t&&(t.preventDefault(),t.persist());let n={};const o=c.current;let a=ih(o);z.current.isSubmitting&&(S.current=!0,W());try{if(R){const{errors:e,values:t}=await mh(r,A,Rp(a),i,O.current);u.current=e,n=e,a=t}else for(const e of Object.values(o))if(e){const{ref:{name:t}}=e,r=await ph(c,A,e);r[t]?(jp(n,t,r[t]),b.current.delete(t)):m.current.has(t)&&b.current.add(t)}Vp(n)?(u.current={},W(),await e(Rp(a),t)):(u.current=n,s&&L&&((e,t)=>{for(const n in e)if(Fp(t,n)){const t=e[n];if(t){if(t.ref.focus){t.ref.focus();break}if(t.options){t.options[0].ref.focus();break}}}})(o,n))}finally{k.current=!0,S.current=!1,E.current=E.current+1,W()}}),[L,W,R,s,A,i,r]);(0,t.useEffect)((()=>()=>{w.current=!0,c.current&&Object.values(c.current).forEach((e=>ee(e,!0)))}),[ee]),R||(g.current=b.current.size>=m.current.size&&Vp(u.current));const ie={dirty:x.current,dirtyFields:h.current,isSubmitted:k.current,submitCount:E.current,touched:d.current,isSubmitting:S.current,isValid:M?k.current&&Vp(u.current):g.current},oe={triggerValidation:Q,setValue:(0,t.useCallback)((function(e,t,n){let r=!1;const i=pp(e);(i?e:[e]).forEach((e=>{const n=rh(e);r=!(!Y(n?e:Object.keys(e)[0],n?t:Object.values(e)[0])&&!i)||X(e)})),(r||i)&&W(),(n||i&&t)&&Q(i?void 0:e)}),[W,Y,Q]),register:(0,t.useCallback)((function(e,t){if(!j)if(rh(e))ne({name:e},t);else{if(!mp(e)||!("name"in e))return t=>t&&ne(t,e);ne(e,t)}}),[v.current,y.current]),unregister:(0,t.useCallback)((function(e){c.current&&(pp(e)?e:[e]).forEach((e=>ee(c.current[e],!0)))}),[]),getValues:(0,t.useCallback)((function(e){if(rh(e))return c.current[e]?nh(c.current,c.current[e].ref):Fp(v.current,e);const t=ih(c.current),n=Vp(t)?v.current:t;return e&&e.nest?Rp(n):n}),[]),formState:F?new Proxy(ie,{get:(e,t)=>{if(t in e)return z.current[t]=!0,e[t]}}):ie},ae=Object.assign(Object.assign(Object.assign({removeFieldEventListener:J,reRender:W},R?{validateSchemaIsValid:Z}:{}),{mode:{isOnBlur:N,isOnSubmit:M,isOnChange:D},reValidateMode:{isReValidateOnBlur:B,isReValidateOnSubmit:U},errorsRef:u,touchedFieldsRef:d,fieldsRef:c,isWatchAllRef:_,watchFieldsRef:p,resetFieldArrayFunctionRef:T,fieldArrayDefaultValues:f,validFieldsRef:b,dirtyFieldsRef:h,fieldsWithValidationRef:m,fieldArrayNamesRef:P,isDirtyRef:x,readFormStateRef:z,defaultValuesRef:v}),oe);return Object.assign({watch:function(e,t){const n=p.current,r=Lp(t),i=r?v.current:t,o=ih(c.current,e);if(rh(e))return vh(o,e,n,r?Fp(i,e):t,!0);if(pp(e))return e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:vh(o,t,n,i)})),{});_.current=!0;const a=!Vp(o)&&o||i;return e&&e.nest?Rp(a):a},control:ae,handleSubmit:re,reset:(0,t.useCallback)(((e,t={})=>{if(L)for(const e of Object.values(c.current))if(e){const{ref:t,options:n}=e,r=Ch(t)&&pp(n)?n[0].ref:t;if(bp(r))try{r.closest("form").reset();break}catch(e){}}e&&(v.current=e),Object.values(T.current).forEach((e=>lh(e)&&e())),(({errors:e,dirty:t,isSubmitted:n,touched:r,isValid:i,submitCount:o,dirtyFields:a})=>{c.current={},e||(u.current={}),r||(d.current={}),i||(b.current=new Set,m.current=new Set,g.current=!0),t||(x.current=!1),a||(h.current=new Set),n||(k.current=!1),o||(E.current=0),y.current={},f.current={},p.current=new Set,_.current=!1})(t),W()}),[]),clearError:(0,t.useCallback)((function(e){e?$p(u.current,pp(e)?e:[e]):u.current={},W()}),[]),setError:(0,t.useCallback)((function(e,t="",n){rh(e)?te(Object.assign(Object.assign({name:e},mp(t)?{types:t,type:""}:{type:t,message:n}),{shouldRender:!0})):pp(e)&&(e.forEach((e=>te(Object.assign({},e)))),W())}),[]),errors:u.current},oe)}(0,t.createContext)(null);function Oh(e){return t.createElement("div",{className:mo()("select",e.className)},t.createElement("select",{ref:e.inputRef,name:e.name,onChange:t=>e.onChange(t.target.value),required:e.required,value:e.value,className:e.hasAutofocus?"js-auto-focus":null},e.options.map((e=>t.createElement("option",{key:e.value,value:e.value},e.text)))))}Oh.propTypes={className:i().string,inputRef:i().func,name:i().string,onChange:i().func,options:i().arrayOf(i().shape({text:i().string,value:i().any})),required:i().bool,value:i().any,hasAutofocus:i().bool},Oh.defaultProps={className:"",inputRef:null,name:null,onChange:()=>{},options:[],required:!1,value:void 0,hasAutofocus:!1};var Ph=Ui.label`
  color: inherit !important;
  line-height: inherit;

  input {
    margin-right: 10px;
  }
`;function Ih(e){return t.createElement("div",{className:mo()("CheckboxGroup control",e.className)},e.options.map(((n,r)=>t.createElement(Td,{key:r},t.createElement(Ph,{className:"radio"},t.createElement("input",{type:"checkbox",name:e.name,ref:e.inputRef,defaultChecked:e.value===n.value,className:e.hasAutofocus&&0===r?"js-auto-focus":null,value:n.value,required:e.required}),n.text)))))}function Nh(e){return t.createElement("div",{className:mo()("RadioGroup",e.className)},e.options.map(((n,r)=>t.createElement(Td,{key:r},t.createElement(Ph,{className:"radio"},t.createElement("input",{type:"radio",name:e.name,onChange:t=>e.onChange(t.target.value),required:e.required,ref:e.inputRef,defaultChecked:e.value===n.value,value:n.value,className:e.hasAutofocus&&0===r?"js-auto-focus":null}),n.text)))))}Ih.propTypes={className:i().string,inputRef:i().func,name:i().string,options:i().arrayOf(i().shape({text:i().string,value:i().any})),value:i().any,hasAutofocus:i().bool,required:i().bool},Ih.defaultProps={className:"",inputRef:null,name:null,options:[],value:void 0,hasAutofocus:!1,required:!1},Nh.propTypes={className:i().string,inputRef:i().func,name:i().string,onChange:i().func,options:i().arrayOf(i().shape({text:i().string,value:i().any})),required:i().bool,value:i().any,hasAutofocus:i().bool},Nh.defaultProps={className:"",inputRef:null,name:null,onChange:()=>{},options:[],required:!1,value:void 0,hasAutofocus:!1};var Mh=__webpack_require__(4042);function Dh(e){return t.createElement(Mh.Z,{className:mo()({[e.className]:!!e.className,textarea:!0,"js-auto-focus":e.hasAutofocus}),rows:3,maxRows:12,maxLength:e.maxLength,minLength:e.minLength,ref:e.inputRef,onChange:t=>e.onChange(t.target.value),placeholder:e.placeholder,required:e.required,name:e.name,defaultValue:e.defaultValue,value:e.value,disabled:e.disabled})}Dh.propTypes={className:i().string,disabled:i().bool,maxLength:i().number,minLength:i().number,name:i().string,onChange:i().func,required:i().bool,inputRef:i().func,placeholder:i().string,value:i().string,defaultValue:i().string,hasAutofocus:i().bool},Dh.defaultProps={className:"",disabled:!1,maxLength:null,minLength:null,name:null,onChange:()=>{},required:!1,inputRef:null,placeholder:"",value:void 0,defaultValue:void 0,hasAutofocus:!1};const Ah=Ui.form`
  max-width: 420px;

  .help {
    margin-bottom: 0.5rem;
  }

  textarea {
    margin: 2px 0;
  }

  /* Positioning submit button */
  .input-send-button {
    margin: 12px 1px 7px;

    &:hover {
      color: ${({theme:e})=>e.design.form_buttons_color};
    }
  }

  .label:not(:last-child) {
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
  }

  @media ${go} {
    .label:not(:last-child) {
      /* This min-height ensures two inputs ( */
      min-height: 1.34rem;
    }
  }
`;function jh(e){const{message:n}=e,{text:r}=d(),{register:i,handleSubmit:o}=Th(),a=ie()(n,"extra.form.sendLabel",r.send);const s=ie()(n,"extra.form.elements",[]);return t.createElement(Lu,{message:n,showText:!0},t.createElement(Ah,{onSubmit:o((t=>{e.onSubmit({type:"text",message:a,custom_data:t})})),className:"InputForm columns is-multiline"},s.map((function(e,n){const{element:r,label:o,help:a,options:s,className:l,attributes:c={}}=e,u=ae.Z.nullifyStrings(c);let d=null;switch(r){case"input":switch(u.type){case"checkbox":d=t.createElement(Ih,Po({inputRef:i,options:s},u,{hasAutofocus:0===n}));break;case"radio":d=t.createElement(Nh,Po({},u,{options:s,inputRef:i,hasAutofocus:0===n}));break;default:d=t.createElement(hd,Po({},u,{inputRef:i,hasAutofocus:0===n}))}break;case"select":d=t.createElement(Oh,Po({},u,{className:"is-block",options:s,inputRef:i,hasAutofocus:0===n}));break;case"textarea":d=t.createElement(Dh,Po({},u,{inputRef:i,hasAutofocus:0===n}));break;case"label":case"button":case"progress":default:return null}return t.createElement("div",{key:n,className:mo()("column",l)},o&&t.createElement("label",{className:"label"},o),d,a&&t.createElement("p",{className:"help"},a))})),t.createElement("div",{className:"column is-full"},t.createElement("div",{className:"control"},t.createElement(Rd,null,a)))))}let Rh;jh.propTypes={onSubmit:i().func,message:i().object},jh.defaultProps={onSubmit:()=>{},message:{}};function Lh(e,t,n,r){Rh=new e.google.maps.places.Autocomplete(n.current,{}),Rh.addListener("place_changed",(()=>async function(e,t){e(Rh.getPlace().formatted_address),t(!0)}(t,r)))}function Fh(e){const{design:{google_api_key:n}}=d(),{document:r,window:i}=s(),o=(0,t.useRef)(null),[a,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>Lh(i,l,o,u);"google"in i?e():((e,t,n)=>{const r=t.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=()=>n(),r.src=e,t.getElementsByTagName("head")[0].appendChild(r)})(`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`,r,e)}),[n,i,r]),t.createElement(Wd,Po({className:"InputLocation",selectedValue:a,submitOnEnter:c},Vd(e)),t.createElement(hd,{inputRef:o,type:"text"}))}Fh.propTypes={message:i().object,onSubmit:i().func},Fh.defaultProps={message:null,onSubmit:()=>{}};var zh,Bh=__webpack_require__(5893);!function(e){e.ONE_THIRD="1/3",e.TWO_THIRD="2/3",e.HALF="1/2",e.ONE="1"}(zh||(zh={}));const Uh=Ui.form`
  margin-bottom: 28px;
`;function Wh(e){const{text:n}=d(),{message:{minValue:r,maxValue:i,prefix:o}}=e,a=n.input_number_help_min,s=n.input_number_help_max;return t.createElement(Wd,Po({className:"InputNumber",prefix:o,renderAs:Uh,validate:e=>oe.validNumberHelper({value:e,minText:a,minValue:r,maxText:s,maxValue:i})},Vd(e)),t.createElement(hd,{max:i,min:r,placeholder:e.message.getPlaceholder(n),type:"number"}))}function Vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qh(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Vh(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Vh(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Wh.propTypes={message:i().object,onSubmit:i().func},Wh.defaultProps={message:null,onSubmit:()=>{}};const Hh=Ui.form`
  overflow: hidden;

  &.is-animate-messages-on {
    animation-name: showTextarea;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
  }
`;function $h(e){return t.createElement(Wd,Po({className:"InputTextLong",renderAs:Hh},Vd(qh(qh({},e),{},{sendButtonType:"button"})),{helpText:""}),t.createElement(Dh,{className:"InputTextLong__TextArea"}))}$h.propTypes={message:i().object,onSubmit:i().func},$h.defaultProps={message:null,onSubmit:()=>{}};const Yh=Ui.form`
  overflow: hidden;
`,Kh=Ui.div`
  overflow: hidden;
`;function Gh(e){return t.createElement(Wd,Po({className:"InputText",renderAs:e.message.isInsideForm?Kh:Yh},Vd(e)),t.createElement(hd,{type:"text"}))}function Qh(e){return t.createElement(Wd,Po({className:"InputTel"},Vd(e)),t.createElement(hd,{name:"phone",type:"tel"}))}function Xh(e){return t.createElement(Wd,Po({className:"InputUrl"},Vd(e)),t.createElement(hd,{pattern:"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",placeholder:"https://",required:!0,type:"url"}))}Gh.propTypes={message:i().object,onSubmit:i().func},Gh.defaultProps={message:null,onSubmit:()=>{}},Qh.propTypes={message:i().object},Qh.defaultProps={message:null},Xh.propTypes={message:i().object},Xh.defaultProps={message:null};var Zh={default:null,[L]:jf,[F]:Rf,[U]:Fh,[V]:Wh,[K]:Qh,[G]:Gh,[Q]:$h,[X]:Xh};function Jh({message:e}){const t=Zh[e.inputType]||Zh.default;return(0,Bh.jsx)(t,{message:e},void 0)}const em={[zh.ONE_THIRD]:"is-one-third",[zh.TWO_THIRD]:"is-two-thirds",[zh.HALF]:"is-half",[zh.ONE]:"is-full"};function tm(e,t){return 0!==t?"":em[e]||""}const nm=Ui.div`
  display: flex;
  margin-bottom: 30px;

  > div:not(:first-child) {
    margin-left: 8px;
  }
`;function rm({disposition:e,inputs:t,samurai:n}){const r=ae.Z.appendUIKey(t);return(0,Bh.jsx)(nm,Object.assign({className:"columns is-mobile"},{children:r.map(((t,r)=>(0,Bh.jsx)("div",Object.assign({className:`column ${tm(e,r)}`},{children:(0,Bh.jsx)(Jh,{message:os(Object.assign(Object.assign({},t),{isInsideForm:!0,samurai:n}))},void 0)}),t.uiKey)))}),void 0)}var im=function({message:e,onSubmit:t}){const{text:n}=d(),r=e.rows?ae.Z.appendUIKey(Object.values(e.rows)):[];return(0,Bh.jsx)(Lu,Object.assign({message:e,showText:!0},{children:(0,Bh.jsxs)("form",Object.assign({onSubmit:e=>{e.preventDefault();const n=new FormData(e.target),r={};for(let[e,t]of n.entries())r[e]=t;t({type:P.STRUCTURED_DATA,message:Object.values(r).join(","),data:r})}},{children:[r.map((t=>(0,Bh.jsx)(rm,{disposition:t.disposition,inputs:t.inputs,samurai:e.samurai},t.uiKey))),(0,Bh.jsx)(Rd,{children:e.submitButtonLabel||n.send},void 0)]}),void 0)}),void 0)};const om=Ui.div`
  &:not(:first-child) .custom-button {
    padding-left: 0.4rem;
  }

  &:not(:last-child) .custom-button {
    padding-right: 0.4rem;
  }

  .InputRating__button-label {
    filter: grayscale(100%);
    opacity: 0.44;
    transition: filter 0.25s, opacity 0.25s;
  }

  .custom-button[data-color='1'] {
    .InputRating__button-label {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  .button {
    background-color: ${({theme:e})=>e.design.message_background_color_bot};
  }
`;function am(e){const[n,r]=(0,t.useState)(-1),i=e.buttons;return t.createElement("div",{className:"InputRating"},t.createElement(Qd,null,e.help),t.createElement("div",{className:mo()({"field has-addons is-marginless is-inline-flex":!0,"is-cumulative":e.cumulative}),style:{maxWidth:"100%"}},i.map(((i,o,a)=>t.createElement(om,{key:i.payload,className:"InputRating__button control"},t.createElement(ga,{type:"button",className:mo()({"is-rounded":0===o||o===a.length-1}),"data-key":o,"data-color":n>=o?"1":"0",onClick:()=>e.onSubmit(i),onMouseOver:()=>r(o),onMouseLeave:()=>r(-1)},t.createElement("span",{className:mo()({"InputRating__button-label":!0,"is-size-3":a.length<=5,"is-size-6":a.length>5})},i.label)))))))}function sm({message:e,onSubmit:n}){const{text:r}=d(),i=e.getButtons();return t.createElement(am,{buttons:i,onSubmit:t=>{if(e.isCumulative){const e=i.indexOf(t);n({type:"button",message:i.map((e=>e.label)).slice(0,e+1).join(""),payload:t.payload})}else n({type:"button",message:t.label,payload:t.payload})},cumulative:e.isCumulative,help:r.input_rating_help})}am.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),cumulative:i().bool,help:i().string,onSubmit:i().func},am.defaultProps={buttons:[],cumulative:!1,help:"",onSubmit:()=>{}},sm.propTypes={message:i().object,onSubmit:i().func},sm.defaultProps={message:null,onSubmit:()=>{}};const lm=Ui.a`
  height: auto;
`;const cm=Ui.div`
  position: relative;
  display:flex;
  flex-direction: column;

  @media ${go} {
    width: calc(100% - 50px);
  }
  .columns {
    align-items: start;
    align-self: center;
    flex-grow:1;
  
    @media ${go} {
      &.has-avatar, &:not(.has-arrows) {
        align-self: auto;
      }
      &.has-arrows.has-avatar {
        margin-left: -62px;
      }
    }

    .InputScale_Buttons__container {
        flex-direction: column;
        flex-grow:1;
        .InputScale_Buttons__row {
          display:flex;
          align-content: stretch;
        }
      }
  }

  .control {
    margin-left: 2px;
    margin-right: -1px;
    height: 100%;
    flex-grow: 1;
    border-radius: 0;
    border: 1px solid transparent;
    width: 50px;
    max-width: 50px;

    &:first-of-type {
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
    }

    &:last-of-type {
      border-top-right-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }
  
    &:hover {
      .InputScale__hoverelement {
        opacity: 1;
        transform: scaleY(1.5);
      }

      .InputScale__number {
        color: ${({theme:e})=>e.design.form_inputs_color};
      }
    }
  }

  .InputScale__number {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputScale__Tags {
    color: ${({theme:e})=>e.design.form_help_color};
    }
  }

  .InputScale__hoverelement {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }
`,um=Ui.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  span:first-child {
    margin-right: 20px;
  }
  @media ${yo} {
    span {
      white-space: normal;
      max-width: 100px;
    }
  }
`,dm=Ui.div`
  top: 0;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
  transition: 0.2s ease-in-out transform, 0.2s ease-in-out opacity;
  box-shadow: 0 0 18px -3px rgba(0, 0, 0, 0.1);
`,fm=Ui.span`
  z-index: 5;
  position: relative;
  font-size: 17px;
`,pm=Ui.button`
  && {
    padding: 3;
    flex-grow: 0;
  }
  &.is-scale-arrow-right,
  &.is-scale-arrow-left {
    margin-top: 7%;
  }

  &.is-scale-arrow-right {
    margin-left: 10px;
  }
  &.is-scale-arrow-left {
    margin-right: 10px;
  }
`,hm=({onClick:e,isVisible:n,isRightArrow:r=!1})=>t.createElement(pm,{type:"button",className:mo()({"is-scale-arrow-left":!r,"is-scale-arrow-right":r,"is-invisible":!n,"button has-text-weight-bold is-inverted":!0}),onClick:e},t.createElement(qc,{isRightArrow:r}));function mm({inputScaleRef:e,buttons:n,help:r,prevButtonHandler:i,nextButtonHandler:o,onSubmit:a,leftTag:s,rightTag:l,firstValue:c,lastValue:u}){const f=i||o,{design:{avatar_enabled:p}}=d();return t.createElement(cm,{className:"InputScale",ref:e},t.createElement(Qd,null,r),t.createElement("div",{className:mo()({"columns is-mobile":!0,"has-avatar":p,"has-arrows":f})},f&&t.createElement("div",{className:"column is-narrow"},t.createElement(hm,{onClick:i,isVisible:!!i})),t.createElement("div",{className:"column is-narrow InputScale_Buttons__container"},t.createElement("div",{className:"InputScale_Buttons__row "},n.map((e=>t.createElement("button",{type:"button",key:e.payload,className:mo()({"control button has-text-weight-bold is-medium":!0}),onClick:()=>a(e)},t.createElement(fm,{className:"InputScale__number"},e.label),t.createElement(dm,{className:"InputScale__hoverelement"}))))),t.createElement(um,{className:"InputScale__Tags is-flex is-size-7 is-uppercase is-unselectable"},t.createElement("span",null,`${c} - ${s}`),t.createElement("span",null,`${u} - ${l}`))),f&&t.createElement("div",{className:"column is-narrow"},t.createElement(hm,{onClick:o,isRightArrow:!0,isVisible:!!o}))))}hm.propTypes={isVisible:i().bool,isRightArrow:i().bool,onClick:i().func},hm.defaultProps={isVisible:!1,isRightArrow:!1,onClick:null},mm.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),help:i().string,leftTag:i().string,onSubmit:i().func,rightTag:i().string,prevButtonHandler:i().func,nextButtonHandler:i().func,firstValue:i().string,lastValue:i().string,inputScaleRef:i().object},mm.defaultProps={buttons:[],help:"",leftTag:"",onSubmit:()=>{},rightTag:"",prevButtonHandler:null,nextButtonHandler:null,firstValue:null,lastValue:null,inputScaleRef:null};function bm({message:e,onSubmit:n}){const{text:r}=d(),i=(0,t.useMemo)((()=>e.getButtons()),[e]),o=(0,t.useRef)(null),[a,s]=(0,t.useState)(0);(0,t.useEffect)((()=>{o&&o.current&&s(((e,t)=>{const n=Math.floor(e/50),r=Math.floor((e-120)/50);return e>550?10:n>=t?n:r})(o.current.clientWidth,i.length))}),[o,i]);const{currentPageItems:l,prevButtonHandler:c,nextButtonHandler:u}=function(e,n){const[r,i]=(0,t.useState)(0),[o,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)([]);return(0,t.useEffect)((()=>{u(e.slice(r*n,r*n+n)),a(r>0),l((r+1)*n<e.length)}),[e,n,r]),(0,t.useEffect)((()=>{i(0)}),[n]),{currentPageItems:c,prevButtonHandler:o?()=>i((e=>e-1)):null,nextButtonHandler:s?()=>i((e=>e+1)):null}}(i,a);return t.createElement(mm,{inputScaleRef:o,buttons:l,leftTag:e.buttonsLeftTag,onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help,rightTag:e.buttonsRightTag,prevButtonHandler:c,nextButtonHandler:u,firstValue:i[0].label,lastValue:i[i.length-1].label})}bm.propTypes={message:i().object,onSubmit:i().func},bm.defaultProps={message:null,onSubmit:()=>{}};var gm=__webpack_require__(2558);const vm=Ui.form`
  width: 300px;
  max-width: 100%;

  @media ${yo} {
    margin: 0 auto;
  }

  .InputStripe__card-element {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }
`,ym=Ui.div`
  position: static;
  font-size: $size-6;
`,wm=({isLoading:e,isDisabled:n,label:r,className:i})=>t.createElement(da,{className:mo()({[i]:!0,"InputStripe__pay-button button":!0,"is-loading":e}),isDisabled:n,label:r,type:"submit"});wm.propTypes={className:i().string,label:i().string,isLoading:i().bool,isDisabled:i().bool},wm.defaultProps={className:"",label:"Pay",isLoading:!1,isDisabled:!1};const _m=Ui(wm)`
  width: 100%;
  padding: 0.75rem;
  height: inherit;
`;function km({amount:e,currency:n,email:r,setEmail:i,errorMessage:o,onInputChange:a,onSubmit:s,isLoading:l,isDisabled:c}){const u={base:{fontSize:"16px"}},{text:f}=d(),p=f.stripe_pay_button_label.replace(/@amount/i,`${n} ${e}`);return t.createElement(vm,{className:mo()({"InputStripe ":!0}),onSubmit:s},t.createElement("div",{className:"columns is-multiline"},t.createElement("div",{className:"column is-full"},t.createElement(hd,{onChange:i,name:"email",type:"email",placeholder:"Email",required:!0,value:r})),t.createElement("div",{className:"column is-full"},t.createElement(gm.Ke,{className:"input is-block",onChange:a,disabled:l,style:u})),t.createElement("div",{className:"column is-half"},t.createElement(gm.Oh,{className:"input is-block",onChange:a,disabled:l,style:u})),t.createElement("div",{className:"column is-half"},t.createElement(gm._e,{className:"input is-block",onChange:a,disabled:l,style:u}))),t.createElement(_m,{isLoading:l,isDisabled:c,label:p,type:"submit"}),t.createElement(ym,{className:"help is-danger",role:"alert"},o))}km.propTypes={errorMessage:i().string,currency:i().string,amount:i().oneOfType([i().string,i().number]),email:i().string,setEmail:i().func,onSubmit:i().func,onInputChange:i().func,isLoading:i().bool,isDisabled:i().bool},km.defaultProps={errorMessage:"",currency:"USD",amount:0,email:"",setEmail:()=>{},onSubmit:()=>{},onInputChange:()=>{},isLoading:!1,isDisabled:!1};var xm=km;function Em({amount:e,currency:n,elements:r,stripe:i,intent_secret:o,onSubmit:a}){const[s,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1),[d,f]=(0,t.useState)("");return t.createElement(xm,{amount:e,currency:n,email:d,errorMessage:s,isDisabled:!i,isLoading:c,onSubmit:e=>{e.preventDefault(),u(!0);const t=r.getElement("cardNumber");i.confirmCardPayment(o,{payment_method:{card:t,billing_details:{email:d}},receipt_email:d}).then((e=>{e.error?l(e.error.message):a(),u(!1)}))},setEmail:f})}Em.propTypes={currency:i().string,intent_secret:i().string,amount:i().oneOfType([i().string,i().number]),elements:i().object,stripe:i().object,onSubmit:i().func},Em.defaultProps={currency:"",intent_secret:"",amount:0,elements:null,stripe:null,onSubmit:()=>{}};var Sm=(0,gm.kv)(Em);function Cm({message:{stripe_key:e,intent_secret:n,currency:r,amount:i,payment_id:o},onSubmit:a}){const{document:l,window:c}=s(),[u,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{if(c.Stripe)d(c.Stripe(e));else{const t=l.createElement("script");t.type="text/javascript",t.src="https://js.stripe.com/v3/",t.onload=()=>{d(c.Stripe(e))},l.getElementsByTagName("head")[0].appendChild(t)}}),[e,l,c]),t.createElement(gm.vw,{stripe:u},t.createElement(gm.eK,null,t.createElement(Sm,{intent_secret:n,currency:r,amount:i,onSubmit:()=>{a({type:"stripe",action:"submit",message:"Payment success",payload:{payment_id:o}})}})))}Cm.propTypes={message:i().shape({stripe_key:i().string,currency:i().string,intent_secret:i().string,payment_id:i().number,amount:i().oneOfType([i().string,i().number])}),onSubmit:i().func},Cm.defaultProps={message:{},onSubmit:()=>{}};const Tm=Ui.div`
  padding-bottom: 1.5rem;

  .custom-buttons {
    width: 50%;

    &:hover {
      .icon {
        transform: none;
      }
    }

    @media ${go} {
      width: 50%;
    }

    .custom-button {
      padding: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      &:hover {
        .InputYesNo__button-label {
          opacity: 1 !important;
        }
      }

      &:not(:last-child) {
        margin-right: 25px !important;
      }
    }

    .icon {
      font-size: 25px !important;
      transform: scale(0.9);
    }
  }

  .buttons .button {
    color: ${({theme:e})=>e.design.form_buttons_color};
    background-color: ${({theme:e})=>e.design.form_buttons_background_color}; 
    border-color: ${({theme:e})=>e.design.form_buttons_border_color};
  }

  .InputYesNo__button-label {
    color: ${({theme:e})=>e.design.form_help_color};
  }
`,Om=Ui.span`
  position: absolute;
  bottom: -1.5rem;
  font-size: 0.8rem !important;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.7;
`;function Pm({help:e,buttons:n,onSubmit:r,buttonsRef:i,isAnimated:o}){return t.createElement(Tm,{className:"InputYesNo"},t.createElement(Qd,null,e),t.createElement("div",{className:"field is-marginless"},t.createElement(No,{ref:i},n.map((e=>t.createElement(ba,{className:mo()({"is-rounded":!0,"is-animated":o}),key:e.payload,onClick:()=>r(e)},(e=>{const n=ie()(e,"attachment.type",null),r=ie()(e,"attachment.value",null);switch(n){case"icon":return t.createElement($d,{icon:r,isBig:!0});case"emoji":return t.createElement(Hd,null,r);case"image":return t.createElement(Bo,{className:"is-overlay",figureStyle:{position:"absolute"},rounded:!0,src:r});default:return null}})(e),t.createElement(Om,{className:"InputYesNo__button-label is-size-7"},e.label)))))))}function Im({message:e,onSubmit:n}){const{text:r}=d(),i=e.getButtons();return t.createElement(nf,{buttons:i},t.createElement(Pm,{onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help}))}Pm.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string,attachment:i().shape({type:i().string,value:i().string})})),help:i().string,onSubmit:i().func,isAnimated:i().bool,buttonsRef:i().object},Pm.defaultProps={buttons:[],help:"",onSubmit:()=>{},isAnimated:!1,buttonsRef:null},Im.propTypes={message:i().object,onSubmit:i().func},Im.defaultProps={message:null,onSubmit:()=>{}};var Nm={default:null,[I]:qd,[N]:rf,[M]:df,[D]:ff,[A]:pf,[j]:Ef,[R]:_f,[L]:jf,[B]:jh,[F]:Rf,[z]:dp,[U]:Fh,[W]:im,[V]:Wh,[q]:sm,[H]:function(){const{brand_name:e}=d(),n=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(e)}&utm_medium=landbot&utm_campaign=goodbye`;return t.createElement("div",{className:"InputReferral "},t.createElement(Qd,null,"Want to create your own? It's easy, beautiful and free"),t.createElement("div",{className:"buttons"},t.createElement(lm,{className:"button py-3 px-5",href:n,target:"_blank",rel:"noopener noreferrer"},t.createElement("span",{className:"icon is-size-4"},t.createElement(Yc,null)),t.createElement("span",{className:"ml-3"},"Create a Landbot"))))},[$]:bm,[Y]:Cm,[K]:Qh,[G]:Gh,[Q]:$h,[X]:Xh,[Z]:Im};function Mm({message:e}){const{customSubmitFn:n}=e,r=(i=e.inputType,Nm[i]||Nm.default);var i;const o=Zo(),{setIsSubmitted:a,isSubmitted:s}=vd();return(0,t.useEffect)((()=>()=>{a(!1)}),[a]),t.createElement(t.Fragment,null,!s&&t.createElement(r,{onSubmit:e=>{let t=e;n&&"function"==typeof window[n]&&(t=window[n](e)),a(!0),o.events.emit(aa,t)},message:e}))}Mm.propTypes={message:i().object},Mm.defaultProps={message:{}};const Dm=Ui(Bo)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${e=>ko(e.theme.initial_vars.horizontal_unit,25)};
    max-height: ${e=>ko(e.theme.initial_vars.vertical_unit,25)};

    @media ${go} {
      max-width: ${e=>ko(e.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${e=>ko(e.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function Am({message:e,fileIndex:n,openModal:r}){const{url:i}=e.files[n];return t.createElement(Uu,{message:e,classNames:["is-inline-flex","mb-2"]},i&&t.createElement(Dm,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:r,src:i}))}function jm({message:e,fileIndex:n}){const{url:r}=e.files[n];return t.createElement(Lu,{message:e,classNames:["is-inline-flex","mb-2"]},t.createElement("p",{className:"content is-marginless"},t.createElement("a",{className:"button",href:r||null,target:"_blank",style:{justifyContent:"flex-start",maxWidth:"330px",textDecoration:"underline"},rel:"noopener noreferrer"},t.createElement("span",{className:"icon"},t.createElement(Hc,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",fillRule:null,rotate45:!1})),t.createElement("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"}},r))))}function Rm({message:e}){const n=ae.Z.appendUIKey(e.files).map(((n,r)=>"image"===n.type?t.createElement(Am,{key:n.uiKey,message:e,fileIndex:r}):t.createElement(jm,{key:n.uiKey,message:e,fileIndex:r})));return t.createElement("div",{className:"is-flex is-flex-direction-column is-align-items-flex-end"},n)}Am.propTypes={message:i().object,openModal:i().bool,fileIndex:i().number},Am.defaultProps={message:{},openModal:!0,fileIndex:null},jm.propTypes={message:i().object,fileIndex:i().number},jm.defaultProps={message:{},fileIndex:null},Rm.propTypes={message:i().object},Rm.defaultProps={message:{}};var Lm={[P.BUTTON]:rd,[P.CALENDLY]:rd,[P.CARDS]:rd,[P.DIALOG]:Fu,[P.DOCUMENT]:Yu,[P.AUDIO]:Yu,[P.VIDEO]:Yu,[P.IFRAME]:Qu,[P.IMAGE]:ed,[P.INPUT]:Mm,[P.MULTI_QUESTION]:Mm,[P.LOCATION]:Xu,[P.MEDIA_DIALOG]:td,[P.MULTIPLE_IMAGES]:nd,[P.REDIRECT]:sd,[P.REFERRAL]:pd,[P.STRIPE]:rd,[P.STRIPE_INTENT]:rd,[P.TEXT]:rd,[P.MESSAGEWITHINPUT]:md,[P.MULTIPLE_FILES]:Rm,[P.STRUCTURED_DATA]:rd,default:null};function Fm(e){return t.createElement(Bo,{imgClassName:mo()({[`is-${e.shape}`]:!0,"is-unselectable":!0}),className:mo()({[e.className]:!!e.className,Avatar:!0}),rounded:"circle"===e.shape,src:e.src,size:e.size,contain:e.shape===qn.ORIGINAL})}Fm.propTypes={className:i().string,shape:i().string,size:i().number,src:i().string},Fm.defaultProps={className:null,shape:"circle",size:35,src:""};const zm=Ui(Fm)`
  transform-origin: bottom;
  transform: scale(${e=>e.scale});

  .is-squared {
    border-radius: 3px;
  }

  .Media {
    width: 100%;
    height: 100%;
  }
`;zm.propTypes={scale:i().number},zm.defaultProps={scale:1};var Bm=zm;function Um({message:e}){const n=io(),r=d(),{design:{avatar_shape:i,avatar_scale:o}}=r,a=e.getAvatar({config:r,agents:n});return t.createElement(t.Fragment,null,t.createElement(Bm,{scale:o,shape:e.isAuthorAgent?qn.ROUNDED:i,src:a}))}Um.propTypes={message:i().object},Um.defaultProps={message:{}};const Wm=Ui.div`
  position: absolute;
  top: calc(
    100% + ${e=>ko(e.theme.initial_vars.vertical_unit,1)}
  );
  left: 50%;
  height: ${e=>ko(e.theme.initial_vars.vertical_unit,2)};
  transform: translateX(-50%) scale(0.6);
`;function Vm(e){return t.createElement(Wm,null,e.children)}function qm(e){let{leftContent:n,centerContent:r,rightContent:i,className:o,isAnimateMessagesOn:a,messageShape:s,hasLeftContent:l,isBubbleStyled:c}=e,u=Fc(e,["leftContent","centerContent","rightContent","className","isAnimateMessagesOn","messageShape","hasLeftContent","isBubbleStyled"]);const{isAuthorUser:d,isGhost:f,isEval:p,author:h,blockID:m,className:b,type:g,inputType:v}=u.message,{isStart:y,isEnd:w,isInputInline:_,isAvatarVisible:k}=u.groupProps;return t.createElement(t.Fragment,null,t.createElement(Ec,{author:h,block:m,classNames:["Message__message","message",_&&!c&&"is-full-width-content"],containerClassNames:["Message",!!o&&o,b,r&&r.url&&"u-no-padding",d&&"is-reverse",y&&"is-start",w&&"is-end",p&&"is-eval",f&&"is-ghost",a&&"is-animate-messages-on",s===Vn.TRANSPARENT&&"Message--is-shape-transparent",_&&c&&"is-medium-width"],inputType:v,type:g},l&&t.createElement(Sc,{classNames:["Message__message-left","message-left","is-autoscroll-mutation-target",(_||!c)&&"is-hidden-mobile",!k&&"is-invisible"]},n),t.createElement(Cc,{classNames:["Message__message-content","message-content"]},r),t.createElement(Tc,{classNames:["Message__message-right","message-right"]},i)))}Vm.propTypes={children:i().node},Vm.defaultProps={children:null},qm.propTypes={leftContent:i().element,centerContent:i().element,rightContent:i().element,message:i().object,className:i().string,groupProps:i().shape({isEnd:i().bool,isStart:i().bool,isLastMessage:i().bool,isInputInline:i().bool,isAvatarVisible:i().bool}),isAnimateMessagesOn:i().bool,messageShape:i().string,hasLeftContent:i().bool,isBubbleStyled:i().bool},qm.defaultProps={leftContent:null,centerContent:null,rightContent:null,message:{},className:"",groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!0},isAnimateMessagesOn:!0,messageShape:Vn.SEMI,hasLeftContent:!0,isBubbleStyled:!0};var Hm=Ui(qm)`
  transition: opacity 0.2s;

  @media ${go} {
    .Avatar {
      height: 40px;
      width: ${e=>e.theme.avatar.width};
    }
  }

  /* Position date for bot message */
  .message-left .MessageDate {
    position: absolute;

    ${e=>Ei`
        top: calc(100% + ${ko(e.theme.initial_vars.horizontal_unit)});
      `};
  }

  .message-right .MessageDate {
    padding-left: 11px;
  }

  &.is-ghost {
    opacity: 0.6;
  }

  /* Animations */
  &.is-eval.is-animate-messages-on {
    .MessageBubble,
    .MessageMediaBubble {
      animation: message-bubble-in 0.3s ease-in-out;
    }

    .MessageBubble__content {
      opacity: 0;
      animation: message-content-in 0.6s ease-in-out 0.1s forwards;
      width: 100%;
    }
  }

  &.is-start.is-eval[data-author='bot'].is-animate-messages-on,
  &.is-start.is-eval[data-author='agent'].is-animate-messages-on {
    animation: message-avatar-left-in 0.2s ease-in-out forwards;
  }

  @media ${go} {
    &[data-author='user'] .MessageDate {
      position: relative;
      margin-right: ${e=>ko(e.theme.initial_vars.horizontal_unit,-5)};
    }
  }

  /* MULTIMEDIA MESSAGE */
  @media ${yo} {
    &[data-type='image'],
    &[data-type='iframe'],
    &[data-type='media_dialog'] {
      figure {
        max-width: 279px;
      }
    }
  }

  &.Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='image'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='iframe'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='media_dialog'][data-author='bot'],
  .Message--is-shape-transparent[data-author='bot'] + &[data-author='user'] {
    /* Un mensaje de tipo imagen/iframe que es posterior a un mensaje de texto de bot tiene un espaciado mayor
     que entre los mensajes de tipo texto. Lo mismo para un mensaje de usuario. */
    margin-top: 20px;
  }

  &.Message--is-shape-transparent .InputButtons,
  &.Message--is-shape-transparent .InputButtonsMultiple,
  &.Message--is-shape-transparent .InputButtonsMultiSearch {
    margin-top: 15px;
  }

  &.Message--is-shape-transparent .MessageMediaBubble .image {
    margin-bottom: 20px;
  }

  /* Decorator only visible for group ending messages */
  &:not(.is-end) .MessageBubble__Decorator {
    display: none;
  }
`;const $m=Ui.span`
  margin-right: 0.2rem;
  margin-top: 0.8rem;
  line-height: 36px;
  color: ${({theme:e})=>e.design.message_color_bot};

  + .Message__message-failed-retry-link,
  + .Message__message-failed-retry-link:hover {
    color: ${({theme:e})=>e.design.message_color_bot};
  }

`;function Ym({hasRetry:e,retrying:n,onClickRetry:r,failedMessage:i,retryingMessage:o,retryButtonLabel:a}){return t.createElement(Ec,{containerClassNames:["Message","is-reverse","FailedMessage"],classNames:["Message__message","Message__message-failed","message"]},t.createElement($m,{className:"Message__message-failed-text"},n?o:i),e&&!n&&t.createElement(da,{className:"Message__message-failed-retry-link is-link-style is-not-disabled",onClick:r},a))}function Km({retryCb:e}){const{text:{error_send_message:n,error_retry_button_label:r,error_retrying_message:i}}=d(),[o,a]=(0,t.useState)(!1);return t.createElement(Ym,{hasRetry:"function"==typeof e,onClickRetry:()=>{a(!0);const t=()=>{setTimeout((()=>{a(!1)}),1e3)},n=e();n instanceof Promise?n.finally(t):t()},failedMessage:n,retryButtonLabel:r,retryingMessage:i,retrying:o})}Ym.propTypes={hasRetry:i().bool,retrying:i().bool,onClickRetry:i().func,failedMessage:i().string,retryingMessage:i().string,retryButtonLabel:i().string},Ym.defaultProps={hasRetry:!1,retrying:!1,onClickRetry:null,failedMessage:"We couldn't send this message",retryingMessage:"Retrying...",retryButtonLabel:"Try again"},Km.propTypes={retryCb:i().func},Km.defaultProps={retryCb:null};const Gm=Ui.span`
  display: none;
  width: ${({theme:{avatar:e}})=>e.width};
  text-align: center;
  line-height: 0.8rem;
  color: ${({theme:e})=>e.design.form_help_color};

  @media ${go} {
    display: block;
  }
`,Qm=Ui.b`
  font-weight: normal;
`;function Xm({children:e}){return t.createElement(Gm,{className:"MessageDate is-unselectable is-size-7"},t.createElement(Qm,{className:"MessageDate__text"},e))}function Zm({timestamp:e}){return e?t.createElement(Xm,null,cn.getMessageDate(e)):null}function Jm({message:e,groupProps:n}){const{isLastMessage:r,isInputInline:i}=n,o=Fo(),{failed:a,retryCb:s,timestamp:l,rich_text:c,isEval:u,isWelcome:f,isGhost:p,isInputBubbleStyled:m,isAuthorUser:b}=e,g=i?e.getInputInlineMessageType():e.getMessageType(r),v=g?function(e){return Lm[e]||Lm.default}(g):null,y=!i||m,{design:{avatar_enabled:w,message_shape:_}}=d(),{has_messages_animation_on:k}=au();!function(e,n){const r=h();(0,t.useEffect)((()=>{e&&n&&ae.Z.extractScriptsfromString(e).forEach((e=>{ae.Z.evalScriptTag(e,{context:r})}))}),[e,n,r])}(c,u);const x=Au(e.isTyping,y),E=!e.hasInput&&x;return t.createElement(t.Fragment,null,v&&t.createElement(Hm,{leftContent:!o&&w?t.createElement(t.Fragment,null,t.createElement(Um,{message:e}),E?t.createElement(Vm,null,t.createElement(jl,null)):!b&&!f&&t.createElement(Zm,{timestamp:l})):null,centerContent:t.createElement(v,{message:e}),rightContent:b&&!p?t.createElement(Zm,{timestamp:l}):null,message:e,hasLeftContent:w&&!o,isAnimateMessagesOn:k&&r,groupProps:n,messageShape:_,isBubbleStyled:y}),a&&!i&&t.createElement(Km,{retryCb:s}))}function eb({previousMessage:e,currentMessage:n,nextMessage:r,isInputInline:i,children:o}){const a=null===r,s=(0,t.useMemo)((()=>{const t=e&&ie()(e.raw,"samurai"),r=ie()(n.raw,"samurai");return!e||t!==r}),[n,e]),l=(0,t.useMemo)((()=>{const e=ie()(n.raw,"samurai"),t=r&&ie()(r.raw,"samurai");return a?i?n.isInputBubbleStyled:!n.hasInput||!n.isInputBubbleStyled||n.isAuthorAgent:t!==e}),[n,r,a,i]),c=(0,t.useMemo)((()=>i?n.isInputBubbleStyled:[P.IMAGE,P.IFRAME].includes(n.type)?l&&(!a||a&&!n.hasInput):l),[l,i,n,a]);return t.cloneElement(o,{groupProps:{isStart:s,isEnd:l,isAvatarVisible:c,isInputInline:i,isLastMessage:a}})}Xm.propTypes={children:i().node},Xm.defaultProps={children:null},Zm.propTypes={timestamp:i().number},Zm.defaultProps={timestamp:null},Jm.propTypes={message:i().object,groupProps:i().shape({isEnd:i().bool,isStart:i().bool,isLastMessage:i().bool,isInputInline:i().bool,isAvatarVisible:i().bool})},Jm.defaultProps={message:null,groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!1}};const tb={timestamp:i().number,samurai:i().oneOfType([i().number,i().string])};function nb(){const{messagesWrapper:e}=es();return t.createElement(Lc,null,e.getSupportedMessages().map(((e,n,r)=>e.type===P.EVENT?t.createElement(ou,{key:e.key,message:e}):t.createElement(eb,{key:e.ui_key||e.key,previousMessage:r[n-1],currentMessage:e,nextMessage:r[n+1]},t.createElement(Jm,{message:e})))))}function rb(){const{messagesWrapper:e}=es(),t=co(),n=e.getLastVisibleMessage(),r=e.getLastMessage(),{design:{back_button_visible:i}}=d();return i&&!t&&!n.isEmpty()&&!n.isRevisit&&!n.isWelcome&&!n.isAuthorUser&&!r.isFinishBot}eb.propTypes={previousMessage:i().shape(tb),currentMessage:i().shape(tb),nextMessage:i().shape(tb),isInputInline:i().bool},eb.defaultProps={previousMessage:null,currentMessage:null,nextMessage:null,isInputInline:!1};const ib=Ui.div`
  /******************************
    Desktop version
  *******************************/
  display: none;

  @media ${go} {
    display: block;
    padding-top: 20px;
  }

  /******************************
    Mobile version
  *******************************/
  &.BackButton--Mobile {
    @media ${go} {
      display: none;
    }

    @media ${yo} {
      display: block;
    }

    height: ${e=>e.theme.footer.mobile_height};
    z-index: ${({theme:e})=>e.zIndex.BackButton__Mobile};

    @media ${wo} {
      transform: scale(0.8);
      transform-origin: left;
    }
  }

  /*******************************
    SubComponents Styles - Desktop
  ********************************/
  .BackButton__Button.custom-button {
    height: 30px;
    width: 86px;
    opacity: ${E.isIos?1:0};
    background-color: transparent;
    transition: opacity 0.25s ease-in-out, padding 0.25s ease-in-out;
    border-radius: 1rem;
    border-width: 0;

    &:hover {
      padding-right: 3px;
      background-color: rgba(0, 0, 0, 0.1);
      border-width: 0;
      box-shadow: none;
    }

    ${!E.isIos&&"\n      .InputInline:hover & {\n        opacity: 1;\n      }\n    "}

    span {
      color: var(--form_help_color) !important;

      svg path {
        fill: var(--form_help_color) !important;
      }
    }
  }

  .BackButton__Label {
    text-transform: uppercase;
    font-size: ${e=>e.theme.font_sizes.size_7};
  }

  .BackButton__Icon {
    padding-right: 8px;
    font-size: ${e=>e.theme.font_sizes.size_7};

    .icon {
      transform: rotate(${E.isIos?"0":"180deg"});
      transition: transform 0.25s;
    }
    ${!E.isIos&&"\n      .InputInline:hover & .icon {\n        transform: rotate(0);\n      }\n    "}
  }

  /*******************************
    SubComponents Styles - Mobile
  ********************************/
  &.BackButton--Mobile {
    button.BackButton__Button.custom-button {
      background-color: white !important;
      box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
      height: 1.95rem;
      font-size: 13.5px;
      width: inherit;
      padding: 4px 16px;
      transition: transform 0.15s ease-in-out;
      border-radius: 4px;
      opacity: 1;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3),
          0 3px 5px -5px rgba(47, 49, 73, 0.35);
      }

      .BackButton__Label {
        color: #6a6b7c !important;
        text-transform: none;
        font-size: 13.5px;
      }

      .BackButton__Icon {
        padding-right: 12px;
        .icon {
          transform: none;
        }
        svg path {
          fill: #2f3149 !important;
          font-size: 13.5px;
        }
      }
    }

    &:hover {
      .icon {
        transform: rotate(0deg);
      }
    }
  }
`;function ob({label:e,onClick:n,containerClassName:r}){return t.createElement(ib,{className:mo()(["BackButton",r]),onClick:n},t.createElement(ba,{className:"BackButton__Button"},t.createElement("span",{className:"BackButton__Icon"},t.createElement("span",{className:"icon"},t.createElement(qc,null))),t.createElement("span",{className:"BackButton__Label is-unselectable"},e)))}function ab({containerClassName:e}){const{text:n}=d(),{setIsSubmitted:r}=vd(),i=Zo();return t.createElement(ob,{onClick:()=>{r(!0),i.events.emit(aa,{type:"button",message:n.back,payload:"#back"})},label:n.back,className:"BackButton",containerClassName:e})}ob.propTypes={label:i().string,onClick:i().func,containerClassName:i().string},ob.defaultProps={label:"Back",onClick:()=>{},containerClassName:null},ab.propTypes={containerClassName:i().string},ab.defaultProps={containerClassName:null};const sb=Ui.p`
  margin-top: 1em;
  font-size: 14px;
  animation: 'fade-in 1.5s ease-out';
  color: ${({theme:e})=>e.design.form_help_color};

  .GdprLink__link {
    margin-left: 0.2rem;
    text-decoration: underline;
  }
`;function lb(e){return t.createElement(sb,{className:"GdprLink"},e.text,t.createElement("a",{className:"GdprLink__link",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.linkText))}lb.propTypes={link:i().string,text:i().string,linkText:i().string},lb.defaultProps={link:"",text:"",linkText:""};const cb=Ui(xc)`
  min-height: ${e=>e.theme.input.mobile_height};

  .input-small-header {
    margin-top: ${e=>ko(2*e.theme.initial_vars.vertical_unit)};
  }

  @media ${go} {
    min-height: ${e=>e.theme.input.height};
  }

  .Chat--hasInputFixed & {
    min-height: 0;
  }
`;function ub({children:e,inputInlineRef:n}){return t.createElement(cb,{classNames:["InputInline","is-relative","is-autoscroll-mutation-target"],containerRef:n},e)}function db({children:e}){return t.createElement(Oc,null,t.createElement("div",{className:"columns is-centered"},t.createElement(Xc,{shape:Vn.SQUARED},e)))}function fb({isConnectionOk:e,inputInlineRef:n}){const r=co(),{messagesWrapper:i}=es(),o=Fo(),[a,s]=i.getLast2VisibleMessages(),{hasGDPR:l,gdpr:c}=s,{text:u,design:{avatar_enabled:f}}=d(),p=rb();return t.createElement(ub,{inputInlineRef:n},r?null:t.createElement(t.Fragment,null,t.createElement(eb,{previousMessage:a,currentMessage:s,nextMessage:null,isInputInline:!0},t.createElement(Jm,{message:s})),e&&p&&t.createElement(Pc,{hasLeftColumn:f},t.createElement(ab,null)),l&&!o&&t.createElement(Pc,{hasLeftColumn:f},t.createElement(lb,{link:c.link,linkText:c.linkText,text:c.text}))),!e&&t.createElement(db,null,u.error_inline_connection_message))}function pb({bodyRef:e}){const{isFetching:r,status:i}=function(){const[e,n]=(0,t.useState)(!0),[r,i]=(0,t.useState)(!0),o=ja(),a=Zo(),{showNotification:s,closeNotification:l}=Ba(),{setPreviousSessionMessages:c,newMessage:u,setMessages:f}=es(),{text:p,revisit_off:h,revisit:m,warning_connection:b,offline_detect_database:g}=d();return(0,t.useEffect)((()=>{o.init().then((e=>{!e.isNewSession&&!h&&fe.getAssignationAgentID(us(e.messages))<=0&&m.length>0?(c(e.messages),m.forEach((e=>u(fe.withRevisit(e))))):f(e.messages)})).catch(console.error).finally((()=>n(!1)))}),[]),(0,t.useEffect)((()=>{const t=e=>{e!==r&&(e?l():b&&s(p.error_offline_message,{lastAction:Ra,hasCloseButton:!0}),i(e))};return!1===e&&g&&a.events.on(Jo,t),()=>a.events.off(Jo,t)}),[e,r,a.events,l,s,i,p.error_offline_message,b,g]),{isFetching:e,status:r}}(),o=function(){const{window:e}=s(),[n,r]=(0,t.useState)(!0),{showNotification:i,closeNotification:o}=Ba(),{text:a,warning_connection:l,offline_detect_navigator:c}=d();return(0,t.useEffect)((()=>{const t=()=>{r(!1),l&&i(a.error_offline_message,{lastAction:Ra,hasCloseButton:!0})};return c&&e.addEventListener("offline",t),()=>{e.removeEventListener("offline",t)}}),[e,i,l,a.error_offline_message,c]),(0,t.useEffect)((()=>{const t=()=>{r(!0),o()};return c&&e.addEventListener("online",t),()=>{e.removeEventListener("online",t)}}),[e,o,c]),c||n}(),{hasHeader:a,hideHeader:l}=po(),c=fo(),u=co(),f=(0,t.useRef)(null),p=(0,t.useRef)(null);!function(){const{document:e,window:n}=s();(0,t.useEffect)((()=>{const t=new bl({document:e,filterSelector:".Message.is-eval:not(.is-start)",mutatingElement:e.querySelector(".Chat"),targetSelector:".message-left",window:n});return()=>t.destroy()}),[e,n])}();return function(e,r,i,o){const a=qi(),{document:l}=s();(0,t.useEffect)((()=>{const t=a===n.NATIVE?l.scrollingElement:l.querySelector(".js-auto-scroll"),s=new gl({mutatingElement:l.querySelector(".js-auto-scroll"),scrollingElement:t,inputInlineRef:e,spacerRef:r,bodyRef:i,isModeNative:a===n.NATIVE,autoScrollHandler:o});return()=>s.destroy()}),[l,a,e,r,i,o])}(f,p,e,function(){const{document:e}=s(),{design:r}=d(),i=qi(),[o,a]=(0,t.useState)(null),l=i===n.NATIVE?e.scrollingElement:e.querySelector(".js-auto-scroll");return(0,t.useEffect)((()=>(r.header_visible&&l&&!o&&a(new wl({scrollingElement:l,header:e.querySelector(".Header"),body:e.querySelector(".Body")})),()=>{o&&o.destroy()})),[e,r.header_visible,l,o]),null==o?void 0:o.getAutoScrollHandler()}()),function(){const{document:e,iframe:n,window:r}=s();(0,t.useEffect)((()=>{const t=new _l({document:e,iframe:n,selector:".js-auto-focus",window:r});return()=>t.destroy()}),[e,n,r])}(),t.createElement(Pl,{hasHeader:a||l,hasAgentAssigned:u,hasPersistentMenu:c,isConnectionOk:o&&i},r?t.createElement(Nl,null,t.createElement(jl,null)):t.createElement(t.Fragment,null,t.createElement(El,null),t.createElement(nb,null),t.createElement(Ic,null),t.createElement(fb,{inputInlineRef:f,isConnectionOk:o&&i}),t.createElement(Rc,{hasInputFixed:u,spacerRef:p})))}ub.propTypes={children:i().node,inputInlineRef:i().object},ub.defaultProps={children:null,inputInlineRef:null},db.propTypes={children:i().node.isRequired},fb.propTypes={isConnectionOk:i().bool,inputInlineRef:i().object},fb.defaultProps={isConnectionOk:!0,inputInlineRef:null},pb.propTypes={bodyRef:i().object},pb.defaultProps={bodyRef:null};const hb=Ui.div`
  && {
    z-index: ${({theme:e})=>e.zIndex.body};
    overflow: hidden;

    ${()=>qi()===n.NATIVE?"height: auto;\n         overflow-y: visible;\n         min-height: 100vh;\n      ":"height: 100%;"}
  }
`;function mb({className:e,bodyRef:n,children:r}){return t.createElement(hb,{className:mo()({Body:!0,[e]:!!e}),ref:n},r)}function bb(){const e=(0,t.useRef)(null);return t.createElement(mb,{bodyRef:e},t.createElement(pb,{bodyRef:e}))}mb.propTypes={className:i().string,bodyRef:i().object,children:i().node},mb.defaultProps={className:null,bodyRef:null,children:null};const gb=Ui.footer`
  z-index: ${({theme:e})=>e.zIndex.footer}; /* The input icon and the input fixed have a (z-index: 4) */
  bottom: 0;
  max-height: ${e=>e.theme.footer.max_height.desktop};
  width: 100%;
  pointer-events: none;
  a, button, input, textarea {
    pointer-events: auto;
  }

  ${()=>qi()===n.NATIVE?"position: fixed;\n         left: 0;\n      ":"position: absolute;"}

  @media ${yo} {
    max-height: ${e=>e.theme.footer.max_height.mobile};
    background-color: rgba(0, 0, 0, 0.02);
  }

  ${({hasInputFixed:e})=>e&&Ei`
      max-height: ${e=>e.theme.footer.max_height.desktop_hto};

      @media ${yo} {
        max-height: ${e=>e.theme.footer.max_height.mobile_hto};
      }
    `}
`;function vb({hasInputFixed:e,isConnectionOk:n,children:r}){return t.createElement(gb,{className:mo()({Footer:!0,"Footer--hasInputFixed":e,"are-disabled":!n}),hasInputFixed:e},r)}vb.propTypes={hasInputFixed:i().bool,isConnectionOk:i().bool,children:i().node},vb.defaultProps={hasInputFixed:!1,isConnectionOk:!0,children:null};var yb=t.createElement("svg",{viewBox:"0 0 128 28",width:"63px",height:"26px",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,"Landbot"),t.createElement("g",{id:"Symbols",stroke:"none",fill:"none"},t.createElement("path",{d:"M12.98,20.1 L12.98,25 L0.345,25 L0.345,0.5 L6.015,0.5 L6.015,20.1 L12.98,20.1 Z M23.725,20.87 C24.3316697,20.87 24.8799975,20.7533345 25.37,20.52 C25.8600025,20.2866655 26.2799983,19.9775019 26.63,19.5925 C26.9800017,19.2074981 27.2541657,18.7525026 27.4525,18.2275 C27.6508343,17.7024974 27.75,17.1483362 27.75,16.565 C27.75,15.9816637 27.6508343,15.4333359 27.4525,14.92 C27.2541657,14.4066641 26.9800017,13.9516686 26.63,13.555 C26.2799983,13.1583314 25.8600025,12.8433345 25.37,12.61 C24.8799975,12.3766655 24.3316697,12.26 23.725,12.26 C23.1183303,12.26 22.5700025,12.3766655 22.08,12.61 C21.5899976,12.8433345 21.1700017,13.1583314 20.82,13.555 C20.4699983,13.9516686 20.1958343,14.4066641 19.9975,14.92 C19.7991657,15.4333359 19.7,15.9816637 19.7,16.565 C19.7,17.1483362 19.7991657,17.7024974 19.9975,18.2275 C20.1958343,18.7525026 20.4699983,19.2074981 20.82,19.5925 C21.1700017,19.9775019 21.5899976,20.2866655 22.08,20.52 C22.5700025,20.7533345 23.1183303,20.87 23.725,20.87 Z M33.105,8.13 L33.105,25 L27.75,25 L27.75,22.62 C27.5399989,23.0166686 27.2600018,23.384165 26.91,23.7225 C26.5599983,24.060835 26.1575023,24.3524988 25.7025,24.5975 C25.2474977,24.8425012 24.7516693,25.0408326 24.215,25.1925 C23.6783307,25.3441674 23.1416694,25.42 22.605,25.42 C21.3916606,25.42 20.2775051,25.1925023 19.2625,24.7375 C18.2474949,24.2824977 17.378337,23.6641706 16.655,22.8825 C15.931663,22.1008294 15.3716687,21.1675054 14.975,20.0825 C14.5783314,18.9974946 14.38,17.8250063 14.38,16.565 C14.38,15.3049937 14.5783314,14.1325054 14.975,13.0475 C15.3716687,11.9624946 15.931663,11.0291706 16.655,10.2475 C17.378337,9.46582942 18.2474949,8.84750228 19.2625,8.3925 C20.2775051,7.93749773 21.3916606,7.71 22.605,7.71 C23.1416694,7.71 23.6783307,7.78583257 24.215,7.9375 C24.7516693,8.08916743 25.2474977,8.29333205 25.7025,8.55 C26.1575023,8.80666795 26.5599983,9.10999825 26.91,9.46 C27.2600018,9.81000175 27.5399989,10.1716648 27.75,10.545 L27.75,8.13 L33.105,8.13 Z M35.415,8.13 L40.77,8.13 L40.77,10.58 C41.236669,9.66999545 41.9424953,8.96416917 42.8875,8.4625 C43.8325047,7.96083083 44.9699933,7.71 46.3,7.71 C47.3966722,7.71 48.3416627,7.87916497 49.135,8.2175 C49.9283373,8.55583503 50.558331,9.0283303 51.025,9.635 C51.5616693,10.2883366 51.9174991,11.0408291 52.0925,11.8925 C52.2675009,12.7441709 52.355,13.7766606 52.355,14.99 L52.355,25 L47,25 L47,16.355 C47,15.1416606 46.7841688,14.1558371 46.3525,13.3975 C45.9208312,12.6391629 45.1450056,12.26 44.025,12.26 C42.9283279,12.26 42.1116693,12.6449961 41.575,13.415 C41.0383307,14.1850038 40.77,15.2233268 40.77,16.53 L40.77,25 L35.415,25 L35.415,8.13 Z M63.2062281,20.87 C63.8128978,20.87 64.3612256,20.7533345 64.8512281,20.52 C65.3412305,20.2866655 65.7612263,19.9775019 66.1112281,19.5925 C66.4612298,19.2074981 66.7353937,18.7525026 66.9337281,18.2275 C67.1320624,17.7024974 67.2312281,17.1483362 67.2312281,16.565 C67.2312281,15.9816637 67.1320624,15.4333359 66.9337281,14.92 C66.7353937,14.4066641 66.4612298,13.9516686 66.1112281,13.555 C65.7612263,13.1583314 65.3412305,12.8433345 64.8512281,12.61 C64.3612256,12.3766655 63.8128978,12.26 63.2062281,12.26 C62.5995584,12.26 62.0512305,12.3766655 61.5612281,12.61 C61.0712256,12.8433345 60.6512298,13.1583314 60.3012281,13.555 C59.9512263,13.9516686 59.6770624,14.4066641 59.4787281,14.92 C59.2803937,15.4333359 59.1812281,15.9816637 59.1812281,16.565 C59.1812281,17.1483362 59.2803937,17.7024974 59.4787281,18.2275 C59.6770624,18.7525026 59.9512263,19.2074981 60.3012281,19.5925 C60.6512298,19.9775019 61.0712256,20.2866655 61.5612281,20.52 C62.0512305,20.7533345 62.5995584,20.87 63.2062281,20.87 Z M67.2312281,22.62 C67.021227,23.0166686 66.7412298,23.384165 66.3912281,23.7225 C66.0412263,24.060835 65.6387303,24.3524988 65.1837281,24.5975 C64.7287258,24.8425012 64.2328974,25.0408326 63.6962281,25.1925 C63.1595587,25.3441674 62.6228974,25.42 62.0862281,25.42 C60.8728887,25.42 59.7587331,25.1925023 58.7437281,24.7375 C57.728723,24.2824977 56.859565,23.6641706 56.1362281,22.8825 C55.4128911,22.1008294 54.8528967,21.1675054 54.4562281,20.0825 C54.0595594,18.9974946 53.8612281,17.8250063 53.8612281,16.565 C53.8612281,15.3049937 54.0595594,14.1325054 54.4562281,13.0475 C54.8528967,11.9624946 55.4128911,11.0291706 56.1362281,10.2475 C56.859565,9.46582942 57.728723,8.84750228 58.7437281,8.3925 C59.7587331,7.93749773 60.8728887,7.71 62.0862281,7.71 C62.6228974,7.71 63.1595587,7.78583257 63.6962281,7.9375 C64.2328974,8.08916743 64.7287258,8.29333205 65.1837281,8.55 C65.6387303,8.80666795 66.0412263,9.10999825 66.3912281,9.46 C66.7412298,9.81000175 67.021227,10.1716648 67.2312281,10.545 L67.2312281,0.5 L72.5862281,0.5 L72.5862281,25 L67.2312281,25 L67.2312281,22.62 Z M80.3740351,25 L75.0190351,25 L75.0190351,0.5 L80.3740351,0.5 L80.3740351,10.545 C80.5840361,10.1716648 80.8640333,9.81000175 81.2140351,9.46 C81.5640368,9.10999825 81.9723661,8.80666795 82.4390351,8.55 C82.9057041,8.29333205 83.4015325,8.08916743 83.9265351,7.9375 C84.4515377,7.78583257 84.9940323,7.71 85.5540351,7.71 C86.7673745,7.71 87.88153,7.93749773 88.8965351,8.3925 C89.9115402,8.84750228 90.7806981,9.46582942 91.5040351,10.2475 C92.227372,11.0291706 92.7873664,11.9624946 93.1840351,13.0475 C93.5807037,14.1325054 93.7790351,15.3049937 93.7790351,16.565 C93.7790351,17.8250063 93.5807037,18.9974946 93.1840351,20.0825 C92.7873664,21.1675054 92.227372,22.1008294 91.5040351,22.8825 C90.7806981,23.6641706 89.9115402,24.2824977 88.8965351,24.7375 C87.88153,25.1925023 86.7673745,25.42 85.5540351,25.42 C84.9940323,25.42 84.4515377,25.3441674 83.9265351,25.1925 C83.4015325,25.0408326 82.9057041,24.8425012 82.4390351,24.5975 C81.9723661,24.3524988 81.5640368,24.060835 81.2140351,23.7225 C80.8640333,23.384165 80.5840361,23.0166686 80.3740351,22.62 L80.3740351,25 Z M84.4340351,20.87 C85.0173713,20.87 85.5540326,20.7533345 86.0440351,20.52 C86.5340375,20.2866655 86.9540333,19.9775019 87.3040351,19.5925 C87.6540368,19.2074981 87.9282008,18.7525026 88.1265351,18.2275 C88.3248694,17.7024974 88.4240351,17.1483362 88.4240351,16.565 C88.4240351,15.9816637 88.3248694,15.4333359 88.1265351,14.92 C87.9282008,14.4066641 87.6540368,13.9516686 87.3040351,13.555 C86.9540333,13.1583314 86.5340375,12.8433345 86.0440351,12.61 C85.5540326,12.3766655 85.0173713,12.26 84.4340351,12.26 C83.8273654,12.26 83.2732043,12.3766655 82.7715351,12.61 C82.2698659,12.8433345 81.8440368,13.1583314 81.4940351,13.555 C81.1440333,13.9516686 80.8698694,14.4066641 80.6715351,14.92 C80.4732008,15.4333359 80.3740351,15.9816637 80.3740351,16.565 C80.3740351,17.1483362 80.4732008,17.7024974 80.6715351,18.2275 C80.8698694,18.7525026 81.1440333,19.2074981 81.4940351,19.5925 C81.8440368,19.9775019 82.2698659,20.2866655 82.7715351,20.52 C83.2732043,20.7533345 83.8273654,20.87 84.4340351,20.87 Z M104.645614,25.455 C103.19894,25.455 101.89812,25.2158357 100.743114,24.7375 C99.5881083,24.2591643 98.6081181,23.617504 97.803114,22.8125 C96.99811,22.007496 96.3797829,21.0683387 95.948114,19.995 C95.5164452,18.9216613 95.300614,17.7783394 95.300614,16.565 C95.300614,15.3516606 95.5164452,14.2083387 95.948114,13.135 C96.3797829,12.0616613 96.99811,11.122504 97.803114,10.3175 C98.6081181,9.51249597 99.5881083,8.87083573 100.743114,8.3925 C101.89812,7.91416428 103.19894,7.675 104.645614,7.675 C106.115621,7.675 107.428108,7.91416428 108.583114,8.3925 C109.73812,8.87083573 110.71811,9.51249597 111.523114,10.3175 C112.328118,11.122504 112.946445,12.0616613 113.378114,13.135 C113.809783,14.2083387 114.025614,15.3516606 114.025614,16.565 C114.025614,17.7783394 113.809783,18.9216613 113.378114,19.995 C112.946445,21.0683387 112.328118,22.007496 111.523114,22.8125 C110.71811,23.617504 109.73812,24.2591643 108.583114,24.7375 C107.428108,25.2158357 106.115621,25.455 104.645614,25.455 Z M104.645614,20.87 C105.252284,20.87 105.806445,20.7591678 106.308114,20.5375 C106.809783,20.3158322 107.235612,20.0066686 107.585614,19.61 C107.935616,19.2133313 108.20978,18.7583359 108.408114,18.245 C108.606448,17.7316641 108.705614,17.1716697 108.705614,16.565 C108.705614,15.9816637 108.606448,15.4275026 108.408114,14.9025 C108.20978,14.3774974 107.935616,13.9225019 107.585614,13.5375 C107.235612,13.1524981 106.809783,12.8433345 106.308114,12.61 C105.806445,12.3766655 105.252284,12.26 104.645614,12.26 C104.038944,12.26 103.490616,12.3766655 103.000614,12.61 C102.510612,12.8433345 102.090616,13.1524981 101.740614,13.5375 C101.390612,13.9225019 101.122282,14.3774974 100.935614,14.9025 C100.748946,15.4275026 100.655614,15.9816637 100.655614,16.565 C100.655614,17.1716697 100.748946,17.7316641 100.935614,18.245 C101.122282,18.7583359 101.390612,19.2133313 101.740614,19.61 C102.090616,20.0066686 102.510612,20.3158322 103.000614,20.5375 C103.490616,20.7591678 104.038944,20.87 104.645614,20.87 Z M127.018596,20.905 L127.018596,25 L126.588874,25.0680556 C126.280356,25.1121297 125.927765,25.1536109 125.531096,25.1925 C124.936094,25.2508336 124.241934,25.28 123.448596,25.28 C122.818593,25.28 122.1536,25.2333338 121.453596,25.14 C120.753593,25.0466662 120.106099,24.8075019 119.511096,24.4225 C118.916094,24.0374981 118.426098,23.442504 118.041096,22.6375 C117.656095,21.832496 117.463596,20.730007 117.463596,19.33 L117.463596,12.12 L114.803596,12.12 L114.803596,8.13 L117.463596,8.13 L117.463596,3.125 L122.783596,3.125 L122.783596,8.13 L126.633596,8.13 L126.633596,12.12 L122.783596,12.12 L122.783596,18.14 C122.783596,18.7700031 122.841929,19.2716648 122.958596,19.645 C123.075264,20.0183352 123.238595,20.3041657 123.448596,20.5025 C123.658598,20.7008343 123.903595,20.8349996 124.183596,20.905 C124.463598,20.9750004 124.766928,21.01 125.093596,21.01 C125.420265,21.01 125.758595,21.0041667 126.108596,20.9925 C126.458598,20.9808333 126.761929,20.9516669 127.018596,20.905 Z",id:"Landbot",fill:"#333366"})));const wb=Ui.div`
  font-size: 13.5px;
  color: #6a6b7c;
  line-height: 1;
`,_b=Ui(wb)`
  path {
    fill: #2f3149;
  }
  svg {
    margin: 2px 0 0 6px;
  }
`,kb=Ui.a`
  background: white;
  box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
  padding: 8px 15px;
  border-radius: 3px;
  height: 1.95rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3),
      0 3px 5px -5px rgba(47, 49, 73, 0.35);
    transform: translateY(-1px);
  }

  /* stylelint-disable */
  &[data-tooltip]::before {
    font-family: var(--font_family), BlinkMacSystemFont, -apple-system, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    background-color: #2f3048;
    font-size: 13px;
  }
  /* stylelint-enable */

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    margin-top: -9px;
  }

  &,
  &[data-tooltip]::after {
    border-top-color: #2f2f47;
  }

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    transition: opacity 0.25s ease-in-out;
    transition-delay: 0.35s;
  }
`,xb=Ui.div`
  @media ${yo} {
    margin: 0 auto;
    max-width: 700px;
    text-align: left;
    height: ${e=>e.theme.footer.mobile_height};
  }
`,Eb=Ui.div`
  width: 100%;
  text-align: center;
  z-index: ${({theme:e})=>e.zIndex.Branding};

  @media ${yo} {
    margin: 0 auto;
    width: auto;
  }
  @media ${wo} {
    transform: scale(0.8);
  }

  ${({hasInputFixed:e})=>e?Ei`
          margin-bottom: 10px;
        `:Ei`
          margin-bottom: 20px;
        `}
`;function Sb(e){return t.createElement(Eb,{className:mo()({Branding:!0,"has-tooltip-right":e.hasToolTipRight,"has-input-fixed":e.hasInputFixed}),hasInputFixed:e.hasInputFixed},t.createElement(xb,{className:"Branding__Container is-inline-flex"},t.createElement(kb,{className:"button Branding__Button",href:e.referralUrl,target:"_blank",rel:"noopener noreferrer","data-tooltip":e.isMobile?null:"Build a chatbot with no code 🤖"},t.createElement(wb,{className:"Branding__Text Branding__TextItem"},"Made with"),t.createElement(_b,{className:"Branding__Logo Branding__TextItem"},yb),t.createElement("span",{className:"Branding__Background"}))))}function Cb({hasInputFixed:e,hasToolTipRight:n}){const{brand_name:r}=d(),i=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(r)}&utm_medium=landbot&utm_campaign=header`;return t.createElement(Sb,{referralUrl:i,hasToolTipRight:n,hasInputFixed:e,isMobile:E.isMobile})}Sb.propTypes={referralUrl:i().string,hasToolTipRight:i().bool,hasInputFixed:i().bool,isMobile:i().bool},Sb.defaultProps={referralUrl:null,hasToolTipRight:!1,hasInputFixed:!1,isMobile:!1},Cb.propTypes={hasInputFixed:i().bool,hasToolTipRight:i().bool},Cb.defaultProps={hasInputFixed:!1,hasToolTipRight:!1};const Tb=Ui.div`
  z-index: ${({theme:e})=>e.zIndex.InputFullWidth};
  position: relative;
  bottom: 0;
  text-align: center;
  background-color: #ffffff;
  margin: 0 auto;
  width: 100%;

  @media ${go} {
    min-height: 100px;
    background-color: transparent;
    bottom: 4px;
  }

  @media ${yo} {
    box-shadow: 0 -1px 1px 0 rgba(47, 49, 73, 0.08);
    max-height: 96px;
  }

  .InputFullWidth__Container {
    position: relative;
  }

  .InputFullWidth__Content {
    z-index: ${({theme:e})=>e.zIndex.InputFullWidth};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 700px;
    position: relative;

    @media ${go} {
      height: auto;
      min-height: 100%;
    }

    .Input--Text,
    .Input--Text .field {
      height: 100%;
    }

    > input,
    > textarea {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  .InputText__SendButton {
    @media ${yo} {
      height: 60px !important;
    }
  }

  .InputText {
    overflow: visible;
    position: relative;
    box-shadow: 0 0 60px -17px rgba(0, 0, 0, 0.07);
  }

  .InputText textarea {
    line-height: 24px;
    background: $white;
    max-height: 96px !important;

    @media ${yo} {
      padding: 1rem 7.3rem 1rem 1.25rem;
      border: hidden;
    }
  }

  .InputText textarea:not(:focus) {
    border-color: transparent;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2) !important;

    @media ${yo} {
      box-shadow: none !important;
    }
  }

  .hu-images-preview__container {
    border: hidden;

    @media ${go} {
      height: 60px;
      max-height: 96px;
      border-radius: 4px;
      border: 2px solid var(--form_inputs_border_color);
      background-color: var(--textarea_background);
    }
  }

  .hu-images-preview {
    flex: 1;
    display: flex;
    padding: 4px;
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
  }

  .thumbnail {
    display: inline-block;
    height: 50px;
    width: 50px;
    background-size: cover;
    position: relative;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .thumbnail-button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
  }
`;function Ob(e){return t.createElement(Tb,{className:mo()({InputFullWidth:!0,"InputFullWidth--is-Active":e.isactive})},t.createElement("div",{className:"InputFullWidth__Container"},t.createElement("div",{className:"InputFullWidth__Content"},e.input)))}Ob.propTypes={isactive:i().bool,input:i().object},Ob.defaultProps={isactive:i().false,input:null};const Pb=1e7;function Ib({images:e,removeImage:n}){return t.createElement("div",{className:"hu-images-preview__container"},t.createElement("div",{className:"hu-images-preview"},e.map(((e,r)=>t.createElement("div",{className:"thumbnail",key:e.name,style:e.url&&{backgroundImage:`url(${e.url})`}},t.createElement("div",{className:"thumbnail-button"},t.createElement("svg",{className:"hu-fill_accent",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",x:"3650",y:"3688",viewBox:"0 0 610 610",onClick:()=>n(r)},t.createElement("path",{d:"M387.128,170.748L306,251.915l-81.128-81.167l-54.124,54.124L251.915,306l-81.128,81.128l54.085,54.086L306,360.086 l81.128,81.128l54.086-54.086L360.086,306l81.128-81.128L387.128,170.748z M522.38,89.62 c-119.493-119.493-313.267-119.493-432.76,0c-119.493,119.493-119.493,313.267,0,432.76 c119.493,119.493,313.267,119.493,432.76,0C641.873,402.888,641.873,209.113,522.38,89.62z M468.295,468.295 c-89.62,89.619-234.932,89.619-324.551,0c-89.62-89.62-89.62-234.932,0-324.551c89.62-89.62,234.931-89.62,324.551,0 C557.914,233.363,557.914,378.637,468.295,468.295z"}))))))))}Ib.propTypes={images:i().arrayOf(i().object),removeImage:i().func},Ib.defaultProps={images:[],removeImage:()=>{}};const Nb=Ui.p`
  right: 0;
  bottom: ${e=>ko(e.theme.initial_vars.vertical_unit,-3)};
  position: absolute;
  color: ${({theme:e})=>e.design.form_help_color};
`;function Mb({hiddenWhenFullWidth:e,children:n}){return t.createElement(Nb,{className:mo()({"input-help-text is-hidden-mobile is-size-7 is-pulled-right is-uppercase is-unselectable":!0,"is-hidden":e})},n)}function Db(e){const{uploadedFile:n,uploadFile:r,removeUploadedFile:i}=function(){const[e,n]=(0,t.useState)(null),[r,i]=(0,t.useState)(""),[o,a]=(0,t.useState)(!1),s=Zo();return{uploadedFile:e,removeUploadedFile:()=>{n(null)},error:r,isFetching:o,uploadFile:e=>e.size<=Pb?(a(!0),(new FormData).append("image",e),v.fetchUploadFile({channelToken:s.config.channelToken,customerToken:s.customerToken,serverUrl:s.config.serverUrl,file:e}).then((({url:t})=>n({url:t,name:e.name,size:e.size}))).catch((e=>{i("Error!"),console.error(e)})).then((()=>a(!1)))):(i("MAX. 10MB"),Promise.reject(new Error(`Size limit exceeded: "${e.size}" > "10000000"`)))}}(),{onFileUploadedChange:o}=e;(0,t.useEffect)((()=>{o(n)}),[n,o]);const a=n?t.createElement(Ib,{images:[n],removeImage:i}):t.createElement(Mh.Z,{className:"textarea js-auto-focus",rows:1,maxRows:e.maxRows,onChange:t=>e.onChange(t.target.value),onKeyDown:t=>{13===(t.keyCode||t.which)&&(t.shiftKey||(t.preventDefault(),e.value&&e.onSubmit()))},placeholder:e.placeholder,value:e.value});return t.createElement("div",{className:mo()({"u-no-border":e.hasNoBorder,InputText:!0})},t.createElement("div",{className:"field has-addons is-marginless"},t.createElement("div",{className:"control is-expanded has-icons-right"},a,e.hasAddOns&&!n&&t.createElement(op,{hasAttachButton:""===e.value,uploadFile:r,onSelectEmoji:t=>e.onSelectEmoji(t)}),t.createElement(Id,{onClick:()=>{e.onSubmit(),i()},disabled:""===e.value&&null===n}))),t.createElement(Mb,{hiddenWhenFullWidth:""!==e.value},e.help))}function Ab(e){const[n,r]=(0,t.useState)({}),{text:i}=d(),o=e=>{r({type:"text",message:e})},a=(0,t.useCallback)((e=>{r(e?{type:"file",url:e.url,message:e.name}:e=>({type:"text",message:"file"===e.type?"":e.message}))}),[]);return t.createElement(Ob,{input:t.createElement(Db,{help:i.input_text_help,placeholder:i.text_input_placeholder,value:n.message,onChange:e=>o(e),onSelectEmoji:e=>(e=>{const t=n.message||"";o(t+e.native)})(e),onFileUploadedChange:a,onSubmit:()=>(e.onSubmit(n),void r({})),hasAddOns:!0})})}Mb.propTypes={children:i().node.isRequired,hiddenWhenFullWidth:i().bool},Mb.defaultProps={hiddenWhenFullWidth:!1},Db.propTypes={help:i().oneOfType([i().element,i().string]),placeholder:i().string,onChange:i().func,onSubmit:i().func,onFileUploadedChange:i().func,onSelectEmoji:i().func,value:i().string,hasAddOns:i().bool,hasNoBorder:i().bool,maxRows:i().number},Db.defaultProps={help:"",placeholder:"",onChange:()=>{},onSubmit:()=>{},onFileUploadedChange:()=>{},onSelectEmoji:()=>{},value:"",hasAddOns:!1,hasNoBorder:!1,maxRows:3},Ab.propTypes={onSubmit:i().func},Ab.defaultProps={onSubmit:()=>{}};const jb=Ui.div`
  display: flex;
  padding: 8px 12px;
`;function Rb(){const{branding:e}=d(),{messages:n}=es(),r=Zo(),i=co(),[o,a]=(0,t.useState)(!0),s=rb();return(0,t.useEffect)((()=>{const e=e=>{a(!!e)};return r.events.on(Jo,e),()=>{r.events.off(Jo,e)}}),[r.events]),i||e||s?t.createElement(vb,{hasInputFixed:i,isConnectionOk:o},(o&&s||e)&&t.createElement(jb,{className:"Footer__Row"},o&&s&&t.createElement(ab,{containerClassName:"BackButton--Mobile"}),e&&t.createElement(Cb,{hasInputFixed:i})),i&&t.createElement(jb,{className:"Footer__Row is-paddingless"},t.createElement(Ab,{messages:n,onSubmit:e=>{r.events.emit(aa,e)}}))):null}const Lb=Ui.div`
  ${()=>qi()===n.NATIVE?"position: fixed;\n       width: 100%;\n       height: 100vh;":"position: absolute;"}

  .modal-close {
    ${()=>qi()===n.NATIVE?"position: fixed;":"position: absolute;"}
  }

  .modal-close [data-tooltip] {
    width: 100%;
    height: 100%;

    &:hover {
      &::before,
      &::after {
        opacity: 0;
        animation-delay: 0.1s;
        animation-name: opacityAnimation;
        animation-duration: 0.25s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
      }
    }

    @keyframes opacityAnimation {
      from {
        opacity: 0;
      }

      50% {
        opacity: 0.5;
      }

      to {
        opacity: 1;
      }
    }
  }
`;function Fb(e){return t.createElement(Lb,{className:mo()({"modal fade-in":!0,"is-active":e.isOpen,[e.className]:!!e.className})},t.createElement("div",{className:"modal-background",onClick:e.canCloseOnClickOverlay?e.onClose:null}),t.createElement("div",{className:mo()({"modal-content":!0,[e.contentClassName]:!!e.contentClassName}),style:{width:"auto"}},e.children),t.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:e.onClose,type:"submit"},t.createElement("div",{className:"has-tooltip-left","data-tooltip":"Close"})))}Fb.propTypes={className:i().string,canCloseOnClickOverlay:i().bool,isOpen:i().bool,onClose:i().func,contentClassName:i().string,children:i().node},Fb.defaultProps={className:null,canCloseOnClickOverlay:!1,isOpen:!1,onClose:()=>{},contentClassName:null,children:null};const zb=Ui.iframe`
  height: 90vh;
  width: 90vw;
`;function Bb(){const{isOpen:e,setIsOpen:n,src:r}=jo(),{document:i}=s(),o=fe.isSupportedDocumentType(r||"");return(0,t.useEffect)((()=>{if(!e)return;const t=e=>{27===e.keyCode&&n(!1)};return i.addEventListener("keydown",t,!1),()=>i.removeEventListener("keydown",t,!1)}),[e,n,i]),t.createElement(Fb,{contentClassName:"has-text-centered",isOpen:e,onClose:()=>n(!1),canCloseOnClickOverlay:!0},o?t.createElement(zb,{type:"text/html",src:r,frameBorder:"0",allowFullScreen:!0,title:"lb-iframe"}):t.createElement(Bo,{className:"is-inline-block",src:r}))}const Ub=Ui.div`
  z-index: ${({theme:e})=>e.zIndex.NotificationsPanel};
  ${()=>qi()===n.NATIVE?"position: fixed;":"position: absolute;"}
  top: 0;
  left: 0;
  padding: 10px 30px;
  height: ${e=>e.theme.header.height.default};
  width: 100%;
  color: white;
  background-color: #fc4c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${go} {
    padding: 22px 34px;
    margin: auto;
  }
`,Wb=Ui.div`
  display: none;

  &.is-active {
    display: block;
  }

  .modal-close {
    z-index: 41;
  }
`;function Vb({message:e,retryMessage:n,isOpen:r,hasCloseButton:i,onClose:o,buttons:a}){return t.createElement(Wb,{className:mo()({NotificationsPanel:!0,"fade-in":!0,"is-active":r})},t.createElement(Ub,{className:mo()({"panel-container":!0})},t.createElement("p",null,e),t.createElement("p",null,a.length>0?a.map((({label:e,retryMessageLabel:r,onClick:i})=>t.createElement(da,{key:r?n:e,label:r?n:e,onClick:i}))):n)),i&&t.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:o,type:"submit"},t.createElement("div",{className:"has-tooltip-left","data-tooltip":"Close"})))}function qb(){const{cfg:{isOpen:e,isInitialized:n,hasCloseButton:r,hasRetryButton:i,hasResetButton:o,message:a,retryCb:l,retryInterval:c},closeNotification:u,setIsInitialized:f}=Ba(),{text:p}=d(),[h,m]=(0,t.useState)([]),{document:b}=s();(0,t.useEffect)((()=>{if(!e||!r)return()=>{};const t=e=>{27===e.keyCode&&u()};return b.addEventListener("keydown",t,!1),()=>b.removeEventListener("keydown",t,!1)}),[e,u,r,b]);const[g,v]=(0,t.useState)(-1),[y,w]=(0,t.useState)(""),[_,k]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{if(e&&!n){const e=[];"function"==typeof l&&c>0?(v(c),k(!0),i&&e.push({retryMessageLabel:!0,onClick:()=>{k(!1),l()}})):i&&e.push({label:p.error_retry_button_label,onClick:l}),o&&e.push({label:p.error_reset_button_label,onClick:()=>{alert("RESET")}}),m(e),w(""),f(!0)}else e||k(!1)}),[e,n,l,c,f,i,o,p]),(0,t.useEffect)((()=>{if(!e||!n||!_)return()=>{};const t=setInterval((()=>{v((e=>e-1))}),1e3);return()=>{clearInterval(t)}}),[e,n,_]),(0,t.useEffect)((()=>{e&&n&&_&&(g>0?w(p.error_retry_countdown_message.replace("{countdown}",g)):0===g&&(w(p.error_retrying_message),k(!1),l()))}),[e,n,_,g,l,p.error_retry_countdown_message,p.error_retrying_message]),t.createElement(Vb,{isOpen:e,onClose:()=>u(),hasCloseButton:r,message:a,retryMessage:y,buttons:h})}Vb.propTypes={hasCloseButton:i().bool,isOpen:i().bool,onClose:i().func,message:i().string,retryMessage:i().string,buttons:i().arrayOf(i().objectOf)},Vb.defaultProps={hasCloseButton:!1,isOpen:!1,onClose:()=>{},message:"",retryMessage:"",buttons:[]};const Hb=Ui.div`
  /* Positioning */
  top: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.OffsetMenuContent};
  ${()=>qi()===n.NATIVE?"position: fixed;":"position: absolute;"}

  /* Display & Box Model */
  width: 240px;
  height: 100%;
  padding: 18px 15px;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;

  /* Color */
  opacity: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 27px 0 rgba(32, 20, 104, 0.2);
  background-color: white; // --base_color_message

  /* Other */
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;

  &.OffsetMenu__Content--isActive {
    opacity: 1;
    transform: translateX(0);
  }
`,$b=({className:e,onClick:n})=>t.createElement(ba,{ariaLabel:"Close Menu",className:mo()({[e]:!0,OffsetMenu__CloseButton:!0,delete:!0}),onClick:n});$b.propTypes={className:i().string,onClick:i().func},$b.defaultProps={className:null,onClick:()=>{}};const Yb=Ui($b)`
  align-self: flex-end;
  height: 37px;
  width: 37px;
  min-width: initial;
  min-height: initial;
  max-width: initial;
  max-height: initial;
  margin-bottom: 20px;
  background-color: transparent !important;

  &:hover,
  &:active {
    border-color: transparent;
    box-shadow: none;
    background-image: none;
  }

  &:before,
  &:after {
    background-color: ${({theme:e})=>e.design.message_color_bot};
  }
`,Kb=Ui.div`
  .modal-background {
    z-index: ${({theme:e})=>e.zIndex.OffsetMenu};
  }
`;function Gb({menuActive:e,closeMenu:n}){return t.createElement(Kb,{className:"OffsetMenu"},t.createElement(Hb,{className:mo()({OffsetMenu__Content:!0,"OffsetMenu__Content--isActive":e})},t.createElement(Yb,{onClick:n}),t.createElement("div",{className:"OffsetMenu__ContentSection"},t.createElement(Ea,{isVerticalVersion:!0,closeMenu:n,ariaExpanded:e}))),e&&t.createElement("div",{className:"modal-background",onClick:n}))}function Qb(){const{isOpen:e,setIsOpen:n}=Oa();return t.createElement(Gb,{menuActive:e,closeMenu:()=>{n(!1)}})}Gb.propTypes={menuActive:i().bool,closeMenu:i().func},Gb.defaultProps={menuActive:!1,closeMenu:()=>{}};const Xb=Ui.div`
  && {
    position: relative;
    overflow: hidden;

    ${()=>qi()===n.NATIVE?"height: auto\n        overflow-y: visible;\n        min-height: 100vh;\n      ":"height: 100%;"}
  }
`;function Zb({children:e}){return t.createElement(Xb,{id:"Main"},e)}Zb.propTypes={children:i().node.isRequired};var Jb=[P.BUTTON,P.CALENDLY,P.CARDS,P.DIALOG,P.DOCUMENT,P.IFRAME,P.IMAGE,P.REDIRECT,P.REFERRAL,P.STRIPE,P.STRIPE_INTENT,P.TEXT,P.MEDIA_DIALOG,P.AUDIO,P.VIDEO];function eg(e){return"image"===e.media_type?t.createElement(Ju,e):"iframe"===e.media_type?t.createElement(Gu,e):null}function tg(e){return e.rich_text?t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.rich_text}}):t.createElement("div",{className:"content is-marginless"},e.text)}function ng(e){const{time:n}=function(e){const[n,r]=(0,t.useState)(ie()(e.extra,"redirect.timeout",3)),{window:i}=s();return(0,t.useEffect)((()=>{e.evaluate&&(n?setTimeout((()=>{r((e=>e-1))}),1e3):i.location.href=ae.Z.getHref(e.url))}),[n,e.evaluate,e.url,i.location.href]),n}(e),r=e.rich_text.replace(/\{timeout\}/i,n);return t.createElement(tg,Po({},e,{rich_text:r}))}eg.propTypes={media_type:i().oneOf(["image","iframe"])},eg.defaultProps={media_type:null},tg.propTypes={rich_text:i().string,text:i().string},tg.defaultProps={rich_text:"",text:""},ng.propTypes={evaluate:i().bool,extra:i().object,rich_text:i().string},ng.defaultProps={evaluate:!1,extra:{},rich_text:""};var rg={[P.BUTTON]:tg,[P.CARDS]:tg,[P.DIALOG]:tg,[P.DOCUMENT]:Vu,[P.AUDIO]:Vu,[P.VIDEO]:Vu,[P.IFRAME]:Gu,[P.IMAGE]:Ju,[P.MEDIA_DIALOG]:eg,[P.REDIRECT]:ng,[P.REFERRAL]:fd,[P.STRIPE]:tg,[P.STRIPE_INTENT]:tg,[P.TEXT]:tg};const ig={get:(e,t)=>{if("function"==typeof e[t]){const n=e[t];return function(...t){return n.apply(e,t)}}return e.getValue(t)}};class og extends is{constructor(e){super(e),this.data.messageText=null}}function ag(e,t){if(e instanceof og)throw new Error("TypeError: invalid arguments supplied to slideWrapper. Attempt to wrap an already wrapped slide.");return new Proxy(new og(e,t),ig)}function sg(e){const n=rg[e.type];return n?t.createElement(n,e):null}function lg(e,n){const r=oe.getInputType(e),i=Nm[r];return i?t.createElement("div",{className:"mt-5"},t.createElement(i,{message:ag(e),onSubmit:n})):null}function cg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ug(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?cg(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):cg(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function dg(){const[e,n]=(0,t.useState)([]),r=(0,t.useRef)(),i=Zo(),[o,a]=(0,t.useState)(0);return(0,t.useEffect)((()=>{const e=i.pipelines.$readableSequence.subscribe((e=>{var t;void 0!==(t=e).samurai&&Jb.includes(t.type)&&n((t=>t.concat(e)))}));return()=>e.unsubscribe()}),[i.pipelines.$readableSequence]),(0,t.useEffect)((()=>{setTimeout((()=>{a(e.length-1)}),500)}),[e.length]),(0,t.useEffect)((()=>{r.current&&r.current.slickGoTo(o)}),[o]),{slides:e,sliderRef:r,goToSlide:e=>r.current.slickGoTo(e),onSubmit:e=>{n((e=>[...e.slice(0,-1),ug(ug({},e[e.length-1]),{},{readOnly:!0})])),i.events.emit(aa,e)}}}const fg=Ui.div`
  display: flex;
  height: 4px;
`,pg=Ui.div`
  flex: 1;
  width: 100%;
  min-width: 0;
  border-radius: 2px;
  background-color: rgba(198, 200, 210, 0.6);
  position: relative;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({value:e})=>e?`${e}%`:0};
    content: '';
    display: inline-block;
    height: 100%;
    border-radius: 2px;
    background-color: var(--form_buttons_background_color);
  }
`;function hg({progress:e}){return e?t.createElement(fg,{className:"Progress"},Array(e.total).fill(null).map(((t,n)=>n+1<=e.current?100:0)).map((e=>t.createElement(pg,{value:e})))):null}hg.propTypes={progress:i().shape({total:i().number,current:i().number})},hg.defaultProps={progress:null};const mg=Bi`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,bg=Ui.article`
  height: 100%;
  overflow-y: auto;
  padding: 50px 60px;
`,gg=Ui.div`
  width: 100%;
  height: 100%;
  color: var(--message_color_bot);
  background-color: var(--message_background_color_bot);
  box-shadow: 0 32px 64px 0 rgba(14, 86, 124, 8%);
  border-radius: 18px;
  animation: ${mg} 0.5s 0.5s ease-in-out forwards;
  opacity: 0;

  img {
    object-fit: cover;
    height: 100%;
  }

  ${fg} {
    position: absolute;
    width: 100%;
    padding: 0 40px;
    top: 16px;
  }

  @media ${go} {
    max-height: 430px;
  }

  &.has-background ${bg} {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    // El peligro de esto es que a lo mejor la imagen es de fondo claro, y por tanto el texto no
    // sería prácticamente visible.
    h1, h2, h3, p {
      color: white;
    }
  }
`;function vg(e){const{id:n,className:r,content:i,background:o,progress:a}=e,s={background:o,backgroundSize:"cover",backgroundPosition:"center"};return t.createElement(gg,{id:n,className:mo()("Slide is-relative",o&&"has-background",r),onClick:e.onClick,style:s},t.createElement(hg,{progress:a}),t.createElement(bg,{className:"SlideContent","data-type":e.type},i))}vg.propTypes={background:i().string,className:i().string,content:i().node,id:i().string,onClick:i().func,progress:i().object,type:i().string},vg.defaultProps={background:null,className:"",content:null,id:null,onClick:void 0,progress:null,type:null};function yg(e){return e<670?"10px":(e-650)/2+"px"}const wg=Ui.div`
  /* LAN-5805: Este cambio es peligroso, los paddings tienen un objetivo.
  padding: 100px 0;
  
  @media ${go} {
    padding: 100px 0;
  } */
  padding: 0;

  ${()=>qi()===n.NATIVE?Ei`
          height: 100vh;
        `:Ei`
          height: 100%;
        `}
  }
`,_g=Ui(hf.Z)`
  width: 100%;

  &,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  .slick-slide {
    opacity: 0.4;
    transition: opacity 0.5s, transform 0.5s;
    transform: scale(0.9);
    transform-origin: right center;

    &.slick-active {
      opacity: 1;
      transform: scale(1);

      + .slick-slide {
        transform: scale(0.9);
        transform-origin: left center;
      }
    }

    &:not(.slick-active) {
      cursor: pointer;
    }
  }

  .slick-slide > div {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
`;var kg=function(){const e=s().window.innerWidth,{slides:n,sliderRef:r,goToSlide:i,onSubmit:o}=dg(),{isFetching:a,error:l}=function(){const[e,n]=(0,t.useState)(!0),[r,i]=(0,t.useState)(null),o=ja();return(0,t.useEffect)((()=>{o.init().catch((e=>i(e))).finally((()=>n(!1)))}),[]),{isFetching:e,error:r}}();return t.createElement(wg,{className:"Body"},!a&&!l&&t.createElement(_g,{className:"Slider",infinite:!1,dots:!1,arrows:!1,centerMode:!0,centerPadding:yg(e),ref:r},n.map(((e,n)=>{var r,a,s,l;return t.createElement(vg,{key:n,id:null===(r=e.extra)||void 0===r?void 0:r.id,className:null===(a=e.extra)||void 0===a?void 0:a.className,onClick:()=>i(n),background:null===(s=e.extra)||void 0===s?void 0:s.background,type:e.type,progress:null===(l=e.extra)||void 0===l?void 0:l.steps,content:t.createElement(t.Fragment,null,sg(e),lg(e,e.readOnly?void 0:o))})}))),l&&t.createElement("p",{className:"is-size-4",style:{color:"var(--form_help_color)"}},"ERROR!"))};function xg(){return t.createElement(Zb,null,t.createElement(Zi,null),t.createElement(qb,null),t.createElement(Eg,null),t.createElement(Bb,null),t.createElement(Qb,null))}function Eg(){const{experience:e}=d();switch(e){case J:return t.createElement(t.Fragment,null,t.createElement(Ia,null),t.createElement(Ma,null),t.createElement(kg,null),t.createElement(Rb,null));case ee:default:return t.createElement(t.Fragment,null,t.createElement(Ia,null),t.createElement(Ma,null),t.createElement(bb,null),t.createElement(Rb,null))}}var Sg=__webpack_require__(419);function Cg(e){console.error(`Landbot: You're using a deprecated function "${e}".`)}function Tg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Og(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Tg(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Tg(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Pg({core:e,config:n,children:r}){const[i,o]=(0,t.useState)({}),[a,s]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const t=()=>{o(e.storage.get("agents")||{})};return e.events.on(ta,t),()=>e.events.off(ta,t)}),[e.events,e.storage]),(0,t.useEffect)((()=>{const t=async t=>{const r=t.agent_id||t.samurai;!r||ce()(a,r)||i[r]||(s((e=>[...e,r])),"-1"!==r&&r>0&&await v.fetchAgentData({channelToken:n.channelToken,serverUrl:n.serverUrl,agentID:r}).then((t=>{o((n=>{const i=Og(Og({},n),{},{[r]:{name:t.name,avatar:t.avatar}});return e.storage.set("agents",i),i}))})))};return e.events.on(ra,t),()=>e.events.off(ra,t)}),[e.events,e.storage,i,a,n]),t.createElement(ro,{value:i},r)}function Ig(e){const[n,r]=(0,t.useState)(null);return t.createElement(eo,{value:{agent:n,setAssignation:r}},e.children)}function Ng(e){const[n,r]=(0,t.useState)(!1),[i,o]=(0,t.useState)(null);return t.createElement(Ao,{value:{isOpen:n,setIsOpen:r,src:i,setSrc:o}},e.children)}function Mg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Dg(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Mg(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Mg(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Ag(e){const[n,r]=(0,t.useState)(La),[i,o]=(0,t.useState)(null);return t.createElement(za,{value:{cfg:n,showNotification:(e,t={})=>{if(n.isOpen)return r((t=>Dg(Dg({},t),{},{message:e}))),null;const i=(new Date).getTime();return o(i),r(Dg(Dg(Dg({},La),{},{message:e},t),{},{isOpen:!0,isInitialized:!1})),i},closeNotification:(e=-1)=>{-1!==e&&e!==i||r((e=>{const{lastAction:t,retryCb:n}=e;return t!==Ra&&"function"==typeof n&&n(),Dg(Dg({},e),{},{isOpen:!1,lastAction:null,retryCb:null})}))},setIsInitialized:e=>{r((t=>Dg(Dg({},t),{},{isInitialized:e})))}}},e.children)}function jg(e){const[n,r]=(0,t.useState)(!1);return t.createElement(Ta,{value:{isOpen:n,setIsOpen:r}},e.children)}function Rg(e,n){const r=(0,t.useRef)(n),[i,o]=(0,t.useReducer)(e,n),{debug:a}=d(),s=(0,t.useMemo)((()=>a?function(e){return t=>(console.groupCollapsed("Action:",t),e(t))}(o):o),[o,a]);return(0,t.useEffect)((()=>{a&&i!==n&&(console.log("Prev state: ",r.current),console.log("Next state: ",i),console.groupEnd()),r.current=i}),[i,i.messages,n,a]),[i,s]}function Lg({children:e}){const n=Zo(),r=to(),[i,o]=Rg(Xa,Qa),a=cs(i.messages),s=h(),{customData:l}=d();return(0,t.useEffect)((()=>{const e=n.pipelines.$typingSequence.subscribe((e=>{if(null===e||e&&!0===e.state)return;const{message:t}=e;"hidden"===t.type&&"script"===t.action&&ae.Z.evalCode(t.script,s),o({type:$a,message:ae.Z.compose(fe.withEvaluate,fe.withVariablesReplaced.bind(fe))(t,l),options:{}})}));return()=>{e.unsubscribe()}}),[n.pipelines.$typingSequence,s,l,o]),(0,t.useEffect)((()=>{r.setAssignation(fe.getAssignationAgentID(a))}),[r,a]),t.createElement(Ja,{value:{messagesWrapper:a,lastTimestamp:a.getLastMessage().timestamp||0,setMessages:e=>{const t=fe.createSortedMessagesArray(e);o({type:Va,messages:t})},setPreviousSessionMessages:e=>{const t=fe.createSortedMessagesArray(e);o({type:qa,messages:t})},resumePreviousSession:()=>{o({type:Ha})},newMessage:(e,t={})=>{o({type:$a,message:e,options:t})},clean:()=>{o({type:Ya}),o({type:Ya})},addMessages:e=>{const t=fe.createSortedMessagesArray(e);o({type:Ka,messages:t})},markAsFailed:(e,t=null)=>{o({type:Ga,message:e,retryCb:t})}}},e)}function Fg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function zg(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Fg(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Fg(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Bg({children:e}){const[n,r]=(0,t.useState)(!1),{customData:i}=d(),[o,a]=(0,t.useState)(i),{lastTimestamp:l,newMessage:c,markAsFailed:u,resumePreviousSession:f,clean:p}=es(),{document:h}=s(),m=Zo(),b=ja();return(0,t.useEffect)((()=>{const e=e=>{ml({targets:h.querySelector(".js-revisit-fade"),opacity:[1,0],duration:250,easing:"easeInExpo",complete:()=>{if(p(),ml({targets:h.querySelector(".js-revisit-fade"),opacity:[0,1],duration:0}),"function"==typeof e)return e()}})},t=async t=>{if(r(!0),"#continue"===t.payload||"#_continue"===t.payload)return void e(f);const n=zg(zg({},t),{},{custom_data:zg(zg({},o),t.custom_data||{}),ui_key:ae.Z.randomKey(),version:"3.0.0"}),i=ae.Z.compose(fe.withGhost,fe.withEvaluate)(fe.getMessageFromSendingData(zg(zg({},n),{},{timestamp:l+1})));"#init"===t.payload?await new Promise((t=>e(t))):c(i),b.sendMessage(n).catch((e=>{u(i,(()=>b.sendMessage(n)))})),a({})},n=(e={})=>{a((t=>zg(zg({},t),e)))},i=()=>{r(!1)};return m.events.on(aa,t),m.events.on(ea,n),m.events.on(ra,i),()=>{m.events.off(aa,t),m.events.off(ea,n),m.events.off(ra,i)}}),[o,m.events,b,l,u,c,f,p,h]),t.createElement(gd,{value:{isSubmitted:n,setIsSubmitted:r}},e)}function Ug(e){const{document:n,window:r}=s(),i=d(),o=Zo(),a=h();return function(){const{document:e}=s();(0,t.useLayoutEffect)((()=>{const t=e.createElement("style");return t.type="text/css",t.id="dynamic-styles",t.appendChild(e.createTextNode(Sg.Z)),e.head.prepend(t),()=>{e.getElementById("dynamic-styles").remove()}}),[e])}(),function(){const e=qi(),{document:n}=s(),{experience:r}=d();(0,t.useLayoutEffect)((()=>{const t=`Landbot${e}`,i=`LandbotExperience--${r}`;return n.documentElement.classList.add(t),n.documentElement.classList.add(i),()=>{n.documentElement.classList.remove(t),n.documentElement.classList.remove(i)}}),[e,n,r])}(),(0,t.useEffect)((()=>{a.document=n,a.window=r,(({widget:e,document:t,window:n})=>{const{core:r}=e;n.Landbot=n.Landbot||{};const{Landbot:i}=n;i.send=function(e,t){switch(e){case"landbot-msg-send":r.sendMessage(t);break;case"landbot-custom-data":r.events.emit(ea,t);break;default:r.events.emit(e,t)}Cg("Landbot.send")},i.exec=i.send,i.on=function(e,t){switch(e){case"landbot-msg-receive":r.events.on(ra,t);break;default:r.events.on(e,t)}Cg("Landbot.on")},i.off=r.events.off})({widget:a,document:n,window:r}),function(e,t){const n=e.Element;n.prototype.matches||(n.prototype.matches=n.prototype.matchesSelector||n.prototype.mozMatchesSelector||n.prototype.msMatchesSelector||n.prototype.oMatchesSelector||n.prototype.webkitMatchesSelector||function(e){for(var n=t.querySelectorAll(e),r=n.length;--r>=0&&n.item(r)!==this;);return r>-1})}(r,n),function(e,t){var n=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame;e.requestAnimationFrame=n}(r),function(e,t){const n=e.NodeList;n&&!n.prototype.forEach&&(n.prototype.forEach=function(t,n){n=n||e;for(var r=0;r<this.length;r++)t.call(n,this[r],r,this)})}(r),o.events.emit(na)}),[n,r,a,o.events]),y([[Pg,{core:o,config:i}],[Ig],[Ag],[Ng],[jg],[Lg],[Bg]],e.children)}function Wg(e){return t.createElement(Ug,null,t.createElement(dr,null,t.createElement(xg,null)))}Pg.propTypes={children:i().node,core:i().object,config:i().object},Pg.defaultProps={children:null,core:{},config:{}},Ig.propTypes={children:i().node},Ig.defaultProps={children:null},Ng.propTypes={children:i().node},Ng.defaultProps={children:null},Ag.propTypes={children:i().node},Ag.defaultProps={children:null},jg.propTypes={children:i().node},jg.defaultProps={children:null},Lg.propTypes={children:i().node},Lg.defaultProps={children:null},Bg.propTypes={children:i().node},Bg.defaultProps={children:null},Ug.propTypes={},Ug.defaultProps={};var Vg=__webpack_require__(6561);function qg({children:e,frameRef:n}){return t.createElement(Vg.ZP,{initialContent:'\n  <!DOCTYPE html>\n  <html>\n    <head></head>\n    <body>\n      <div id="frame-content"></div>\n    </body>\n  </html>',mountTarget:"#frame-content",frameBorder:"0",ref:n,style:{width:"100%",height:"100%"},"data-cy":null},e)}qg.propTypes={frameRef:i().object,children:i().node.isRequired},qg.defaultProps={frameRef:()=>{}};var Hg=qg;function $g({children:e}){const n=(0,t.useRef)(null);return t.createElement(Hg,{frameRef:n},t.createElement(Vg.Kr,null,(({document:r,window:i})=>{var o;return t.createElement(a,{value:{document:r,iframe:null===(o=n.current)||void 0===o?void 0:o.node,window:i}},t.createElement(mi,{target:r.head},e))})))}$g.propTypes={children:i().node.isRequired},$g.defaultProps={};const Yg=Ui.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex.Widget};
`;function Kg({children:e}){return t.createElement(Yg,{className:"LandbotFullpage"},e)}Kg.propTypes={children:i().node.isRequired};var Gg=__webpack_require__(3935),Qg=["firebase","apiKey","authDomain","databaseURL","storageBucket","serverUrl","welcomeUrl","brandID","channelToken","customerToken","welcome","typing_options","storage_off","forceWebsockets"],Xg=["welcome","revisit","persistent_menu"];function Zg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Jg(e,t,n,r,i,o){return"revisit"===n&&0===t.length?l.revisit:Xg.includes(n)?t:void 0}function ev(...t){return function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Zg(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Zg(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Qn()({},...t,Jg))}function tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nv(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?tv(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tv(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}class rv{constructor(e){this.localConfig=cr()({},e)}async init(){let e={};try{e=await this._fetchConfig()}catch(e){console.warn("Could not fetch remote config",e)}return this.rawConfig=ev(l,e,this.localConfig),this.rawConfig.customData=nv(nv({},ae.Z.getHiddenFields(this.rawConfig.hidden_fields,window.location.search)),this.rawConfig.customData),this.applyConfig()}async _fetchConfig(){return this.localConfig.configUrl?v.fetchConfigJSON({configUrl:ae.Z.appendTimestampToUrl(this.localConfig.configUrl)}):Promise.reject()}applyConfig(e=null){return e&&(this.rawConfig=ev(this.rawConfig,e)),nv(nv({},this.rawConfig),{},{design:rr(this.rawConfig)})}}var iv=__webpack_require__(1923),ov=(__webpack_require__(8818),__webpack_require__(4707),__webpack_require__(5030)),av=__webpack_require__.n(ov);var sv={widget_offset:{horizontal:"6px",vertical:"6px"},launcher:{bubble:{width:"72px",height:"60px"},shadow_length:"14px",width:"100px",height:"88px"},widget_chat:{content_width:"425px",shadow_lenght:"14px",bottom_offset:"88px",width:"453px",height:"calc(100% - 88)"},proactive:{width:"350px",height:"400px"}};function lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const cv={qty:.5,unit:"rem"};var uv=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?lv(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lv(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({design:{},initial_vars:{block_spacing:{qty:.5,unit:"rem"},vertical_unit:{qty:.5,unit:"rem"},horizontal_unit:cv},font_sizes:{size_1:"3rem",size_2:"2.5rem",size_3:"2rem",size_4:"1.5rem",size_5:"1.25rem",size_6:"1rem",size_7:"0.75rem"},zIndex:{background:0,body:1,Branding:1,LivechatLauncher:1,LivechatContent:2,footer:5,header:10,InputFullWidth:14,BackButton__Mobile:14,OffsetMenu:19,OffsetMenuContent:20,NotificationsPanel:40,Header__Row:100,Widget:2147483e3},header:{height:{default:"95px",sticky:"58px",with_menu:"120px",not_persistent_mobile:"78px"},font_size:"0.9rem",brand_font_size:{mobile:"18px",tablet:"23px"},subtitle_font_size:{mobile:"13px",tablet:"15px"},logo_size:{mobile:"35px",tablet:"44px"},persistent_menu_button_width:"36px",persistent_menu_button_and_close_button_width:"76px"},avatar:{width:"40px",mobile_width:"35px"},footer:{max_height:{mobile:"50px",mobile_hto:"136px",desktop:"70px",desktop_hto:"160px",mobile_height:"32px"},mobile_height:"32px"},messages_max_width:"700px",message_left_margin_right:ko(cv,3.5),margin_left:ko(cv,8.5),msg_grid_left_fixed_width:"40px",device_breakpoint:bo,input:{height:"90px",mobile_height:"90px",control_height:"58px",short_max_width:"400px"},input_cards:{card_height:"330px",card_width:"300px",button_size:"36px"},chat:{shadow_length:"14px"}},sv);function dv(e){const n=d(),r=cr()({},uv,{design:n.design});return t.createElement(Ri,{theme:r},e.children)}function fv({config:e,core:n,children:r}){const[i,o]=(0,t.useState)(e);return(0,t.useEffect)((()=>{const e=e=>o(e);return n.events.on(la,e),()=>n.events.off(la,e)}),[n]),t.createElement(u,{value:i},r)}dv.propTypes={children:i().node},dv.defaultProps={children:null},fv.propTypes={config:i().object,core:i().object.isRequired,children:i().node},fv.defaultProps={config:{},children:null};class pv{constructor(t){(0,e.Z)(this,"MODE",null),(0,e.Z)(this,"VERSION",{type:"minor",channel:null,gitHead:"ec61427f93dae543ea8bdf17e93331f1d2d80720",version:"1.4.0",gitTag:"v1.4.0",name:"v1.4.0",notes:""}),this.core=new(g())({firebase:iv}),this.configManager=new rv(t),this.setup()}async setup(){this.config=await this.configManager.init(),this.core.setConfig(av()(this.config,Qg)),this.api=this._getApi(),this._create(),this._render(),this._applyConfig=this._applyConfig.bind(this),this.core.events.on(sa,this._applyConfig)}onLoad(e){this.core.events.on(na,e)}setConfig(e={}){this.core.events.emit(sa,e)}_applyConfig(e){this.config=this.configManager.applyConfig(e),this.core.events.emit(la,this.config)}setCustomData(e={}){this.core.events.emit(ea,e)}sendMessage(e){return this.core.sendMessage(e)}destroy(){this.core.events.off(sa,this._applyConfig),Gg.unmountComponentAtNode(this.container),this.container.remove(),this.container=null,this.core.destroy()}_create(){this.container=document.createElement("div"),document.body.appendChild(this.container)}_getApi(){return{init:this.core.init.bind(this.core),getMoreMessages:this.core.getMoreMessages.bind(this.core),sendMessage:this.core.sendMessage.bind(this.core)}}_render(){Gg.render(y([[p,{value:this}],[Vi,{value:this.MODE}],[Xo,{value:this.core}],[fv,{core:this.core,config:this.config}],[Aa,{value:this.api}],[dv]],this._contentRenderer()),this.container)}_contentRenderer(){return null}}class hv extends pv{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.FULLPAGE)}_contentRenderer(){return t.createElement(Kg,null,t.createElement($g,null,t.createElement(Wg,null)))}}function mv({children:e}){const[n,r]=(0,t.useState)(!1),[i,o]=(0,t.useState)(!1),[a,s]=(0,t.useState)(null),[l,c]=(0,t.useState)(0),u=Zo();return(0,t.useEffect)((()=>{const e=()=>{r(!0),o(!1),u.storage.set("proactive",{closed:!0})},t=()=>r(!1);return u.events.on(ca,e),u.events.on(ua,t),()=>{u.events.off(ca,e),u.events.off(ua,t)}}),[u.events,u.storage]),(0,t.useEffect)((()=>{const e=e=>{n||(s(e),o(!0))},t=()=>o(!1);return u.events.on(oa,e),u.events.on(ia,t),()=>{u.events.off(oa,e),u.events.off(ia,t)}}),[n,u.events]),(0,t.useEffect)((()=>{i||s(null)}),[i]),t.createElement(ao,{value:{isProactiveOpen:i,isOpen:n,proactiveMessages:a,proactiveHeight:l,setProactiveHeight:c}},e)}mv.propTypes={children:i().node},mv.defaultProps={children:null};var bv=Ui.div`
  z-index: ${({theme:e})=>e.zIndex.LivechatLauncher};
  right: 0;
  bottom: 0;
  position: absolute;
  width: ${e=>e.theme.launcher.width};
  height: ${e=>e.theme.launcher.height};
  padding: ${e=>e.theme.launcher.shadow_length};
`,gv=Ui.div`
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  max-width: 350px;

  .InputInline {
    margin: 0 !important;
    min-height: initial !important;
  }

  .BackButton {
    display: none !important;
  }

  .Message[data-type='dialog'],
  .Message[data-type='text'] {
    .MessageBubble {
      padding: 7px 13px 9px;
    }
  }

  .MessageMediaBubble {
    max-width: 150px;

    figure {
      background: transparent;
    }
    img {
      max-height: 105px;
    }
  }

  .input-small-header {
    display: none;
  }

  &__card-content {
    padding: 1rem 1rem 0.2rem 1rem;
  }

  .Message .MessageBubble {
    box-shadow: 0 11px 23px -5px rgba(0, 0, 0, 0.06);
  }
`;function vv({children:e,launcher:n,proactive:r}){return t.createElement(t.Fragment,null,e,t.createElement(gv,{className:"LivechatProactive"},r),t.createElement(bv,{className:mo()({LivechatLauncher:!0})},n),t.createElement(ur,null))}vv.propTypes={children:i().node.isRequired,launcher:i().element,proactive:i().element},vv.defaultProps={launcher:null,proactive:null};const yv=({src:e,className:n})=>t.createElement(Bo,{className:mo()({[n]:!0,"is-launcher__avatar":!0}),src:e,contain:!0});yv.propTypes={src:i().string,className:i().string},yv.defaultProps={src:null,className:""};const wv=Ui(yv)`
  position: relative;
  height: 60%;
  
  img {
    height: 100%;
    width: auto;
  }
`,_v=({className:e})=>t.createElement("div",{className:mo()({[e]:!0,launcher__bubble__close:!0,delete:!0})});_v.propTypes={className:i().string},_v.defaultProps={className:""};const kv=Ui(_v)`
  min-width: 50px;
  min-height: 50px;
  background-color: transparent !important;
`,xv=Ui.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
  animation: fade-in 0.4s forwards;
  border-radius: ${e=>e.theme.launcher.bubble.height};
  box-shadow: rgba(0, 0, 0, 0.06) 0 1px 6px 0,
    rgba(0, 0, 0, 0.16) 0 2px 24px -5px;
  background-color: var(--launcher_background);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;function Ev({isOpen:e,isTransparent:n,avatarImage:r,isTyping:i,iconImage:o,onClick:a}){return e?null:t.createElement(xv,{className:mo()({launcher__bubble:!0,"is-transparent":n}),onClick:a},e?t.createElement(kv,null):t.createElement(t.Fragment,null,t.createElement(wv,{src:r}),i&&t.createElement(Bo,{className:"launcher__loadericon",src:o})))}function Sv(){const e=Zo(),{isOpen:n}=so(),r=d(),{launcher_custom:i,launcher_image:o,launcher_type:a}=r.design,s=i&&a===Yn.ONLY_ICON,l=i&&o?o:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png";return t.createElement(Ev,{isOpen:n,isTransparent:s,avatarImage:l,onClick:()=>{!1===n?e.events.emit(ca):e.events.emit(ua)}})}function Cv(){const e=Zo(),{conditional_proactives:t}=d(),n=e.storage.get("proactive")||{},r=e.storage.get("sessionStarted");return Boolean(!r&&!n.closed&&t.enabled)}function Tv({children:e}){const n=Cv(),{isOpen:r}=so(),[i,o]=(0,t.useState)(n||r);return(0,t.useEffect)((()=>{!0===r&&!1===i&&o(!0)}),[r,i]),i?e:null}Ev.propTypes={isOpen:i().bool,isTransparent:i().bool,avatarImage:i().string,isTyping:i().bool,iconImage:i().string,onClick:i().func},Ev.defaultProps={isOpen:!1,isTransparent:!1,avatarImage:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png",isTyping:!1,iconImage:"https://static.landbot.io/landbot/files/bubble.svg",onClick:()=>{}},Tv.propTypes={children:i().node},Tv.defaultProps={children:null};var Ov=__webpack_require__(5800);const Pv=Ui.div`
  flex: 1;
  opacity: 0;
  min-height: 30px;
  transition: opacity 0.25s;

  &.Proactive__close--isMobile {
    opacity: 1;
  }

  .Proactive__close__button {
    right: 16px;
    bottom: 0px;
    min-width: 30px;
    min-height: 30px;
    position: absolute;
  }
`,Iv=Ui.div`
  cursor: pointer;
  border-radius: 8px;
  max-height: calc(100% - 25px);
  background-color: transparent;

  .Proactive__card-content {
    padding: 1rem;
  }

  .Proactive__messages {
    padding-top: 0;
  }
`,Nv=({className:e,onClick:n,children:r})=>t.createElement("div",{className:mo()({Proactive:!0,"fade-in":!0,"is-flex":!0,[e]:!0}),onClick:n},r);Nv.propTypes={children:i().node.isRequired,onClick:i().func,className:i().string},Nv.defaultProps={onClick:()=>{},className:null};const Mv=Ui(Nv)`
  flex-direction: column;
  cursor: pointer;

  &:hover .Proactive__close {
    opacity: 1;
  }
`;function Dv(e){const n=(0,t.useRef)(null),{setProactiveHeight:r}=so();return(0,t.useEffect)((()=>{var e;const t=new MutationObserver((()=>{var e;r(null==n||null===(e=n.current)||void 0===e?void 0:e.clientHeight)}));return t.observe(null==n?void 0:n.current,{attributes:!1,childList:!0,characterData:!1,subtree:!0}),r(null==n||null===(e=n.current)||void 0===e?void 0:e.clientHeight),()=>t.disconnect()}),[n,r,e.messages]),t.createElement(Mv,{onClick:e.onClick},t.createElement(Pv,{className:mo()({"Proactive__close is-relative":!0,"Proactive__close--isMobile":E.isMobile})},t.createElement("button",{type:"submit","aria-label":"delete",className:"Proactive__close__button delete",onClick:t=>{t.stopPropagation(),e.onClose()}})),t.createElement(Iv,{className:"Proactive__card",ref:n},t.createElement("div",{className:"Proactive__card-content card-content"},t.createElement("div",{className:"Proactive__messages Messages"},e.messages),e.input)))}Dv.propTypes={onClick:i().func,onClose:i().func,input:i().node,messages:i().arrayOf(i().node)},Dv.defaultProps={onClick:()=>{},onClose:()=>{},input:null,messages:[]};var Av=(0,Ov.withErrorBoundary)((function(){const e=Zo(),{conditional_proactives:n,welcome:r,customData:i}=d(),{isProactiveOpen:o,proactiveMessages:a}=so(),s=Cv();(0,t.useEffect)((()=>{const t=setTimeout((function(){s&&e.events.emit(oa)}),1e3*n.timeout);return()=>clearTimeout(t)}),[n,s,e.events]);const l=(0,t.useCallback)((()=>{e.events.emit(ia),e.storage.set("proactive",{closed:!0})}),[e.events,e.storage]),c=(0,t.useCallback)((()=>{e.events.emit(ca)}),[e.events]),u=(0,t.useMemo)((()=>us(ae.Z.appendUIKey(a||n.messages||r))),[a,r,n.messages]);return o?t.createElement(Lo,{value:!0},t.createElement(Ja,{value:{messagesWrapper:u}},t.createElement(Dv,{onClose:l,onClick:c,messages:u.replaceVariables(i).map(((e,n,r)=>t.createElement(eb,{key:e.uiKey,previousMessage:r[n-1],currentMessage:e,nextMessage:r[n+1]},t.createElement(Jm,{message:e})))),input:t.createElement(fb,null)}))):null}),{FallbackComponent:function(){return null},onError(e,t){console.error("Catched error in ProactiveWrapper"),console.error(e,t)}}),jv=Ui.div`
  z-index: ${({theme:e})=>e.zIndex.LivechatContent};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${e=>e.theme.chat.shadow_length};
  display: none;

  &.is-open {
    display: block;
  }

  #Main {
    border-radius: 5px;
    box-shadow: 0 -1px ${e=>e.theme.chat.shadow_length} 0 rgba(0, 0, 0, 0.2);
  }
`;function Rv(){const{isOpen:e}=so();return t.createElement(Ug,null,t.createElement(vv,{launcher:t.createElement(Sv,null),proactive:t.createElement(Av,null)},t.createElement(Tv,null,t.createElement(jv,{className:mo()({"LivechatContent fade-in":!0,"is-open":e})},t.createElement(xg,null)))))}var Lv=Ui.div`
  right: 0;
  bottom: 0;
  position: fixed;

  width: ${e=>e.theme.launcher.width};
  height: ${e=>e.theme.launcher.height};
  z-index: ${({theme:e})=>e.zIndex.Widget};

  /* open / close state */
  &.is-open {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
  }

  /* Proactive state */
  &.is-proactive {
    width: ${e=>e.theme.proactive.width};
    height: ${e=>e.proactiveHeight?`${e.proactiveHeight+118}px`:e.theme.proactive.height};
    /* height: ${e=>e.theme.proactive.height}; */
    flex-direction: column;
    transform: scale(0.8);
    transform-origin: bottom right;
  }
`;const Fv=Ui(Lv)`
  @media ${go} {
    max-height: 800px;

    right: ${e=>e.theme.widget_offset.vertical};
    bottom: ${e=>e.theme.widget_offset.horizontal};
  }
  &.is-open {
    @media ${go} {
      top: initial;
      width: ${e=>e.theme.widget_chat.width};
      left: initial;
      height: calc(100vh - 2 * ${e=>e.theme.widget_offset.vertical});
    }
  }
`;function zv({children:e}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:i}=so();return t.createElement(Fv,{className:mo()({LandbotLivechat:!0,"is-open":n,"is-proactive":r}),proactiveHeight:i},e)}zv.propTypes={children:i().node.isRequired};class Bv extends pv{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.LIVECHAT)}open(){this.core.events.emit(ca)}close(){this.core.events.emit(ua)}showProactive(e){this.core.events.emit(oa,e)}hideProactive(){this.core.events.emit(ia)}_contentRenderer(){return t.createElement(mv,null,t.createElement(zv,null,t.createElement($g,null,t.createElement(Rv,null))))}}class Uv extends pv{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.NATIVE)}_contentRenderer(){return t.createElement(Wg,null)}}function Wv({children:e,launcher:n,proactive:r}){return t.createElement(t.Fragment,null,e,t.createElement(gv,{className:"LivechatProactive"},r),t.createElement(bv,{className:mo()({LivechatLauncher:!0})},n),t.createElement(ur,null))}Wv.propTypes={children:i().node.isRequired,launcher:i().element,proactive:i().element},Wv.defaultProps={launcher:null,proactive:null};const Vv=Ui.div`
  animation: fade-in 0.8s forwards;
  background-color: rgba(0, 0, 0, 0.7);
`;function qv({onClick:e}){return t.createElement(Vv,{className:"PopupOverlay is-overlay",onClick:e})}function Hv(){const e=Zo(),{isOpen:n}=so();return t.createElement(Ug,null,t.createElement(Wv,{launcher:t.createElement(Sv,null),proactive:t.createElement(Av,null)},t.createElement(Tv,null,t.createElement(jv,{className:mo()({"LivechatContent PopupContent fade-in":!0,"is-open":n})},t.createElement(qv,{onClick:()=>{e.events.emit(ua)}}),t.createElement(xg,null)))))}qv.propTypes={onClick:i().func},qv.defaultProps={onClick:()=>{}};const $v=Ui(Lv)`
  @media ${go} {
    right: ${e=>e.theme.widget_offset.vertical};
    bottom: ${e=>e.theme.widget_offset.horizontal};
  }

  &.is-open {
    @media ${go} {
      right: 0;
      bottom: 0;
    }
  }
`;function Yv({children:e}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:i}=so();return t.createElement($v,{className:mo()({LandbotPopup:!0,"is-open":n,"is-proactive":r}),proactiveHeight:i},e)}Yv.propTypes={children:i().node.isRequired};class Kv extends pv{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.POPUP)}open(){this.core.events.emit(ca)}close(){this.core.events.emit(ua)}showProactive(e){this.core.events.emit(oa,e)}hideProactive(){this.core.events.emit(ia)}_contentRenderer(){return t.createElement(mv,null,t.createElement(Yv,null,t.createElement($g,null,t.createElement(Hv,null))))}}const Gv=Ui.div`
  width: 100%;
  height: 100%;
`;function Qv({children:e}){return t.createElement(Gv,{modeClassName:"LandbotContainer"},e)}Qv.propTypes={children:i().node.isRequired};class Xv extends pv{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.CONTAINER)}_create(){if(this.container=ae.Z.getElement(this.config.container),!this.container)throw new Error("Container element is not set or doesn't exist.",this.config.container,this.container)}_contentRenderer(){return t.createElement(Qv,null,t.createElement($g,null,t.createElement(Wg,null)))}}const Zv=Ui(jv)`
  :not(.is-open) {
    z-index: auto;
    padding: 0;
  }
`;function Jv({isOpen:e,onClick:n,onClickOpensPopup:r,children:i}){return t.createElement(t.Fragment,null,t.createElement(Zv,{className:mo()({"LivechatContent fade-in":!0,"is-block":!0,"is-open":e}),onClick:n},r&&t.createElement(qv,null),i),t.createElement(ur,null))}function ey(){const e=Zo(),{isOpen:n}=so(),r=!E.isDesktop;return t.createElement(Ug,null,t.createElement(Jv,{onClickOpensPopup:r,onClick:!n&&r?()=>e.events.emit(ca,!0):null,isOpen:n},t.createElement(xg,null)))}Jv.propTypes={isOpen:i().bool,onClickOpensPopup:i().bool,onClick:i().func,children:i().node.isRequired},Jv.defaultProps={isOpen:!1,onClickOpensPopup:!1,onClick:()=>{}};const ty=Ui.div`
  width: 100%;
  height: 100%;

  &.is-open {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: ${({theme:e})=>e.zIndex.Widget};
  }
`;function ny({children:e}){const{isOpen:n}=so();return t.createElement(ty,{className:mo()({LandbotContainerPopup:!0,"is-open":n})},e)}ny.propTypes={children:i().node.isRequired};class ry extends pv{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.CONTAINER_POPUP)}_create(){if(this.container=ae.Z.getElement(this.config.container),!this.container)throw new Error("ContainerPopup element is not set or doesn't exist.",this.config.container,this.container)}_contentRenderer(){return t.createElement(mv,null,t.createElement(ny,null,t.createElement($g,null,t.createElement(ey,null))))}}function iy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oy(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?iy(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):iy(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const ay=window.Landbot||{};window.Landbot=oy(oy({},ay),{},{Fullpage:hv,Livechat:Bv,Native:Uv,Popup:Kv,Container:Xv,ContainerPopup:ry,anime:ml})}(),__webpack_exports__}()}));