;/*FB_PKG_DELIM*/

__d("useWWWIGStoriesLogging",["PolarisLogPageView","PolarisReactRedux","polarisStorySelectors","react","useCometRouterState"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(){var a=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getCurrentPostId),b=c("useCometRouterState")(),e=i(null);h(function(){b!=null&&a!=null&&(e==null?void 0:e.current)!=null&&e.current!==a&&c("PolarisLogPageView")(b),e.current=a},[a,b])}g["default"]=a}),98);
__d("PolarisHideNativeAppBanner",["PolarisBatchDOM","PolarisConfig","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a===void 0&&(a=c("emptyFunction")),d("PolarisConfig").isIOS()&&d("PolarisBatchDOM").mutate(function(){window.setTimeout(function(){window&&document.body&&(window.scrollTo(0,document.body.scrollHeight),a())},0)})}g.hideNativeAppBanner_HACK=a}),98);
__d("PolarisFullscreenShell.react",["PolarisBaseShell.react","PolarisHideNativeAppBanner","PolarisToastWrapper.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={shell:{height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0}};a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){d("PolarisHideNativeAppBanner").hideNativeAppBanner_HACK()};e.componentDidUpdate=function(a){a.deviceOrientation!=null&&a.deviceOrientation!==this.props.deviceOrientation&&d("PolarisHideNativeAppBanner").hideNativeAppBanner_HACK()};e.render=function(){var a=this.props,b=a.children;a=a.xstyle;return h.jsxs(c("PolarisBaseShell.react"),{xstyle:[i.shell,a],children:[b,h.jsx(c("PolarisToastWrapper.react"),{})]})};return b}(h.Component);g["default"]=a}),98);
__d("usePolarisStoriesProviderDisableNewPlayback",["PolarisConfig","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(a,b,c,e){var f=a.hasFocus,g=a.isBugNubActive,i=a.isCaptionModalActive,j=a.isCloseFriendsDialogActive,k=a.isExclusiveStoryDialogActive,l=a.isHidden,m=a.isHighlightsTrayActive,n=a.isKeyboardActive,o=a.isModalActive,p=a.isPaused,q=a.isStoryShareSheetActive,r=a.isStoryViewerListActive,s=a.isTransitioning,t=a.isUnfollowModalActive;h(function(){var a=g||k||j||n||o||p||q||r||m||s||t||i||l||d("PolarisConfig").isIOS()&&!f||b!=null||c;e({isPlaybackDisabled:a})},[f,g,j,k,l,n,o,p,q,r,m,s,t,i,c,e,b])}g["default"]=a}),98);
__d("PolarisStoriesProvider.react",["PolarisReactRedux","PolarisRelationshipTypes","PolarisStoriesContext","nullthrows","polarisRelationshipSelectors","polarisStorySelectors","react","usePolarisStoriesProviderDisableNewPlayback","useWWWIGStoriesLogging"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useEffect,l=e.useMemo,m=e.useState;function a(){return j(d("PolarisStoriesContext").StoriesContext)}function b(a){var b=a.children,e=a.initialState,f=c("nullthrows")(d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getCurrentPostAuthor));a=d("PolarisReactRedux").useSelector(function(a){return d("polarisRelationshipSelectors").getRelationship(a.relationships,f.id)});var g=a.followedByViewer.state===d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING,j=d("PolarisReactRedux").useSelector(function(a){return a.displayProperties.viewportHeight});a=l(function(){return babelHelpers["extends"]({},d("PolarisStoriesContext").defaultContext,e,{isInitiallyFollowedByViewer:g,viewerHeight:j})},[g,e,j]);a=m(a);var n=a[0],o=a[1];a=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").isFromPreviousFullscreenSession);var p=d("PolarisReactRedux").useSelector(function(a){return a.stories.isAppAttributionOpen}),q=d("PolarisReactRedux").useSelector(function(a){return a.stories.tappedObjectId}),r=i(function(a){return o(function(b){return babelHelpers["extends"]({},b,a)})},[]),s=l(function(){return babelHelpers["extends"]({},n,{updateStoriesContext:r})},[n,r]);c("useWWWIGStoriesLogging")();var t=a||p;c("usePolarisStoriesProviderDisableNewPlayback")(n,q,t,r);k(function(){r({isResumeOverlayActive:t})},[t,r]);k(function(){r({hasFocus:document.hasFocus(),isHidden:document.hidden!=null?document.hidden:!1})},[r]);return h.jsx(d("PolarisStoriesContext").StoriesContext.Provider,{value:s,children:b})}b.displayName=b.name+" [from "+f.id+"]";e=h.memo(b);g.useStoriesContext=a;g.StoriesContextProvider=e}),98);
__d("PolarisLocationSelectors",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){return(b=b.locations[a])!=null?b:null}}f.getLocation=a}),66);
__d("PolarisNetworkInfo",[],(function(a,b,c,d,e,f){"use strict";function a(){var a=navigator;return a.connection||a.mozConnection||a.webkitConnection}f.getNavigatorConnection=a}),66);
__d("PolarisLocationAvatar.react",["cx","fbt","FastLink","PolarisIGCoreLocationPanoOutlineIcon","PolarisLinkBuilder","PolarisUA","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.backgroundColor;b=b===void 0?"ig-secondary-background":b;var e=a.isLink;e=e===void 0?!0:e;var f=a.locationId,g=a.profilePictureUrl;a=a.size;a=a===void 0?30:a;a={width:a,height:a};var h=g!=null;h=h?j.jsx("img",{alt:"",className:"_abwx",src:g}):j.jsx("div",{className:"_abwy",children:j.jsx(c("PolarisIGCoreLocationPanoOutlineIcon"),{alt:i._("__JHASH__cmMYPzRMRbE__JHASH__"),color:"ig-secondary-text",size:d("PolarisUA").isMobile()?32:44})});return j.jsx("div",{className:"_abwv"+(b==="ig-primary-background"?" _adbd":""),style:a,children:e?j.jsx(c("FastLink"),{className:"_aa8k",href:d("PolarisLinkBuilder").buildLocationLink({id:f,slug:""}),style_DEPRECATED:a,children:h}):j.jsx(j.Fragment,{children:h})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("PolarisCreateStyleRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisCreateStyleRoot.react").__setRef("PolarisCreateStyleRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisGuideStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){b===void 0&&(b="posts");switch(b){case"locations":return a===1?h._("__JHASH__iuyWm8fED0-__JHASH__"):h._("__JHASH__60VpJigGOHP__JHASH__",[h._param("number of places",a)]);case"accounts":return a===1?h._("__JHASH__47P-8Bl9NvD__JHASH__"):h._("__JHASH__5ElcPrjqvD9__JHASH__",[h._param("number of accounts",a)]);case"products":return a===1?h._("__JHASH__RDZQFR-cwtU__JHASH__"):h._("__JHASH__7rG6hfbEwsI__JHASH__",[h._param("number of products",a)]);default:return a===1?h._("__JHASH__lzN9hdw0td9__JHASH__"):h._("__JHASH__-cTeh_8LArx__JHASH__",[h._param("number of posts",a)])}}function b(a,b){return h._("__JHASH__B2gCXHxJMP6__JHASH__",[h._param("guide author full name",a),h._param("guide title",b)])}function c(a){return h._("__JHASH__I-Z0_vOmQGy__JHASH__",[h._param("guide item number",a)])}d=h._("__JHASH__FXeK1SQwnPE__JHASH__");e=h._("__JHASH__rSvh5jaYRHY__JHASH__");f=h._("__JHASH__Z82bBRL6vhx__JHASH__");var i=h._("__JHASH__n-WhMmnOzvD__JHASH__");g.getGuideNumberOfItemsText=a;g.getPageTitleForGuides=b;g.getGuideItemNumberLabel=c;g.GUIDE_ITEM_POST_UNAVAILABLE_HEADER=d;g.GUIDE_ITEM_POST_UNAVAILABLE_BODY=e;g.VIEW_GUIDE_STORY_CTA=f;g.OPTIONS_ALT_TEXT=i}),98);
__d("polarisWebReportSelectors",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.webReport.commentReportMode}function b(a){return a.webReport.userReportMode}function c(a){return a.webReport.category}function d(a){return a.webReport.isProcessing}f.getCommentReportMode=a;f.getUserReportMode=b;f.getReportCategory=c;f.getReportIsProcessing=d}),66);
__d("PolarisAPIRetrieveUserCallSettings",["PolarisInstapi","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function a(){return h.apply(this,arguments)}function h(){h=b("asyncToGeneratorRuntime").asyncToGenerator(function*(){var a=(yield d("PolarisInstapi").apiGet("/api/v1/video_call/retrieve_user_call_settings/"));return a.data});return h.apply(this,arguments)}g.retrieveUserCallSettings=a}),98);
__d("PolarisInternalBadge.react",["cx","fbt","IGDSText.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=i._("__JHASH__BIdw3kKZzDO__JHASH__");function a(){var a=j.jsx(c("IGDSText.react").Body2Emphasized,{color:"webAlwaysWhite",children:k});return j.jsx("div",{className:"_aars",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisGuideConstants",["PolarisSizing","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";a="GuidePage";b=3/4;c=1/1;e=d("PolarisUA").isDesktop()?c:b;f=48;c=40;b={IG_MEDIA:"IG_MEDIA",PRODUCT_IMAGE:"PRODUCT_IMAGE"};g.PAGE_ID=a;g.MAX_WIDTH=d("PolarisSizing").FEED_WIDTH_WIDE;g.COVER_PHOTO_ASPECT_RATIO=e;g.DESKTOP_GUIDE_ITEM_X_MARGINS=f;g.MOBILE_GUIDE_ITEM_X_MARGINS=c;g.GuideMediaTypes=b}),98);
__d("PolarisIgGuideEntryFalcoEvent",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){d("PolarisFalcoLogger").FalcoLogger.log("guide_entry",a(),{},h)}};b=a;g["default"]=b}),98);
__d("PolarisGuideLogger",["PolarisIgGuideEntryFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.entryPoint,d=a.guideID;c("PolarisIgGuideEntryFalcoEvent").log(function(){return{module:"guide_detail",entry_point:b,guide_id:d}})}g.logGuideEntry=a}),98);
__d("PolarisIGCoreAvatar",["cx","FastLink","PolarisIGCoreConstants","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a){var b=a.children,d=a.className,e=a.href;a=a.onClick;switch(!0){case e!=null:return i.jsx(c("FastLink"),{className:d!=null?d:void 0,href:e,onClick:a,children:b});case a!=null:return i.jsx("button",{className:c("joinClasses")(d,"_aag4"),onClick:a,children:b});default:return i.jsx("span",{className:d,children:b})}}function a(a){var b=a.alt,d=a.dangerouslySetClassName,e=a.href,f=a.onClick,g=a.size;g=g===void 0?"medium":g;a=a.src;d=d!=null?d.__className:null;return i.jsx(j,{className:d,href:e,onClick:f,children:i.jsx("img",{alt:b,className:"_aag5",height:c("PolarisIGCoreConstants").AVATAR_SIZES[g],src:a,width:c("PolarisIGCoreConstants").AVATAR_SIZES[g]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("Href",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(typeof a==="object"&&a!=null&&a.url!=null)return{type:"legacy",value:a};else return{type:"modern",value:a}}f.getTypedHref=a}),66);